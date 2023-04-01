import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function FeedbackCard({ description }) {
  return (
    <div className="feedback-card px-6 shadow-md hover:scale-110  transition-all hover:shadow-2xl py-6 cursor-pointer">
      <p className="text-black/50">{description}</p>
      <div className="feedback-card-footer py-3 flex items-center gap-6">
        {/* <div className="feedback-author-avatar w-12 h-12 bg-gray-300 rounded-full"></div> */}
        <div className="feeback-author-meta">
          <h2 className="text-xl font-semibold">Person Name</h2>
          <p>Person position</p>
        </div>
      </div>
    </div>
  );
}

function index() {
  return (
    <div>
      <Header index={1} />
      <section className="px-16 lg:px-32 py-32 grid grid-cols-2 gap-32">
        <div className="testimonial-hero-content">
          <h3 className="text-6xl font-semibold">Testimonials</h3>
          <p className="text-black/50">What our clients have to say about us</p>
        </div>
        <img
          src="https://vjmglobal.com/wp-content/uploads/2021/07/05-services3-p5kfazl3svscetdgolycz06no6sbvmi5tfzpzml8zk.jpg"
          alt="testimonial-hero-image"
          className="shadow-2xl -rotate-1"
        />
      </section>
      <div className="section feebacks section px-32 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
        <FeedbackCard
          description="Quality of images should be used in an efficient format in order to get a better image resolution for example webp format instead of the 
currently used png format."
        />
        <FeedbackCard description="The images used in the 'Services We Provide' section are getting clipped out and not looking good." />
        <FeedbackCard
          description="The background image transition in the 'Services We Provide' section while scrolling is not looking good as the background images used 
should be having similarities and should not be in contrast with each other."
        />
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />

        <FeedbackCard description="Striving For Excellence Everyday.... We Deliver Value Based Services To Our Clients, Resulting In Growth And Enhancing Business Prospects.The same text is getting repeated on the landing page on the slideshow animations." />
      </div>
      <Footer />
    </div>
  );
}

export default index;
