import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Helmet added
import "./Hero.css";
import { assets } from "../../assets/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
   <Helmet>
  <title>Best PPF, Ceramic Coating & Car Detailing in Islamabad | Sparkprodetails</title>
  <meta
    name="description"
    content="Discover premium PPF, ceramic coating, glass coating, detailing, chrome rims, and solar tinting services in Islamabad. Sourced from top UK and US brands, ensuring unbeatable protection and shine for your vehicle."
  />
  <meta
    name="keywords"
    content="PPF, Ceramic Coating, Car Detailing, Best Car Detailing in Islamabad, Best PPF in Islamabad, Paint Protection Film, Glass Coating, Chrome Rims, Solar Tinting, Car Shine, Car Protection Islamabad"
  />
  <meta property="og:title" content="Best PPF, Ceramic Coating & Car Detailing in Islamabad | Sparkprodetails" />
  <meta property="og:description" content="Explore premium PPF, ceramic coating, detailing, and tinting services in Islamabad. Unmatched protection and shine from top US and UK brands." />
  <meta property="og:image" content="https://www.sparkprodetails.com/path-to-featured-image.jpg" />
  <meta property="og:url" content="https://www.sparkprodetails.com" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Best PPF, Ceramic Coating & Car Detailing in Islamabad | Sparkprodetails" />
  <meta name="twitter:description" content="Top-tier PPF, ceramic coating, and car detailing services in Islamabad. Enhance your vehicle's protection and shine with expert services and premium products." />
  <meta name="twitter:image" content="https://www.sparkprodetails.com/path-to-featured-image.jpg" />
</Helmet>


      <div className="hero-container">
      <video
  autoPlay
  loop
  muted
  playsInline
  className="hero-video"
  preload="none"
  poster={assets.G8}
>
  <source src={assets.videoFile} type="video/mp4" />
</video>

        <div className="ppf-hero">
          <h1 className="h1-hero">Our Services</h1>
          <h3 className="h2-hero">
            Premium PPF Imported from the UK and US – Guaranteed Protection for
            Your Vehicle
          </h3>
          <h3 className="h2-hero">
            Ceramic Coating: "Unmatched protection and shine – for a finish that
            lasts, imported from the UK and US."
          </h3>
          <h3 className="h2-hero">
            Glass Coating: "Crystal-clear protection – keep your glass spotless
            and durable with our premium coating."
          </h3>
          <h3 className="h2-hero">
            Car Detailing: "Bringing your vehicle back to its showroom glory with
            expert detailing from start to finish."
          </h3>
          <h3 className="h2-hero">
            Chromic Rims: "Turn heads with gleaming chromic rims – precision-engineered,
            imported for perfection."
          </h3>
        </div>
      </div>

      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>PPF Overview</h3>
          <img
            className="chrome-img-hero"
            src={assets.ppfmain_icon}
            alt="Description f image"
          />
          <p>
            Our Paint Protection Film (PPF) is sourced directly from the UK and US, ensuring the highest quality and performance for your vehicle. Made from 100% original, guaranteed PPF, it offers unbeatable protection against scratches, chips, and other environmental damages. We stand behind the quality of our products, offering a money-back guarantee backed by both UK and US standards. When you choose our PPF, you’re investing in top-tier vehicle protection that maintains your car's pristine appearance while providing long-lasting durability. Trust in our imported PPF for unmatched peace of mind and superior vehicle care.
          </p>
          <Link className="Link-for-Go" to="/services/ppf">
            <h2 className="click-fro-ppg-section">Click here for PPF services</h2>
          </Link>
        </div>
      </section>

      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>Ceramic Coating Overview</h3>
          <img
            className="chrome-img-hero"
            src={assets.ceramic_icon}
            alt="Description f image"
          />
          <p>
            Ceramic coating for cars is a high-performance liquid polymer applied to a vehicle’s exterior. This coating chemically bonds with the car's paint, creating a protective layer that offers long-lasting protection against dirt, water, UV rays, and other environmental contaminants. It enhances the vehicle's shine, making it easier to clean, while also providing scratch resistance and preventing oxidation. Ceramic coatings help maintain the paint's integrity, keeping it looking new for longer. US and UK-based products offer durable, high-quality coatings, providing superior protection and enhancing the appearance of vehicles.
          </p>
          <Link className="Link-for-Go" to="/services/ceramic-coating">
            <h2 className="click-fro-ppg-section">Click here for Ceramic Coating services</h2>
          </Link>
        </div>
      </section>

      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>Car Deep Detailing Overview</h3>
          <img
            className="chrome-img-hero"
            src={assets.detailing_icon}
            alt="Description f image"
          />
          <p>
            Car deep detailing is a comprehensive cleaning and restoration process designed to bring out the best in your vehicle’s appearance. Unlike a regular car wash, deep detailing goes beyond the surface to meticulously clean and restore every nook and cranny of your car. From the exterior to the interior, this service includes polishing, paint correction, engine bay cleaning, leather conditioning, upholstery treatment, and much more. The result? A showroom-worthy finish with enhanced protection against dirt, stains, and wear. US and UK-based detailing services offer expert care, using premium products to restore your vehicle’s shine, leaving it looking fresh and pristine.
          </p>
          <Link className="Link-for-Go" to="/services/detailing">
            <h2 className="click-fro-ppg-section">Click here for Car Deep Detailing services</h2>
          </Link>
        </div>
      </section>

      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>Glass Coating Overview</h3>
          <img
            className="chrome-img-hero"
            src={assets.glass_icon}
            alt="Description f image"
          />
          <p>
            Glass coating for cars is a protective treatment applied to the vehicle’s exterior, creating a durable, hydrophobic layer that offers numerous benefits. It enhances water repellency, causing rain and water to bead up and roll off, improving visibility and keeping the surface cleaner. The coating also helps repel contaminants like dirt, bird droppings, tree sap, and road salts, making it easier to maintain the vehicle’s exterior. Additionally, it provides a layer of protection against minor scratches and enhances the vehicle's shine, giving it a glossy, polished look. With glass coating, car owners enjoy easier cleaning, less frequent washing, and long-lasting protection for their vehicle’s finish.
          </p>
          <Link className="Link-for-Go" to="/services/glass-coating">
            <h2 className="click-fro-ppg-section">Click here for Glass Coating services</h2>
          </Link>
        </div>
      </section>

      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>Solar Tinting Overview</h3>
          <img
            className="chrome-img-hero"
            src={assets.tint_icon}
            alt="Description f image"
          />
          <p>
            Solar tinting is a popular window treatment for cars that involves applying a special film to the vehicle’s windows, including the front and rear glass. This film is designed to reduce the amount of heat, UV rays, and glare entering the vehicle, providing a more comfortable driving experience. Solar tinting helps keep the interior cooler by blocking out a significant portion of solar heat, reducing the need for air conditioning. Additionally, it protects the car’s upholstery and interior from UV damage, which can cause fading and deterioration over time. The tint also enhances privacy and adds a sleek, stylish look to the car’s exterior.
          </p>
          <Link className="Link-for-Go" to="/appointment">
            <h2 className="click-fro-ppg-section">Click here for Solar Tints services</h2>
          </Link>
        </div>
      </section>

      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>DeChroming Rims Overview</h3>
          <img
            className="chrome-img-hero"
            src={assets.rims_icon}
            alt="Description f image"
          />
          <p>
            Dechroming rims is a popular customization technique where the color of the vehicle’s rims is changed using a high-quality, adhesive film or sheet. This process allows car owners to give their rims a fresh, stylish look without permanently altering the metal. The colored film is applied over the rims, providing a sleek, glossy finish. One of the key benefits of dechroming rims is that, if desired, the film can be removed months or even years later without damaging the rims themselves, preserving their original condition. This method offers a non-permanent, cost-effective way to enhance the appearance of your vehicle while maintaining the quality of the rims.
          </p>
          <Link className="Link-for-Go" to="/services/chromic-rims">
            <h2 className="click-fro-ppg-section">Click here for DeChroming Rims services</h2>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
