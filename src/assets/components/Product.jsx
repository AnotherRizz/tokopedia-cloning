import React from "react";
import Button from "./utility/Button"; // Pastikan kamu sudah membuat komponen Button
import Link from "./utility/Link";
import Banner from "./utility/Banner";
import Card from "./utility/Card";
import { products1 } from "../data/product/DataProducts";

function limitWords(text, wordLimit) {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

const ProductCarousel = () => {
  return (
    <section className=" w-full px-4 py-3 mt-14">
      <div className=" flex justify-start gap-4 mb-5 items-end">
        <h1 className="text-3xl font-bold">Belanja Nyaris Gratis!</h1>
        <p className=" text-slate-500 text-lg">Ambil Produknya Sekarang~</p>
        <Link variant="text-green-500 font-bold text-lg">Lihat Semua</Link>
      </div>
      <div className="flex h-screen w-full">
        <Banner variant="h-[70%]  bg-purple-300 absolute z-10 px-20 py-32">
          <h2 className="text-3xl text-slate-800 font-bold">
            Semua <br /> Nyaris <br /> GRATIS
          </h2>
          <p className="text-xl text-slate-800 font-semibold">Pakai Kupon</p>
          <p className="text-2xl font-extrabold text-slate-800 flex items-center">
            Rp <span className="text-6xl mx-1">50</span> rb*
          </p>
          <Button variant="bg-white text-black px-4 py-2 rounded-full my-3 font-semibold">
            Belanja yuk!
          </Button>
          <p className="text-xs text-slate-600">*S&K Berlaku</p>
        </Banner>
        {/* Bagian Banner Promo */}

        {/* Bagian Produk */}
        <div className="flex overflow-x-scroll gap-4 px-4 z-10 max-w-7xl ms-auto ">
          {products1.map((product) => (
            <Card
              key={product.id}
              variant="rounded-lg w-[40%] h-[60%] bg-white mt-10">
              <img
                src={product.img}
                alt={product.title}
                className="w-full object-contain rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {" "}
                  {limitWords(product.title, 5)}
                </h3>
                <p className="text-xl font-semibold text-red-600">
                  {product.price}
                </p>
                <p className="text-sm font-semibold text-slate-500">
                  <del> {product.potongan} </del>
                </p>
                <p className="text-sm px-1 bg-red-200 w-fit rounded-md font-semibold text-red-400">
                  {product.discount}
                </p>
                <p className="text-gray-500 text-md my-1">{product.location}</p>
                <p className="text-yellow-500">{product.rating}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
