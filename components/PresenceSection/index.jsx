import React from "react";

function PresenceSection() {
  return (
    <div className="py-16 px-12 lg:px-32 bg-[#135887] text-white">
      <h2 className="text-left text-3xl mb-6">Our Presence</h2>
      <div className="presences grid lg:grid-cols-3 xl:grid-cols-1 gap-16">
        <div className="presence-card">
          <h3>Bhopal,Madhya Pradesh</h3>
          <address>
            M 12,BDA COMPLEX, Manisha Market, Shahpura, Bhopal, Madhya Pradesh
            462016
          </address>
          <p>
            Contact No.<a href="tel:+918884237766">+918884237766</a>
          </p>
        </div>

        <div className="presence-card">
          <h3>Mumbai,Maharastra</h3>
          <address>
            Mumbai Office: A-103, Satellite Royale, Gen A.K. Vaidya Marg,
            Goregaon East, Mumbai, Mumbai (MH) – 400063
          </address>
          <p>
            Contact No.<a href="tel:+918884237766">+918884237766</a>
          </p>
        </div>
        <div className="presence-card">
          <h3>Orai,Uttar Pradesh</h3>
          <address>
            Orai Office: Jalaun Road,Near Hotel Shree Hari, New Patel Nagar,
            Orai (UP)- 285001
          </address>
          <p>
            Contact No.<a href="tel:+919450834488">+919450834488</a>
          </p>
        </div>
        <div className="presence-card">
          <h3>Indore,Madya Pradesh</h3>
          <address>
            405, Shreenathji Avenue, 158, RNT Marg,  Indore (MP) 452001
          </address>
          <p>
            Contact No.<a href="tel:+919584446996">+919584446996</a>
          </p>
        </div>
        <div className="presence-card">
          <h3>Hyderabad,Telangana</h3>
          <address>
            Shri Sai Nagar Colony, Beerumguda, Hyderabad, Telangana- 502032
          </address>
          <p>
            Contact No.<a href="tel:+919052184567">+919052184567</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PresenceSection;
