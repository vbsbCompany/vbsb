import { jobs } from "@/data/jobs";
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
  return (
    <main className="h-screen">
      {job && (
        <div className="grid grid-cols-1 lg:grid-cols-3  h-full">
          <div className="col-span-2 px-6 lg:px-12 py-12">{job[0].jsx}</div>
          <div className="col-span-1 bg-gray-100 px-6 lg:px-12 py-12 w-full">
            <h2 className="text-4xl">Easy Apply</h2>

            <form className="w-full flex flex-col items-start gap-3 mt-12">
              <div className="grid grid-cols-2 gap-3">
                <FormControl
                  name={"fname"}
                  value={""}
                  setValue={null}
                  id={"fname"}
                  type={"text"}
                  label={"First Name"}
                />
                <FormControl
                  name={"lname"}
                  value={""}
                  setValue={null}
                  id={"lname"}
                  type={"text"}
                  label={"Last Name"}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <FormControl
                  name={"email"}
                  value={""}
                  setValue={null}
                  id={"email"}
                  type={"email"}
                  label={"Email *"}
                />
                <FormControl
                  name={"cemail"}
                  value={""}
                  setValue={null}
                  id={"cemail"}
                  type={"email"}
                  label={"Confirm your email *"}
                />
              </div>
              <div className="grid grid-cols-1 gap-3">
                <FormControl
                  name={"phone"}
                  value={""}
                  setValue={null}
                  id={"phone"}
                  type={"text"}
                  label={"Phone *"}
                />
              </div>

              <div className="grid grid-cols-1 gap-3 w-full">
                <div className="w-full  flex flex-col items-start gap-2">
                  <label htmlFor="message">Message to HR</label>
                  <textarea
                    name="message"
                    id="message"
                    value={""}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-[75px] resize-none py-2 px-2 shadow-inner rounded-md"
                  />
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-[36px] bg-green-600 text-white"
                >
                  Send Application
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
    </main>
  );
}

export default Job;
