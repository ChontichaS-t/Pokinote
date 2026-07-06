"use client";
import Lottie from "lottie-react";
import dog from "../../public/dog.json";
import bee from "../../public/bee.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
    if (progress >= 100) {
      router.push("/todolist");
    }
  }, [progress, router]);

    return (
        
        <main className="flex flex-col min-h-screen items-center justify-center bg-white gap-30">
           
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <Lottie
                        animationData={bee}
                        loop={true}
                        className="absolute top-2 right-6 w-12 h-12 object-contain animate-bounce"
                    />
                    <Lottie
                        animationData={dog}
                        loop={true}
                        className="w-48 h-48"
                    />
                </div>
                <h1 className="text-5xl font-bold text-[#FCA3B7]">
                    Pokinote
                </h1>
            </div>
        
            <div className="w-full max-w-[280px] flex flex-col items-center">
                <div className="h-6 w-full rounded-full border-[3px] border-[#FCD34D] bg-white p-[2px] overflow-hidden">
                    <div
                        className="h-full rounded-full bg-[#FCA3B7] transition-all duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="mt-3 text-lg font-bold tracking-widest text-[#FCD34D]">
                    loading...
                </p>
            </div>

        </main>
    );
}