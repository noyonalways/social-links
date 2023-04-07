import { motion } from "framer-motion";
import React from "react";

const SocialButton = ({ link, }) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <motion.a
      key={link.id}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, delay: link.delay }}
      target="_blank"
      href={link.url}
      className="hover:shadow-md shadow w-full bg-slate-200 dark:bg-slate-800/[.8] flex items-center space-x-4 p-3 rounded active:scale-95 duration-200 transform"
    >
      <span className="text-xl">{link.icon}</span>{" "}
      <span className="font-medium dark:text-gray-100 ">{link.name}</span>
    </motion.a>
  );
};

export default SocialButton;
