import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsappFab";
import Head from "next/head";
import React from "react";

function LeaderCard() {
  return (
    <div className="leader-card bg-secondary/40 hover:shadow-2xl cursor-pointer transition-all rounded-t-xl hover:scale-105">
      <div className="leader-card-body h-[135px]   relative flex items-center justify-start px-6">
        <div className="leader-avatar w-16 h-16 border-4 border-white bg-gray-300 rounded-full absolute -bottom-5 z-50 left-[50%] translate-x-[-50%]"></div>
      </div>
      <div className="leader-card-footer bg-primary/40 rounded-t-xl px-8 py-6  backdrop-blur-2xl">
        <div className="leader-card-footer-left">
          <div>
            <h3 className="text-2xl">John Doe</h3>
            <p>Kavit Vijay, partner in the firm...</p>
          </div>
        </div>
        <div className="leader-card-footer-links"></div>
      </div>
    </div>
  );
}

function index() {
  return (
    <div className="w-full">
      <Head>
        <title>About us &#8211; VBSB &#038; Associates</title>
      </Head>
      <Header index={1} />
      <div className="py-16 px-6 lg:px-16 xl:px-32">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full flex items-center justify-center flex-col mb-12">
              <h3 className="text-center text-2xl md:text-4xl font-bold uppercase text-primary">
                About us
              </h3>
            </div>

            <div className="w-full md:h-[768px] my-6">
              <img
                src="/imgs/about.jpeg"
                alt="about-caption-header-image"
                className="w-full object-cover h-full rounded-xl"
              />
            </div>

            <p className="text-black/50 text-md mb-3 text-center">
              The dynamic chartered accounting firm VBSB &amp; Associates was
              founded by CA. Vaibhav Bhatnagar and CA. Akanksha Shrivastava in
              2016. We have offices in Mumbai, Indore, Hyderabad, Orai,and
              Bhopal. Our headquarter is located in Bhopal. Our business is made
              up of a team of passionate and experienced people that are
              committed to providing our clients with the highest-quality
              services as well as the greatest financial and accounting services
              available. As a result of our extensive business experience, we
              understand the importance of accounting and financial management
              services for businesses and are dedicated to helping our clients
              reach their financial goals. To this end, we offer a wide range of
              services that are specifically catered to the needs of our
              clients. From tax planning and compliance to financial reporting
              and audit services, we offer quick and precise solutions that aid
              our customers in attaining their company goals.
            </p>
            <p className="text-black/50 text-md mb-3 text-center">
              We take pleasure in our client-centric strategy, which entails
              forging enduring bonds with our customers based on honesty,
              openness, and integrity. Our team of professionals works closely
              with each customer to comprehend their unique needs and offer
              solutions that are specifically suited to their goals. In order to
              offer our clients, the most pertinent and cutting-edge solutions,
              our organisation is dedicated to keeping up with the most recent
              advances in the market. We use state-of-the-art technology to
              automate our procedures and provide effective services that are
              both cost- and value-driven. Whether you are an individual or a
              company owner, we are here to help you navigate the complex world
              of accounting and finance. If you need a reliable and
              knowledgeable team of chartered accountants to help you manage
              your finances and accomplish your business goals, go no further
              than VBSB and Associates. Contact us right away to learn more
              about how we can help you achieve your financial goals!
            </p>
          </div>
        </div>
      </div>

      <section className="mb-12 px-6 lg:px-16 xl:px-32 py-16 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center text-3xl sm:text-4xl font-semibold">
            Mission
          </h1>
          <p className="my-3 text-center text-md text-black/50 ">
            Our mission is to simplify the complexities of financial management
            for our clients by providing tailored solutions that meet their
            unique needs and goals. Through our commitment to excellence,
            integrity, and collaboration, we help individuals and businesses
            achieve greater financial success.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center text-3xl sm:text-4xl font-semibold">
            Vision
          </h1>
          <p className="my-3 text-center text-md text-black/50 ">
            &quot;Striving for excellence every day.&quot;Our vision is to be a
            leading Chartered accountant firm with high professional and ethical
            standards. We aim to strive for excellence by enhancing our
            knowledge base and expertise in our core areas to achieve real
            success. We believe in building and sustaining long-term
            relationships with our clients by providing them with high-quality
            services that are efficient and effective.
          </p>
        </div>
      </section>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default index;
