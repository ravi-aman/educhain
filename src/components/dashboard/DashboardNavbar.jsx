"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiMessageCircle, FiBell, FiChevronDown } from "react-icons/fi";
import { Avatar } from "@nextui-org/react";

const DashboardNavbar = () => {
    const [activeAccount, setActiveAccount] = useState("Personal");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-[#160c1f] shadow-[0_1px_5px_rgba(173,216,230,0.4),0_2px_6px_rgba(255,255,102,0.4)]">
            <div className="flex items-center space-x-4">
                <div className="flex items-center pr-36">
                    <h1 className="font-bold text-xl">Amango</h1>
                </div>
                <div className="relative flex items-center rounded-md px-3 py-1 bg-[#581b57]">
                    <FiSearch className="text-white" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 bg-transparent outline-none border-none text-white placeholder-gray-300"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <FiMessageCircle size={24} className="cursor-pointer text-white" />
                <div className="relative cursor-pointer">
                    <FiBell size={24} className="text-white" />
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                        5
                    </span>
                </div>
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 p-2 text-white"
                    >
                        <Avatar src="" size="md" className="border border-white" />
                        <span className="font-medium flex gap-2 items-center">
                            {activeAccount}
                            <FiChevronDown size={18} className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
                        </span>
                    </button>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute right-0 mt-4 w-48 p-1 bg-black border border-[#581b57] rounded-lg shadow-lg"
                            >
                                <button
                                    onClick={() => {
                                        setActiveAccount("Personal");
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left text-white hover:bg-[#581b57] rounded-[10px]"
                                >
                                    Personal Account
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveAccount("Business");
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left text-white hover:bg-[#581b57] rounded-[10px]"
                                >
                                    Business Account
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
