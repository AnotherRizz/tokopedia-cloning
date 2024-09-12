import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Jika menggunakan react-router-dom untuk Link
import Card from "./utility/Card";
import { fetchTrending } from "./api/fetchTrending";

const Trending = () => {
   const [trending, setTrending] = useState([]);
   const [loading, setLoading] = useState(true); // Status loading

   useEffect(() => {
     const fetchData = async () => {
       try {
         const data = await fetchTrending();
         setTrending(data);
       } catch (error) {
         console.error("Error fetching data:", error);
       } finally {
         setLoading(false);
       }
     };

     fetchData();
   }, []);

   if (loading) {
     return <p>Loading...</p>;
   }

   return (
     <div className="w-full py-3 border-b-2 mt-16">
       <div className="flex gap-4 items-center">
         <h1 className="text-2xl font-bold">Lagi trending, nih</h1>
         <Link to="/" className="text-green-500 font-bold flex items-center">
           <i className="fa-solid fa-arrow-rotate-right text-xl mt-2"></i>
           <span className="ml-2">Muat Lainnya</span>
         </Link>
       </div>
       <div className="grid grid-cols-4 gap-3 mt-3">
       {trending.map((item) => (
          <Link to={"/item/" + item.id} key={item.id}>
            <Card variant=" flex rounded-lg shadow-sm shadow-slate-300 ">
              <img
                src={item.img}
                alt=""
                className="w-1/3 object-contain rounded-l-lg "
              />
              <div className=" px-4 my-auto">
                <p className=" font-bold text-black">{item.name}</p>
                <p className=" text-sm text-slate-500">{item.qty}</p>
              </div>
            </Card>
          </Link>
        ))}
       </div>
     </div>
   );
};

export default Trending;
