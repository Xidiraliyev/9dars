import React from "react";
import CardImg from "../assets/karamli-dolma.jpg";
import { Carousel } from "flowbite";
import CarouselComp from "../components/CarouselComp";
import { useFetch } from "../hooks/useFetch";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";

function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <>
      <CarouselComp />
      {recipes && (
        <div className="max-w-screen-xl flex gap-6 flex-wrap items-center justify-between mx-auto p-4">
          {recipes.map((recipe) => {
            return (
              <div
                key={recipe.id}
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500 "
              >
                <a href="#">
                  <img class="rounded-t-lg" src={CardImg} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {recipe.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {recipe.method.slice(0, 100)}.....
                  </p>
                  <Link
                    to={`/retsepts/${recipe.id}`}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
