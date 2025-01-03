"use client";
import { createContext, ReactNode, useContext, useState } from "react";
const LoaderContext = createContext({
  loading: false,
  showLoader: () => {},
  hideLoader: () => {},
});
export function LoaderProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <>
      <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
        {children}
      </LoaderContext.Provider>
    </>
  );
}
export const useLoader = () => useContext(LoaderContext);
