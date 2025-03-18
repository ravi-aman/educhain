import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import Sidebar from "../../components/dashboard/Sidebar";
import Tabs from "../../components/dashboard/Tabs";
import MobileNavbar from "../../components/dashboard/MobileNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex-1 flex flex-col">
                <div className="bg-white hidden md:block">
                    <DashboardNavbar />
                </div>
                <div className="md:hidden fixed ">
                    <MobileNavbar />
                </div>
                <div className="flex ">
                    <div className="hidden md:flex">
                        <Sidebar />
                    </div>
                    <div className="flex mt-[3rem] md:mt-[5rem] md:ml-[18rem] md:w-[75%] w-full">
                        <Outlet />
                    </div>
                    <div className="md:hidden fixed ">
                        <Tabs />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;
