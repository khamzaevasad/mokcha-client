import { User, MapPin, Phone } from "lucide-react";
import { useApp } from "../../hooks/useApp";
import { Messages, serverApi } from "../../lib/config";
import { useState } from "react";
import { MemberUpdateInput } from "../../lib/types/member";
import { T } from "../../lib/types/common";
import { showError, showSuccess } from "../../utils/toastService";
import MemberService from "../../services/MemberService";

export function Settings() {
  const { authMember, setAuthMember } = useApp();
  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>(
    {
      memberNick: authMember?.memberNick,
      memberPhone: authMember?.memberPhone,
      memberAddress: authMember?.memberAddress,
      memberDesc: authMember?.memberDesc,
      memberImage: authMember?.memberImage,
    }
  );
  const [memberImage, setMemberImage] = useState<string>(
    authMember?.memberImage
      ? `${serverApi}/${authMember?.memberImage}`
      : "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
  );

  // Handle image upload preview
  const handleImageChange = (e: T) => {
    const file = e.target.files[0];
    const fileType = file.type;
    const validateImagesTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (!validateImagesTypes.includes(fileType)) {
      showError(Messages.error5);
    } else {
      if (file) {
        setMemberUpdateInput((prev) => ({ ...prev, memberImage: file }));
        setMemberImage(URL.createObjectURL(file));
      }
    }
  };

  const memberNickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberUpdateInput((prev) => ({ ...prev, memberNick: e.target.value }));
  };

  const memberPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberUpdateInput((prev) => ({ ...prev, memberPhone: e.target.value }));
  };
  const memberDescHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemberUpdateInput((prev) => ({ ...prev, memberDesc: e.target.value }));
  };
  const memberAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberUpdateInput((prev) => ({
      ...prev,
      memberAddress: e.target.value,
    }));
  };

  const handleSubmitButton = async () => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      if (
        memberUpdateInput.memberNick === "" ||
        memberUpdateInput.memberPhone === "" ||
        memberUpdateInput.memberAddress === "" ||
        memberUpdateInput.memberDesc === ""
      ) {
        throw new Error(Messages.error3);
      }

      const member = new MemberService();
      const result = await member.updateMember(memberUpdateInput);
      setAuthMember(result);
      showSuccess("Modified successfully");
    } catch (err: any) {
      console.log(err);
      const msg =
        err?.response?.data?.message ??
        err?.response?.data ??
        err?.message ??
        "It seems an unknown error has occurred";

      showError(String(msg));
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <form>
        {/* Image Upload Section */}
        <div className="flex items-start gap-6 pb-8 border-b border-gray-100 mb-8">
          <div className="relative group">
            <img
              src={memberImage}
              alt="Profile"
              className="w-28 h-28 rounded-2xl object-cover shadow-md"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">
              Profile Picture
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              JPG, JPEG, PNG formats only. Max size 5MB.
            </p>
            <label className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg cursor-pointer transition-colors border border-gray-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span className="text-sm font-medium">Choose File</span>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Username Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            name="memberNick"
            value={memberUpdateInput.memberNick}
            onChange={memberNickHandler}
            placeholder="Enater your username"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
          />
        </div>

        {/* Phone and Address Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="memberPhone"
                value={memberUpdateInput.memberPhone}
                onChange={memberPhoneHandler}
                placeholder="Enter phone number"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="memberAddress"
                value={memberUpdateInput.memberAddress}
                onChange={memberAddressHandler}
                placeholder="Enter your address"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Description Field */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            name="memberDesc"
            rows={4}
            value={memberUpdateInput.memberDesc}
            onChange={memberDescHandler}
            placeholder="Tell us about yourself..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmitButton}
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70  text-white font-medium rounded-xl shadow-xs shadow-gray-500/30 transition-all duration-200 cursor-pointer"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
