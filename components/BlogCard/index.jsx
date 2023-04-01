import React from "react";

function BlogCard() {
  return (
    <div className="w-full shadow-md">
      <div className="card-cover w-full">
        <img
          src="https://vjmglobal.com/wp-content/uploads/2023/02/nancy-25.png"
          alt="blog-card-cover"
          className="w-full"
        />
      </div>
      <div className="card-body py-8 px-10">
        <h3 className="text-3xl text-green-800 font-semibold">
          Key takeaways from the 49th GST Council Meeting{" "}
        </h3>
        <p className="my-3 text-black/50">
          The GST Council meeting was held for the 49th Time on 18th February
          2023 under the chairmanship of the Hon’ble Union Finance & Corporate
          Affairs Minister. Key points of discussion were Clearance of
          Compensation cess dues to States, revision of GST rates of a few
          items, GST appellate tribunal and its structure, Capacity-based
          taxation and special composition scheme for certain sectors, and
          additional trade facilitation measures. Key Takeaways from the 49th
          GST Council Meeting: 1. Measures for facilitation of trade a.
          Extension of time limit for application for revocation of cancellation
          of registration. Presently, as per Section 30 of the
        </p>
      </div>
      <div className="card-footer border-t border-black/50 py-3 px-6">
        <p className="text-sm text-black/50">28/02/2023</p>
      </div>
    </div>
  );
}

export default BlogCard;
