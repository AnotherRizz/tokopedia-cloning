import React from "react";
import { productSale } from "../data/product/DataProducts";
import Banner from "./utility/Banner";
import Card from "./utility/Card";

const Sale = () => {
  return (
    <div className="flash-sale-container p-5 mt-7">
      <div className="flex gap-2 items-center">
        <h2 className="text-2xl font-bold mb-3">Ada 999 Produk Rp 100!</h2>
        
         <h2 className="countdown-timer text-sm  text-slate-500 font-semibold "> Berakhir dalam </h2>
         <span className="font-bold text-red-500 text-md">04 : 57 : 19</span>{" "}
          <a href="#" className="text-green-600 font-semibold px-2">
            Lihat Semua
          </a>
      
      </div>
      <div className="flex ">
        <div>
          <Banner variant="h-[60%] w-[25%]  bg-black absolute z-0">
            <img
              src="https://images.tokopedia.net/img/cache/240/PYbRbC/2024/9/4/c2bce813-4ab2-470f-b141-41e7764818ed.png.webp?ect=4g"
              alt=""
              className="w-fit ms-4  h-full "
            />
          </Banner>
        </div>
        <div className="flex gap-3 z-10  max-w-[60rem] ms-auto ">
          {productSale.map((product) => (
            <Card variant="rounded-lg  bg-white mt-10 " key={product.id}>
              <img
                src={product.img}
                alt={product.title}
                className="w-full  object-contain"
              />
              <div className="p-2">
                <p className="font-bold text-md">{product.price}</p>
                <div className="flex gap-1 mb-2">
                  <p className="text-gray-500 line-through text-xs">
                    {product.originalPrice}
                  </p>
                  <span className=" text-red-500 text-xs font-semibold ">
                    {product.discount}
                  </span>
                </div>
                <p className=" text-xs font-bold text-slate-500">
                  {product.status}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
