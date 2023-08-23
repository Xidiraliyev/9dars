import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg-green-500 rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class=" text-2xl text-white font-semibold flex items-center ">
           CookPal
          </a>
          <ul class="flex gap-6 flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink to="/" class="mr-4 hover:underline md:mr-6 ">
                Home
              </NavLink>
            </li>
            
            <li>
              <NavLink to="retsepts" class="mr-4 hover:underline md:mr-6 ">
                Retsepts
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" class="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" class="hover:underline uppercase">
            CookPal
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
