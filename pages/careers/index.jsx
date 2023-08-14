import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function JobCard({ title, jobId }) {
  return (
    <div className="job-card py-12 px-6 bg-white rounded-md cursor-pointer hover:shadow-2xl">
      <h3 className="text-primary text-3xl font-semibold mb-6">{title}</h3>

      <Link
        href={"/jobs/" + jobId}
        className="flex px-2 py-2 bg-secondary/60 w-[110px] items-center justify-center rounded-full font-bold text-primary"
      >
        View
      </Link>
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
      <section className="relative hero-section h-[275px] md:h-[475px] py-16 px-32 flex items-center justify-center bg-secondary">
        <h1 className="text-xl sm:text-3xl md:text-6xl text-white z-30 ">
          Careers at VBSB
        </h1>
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="hero-image"
          className="w-full h-full absolute inset-0 object-cover"
        />
        <div className="overlay absolute w-full h-full inset-0 bg-black/50"></div>
      </section>
      <section className="py-32 px-6 md:px-32 bg-gray-200">
        <h1 className="text-3xl md:text-5xl text-center">
          Are you ready to join our Team?
        </h1>
        <div className="jobs mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <JobCard
            title="Senior Consultant"
            link="/documents/jobs/JD CA semi Qualified (consultant).pdf"
            jobId="vbsb-senior-consultant"
          />
          <JobCard
            title="Finance Executive"
            link="/documents/jobs/JD for Financial Accounts Assocites (4).pdf"
            jobId="vbsb-finance-executive"
          />
          <JobCard
            title="Human Resource (HR)"
            link="/documents/jobs/JD for Humar Resource (HR) (2).pdf"
            jobId="vbsb-hr"
          />
          <JobCard
            title="Consultant"
            link="/documents/jobs/JD for MBA (Consultant).pdf"
            jobId="vbsb-consultant"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default index;
