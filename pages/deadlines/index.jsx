import Header from "@/components/Header";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { income_tax, roc, tds } from "@/data/deadlines";
import Footer from "@/components/Footer";

function DeadlineList({ date, description }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log("SELECTED DATE", date);
  return (
    <div className="deadline_list py-3 px-3 bg-green-100 w-full">
      <h3 className="font-bold">
        {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
      </h3>
      <p className="text-black/70">{description}</p>
    </div>
  );
}
function index() {
  const [value, onChange] = useState(new Date());
  const [option, setOption] = useState("tds");
  const [TDSDATA, setTdsData] = useState("");

  console.log("VALUE: ", value);

  useEffect(() => {
    console.log(value);
    var filtered = [];

    if (option == "tds") {
      filtered = tds.filter((d) => d.timestamp == value);
    } else if (option == "roc") {
      filtered = roc.filter((d) => d.timestamp == value);
    } else if (option == "income_tax") {
      filtered = income_tax.filter((d) => d.timestamp == value);
    }
    console.log("Filtered", filtered);
    setTdsData(filtered.length > 0 ? filtered : "");
  }, [value, option]);

  console.log("TDS DATA", TDSDATA);
  console.log("OPTION", option);
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Gallery &#8211; VBSB &#038; Associates</title>
      </Head>
      <Header index={4} />
      <div className="w-full h-screen px-6 md:px-16 py-16 grid grid-cols-1  gap-32 bg-white">
        <div className="w-full flex flex-col items-start gap-12">
          <div>
            <h1 className="text-3xl">Tax Calendar</h1>
          </div>
          <div className="deadline__controls__header">
            <select
              name="form_types"
              id="form_types"
              className="px-3 py-3 border border-black"
              onChange={(e) => {
                setOption(e.target.value);
                onChange(new Date());
              }}
            >
              <option value="tds">TDS</option>
              <option value="roc">ROC</option>
              <option value="gst">GST</option>
              <option value="income_tax">Income Tax</option>
            </select>
          </div>
          <Calendar onChange={onChange} value={value} className={"w-full"} />
        </div>

        {TDSDATA.length > 0 ? (
          <div className="border px-6 py-6 rounded-md border-black">
            <div className="deadline-header">
              <h2 className="text-xl">Due Dates for selected month and year</h2>
            </div>
            <div className="w-full  bg-white rounded-md  flex flex-col items-start gap-3 mt-3">
              {TDSDATA.map((d, i) => {
                return (
                  <DeadlineList
                    key={i}
                    date={value}
                    description={d?.description}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="border w-full border-black px-6 py-6 rounded-md">
            <div className="deadline-header">
              <h2 className="text-xl">Due Dates for selected month and year</h2>
            </div>
            <div className="w-full   rounded-md max-h-[344px]  flex flex-col items-start gap-3">
              <p className="text-black/50">No Data Avialable</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default index;
