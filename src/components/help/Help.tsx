import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Help() {
  const tabs = ["Terms", "FAQ", "Contact"];
  const [activeTab, setActiveTab] = useState("Terms");

  return (
    <div className="w-full max-w-3xl mx-auto mt-16">
      <h1 className="text-3xl font-bold text-center mb-10">Help Center</h1>

      {/* TAB HEADERS */}
      <div className="flex justify-center gap-8 relative border-b pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-semibold relative ${
              activeTab === tab
                ? "text-primary"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {tab}

            {activeTab === tab && (
              <motion.div
                layoutId="active-underline"
                className="absolute left-0 right-0 h-[3px] bg-primary bottom-[-3px] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "Terms" && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-xl p-8"
            >
              <h2 className="text-xl font-semibold mb-3">Terms & Conditions</h2>
              <div className="flex flex-col gap-3">
                <p className="text-gray-700">
                  Making orders from the site is complete, live register to use
                  communications you must pass.
                </p>
                <hr />
                <p className="text-gray-700">
                  This is why you cannot cancel your orders once you have paid
                  for them check before making payments.
                </p>
                <hr />
                <p className="text-gray-700">
                  It is not possible to write and distribute personal ads
                  without the permission of the admin.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "FAQ" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-xl p-8"
            >
              <h2 className="text-xl font-semibold mb-3">
                Frequently Asked Questions
              </h2>
              <details
                className="collapse bg-card border border-base/20"
                name="my-accordion-det-1"
                open
              >
                <summary className="collapse-title font-semibold">
                  How to make order?
                </summary>
                <div className="collapse-content text-sm">
                  You should choose products and make an order via basket
                </div>
              </details>
              <details
                className="collapse bg-card border border-base/20"
                name="my-accordion-det-1"
              >
                <summary className="collapse-title font-semibold">
                  How long does delivery takes?
                </summary>
                <div className="collapse-content text-sm">
                  It depends on your location. The max delivery time is 1 hour
                </div>
              </details>
              <details
                className="collapse bg-card border border-base/20"
                name="my-accordion-det-1"
              >
                <summary className="collapse-title font-semibold">
                  Is our details secure in this platform?
                </summary>
                <div className="collapse-content text-sm">
                  Of course, we take full responsibility for your provided.
                </div>
              </details>
            </motion.div>
          )}

          {activeTab === "Contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-xl p-8"
            >
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <form className="">
                <fieldset className="fieldset">
                  <label className="label">Your Name</label>
                  <input
                    type="text"
                    className="input w-full border border-base-100 bg-white"
                    placeholder="Type your name here"
                  />
                  <label className="label">Your email</label>
                  <input
                    type="email"
                    className="input w-full border border-base-100 bg-white"
                    placeholder="Type your email here"
                  />
                  <label className="label">Message</label>

                  <textarea
                    placeholder="Bio"
                    className="textarea textarea-md w-full border border-base-100 bg-white"
                  ></textarea>
                  <button className="bg-primary py-3 px-5 rounded-2xl mt-4 text-white text-xl">
                    Send
                  </button>
                </fieldset>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Help;
