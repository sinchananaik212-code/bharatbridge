
"use client";

import { useState } from "react";
import {
  Globe2,
  MapPin,
  Package,
  Leaf,
  Award,
  Copy,
  Check,
  Eye,
} from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function BuyerProfilePage() {
    const { products } = useApp();
  const [brandName, setBrandName] = useState("Kudla Craft Collective");
  const [location, setLocation] = useState("Mangaluru, Karnataka, India");
  const [story, setStory] = useState(
    "Kudla Craft Collective celebrates the creativity and craftsmanship of Indian artisans. We bring traditional handmade designs into contemporary homes while supporting skilled makers and preserving local craft traditions."
  );
  const [productName, setProductName] = useState(
    "Handcrafted Terracotta Vase"
  );
  const [category, setCategory] = useState("Home Decor");
  const [description, setDescription] = useState(
    "A handcrafted terracotta vase inspired by traditional Indian artistry. Each piece showcases the character of handmade craftsmanship."
  );
  const [features, setFeatures] = useState(
    "Handcrafted design, Traditional techniques, Artisan-made"
  );
  const [targetMarket, setTargetMarket] = useState("UAE and USA");
  const [copied, setCopied] = useState(false);

  function copyProfile() {
    const profile = `${brandName}\n${location}\n\nBrand Story\n${story}\n\nProduct: ${productName}\nCategory: ${category}\n${description}\n\nKey Features: ${features}\nTarget Markets: ${targetMarket}`;

    navigator.clipboard.writeText(profile);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="mb-3 text-sm text-[#777F78]">
            Workspace / Buyer Profile
          </p>
          <h1 className="text-3xl font-bold text-[#183C32]">
            Your Global Buyer Profile
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#777F78]">
            Present your brand and products professionally
            to potential international buyers.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">

          <section className="rounded-2xl border border-[#E7E4DB] bg-white p-6">
            <h2 className="mb-6 text-xl font-bold text-[#183C32]">
              Edit your profile
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Brand name
                </label>
                <input
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full rounded-xl border border-[#E7E4DB] p-3 text-sm outline-none focus:border-[#183C32]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Brand location
                </label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-[#E7E4DB] p-3 text-sm outline-none focus:border-[#183C32]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Brand story
                </label>
                <textarea
                  rows={5}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  className="w-full resize-y rounded-xl border border-[#E7E4DB] p-3 text-sm leading-6 outline-none focus:border-[#183C32]"
                />
              </div>

              <div className="border-t border-[#E7E4DB] pt-5">
                <h3 className="mb-4 font-bold text-[#183C32]">
                  Featured product
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Product name
                    </label>
<input
  value={productName}
  onChange={(e) => setProductName(e.target.value)}
  className="w-full rounded-xl border border-[#E7E4DB] p-3 text-sm outline-none focus:border-[#183C32]"
/>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Product category
                    </label>
                    <input
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-xl border border-[#E7E4DB] p-3 text-sm outline-none focus:border-[#183C32]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Product description
                    </label>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full rounded-xl border border-[#E7E4DB] p-3 text-sm leading-6 outline-none focus:border-[#183C32]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Key product features
                    </label>
                    <input
                      value={features}
                      onChange={(e) => setFeatures(e.target.value)}
                      className="w-full rounded-xl border border-[#E7E4DB] p-3 text-sm outline-none focus:border-[#183C32]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Target markets
                    </label>
                    <input
                      value={targetMarket}
                      onChange={(e) => setTargetMarket(e.target.value)}
                      className="w-full rounded-xl border border-[#E7E4DB] p-3 text-sm outline-none focus:border-[#183C32]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[#183C32]">
                  Live profile preview
                </h2>
                <p className="mt-1 text-xs text-[#777F78]">
                  Updates as you edit the information
                </p>
              </div>
              <Eye size={21} className="text-[#183C32]" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E7E4DB] bg-white shadow-sm">
              <div className="bg-[#183C32] p-7 text-white">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Globe2 size={26} />
                </div>

                <p className="text-xs font-medium uppercase tracking-widest text-[#DDE8DF]">
                  Indian artisan brand
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {brandName || "Your Brand Name"}
                </h2>

                <div className="mt-3 flex items-center gap-2 text-sm text-[#DDE8DF]">
                  <MapPin size={15} />
                  {location || "Brand location"}
                </div>
              </div>

              <div className="space-y-7 p-6">
                <div>
                  <h3 className="mb-3 font-bold text-[#183C32]">
                    Our Story
                  </h3>
                  <p className="text-sm leading-7 text-[#777F78]">
                    {story || "Your brand story will appear here."}
                  </p>
                </div>

                <div className="border-t border-[#E7E4DB] pt-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Package size={19} className="text-[#183C32]" />
                    <h3 className="font-bold text-[#183C32]">
                      Featured Product
                    </h3>
                  </div>

                  <div className="rounded-xl bg-[#F7F4ED] p-5">
                    <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-[#DDE8DF]">
                      <Package
                        size={48}
                        className="text-[#183C32]"
                      />
                    </div>

                    <span className="rounded-full bg-[#DDE8DF] px-3 py-1 text-xs font-medium text-[#183C32]">
                      {category || "Product category"}
                    </span>

                    <h3 className="mt-3 font-bold text-[#183C32]">
                      {productName || "Product name"}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#777F78]">
                      {description || "Product description"}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-bold text-[#183C32]">
                    Product Highlights
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {features.split(",").filter(Boolean).map(
                      (feature, index) => (
                        <span
                          key={index}
                          className="rounded-full border border-[#E7E4DB] px-3 py-2 text-xs text-[#777F78]"
                        >
                          <Leaf
                            size={12}
                            className="mr-1 inline"
                          />
                          {feature.trim()}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-xl bg-[#DDE8DF] p-5">
                  <div className="flex items-center gap-2">
                    <Award size={20} className="text-[#183C32]" />
                    <h3 className="font-bold text-[#183C32]">
                      Markets of Interest
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-[#183C32]">
                    {targetMarket || "Add your target markets"}
                  </p>
                </div>

                <div className="border-t border-[#E7E4DB] pt-5 text-center">
                  <p className="text-xs text-[#777F78]">
                    Made in India · Ready for the World
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={copyProfile}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#183C32] p-4 text-sm font-semibold text-white transition hover:bg-[#285647]"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Profile copied!" : "Copy buyer profile"}
            </button>

            <p className="mt-3 text-center text-xs text-[#777F78]">
              Demonstration profile. All brand and product
              information is fictional.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
