import React from 'react';

const Page = () => {
  return (
    <div className="container mx-auto w-full sm:max-w-md p-10">
      <h1 className="text-black text-center font-bold text-lg">Syarat dan Ketentuan Penggunaan GetHub</h1> <br />
      <section>
        <h1 className="text-black text-center pb-2 font-bold">1. Pendaftaran Akun</h1>
        <section>
          <h5 className="text-black text-center pb-2 ">1.1. Verifikasi Identitas</h5>
          <ul className="text-black list-disc text-left text-sm">
            <li>Semua pengguna yang mendaftar di platform kami diharuskan untuk melakukan verifikasi identitas menggunakan Kartu Tanda Penduduk (KTP) yang masih berlaku.</li>
            <li>Proses verifikasi KTP dilakukan untuk memastikan keamanan dan kepercayaan dalam transaksi di platform ini.</li>
            <li>Pengguna diwajibkan untuk mengunggah foto atau scan KTP yang jelas dan sesuai dengan petunjuk yang diberikan pada halaman verifikasi.</li>
          </ul>
        </section> <br/>
        <section>
          <h5 className="text-black text-center pb-2">1.2. Verifikasi Email</h5>
          <ul className="text-black list-disc text-left text-sm">
            <li>Selain verifikasi KTP, pengguna juga diwajibkan untuk melakukan verifikasi email ketika ingin melakukan bidding project.</li>
            <li>Setelah mendaftar, Anda akan menerima email verifikasi yang berisi tautan untuk mengonfirmasi alamat email Anda.</li>
            <li>Verifikasi email diperlukan untuk memastikan bahwa kami dapat menghubungi Anda untuk keperluan terkait akun dan layanan.</li>
          </ul>
        </section> <br/>
      </section>
      <section>
        <h1 className="text-black text-center pb-2 font-bold">2. Penggunaan Platform</h1>
        <section>
          <h5 className="text-black text-center pb-2">2.1. Ketepatan Informasi</h5>
          <ul className="text-black text-left list-disc text-sm ">
            <li>Anda setuju untuk memberikan informasi yang benar, akurat, dan terbaru saat mendaftar di platform kami.</li>
            <li>Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda dan tidak membagikan informasi login kepada pihak ketiga.</li>
          </ul>
        </section> <br/>
        <section>
          <h5 className="text-black text-center pb-2">2.2. Kepatuhan terhadap Hukum</h5>
          <ul className="text-black text-left list-disc text-sm ">
            <li>Anda setuju untuk mematuhi semua hukum dan peraturan yang berlaku saat menggunakan platform kami.</li>
            <li>Dilarang keras menggunakan platform untuk aktivitas ilegal atau tidak etis.</li>
          </ul>
        </section> <br/>
      </section>
      <section>
        <h1 className="text-black text-center pb-2 font-bold">3. Perlindungan Data Pribadi</h1>
        <section>
          <h5 className="text-black text-center pb-2 ">3.1. Penggunaan Data Pribadi</h5>
          <ul className="text-black text-left list-disc text-sm">
            <li>Kami berkomitmen untuk melindungi privasi Anda. Informasi pribadi yang Anda berikan hanya akan digunakan untuk keperluan verifikasi dan operasional platform.</li>
            <li>Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga.</li>
          </ul>
        </section> <br/>
        <section>
          <h5 className="text-black text-center pb-2">3.2. Keamanan Data</h5>
          <p className="text-black text-left text-sm">Kami menggunakan teknologi enkripsi dan langkah-langkah keamanan lainnya untuk melindungi informasi pribadi Anda dari akses yang tidak sah.</p>
        </section> <br/>
      </section>
      <section>
        <h1 className="text-black text-center pb-2 font-bold">4. Pelanggaran dan Sanksi</h1>
        <section>
          <h5 className="text-black text-center pb-2">4.1. Pelanggaran Syarat dan Ketentuan</h5>
          <p className="text-black text-left text-sm">Jika Anda melanggar salah satu syarat dan ketentuan ini, kami berhak untuk menangguhkan atau menghentikan akun Anda tanpa pemberitahuan sebelumnya.</p>
        </section> <br/>
        <section>
          <h5 className="text-black text-center pb-2">4.2. Penipuan dan Penyalahgunaan</h5>
          <p className="text-black text-center text-sm">Kami memiliki kebijakan nol toleransi terhadap penipuan dan penyalahgunaan. Jika ditemukan aktivitas yang mencurigakan atau melanggar hukum, kami akan melaporkannya kepada pihak berwenang yang berwenang.</p>
        </section> <br/>
      </section>
      <h2 className="text-black text-center pb-2 font-bold">5. Hubungi Kami</h2>
      <section>
        <h5 className="text-black text-center pb-2">5.1. Layanan Pelanggan</h5>
        <p className="text-black text-center text-sm">Jika Anda memiliki pertanyaan atau masalah terkait syarat dan ketentuan ini, silakan hubungi layanan pelanggan kami melalui email: support@GetHub.com.</p>
      </section>
    </div>
  );
};

export default Page;
