import React from "react";
import { HiPlus } from "react-icons/hi";
import {PiWhatsappLogoThin, PiInstagramLogo, PiYoutubeLogo} from "react-icons/pi"
import {CiMail} from "react-icons/ci"

const AddProfile = ({ setOpenModal, name, email, phone, igLink, ytLink }) => {
  return (
    <div className="bg-white flex justify-center items-center py-10 px-8 rounded-xl border-2 border-[#E0E0E0] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
      {!name ? (
        <div
          onClick={() => setOpenModal(true)}
          className="flex flex-col justify-center items-center gap-y-2 cursor-pointer"
        >
          <HiPlus className="w-16 h-16 text-[#999CA0] bg-[#F2F2F2] rounded-full p-3" />
          <span className="text-[#858585] font-semibold font-figtree">
            Add Profile
          </span>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full py-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="">
            <ul className="grid grid-cols-2 gap-y-5 gap-x-16 text-sm underline">
            <li className="flex gap-1 items-center">
            <span className="bg-[#E9F9EB] p-1 block w-fit rounded-full"><PiWhatsappLogoThin className="text-xl text-[#3CC952]"/></span>
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
              <li className="flex gap-1 items-center justify-start">
              <span className="bg-[#FFE9EC] p-1 block w-fit rounded-full"><PiInstagramLogo className="text-xl text-[#FF4E64]"/></span>
                <a href={igLink}>{igLink.length>12?igLink.slice(0,12)+"...":igLink}</a>
              </li>
              <li className="flex gap-1 items-center">
            <span className="bg-[#EBE6F9] p-1 block w-fit rounded-full"><CiMail className="text-xl text-[#5C33CF]"/></span>
                <a href={`mailto:${email}`}>{email.length>12?email.slice(0,12)+"...":email}</a>
              </li>
              <li className="flex gap-1 items-center justify-start">
              <span className="bg-[#FFE9EC] p-1 block w-fit rounded-full"><PiYoutubeLogo className="text-xl text-[#FF4E64]"/></span>
                <a href={ytLink}>{ytLink.length>12?ytLink.slice(0,12)+"...":ytLink}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProfile;
