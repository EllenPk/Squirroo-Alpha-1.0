import { createContext, useContext, useState } from "react";

interface LocationContextType {
  barrio: string;
  setBarrio: (value: string) => void;
}

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [barrio, setBarrio] = useState("El Prado");

  return (
    <LocationContext.Provider value={{ barrio, setBarrio }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation debe usarse dentro de LocationProvider");
  return ctx;
};