"use client"

import { HiPaperClip } from "react-icons/hi2";
import { FaMicrophoneAlt, FaKeyboard } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

import { useState } from "react";


enum typeEnum {
    MESSAGE = "message",
    SEARCH = "search"
}

export const Input = ({ type, placeholder }: { type: typeEnum, placeholder: string }) => {

    const [inputMessage, setInputMessage] = useState("");

    const handleInput = (e: any) => {
        setInputMessage(e.target.value);
    }

    const verificarInput = () => {
        console.log(inputMessage)
    }

    return (
        <div className={`${type === typeEnum.MESSAGE ? "bg-white" : "bg-gray-200 shadow-sm"} flex items-center w-full rounded-2xl px-2`}>
            {
                type === typeEnum.MESSAGE &&
                <div>
                    <HiPaperClip className="text-xl text-slate-900" />
                </div>
            }
            <input
                className={`w-full text-lg px-2 py-3 ${type === typeEnum.MESSAGE && "shadow-2xl "} focus:outline-none`}
                type="text"
                placeholder={placeholder}
                onChange={(e) => {
                    handleInput(e)
                }} />

            <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-300 ${inputMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} hover:scale-110 hover:rotate-12`}>
                    {
                        type === typeEnum.MESSAGE ?
                            <FaPaperPlane className="text-xl text-slate-900" />
                            :
                            <FaKeyboard className="text-xl text-gray-500" />
                    }
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${!inputMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} hover:scale-110`}>
                    {
                        type === typeEnum.MESSAGE ?
                            <FaMicrophoneAlt className="text-xl text-slate-900" />
                            : <BsSearch className="text-xl text-gray-500" />
                    }
                </div>
            </div>
        </div>
    )
}