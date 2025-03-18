"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    FiHome, FiFileText, FiDollarSign, FiUsers, FiClipboard, 
    FiTrendingUp, FiUser, FiSettings, FiHelpCircle 
} from "react-icons/fi"; // Feather Icons
import { MdAdminPanelSettings, MdExplore } from "react-icons/md"; // Material Icons

const menuItems = [
    { name: "Home", icon: <FiHome />, href: "./" },
    { name: "Papers", icon: <FiFileText />, href: "/dashboard/research-papers" },
    { name: "Grants", icon: <FiDollarSign />, href: "/dashboard/grants" },
    { name: "Reviews", icon: <FiClipboard />, href: "/dashboard/peer-reviews" },
    { name: "Citations", icon: <FiTrendingUp />, href: "/dashboard/citation-tracking" },
    { name: "Funding", icon: <FiDollarSign />, href: "/dashboard/funding" },
    { name: "Profile", icon: <FiUser />, href: "/dashboard/profile" },
    { name: "Admin", icon: <MdAdminPanelSettings />, href: "/dashboard/admin" },
    { name: "Explorer", icon: <MdExplore />, href: "/dashboard/explorer" },
    { name: "Settings", icon: <FiSettings />, href: "/dashboard/settings" },
    { name: "Help", icon: <FiHelpCircle />, href: "/dashboard/help" },
];

const Sidebar = () => {
    const pathname = usePathname(); // Get current path

    return (
        <aside className="fixed top-16 w-64 h-[calc(100vh-65px)] flex flex-col shadow-lg bg-[#160c1f] z-5 pt-2">
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#581b57] scrollbar-track-[#1e112d] px-4 pt-2 pb-6">
                <nav>
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <div
                                className={`flex items-center px-4 py-2 my-1 cursor-pointer rounded-md transition-all duration-200 ${
                                    pathname === item.href 
                                        ? "bg-[#581b57] text-white shadow-md" 
                                        : "text-gray-300 hover:bg-[#1e112d]"
                                }`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.1 }}
                                    className="flex items-center w-full"
                                >
                                    <span className="text-xl mr-3">{item.icon}</span>
                                    <span>{item.name}</span>
                                </motion.div>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
