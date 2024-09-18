import React from "react";
import Link from "./utility/Link";
import Button from "./utility/Button";

const Footer = () => {

  return (
    <div className="mt-10 border-t-2 p-2">
      <div className="flex w-full gap-5 mt-4">
        <div className=" w-2/12 leading-7">
          <h1 className=" text-md font-extrabold">Tokopedia</h1>
          <Link to="" variant="text-sm mt-4">
            Tentang Tokopedia
          </Link>
          <Link to="" variant="text-sm mt-4">
            Hak Kekayaan Intelektual
          </Link>
          <Link to="" variant="text-sm mt-4">
            Karir
          </Link>
          <Link to="" variant="text-sm mt-4">
            Blog
          </Link>
          <Link to="" variant="text-sm mt-4">
            Tokopedia Afiliate Program
          </Link>
          <Link to="" variant="text-sm mt-4">
            Tokopedia B2B Digital
          </Link>
          <Link to="" variant="text-sm mt-4">
            Tokopedia Marketing Solution
          </Link>
          <Link to="" variant="text-sm mt-4">
            kalkulator Indeks Masa Tubuh{" "}
          </Link>
          <Link to="" variant="text-sm mt-4">
            Tokopedia Farma
          </Link>
          <Link to="" variant="text-sm mt-4">
            Promo Hari Ini{" "}
          </Link>
          <Link to="" variant="text-sm mt-4">
            Beli Lokal{" "}
          </Link>
          <Link to="" variant="text-sm mt-4">
            Promo guncang{" "}
          </Link>
        </div>
        <div className=" w-2/12 leading-7">
          <h1 className=" text-md font-extrabold">Beli</h1>
          <Link to="" variant="text-sm mt-4">
            Tagihan & Top Up
          </Link>
          <Link to="" variant="text-sm mt-4">
            Tokopedia COD
          </Link>
          <Link to="" variant="text-sm mt-4">
            Bebas Ongkir
          </Link>
          <h1 className=" text-md mb-3 mt-4 font-extrabold">Jual</h1>
          <Link to="" variant="text-sm mt-4">
            Pusat Edukasi Seller
          </Link>
          <Link to="" variant="text-sm mt-4">
            Daftar Official Store
          </Link>
          <h1 className=" text-md mb-3 mt-4 font-extrabold">
            Bantuan dan Panduan
          </h1>
          <Link to="" variant="text-sm mt-4">
            Tokopedia Care
          </Link>
          <Link to="" variant="text-sm mt-4">
            Syarat dan Ketentuan
          </Link>
          <Link to="" variant="text-sm mt-4">
            Kebijakan dan Privasi
          </Link>
        </div>
        <div className=" w-3/12">
          <h1 className=" text-md font-extrabold">Keamanan dan Prvasi</h1>
          <img src="/images/keamanan.png" alt="" />
          <h1 className=" text-md font-extrabold mt-4">Ikuti Kami</h1>
          <div className="flex gap-4 mt-3">
            <i
              className="fa-brands fa-facebook text-2xl"
              style={{ color: "#05388f" }}></i>
            <i
              className="fa-brands fa-twitter bg-blue-500 rounded-full p-1"
              style={{ color: "#ffffff" }}></i>
            <i
              className="fa-brands fa-pinterest text-2xl"
              style={{ color: "#fa0505" }}></i>
            <i
              className="fa-brands fa-instagram text-2xl"
              style={{ color: "#fa00a2" }}></i>
          </div>
        </div>
        <div className="w-5/12">
          <div>
            <img src="/images/footer.png" alt="" className=" w-2/3 mx-auto" />
          </div>
          <div className=" grid grid-cols-3  mt-2 justify-center">
            <Link variant="">
              <img src="/images/ps.png" alt="" className=" w-[90%]" />
            </Link>
            <Link variant="">
              {" "}
              <img src="/images/as.png" alt="" className=" w-[90%]" />
            </Link>
            <Link variant="">
              {" "}
              <img src="/images/ag.png" alt="" className=" w-[90%]" />
            </Link>
          </div>
          <h1 className=" font-bold text-slate-500 text-sm text-center mt-7">
            © 2009 - 2024, PT. Tokopedia.
          </h1>
          <div className=" flex justify-center mt-4">
            <Button variant='px-5 py-1 bg-green-500 text-white text-xs font-bold rounded-lg' >Indonesia</Button>
            <Button variant='px-5 py-1 border text-slate-500 text-xs font-bold rounded-lg' >English</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
