
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  origin: string;
  progress: number;
  status: string;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Handcrafted Terracotta Vase",
    category: "Home Decor",
    origin: "Mysuru, Karnataka",
    progress: 82,
    status: "In progress",
  },
  {
    id: 2,
    name: "Traditional Handwoven Cushion",
    category: "Textiles",
    origin: "Karnataka, India",
    progress: 65,
    status: "In progress",
  },
  {
    id: 3,
    name: "Artisan Wooden Decor",
    category: "Handicrafts",
    origin: "India",
    progress: 45,
    status: "Needs attention",
  },
];

const TOTAL_READINESS_TASKS = 10;

type AppContextType = {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  deleteProduct: (id: number) => void;
  completedTaskIds: number[];
  toggleTask: (id: number) => void;
  totalReadinessTasks: number;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [completedTaskIds, setCompletedTaskIds] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem("bharatbridge-products");
      const savedTasks = localStorage.getItem("bharatbridge-completed-tasks");

      if (savedProducts) {
        const parsedProducts = JSON.parse(savedProducts);

        if (Array.isArray(parsedProducts)) {
          setProducts(parsedProducts);
        }
      }

      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);

        if (Array.isArray(parsedTasks)) {
          setCompletedTaskIds(parsedTasks);
        }
      }
    } catch (error) {
      console.error("Could not load saved data:", error);
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(
          "bharatbridge-products",
          JSON.stringify(products)
        );

        localStorage.setItem(
          "bharatbridge-completed-tasks",
          JSON.stringify(completedTaskIds)
        );
      } catch (error) {
        console.error("Could not save data:", error);
      }
    }
  }, [products, completedTaskIds, loaded]);

  function addProduct(product: Omit<Product, "id">) {
    const newProduct = { ...product, id: Date.now() };
    setProducts((previous) => [...previous, newProduct]);
  }

  function deleteProduct(id: number) {
    setProducts((previous) =>
      previous.filter((product) => product.id !== id)
    );
  }

  function toggleTask(id: number) {
    setCompletedTaskIds((previous) =>
      previous.includes(id)
        ? previous.filter((taskId) => taskId !== id)
        : [...previous, id]
    );
  }

  return (
    <AppContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        completedTaskIds,
        toggleTask,
        totalReadinessTasks: TOTAL_READINESS_TASKS,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}
