// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Page from "./page";
// import Hello from "@/components/Hello";
// import About from "@/components/About";
// import Services from "@/components/Services";
// import Prepare from "@/components/Prepare";
// import Footer from "@/components/Footer";
// import Contact from "@/components/Contact";
// import Project from "@/components/Project";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "My portfolio",
//   description: "dhruv portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}

//           <Header />
//           <Hello />
//           <About />
//           <Services />
//           <Prepare />
//           <Contact />
//           <Project />
//           <Footer />
//       </body>
//     </html>
//   );
// }

import Header from "@/components/Header";
import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dhruv Portfolio",
  description: "Software developer",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
