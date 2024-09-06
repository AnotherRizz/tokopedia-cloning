import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "./Link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div className="h-10 w-full flex bg-slate-100 px-7 ">
        <div className="w-1/2 flex justify-start items-center ms-8 gap-2">
          <i className="fa-solid fa-mobile text-2xl text-slate-400"></i>
          <Link to="/" variant=" text-lg">
            Download Tokopedia App
          </Link>
        </div>
        <div className="w-1/2 flex justify-between items-center">
          <Link to="/" variant=" text-lg">
            Tentang Tokopedia
          </Link>
          <Link to="/" variant=" text-lg">
            Mitra Tokopedia
          </Link>
          <Link to="/" variant=" text-lg">
            Pusat Edukasi Seller
          </Link>
          <Link to="/" variant=" text-lg">
            Promo
          </Link>
          <Link to="/" variant=" text-lg">
            Tokopedia Care
          </Link>
        </div>
      </div>
      <nav className=" h-[7.5rem] w-full border-b-[1px] mb-4 bg-white">
        <div className="  flex items-center px-7 mb-2">
          <div className=" w-1/6 flex justify-between items-center  px-4 py-3 ">
            <img
              src="/images/Logo-Tokopedia.png"
              alt="logo"
              className="w-[85%] h-fit"
            />
          </div>
          <div className="w-4/6 gap-4 flex border-e-2 px-2 ">
            <Button variant="hover:bg-gray-200 px-2 py-3 rounded-md text-xl">
              Kategori
            </Button>
            <div className="flex items-center border border-slate-300 focus-within:border-green-500 rounded-xl w-2/3 h-14">
              <i className="fa-solid fa-magnifying-glass text-2xl text-slate-400 pl-3"></i>
              <input
                type="text"
                className="w-full py-3 px-3 border-none  focus:outline-none text-xl rounded-r-xl"
                placeholder="Cari Di Tokopedia"
              />
            </div>

            <div className="flex ms-auto items-center gap-2 me-5">
              <Button variant="hover:bg-gray-200 px-4 py-3 rounded-md ">
                <i class="fa-solid fa-cart-shopping text-2xl text-slate-700 hover:bg-gray-200  rounded-md"></i>
              </Button>
              <Button variant="hover:bg-gray-200 px-4 py-3 rounded-md ">
                <i class="fa-regular fa-bell text-3xl  text-slate-700 hover:bg-gray-200 "></i>
              </Button>
              <Button variant="hover:bg-gray-200 px-4 py-3 rounded-md ">
                <i class="fa-regular fa-envelope text-3xl  text-slate-700 hover:bg-gray-200 "></i>
              </Button>
            </div>
          </div>
          <div className="w-1/6 flex justify-evenly items-center px-4 py-3 ">
            <div className="hover:bg-gray-200 px-10 py-3 gap-1  rounded-md flex items-center justify-center cursor-pointer">
              <img
                src="/images/shop.png"
                alt=""
                className=" w-[60%] rounded-full"
              />
              <p className=" text-xl font-medium">Toko</p>
            </div>
            <div className="hover:bg-gray-200 px-10 py-2 gap-1  rounded-md flex items-center justify-center cursor-pointer">
              <img
                src="/images/user.jpg"
                alt=""
                className=" w-[75%] rounded-full"
              />
              <p className=" text-xl font-medium">User</p>
            </div>
          </div>
        </div>
        <div className=" w-full flex ">
          <div className="w-5/6 flex justify-center ms-12 gap-4">
            <Link to="/">Kulkas 2 Pintu</Link>
            <Link to="/">Filter Air</Link>
            <Link to="/">Lampu Gantung</Link>
            <Link to="/">Kursi Lipat</Link>
            <Link to="/">Beras Porang</Link>
            <Link to="/">Lampu Led</Link>
          </div>
          <div className="w-1/6 flex justify-center gap-2 cursor-pointer">
            <i class="fa-solid fa-location-dot text-xl text-slate-600"></i>
            <p className=" text-slate-500">Pilih Alamat Pengirimanmu</p>
            <i class="fa-solid fa-arrow-down text-xl text-slate-600 "></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
