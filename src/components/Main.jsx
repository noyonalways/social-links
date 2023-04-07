import React, { useRef } from "react";
import {
	BsFacebook,
	BsTwitter,
	BsInstagram,
	BsLinkedin,
	BsGithub,
	BsYoutube,
} from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import SocialButton from "../SocialButton";

const links = [
	{
		name: "Facebook",
		delay: ".3",
		url: "https://facebook.com/noyonalways",
		icon: <BsFacebook className="text-[#3b5998]" />,
	},
	{
		name: "Twitter",
		delay: ".4",
		url: "https://twitter.com/noyonalways",
		icon: <BsTwitter className="text-[#00acee]" />,
	},
	{
		name: "Instagram",
		delay: ".5",
		url: "https://instagram.com/noyonalways",
		icon: <BsInstagram className="text-[#d62976]" />,
	},
	{
		name: "LinkedIn",
		delay: ".6",
		url: "https://linkedin.com/in/noyonalways",
		icon: <BsLinkedin className="text-[#0072b1]" />,
	},
	{
		name: "GitHub",
		delay: ".7",
		url: "https://github.com/noyonalways",
		icon: <BsGithub className="text-[#171515] dark:text-white" />,
	},
	{
		name: "YouTube",
		delay: ".8",
		url: "https://youtube.com/@deskofnoyon",
		icon: <BsYoutube className="text-[#FF0000]" />,
	},
];

const Main = () => {
	const constraintsRef = useRef(null);
	return (
		<section className="font-spaceGrotesk">
			<div className="container">
				<div className="flex items-center justify-center py-16 md:py-0 md:h-screen">
					<div className="flex flex-col items-center w-full max-w-sm  px-2 py-5 md:px-6  rounded">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="space-y-5 flex flex-col items-center mb-4"
						>
							<motion.img
								drag
								dragConstraints={{
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
								}}
								ref={constraintsRef}
								className="w-28 rounded-full ring-4 ring-offset-4 ring-secondary dark:ring-primary"
								src="https://i.ibb.co/2YZcbFv/Photo-Room-20220905-212939.png"
								alt=""
							/>
							<div className="space-y-0">
								<h1 className="text-2xl font-extrabold text-secondary dark:text-primary">
									Noyon Rahman
								</h1>
								<p className="text-paragraph font-medium">__ Web Developer</p>
							</div>
						</motion.div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
							className="space-y-3 w-full mb-8"
						>
							<AnimatePresence>
								{links.map((link) => (
									<SocialButton key={link.name} link={link} />
								))}
							</AnimatePresence>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="font-spaceGrotesk px-2 py-2 flex items-center justify-between w-full"
						>
							<a
								href="https://noyonrahman.xyz"
								target="_blank"
								className="flex items-center space-x-2"
							>
								<div className="w-8 h-8 bg-slate-800 ring-2 dark:ring-primary/[.8] ring-secondary/[.8] text-gray-100 flex justify-center items-center rounded-full font-bold">
									N
								</div>
								<div className="leading-4 text-sm dark:text-gray-200 text-dark font-bold">
									Noyon <br />
									Rahman
								</div>
							</a>
							<div>
								<DarkModeToggle />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
