import React, { useEffect } from "react";
import "./Glasscoating.css";
import { assets } from '@assets/icon';
import { Helmet } from "react-helmet";

const Glasscoating = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this will only run on mount

  return (
 <>

<Helmet>
  <meta charSet="utf-8" />
  <title>Best Glass Coating in Islamabad & Rawalpindi | Spark Pro Details</title>
  <meta
    name="description"
    content="Protect your vehicle with premium glass coating in Islamabad and Rawalpindi. Spark Pro Details offers hydrophobic protection, crystal-clear gloss, and long-lasting durability."
  />
  <meta
    name="keywords"
    content="Glass Coating Islamabad, Glass Coating Rawalpindi, Paint Protection Film, Auto Detailing Islamabad, Hydrophobic Coating Pakistan, Car Shine Islamabad"
  />
  <meta name="author" content="Spark Pro Details" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Glass Coating in Islamabad & Rawalpindi | Spark Pro Details" />
  <meta
    property="og:description"
    content="Spark Pro Details offers high-performance glass coating in Islamabad & Rawalpindi. Crystal-clear shine, hydrophobic protection, and professional detailing."
  />
  <meta property="og:image" content="https://www.sparkprodetails.com/logo.jpg" />
  <meta property="og:url" content="https://www.sparkprodetails.com/glass-coating" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:title" content="Glass Coating in Islamabad & Rawalpindi | Spark Pro Details" />
  <meta
    name="twitter:description"
    content="Premium glass coating in Islamabad & Rawalpindi by Spark Pro Details. Long-lasting clarity, water-repellent finish, and strong protection."
  />
  <meta name="twitter:image" content="https://www.sparkprodetails.com/logo.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Structured Data: LocalBusiness + Glass Coating Offer */}
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Spark Pro Details",
      "image": "https://www.sparkprodetails.com/logo.jpg",
      "logo": "https://www.sparkprodetails.com/logo.jpg",
      "url": "https://www.sparkprodetails.com/",
      "telephone": "+92-310-5555027",
      "description":
        "Top-rated Glass Coating services in Islamabad and Rawalpindi. Long-lasting paint clarity, water-beading hydrophobic finish, and professional-grade surface protection.",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad & Rawalpindi",
        "addressRegion": "Islamabad Capital Territory",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.6844",
        "longitude": "73.0479"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "22:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61556978987668",
        "https://www.instagram.com/sparkpro.details/",
        "https://www.youtube.com/@Sparkprodetails/shorts"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Glass Coating Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Glass Coating",
              "description":
                "Premium glass coating for vehicles in Islamabad and Rawalpindi. Delivers long-lasting water beading, shine enhancement, and resistance to UV and environmental damage.",
              "serviceType": "Glass Coating",
              "areaServed": {
                "@type": "Place",
                "name": "Islamabad, Rawalpindi"
              }
            },
            "priceCurrency": "PKR",
            "availability": "https://schema.org/InStock",
            "url": "https://www.sparkprodetails.com/glass-coating"
          }
        ]
      }
    })
  }}
/>

</Helmet>

    <div className="maincontainer">
              <div className="car-animation-container">
        <img className="car-animation" src={assets.logo_icon} alt="Car Animation" />
      </div>
      
      <h1 className="ppf-heading">Crystal clear. Tough protection. Premium glass coating services</h1>
      
      <p className="glasscoat-intro">
  Restore the brilliance and protect your car’s paintwork with time-tested, high-performance 
  <strong> Glass Coating</strong> technology! This durable, transparent layer chemically bonds 
  to your vehicle’s surface, forming a resilient shield that guards against environmental stressors.
  <br /><br />
  <strong>Why choose Glass Coating?</strong> It offers excellent resistance to <strong>oxidation</strong>, 
  <strong>UV degradation</strong>, and <strong>acid rain</strong>, while minimizing the impact of 
  <strong> contaminants</strong> like bird droppings, tree sap, and road tar. Its 
  <strong> hydrophobic effect</strong> causes water to bead and slide off easily, significantly 
  reducing water spots and making maintenance effortless. 
  <br /><br />
  The coating also enhances gloss and color depth, giving your car a rich, mirror-like finish. 
  It's the smart, affordable choice for daily drivers who want long-lasting protection, 
  easier cleaning, and that just-polished look — without the higher cost of ceramic coating.
</p>


<h2 className="ppf-subheading">Why Choose Our Glass-Coating?</h2>
      <ul className="ppf-features">
      <li>✔️ <strong>Crystal-Clear Visibility</strong> – Enhanced clarity with reduced glare.</li>
  <li>✔️ <strong>Durable Protection</strong> – Advanced glass coating resists chips, scratches, and impacts.</li>
  <li>✔️ <strong>Water Beading Technology</strong> – Hydrophobic layer ensures water rolls off, keeping your car cleaner.</li>
  <li>✔️ <strong>UV & Environmental Shield</strong> – Shields against UV rays and elements, preventing yellowing and oxidation.</li>
  <li>✔️ <strong>Streak & Spot Resistance</strong> – Eliminates water spots, streaks, and fingerprints for a spotless finish.</li>
  <li>✔️ <strong>Low-Maintenance</strong> – Smooth surface resists dirt and grime, making cleaning easier.</li>
      </ul>





      <h2 className="ppf-subheading">Professional Installation</h2>
      <p>
        Your vehicle will be handled by certified professionals, and completed within 5 hours — so you're back on the road in no time.
      </p>

      <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
    
          src="https://www.youtube.com/embed/tusxiGu0DIA?rel=0"

          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="ppf-subheading">Complete Glass-Coating Packages:</h2>
      <ul className="ppf-package">
      <li>✔️ <strong>Full Exterior Wash & Decontamination</strong> – Removes dirt, contaminants, and grime from the exterior.</li>
  <li>✔️ <strong>Clay Bar Treatment</strong> – Smooths the paint by removing embedded contaminants.</li>
  <li>✔️ <strong>Application of Long-Lasting Glass Coating</strong> – Provides durable protection against water, contaminants, and scratches.</li>
  <li>✔️ <strong>Protection Against Contaminants & Scratches</strong> – Guards against dirt, bird droppings, sap, road salts, and more.</li>
  <li>✔️ <strong>Enhanced Gloss for a Showroom Finish</strong> – Achieves a mirror-like shine and depth.</li>
  <li>✔️ <strong>Hydrophobic Properties</strong> – Water beads up and rolls off for easier cleaning.</li>
  <li>✔️ <strong>2 Free Maintenance Checks (every 6 months)</strong> – Ensures continued protection with regular check-ups.</li>
  <li>✔️ <strong>Complimentary Interior Protection</strong> – Protects leather, fabric, or dashboard materials from stains and wear.</li>
  <li>✔️ <strong>Rims Cleaning & Protection</strong> – Cleans rims and adds a protective coating against brake dust and grime.</li>
  <li>✔️ <strong>Tire Coating</strong> – Keeps tires looking brand new and resistant to dirt.</li>
  <li>✔️ <strong>Engine Room Detailing & Protection</strong> – Cleans the engine bay and applies a protective coating against grime.</li>
      </ul>

      <h2>Glass Coat: Where Protection Meets Perfection</h2>
      <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/KOM_2duOta0?rel=0"


          
          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <p className="ppf-cta">
        Give your car the protection it deserves — with style, shine, and long-lasting value.
      </p>
      <h2 className="ppf-subheading">Which kind of Glass-Coat We have:</h2>
      <ul className="ppf-package">
      <li>✔️🛡️ <strong>Ceramic Pro (US):</strong> Premium coating with long-lasting protection</li>
  <li>✔️🛡️ <strong>Gtechniq (UK):</strong> Advanced nanotechnology for superior surface protection</li>
  <li>✔️🛡️ <strong>CQuartz (US):</strong> High-gloss ceramic coating with hydrophobic performance</li>
  <li>✔️🛡️ <strong>Polish Angel (UK):</strong> Luxury car care with quartz-infused formulas</li>
  <li>✔️🛡️ <strong>Gyeon Quartz (US):</strong> Durable quartz-based coatings for pro-level detailing</li>
  <li>✔️🛡️ <strong>Meguiar's (US):</strong> Trusted brand offering hybrid ceramic protection</li>
  <li>✔️🛡️ <strong>Auto Finesse (UK):</strong> Professional-grade coatings with show car results</li>
  <li>✔️🛡️ <strong>Adam's Polishes (US):</strong> Easy-to-apply ceramic coatings for enthusiasts</li>
  <li>✔️🛡️ <strong>Feynlab (US):</strong> Self-healing and ultra-durable nano coatings</li>
  <li>✔️🛡️ <strong>Bilt Hamber (UK):</strong> Scientifically engineered protection for all surfaces</li>

<h2 className="colored-ppf-note">
  🎨 Perfection is our<span> First priority!</span>
</h2>


      </ul>
      <div className="ppf-button-container">
  <a href="/appointment" className="book-btn">📅 Book Your Appointment Now</a>
</div>

      <h2 className="ppf-subheading">Gallery: Our Glass-Coat Work</h2>
      <div className="ppf-gallery">
  {[assets.G1,assets.G2,assets.G3,assets.G4,assets.G5,assets.G6,assets.G7,assets.G8].map((img, index) => (
    <div className="img-wrapper" key={index}>
      <img src={img} alt={`Image ${index + 1}`} />
    </div>
  ))}
</div>

      <h2 className="ppf-subheading">"100% Trustworthy, Every Time – Quality You Can Rely On!"</h2>
      <div className="ppf-button-container">
  <a href="/appointment" className="book-btn">📅 Book Your Appointment Now</a>
</div>
    </div>
    </>
  );
};

export default Glasscoating;
