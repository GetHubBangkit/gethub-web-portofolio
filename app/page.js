import Image from "next/image";
import Link from 'next/link';
import Button from './ui/home/button.jsx';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen scale-y-200 bg-cyan-400">
      <div className="text-center">
        <h1 className="text-white mb-4">Home</h1>
        <Link href="/card1">
          <Button buttonText={ 'Go To Card 1'}/>
        </Link> <br/>
        <Link href="/card2">
        <Button buttonText={ 'Go To Card 2'}/>
        </Link> <br/>
        <Link href="/card3">
        <Button buttonText={ 'Go To Card 3'}/>
        </Link>
      </div>
    </div>
  );
}
