'use client';

import React, { useEffect, useState, useRef } from 'react';
import getDataContractDigital from '../../api/getDataContractDigital';
import NotFoundUser from '../../components/section/notFound';
import { useQRCode } from 'next-qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// QRCodeCanvas Component
const QRCodeCanvas = ({ text, options }) => {
  const { Canvas } = useQRCode();
  return <Canvas text={text} options={options} />;
};

const Page = ({ params }) => {
  const { keyword } = params;
  const [contractData, setContractData] = useState(null);
  const [error, setError] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const contractRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataContractDigital(keyword);
        if (response.error_code) {
          setError(response.message);
        } else {
          setContractData(response.data);
        }
      } catch (err) {
        setError('Terjadi kesalahan saat mengambil data');
      }
    };

    fetchData();
  }, [keyword]);

  useEffect(() => {
    if (contractData && contractRef.current) {
      const images = contractRef.current.querySelectorAll('img');
      let loadedCount = 0;
      const checkImagesLoaded = () => {
        loadedCount += 1;
        console.log(`Image ${loadedCount} loaded`);
        if (loadedCount === images.length) {
          console.log("All images loaded");
          setImagesLoaded(true);
        }
      };
  
      images.forEach((img) => {
        if (img.complete) {
          checkImagesLoaded();
        } else {
          img.onload = checkImagesLoaded;
          img.onerror = checkImagesLoaded;
        }
      });
    }
  }, [contractData]);
  

  const generatePDF = () => {
    if (imagesLoaded) {
      const input = contractRef.current;
      const printButton = document.querySelector('#print-button');
  
      // Menyembunyikan tombol sebelum mengambil gambar
      if (printButton) {
        printButton.style.display = 'none';
      }
  
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png'); // Menghasilkan data URL dari canvas
        const pdf = new jsPDF('p', 'mm', 'a4');
  
        // Mendapatkan dimensi dari canvas
        const contentWidth = canvas.width;
        const contentHeight = canvas.height;
  
        // Menentukan ukuran PDF
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
  
        // Menentukan rasio skala untuk menyesuaikan konten ke satu halaman PDF
        const scale = Math.min(pdfWidth / contentWidth, pdfHeight / contentHeight);
  
        const scaledWidth = contentWidth * scale ;
        const scaledHeight = contentHeight * scale;
  
        // Menghitung margin untuk memusatkan konten
        const marginX = (pdfWidth - scaledWidth) / 2;
        const marginY = (pdfHeight - scaledHeight) / 2;
  
        // Menambahkan gambar ke PDF dengan ukuran yang diskalakan dan dipusatkan
        pdf.addImage(imgData, 'PNG', marginX, marginY, scaledWidth, scaledHeight);
  
        pdf.save('contract.pdf');
        
        // Menampilkan kembali tombol setelah proses pengambilan gambar selesai
        if (printButton) {
          printButton.style.display = 'block';
        }
      }).catch((error) => {
        console.error("Error generating PDF: ", error);
        // Menampilkan kembali tombol jika terjadi kesalahan
        if (printButton) {
          printButton.style.display = 'block';
        }
      });
    } else {
      alert('Images are not loaded yet');
    }
  };
  

  if (error) {
    return <NotFoundUser message={error} />;
  }

  if (!contractData) {
    return <div>Loading...</div>; // Or a better loading indicator
  }

  // Function to format number to Rupiah
  const formatToRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  // Sort milestones by task_number
  const sortedMilestones = contractData.milestone.sort((a, b) => a.task_number - b.task_number);

  return (
    <div className="container mx-auto p-4 my-4 w-full sm:w-full md:w-1/2 lg:w-1/2 shadow-xl shadow-black" ref={contractRef}>
      <div id="contract-content" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className='pb-8'>
          <img src="https://storage.googleapis.com/gethub_bucket/gethub-logo/gethub-logo.png" alt="GetHub Logo" className="h-10 w-auto" />
        </div>
        <h1 className="text-2xl font-bold pb-12 text-black text-center">Kontrak Digital GetHub</h1>
        <p className="text-black mb-4">Kontrak Proyek ini dibuat dan diberlakukan sejak <strong>{contractData.date_started}</strong>, oleh dan antara:</p>

        <h1 className=" text-black mb-2"><strong>Pemilik Proyek:</strong> </h1>
        <p className='text-black mb-2'> {contractData.project_owner_name} seorang individu/komunitas</p>
        <h1 className=" text-black mb-2"><strong>Freelancer :</strong> </h1>
        <p className='text-black mb-4'> {contractData.freelancer_name}, seorang individu/komunitas</p>

        <h2 className=" font-bold mb-2 text-black">1. Judul Proyek</h2>
        <p className="text-black mb-4">{contractData.project_title}</p>

        <h2 className=" font-bold mb-2 text-black">2. Deskripsi Proyek</h2>
        <p className="text-black mb-4">{contractData.project_description}</p>

        <h2 className=" font-bold mb-2 text-black">3. Tenggat Waktu</h2>
        <p className="text-black mb-4">Proyek harus diselesaikan pada kurun waktu <strong> {contractData.min_deadline} </strong>  hingga <strong> {contractData.max_deadline}</strong></p>

        <h2 className=" font-bold mb-2 text-black">4. Anggaran</h2>
        <p className="text-black mb-4">Total anggaran untuk proyek ini adalah <strong>{formatToRupiah(contractData.budget)}</strong></p>

        <h2 className=" font-bold mb-2 text-black ">5. Tonggak Proyek (Milestone)</h2>
        <p className='text-black mb-4'> Proyek akan dibagi ke dalam tonggak-tonggak berikut, dengan tenggat waktu yang
          sesuai : </p>
        <div className='ml-10'>
          {sortedMilestones.map((milestone, index) => (
            <ul key={index} className="mb-4 list-disc">
              <li className=" font-semibold text-black mb-2">Tonggak {milestone.task_number}:</li>
              <p className="text-black">Deskripsi: {milestone.task_description}</p>
            </ul>
          ))}
        </div>
        <h2 className=" font-bold mb-2 text-black">6. Syarat dan Ketentuan</h2>
        <ul className="list-disc pl-6 text-black">
          <li className="mb-2">Freelancer setuju untuk menyelesaikan proyek sesuai dengan spesifikasi dan jadwal yang diuraikan di atas.</li>
          <li className="mb-2">Pemilik Proyek setuju untuk menyediakan semua informasi dan dukungan yang diperlukan kepada Freelancer untuk keberhasilan penyelesaian proyek.</li>
          <li className="mb-2">Pembayaran akan dilakukan setelah proyek diselesaikan dan memenuhi semua Tonggak Proyek (Milestone).</li>
          <li className="mb-2">Setiap perubahan pada ruang lingkup proyek atau tenggat waktu harus disetujui oleh kedua belah pihak secara tertulis seperti yang ada di dalam kontrak ini.</li>
          <li>Jika pemilik proyek melakukan perubahan yang tidak sesuai dengan milestone maka hal tersebut diluar tanggung jawab Freelancer.</li>
        </ul>

        <div className="mt-8 flex flex-col ">
          <div className='flex justify-end items-center '>

          </div>
          <div className='flex flex-row  justify-between'>
            <div className="flex flex-col items-center text-center justify-center align-center">
              <div className='h-10'></div>
              <p className="text-black">Tanda Tangan</p>
              <QRCodeCanvas text={contractData.project_owner_name} options={{ level: 'M', margin: 7, scale: 1, width: 100, color: { dark: '#000000FF', light: '#0000' } }} />
              <p className="text-black">{contractData.project_owner_name}</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center align-center">
              <p className="text-black pb-5">{contractData.date_started}</p>
              <p className="text-black">Tanda Tangan</p>
              <QRCodeCanvas text={contractData.freelancer_name} options={{ level: 'M', margin: 7, scale: 1, width: 100, color: { dark: '#000000FF', light: '#0000' } }} />
              <p className="text-black">{contractData.freelancer_name}</p>
            </div>
          </div>
        </div>
      </div>
      <button id="print-button" onClick={generatePDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Cetak PDF
      </button>

    </div>
  );
};

export default Page;
