import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
export default function Header() {
    const [Toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    };
    const hideSideMenu = () => {
        setToggle(false);
    }

    const link = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offer",
            sup: "New"
        },
        {
            icon: <IoIosHelpBuoy />,
            name: "Help"
        },
        {
            icon: <FaRegUser />,
            name: "Sign In"
        },
        {
            icon: <BsMinecart />,
            name: "Cart",
            sup: "(2)"
        },
    ]

    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-200 z-10" onClick={hideSideMenu} style={{
                opacity: Toggle ? 1 : 0,
                visibility: Toggle ? "visible" : "hidden"
            }}>
                <div onClick={(e) => { e.stopPropagation(); }} className="w-[500px] bg-white h-full absolute duration-[700] z-20" style={{
                    left: Toggle ? '0%' : '-100%'
                }}>

                </div>
            </div>
            <header className="p-[15px] shadow-lg sticky top-0 z-[9999] bg-white">
                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="w-[70px]">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <div>
                        <span className="font-bold border-b-[3px] border-black">Tatibhandh</span> Raipur, Chhattishghar, India
                        <RxCaretDown onClick={showSideMenu} fontSize={25} className="inline font-bold text-[#fc8019] " />
                    </div>
                    <nav className="flex list-none gap-5 ml-auto font-semiboldbold text-[18px]">
                        {
                            link.map((link, index) => {
                                return <li key={index} className="flex items-center gap-3 hover:text-[#fc8019]">{link.icon}
                                    {link.name} <sup>{link.sup}</sup></li>
                            })
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}