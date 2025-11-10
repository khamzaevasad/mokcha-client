import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default RootLayout;
