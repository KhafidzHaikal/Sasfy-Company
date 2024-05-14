/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);
  const [buttonIsAdding, setButtonIsAdding] = useState(new Array(6).fill(true));

  const handleButtonClick = (index: number, increment: number) => {
    if (buttonIsAdding[index]) {
      setValue(value + increment);
      setSum(sum + increment);
    } else {
      setValue(value - increment);
      if (value >= increment) {
        setSum(sum - increment);
      }
    }
    setButtonIsAdding(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <main>
      <Navbar />
      <div className="ellipse-2 w-[400px] h-[400px] -z-20 absolute left-[-10rem] top-[20rem]"></div>
      <section className="gap-5 mt-28 container">
        <div className="">
          <h1 className="font-bold text-2xl lg:text-4xl flex gap-2 my-4 justify-center">
            Pilih <p className="text-[#57A44D]">Harga</p> Paket
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdOutlineWorkspacePremium className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="flex justify-between items-center gap-3">
                <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                  Hosting Premium
                </h1>
                <h2 className="text-md">Rp. 85.000/Bulan</h2>
              </div>
              <p className="text-[#949494] text-sm my-3">
                Kinerja Website menjadi cepat
              </p>
              <p className="text-[#949494] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Id donec orci dui
                pellent esque quam a turpis. Morbi et sem egestas diam. Quis
                pharetra sed augue et eu consequat dignissim.
              </p>
              <hr className="my-3" />
              <button
                className="rounded-2xl bg-[#57A44D] w-full p-2 text-white font-semibold"
                onClick={() => handleButtonClick(0, 85000)}>
                {buttonIsAdding[0] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdOutlineWorkspacePremium className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="flex justify-between items-center gap-3">
                <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                  Hosting Premium
                </h1>
                <h2 className="text-md">Rp. 85.000/Bulan</h2>
              </div>
              <p className="text-[#949494] text-sm my-3">
                Kinerja Website menjadi cepat
              </p>
              <p className="text-[#949494] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Id donec orci dui
                pellent esque quam a turpis. Morbi et sem egestas diam. Quis
                pharetra sed augue et eu consequat dignissim.
              </p>
              <hr className="my-3" />
              <button
                className="rounded-2xl bg-[#57A44D] w-full p-2 text-white font-semibold"
                onClick={() => handleButtonClick(1, 85000)}>
                {buttonIsAdding[1] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdOutlineWorkspacePremium className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="flex justify-between items-center gap-3">
                <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                  Hosting Premium
                </h1>
                <h2 className="text-md">Rp. 85.000/Bulan</h2>
              </div>
              <p className="text-[#949494] text-sm my-3">
                Kinerja Website menjadi cepat
              </p>
              <p className="text-[#949494] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Id donec orci dui
                pellent esque quam a turpis. Morbi et sem egestas diam. Quis
                pharetra sed augue et eu consequat dignissim.
              </p>
              <hr className="my-3" />
              <button
                className="rounded-2xl bg-[#57A44D] w-full p-2 text-white font-semibold"
                onClick={() => handleButtonClick(2, 85000)}>
                {buttonIsAdding[2] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdOutlineWorkspacePremium className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="flex justify-between items-center gap-3">
                <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                  Hosting Premium
                </h1>
                <h2 className="text-md">Rp. 85.000/Bulan</h2>
              </div>
              <p className="text-[#949494] text-sm my-3">
                Kinerja Website menjadi cepat
              </p>
              <p className="text-[#949494] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Id donec orci dui
                pellent esque quam a turpis. Morbi et sem egestas diam. Quis
                pharetra sed augue et eu consequat dignissim.
              </p>
              <hr className="my-3" />
              <button
                className="rounded-2xl bg-[#57A44D] w-full p-2 text-white font-semibold"
                onClick={() => handleButtonClick(3, 85000)}>
                {buttonIsAdding[3] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdOutlineWorkspacePremium className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="flex justify-between items-center gap-3">
                <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                  Hosting Premium
                </h1>
                <h2 className="text-md">Rp. 85.000/Bulan</h2>
              </div>
              <p className="text-[#949494] text-sm my-3">
                Kinerja Website menjadi cepat
              </p>
              <p className="text-[#949494] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Id donec orci dui
                pellent esque quam a turpis. Morbi et sem egestas diam. Quis
                pharetra sed augue et eu consequat dignissim.
              </p>
              <hr className="my-3" />
              <button
                className="rounded-2xl bg-[#57A44D] w-full p-2 text-white font-semibold"
                onClick={() => handleButtonClick(4, 85000)}>
                {buttonIsAdding[4] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdOutlineWorkspacePremium className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="flex justify-between items-center gap-3">
                <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                  Hosting Premium
                </h1>
                <h2 className="text-md">Rp. 85.000/Bulan</h2>
              </div>
              <p className="text-[#949494] text-sm my-3">
                Kinerja Website menjadi cepat
              </p>
              <p className="text-[#949494] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Id donec orci dui
                pellent esque quam a turpis. Morbi et sem egestas diam. Quis
                pharetra sed augue et eu consequat dignissim.
              </p>
              <hr className="my-3" />
              <button
                className="rounded-2xl bg-[#57A44D] w-full p-2 text-white font-semibold"
                onClick={() => handleButtonClick(5,85000)}>
                {buttonIsAdding[5] ? "Tambah" : "Hapus"}
              </button>
            </div>
          </div>
          <h1 className="lg:text-right font-medium text-lg lg:text-xl my-10">
            Estimasi Pembuatan Aplikasi : Rp. <span className="text-[#F6B100] font-bold">{sum}</span>
          </h1>
        </div>
      </section>
      <section className="bg-[#E9FFE6] my-20">
        <div className="container lg:flex justify-between items-center py-20 ">
          <div className="text-[#1A4D2E]">
            <h1 className="lg:text-[42px] md:text-3xl text-2xl md:leading-[3rem] lg:leading-[4rem]  font-bold">
              Anda dapat Membuat Paket Sesuai Kebutuhan
            </h1>
            <p className="text-sm lg:text-md my-5">
              Anda dapat Customer Paket dengan memilih sendiri isi paket
              kemudian mendiskusikannya dengan kami.
            </p>
          </div>
          <button className="rounded-3xl border px-4 py-3 bg-white font-bold text-[#57A44D] w-full lg:w-1/6">
            <Link href={"https://wa.me/+6281911506190"}>Buat Paket</Link>
          </button>
        </div>
      </section>
      <section className="container my-20">
        <h1 className="lg:text-[42px] md:text-3xl text-2xl md:leading-[3rem] lg:leading-[4rem] text-center font-bold">
          Kami Juga Menyediakan <span className="text-[#57A44D]">Template</span>{" "}
        </h1>
        <p className="text-sm lg:text-md text-center mb-7">
          Hubungi kami untuk lihat lebih banyak Template lainnya.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="shadow-lg bg-white rounded-xl">
            <Image
              src="/images/fotograper.png"
              width={0}
              height={0}
              sizes="100vh"
              alt="Fotographer"
              className="w-full"
            />
            <div className="p-3">
              <hr className="my-3" />
              <h1 className="font-bold text-[#1A4D2E] my-3 text-center">
                Jasa Fotografer
              </h1>
              <hr className="my-3" />
              <div className="flex gap-2">
                <button className="rounded-2xl border-2 px-4 py-2 bg-white text-[#57A44D] font-semibold w-full">
                  Lihat Template
                </button>
                <button className="rounded-2xl border-2 px-4 py-2 bg-white text-[#57A44D] font-semibold w-full">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-lg bg-white rounded-xl">
            <Image
              src="/images/furniture.png"
              width={0}
              height={0}
              sizes="100vh"
              alt="Furniture"
              className="w-full"
            />
            <div className="p-3">
              <hr className="my-3" />
              <h1 className="font-bold text-[#1A4D2E] my-3 text-center">
                JFurniture
              </h1>
              <hr className="my-3" />
              <div className="flex gap-2">
                <button className="rounded-2xl border-2 px-4 py-2 bg-white text-[#57A44D] font-semibold w-full">
                  Lihat Template
                </button>
                <button className="rounded-2xl border-2 px-4 py-2 bg-white text-[#57A44D] font-semibold w-full">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-lg bg-white rounded-xl">
            <Image
              src="/images/Finance.png"
              width={0}
              height={0}
              sizes="100vh"
              alt="Finansial"
              className="w-full"
            />
            <div className="p-3">
              <hr className="my-3" />
              <h1 className="font-bold text-[#1A4D2E] my-3 text-center">
                Jasa Finansial
              </h1>
              <hr className="my-3" />
              <div className="flex gap-2">
                <button className="rounded-2xl border-2 px-4 py-2 bg-white text-[#57A44D] font-semibold w-full">
                  Lihat Template
                </button>
                <button className="rounded-2xl border-2 px-4 py-2 bg-white text-[#57A44D] font-semibold w-full">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
