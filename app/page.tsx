
"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Globe2,
  ClipboardCheck,
  Calculator,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowRight,
  Plus,
  CheckCircle2,
  Clock3,
  TrendingUp,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useApp } from "../context/AppContext";

const navigation = [
  { name: "Overview", icon: LayoutDashboard, href: "/" },
  { name: "My Products", icon: Package, href: "/products" },
  { name: "Market Explorer", icon: Globe2, href: "/market" },
  { name: "Readiness Centre", icon: ClipboardCheck, href: "/readiness" },
  { name: "Cost Planner", icon: Calculator, href: "/costs" },
  { name: "Buyer Profile", icon: Globe2, href: "/buyer" },
];

function getProductVisual(category: string) {
  if (category.toLowerCase().includes("textile")) {
    return {
      color: "bg-amber-100",
      icon: "🧵",
    };
  }

  if (category.toLowerCase().includes("handicraft")) {
    return {
      color: "bg-emerald-100",
      icon: "🪵",
    };
  }

  return {
    color: "bg-orange-100",
    icon: "🏺",
  };
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
  products,
  completedTaskIds,
  totalReadinessTasks,
} = useApp();

const readinessProgress = Math.round(
  (completedTaskIds.length / totalReadinessTasks) * 100
);
  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#252B28]">
      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-[#183C32] p-3 text-white shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col bg-[#183C32] px-5 py-7 text-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="mb-12 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D6A65D] text-xl font-bold text-[#183C32]">
            B
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              BharatBridge
            </h1>
            <p className="text-[10px] tracking-[2px] text-[#D6C9A9]">
              MADE IN INDIA. MADE FOR THE WORLD.
            </p>
          </div>
        </div>

        <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#A8B8AE]">
          Workspace
        </p>

        <nav className="flex flex-col gap-2">
          {navigation.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  index === 0
                    ? "bg-[#315747] font-medium text-white"
                    : "text-[#C1CEC5] hover:bg-[#294C3D] hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
                {item.name}
                {index === 0 && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#D6A65D]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="mb-5 rounded-2xl border border-[#496758] bg-[#254A3A] p-4">
            <div className="mb-3 flex items-center gap-2 text-[#E3C58D]">
              <Sparkles size={16} />
              <span className="text-xs font-semibold">Your next milestone</span>
            </div>
            <p className="mb-3 text-sm leading-6 text-[#E6EDE7]">
              Complete your product information to improve your readiness.
            </p>
            <a
              href="#readiness"
              className="flex items-center gap-2 text-xs font-semibold text-[#E3C58D]"
            >
              View progress <ArrowRight size={14} />
            </a>
          </div>

          <a
            href="#settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#C1CEC5] hover:bg-[#294C3D]"
          >
            <Settings size={18} />
            Settings
          </a>

          <div className="mt-4 flex items-center gap-3 border-t border-[#496758] px-2 pt-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D6A65D] font-semibold text-[#183C32]">
              KC
            </div>
            <div>
              <p className="text-sm font-medium">Kudla Craft Collective</p>
              <p className="text-xs text-[#A8B8AE]">Sample business account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="min-h-screen lg:ml-[260px]">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#E7E4DB] bg-[#F7F4ED]/95 px-6 pl-20 backdrop-blur-md md:px-10 md:pl-10">
          <div>
            <p className="text-xs text-[#777F78]">Workspace / Overview</p>
            <p className="text-sm font-semibold">Dashboard</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-xl border border-[#E7E4DB] bg-white px-3 py-2 text-xs text-[#777F78] sm:flex">
              <Search size={15} />
              Search workspace
              <span className="ml-3 rounded border px-1.5 py-0.5 text-[10px]">
                /
              </span>
            </div>
            <button
              aria-label="Notifications"
              className="relative rounded-xl border border-[#E7E4DB] bg-white p-2.5 hover:bg-[#F0EEE7]"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#D6A65D]" />
            </button>
          </div>
        </header>

        <div id="overview" className="mx-auto max-w-[1500px] px-5 py-8 md:px-10 md:py-10">
          {/* Welcome section */}
          <section className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[2px] text-[#8B7650]">
                <Sparkles size={15} />
                Your global journey starts here
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#183C32] md:text-4xl">
                Good evening, Kudla.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#777F78]">
                Your products have stories worth sharing with the world.
                Let's get them ready for their next opportunity.
              </p>
            </div>

            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#183C32] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#285444]"
            >
              <Plus size={17} />
              Add a product
            </a>
          </section>

          {/* Statistics */}
          <section className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Total products",
                value: String(products.length).padStart(2, "0"),
                note: "In your workspace",
                icon: Package,
              },
           {
  label: "Preparation progress",
  value: `${readinessProgress}%`,
  note: "Across all products",
  icon: TrendingUp,
},
              {
                label: "Markets exploring",
                value: "02",
                note: "UAE and USA",
                icon: Globe2,
              },
              {
                label: "Tasks completed",
                value: "18 / 28",
                note: "10 tasks remaining",
                icon: CheckCircle2,
              },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#E7E4DB] bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm text-[#777F78]">{stat.label}</p>
                    <div className="rounded-xl bg-[#EAF0E9] p-2.5 text-[#183C32]">
                      <Icon size={19} />
                    </div>
                  </div>
                  <p className="text-3xl font-semibold tracking-tight text-[#183C32]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[#929890]">{stat.note}</p>
                </div>
              );
            })}
          </section>

          {/* Main dashboard columns */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Products */}
            <div
              id="products"
              className="rounded-2xl border border-[#E7E4DB] bg-white p-5 md:p-6 xl:col-span-2"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#183C32]">
                    Your products
                  </h3>
                  <p className="mt-1 text-xs text-[#929890]">
                    Track your products' global preparation journey.
                  </p>
                </div>
                <a
                  href="#products"
                  className="flex items-center gap-1 text-xs font-semibold text-[#315747] hover:underline"
                >
                  View all <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="space-y-3">
                {products.map((product) => {
  const visual = getProductVisual(product.category);

  return (
    <div
      key={product.id}
      className="flex flex-col gap-4 rounded-xl border border-[#EEECE5] p-4 transition hover:border-[#C7D4C9] sm:flex-row sm:items-center"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${visual.color}`}
      >
        {visual.icon}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-[#252B28]">
          {product.name}
        </h4>

        <p className="mt-1 text-xs text-[#929890]">
          {product.category} · {product.origin}
        </p>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#EEECE5]">
          <div
            className="h-full rounded-full bg-[#315747]"
            style={{ width: `${product.progress}%` }}
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-3 sm:flex-col sm:items-end">
        <span className="text-sm font-semibold text-[#183C32]">
          {product.progress}%
        </span>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
            product.status === "In progress"
              ? "bg-[#EDF3EA] text-[#496F4E]"
              : "bg-[#FBF1DF] text-[#9A7130]"
          }`}
        >
          {product.status}
        </span>
      </div>
    </div>
  );
})}
              </div>

              <a
                href="/products"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#C7D4C9] py-3 text-sm font-medium text-[#315747] transition hover:bg-[#F3F6F0]"
              >
                <Plus size={16} />
                Add another product
              </a>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Readiness card */}
              <div
                id="readiness"
                className="rounded-2xl bg-[#183C32] p-6 text-white"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-medium">Readiness overview</p>
                  <ClipboardCheck size={20} className="text-[#D6A65D]" />
                </div>

                <div className="flex items-center gap-5">
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[7px] border-[#426451]">
                    <span className="absolute inset-0 rounded-full border-[7px] border-transparent border-t-[#D6A65D] border-r-[#D6A65D] rotate-45" />
                   <span className="text-2xl font-semibold">
  {readinessProgress}%
</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Good progress!</p>
                    <p className="mt-1 text-xs leading-5 text-[#C2D0C5]">
                      Keep completing your preparation tasks to move forward.
                    </p>
                  </div>
                </div>

                <a
                  href="/readiness"
                  className="mt-6 flex items-center justify-between rounded-xl bg-[#315747] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#416B57]"
                >
                  Open readiness centre
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Upcoming tasks */}
              <div className="rounded-2xl border border-[#E7E4DB] bg-white p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-[#183C32]">
                    Next steps
                  </h3>
                  <Clock3 size={17} className="text-[#929890]" />
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Add product dimensions",
                      subtitle: "Terracotta Vase",
                    },
                    {
                      title: "Review packaging details",
                      subtitle: "Handwoven Cushion",
                    },
                    {
                      title: "Complete brand story",
                      subtitle: "Artisan Wooden Decor",
                    },
                  ].map((task) => (
                    <div key={task.title} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#FBF1DF] p-1.5 text-[#9A7130]">
                        <Clock3 size={13} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#343B35]">
                          {task.title}
                        </p>
                        <p className="mt-1 text-[11px] text-[#929890]">
                          {task.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/readiness"
                  className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#315747] hover:underline"
                >
                  View all tasks <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Bottom section */}
          <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              id="market"
              className="flex items-center justify-between rounded-2xl border border-[#E7E4DB] bg-white p-6"
            >
              <div>
                <p className="text-xs text-[#929890]">Market exploration</p>
                <h3 className="mt-2 text-lg font-semibold text-[#183C32]">
                  Your next global destination
                </h3>
                <p className="mt-1 text-xs text-[#777F78]">
                  Explore sample market information.
                </p>
                <a
                  href="/market"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#315747]"
                >
                  Explore markets <ArrowRight size={14} />
                </a>
              </div>
              <div className="flex gap-2 text-3xl">
                🇦🇪 🇺🇸
              </div>
            </div>

            <div
              id="costs"
              className="flex items-center justify-between rounded-2xl border border-[#E7E4DB] bg-white p-6"
            >
              <div>
                <p className="text-xs text-[#929890]">Financial planning</p>
                <h3 className="mt-2 text-lg font-semibold text-[#183C32]">
                  Understand your numbers
                </h3>
                <p className="mt-1 text-xs text-[#777F78]">
                  Estimate product costs and potential margins.
                </p>
                <a
                  href="/costs"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#315747]"
                >
                  Open cost planner <ArrowRight size={14} />
                </a>
              </div>
              <div className="rounded-2xl bg-[#EAF0E9] p-4 text-[#183C32]">
                <Calculator size={30} />
              </div>
            </div>
          </section>

          <footer className="mt-10 border-t border-[#E7E4DB] py-6 text-center text-xs text-[#929890]">
            BharatBridge · Made in India, ready for the world.
            <br />
            <span className="mt-1 inline-block">
              Demonstration workspace · All business data is fictional.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}
