import { Outlet } from "react-router-dom";
import Navbar from "../components/homeComponents/Navbar";
import Footer from "../components/homeComponents/Footer";

function RootLayout() {
  return (
    <>
      <header className="bg-base-300">
        <Navbar />
      </header>
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
