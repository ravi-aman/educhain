"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, X } from "lucide-react";

function MobileNavbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 5);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = (e) => {
        if (!e.target.closest(".menu-content")) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("click", closeMenu);
        } else {
            document.removeEventListener("click", closeMenu);
        }
        return () => document.removeEventListener("click", closeMenu);
    }, [menuOpen]);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 shadow-md bg-white"
            initial={{ y: -100 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <img src="/logo.png" alt="Neecop Logo" className="h-8" />

            <div className="flex items-center space-x-4">
                <div className="relative cursor-pointer">
                    <img src="/dashboard/bell.png" alt="Notifications" className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                        5
                    </span>
                </div>
                <button onClick={toggleMenu} className="focus:outline-none">
                    {menuOpen ? <X /> : <MenuIcon />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="absolute top-full left-0 right-0 bg-white shadow-md p-4 menu-content"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col space-y-4">
                            <a href="/dashboard" className="text-lg font-semibold">Home</a>
                            <a href="/funds" className="text-lg font-semibold">Funds</a>
                            <a href="/startups" className="text-lg font-semibold">Startups</a>
                            <a href="/profile" className="text-lg font-semibold">Profile</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default MobileNavbar;
