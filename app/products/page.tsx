
"use client";

import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Plus, Search, Package, Trash2, MapPin, X } from "lucide-react";

export default function ProductsPage() {
  const { products, addProduct, deleteProduct } = useApp();

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Home Decor");
  const [origin, setOrigin] = useState("");
  const [error, setError] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !origin.trim()) {
      setError("Please fill in all the fields.");
      return;
    }

    try {
      addProduct({
        name: name.trim(),
        category,
        origin: origin.trim(),
        progress: 0,
        status: "Not started",
      });

      setName("");
      setCategory("Home Decor");
      setOrigin("");
      setShowForm(false);
    } catch (err) {
      console.error("Product saving failed:", err);
      setError("Could not save the product. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F4ED] p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-[#A0804D]">
              YOUR BUSINESS WORKSPACE
            </p>
            <h1 className="text-3xl font-bold text-[#183C32]">
              My Products
            </h1>
            <p className="mt-2 text-sm text-[#777F78]">
              Manage your products and prepare them for global markets.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setError("");
              setShowForm(true);
            }}
            className="flex items-center gap-2 rounded-xl bg-[#183C32] px-5 py-3 font-semibold text-white hover:bg-[#285B49]"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E7E4DB] bg-white p-5">
            <p className="text-sm text-[#777F78]">Total Products</p>
            <h2 className="mt-2 text-3xl font-bold text-[#183C32]">
              {products.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E4DB] bg-white p-5">
            <p className="text-sm text-[#777F78]">In Progress</p>
            <h2 className="mt-2 text-3xl font-bold text-[#183C32]">
              {products.filter((p) => p.progress > 0 && p.progress < 100).length}
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E7E4DB] bg-white p-5">
            <p className="text-sm text-[#777F78]">Not Started</p>
            <h2 className="mt-2 text-3xl font-bold text-[#183C32]">
              {products.filter((p) => p.progress === 0).length}
            </h2>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#E7E4DB] bg-white px-4 py-3">
          <Search size={19} className="text-[#777F78]" />
          <input
            type="text"
            placeholder="Search your products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-[#E7E4DB] bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DDE8DF] text-[#183C32]">
                  <Package size={24} />
                </div>

                <button
                  type="button"
                  onClick={() => deleteProduct(product.id)}
                  title="Delete product"
                  className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#A0804D]">
                {product.category}
              </p>

              <h3 className="text-lg font-bold text-[#183C32]">
                {product.name}
              </h3>

              <p className="mt-3 flex items-center gap-2 text-sm text-[#777F78]">
                <MapPin size={15} />
                {product.origin}
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-[#777F78]">Preparation progress</span>
                  <span className="font-semibold text-[#183C32]">
                    {product.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#EEF0EA]">
                  <div
                    className="h-full rounded-full bg-[#3D8061]"
                    style={{ width: `${product.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 border-t border-[#F0EEE8] pt-4">
                <span className="rounded-full bg-[#F2F4EF] px-3 py-1 text-xs font-medium text-[#536B58]">
                  {product.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#D8D8CE] bg-white p-12 text-center">
            <Package size={35} className="mx-auto text-gray-400" />
            <h3 className="mt-4 font-semibold text-[#183C32]">
              No products found
            </h3>
            <p className="mt-2 text-sm text-[#777F78]">
              Try another search or add a new product.
            </p>
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#183C32]">
                Add New Product
              </h2>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Handmade Bamboo Lamp"
                  className="w-full rounded-xl border border-[#E7E4DB] px-4 py-3 text-sm outline-none focus:border-[#183C32]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-xl border border-[#E7E4DB] bg-white px-4 py-3 text-sm outline-none"
                >
                  <option>Home Decor</option>
                  <option>Textiles</option>
                  <option>Handicrafts</option>
                  <option>Fashion</option>
                  <option>Food Products</option>
                  <option>Beauty and Wellness</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Product Origin
                </label>
                <input
                  type="text"
                  required
                  value={origin}
                  onChange={(event) => setOrigin(event.target.value)}
                  placeholder="e.g. Mysuru, Karnataka"
                  className="w-full rounded-xl border border-[#E7E4DB] px-4 py-3 text-sm outline-none focus:border-[#183C32]"
                />
              </div>

              {error && (
                <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#183C32] py-3 font-semibold text-white hover:bg-[#285B49]"
              >
                Save Product
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
