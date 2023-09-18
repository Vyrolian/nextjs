import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/data");
      const json = await response.json();
      setData(json);
    }
    fetchData();
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
        <button className="fancy-button">Project 1</button>
        <button className="fancy-button">Project 2</button>
        <button className="fancy-button">Project 3</button>
        <button className="fancy-button">Project 4</button>
        <button className="fancy-button">Project 5</button>
        <button className="fancy-button">Project 6</button>
        <button className="fancy-button">Project 7</button>
      </div>
      <div>{data && <p>Data from API: {data.message}</p>}</div>
    </main>
  );
}
