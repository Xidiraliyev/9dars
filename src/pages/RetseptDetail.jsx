import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import React from "react";
import CardImg from "../assets/karamli-dolma.jpg";
import { NavLink } from "react-router-dom";

function RetseptDetail() {
  const { id } = useParams();
  const url = " http://localhost:3000/recipes?id=" + id;
  const { data: meal, error, isPending } = useFetch(url);
  return (
    <>
      {meal && (
        <div
          key={meal[0].id}
          className="flex max-w-screen-xl items-center justify-between mx-auto p-4"
        >
          <div className="">
            <h3 className="mb-5 text-center text-lg text-black font-medium">
              {meal[0].title}
            </h3>
            <img src={meal[0].image} alt="" width="500" className="rounded-md" />
          </div>
          <div className="w-2/4 p-0">
            <div className="flex gap-6">
              <NavLink className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                Tayyorlanishi
              </NavLink>
              <NavLink className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                Mahsulotlar
              </NavLink>
            </div>
            <p>
              {meal[0].method}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default RetseptDetail;
