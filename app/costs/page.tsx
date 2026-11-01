
"use client";

import { useState } from "react";
import {
  Calculator,
  Package,
  Truck,
  Factory,
  Receipt,
  TrendingUp,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

export default function CostPlannerPage() {
  const [market, setMarket] = useState("UAE");
  const [manufacturing, setManufacturing] = useState(450);
  const [packaging, setPackaging] = useState(80);
  const [shipping, setShipping] = useState(200);
  const [other, setOther] = useState(50);
  const [sellingPrice, setSellingPrice] = useState(1200);

  const currency = market === "UAE" ? "AED" : "USD";

  const totalCost =
    manufacturing + packaging + shipping + other;

  const profit = sellingPrice - totalCost;

  const margin =
    sellingPrice > 0
      ? (profit / sellingPrice) * 100
      : 0;

  const costItems = [
    {
      label: "Manufacturing",
      value: manufacturing,
      icon: Factory,
    },
    {
      label: "Packaging",
      value: packaging,
      icon: Package,
    },
    {
      label: "Shipping",
      value: shipping,
      icon: Truck,
    },
    {
      label: "Other expenses",
      value: other,
      icon: Receipt,
    },
  ];

  function updateValue(
    value: string,
    setter: (value: number) => void
  ) {
    const number = Number(value);

    setter(
      Number.isFinite(number) && number >= 0
        ? number
        : 0
    );
  }

  function formatAmount(value: number) {
    return `${currency} ${value.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;
  }

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-[#777F78]">
            Workspace / Financial Planning
          </p>

          <h1 className="text-3xl font-bold text-[#183C32]">
            Cost & Profit Planner
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#777F78]">
            Understand your estimated product costs and
            explore how your selling price could affect
            your potential profit.
          </p>
        </div>

        <section className="mb-8 rounded-2xl border border-[#E7E4DB] bg-white p-6">
          <div className="mb-4 flex items-center gap-2">
            <Calculator
              size={20}
              className="text-[#183C32]"
            />
            <h2 className="font-bold text-[#183C32]">
              Planning details
            </h2>
          </div>

          <label className="mb-2 block text-sm font-medium text-[#252B28]">
            Target market
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => setMarket("UAE")}
              className={`rounded-xl border p-4 text-left transition ${
                market === "UAE"
                  ? "border-[#183C32] bg-[#DDE8DF]"
                  : "border-[#E7E4DB] hover:border-[#183C32]"
              }`}
            >
              <span className="text-2xl">🇦🇪</span>
              <p className="mt-2 font-semibold text-[#183C32]">
                United Arab Emirates
              </p>
              <p className="mt-1 text-xs text-[#777F78]">
                AED
              </p>
            </button>

            <button
              onClick={() => setMarket("USA")}
              className={`rounded-xl border p-4 text-left transition ${
                market === "USA"
                  ? "border-[#183C32] bg-[#DDE8DF]"
                  : "border-[#E7E4DB] hover:border-[#183C32]"
              }`}
            >
              <span className="text-2xl">🇺🇸</span>
              <p className="mt-2 font-semibold text-[#183C32]">
                United States
              </p>
              <p className="mt-1 text-xs text-[#777F78]">
                USD
              </p>
            </button>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          <section className="rounded-2xl border border-[#E7E4DB] bg-white p-6">
            <h2 className="mb-2 text-xl font-bold text-[#183C32]">
              Enter your estimated costs
            </h2>

            <p className="mb-7 text-sm text-[#777F78]">
              Change these sample values to see your
              calculations update instantly.
            </p>

            <div className="space-y-6">
              {costItems.map((item, index) => {
                const Icon = item.icon;

                const setters = [
                  setManufacturing,
                  setPackaging,
                  setShipping,
                  setOther,
                ];

                return (
                  <div key={item.label}>
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#252B28]">
                      <Icon
                        size={17}
                        className="text-[#183C32]"
                      />
                      {item.label}
                    </label>

                    <div className="flex items-center rounded-xl border border-[#E7E4DB] px-4">
                      <span className="text-sm text-[#777F78]">
                        {currency}
                      </span>

                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.value}
                        onChange={(event) =>
                          updateValue(
                            event.target.value,
                            setters[index]
                          )
                        }
                        className="w-full bg-transparent p-3 text-right text-sm font-semibold text-[#252B28] outline-none"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[#E7E4DB] pt-6">
              <label className="mb-2 block text-sm font-semibold text-[#252B28]">
                Estimated international selling price
              </label>

              <div className="flex items-center rounded-xl border border-[#183C32] px-4">
                <span className="text-sm text-[#777F78]">
                  {currency}
                </span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={sellingPrice}
                  onChange={(event) =>
                    updateValue(
                      event.target.value,
                      setSellingPrice
                    )
                  }
                  className="w-full bg-transparent p-3 text-right text-lg font-bold text-[#183C32] outline-none"
                />
              </div>
            </div>
          </section>

          <div className="space-y-6">

            <section className="rounded-2xl bg-[#183C32] p-7 text-white">
              <div className="flex items-center gap-2 text-sm text-[#DDE8DF]">
                <TrendingUp size={19} />
                Estimated profit
              </div>

              <h2 className="mt-4 text-4xl font-bold">
                {formatAmount(profit)}
              </h2>

              <p className="mt-2 text-sm text-[#DDE8DF]">
                Based on your current cost assumptions
              </p>

              <div className="mt-7 border-t border-white/20 pt-5">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-[#DDE8DF]">
                    Profit margin
                  </span>
                  <span className="font-bold">
                    {margin.toFixed(1)}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-[#D6A65D] transition-all"
                    style={{
                      width: `${Math.min(
                        Math.max(margin, 0),
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-white/10 p-4 text-sm">
                {profit > 0
                  ? "Your estimated selling price is higher than your listed costs."
                  : profit === 0
                    ? "Your estimated selling price equals your listed costs."
                    : "Your listed costs are higher than your estimated selling price."}
              </div>
            </section>

            <section className="rounded-2xl border border-[#E7E4DB] bg-white p-6">
              <h2 className="mb-5 font-bold text-[#183C32]">
                Cost breakdown
              </h2>

              <div className="space-y-4">
                {costItems.map((item) => {
                  const percentage =
                    totalCost > 0
                      ? (item.value / totalCost) * 100
                      : 0;

                  return (
                    <div key={item.label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-[#777F78]">
                          {item.label}
                        </span>
                        <span className="font-semibold text-[#252B28]">
                          {formatAmount(item.value)}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-[#F0EEE7]">
                        <div
                          className="h-full rounded-full bg-[#183C32] transition-all"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-between border-t border-[#E7E4DB] pt-5">
                <span className="font-semibold text-[#252B28]">
                  Total estimated cost
                </span>
                <span className="font-bold text-[#183C32]">
                  {formatAmount(totalCost)}
                </span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-sm text-[#777F78]">
                  Selling price
                </span>
                <span className="text-sm font-semibold text-[#252B28]">
                  {formatAmount(sellingPrice)}
                </span>
              </div>
            </section>

          </div>
        </div>

        <section className="mt-6 rounded-xl border border-[#E7E4DB] bg-[#F5EBD9] p-5">
          <div className="flex items-start gap-3">
            <IndianRupee
              size={20}
              className="shrink-0 text-[#9B7137]"
            />

            <div>
              <h3 className="text-sm font-bold text-[#735328]">
                Important calculation note
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#735328]">
                These are illustrative estimates entered
                manually by the user. Currency selection
                changes the displayed currency label only;
                it does not convert INR into AED or USD.
                Taxes, duties, platform fees and other
                expenses may need to be added separately.
                This is not a live quotation or financial
                advice.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-5 text-xs text-[#777F78]">
          BharatBridge · Demonstration workspace · All
          sample values are fictional.
        </p>

      </div>
    </main>
  );
}
