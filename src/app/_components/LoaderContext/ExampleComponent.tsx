"use client";
import React from "react";
import { useLoader } from "@/_components/LoaderContext/LoaderProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const ExampleComponent = () => {
  const { showLoader, hideLoader } = useLoader();

  const handleAction = async () => {
    showLoader();
    console.log("btn clicked");

    await new Promise((resolve) => setTimeout(resolve, 5000));
    hideLoader();
  };
  const hide = () => {
    hideLoader();
  };

  return (
    <>
      <div
        className="flex justify-center content-center gap-4 my-2"
        style={{ fontFamily: poppins.style.fontFamily }}
      >
        <button
          className="bg-blue-300 p-2 rounded-md border border-black"
          onClick={handleAction}
        >
          Start Fetching..
        </button>
        <button
          className="bg-blue-300 p-2 rounded-md border border-black"
          onClick={hide}
        >
          Hide Loader
        </button>
      </div>
    </>
  );
};

export default ExampleComponent;
