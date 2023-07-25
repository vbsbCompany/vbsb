import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

function JobCard({ title, link }) {
  return (
    <div className="job-card py-12 px-6 bg-white rounded-md cursor-pointer hover:shadow-2xl">
      <h3 className="text-primary text-3xl font-semibold mb-6">{title}</h3>

      <a
        href={link}
        className="flex px-2 py-2 bg-secondary/60 w-[110px] items-center justify-center rounded-full font-bold text-primary"
      >
        View
      </a>
    </div>
  );
}

function index() {
  return (
    <main>
      <Head>
        <title>Careers at VBSB</title>
      </Head>
      <Header index={5} />
      <section className="hero-section h-[275px] md:h-[375px] py-16 px-32 flex items-center justify-center bg-secondary">
        <h1 className="text-2xl sm:text-3xl md:text-6xl text-white">
          Careers at VBSB
        </h1>
      </section>
      <section className="py-32 px-6 md:px-32 bg-gray-200">
        <h1 className="text-3xl text-center">
          Are you ready to join our Team?
        </h1>
        <div className="jobs mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <JobCard
            title="Finance Manager"
            link="/documents/jobs/JD FM (PDF).pdf"
          />
          <JobCard title="HR" link="/documents/jobs/JD HR VBSB.pdf" />
          <JobCard
            title="Consultant"
            link="/documents/jobs/JD for Consultant (CA-semi qualified).pdf"
          />
          <JobCard
            title="Process Executive"
            link="/documents/jobs/VBSB JD PE.pdf"
          />

          <JobCard
            title="Consultant"
            link="/documents/jobs/JD Consultant.pdf"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default index;
