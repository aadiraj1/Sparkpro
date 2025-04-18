import React, { useEffect } from "react";
import "./dechrome.css";
import { assets } from '@assets/icon';

const Dechrome = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this will only run on mount

  return (
    <div className="maincontainer">
        <div className="car-animation-container">
  <img className="car-animation" src={assets.logo_icon} alt="Car Animation" />
</div>

      <h1 className="ppf-heading">New Vibes. Same Rims. Dechroming Done Right.</h1>
      
      <p className="ppf-intro">
  Want to give your ride a bold new look without going permanent? Dechroming your rims is the ultimate game-changer. Using high-quality adhesive films, we wrap your chrome rims in sleek, stylish finishes—matte, gloss, satin, or even custom colors—transforming the vibe of your vehicle in just one session.
</p>

<p className="ppf-intro">
  <strong>Why Dechroming-Rims?</strong><br /><br />
  It’s a completely <strong>non-invasive process</strong> that adds instant attitude and personality to your car, all while keeping your original rims <strong>untouched underneath</strong>. The best part? If you ever want to switch things up again, the film peels off cleanly with <strong>no damage</strong>, making it a smart, reversible style upgrade.
  <br /><br />
  Want <strong>blacked-out rims</strong>? <strong>Matte bronze</strong>? <strong>Glossy gunmetal</strong>? Dechroming lets you <strong>change the color and finish</strong> of your rims without the need for permanent paint or powder coating. Whether you're going for a <strong>stealthy</strong>, <strong>luxury</strong>, or <strong>sporty aesthetic</strong>, there’s a film to match your vibe.
</p>


      <h2 className="ppf-subheading">Why Choose Our Dechroming Service?</h2>
      <ul className="ppf-features">
      <li>✔️ <strong>Premium Quality Films</strong> – We use only top-tier, automotive-grade vinyl for flawless finish and long-lasting durability.</li>
  <li>✔️ <strong>Non-Permanent, Fully Reversible</strong> – Change the look without commitment. The film peels off cleanly without damaging your rims.</li>
  <li>✔️ <strong>Custom Color & Finish Options</strong> – From matte black to gloss bronze and everything in between—style it your way.</li>
  <li>✔️ <strong>Paint & Rim Friendly</strong> – No sanding, no scratching, no compromise to your original wheel surface.</li>
  <li>✔️ <strong>Professional Installation</strong> – Applied by skilled technicians for a seamless, bubble-free finish every time.</li>
  <li>✔️ <strong>Cost-Effective Upgrade</strong> – Get the look of high-end wheels without the cost of replacing them.</li>
      </ul>

      <h2 className="ppf-subheading">Professional Installation</h2>
      <p>
      Your vehicle’s rims will be transformed by certified professionals using high-quality wrap films—delivering a flawless, custom finish without compromising the original surface.     </p>

      {/* <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
    
          src="https://www.youtube.com/embed/M6tMtsmEmjo?loop=1&rel=0&playlist=M6tMtsmEmjo" 

          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div> */}

      <h2 className="ppf-subheading">Complete Dechroming Package Includes:</h2>
      <ul className="ppf-package">
      <li>✅ <strong>Rim Dechroming (Included)</strong> – Give your wheels a whole new attitude with a choice of matte, gloss, satin, or custom finishes.</li> <li>✅ <strong>Window Trim Blackout (Bonus)</strong> – Black or color-matched film for a sleek, factory-custom finish on chrome window trims.</li>
      <li>✅ <strong>Front Grille & Badge Delete</strong> – Transform your vehicle's face with a blackout or stealth color wrap on your front grille and badges.</li> <li>✅ <strong>Mirror Cap Wrapping (Included)</strong> – Finish the look with wrapped mirror caps to complete your fully dechromed aesthetic.</li> <li>✅ <strong>High-Gloss or Matte Finishes</strong> – Choose your style: murdered out matte, stealth satin, or premium gloss—it’s your vibe.</li> <li>✅ <strong>Premium Surface Prep</strong> – Every area is deep-cleaned and prepped for long-lasting wrap adhesion—no shortcuts.</li> <li>✅ <strong>Safe & Reversible</strong> – Change your style without commitment. The film can be removed anytime, leaving your original chrome intact.</li> <li>✅ <strong>Expert Installation</strong> – Installed by certified wrap specialists to ensure smooth, bubble-free, seamless results.</li>
      </ul>

      <h2>Matte, Gloss, or Satin – Choose the Finish that Fits Your Vibe</h2>
      {/* <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/50VQ_bpJP-0?loop=1&rel=0&playlist=50VQ_bpJP-0" 
          
          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div> */}

      <p className="ppf-cta">
        Give your car the protection it deserves — with style, shine, and long-lasting value.
      </p>
      <h2 className="ppf-subheading">Which kind of Dechroming we have:</h2>
      <ul className="ppf-package">
    
     




<h2 className="colored-ppf-note">
  🎨 Your Vehicle, Our Commitment. <span> Trusted Dechroming, Unmatched</span> Protection!
</h2>
<li>✔️🌟 <strong>Long-Lasting Protection:</strong> Imported films protect against dirt, scratches, and harsh elements, keeping rims stylish for years.</li>

<li>✔️⚡ <strong>Quick & Efficient Service:</strong> Fast, professional dechroming with no hassle or downtime for a quick transformation.</li>

<li>✔️💡 <strong>Variety of Finishes:</strong> Choose matte, gloss, satin, or custom colors to match your vehicle's style.</li>

<li>✔️🔒 <strong>Secure & Safe Application:</strong> Precise film application ensures no rim damage and a bubble-free finish.</li>

<li>✔️🌍 <strong>Eco-Friendly Options:</strong> Environmentally friendly films for great aesthetics and sustainability.</li>

<li>✔️🔑 <strong>Enhance Your Vehicle’s Value:</strong> Modern dechroming boosts your car’s appeal and resale value.</li>

<li>✔️🛡️ <strong>Solar Guard & Scratch Resistance:</strong> UV-resistant films prevent fading and maintain your rims’ finish.</li>

<li>✔️☀️ <strong>Sun Fade Protection:</strong> Films resist sun fading, keeping rims vibrant over time.</li>

<li>✔️⚡ <strong>Radiation Resistance:</strong> Films protect from UV radiation, preserving rims’ quality and finish.</li>

<li>✔️🌞 <strong>Light Damage Protection:</strong> Shields your rims from sunlight damage and discoloration.</li>

<li>✔️🔥 <strong>Heat Protection:</strong> Films withstand high temperatures, preventing heat damage in all weather.</li>

<li>✔️🌧️ <strong>Weatherproofing:</strong> Exceptional weather resistance keeps rims pristine in all conditions.</li>



      </ul>
      <div className="ppf-button-container">
  <a href="/appointment" className="book-btn">📅 Book Your Appointment Now</a>
</div>

      <h2 className="ppf-subheading">Gallery: Our Dechroming Work</h2>
      <div className="ppf-gallery">
  {[assets.t1,assets.t2,assets.t3,assets.t4,assets.t5,assets.t6,assets.t7,assets.t8].map((img, index) => (
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
  );
};

export default Dechrome;
