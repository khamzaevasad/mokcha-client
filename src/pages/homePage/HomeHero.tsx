import { useEffect, useState } from "react";
import heroVideo from "../../assets/heroVideo.mov";
import Signup from "../../components/Signup";
import { heroTitle } from "../../data/hero";
import { AnimatePresence, motion } from "framer-motion";

function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroTitle.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
        <motion.h1
          className="text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-[#58cc03]">MOKCHA</span>
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={heroTitle[index].title}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-4xl font-semibold">
              <span className="text-[#58cc03]">{heroTitle[index].title}</span>
              <span className="text-3xl">{heroTitle[index].icon}</span>
            </div>
          </motion.div>
        </AnimatePresence>
        <Signup />
      </div>

      {/* OPTIONAL DARK OVERLAY (for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
    </section>
  );
}

export default HomeHero;
