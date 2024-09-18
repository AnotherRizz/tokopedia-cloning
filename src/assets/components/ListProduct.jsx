import React from "react";
import { useState, useEffect } from "react";
import { fetchListProduct } from "./api/fetchListProduct";
import Card from "./utility/Card";
import Button from "./utility/Button";

const ListProduct = () => {
  function limitWords(text, wordLimit) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchListProduct(); // Mendapatkan data dari fetchList
        setData(result); // Menyimpan data yang diambil ke dalam state
      } catch (error) {
        setError("Failed to fetch data"); // Menangani kesalahan
      } finally {
        setLoading(false); // Mengatur status loading menjadi false
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <div className=" grid grid-cols-6 gap-2 justify-center">
        {data.map((item) => (
          <Card key={item.id} variant="rounded-lg  bg-white mt-10 shadow-lg  ">
            <img src={item.img} alt="" className="w-full object-contain" />
            <div className="px-2">
              <h1 className=" text-xs my-2">{limitWords(item.name, 6)}</h1>
              <p className=" text-sm font-bold">{item.price}</p>
              <p className=" text-[0.65rem] text-red-500 font-semibold ">
                <del className=" text-slate-500">{item.sale}</del> {item.disc}
              </p>
              <p className=" text-xs my-1 text-slate-500">{item.location}</p>
              <p className=" text-xs my-1 text-slate-500">{item.rating}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-2 mb-5">
        <Button variant="text-green-600  text-md font-bold px-24 py-2 rounded-lg border border-green-500">
          Muat Lebih Banyak
        </Button>
      </div>
    </div>
  );
};

export default ListProduct;
