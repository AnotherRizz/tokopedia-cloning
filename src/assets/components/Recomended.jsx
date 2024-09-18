import React from "react";
import Link from "./utility/Link";
import Button from "./utility/Button";
const Recomended = () => {
  return (
    <div className="mt-10 sticky top-[10rem] z-10 py-2 bg-white">
      <div className="flex gap-3  w-full">
        <div className=" block w-[18%] h-14 px-3 py-2  rounded-lg bg-gradient-to-r from-pink-700 to-pink-500">
          <Link variant="text-md hover:text-white  font-bold text-white">for risqi</Link>
        </div>
        <div className=" block w-[18%] h-14 px-3 py-2  rounded-lg bg-gradient-to-r from-amber-600 to-amber-400">
          <Link variant="text-md hover:text-white  font-bold text-white">
            Paket Perawatan Wajah
          </Link>
        </div>
        <div className=" block w-[18%] h-14 px-3 py-2  rounded-lg bg-gradient-to-r from-green-700 to-green-500">
          <Link variant="text-md hover:text-white  font-bold text-white">Sunblock Wajah</Link>
        </div>
        <div className=" block w-[18%] h-14 px-3 py-2  rounded-lg bg-gradient-to-r from-pink-700 to-pink-500">
          <Link variant="text-md hover:text-white  font-bold text-white">Boneka Karakter</Link>
        </div>
        <div className=" block w-[18%] h-14 px-3 py-2  rounded-lg bg-gradient-to-r from-cyan-600 to-teal-500">
          <Link variant="text-md hover:text-white  font-bold text-white">
            Mirip yang kamu cek
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
