import heroVideo from "../../assets/heroVideo.mov";
import Signup from "../../components/Signup";
function HomeHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
      />

      {/* OVERLAY CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to MOKCHA
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Experience the best culinary art — taste, texture, and tradition.
        </p>
        <Signup />
      </div>

      {/* OPTIONAL DARK OVERLAY (for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
    </section>
  );
}

export default HomeHero;
