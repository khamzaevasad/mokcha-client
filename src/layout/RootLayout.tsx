import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-start">
            <NavLink to="/">
              <h3 className="text-2xl font-bold">Nusret</h3>
            </NavLink>
          </div>
          <div className="navbar-end">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/member-page">My Page</NavLink>
            <NavLink to="/help">Help</NavLink>
          </div>
        </nav>
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
