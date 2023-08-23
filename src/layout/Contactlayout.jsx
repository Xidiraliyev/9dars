import React from "react";
import { Outlet } from "react-router-dom";

function Contactlayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid
        dolores ducimus, nam voluptates molestiae est provident nobis
        perspiciatis animi!
      </p>

      <Outlet/>
    </div>
  );
}

export default Contactlayout;
