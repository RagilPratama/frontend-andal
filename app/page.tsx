"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchMessage() {
  // ganti dengan API call kamu
  return { message: "Hello ragilganteng "};
}

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["message"],
    queryFn: fetchMessage,
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-2xl bg-white p-10 shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {isLoading ? "Loading..." : data?.message}
        </h1>
      </div>
    </main>
  );
}
