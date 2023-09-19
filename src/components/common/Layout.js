import React, { useState } from 'react'
import Sidebar from './Sidebar'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'


function  Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
        return (
          <div className="flex bg-[#F8FAFF]">
            {/* Sidebar Component */}
              <div onClick={()=>setSidebarOpen(prev =>!prev)} className=' md:hidden absolute right-2 top-2 bg-blue-500 p-2 rounded-full'>
                { sidebarOpen ? <RxCross2 className='text-xl text-white'/> :<GiHamburgerMenu className='text-xl text-white'/>}
              </div>
            <div className={`${sidebarOpen?"mdM:absolute":"mdM:max-w-0  mdM:overflow-hidden"} z-40`}>
            <Sidebar />
            </div>
            
            {/* Content */}
            <div className="flex-grow">
              {children}
            </div>
          </div>
        );
      }
      


export default Layout