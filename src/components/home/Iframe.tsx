function Iframe() {
  return (
    <div className="my-20 align-elements">
      <div className="flex items-center justify-center flex-col my-6">
        <h3 className="text-center text-4xl font-bold">Our Address</h3>
        <div className="w-[120px] h-px border my-3"></div>
      </div>
      <iframe
        className="w-full h-[400px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.176197193257!2d126.9868427767348!3d37.5744684720366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2dc50a26c8d%3A0x8250ea36ca52434!2sibis%20Ambassador%20Seoul%20Insadong!5e0!3m2!1sru!2skr!4v1763745285928!5m2!1sru!2skr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Seoul location map"
      ></iframe>
    </div>
  );
}

export default Iframe;
