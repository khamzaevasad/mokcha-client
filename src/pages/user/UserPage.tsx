import { CheckCircle, MapPin } from "lucide-react";
import { useState } from "react";
import { Settings } from "../../components/user/Settings";
import { OrderHistory } from "../../components/user/OrderHistory";
import { useApp } from "../../hooks/useApp";
import { serverApi } from "../../lib/config";
import { Navigate } from "react-router-dom";

export default function UserPage() {
  const [activeTab, setActiveTab] = useState("settings");
  const { authMember } = useApp();

  if (!authMember) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - User Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-8">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={
                      authMember?.memberImage
                        ? `${serverApi}/${authMember?.memberImage}`
                        : "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                    }
                    alt="Profile"
                    className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {authMember?.memberNick}
                </h2>
                <p className="text-sm text-gray-500 capitalize mb-2">
                  {authMember?.memberType.toLowerCase()}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {authMember?.memberAddress
                      ? authMember.memberAddress
                      : "No Address"}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {authMember?.memberDesc
                    ? authMember.memberDesc
                    : "No Description"}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Your points $
                  {authMember?.memberPoints ? authMember.memberPoints : " 0"}
                </p>
              </div>

              <div className="flex gap-3 justify-center mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-sky-50 hover:bg-sky-100 flex items-center justify-center text-sky-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 mb-6 flex gap-2">
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === "settings"
                    ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70  text-white shadow-xs shadow-gray-500/30"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Profile Settings
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === "orders"
                    ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70  text-white shadow-xs shadow-gray-500/30"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Order History
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "settings" ? <Settings /> : <OrderHistory />}
          </div>
        </div>
      </div>
    </div>
  );
}
