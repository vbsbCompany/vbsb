import { jobs } from "@/data/jobs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
          <div className="col-span-1 bg-gray-200 px-6 lg:px-12 py-12 w-full">
            <div className="w-full flex flex-col items-start gap-2">
              <button className="w-full h-[42px] bg-green-600 text-white">
                I`m Interested
              </button>
              <button className="w-full h-[42px] bg-transparent text-black border-2 border-black">
                Refer a friend
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Job;
