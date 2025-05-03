import React, { useEffect } from "react";
import "./ppf.css";
import { assets } from '@assets/icon';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PPF = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Best PPF in Islamabad | Premium Paint Protection Film | Sparkprodetails</title>
        <meta
          name="description"
          content="Discover Islamabad's top Paint Protection Film (PPF) services at Sparkprodetails. Protect your car with premium PPF for superior UV protection, scratch resistance, and a stunning glossy finish. Trusted by car enthusiasts for quality and durability."
        />
        <meta
          name="keywords"
          content="best PPF in Islamabad, car paint protection, paint protection film, PPF installation Islamabad, car detailing Islamabad, UV protection, scratch resistant film, glossy finish PPF, Sparkprodetails"
        />
        <meta property="og:title" content="Best PPF in Islamabad | Premium Paint Protection Film | Sparkprodetails" />
        <meta
          property="og:description"
          content="Sparkprodetails offers premium Paint Protection Film (PPF) in Islamabad. Get long-lasting protection against scratches, UV rays, and wear—keep your car looking brand new."
        />
        <meta property="og:image" content="https://www.sparkprodetails.com/logo.jpg" />
        <meta property="og:url" content="https://www.sparkprodetails.com/services/ppf" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best PPF in Islamabad | Premium Paint Protection Film | Sparkprodetails" />
        <meta
          name="twitter:description"
          content="Get premium Paint Protection Film (PPF) at Sparkprodetails Islamabad. Advanced protection with scratch resistance, UV blocking, and glossy finish for your vehicle."
        />
        <meta name="twitter:image" content="https://www.sparkprodetails.com/logo.jpg" />
      </Helmet>

      <div className="maincontainer">
        <div className="car-animation-container">
          <img className="car-animation" src={assets.logo_icon} alt="Car Animation" />
        </div>

        <h1 className="ppf-heading">Premium Paint Protection Film (PPF) Services</h1>

        <p className="ppf-intro">
          Looking for the best Paint Protection Film (PPF) in Islamabad? You've found it! Our premium PPF is imported from the UK and USA, offering unbeatable quality, durability, and value.
          <br /><br />
          <strong>What are the benefits of PPF?</strong> It acts as an invisible armor for your vehicle—shielding your paint from scratches, rock chips, UV damage, water spots, and swirl marks.
          Not only does it preserve your car’s showroom finish, but it also boosts resale value and makes maintenance a breeze.
        </p>

        <h2 className="ppf-subheading">Why Choose Our PPF?</h2>
        <ul className="ppf-features">
          <li>✔️ <strong>High Gloss Finish</strong> – Up to 1.5x glossier than untreated paint.</li>
          <li>✔️ <strong>Scratch & Dent Resistance</strong> – Shields from rock chips & light impacts.</li>
          <li>✔️ <strong>Hydrophobic Coating</strong> – Dirt and water slide off with ease.</li>
          <li>✔️ <strong>UV Protection</strong> – Defends paint from fading and oxidation.</li>
          <li>✔️ <strong>Swirl Mark Resistance</strong> – Keeps paint looking fresh longer.</li>
          <li>✔️ <strong>Low Maintenance</strong> – Less cleaning, more driving.</li>
        </ul>

        <h2 className="ppf-subheading">Professional Installation</h2>
        <p>
          Your vehicle will be handled by certified professionals, and completed within 12 hours — so you're back on the road in no time.
        </p>

        <div className="ppf-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/LHADtSQBQ0w?rel=0"
            title="PPF Installation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="ppf-subheading">Complete PPF Package Includes:</h2>
        <ul className="ppf-package">
          <li>✔️🔧 <strong>1-Time Free Replacement</strong> – Coverage for life’s unexpected moments.</li>
          <li>✔️🧼 <strong>2 Premium Washes</strong> – Keep that shine going strong.</li>
          <li>✔️🧽 <strong>Clay Bar Treatment</strong> – Removes deep contaminants for smooth paint.</li>
          <li>✔️🛠️ <strong>Paint Correction</strong> – Fixes imperfections before applying film.</li>
          <li>✔️🛋️ <strong>Interior Restoration</strong> – Freshens up your cabin's look and feel.</li>
          <li>✔️✨ <strong>Ceramic Coating on Plastic Parts</strong> – Extra defense where it counts.</li>
        </ul>

        <h2>PPF Protects Your Car</h2>
        <div className="ppf-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/U2v08ogqypo?rel=0"
            title="PPF Installation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="ppf-cta">
          Give your car the protection it deserves — with style, shine, and long-lasting value.
        </p>

        <h2 className="ppf-subheading">Which kind of PPF We have:</h2>
        <ul className="ppf-package">
          <li>✔️🛡️ <strong>XPEL Ultimate Plus (Gloss & Clear):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>XPEL Stealth (Matte Finish):</strong> 7 mil (0.178 mm)</li>
          <li>✔️🛡️ <strong>XPEL Defender (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>
          <li>✔️🛡️ <strong>XPEL Fusion Plus (Self-Healing):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>3M Scotchgard Pro Series (Gloss & Clear):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>3M Scotchgard Pro Series (Matte):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>3M Scotchgard Clear Shield (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>
          <li>✔️🛡️ <strong>SunTek Ultra (Gloss & Clear):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>SunTek Matte PPF:</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>SunTek PPF (Standard Clear):</strong> 6–8 mil (0.152–0.203 mm)</li>
          <li>✔️🛡️ <strong>Ceramic Pro PPF (Standard Clear):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>Ceramic Pro PPF (Matte):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>Ceramic Pro PPF (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>
          <li>✔️🛡️ <strong>Llumar PPF (Clear):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>Llumar PPF (Matte):</strong> 8 mil (0.203 mm)</li>
          <li>✔️🛡️ <strong>Llumar PPF (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>
        </ul>

        <h2 className="colored-ppf-note">
          🎨 Also, We Offer a Variety of Colors for Your PPF—Customize Your Ride!
        </h2>

        <div className="ppf-cta-button">
          <Link to="/get-quote">
            <button className="btn-ppf-quote">Get Your Free Quote Now!</button>
          </Link>
        </div>

        <h2>Trust the Experts at Sparkprodetails</h2>
        <p>Our team of certified professionals ensures your PPF installation is flawless, protecting your vehicle and enhancing its appearance for years to come.</p>
      </div>
    </>
  );
};

export default PPF;
