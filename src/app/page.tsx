"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Navbar from "./components/Navbar";
import { TbChartCircles } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="ellipse-1 w-[250px] xl:w-[30rem] h-[400px] -z-20 absolute lg:left-[60rem]"></div>
      <div className="ellipse-2 w-[400px] h-[400px] -z-20 absolute left-[-10rem] top-[20rem]"></div>
      <div className="container">
        <section
          id="jumbotron"
          className="flex gap-5 justify-center items-center h-screen">
          <div id="text">
            <h1 className="font-bold text-2xl lg:text-5xl align-top">
              Kami di sini untuk Meningkatkan Produktivitas Anda
            </h1>
            <p className="mt-4">
              Fokus kami untuk memberikan solusi dan inovasi yang akan membuat
              bisnis Anda menguntungkan dengan keahlian kami dalam pemrograman
              perangkat lunak khusus dan otomatisasi perangkat lunak.
            </p>
            <button className="bg-[#FFC728] rounded-[40px] px-5 py-3 text-white shadow-md mt-7">
              <Link href={""}>Mulai Sekarang</Link>
            </button>
          </div>
          <Image
            src="https://i.ibb.co/kqgY1vQ/Image-Jumbotron.png"
            width={0}
            height={0}
            sizes="100vh"
            alt="Jumbotron"
            className="hidden lg:flex w-1/2 h-1/2"
          />
        </section>
        <section className="mb-7">
          <div className="lg:flex items-baseline gap-5 justify-between text-center lg:text-left">
            <h1 className="font-bold text-xl lg:text-3xl">
              Kenapa{" "}
              <span className="text-[#57A44D]">Harus Membuat Website</span>{" "}
              dengan Kami?
            </h1>
            <p className="mt-4 md:lg:xl:mt-0">
              Banyak Keunggulan yang bisa anda dapatkan bersama dengan
              memberikan kepercayaan kepada kami.{" "}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-3 mt-5">
            <div className="shadow-xl p-3 rounded-lg w-full bg-white">
              <div className="flex">
                <TbChartCircles className="text-4xl rotate-45" />
                <TbChartCircles className="-ml-5 text-4xl rotate-45" />
              </div>
              <h1 className="font-bold text-xl lg:text-3xl my-6">
                Lorem Ipsum
              </h1>
              <p>
                dolor sit amet consectetur. At venenatis lectus aliquam nunc sed
                hac sed malesuada. Posuere porta in at nisi elementum non.
              </p>
              <button className="rounded-full border-2 p-1 mt-6">
                <Link href={""}>
                  <IoIosArrowRoundForward />
                </Link>
              </button>
            </div>
            <div className="shadow-xl p-3 rounded-lg w-full bg-white">
              <div className="flex">
                <TbChartCircles className="text-4xl rotate-45" />
                <TbChartCircles className="-ml-5 text-4xl rotate-45" />
              </div>
              <h1 className="font-bold text-xl lg:text-3xl my-6">
                Lorem Ipsum
              </h1>
              <p>
                dolor sit amet consectetur. At venenatis lectus aliquam nunc sed
                hac sed malesuada. Posuere porta in at nisi elementum non.
              </p>
              <button className="rounded-full border-2 p-1 mt-6">
                <Link href={""}>
                  <IoIosArrowRoundForward />
                </Link>
              </button>
            </div>
            <div className="shadow-xl p-3 rounded-xl lg:rounded-tr-[179px] w-full bg-white">
              <div className="flex">
                <TbChartCircles className="text-4xl rotate-45" />
                <TbChartCircles className="-ml-5 text-4xl rotate-45" />
              </div>
              <h1 className="font-bold text-xl lg:text-3xl my-6">
                Lorem Ipsum
              </h1>
              <p>
                dolor sit amet consectetur. At venenatis lectus aliquam nunc sed
                hac sed malesuada. Posuere porta in at nisi elementum non.
              </p>
              <button className="rounded-full border-2 p-1 mt-6">
                <Link href={""}>
                  <IoIosArrowRoundForward />
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#FFF9DE] text-center py-10">
        <div className="container">
          <h1 className="text-3xl font-bold">
            Penawaran <span className="text-[#F8C308]">Terbaik</span> untuk Anda
          </h1>
          <p className="text-sm mt-2">
            Penawaran terbaik yang kami berikan hanya untuk anda.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4 mt-10 mx-auto">
            <div className="shadow-xl rounded-[25px] bg-white p-4">
              <h1 className="font-bold text-2xl text-[#1A4D2E]">Pemula</h1>
              <p className="my-5">
                Rp.{" "}
                <span className="text-4xl font-bold text-[#1A4D2E]">500</span>{" "}
                Rb/Tahun
              </p>
              <div className="bg-[#FFF9DE] rounded-[25px]">
                <ul>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> 5 Halaman
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> 2 Hari
                    Pengerjaan
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Domain
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Hosting
                    1 GB
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Email
                    Bisnis
                  </li>
                </ul>
                <button className="rounded-3xl bg-white px-4 py-2 mb-4 w-1/3 shadow-lg">
                  <Link href={""}>Detail</Link>
                </button>
              </div>
            </div>
            <div
              id="rectangle"
              className="shadow-xl rounded-[25px] bg-white p-4 ">
              <h1 className="font-bold text-2xl text-white">Pro</h1>
              <p className="my-5 text-white">
                Rp. <span className="text-4xl font-bold text-white">2.5</span>{" "}
                Jt/Tahun
              </p>
              <div className="bg-white rounded-[25px]">
                <ul>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> 5 Halaman
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> 2 Hari
                    Pengerjaan
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Domain
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Hosting
                    1 GB
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Email
                    Bisnis
                  </li>
                </ul>
                <button className="rounded-3xl bg-[#FFB428] text-white px-4 py-2 mb-4 w-1/3 shadow-lg">
                  <Link href={""}>Detail</Link>
                </button>
              </div>
            </div>
            <div className="shadow-xl rounded-[25px] bg-white p-4">
              <h1 className="font-bold text-2xl text-[#1A4D2E]">Ekstrim</h1>
              <p className="my-5">
                Rp.{" "}
                <span className="text-4xl font-bold text-[#1A4D2E]">5.5</span>{" "}
                Jt/Tahun
              </p>
              <div className="bg-[#FFF9DE] rounded-[25px]">
                <ul>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> 5 Halaman
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> 2 Hari
                    Pengerjaan
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Domain
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Hosting
                    1 GB
                  </li>
                  <li className="flex p-3 items-center gap-4 font-medium">
                    <FaCircleCheck className="text-[#22A39F]" /> Gratis Email
                    Bisnis
                  </li>
                </ul>
                <button className="rounded-3xl bg-white px-4 py-2 mb-4 w-1/3 shadow-lg">
                  <Link href={""}>Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-10">
        <h1 className="text-3xl font-bold">
          Apa <span className="text-[#F8C308]">Tanggapan</span> Mereka Tentang
          Kami?
        </h1>
        <Carousel className="mt-7">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div id="card-response" className="p-5">
                <div className="flex justify-between mb-5">
                  <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
                  <div className="rounded-full w-5 h-5 bg-black"></div>
                </div>
                <p>
                  dolor sit amet consectetur. At venenatis lectus aliquam nunc
                  sed hac sed malesuada. Posuere porta in at nisi elementum non.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div id="card-response" className="p-5">
                <div className="flex justify-between mb-5">
                  <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
                  <div className="rounded-full w-5 h-5 bg-black"></div>
                </div>
                <p>
                  dolor sit amet consectetur. At venenatis lectus aliquam nunc
                  sed hac sed malesuada. Posuere porta in at nisi elementum non.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div id="card-response" className="p-5">
                <div className="flex justify-between mb-5">
                  <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
                  <div className="rounded-full w-5 h-5 bg-black"></div>
                </div>
                <p>
                  dolor sit amet consectetur. At venenatis lectus aliquam nunc
                  sed hac sed malesuada. Posuere porta in at nisi elementum non.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div id="card-response" className="p-5">
                <div className="flex justify-between mb-5">
                  <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
                  <div className="rounded-full w-5 h-5 bg-black"></div>
                </div>
                <p>
                  dolor sit amet consectetur. At venenatis lectus aliquam nunc
                  sed hac sed malesuada. Posuere porta in at nisi elementum non.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div id="card-response" className="p-5">
                <div className="flex justify-between mb-5">
                  <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
                  <div className="rounded-full w-5 h-5 bg-black"></div>
                </div>
                <p>
                  dolor sit amet consectetur. At venenatis lectus aliquam nunc
                  sed hac sed malesuada. Posuere porta in at nisi elementum non.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
      <hr className="bg-[#1A4D2E] mb-7"/>
      <Footer />
    </main>
  );
}
