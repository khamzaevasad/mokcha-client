import React from "react";

function Iframe() {
  return (
    <div className="my-20 align-elements">
      <div className="flex items-center justify-center flex-col my-6">
        <h3 className="text-center text-4xl font-bold">Our Address</h3>
        <div className="w-[120px] h-px border my-3"></div>
      </div>
      <iframe
        referrerPolicy="no-referrer-when-downgrade"
        title="Tashkent location map"
        className="w-full h-[400px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47991.5361443031!2d69.2040889!3d41.3110815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b05d24c2561%3A0x48b7e61a7d926b53!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2skr!4v1684560123456"
      ></iframe>
    </div>
  );
}

export default Iframe;
