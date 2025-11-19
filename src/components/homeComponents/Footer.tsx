import { UtensilsCrossed } from "lucide-react";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-card-100 text-primary p-10 border">
      <aside>
        <UtensilsCrossed />

        <p className="font-bold">
          Mokcha Restaurant
          <br />
          Serving authentic Turkish & European cuisine since 2020
        </p>

        <p>
          © {new Date().getFullYear()} Mokcha Restaurant — All rights reserved.
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 2c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.9.4-1.2.7-.3.3-.6.7-.7 1.2-.1.3-.3.9-.3 1.9C3.1 9.9 3.1 10.3 3.1 12c0 3.1 0 3.5.1 4.7.1 1 .2 1.6.3 1.9.2.5.4.9.7 1.2.3.3.7.6 1.2.7.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.9-.4 1.2-.7.3-.3.6-.7.7-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.9-.7-1.2-.3-.3-.7-.6-1.2-.7-.3-.1-.9-.3-1.9-.3C15.5 4.2 15.1 4.2 12 4.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m5-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.6 3.2c-3.6-.2-11.6-.2-15.2 0-3.9.3-4.4 2.6-4.4 8.8 0 6.1.5 8.5 4.4 8.8 3.6.2 11.6.2 15.2 0 3.9-.3 4.4-2.6 4.4-8.8 0-6.1-.5-8.5-4.4-8.8zm-10.6 12.8V8l8 4-8 4z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8H6v4h3v12h5V12h3.6l.4-4H14V6.7c0-.9.2-1.3 1.1-1.3H18V0h-3.8C10.6 0 9 1.6 9 4.6V8z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
