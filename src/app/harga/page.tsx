/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { MdDomain, MdAppSettingsAlt } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import { SiLibreofficewriter } from "react-icons/si";
import { TiVendorAndroid } from "react-icons/ti";

import Link from "next/link";
import Image from "next/image";

export default function page() {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);
  // const [buttonIsAdding, setButtonIsAdding] = useState(new Array(6).fill(true));

  // const handleButtonClick = (index: number, increment: number) => {
  //   if (buttonIsAdding[index]) {
  //     setValue(value + increment);
  //     setSum(sum + increment);
  //   } else {
  //     setValue(value - increment);
  //     if (value >= increment) {
  //       setSum(sum - increment);
  //     }
  //   }
  //   setButtonIsAdding(prevState => {
  //     const newState = [...prevState];
  //     newState[index] = !newState[index];
  //     return newState;
  //   });
  // };
  const [buttonStates, setButtonStates] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
  });
  const handleButtonClick = (index: number, increment: number) => {
    setButtonStates({ ...buttonStates, [index]: !buttonStates[index] });
    if (buttonStates[index]) {
      setValue(value + increment);
      setSum(sum + increment);
    } else {
      setValue(value - increment);
      if (value >= increment) {
        setSum(sum - increment);
      }
    }
  };

  const buttonStyles = {
    backgroundColor: "#57A44D",
    color: "white",
    padding: "4px",
    borderRadius: "3rem",
    fontWeight: "semibold",
    width: "100%",
  };

  const getButtonBackgroundColor = (index: number) =>
    buttonStates[index] ? "#57A44D" : "#FF0000";

  const formattedSum = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(sum);

  return (
    <main>
      <Navbar />
      <div className="ellipse-2 w-[400px] h-[400px] -z-20 absolute left-[-10rem] top-[20rem]"></div>
      <section className="gap-5 mt-28 container">
        <div className="">
          <h1 className="font-bold text-2xl lg:text-4xl flex gap-2 my-4 justify-center">
            Pilih <p className="text-[#57A44D]">Harga</p> Paket
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <RiSecurePaymentFill className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    Payment Gateaway
                  </h1>
                  <div className="">
                    <p className="text-sm">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      2.500.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-7 md:h-16 lg:h-[3.25rem]">
                  Kami menyediakan fitur pembayaran menggunakan QRIS generated.
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(0),
                }}
                onClick={() => handleButtonClick(0, 2500000)}>
                {buttonStates[0] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <FaStore className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    E-Commerce
                  </h1>
                  <div className="">
                    <p className="text-sm">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      6.000.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-7 h-16">
                  Pembuatan toko online yang komprehensif dan cepat sebagai
                  solusi penjualan serta pemasaran anda.
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(1),
                }}
                onClick={() => handleButtonClick(1, 6000000)}>
                {buttonStates[1] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdDomain className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    Domain & Hosting
                  </h1>
                  <div className="">
                    <p className="text-sm">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      600.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-6 h-16">
                  Domain dan hosting untuk aplikasi atau website anda.
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(3),
                }}
                onClick={() => handleButtonClick(3, 600000)}>
                {buttonStates[3] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <IoIosApps className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    ERP Software
                  </h1>
                  <div className="">
                    <p className="text-sm mt-2 md:mt-0 lg:mt-0">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      30.000.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-7 h-16">
                  Inovasi digital sebagai efisiensi masalah bisnis anda.
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(4),
                }}
                onClick={() => handleButtonClick(4, 30000000)}>
                {buttonStates[4] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <IoShareSocialSharp className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    Social Media Management
                  </h1>
                  <div className="">
                    <p className="text-sm mt-2 md:mt-0 lg:mt-0">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      5.000.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-7 h-[3.25rem]">
                  Konten Tiktok dan Konten Instagram.
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(5),
                }}
                onClick={() => handleButtonClick(5, 5000000)}>
                {buttonStates[5] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <SiLibreofficewriter className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    Business Starter
                  </h1>
                  <div className="">
                    <p className="text-sm mt-2 md:mt-0 lg:mt-0">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      6.000.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-7 h-16">
                  Company Profile, ERP Sederhana, Social Media Profiling,
                  Perlengkapan Administrasi Bisnis (Invoice, Berita Acara,
                  MoU,dll)
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(6),
                }}
                onClick={() => handleButtonClick(6, 6000000)}>
                {buttonStates[6] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <TiVendorAndroid className="mx-auto text-3xl text-[#57A44D]" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    Android Apps
                  </h1>
                  <div className="">
                    <p className="text-sm mt-2 md:mt-0 lg:mt-0">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      10.000.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-7 h-16">
                  Android apps untuk kebutuhan bisnis maupun mobilitas yang
                  lebih mudah untuk bisnis anda.
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(7),
                }}
                onClick={() => handleButtonClick(7, 10000000)}>
                {buttonStates[7] ? "Tambah" : "Hapus"}
              </button>
            </div>
            <div className="shadow-lg p-3 bg-white rounded-xl">
              <MdAppSettingsAlt className="mx-auto text-3xl text-[#57A44D] w-10" />
              <hr className="my-3" />
              <div className="h-36">
                <div className="flex justify-between gap-3">
                  <h1 className="font-bold text-[20px] text-[#1A4D2E]">
                    IOS & Android
                  </h1>
                  <div className="">
                    <p className="text-sm mt-2 md:mt-0 lg:mt-0">Mulai dari</p>
                    <p className="text-xl font-bold text-[#57A44D] mt-2 md:mt-0">
                      20.000.000
                    </p>
                  </div>
                </div>
                <p className="text-[#949494] text-[12px] mt-7 h-[3.25rem]">
                  Aplikasi yang bisa digunakan diseluruh device android maupun
                  IOS.
                </p>
              </div>
              <hr className="my-3" />
              <button
                style={{
                  ...buttonStyles,
                  backgroundColor: getButtonBackgroundColor(8),
                }}
                onClick={() => handleButtonClick(8, 20000000)}>
                {buttonStates[8] ? "Tambah" : "Hapus"}
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-xl p-3 bg-white mt-7 flex justify-between w-full">
          <h1 className="text-md font-normal">Estimasi Harga Aplikasi :</h1>
          <span className="font-bold"> {formattedSum}</span>
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
        <h1 className="lg:text-[42px] md:text-3xl text-[#57A44D] text-2xl md:leading-[3rem] lg:leading-[4rem] text-center font-bold">
          PORTOPOLIO
        </h1>
        <p className="text-sm lg:text-md text-center mb-8 mt-4">
          Sasfy perusahaan pembuatan software terdepan, menawarkan berbagai
          macam solusi perangkat lunak yang dirancang untuk memenuhi kebutuhan
          bisnis dari berbagai skala.
        </p>
        <div className="grid lg:grid-cols-2 gap-5 mt-4">
          <div className="shadow-lg p-4 bg-white">
            <h1 className="font-bold text-center text-[24px] mb-4">
              Registrasi Form Pertamina
            </h1>
            <div className="overflow-hidden mx-auto">
              <Image
                src={"/images/porto-sasfy-1.png"}
                width={500}
                height={500}
                sizes="100vh"
                alt="Registrasi Pertamina"
                className="mx-auto hover:scale-110 duration-500 transition-transform lg:h-72"
              />
            </div>
            <p className="mt-4 text-sm">
              Aplikasi Registration Form Pertamina adalah platform digital untuk
              mendaftar ke acara atau program yang diselenggarakan oleh
              Pertamina.
            </p>
          </div>
          <div className="shadow-lg p-4 bg-white">
            <h1 className="font-bold text-center text-[24px] mb-4">
              Sasfy Dev
            </h1>
            <Link href={"https://www.sandanggroup.com/sasfy"}>
              <div className="overflow-hidden mx-auto">
                <Image
                  src={"/images/porto-sasfy-3.png"}
                  width={500}
                  height={500}
                  sizes="100vh"
                  alt="Sasfy Dev"
                  className="mx-auto hover:scale-110 duration-500 transition-transform lg:h-72"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm">
              Sasfy perusahaan pembuatan software terkemuka, menawarkan solusi
              perangkat lunak yang dirancang untuk membantu Anda mencapai tujuan
              Anda.
            </p>
          </div>
          <div className="shadow-lg p-4 bg-white">
            <h1 className="font-bold text-center text-[24px] mb-4">
              Sandang Group Web
            </h1>
            <Link href={"https://www.sandanggroup.com/"}>
              <div className="overflow-hidden mx-auto">
                <Image
                  src={"/images/porto-sasfy-5.png"}
                  width={500}
                  height={500}
                  sizes="100vh"
                  alt="Sandang Group"
                  className="mx-auto hover:scale-110 duration-500 transition-transform lg:h-72"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm">
              Sandang Group bukan sekadar perusahaan biasa, kami adalah
              komunitas kreatif yang menyatukan hasrat mereka untuk menciptakan
              pengalaman luar biasa bagi Anda.
            </p>
          </div>
          <div className="shadow-lg p-4 bg-white">
            <h1 className="font-bold text-center text-[24px] mb-4">
              Plain Habit Web
            </h1>
            <Link href={"https://www.sandanggroup.com/plain-habit"}>
              <div className="overflow-hidden mx-auto">
                <Image
                  src={"/images/porto-sasfy-4.png"}
                  width={500}
                  height={500}
                  sizes="100vh"
                  alt="Plain Habit"
                  className="mx-auto hover:scale-110 duration-500 transition-transform lg:h-72"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm">
              Plain Habit merupakan interpretasi dari gabungan antara
              kesederhanaan dan kebiasaan. Plain merupakan cerminan dari
              kesederhanaan namun tetap elegan, sedangkan Habit menunjukkan
              konsistensi dalam mempertahankan kesederhanaan itu sendiri.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
