import Header from "@/components/Header";
import Head from "next/head";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DeadlineList() {
  return (
    <div className="deadline_list py-3 px-3 bg-green-100">
      <h3 className="font-bold">7th June 2023</h3>
      <p className="text-black/70">
        ​​Due date for deposit of Tax deducted/collected for the month of May,
        2023. However, all sum deducted/collected by an office of the government
        shall be paid to the credit of the Central Government on the same day
        where tax is paid without production of an Income-tax Challan
      </p>
    </div>
  );
}
function index() {
  const [value, onChange] = useState(new Date());

  console.log("VALUE: ", value);
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Gallery &#8211; VBSB &#038; Associates</title>
      </Head>
      <Header index={4} />
      <div className="w-full h-screen px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-32">
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
        <div className="w-full bg-white px-6 py-6 shadow-md rounded-md max-h-[344px] overflow-y-auto flex flex-col items-start gap-3">
          <DeadlineList />
          <DeadlineList />
          <DeadlineList />
          <DeadlineList />
          <DeadlineList />
        </div>
      </div>
    </div>
  );
}

export default index;
