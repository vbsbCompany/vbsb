import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

function FeatureCard({ lists }) {
  return (
    <div className="feature-card rounded-md py-6 px-6 shadow-2xl">
      <ul>
        {lists.map((list) => {
          return (
            <li>
              <p className="text-2xl font-semibold">{list}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function index() {
  return (
    <div>
      <Head>
        <title>Why choose Us &#8211; VBSB &#038; Associates</title>
      </Head>
      <Header index={2} />
      <div
        className="hero h-[275px] xl:h-[465px] bg-secondary relative"
        style={{
          backgroundSize: "cover",
        }}
      >
        <div className="overlay bg-black/70 w-full h-full absolute inset-0 z-10 flex items-center justify-center">
          <div>
            <h2 className="text-white text-2xl md:text-5xl xl:text-7xl">
              Why Choose Us?
            </h2>
          </div>
        </div>
      </div>

      <section className="features px-6 md:px-16 xl:px-32 py-16">
        <div className="w-full text-center">
          <h2 className="text-xl">This is Why</h2>
          <h1 className="text-4xl my-3 font-semibold text-primary">
            We Should Work Together
          </h1>
        </div>
        <div className="features-cards grid md:grid-cols-2 xl:grid-cols-3 gap-12 my-16">
          <FeatureCard
            lists={["Availability-Monday To Saturday 10 A.M. To 7 P.M."]}
          />
          <FeatureCard
            lists={["Hard Working", "Quick Response", "Proactive"]}
          />
          <FeatureCard lists={["Reputable", "Experienced", "Security"]} />
          <FeatureCard lists={["Business Savvy", "One-Stop-Shop"]} />
          <FeatureCard lists={["Continual Training For Better Result"]} />
          <FeatureCard lists={["100% Satisfaction Guarantee"]} />
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default index;
