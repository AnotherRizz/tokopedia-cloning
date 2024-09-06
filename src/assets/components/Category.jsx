import React from "react";
import Card from "./utility/Card";
import Link from "./utility/Link";
import Button from "./utility/Button";
import InputForm from "./utility/Input/InputForm";
import { Categories } from "../data/Category/Pilihan";
import { List } from "../data/Category/List";

const Category = () => {
  return (
    <section className="px-2 py-2 border rounded-lg">
      <div className="  flex">
        <div className=" w-1/2 px-4">
          <h1 className=" text-3xl font-bold my-8 ">Kategori Pilihan</h1>
          <div className=" flex gap-4 ">
            {Categories.map((category) => (
              <Card key={category.id} variant="px-3 my-2 rounded-lg">
                <img src={category.img} alt="" className=" mx-auto " />
              </Card>
            ))}
          </div>
        </div>
        <div className=" w-1/2 px-4 ">
          <div className="flex items-center gap-2">
            <h1 className=" text-3xl font-bold my-8   ">Top Up & Tagihan </h1>
            <Link variant="text-xl text-green-500 font-bold ">Lihat Semua</Link>
          </div>

          <Card variant="rounded-lg w-full border">
            <div className="flex border-b-2">
              <Button variant=" pb-3  px-14 py-3">
                <Link variant=" text-lg font-bold hover:text-slate-500 ">
                  Pulsa
                </Link>
              </Button>
              <Button variant=" pb-3  px-14 py-3">
                <Link variant=" text-lg font-bold hover:text-slate-500 ">
                  Paket Data
                </Link>
              </Button>
              <Button variant=" pb-3  px-14 py-3">
                <Link variant=" text-lg font-bold hover:text-slate-500 ">
                  Flight
                </Link>
              </Button>
              <Button variant=" pb-3  px-10 py-3">
                <Link variant=" text-lg font-bold hover:text-slate-500 ">
                  Listrik PLN
                </Link>
              </Button>
              <Button variant="  px-8 py-4">
                <Link>
                  <i class="fa-solid fa-ellipsis-vertical text-lg font-bold hover:text-slate-500 "></i>
                </Link>
              </Button>
            </div>
          </Card>
          <div className="border rounded-lg px-2">
            <div className=" flex mt-4">
              <div className=" w-10/12 flex px-2 gap-3">
                <InputForm
                  label="Nomor Telpon"
                  type="text"
                  placeholder="Masukan Nomor "
                  name="telp"
                />
                <InputForm
                  label="Nomor Telpon"
                  type="text"
                  placeholder="Masukan Nomor "
                  name="telp"
                />
              </div>
              <div className="w-2/12 flex items-center justify-center">
                <Button variant="bg-slate-200 text-slate-400 px-8 py-4 rounded-lg text-md font-semibold">
                  Beli
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mt-10 mb-3 ">
        <div className="flex justify-around ">
          {List.map((list) => (
            <Button
              variant="text- flex items-center gap-2 border rounded-lg px-3  w-full"
              key={List.id}>
              <img src={list.img} alt="" className="w-10" />
              <p>{list.name}</p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
