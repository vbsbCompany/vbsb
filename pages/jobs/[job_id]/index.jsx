import Alert from "@/components/Alert";
import { jobs } from "@/data/jobs";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function FormControl({ label, name, id, type, value, setValue }) {
  return (
    <div className="form-control w-full flex flex-col items-start gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-[36px] px-2 py-1 outline-none rounded-md shadow-inner"
      />
    </div>
  );
}
function Job() {
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMessage] = useState("");
  const [emailFeedback, setEmailFeedback] = useState("");
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const { job_id } = query;

      console.log("Job Id", job_id);
      const filteredJob = jobs.filter((j) => j.jobId == query["job_id"]);
      console.log("Filtered Job", filteredJob);
      setJob(filteredJob);
    }
  }, [router.isReady]);

  //handle contact form

  const handleContact = async () => {
    try {
      setStatus("WAIT");
      const r = await axios.post(`/api/hr_contact`, {
        name: fname + " " + lname,
        email: email,
        message: msg,
        position: job[0].title,
        phone: phone,
      });
      setPopup(true);
      console.log(r);
      const { message } = r.data;
      setEmailFeedback(message);
    } catch (e) {
      console.log(e);
      if (e.response.data) {
        setPopup(true);
        console.log(e.response.data);
      }
    }
  };

  // const handleFile = (e) => {
  //   const file = e.target.files[0];

  //   if (file && file.type === "application/pdf") {
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       const base64String = reader.result.split(",")[1];
  //       setResume(base64String); // You would replace this with your function to send the email
  //     };

  //     reader.onerror = () => {
  //       console.error("An error occurred while reading the file");
  //     };

  //     reader.readAsDataURL(file);
  //   } else {
  //     alert("Invalid file type. Please select a PDF file.");
  //   }
  // };

  const handleClose = (feed) => {
    if (feed === "ok") {
      setEmail("");
      setMessage("");
      setStatus("");
      setFname("");
      setLname("");
      setPopup(false);
    } else {
      setPopup(false);
    }
  };

  return (
    <main className="h-screen">
      <Head>
        <title>
          VBSB &#038; Associates &#8211; Careers-
          {job && job.length > 0 && job[0]["title"]}
        </title>
        <meta
          name="description"
          content="'Striving for excellence everyday!' Our mission is to be a leading Chartered Accountant firm with high professional & ethical standards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {job && (
        <div className="grid grid-cols-1 lg:grid-cols-3  h-full">
          <div className="col-span-2 px-6 lg:px-12 py-12">{job[0].jsx}</div>
          <div className="col-span-1 bg-gray-100 px-6 lg:px-12 py-12 w-full">
            <h2 className="text-4xl">Easy Apply</h2>

            <form
              className="w-full flex flex-col items-start gap-3 mt-12"
              onSubmit={(e) => {
                e.preventDefault();

                handleContact();
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <FormControl
                  name={"fname"}
                  value={fname}
                  setValue={setFname}
                  id={"fname"}
                  type={"text"}
                  label={"First Name"}
                />
                <FormControl
                  name={"lname"}
                  value={lname}
                  setValue={setLname}
                  id={"lname"}
                  type={"text"}
                  label={"Last Name"}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <FormControl
                  name={"email"}
                  value={email}
                  setValue={setEmail}
                  id={"email"}
                  type={"email"}
                  label={"Email *"}
                />
                <FormControl
                  name={"phone"}
                  setValue={setPhone}
                  id={"phone"}
                  type={"text"}
                  label={"Phone *"}
                  value={phone}
                />
              </div>

              <div className="grid grid-cols-1 gap-3 w-full">
                <div className="w-full  flex flex-col items-start gap-2">
                  <label htmlFor="message">Message to HR</label>
                  <textarea
                    name="message"
                    id="message"
                    value={msg}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-[75px] resize-none py-2 px-2 shadow-inner rounded-md"
                  />
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-[36px] bg-green-600 text-white"
                  disabled={status === "WAIT" ? true : false}
                >
                  {status === "WAIT" ? "Sending" : "Send Application"}
                </button>
              </div>
            </form>
            {/* <div className="w-full flex flex-col items-start gap-2">
              <button className="w-full h-[42px] bg-green-600 text-white">
                I`m Interested
              </button>
              <button className="w-full h-[42px] bg-transparent text-black border-2 border-black">
                Refer a friend
              </button>
            </div> */}
          </div>
        </div>
      )}
      {popup && <Alert message={emailFeedback} handleClose={handleClose} />}
    </main>
  );
}

export default Job;
