import { useState } from "react";

const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Sports",
    "Books",
    "Toys",
];

export default function CategoriesSidebar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`fixed z-999999 left-0  shadow-xl top-0 h-screen bg-[#fff] text-white transition-all duration-300 ${isHovered ? "w-60" : "w-16"
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col items-start p-4">
                <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 rounded-full bg-[#000] flex items-center justify-center text-[#000]">

                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify text-[white]"><path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" /></svg>
                    </div>
                    {isHovered && <span className="text-lg text-[black] font-semibold">All Categories</span>}
                </div>

                {isHovered && (
                    <ul className="mt-4 space-y-2">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-[black] rounded-md cursor-pointer"
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
