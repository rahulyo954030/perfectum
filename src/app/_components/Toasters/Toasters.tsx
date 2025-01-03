"use client";
import { useContext } from "react";
import { toasterContext } from "../ToasterProvider/ToasterProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function Toasters() {
  const context = useContext(toasterContext);
  if (!context) {
    return <div>Toaster context is not available.</div>;
  }
  const { toasters, filteredArray, numberOfNotifications } = context;
  return (
    <>
      <div className={poppins.className}>
        {toasters.map((toaster, index) => (
          <div
            key={toaster.id}
            className={` absolute w-[500px] h-[92px] flex items-center  space-x-7 border rounded top-[53px] left-[827px] ${toaster.background}`}
            style={{
              top:
                toaster.title !== "Notification!"
                  ? `${index * 100 + 53}px`
                  : "auto",
              bottom:
                toaster.title === "Notification!"
                  ? `${numberOfNotifications * 100}px `
                  : "auto",
            }}
          >
            <div
              className={`w-[8px] h-[79px] ${toaster.bar} ml-2 border rounded-sm`}
            ></div>

            <div
              className={`w-[40px] h-[40px] ${toaster.bar} border rounded-full flex items-center justify-center`}
            >
              <p className=" font-medium text-xl leading-8 text-white">
                {toaster.icon}
              </p>
            </div>
            <div className=" w-[301px] h-[58px] ">
              <p className=" font-medium text-xl leading-8">{toaster.title}</p>
              <p className=" font-normal text-base leading-6 opacity-75 text-custom-text-color">
                {toaster.message}
              </p>
            </div>
            <div className="absolute  -right-1 -top-3   text-2xl text-black">
              <button
                className="mr-2 mt-1"
                onClick={() => {
                  filteredArray(toaster.id);
                }}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
