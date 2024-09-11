import React from "react";
import { trending } from "../data/product/DataProducts";
import Link from "./utility/Link";
import Card from "./utility/Card";

const Trending = () => {
  return (
    <div className=" w-full py-3 border-b-2 mt-16">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl font-bold">Lagi trending, nih</h1>
        <Link variant="">
          <i class="fa-solid fa-arrow-rotate-right text-green-500 text-xl mt-2"></i>{" "}
          <span className="text-green-500 font-bold">Muat Lainnya</span>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {trending.map((product) => (
          <Link to={"/product/" + product.id}    key={product.id}>
            <Card
           
              variant=" flex rounded-lg shadow-sm shadow-slate-300 ">
              <img
                src={product.img}
                alt=""
                className="w-1/3 object-contain rounded-l-lg "
              />
              <div className=" px-4 my-auto">
                <p className=" font-bold text-black">{product.name}</p>
                <p className=" text-sm text-slate-500">{product.qty}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
