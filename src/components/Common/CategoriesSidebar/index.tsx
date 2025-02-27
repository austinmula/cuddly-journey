import { useState } from "react";

export default function CategoriesSidebar({ categories }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`fixed z-999999 lg:block hidden left-0  shadow-xl top-0 h-screen bg-[#fff] text-white transition-all duration-300 ${isHovered ? "w-60" : "w-16"
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col items-start p-4">
                <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#000] flex items-center justify-center text-[#000]">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify text-[white]"><path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" /></svg>
                    </div>
                    {isHovered && <span className="text-lg text-[black] no-wrap font-semibold">All Categories</span>}
                </div>

                {isHovered && (
                    <ul className="mt-4 space-y-2 w-full">
                        {categories.map((category) => (
                            <a key={category._id} href={`shop/?category=${category._id}`}>
                                <li
                                    className="px-4 py-2 hover:bg-gray-2 text-[black] rounded-md cursor-pointer"
                                >
                                    {category.title}
                                </li>
                            </a>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
