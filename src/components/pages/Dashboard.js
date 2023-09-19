import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Layout from "../common/Layout";
import BarGraph from "../BarGraph";
import axios from "axios";
import AllStat from "../AllStat";
import TopProduct from "../TopProduct";
import AddProfile from "../AddProfile";
import Modal from "../common/Modal";

// const data =
//     {
//       "dashboard": {
//         "totalRevenue": '$2,129,430',
//         "revenueIncreasePercentage": 2.5,
//         "totalTransactions": '1,520',
//         "transactionIncreasePercentage": 2.8,
//         "totalLikes": '6,000',
//         "likesIncrease": 1.5,
//         "totalUsers": '1,000',
//         "usersIncreasePercentage": 1.2,
//         "activityData": [
//           {
//             "guest": 300,
//             "user": 100
//           },
//           {
//             "guest": 400,
//             "user": 200
//           },
//           {
//             "guest": 200,
//             "user": 400
//           },
//           {
//             "guest": 500,
//             "user": 300
//           }
//         ],
//         "productDictionary": [
//           { name: "Basic Tee", value: 55},
//           { name: "Custom Short Pants", value: 31},
//           { name: "Super Hoodie", value: 14}
//         ]
//       }
//     }

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [igLink, setIgLink] = useState("");
  const [ytLink, setYtLink] = useState("");

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://raw.githubusercontent.com/sanki92/dummyAPI/master/dashboard.json"
      );
      setData(res.data);
    } catch (error) {
      console.log("Something went wrong while fetching data", error);
    } finally {
      setLoading(false);
    }
  };
  const storeData=(data)=>{
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setIgLink(data.igLink)
    setYtLink(data.ytLink)
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <Layout>
      {!loading ? (
        <div className="pl-4 pr-10 mdM:px-4 py-8 space-y-10 ">
          {openModal && <Modal setOpenModal={setOpenModal} storeData={storeData}  />}
          <h1 className="font-bold text-2xl">Dashboard</h1>
          {/* All stats */}
          <AllStat data={data} />
          {/* Bar graph */}
          <div className="bg-white py-4 px-8 rounded-xl border-2 border-[#E0E0E0] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.10)]">
            <h1 className="text-lg font-bold">Activities</h1>
            <div className="text-[#858585] text-sm flex justify-between">
              May - June 2021
              <ul className="flex gap-x-6">
                <li className="flex items-center gap-x-2 text-sm font-lato">
                  <span className="w-2 h-2 rounded-full  bg-[#EE8484] block"></span>{" "}
                  <span>Guest</span>
                </li>
                <li className="flex items-center gap-x-2 text-sm font-lato">
                  <span className="w-2 h-2 rounded-full  bg-[#98D89E] block"></span>{" "}
                  <span>User</span>
                </li>
              </ul>
            </div>
            <BarGraph data={data} />
          </div>
          <div className="grid grid-cols-2 mhM:grid-cols-1 mhM:gap-y-10 gap-x-10">
            <TopProduct data={data} />
            <AddProfile
              setOpenModal={setOpenModal}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              igLink={igLink}
              setIgLink={setIgLink}
              ytLink={ytLink}
              setYtLink={setYtLink}
            />
          </div>
        </div>
      ) : (
        <div className=" h-full flex justify-center items-center">
          <h1 className="text-3xl font-bold">loading...</h1>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
