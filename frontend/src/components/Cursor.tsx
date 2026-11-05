"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (cursorRef.current) {
				cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		// cleanup — removes listener when component unmounts
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			ref={cursorRef}
			className="cursor fixed top-0 left-0 w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 transition-all duration-500 ease-out -mt-[8px] -ml-[8px]"
		/>
	);
}
