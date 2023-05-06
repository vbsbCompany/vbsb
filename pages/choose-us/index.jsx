import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsappFab";
import Head from "next/head";
import React from "react";

function FeatureCard({ lists }) {
  return (
    <div className="feature-card bg-primary rounded-md py-2 px-4 shadow-2xl text-center">
      <p className="text-xl font-semibold text-white">{lists[0]}</p>
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
        className="hero h-[275px] xl:h-[465px] bg-primary relative"
        style={{
          backgroundSize: "cover",
        }}
      >
        <div className="overlay  w-full h-full absolute inset-0 z-10 flex items-center justify-center">
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
          <FeatureCard lists={["Area of expertise"]} />
          <FeatureCard lists={["Client Centric Approach"]} />
          <FeatureCard lists={["Comprehensive range of services"]} />
          <FeatureCard lists={["Cutting Edge Technology"]} />
          <FeatureCard lists={["Timely and accurate solutions"]} />
          <FeatureCard lists={["Competitive Pricing"]} />
        </div>
      </section>
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default index;
