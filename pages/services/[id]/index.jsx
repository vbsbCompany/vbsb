import Header from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { services } from "../../../data/services";
function index() {
  const [filtered, setFiltered] = useState(false);
  const router = useRouter();
  const { query } = router;

  const { id } = query;

  useEffect(() => {
    if (id) {
      const filtered_service = services.filter((s) => s.id == id);
      console.log(filtered_service);
      setFiltered(filtered_service[0]);
    }
  }, [id]);
  return (
    <div>
      <Head>
        <title>Our Team &#8211; VBSB &#038; Associates-Service Name</title>
      </Head>
      <main>
        <Header />
        <div className="container px-6 md:px-16 lg:px-32 py-12">
          {filtered && <h1 className="text-4xl">{filtered.title}</h1>}
          <p className="text-xl mt-6">{filtered && filtered.description}</p>

          {filtered && (
            <ul className="mt-12 flex flex-col items-start gap-6">
              {filtered.list.map((l, i) => {
                return (
                  <li>
                    <p className="text-xl">
                      {i + 1}. {l.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default index;
