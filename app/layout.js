"use client";

import Header from "./Header";
import Fotter from "./Fotter";



export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
          <Header />
          
          {children}
          
      </body>
    </html>
  );
}
