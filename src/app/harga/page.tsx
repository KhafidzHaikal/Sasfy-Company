import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function page() {
  return (
    <main>
      <Navbar />
      <div className="ellipse-2 w-[400px] h-[400px] -z-20 absolute left-[-10rem] top-[20rem]"></div>
      <section className="h-screen w-screen flex gap-5 justify-center items-center container">
        <div className="">
            <h1>Pilh Harga Paket</h1>
        </div>
      </section>
      <Footer />
    </main>
  );
}
