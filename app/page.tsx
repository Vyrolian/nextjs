"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any | null>(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/hello");
      const json = await res.text();
      setData(json);
      console.log(json);
    }
    fetchData();
  }, []);
  const [page, setPage] = useState<any>("page1");

  useEffect(() => {}, []);
  return (
    <main className="">
      <div className="centered">
        <Image
          src="/avatar.png"
          alt="yae miko"
          width={300}
          height={300}
          priority
        />
      </div>

      <div></div>
    </main>
  );
}
