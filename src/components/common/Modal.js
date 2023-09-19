import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Modal = ({ setOpenModal, storeData }) => {
  const [tabState, settabState] = useState("basic");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [igLink, setIgLink] = useState("");
  const [ytLink, setYtLink] = useState("");

  function checkAll(arr) {
    arr.forEach(ele => {
      if(ele.length==0){
        return false;
      }
    }
    );
    return true;
  }

  function handleDone() {

    if (checkAll([name, email, phone, ytLink, igLink])) {
      setOpenModal(false);
      storeData({ name, email, phone, igLink, ytLink });
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        onClick={() => setOpenModal(false)}
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="bg-white py-6 gap-y-4  rounded-lg z-10 w-[34rem] flex flex-col justify-center shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
        <div className="flex px-6 pb-6 justify-between items-center border-b border-[#D9D9D9] ">
          <h1 className="text-xl font-semibold font-figtree">
            Add New Profile
          </h1>
          <RxCross1
            onClick={() => setOpenModal(false)}
            className="text-[#999CA0] cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 gap-16 px-6 font-figtree">
          <p
            style={{ borderColor: tabState == "basic" ? "#3F84F8" : "#D9D9D9" }}
            className={`text-center border-b-4 py-2 rounded-sm`}
          >
            Basic
          </p>
          <p
            style={{
              borderColor: tabState == "contact" ? "#3F84F8" : "#D9D9D9",
            }}
            className={`text-center border-b-4 py-2 rounded-sm`}
          >
            Contact
          </p>
        </div>
        {tabState == "basic" ? (
          <div className="px-6 space-y-4">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-figtree">
                Enter Name*
              </label>
              <input
                className="text-base font-figtree bg-[#FFF] border border-[#F2F2F2] p-2 rounded-lg focus:outline-none"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Eg. John Doe"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-figtree">
                Enter Email*
              </label>
              <input
                className="text-base font-figtree bg-[#FFF] border border-[#F2F2F2] p-2 rounded-lg focus:outline-none"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Eg. johndoe@gmail.com"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-figtree">
                Enter Phone*
              </label>
              <input
                className="text-base font-figtree bg-[#FFF] border border-[#F2F2F2] p-2 rounded-lg focus:outline-none"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Eg. 9999222111"
                id="email"
              />
            </div>
          </div>
        ) : (
          <div className="px-6 space-y-4">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-figtree">
                Enter Email*
              </label>
              <input
                className="text-base font-figtree bg-[#FFF] border border-[#F2F2F2] p-2 rounded-lg focus:outline-none"
                type="email"
                onChange={(e) => setIgLink(e.target.value)}
                value={igLink}
                placeholder="Eg. ..instagram.com/username"
                id="text"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-figtree">
                Enter Phone*
              </label>
              <input
                className="text-base font-figtree bg-[#FFF] border border-[#F2F2F2] p-2 rounded-lg focus:outline-none"
                type="text"
                onChange={(e) => setYtLink(e.target.value)}
                value={ytLink}
                placeholder="Eg. ..youtebe/username"
                id="email"
              />
            </div>
          </div>
        )}
        <div className="flex justify-end px-6 border-t border-[#F2F2F2] pt-6 mt-3">
          {tabState == "basic" ? (
            <button
              type="submit"
              onClick={() => settabState("contact")}
              className="bg-[#3E84F8] font-figtree font-semibold text-white  p-2 rounded-md text-sm"
            >
              Next
            </button>
          ) : (
            <div className="space-x-3">
              <button
                onClick={() => settabState("basic")}
                className="bg-[#FFF] text-black font-figtree font-semibold border border-[#999CA0] p-2 rounded-md text-sm"
              >
                Back
              </button>
              <button
                onClick={handleDone}
                className="bg-[#3E84F8] font-figtree font-semibold text-white  p-2 rounded-md text-sm"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
