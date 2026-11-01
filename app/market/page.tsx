
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  Package,
  TrendingUp,
  CheckCircle2,
  Circle,
  Search,
} from "lucide-react";

const markets = {
  UAE: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    currency: "AED",
    description:
      "Explore opportunities for Indian lifestyle, home decor and handcrafted products in the UAE.",
    opportunities: [
      "Handcrafted home decor",
      "Indian textiles and furnishings",
      "Artisan lifestyle products",
    ],
    considerations: [
      "Understand product labelling expectations",
      "Research potential import partners",
      "Prepare product descriptions",
      "Review packaging requirements",
    ],
  },
  USA: {
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    currency: "USD",
    description:
      "Explore opportunities for Indian artisan products and distinctive lifestyle brands in the US market.",
    opportunities: [
      "Sustainable home accessories",
      "Handwoven textiles",
      "Unique artisan-made gifts",
    ],
    considerations: [
      "Research product-specific requirements",
      "Identify suitable sales channels",
      "Prepare professional product photos",
      "Review packaging and shipping needs",
    ],
  },
};

type MarketName = keyof typeof markets;

export default function MarketPage() {
  const [selectedMarket, setSelectedMarket] =
    useState<MarketName>("UAE");

  const [completedTasks, setCompletedTasks] = useState<
    Record<string, boolean>
  >({});

  const market = markets[selectedMarket];

  const completedCount = market.considerations.filter(
    (_, index) => completedTasks[`${selectedMarket}-${index}`]
  ).length;

  const progress = Math.round(
    (completedCount / market.considerations.length) * 100
  );

  function toggleTask(index: number) {
    const key = `${selectedMarket}-${index}`;

    setCompletedTasks((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  }

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#777F78]">
            <Globe2 size={17} />
            Global expansion / Market Explorer
          </div>

          <h1 className="text-3xl font-bold text-[#183C32]">
            Explore Global Markets
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#777F78]">
            Discover potential international opportunities
            and understand what your brand may need before
            entering a new market.
          </p>
        </div>

        <section className="mb-8 rounded-2xl border border-[#E7E4DB] bg-white p-6">
          <div className="mb-5 flex items-center gap-2">
            <MapPin size={19} className="text-[#183C32]" />
            <h2 className="font-semibold text-[#252B28]">
              Select your target market
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {(Object.keys(markets) as MarketName[]).map(
              (country) => (
                <button
                  key={country}
                  onClick={() => setSelectedMarket(country)}
                  className={`rounded-xl border p-5 text-left transition ${
                    selectedMarket === country
                      ? "border-[#183C32] bg-[#DDE8DF]"
                      : "border-[#E7E4DB] bg-white hover:border-[#183C32]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">
                      {markets[country].flag}
                    </span>

                    {selectedMarket === country && (
                      <CheckCircle2
                        size={21}
                        className="text-[#183C32]"
                      />
                    )}
                  </div>

                  <h3 className="mt-4 font-bold text-[#183C32]">
                    {markets[country].name}
                  </h3>

                  <p className="mt-1 text-sm text-[#777F78]">
                    {markets[country].region}
                  </p>
                </button>
              )
            )}
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-[#183C32] p-7 text-white">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-[#DDE8DF]">
                Currently exploring
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {market.flag} {market.name}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#DDE8DF]">
                {market.description}
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-5 md:min-w-40">
              <Globe2 size={25} />
              <p className="mt-3 text-xs text-[#DDE8DF]">
                Market currency
              </p>
              <p className="mt-1 text-xl font-bold">
                {market.currency}
              </p>
            </div>
          </div>
        </section>

        <div className="mb-8 grid gap-5 md:grid-cols-2">
          <section className="rounded-2xl border border-[#E7E4DB] bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-[#DDE8DF] p-3">
                <TrendingUp
                  size={21}
                  className="text-[#183C32]"
                />
              </div>

              <div>
                <h2 className="font-bold text-[#183C32]">
                  Potential Opportunities
                </h2>
                <p className="text-xs text-[#777F78]">
                  Illustrative product categories
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {market.opportunities.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-[#E7E4DB] pb-3 last:border-0"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F4ED] text-sm font-semibold text-[#183C32]">
                    {index + 1}
                  </span>

                  <p className="text-sm font-medium text-[#252B28]">
                    {item}
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-[#777F78]"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[#E7E4DB] bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-[#F5EBD9] p-3">
                <Package size={21} className="text-[#9B7137]" />
              </div>

              <div>
                <h2 className="font-bold text-[#183C32]">
                  Market Preparation
                </h2>
                <p className="text-xs text-[#777F78]">
                  Your sample preparation progress
                </p>
              </div>
            </div>

            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-[#777F78]">
                Completed tasks
              </span>

              <span className="font-bold text-[#183C32]">
                {completedCount}/{market.considerations.length}
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#E7E4DB]">
              <div
                className="h-full rounded-full bg-[#183C32] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-[#777F78]">
              {progress}% of your sample checklist completed
            </p>
          </section>
        </div>

        <section className="rounded-2xl border border-[#E7E4DB] bg-white p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#183C32]">
              Your Preparation Checklist
            </h2>

            <p className="mt-1 text-sm text-[#777F78]">
              Mark each item when your business has prepared it.
            </p>
          </div>

          <div className="space-y-4">
            {market.considerations.map((task, index) => {
              const isCompleted =
                !!completedTasks[`${selectedMarket}-${index}`];

              return (
                <button
                  key={task}
                  onClick={() => toggleTask(index)}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#E7E4DB] p-4 text-left transition hover:bg-[#F7F4ED]"
                >
                  {isCompleted ? (
                    <CheckCircle2
                      size={21}
                      className="shrink-0 text-[#183C32]"
                    />
                  ) : (
                    <Circle
                      size={21}
                      className="shrink-0 text-[#A6AAA5]"
                    />
                  )}

                  <span
                    className={`text-sm ${
                      isCompleted
                        ? "text-[#777F78] line-through"
                        : "font-medium text-[#252B28]"
                    }`}
                  >
                    {task}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-5 rounded-lg bg-[#F7F4ED] p-4 text-xs leading-5 text-[#777F78]">
            Note: This is an educational sample checklist for
            the BharatBridge MVP, not an official export,
            customs or regulatory compliance checklist.
          </p>
        </section>

      </div>
    </main>
  );
}
