import { createContext, useState, useContext } from "react";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  img?: string;
}

interface CarritoContextType {
  carrito: Producto[];
  agregarProducto: (producto: Producto) => void;
  quitarProducto: (id: number) => void;
}

const CarritoContext = createContext<CarritoContextType>({
  carrito: [],
  agregarProducto: () => {},
  quitarProducto: () => {},
});

export const CarritoProvider = ({ children }: { children: React.ReactNode }) => {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  const quitarProducto = (id: number) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, quitarProducto }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);

