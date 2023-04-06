import { useState, useEffect } from "react";

function DarkModeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// Check local storage for user preference
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			setIsDarkMode(true);
		} else if (theme === "light") {
			setIsDarkMode(false);
		} else {
			// Check media query for system preference
			const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
			setIsDarkMode(prefersDarkMode.matches);
		}
	}, []);

	const handleToggle = () => {
		const newIsDarkMode = !isDarkMode;
		setIsDarkMode(newIsDarkMode);
		localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
	};

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	return (
		<button
			onClick={handleToggle}
			className="text-lg w-8 h-8 rounded-full dark:ring-primary/[.8] ring-secondary/[.8] ring-2"
		>
			{isDarkMode ? "🌙" : "🌞"}
		</button>
	);
}

export default DarkModeToggle;
