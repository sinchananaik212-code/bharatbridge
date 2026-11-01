
"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Package,
  FileText,
  Truck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useApp } from "../../context/AppContext";

type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  product: string;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Add product dimensions",
    description: "Record the product's length, width and height.",
    category: "Product Information",
    product: "Handcrafted Terracotta Vase",
  },
  {
    id: 2,
    title: "Add product weight",
    description: "Enter the approximate product weight.",
    category: "Product Information",
    product: "Handcrafted Terracotta Vase",
  },
  {
    id: 3,
    title: "Prepare product photographs",
    description: "Add clear photographs from multiple angles.",
    category: "Product Information",
    product: "Traditional Handwoven Cushion",
  },
  {
    id: 4,
    title: "Review packaging details",
    description: "Document the proposed packaging materials.",
    category: "Packaging",
    product: "Traditional Handwoven Cushion",
  },
  {
    id: 5,
    title: "Check packaging durability",
    description: "Consider protection during long-distance transport.",
    category: "Packaging",
    product: "Handcrafted Terracotta Vase",
  },
  {
    id: 6,
    title: "Complete brand story",
    description: "Explain the brand's origin and craftsmanship.",
    category: "Brand Profile",
    product: "Artisan Wooden Decor",
  },
  {
    id: 7,
    title: "Prepare product descriptions",
    description: "Write clear descriptions for international buyers.",
    category: "Brand Profile",
    product: "Handcrafted Terracotta Vase",
  },
  {
    id: 8,
    title: "Research shipping options",
    description: "Explore possible shipping methods for your market.",
    category: "Shipping",
    product: "Traditional Handwoven Cushion",
  },
  {
    id: 9,
    title: "Identify potential buyers",
    description: "Research relevant international retailers.",
    category: "Market Research",
    product: "Artisan Wooden Decor",
  },
  {
    id: 10,
    title: "Review target market requirements",
    description: "Research relevant requirements for your chosen market.",
    category: "Market Research",
    product: "Handcrafted Terracotta Vase",
  },
];

const categories = [
  {
    name: "Product Information",
    icon: Package,
  },
  {
    name: "Packaging",
    icon: ClipboardCheck,
  },
  {
    name: "Brand Profile",
    icon: FileText,
  },
  {
    name: "Shipping",
    icon: Truck,
  },
  {
    name: "Market Research",
    icon: ShieldCheck,
  },
];

export default function ReadinessPage() {
  const {
    completedTaskIds,
    toggleTask,
  } = useApp();

  const tasks = initialTasks;

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const completedCount = completedTaskIds.length;

  const progress = Math.round(
    (completedCount / tasks.length) * 100
  );

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter(
          (task) => task.category === selectedCategory
        );


  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-[#777F78]">
            Workspace / Readiness Centre
          </p>

          <h1 className="text-3xl font-bold text-[#183C32]">
            Your Readiness Centre
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#777F78]">
            Every successful global journey starts with
            preparation. Complete these tasks to organize
            your business for international opportunities.
          </p>
        </div>

        <section className="mb-8 rounded-2xl bg-[#183C32] p-7 text-white">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-[#DDE8DF]">
                <CheckCircle2 size={18} />
                Overall preparation progress
              </div>

              <h2 className="mt-3 text-5xl font-bold">
                {progress}%
              </h2>

              <p className="mt-3 text-sm text-[#DDE8DF]">
                {completedCount} of {tasks.length} sample tasks completed
              </p>
            </div>

            <div className="w-full md:max-w-sm">
              <div className="mb-2 flex justify-between text-xs text-[#DDE8DF]">
                <span>Preparation progress</span>
                <span>{progress}%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-[#D6A65D] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-4 text-xs leading-5 text-[#DDE8DF]">
                This score reflects completed demonstration
                tasks only. It is not an official export
                readiness or compliance certification.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#E7E4DB] bg-white p-5">
            <p className="text-sm text-[#777F78]">
              Total tasks
            </p>
            <p className="mt-2 text-3xl font-bold text-[#183C32]">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-xl border border-[#E7E4DB] bg-white p-5">
            <p className="text-sm text-[#777F78]">
              Completed
            </p>
            <p className="mt-2 text-3xl font-bold text-[#183C32]">
              {completedCount}
            </p>
          </div>

          <div className="rounded-xl border border-[#E7E4DB] bg-white p-5">
            <p className="text-sm text-[#777F78]">
              Remaining
            </p>
            <p className="mt-2 text-3xl font-bold text-[#183C32]">
              {tasks.length - completedCount}
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#E7E4DB] bg-white p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#183C32]">
              Your preparation tasks
            </h2>

            <p className="mt-1 text-sm text-[#777F78]">
              Choose a category and mark completed tasks.
            </p>
          </div>

          <div className="mb-7 flex flex-wrap gap-2">
            {["All", ...categories.map((category) => category.name)].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    selectedCategory === category
                      ? "bg-[#183C32] text-white"
                      : "bg-[#F7F4ED] text-[#777F78] hover:bg-[#DDE8DF]"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          <div className="space-y-7">
            {categories
              .filter(
                (category) =>
                  selectedCategory === "All" ||
                  selectedCategory === category.name
              )
              .map((category) => {
                const categoryTasks = filteredTasks.filter(
                  (task) => task.category === category.name
                );

                if (categoryTasks.length === 0) {
                  return null;
                }

                const CategoryIcon = category.icon;

                return (
                  <div key={category.name}>
                    <div className="mb-3 flex items-center gap-2">
                      <CategoryIcon
                        size={19}
                        className="text-[#183C32]"
                      />

                      <h3 className="font-semibold text-[#183C32]">
                        {category.name}
                      </h3>

                      <span className="text-xs text-[#777F78]">
                        ({categoryTasks.length})
                      </span>
                    </div>

                    <div className="space-y-3">
                      {categoryTasks.map((task) => {
                        const completed =
                          completedTaskIds.includes(task.id)

                        return (
                          <button
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className="flex w-full items-start gap-3 rounded-xl border border-[#E7E4DB] p-4 text-left transition hover:bg-[#F7F4ED]"
                          >
                            {completed ? (
                              <CheckCircle2
                                size={21}
                                className="mt-0.5 shrink-0 text-[#183C32]"
                              />
                            ) : (
                              <Circle
                                size={21}
                                className="mt-0.5 shrink-0 text-[#A6AAA5]"
                              />
                            )}

                            <div className="min-w-0 flex-1">
                              <p
                                className={`text-sm font-semibold ${
                                  completed
                                    ? "text-[#777F78] line-through"
                                    : "text-[#252B28]"
                                }`}
                              >
                                {task.title}
                              </p>

                              <p className="mt-1 text-xs leading-5 text-[#777F78]">
                                {task.description}
                              </p>

                              <span className="mt-2 inline-block rounded-full bg-[#F7F4ED] px-3 py-1 text-[11px] text-[#777F78]">
                                {task.product}
                              </span>
                            </div>

                            <ArrowRight
                              size={16}
                              className="mt-1 shrink-0 text-[#A6AAA5]"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <p className="mt-5 text-xs leading-5 text-[#777F78]">
          Demonstration workspace. All business and task data
          are fictional. Requirements vary by product and
          destination; verify official guidance before
          making real export decisions.
        </p>

      </div>
    </main>
  );
}
