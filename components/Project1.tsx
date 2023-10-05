import React from "react";
import Image from "next/image";
import myGif from "../images/smolganyu.gif"; // Adjust the path as necessary
export default function Project1() {
  return (
    <div>
      <Image src={myGif} alt="Description of GIF" />
    </div>
  );
}
