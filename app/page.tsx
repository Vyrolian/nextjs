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

  const href = project1;
  const router = useRouter();
  useEffect(() => {
    // Set the pathname property of the router object to the new URL.
    router.pathname = "/new-url";

    // Call `router.replace()` to update the URL.
  }, []);
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
      <div className="centered">
        <button onClick={() => router.replace("/new-url")}>Click me!</button>
        <Link href={page}></Link>
        <button className="fancy-button" onClick={() => setPage("page1")}>
          Project
        </button>
        <button className="fancy-button">Project 2</button>
        <button className="fancy-button">Project 3</button>
        <button className="fancy-button">Project 4</button>
        <button className="fancy-button">Project 5</button>
        <button className="fancy-button">Project 6</button>
        <button className="fancy-button">Project 7</button>
      </div>
      <div></div>
    </main>
  );
}
