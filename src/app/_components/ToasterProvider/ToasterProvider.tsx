"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
interface toasterType {
  id: number;
  title: string;
  bar: string;
  background: string;
  icon: string | ReactNode;
  message: string;
}

interface contextType {
  toasters: toasterType[];
  filteredArray: (id: number) => void;
  numberOfNotifications: number;
}

export const toasterContext = createContext<contextType | undefined>(undefined);

export default function ToasterProvider({ children }: { children: ReactNode }) {
  const [toasters, setToasters] = useState([
    {
      id: 1,
      title: "Warning!",
      bar: "bg-custom-warn-bar",
      background: "bg-custom-warn-background",
      icon: "!",
      message: "This is a warning message",
    },
    {
      id: 2,
      title: "Info!",
      bar: "bg-custom-info-bar",
      background: "bg-custom-info-background",
      icon: "i",
      message: "This is a warning message",
    },
    {
      id: 3,
      title: "Success!",
      bar: "bg-custom-success-bar",
      background: "bg-custom-success-background",
      icon: "\u2713",
      message: "Your account activation was success.",
    },
    {
      id: 4,
      title: "Notification!",
      bar: "bg-custom-notification-bar",
      background: "bg-custom-notification-background",
      icon: <img className="w-[19px]" src="/Vector.svg" alt="" />,
      message: "You have new notifications.",
    },
  ]);
  const filteredArray = (id: number) => {
    setToasters((prevState) =>
      prevState.filter((toaster) => toaster.id !== id)
    );
  };
  const notificationLength = (): number => {
    return toasters.filter((toaster) => toaster.title === "Notification!")
      .length;
  };

  const numberOfNotifications: number = notificationLength();

  useEffect(() => {
    toasters.map((toaster) =>
      setTimeout(() => {
        setToasters((prevState) =>
          prevState.filter((item) => item.id !== toaster.id)
        );
      }, 5000)
    );
  }, [toasters]);

  return (
    <>
      <toasterContext.Provider
        value={{ toasters, filteredArray, numberOfNotifications }}
      >
        {children}
      </toasterContext.Provider>
    </>
  );
}
