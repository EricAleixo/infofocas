"use client"

import { HiPaperClip } from "react-icons/hi2";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

import { useState } from "react";


export const Input = () => {

    const [inputMessage, setInputMessage] = useState("");

    const handleInput = (e: any) => {
        setInputMessage(e.target.value);
    }

    const verificarInput = () => {
        console.log(inputMessage)
    }

    return (
        <div className="bg-white flex items-center w-full rounded-2xl px-2">
            <div>
                <HiPaperClip className="text-xl text-slate-900" />
            </div>
            <input
                className="w-full text-lg px-2 py-3 shadow-2xl focus:outline-none"
                type="text"
                placeholder="Mensagem aqui"
                onChange={(e) => {
                    handleInput(e)
                }} />
            <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-300 ${inputMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} hover:scale-110 hover:rotate-12`}>
                    <FaPaperPlane className="text-xl text-slate-900" />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${!inputMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} hover:scale-110`}>
                    <FaMicrophoneAlt className="text-xl text-slate-900" />
                </div>
            </div>
        </div>
    )
}