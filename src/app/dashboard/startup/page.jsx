// import { motion } from "framer-motion";
// import StartupCard from "../../components/dashboard/StartupCard.tsx";

// const startups = [
//     {
//         name: "Immunegix",
//         logo: "/dashboard/immunegix.png",
//         date: "February 15, 2025",
//         description: "Lorem ipsum dolor sit amet consectetur. Dui orci consequat sagittis volutpat vitae.",
//         lookingFor: "CoFounder",
//         founder: "Prashuk Jain",
//         founderImage: "/dashboard/founder.png",
//     }, {
//         name: "Immunegix",
//         logo: "/dashboard/immunegix.png",
//         date: "February 15, 2025",
//         description: "Lorem ipsum dolor sit amet consectetur. Dui orci consequat sagittis volutpat vitae.",
//         lookingFor: "CoFounder",
//         founder: "Prashuk Jain",
//         founderImage: "/dashboard/founder.png",
//     }, {
//         name: "Immunegix",
//         logo: "/dashboard/immunegix.png",
//         date: "February 15, 2025",
//         description: "Lorem ipsum dolor sit amet consectetur. Dui orci consequat sagittis volutpat vitae.",
//         lookingFor: "CoFounder",
//         founder: "Prashuk Jain",
//         founderImage: "/dashboard/founder.png",
//     }, {
//         name: "Immunegix",
//         logo: "/dashboard/immunegix.png",
//         date: "February 15, 2025",
//         description: "Lorem ipsum dolor sit amet consectetur. Dui orci consequat sagittis volutpat vitae.",
//         lookingFor: "CoFounder",
//         founder: "Prashuk Jain",
//         founderImage: "/dashboard/founder.png",
//     }, {
//         name: "Immunegix",
//         logo: "/dashboard/immunegix.png",
//         date: "February 15, 2025",
//         description: "Lorem ipsum dolor sit amet consectetur. Dui orci consequat sagittis volutpat vitae.",
//         lookingFor: "CoFounder",
//         founder: "Prashuk Jain",
//         founderImage: "/dashboard/founder.png",
//     }, {
//         name: "Immunegix",
//         logo: "/dashboard/immunegix.png",
//         date: "February 15, 2025",
//         description: "Lorem ipsum dolor sit amet consectetur. Dui orci consequat sagittis volutpat vitae.",
//         lookingFor: "CoFounder",
//         founder: "Prashuk Jain",
//         founderImage: "/dashboard/founder.png",
//     },
// ];

// const Startup = () => {
//     return (
//         <motion.div
//             className="w-full px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//         >
//             <div className="flex items-center justify-between">
//                 <div className="py-6">
//                     <motion.h1
//                         className="text-2xl md:text-5xl font-bold"
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                     >
//                         Explore Startups
//                     </motion.h1>
//                     <motion.p
//                         className="hidden md:block text-gray-600 text-lg mt-3"
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.4, delay: 0.2 }}
//                     >
//                         Discover various startup ideas to help grow
//                     </motion.p>
//                 </div>
//                 <motion.button
//                     className=" bg-blue-600 rounded-xl p-2 md:p-2 flex gap-1 md:gap-2 text-white font-semibold px-3 md:px-5 transition-all duration-300 hover:bg-blue-700 active:scale-95 cursor-pointer items-center justify-center"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ duration: 0.1, delay: 0.01 }}
//                     onClick={() => window.location.href = "/startup/register"}
//                 >
//                     <h1 className="text-[14px] md:text-xl">Create Startup</h1>
//                     <img src="/dashboard/plus.png" className="flex flex-row md:w-7 h-5" alt="" />
//                 </motion.button>
//             </div>
//             <motion.div
//                 className="w-[60%] flex items-center mb-4 px-5 bg-white rounded-[12px] border-[1px] border-gray-300 focus:ring-blue-500 text-lg text-gray-500 font-semibold focus:ring-2 transition-all duration-300"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.1, delay: 0.1 }}
//                 whileHover={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
//             >
//                 <img src="/dashboard/search.png" className="w-5 md:w-7 md:h-7" alt="" />
//                 <input
//                     type="text"
//                     placeholder="Search grants..."
//                     className="px-3 text-[16px] py-2 md:px-5 md:py-4 outline-none w-full"
//                 />
//             </motion.div>
//             <motion.div
//                 className="grid md:grid-cols-2 gap-5"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: {
//                         opacity: 1,
//                         y: 0,
//                         transition: { staggerChildren: 0.15 },
//                     },
//                 }}
//             >
//                 {startups.map((startup, index) => (
//                     <motion.div
//                         key={index}
//                         variants={{
//                             hidden: { opacity: 0, y: 20 },
//                             visible: { opacity: 1, y: 0 },
//                         }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <StartupCard startup={startup} />
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.div>
//     );
// };

// export default Startup;
