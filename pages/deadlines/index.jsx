import Header from "@/components/Header";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { tds } from "@/data/deadlines";

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
    <div className="deadline_list py-3 px-3 bg-green-100">
      <h3 className="font-bold">
        {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
      </h3>
      <p className="text-black/70">{description}</p>
    </div>
  );
}
function index() {
  const [value, onChange] = useState(new Date());
  const [TDSDATA, setTdsData] = useState("");

  console.log("VALUE: ", value);

  useEffect(() => {
    console.log(value);
    const filtered = tds.filter((d) => d.timestamp == value);
    console.log("Filtered", filtered);
    setTdsData(filtered.length > 0 ? filtered[0] : "");
  }, [value]);

  console.log("TDS DATA", TDSDATA);
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Gallery &#8211; VBSB &#038; Associates</title>
      </Head>
      <Header index={4} />
      <div className="w-full h-screen px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-32">
        <div className="w-full flex flex-col items-start gap-12">
          <div className="deadline__controls__header">
            <select
              name="form_types"
              id="form_types"
              className="px-3 py-3 border border-black"
            >
              <option value="tds">TDS</option>
              <option value="roc">ROC</option>
              <option value="gst">GST</option>
              <option value="income tax">Income Tax</option>
            </select>
          </div>
          <Calendar onChange={onChange} value={value} className={"w-full"} />
        </div>
        {TDSDATA ? (
          <div className="w-full px-6 py-6 rounded-md max-h-[344px] overflow-y-auto flex flex-col items-start gap-3">
            <DeadlineList date={value} description={TDSDATA?.description} />
          </div>
        ) : (
          <div className="w-full  px-6 py-6 rounded-md max-h-[344px] overflow-y-auto flex flex-col items-start gap-3">
            <p>No Data Avialable</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default index;
