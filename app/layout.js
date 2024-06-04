  import { Inter } from "next/font/google";
  import { Suspense } from 'react'
  import Skeleton from 'react-loading-skeleton'
  import 'react-loading-skeleton/dist/skeleton.css'
  import "./globals.css";
  import Loading from './Loading';

  

  export const metadata = {
    title: "GetHub Card ",
    description: "Generated by Gethub",
  };

  export default function RootLayout({ children }) {
    return (
      
      <html lang="en">
        <body >
          <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
        </body>
      </html>
      
    );
  }
