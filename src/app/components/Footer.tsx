import React from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container md:flex justify-between gap-3 mb-7">
      <div className="w-3/4">
        <div className="inline-flex items-center -mt-14 -mb-14 -ml-4">
          <Image
            src="/images/5.png"
            width={80}
            height={80}
            sizes="100vh"
            alt="Piranti Logo"
            className="ml-3"
          />
          <Image
            src="/images/2.png"
            width={170}
            height={170}
            sizes="100vh"
            alt="Piranti Logo"
            className="-ml-10"
          />
        </div>
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
      <div className="grid md:grid-cols-2 gap-8 mt-4 md:mt-0">
        <ul>
          <li className="font-bold">Layanan</li>
          <li className="text-sm font-regular mt-4 flex items-center">
            <FaWhatsapp className="mr-2" />
            <Link href={"https://wa.me/+6281911506190"}>Whatapp</Link>
          </li>
          <li className="text-sm font-regular mt-2 flex items-center">
            <MdEmail className="mr-2 md:text-3xl" />
            <Link href={"support@sasfydev.com"}>support@sasfydev.com</Link>
            
          </li>
        </ul>
        <ul>
          <li className="font-bold">Sumber Daya</li>
          <li className="text-sm font-regular mt-4">
            <Link href={"/harga"}>Harga</Link>
          </li>
        </ul>
      </div>
      {/* <div className="">
        <h1 className="font-bold mb-2">
          Tertarik dengan Layanan Kami?
        </h1>
        <div className="group-input w-full flex">
          <input
            type="text"
            className="w-full border rounded-s-xl border-[#1A4D2E] px-2 py-1"
          />
          <button className="border-[3.5px] rounded-e-xl px-2 py-1 border-[#1A4D2E] bg-[#1A4D2E] text-white text-sm">
            Kirim
          </button>
        </div>
        <p className="text-[#ababab] text-[10px] mt-2">
          * Setelah email terkirim, kami segera menghubungi anda{" "}
        </p>
      </div> */}
    </footer>
  );
}
