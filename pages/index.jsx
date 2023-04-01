import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import PublicationCard from "@/components/PublicationCard";
import { industries } from "@/data/industries";
import GallerySlider from "@/components/GallerySlider";
export default function Home() {
  return (
    <>
      <Head>
        <title>VBSB &#038; Associates &#8211; CHARTERED ACCOUNTANT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Header index={0} />
        <div className="px-6 md:px-16 lg:px-32 my-16">
          <section className="flex flex-col xl:flex-row items-start gap-32  justify-between">
            <div className="max-w-[565px]">
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary leading-10">
                Building Better Business
              </h3>
              <p className="my-6 text-xl">
                We are a firm of Chartered Accountants based in bhopal with
                multi-disciplinary service offerings. We are committed to
                deliver qualitative and value-added exceptional client service.
              </p>
              <p className="text-xl">
                We help you with all processes, obligations and compliances so
                that clientele can concentrate on their business !! The strength
                of VBSB Associate lies in its ability to combine in-depth
                knowledge of cross sections of the industry, with the
                specialized skills of its professionals which spreads across its
                widespread network.
              </p>
            </div>
            <div className="w-full  lg:w-[450px] lg:h-[450px]">
              <GallerySlider
                images={[
                  "/imgs/image_header_1.jpeg",
                  "/imgs/image_header_2.jpeg",
                ]}
              />
            </div>
          </section>

          <section className="flex flex-col-reverse xl:flex-row-reverse items-start gap-32 my-16">
            <div className="max-w-[565px]">
              <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-primary">
                Welcome to VBSB & Associates LLP
              </h3>
              <p className="my-6 text-xl text-black/50">
                The dynamic chartered accounting firm VBSB & Associates was
                founded by CA. Vaibhav Bhatnagar in 2016. We have offices in
                Mumbai, Indore, Hyderabad, Orai,and Bhopal. Our headquarter is
                located in Bhopal. Our business is made up of a team of
                passionate and experienced people that are committed to
                providing our clients with the highest-quality services as well
                as the greatest financial and accounting services available.
              </p>
              <a
                href="/about"
                className="px-2 py-3 bg-secondary text-white flex w-[170px] mt-3 items-center justify-center rounded-full font-bold"
              >
                About us
              </a>
            </div>
            <div className="w-full">
              <div className="w-full  lg:w-[450px] lg:h-[450px]">
                <GallerySlider
                  images={[
                    "/imgs/image_header_3.jpeg",
                    "/imgs/image_header_4.jpeg",
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="px-6 md:px-16 lg:px-32 py-12 md:py-16 lg:py-32 bg-gray-200">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-600 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
              <ServiceCard name="Accounting and Book Keeping" />
              <ServiceCard name="Auditing & Assurance" />
              <ServiceCard name="Income Tax" />
              <ServiceCard name="GST" />
              <ServiceCard name="R.O.C" />
              <ServiceCard name="Project Finance" />
              <ServiceCard name="Process Audits" />
            </div>
          </div>
        </div>

        <div className="px-6 md:px-16 lg:px-32 py-12 md:py-16 bg-primary">
          <section>
            <div className="">
              <h2 className="text-3xl md:text-5xl text-white font-semibold text-center">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                {industries.map((industry) => {
                  return (
                    <div className="serve-industry-card flex gap-3 items-center justify-center px-6 py-3 bg-white text-black shadow-2xl">
                      <p className="font-bold text-xs md:text-xl">{industry}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div>
                <h2 className="text-3xl md:text-5xl text-white font-semibold">
                  Countries We Serve
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((ctry) => {
                    return (
                      <div>
                        <div></div>
                        <span className="text-white">Country Name</span>
                      </div>
                    );
                  })}
                </div>
              </div> */}

            <h2 className="mt-32 text-white text-lg md:text-3xl text-center font-semibold">
              Our strength lies in the ability to combine in-depth knowledge of
              cross sections of the industry with the specialized skills of our
              professionals, spreads across our widespread network.
            </h2>
          </section>
        </div>

        <div className="px-8 md:px-16 lg:px-32 py-32 bg-gray-100/30">
          <div>
            <h3 className="text-3xl md:text-5xl text-center font-semibold">
              Our Associations
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mt-12">
              <div className="flex flex-col items-center">
                <img
                  src="https://vjmglobal.com/wp-content/uploads/2019/02/EAI-International.png"
                  alt="EA-international"
                />
                <h3 className="text-blue-500 font-semibold">
                  EA International
                </h3>
                <p className="text-black/50">
                  The EAI International is a globally recognized group of
                  qualified and independent accounting and tax firms, serving
                  clients internationally. Most importantly, an EAI member can
                  be entrusted with transparency, ethics and professionalism in
                  the delivery of work.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <img
                    src="https://vjmglobal.com/wp-content/uploads/2021/06/Mask-Group-15.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://vjmglobal.com/wp-content/uploads/2021/06/Group-503.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://vjmglobal.com/wp-content/uploads/2021/06/Mask-Group-14.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://vjmglobal.com/wp-content/uploads/2021/10/assochan-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
