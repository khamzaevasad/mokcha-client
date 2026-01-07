import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-base-300">
        <Navbar />
      </header>
      <main className="flex-1 pt-[40px]">
        <section>
          <Outlet />
        </section>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
