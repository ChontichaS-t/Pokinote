"use client";
import Lottie from "lottie-react";
import dogCute from "../../../public/dogcute.json";
import heartBeating from "../../../public/Heart Beating.json";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to todolist on successful login
        router.push("/todolist");
    };

    return (
        <main className={`flex flex-col min-h-screen bg-white px-8 pt-4 pb-12 font-sans justify-start transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Main Content Block (Grouped to prevent stretching and shifted up) */}
            <div className="flex flex-col items-center w-full -mt-2">
                {/* Header and Logo Section */}
                <div className="flex flex-col items-center w-full">
                    {/* Lottie Animation (Cute Doggy with Heart) */}
                    <div className="w-64 h-64 flex items-center justify-center relative">
                        <Lottie
                            animationData={dogCute}
                            loop={true}
                            className="w-full h-full object-contain"
                        />
                        <Lottie
                            animationData={heartBeating}
                            loop={true}
                            className="absolute top-2 right-8 w-20 h-20 object-contain pointer-events-none"
                        />
                    </div>
                    
                    <h1 className="text-[28px] font-bold text-[#FFB8D9] mt-1 tracking-tight">
                        Welcome to Pokinote
                    </h1>
                    <p className="text-[15px] text-[#998A92] mt-0.5 font-medium">
                        Note down your daily happiness
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-5">
                    {/* Username Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[14px] font-bold text-[#7A4C62] pl-2">
                            Username
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-5 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#A5929B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full h-[54px] pl-[52px] pr-5 border-2 border-[#FFCCD8] rounded-full text-[#5C4D56] placeholder-[#A5929B] bg-white outline-none focus:border-[#FFAEC9] transition-all text-[15px]"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[14px] font-bold text-[#7A4C62] pl-2">
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <span className="absolute left-5 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#A5929B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-[54px] pl-[52px] pr-5 border-2 border-[#FFCCD8] rounded-full text-[#5C4D56] placeholder-[#A5929B] bg-white outline-none focus:border-[#FFAEC9] transition-all text-[15px]"
                                required
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full h-[54px] mt-2 bg-[#FFC0D3] border-[3px] border-[#FF8FA9] rounded-full text-[#7A4C62] font-bold text-[18px] hover:bg-[#FFAEC9] hover:border-[#FF6B8F] active:scale-[0.98] transition-all cursor-pointer shadow-sm flex items-center justify-center"
                    >
                        Login
                    </button>
                </form>

                {/* OR Separator & Social Login */}
                <div className="w-full flex flex-col items-center gap-4 mt-4">
                    <div className="flex items-center w-full gap-4">
                        <div className="flex-1 h-[1px] bg-[#EFEAEF]"></div>
                        <span className="text-[12px] font-bold text-[#C4B9C0] uppercase tracking-wider">or</span>
                        <div className="flex-1 h-[1px] bg-[#EFEAEF]"></div>
                    </div>

                    {/* Continue with Google */}
                    <button
                        type="button"
                        onClick={() => router.push("/todolist")}
                        className="w-full h-[54px] bg-white border border-[#E5D9DF] rounded-full text-[#5C4D56] font-bold text-[15px] hover:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer shadow-sm flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                        </svg>
                        Continue with Google
                    </button>
                </div>

                {/* Footer Links (Moved inside to shift up together) */}
                <div className="w-full flex justify-between items-center mt-8 pb-4 text-[14px]">
                    <Link
                        href="#"
                        className="font-bold text-[#8B5E75] hover:underline"
                    >
                        Forgot password?
                    </Link>
                    <Link
                        href="#"
                        className="font-bold text-[#B89B4F] hover:underline"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </main>
    );
}
