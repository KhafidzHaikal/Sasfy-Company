import React from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container grid md:grid-cols-2 lg:xl:grid-cols-4 gap-3 mb-7">
      <div className="">
        <Image
          src="https://i.ibb.co/37kdf5k/Frame-1953.png"
          width={200}
          height={200}
          sizes="100vh"
          alt="Piranti Logo"
          className="ml-3"
        />
        <p className="text-[12px] font-medium my-4">
          Kami adalah jasa website profesional yang telah dipercaya oleh banyak
          usaha, baik produk / jasa, untuk membantu marketing digital agency.{" "}
        </p>
        <div className="flex gap-5">
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>
      <ul>
        <li className="font-bold">Layanan</li>
        <li className="text-sm font-regular mt-2">Kontak Kami</li>
        <li className="text-sm font-regular mt-2">Blog</li>
        <li className="text-sm font-regular mt-2">Pusat Layanan</li>
      </ul>
      <ul>
        <li className="font-bold">Sumber Daya</li>
        <li className="text-sm font-regular mt-2">Harga</li>
        <li className="text-sm font-regular mt-2">FAQ</li>
      </ul>
      <div className="">
        <h1 className="font-bold text-lg mb-2">Tertarik dengan Layanan Kami?</h1>
        <div className="group-input w-full flex">
            <input type="text" className="w-full border rounded-s-xl border-[#1A4D2E] px-2 py-1"/>
            <button className="border-[3.5px] rounded-e-xl px-2 py-1 border-[#1A4D2E] bg-[#1A4D2E] text-white text-sm">Kirim</button>
        </div>
        <p className="text-[#ababab] text-[10px] mt-2">* Setelah email terkirim, kami segera menghubungi anda </p>
      </div>
    </footer>
  );
}
