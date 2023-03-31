import Footer from "@/components/Footer";
import FormField from "@/components/FormField";
import Header from "@/components/Header";
import Map from "@/components/Map";
import PresenceSection from "@/components/PresenceSection";
import React from "react";

function index() {
  return (
    <div>
      <Header index={3} />
      <div
        className="career-hero h-[468px] w-full relative bg-black"
        style={{
          backgroundImage: `url("https://vbsb.in/wp-content/uploads/2020/07/mbr-1920x1136-1.jpg")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="gradient-background absolute w-full h-full bg-primary/30"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center flex-col w-[95%] md:w-[75%] lg:w-[65%] mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold">
            Contact Us
          </h1>

          {/* <p className="text-white/70 text-center">
            Opportunity is not a hindrance for success. We at VJM, believe that
            every individual is equipped with unique skills and talent. Our
            Teams are composed of a mix of experienced and fresher professionals
            imbibing the principles of trust, values, commitment and client
            satisfaction. We have innumerable opportunities for dynamic and
            talented professionals having the passion to drive exceptional
            client service. We are looking for research oriented, committed and
            technically strong individuals who are passionate about delivering
            qualitative value added services to clientele. We are also committed
            to fostering a motivating and an energising work environment for our
            people. The diversity and strength of our workforce are fundamental
            to our success. People are our greatest strength and we strive to
            attract and retain our talent pool.
          </p> */}
        </div>
      </div>

      <div className="contact-section py-12 md:py-32 px-6 lg:px-32 grid lg:grid-cols-2 gap-6 md:gap-32">
        <div className="contact-left">
          <div>
            <h1 className="text-5xl ">Let’s Talk</h1>
            <p>
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help
            </p>
          </div>
          <div>
            <div className="mb-3 mt-3">
              <h2 className="text-2xl">Email</h2>
              <p>beebs@gmail.com</p>
            </div>
            <div className="mb-3">
              <h2 className="text-2xl">Address</h2>
              <p>
                M-12 BDA Complex, Manisha Market , Shahpura Bhopal (MP) 462016
              </p>
            </div>
            <div>
              <h2 className="text-2xl">Contacts</h2>
              <p>Mobile: +91 6265255490, 0755- 3550094</p>
            </div>
          </div>
        </div>
        <div className="contact-form flex flex-col items-start gap-3">
          <FormField label={"Name"} placeholder="Full Name" type={"text"} />
          <FormField
            label={"Email"}
            placeholder="Email address"
            type={"email"}
          />
          <FormField label={"Topic"} placeholder="Your Topic" type={"select"} />
          <FormField
            label={"Message"}
            placeholder="Your Message"
            type={"multi"}
          />
          <button className="w-full h-[42px] bg-primary text-white font-semibold">
            Submit
          </button>
        </div>
      </div>

      <Map
        uri={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.303907895077!2d77.42074167355005!3d23.201184186446614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a9f18310bb%3A0x67933ff39bc41dba!2sManisha%20Market%2C%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e1!3m2!1sen!2sus!4v1678988558966!5m2!1sen!2sus"
        }
      />
      <PresenceSection />
      <Footer />
    </div>
  );
}

export default index;
