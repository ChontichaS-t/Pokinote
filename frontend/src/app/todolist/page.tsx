"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Task {
    id: number;
    title: string;
    completed: boolean;
    category: "pink" | "blue" | "yellow" | "green" | "purple";
    icon: "yogurt" | "run" | "matcha" | "leaf" | "book";
    completedAt?: number;
}

export default function TodoListPage() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    
    // Initial Mock Data
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Eat Greek Yogurt", completed: false, category: "pink", icon: "yogurt" },
        { id: 2, title: "Water the plants", completed: true, category: "blue", icon: "run", completedAt: 1 },
        { id: 3, title: "Try new Matcha", completed: false, category: "yellow", icon: "matcha" },
    ]);

    // Drawer State
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newCategory, setNewCategory] = useState<"pink" | "blue" | "yellow" | "green" | "purple">("pink");
    const [newIcon, setNewIcon] = useState<"yogurt" | "run" | "matcha" | "leaf" | "book">("yogurt");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Toggle Task Completion
    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    const nextCompleted = !task.completed;
                    return {
                        ...task,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? Date.now() : undefined,
                    };
                }
                return task;
            })
        );
    };

    // Add New Task
    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            title: newTitle,
            completed: false,
            category: newCategory,
            icon: newIcon,
        };

        setTasks([...tasks, newTask]);
        setNewTitle("");
        setIsDrawerOpen(false);
    };

    // Helper to render Category Icons
    const renderIcon = (iconName: "yogurt" | "run" | "matcha" | "leaf" | "book") => {
        switch (iconName) {
            case "yogurt":
                return (
                    <svg className="w-5 h-5 text-[#7A4C62]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l1.5 10A2 2 0 009.5 20h5a2 2 0 002-1.8L18 8H6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14a1 1 0 001-1V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2a1 1 0 001 1z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5V2m0 0a1.5 1.5 0 113 0M12 2h3" />
                    </svg>
                );
            case "run":
                return (
                    <svg className="w-5 h-5 text-[#4278A8]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="5" r="2" fill="currentColor" stroke="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 8.5l2-1.5 2 3 3-1" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l3.5-3 2.5 3 2.5-3" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 18.5l3.5-4.5 1.5 1.5" />
                    </svg>
                );
            case "matcha":
                return (
                    <svg className="w-5 h-5 text-[#7A5E1A]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 8H6a2 2 0 00-2 2v6a4 4 0 004 4h8a4 4 0 004-4v-6a2 2 0 00-2-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10h1.5a2.5 2.5 0 012.5 2.5v2a2.5 2.5 0 01-2.5 2.5H18" />
                        <path strokeLinecap="round" d="M9 5c0-1 1-2 1-2M12 5c0-1 1-2 1-2M15 5c0-1 1-2 1-2" />
                    </svg>
                );
            case "leaf":
                return (
                    <svg className="w-5 h-5 text-[#2E7D4E]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0 0 4-8 16-12M20 8c-3 6-7.5 9-16 12M20 8c-6 3-9 7.5-16 12" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l3-3m-1-5l2 2" />
                    </svg>
                );
            case "book":
                return (
                    <svg className="w-5 h-5 text-[#6F42A8]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                );
        }
    };

    // Helper to get Category Card Styles
    const getCardStyles = (task: Task) => {
        if (task.completed) {
            switch (task.category) {
                case "pink":
                    return {
                        card: "bg-[#FFF5F7] border-2 border-[#FFE0E6] opacity-75",
                        text: "line-through text-[#998A92]",
                        iconContainer: "bg-white border border-[#FFE0E6]",
                        checkbox: "bg-[#D9A514] border-2 border-[#B28A00]",
                    };
                case "blue":
                    return {
                        card: "bg-[#F3F9FF] border-2 border-[#E0EFFF] opacity-75",
                        text: "line-through text-[#8FA4B5]",
                        iconContainer: "bg-white border border-[#E0EFFF]",
                        checkbox: "bg-[#D9A514] border-2 border-[#B28A00]",
                    };
                case "yellow":
                    return {
                        card: "bg-[#FFFDF5] border-2 border-[#FFF8E0] opacity-75",
                        text: "line-through text-[#998A92]",
                        iconContainer: "bg-white border border-[#FFF8E0]",
                        checkbox: "bg-[#D9A514] border-2 border-[#B28A00]",
                    };
                case "green":
                    return {
                        card: "bg-[#F1FAF5] border-2 border-[#E2F5EA] opacity-75",
                        text: "line-through text-[#8FB59F]",
                        iconContainer: "bg-white border border-[#E2F5EA]",
                        checkbox: "bg-[#D9A514] border-2 border-[#B28A00]",
                    };
                case "purple":
                    return {
                        card: "bg-[#FAF5FF] border-2 border-[#F3E8FF] opacity-75",
                        text: "line-through text-[#A794BA]",
                        iconContainer: "bg-white border border-[#F3E8FF]",
                        checkbox: "bg-[#D9A514] border-2 border-[#B28A00]",
                    };
            }
        } else {
            switch (task.category) {
                case "pink":
                    return {
                        card: "bg-[#FFF0F3] border-2 border-[#FFD6E0] hover:shadow-md transition-all duration-200",
                        text: "text-[#7A4C62]",
                        iconContainer: "bg-white",
                        checkbox: "bg-white border-2 border-[#FFCCD8] cursor-pointer hover:border-[#FFAEC9]",
                    };
                case "blue":
                    return {
                        card: "bg-[#EEF7FF] border-2 border-[#BADAFF] hover:shadow-md transition-all duration-200",
                        text: "text-[#4278A8]",
                        iconContainer: "bg-white",
                        checkbox: "bg-white border-2 border-[#BADAFF] cursor-pointer hover:border-[#96C8FF]",
                    };
                case "yellow":
                    return {
                        card: "bg-[#FFFBEB] border-2 border-[#FFE59E] hover:shadow-md transition-all duration-200",
                        text: "text-[#7A5E1A]",
                        iconContainer: "bg-white",
                        checkbox: "bg-white border-2 border-[#FFE59E] cursor-pointer hover:border-[#FFDC82]",
                    };
                case "green":
                    return {
                        card: "bg-[#E6F7ED] border-2 border-[#B2E6C5] hover:shadow-md transition-all duration-200",
                        text: "text-[#2E7D4E]",
                        iconContainer: "bg-white",
                        checkbox: "bg-white border-2 border-[#B2E6C5] cursor-pointer hover:border-[#7CE6A8]",
                    };
                case "purple":
                    return {
                        card: "bg-[#F5ECFF] border-2 border-[#DBC4FF] hover:shadow-md transition-all duration-200",
                        text: "text-[#6F42A8]",
                        iconContainer: "bg-white",
                        checkbox: "bg-white border-2 border-[#DBC4FF] cursor-pointer hover:border-[#C4A3FF]",
                    };
            }
        }
    };

    return (
        <main className={`flex flex-col h-screen bg-white font-sans relative overflow-hidden transition-all duration-700 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Header Area */}
            <header className="flex justify-between items-center px-6 pt-8 pb-4 w-full bg-white">
                <Link href="/login" className="text-2xl font-bold text-[#7A4C62] hover:opacity-85 transition-opacity">
                    Pokinote
                </Link>
                
                {/* Dog Profile Avatar SVG */}
                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-all">
                    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Background */}
                        <circle cx="50" cy="50" r="50" fill="#FFE3E8" />
                        
                        {/* Ears */}
                        <path d="M20 30C15 25 10 35 15 45C20 55 30 50 30 40C30 30 25 35 20 30Z" fill="#D7B19D" />
                        <path d="M80 30C85 25 90 35 85 45C80 55 70 50 70 40C70 30 75 35 80 30Z" fill="#D7B19D" />
                        
                        {/* Head */}
                        <circle cx="50" cy="52" r="32" fill="#F7EBE1" />
                        
                        {/* Inner Ears */}
                        <path d="M22 34C18 30 15 37 18 43C21 49 26 47 26 41C26 35 24 37 22 34Z" fill="#FFC2CD" />
                        <path d="M78 34C82 30 85 37 82 43C79 49 74 47 74 41C74 35 76 37 78 34Z" fill="#FFC2CD" />
                        
                        {/* Eyes */}
                        <circle cx="40" cy="48" r="4.5" fill="#3D2B20" />
                        <circle cx="60" cy="48" r="4.5" fill="#3D2B20" />
                        
                        {/* Eye sparkles */}
                        <circle cx="38.5" cy="46.5" r="1.5" fill="#FFFFFF" />
                        <circle cx="58.5" cy="46.5" r="1.5" fill="#FFFFFF" />
                        
                        {/* Snout */}
                        <ellipse cx="50" cy="58" rx="9" ry="7" fill="#FFFFFF" />
                        
                        {/* Nose */}
                        <path d="M47 55.5C47 54.5 48.5 53 50 53C51.5 53 53 54.5 53 55.5C53 57 51.5 58 50 58C48.5 58 47 57 47 55.5Z" fill="#3D2B20" />
                        
                        {/* Mouth */}
                        <path d="M47 60C48.5 61 50 61 50 61C50 61 51.5 61 53 60" stroke="#3D2B20" strokeWidth="1.5" strokeLinecap="round" />
                        
                        {/* Blushing Cheeks */}
                        <circle cx="32" cy="54" r="3" fill="#FFB7C5" opacity="0.6" />
                        <circle cx="68" cy="54" r="3" fill="#FFB7C5" opacity="0.6" />
                    </svg>
                </div>
            </header>

            {/* Scrollable Container (Tasks title + list scroll together) */}
            <div className="flex-1 overflow-y-auto w-full pb-28">
                {/* Title Section */}
                <div className="flex flex-col items-center w-full mt-4 mb-8">
                    <h2 className="text-[36px] font-bold text-[#5A4550] tracking-tight">
                        Tasks
                    </h2>
                </div>

                {/* Todo Items List */}
                <div className="flex flex-col gap-4 w-full px-6">
                {[...tasks]
                    .sort((a, b) => {
                        if (a.completed !== b.completed) {
                            return a.completed ? 1 : -1;
                        }
                        return a.id - b.id;
                    })
                    .map((task) => {
                    const styles = getCardStyles(task);
                    return (
                        <div
                            key={task.id}
                            className={`flex items-center justify-between w-full h-[76px] px-5 rounded-3xl shrink-0 ${styles?.card}`}
                        >
                            {/* Left Side: Icon & Title */}
                            <div className="flex items-center gap-4">
                                <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center ${styles?.iconContainer}`}>
                                    {renderIcon(task.icon)}
                                </div>
                                <span className={`text-[17px] font-bold ${styles?.text}`}>
                                    {task.title}
                                </span>
                            </div>

                            {/* Right Side: Checkbox Circle */}
                            <button
                                type="button"
                                onClick={() => toggleTask(task.id)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${styles?.checkbox}`}
                            >
                                {task.completed && (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    );
                })}
                
                {tasks.length === 0 && (
                    <div className="flex flex-col items-center justify-center mt-12 text-[#998A92]">
                        <p className="text-[16px] font-semibold">No tasks for today!</p>
                        <p className="text-[14px]">Click the + button to add one.</p>
                    </div>
                )}
            </div>
        </div>

            {/* FAB: Floating Add Button */}
            <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="absolute bottom-8 right-8 z-10 w-[58px] h-[58px] bg-[#FFC0D3] border-[3px] border-[#FF8FA9] rounded-full flex items-center justify-center text-[#7A4C62] text-[28px] font-bold cursor-pointer hover:bg-[#FFAEC9] hover:border-[#FF6B8F] active:scale-95 transition-all shadow-md"
            >
                +
            </button>

            {/* Add Task Drawer (Slide-up modal) */}
            <div className={`absolute inset-0 z-40 bg-black/30 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop Click Closes Drawer */}
                <div className="absolute inset-0" onClick={() => setIsDrawerOpen(false)} />
                
                {/* Drawer Box */}
                <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 shadow-2xl transition-transform duration-300 transform ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                    
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-[20px] font-bold text-[#7A4C62]">
                            Add New Task
                        </h3>
                        <button
                            type="button"
                            onClick={() => setIsDrawerOpen(false)}
                            className="w-8 h-8 rounded-full bg-gray-100 text-[#7A4C62] flex items-center justify-center font-bold hover:bg-gray-200 transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <form onSubmit={handleAddTask} className="flex flex-col gap-5">
                        {/* Task Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#7A4C62]">
                                Task Title
                            </label>
                            <input
                                type="text"
                                placeholder="What needs to be done?"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="w-full h-[52px] px-5 border-2 border-[#FFCCD8] rounded-full text-[#5C4D56] placeholder-[#A5929B] bg-white outline-none focus:border-[#FFAEC9] transition-all text-[15px]"
                                required
                            />
                        </div>

                        {/* Theme Category Picker */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#7A4C62]">
                                Theme Color
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {(["pink", "blue", "yellow", "green", "purple"] as const).map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => {
                                            setNewCategory(cat);
                                            // Auto select suitable icon
                                            if (cat === "pink") setNewIcon("yogurt");
                                            if (cat === "blue") setNewIcon("run");
                                            if (cat === "yellow") setNewIcon("matcha");
                                            if (cat === "green") setNewIcon("leaf");
                                            if (cat === "purple") setNewIcon("book");
                                        }}
                                        className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer ${
                                            cat === "pink" ? "bg-[#FFF0F3] border-[#FFD6E0]" :
                                            cat === "blue" ? "bg-[#EEF7FF] border-[#BADAFF]" :
                                            cat === "yellow" ? "bg-[#FFFBEB] border-[#FFE59E]" :
                                            cat === "green" ? "bg-[#E6F7ED] border-[#B2E6C5]" :
                                            "bg-[#F5ECFF] border-[#DBC4FF]"
                                        } ${newCategory === cat ? 'ring-2 ring-offset-2 ring-[#7A4C62] scale-105' : 'opacity-85'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Icon Picker */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#7A4C62]">
                                Task Icon
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {(["yogurt", "run", "matcha", "leaf", "book"] as const).map((ic) => (
                                    <button
                                        key={ic}
                                        type="button"
                                        onClick={() => setNewIcon(ic)}
                                        className={`w-11 h-11 rounded-2xl bg-gray-50 border-2 flex items-center justify-center transition-all cursor-pointer ${
                                            newIcon === ic ? 'border-[#7A4C62] bg-[#FFF0F3]' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        {renderIcon(ic)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-[52px] mt-4 bg-[#FFC0D3] border-[3px] border-[#FF8FA9] rounded-full text-[#7A4C62] font-bold text-[18px] hover:bg-[#FFAEC9] hover:border-[#FF6B8F] active:scale-[0.98] transition-all cursor-pointer shadow-sm flex items-center justify-center"
                        >
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}