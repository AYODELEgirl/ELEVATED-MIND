"use client"
import Image from "next/image";
import imgOne from "../../../assets/images/imgOne.png";
import imgTwo from "../../../assets/images/imgTwo.png";
import React, { useState, useEffect } from "react";
const ToggleImage = () => {
const [showFirstImage, setShowFirstImage] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="image-container">
      {showFirstImage ? (
        <Image
          src={imgOne}
          alt="First"
          width={400}
          height={300}
          className="rounded-lg"
        />
      ) : (
        <Image
          src={imgTwo}
          alt="Second"
          width={400}
          height={300}
          className="rounded-lg"
        />
      )}
    </div>
  );
};

export default ToggleImage;
