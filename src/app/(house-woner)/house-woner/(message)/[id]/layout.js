'use client';
import HouseWonerMessageSidebar from "@/Components/HouseWoner/HouseWonerMessageSidebar";

import icons from "@/icons/icon";
import { useState } from "react";



export default function Layout({ children }) {

    const [showMessage, setShowMessage] = useState(false);
    const handleShowMessage = () => {
        setShowMessage(!showMessage);
    }



    return (
        <div className="grid relative grid-cols-1 md:grid-cols-12 gap-5 p-4 lg:p-0">
            <div className="md:col-span-3 lg:block hidden">
                <HouseWonerMessageSidebar />
            </div>
            {
                // message icon on mobile
                <div className="md:hidden absolute -top-5 right-5 block col-span-3">
                    <div className="flex justify-center items-center">
                        <span onClick={handleShowMessage} className='text-[#ded317]'>
                            {icons.message}
                        </span>
                    </div>
                </div>
            }
            {
                showMessage &&
                <div className="md:hidden z-[999] block absolute top-3 right-0 w-full mx-2 col-span-12">
                    <HouseWonerMessageSidebar />
                </div>
            }
            <div className="flex flex-1 col-span-9">
                {children}
            </div>
        </div>
    );
}