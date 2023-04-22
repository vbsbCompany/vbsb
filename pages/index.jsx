import Head from "next/head";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";
import WhatsAppFab from "@/components/WhatsappFab";
export default function Home() {
  return (
    <>
      <Head>
        <title>VBSB &#038; Associates &#8211; CHARTERED ACCOUNTANT</title>
        <meta
          name="description"
          content="'Striving for excellence everyday!' Our mission is to be a leading Chartered Accountant firm with high professional & ethical standards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Header index={0} />
        <div className="px-6 md:px-16 lg:px-32 my-16">
          <section className="flex flex-col-reverse xl:flex-row-reverse items-center gap-16 my-8">
            <div>
              <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-primary">
                Welcome to VBSB Associates
              </h3>
              <p className="my-6 text-md text-black/50">
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
            <div className="lg:min-w-[530px] w-full xl:w-[470px] xl:h-[370px]">
              <img
                src="/image_2.jpeg"
                alt="Office Image"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section className="flex flex-col xl:flex-row items-center gap-8  justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary leading-10">
                Building Better Business
              </h3>
              <p className="my-6 text-md">
                We are a firm of Chartered Accountants based in Bhopal with
                multi-disciplinary service offerings. We are committed to
                deliver qualitative and value-added exceptional client service.
              </p>
              <p className="text-md">
                We help you with all processes, obligations and compliances so
                that clientele can concentrate on their business !! The strength
                of VBSB Associate lies in its ability to combine in-depth
                knowledge of cross sections of the industry, with the
                specialized skills of its professionals which spreads across its
                widespread network.
              </p>
            </div>
            <div className="lg:min-w-[530px] w-full  xl:w-[475px] xl:h-[370px]">
              <img
                src="/image_1.jpeg"
                alt="Office Image"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </div>
        <div className="px-6 md:px-16 lg:px-32 py-12 md:py-16  bg-gray-200">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-600 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
              <ServiceCard name="Income Tax" />
              <ServiceCard name="Goods and Services Tax" />
              <ServiceCard name="ROC" />
              <ServiceCard name="Auditing and Assurance" />
              <ServiceCard name="Accounting and Book Keeping" />
              <ServiceCard name="Project Finance" />
            </div>
          </div>
        </div>

        <div className="px-6 md:px-16 lg:px-32 py-12 md:py-16 bg-primary">
          <section>
            <div className="">
              <h2 className="text-3xl md:text-5xl text-white font-semibold text-center">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-12">
                {industries.map((industry) => {
                  return (
                    <div className="serve-industry-card flex gap-3 items-center justify-center px-2 py-3 bg-white text-black shadow-2xl">
                      <p className="font-bold text-xs md:text-md">{industry}</p>
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

            <h2 className="mt-32 text-white text-lg md:text-2xl text-center font-semibold">
              Our strength lies in the ability to combine in-depth knowledge of
              cross sections of the industry with the specialized skills of our
              professionals, spreads across our widespread network.
            </h2>
          </section>
        </div>

        <div className="px-8 md:px-16 lg:px-32 py-32 bg-gray-100/30">
          <div>
            <h3 className="text-3xl md:text-5xl text-center font-semibold">
              Striving For Excellence Everyday
            </h3>
            <div className="grid grid-cols-1 gap-32 mt-12">
              <div className="flex flex-col items-center">
                <img src="/vbsb.jpeg" alt="logo not rendered" />

                <p className="text-black/50 text-xl text-center">
                  We Deliver Value Based Services To Our Clients, Resulting In
                  Growth And Enhancing Business Prospects.​ Invest Your Time And
                  Efforts On Running Your Business. Leave The Accounting To Us.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <WhatsAppFab />
      </div>
    </>
  );
}
