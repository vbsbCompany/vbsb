import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsappFab";
import Head from "next/head";
import React from "react";

function TeamCard({ name, image, description, footer }) {
  return (
    <div className="team-card shadow-xl transition-all hover:shadow-2xl hover:rounded-md grid grid-cols-1  group cursor-pointer">
      <div className="card-cover w-full overflow-hidden h-[430px]">
        <img
          src={image}
          alt={`${name}-image`}
          className="w-full  h-full object-cover transition-all
      "
        />
      </div>
      <div className="py-6 px-3">
        <p className="text-xl font-semibold mb-3">{footer.subtitle}</p>
        <p className="text-black/50 mb-3 text-sm">{description}</p>
        <div>
          <a href={`mailto:${footer.email}`}>
            <p className="text-primary font-semibold">{footer.email}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function index() {
  return (
    <div>
      <Head>
        <title>Our Team &#8211; VBSB &#038; Associates</title>
      </Head>
      <Header index={1} />
      <div
        className="career-hero h-[365px] w-full relative bg-black"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay w-full h-full bg-black/30 absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold">
            Our Team
          </h1>
        </div>
      </div>

      <section className="text-center px-6 lg:px-32 pb-3 pt-12">
        <div>
          <h3 className="text-4xl mb-3">
            VBSB & Associates Is A Chartered Accountancy Firm Registered With
            Institute Of Chartered Accountants Of India (ICAI).
          </h3>
          <p className="text-xl text-primary mb-3">
            The Firm Has Young And Energetic Partners Accompanied By Workforce
            Having Positive Approach To Provide Expert And Professional Services
            With Due Care Of Professional Ethics.
          </p>
          <p>
            The Firm believes in steady approach towards offering high quality
            professional services to our clients which in turn help us immensely
            in building long term mutual benefit relationships.
          </p>
        </div>
      </section>

      <section className="our-team-section px-6 lg:px-32 pt-3 pb-12">
        <h3 className="text-center my-12 text-4xl font-semibold">
          Our Partners
        </h3>
        <div className="team-cards grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
          <TeamCard
            image={
              "https://vbsb.in/wp-content/uploads/2020/07/vaibhav-612x560-1.jpg"
            }
            footer={{
              subtitle:
                "CA. Vaibhav Bhatnagar, B.Com, FCA, CFA, CS (Executive)",
              email: "ca.vaibhav@vbsb.in",
            }}
            name={"CA. Vaibhav Bhatnagar"}
            description="Mr. Vaibhav Bhatnagar is the member of the Institute of Chartered Accountants of
            India and also the co-founder of the firm leading the young and energetic team.
            He is also a qualified Chartered Financial Analyst (CFA) and also completed Company secretary executive program. He comes from an esteemed FMCG company and also possesses rich experience in handling corporate clients. His area of expertise is Audit, Costing and Indirect Taxation. He also gives business consultancy to various industrial Behemoth."
          />
          <TeamCard
            image={
              "https://vbsb.in/wp-content/uploads/2020/07/akanksha-576x405-1.jpg"
            }
            footer={{
              subtitle: "CA. Akanksha Shrivastava, B.Com, FCA",
              email: "ca.akanksha@vbsb.in",
            }}
            name={"Akanksha Shrivastava"}
            description="Mrs. Akanksha Shrivastava is the member of the Institute of Chartered Accountants of India since January 2014 and also the senior partner of firm.
            She served as a partner for four years in hardcore practicing CA firm in the areas of Auditing & Direct Taxation, where her major area of working was Statutory Audit of Corporate Clients, Banks and PSUs. She possesses rich experience in Statutory Audits & Direct Taxation. She has also gained experience in handling Incorporation, takeovers and other ROC compliance matters of companies."
          />
          <TeamCard
            image={
              "https://vbsb.in/wp-content/uploads/2021/10/CA.AKHIL-DIXIT-VBSB--768x768.jpg"
            }
            footer={{
              subtitle: "CA. Akhil Dixit, B.Com, ACA",
              email: "ca.akhil@vbsb.in",
            }}
            name={"CA. Akhil Dixit, B.Com, ACA"}
            description="Mr. Akhil Dixit is the member of the Institute of Chartered Accountants of India. He has a rich experience in Internal Audits cum System Audits of major Corporate Clients.
            He works in the area of Direct Tax and also handling taxation works of Government
            departments. He has handled various Costing Analysis Projects of major Corporate Clients.
            He is also handling audit of some manufacturing units of one of the Major
            FMCG Company. "
          />
          <TeamCard
            image={
              "https://vbsb.in/wp-content/uploads/2020/07/nayan-548x560-1.jpg"
            }
            footer={{
              subtitle: "CA. Nayan Tapadiya, B.Com, ACA",
              email: "ca.nayan@vbsb.in",
            }}
            name={"CA. Vaibhav Bhatnagar"}
            description="Mr. Nayan Tapadiya is the member of the Institute of Chartered Accountants of India.
            He completed his graduation from DAVV in 2016. He has a good experience in the
            Internal and Statutory Audits of Corporate and Non Corporate Clients. His key
            experience comes in implementing complicated system process in an entity which in turns result in smooth flow of information and data among various stakeholders. He possess good understanding of Direct tax law. He is one of the youngest and energetic partner of the firm. "
          />

          <TeamCard
            image={
              "https://vbsb.in/wp-content/uploads/2021/10/image001-e1633679933508.jpg"
            }
            footer={{
              subtitle: "CA. Rama Chaithanya Desu, B.Com, ACA",
              email: "ca.rama@vbsb.in",
            }}
            name={"Rama Chaithanya Desu"}
            description="Mr. Rama Chaithanya Desu is a member of the Institute of Chartered Accountants of India since January 2011 having 15+ years of experience as a Financial advisory, System Audits and establishing internal controls and implementing the accounting systems for corporate and non-corporate entities. Delivered multiple assignments across world in establishing internal controls and implementing the
            accounting systems."
          />
          <TeamCard
            image={
              "https://vbsb.in/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-03-at-15.54.16-e1633679863121-1024x1024.jpeg"
            }
            footer={{
              subtitle: "CA. Anu Jain, M.Com, FCA",
              email: "ca.anu@vbsb.in",
            }}
            name={"Anu Jain"}
            description="Mrs. Anu Jain is the member of the Institute of Chartered Accountants of India since January 2015 and is a fellow member of ICAI. She has served as a partner in practicing CA Firm where her major experience consisted of Auditing & Assurance and Direct Tax Law. She has a good experience in registrations and regular compliance work of Direct and Indirect Taxes. She has a rich experience in Internal audit and reporting of Corporates & non-Corporates."
          />
        </div>
      </section>
      <WhatsAppFab />
      <Footer />
    </div>
  );
}

export default index;
