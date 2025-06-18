"use client"

import { CardProfile } from "../../shared/CardProfile/CardProfile"
import { Icon } from "./Icon/Icon"
import { PiStarFill } from "react-icons/pi";
import { HiVideoCamera, HiPhone } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import { faker } from "@faker-js/faker";
import { MenuMobile } from "./MenuMobile";
import { useContats } from "../context/ContatsContext"

type userMockI = {
    image: string
}

const icons = [
    { icon: PiStarFill, active: true, label: "Favoritos" },
    { icon: HiVideoCamera, active: false, label: "Vídeo" },
    { icon: HiPhone, active: false, label: "Chamada" },
    { icon: BsSearch, active: false, label: "Pesquisar" }
]

const users: userMockI[] = []

for (let i = 0; i <= 4; i++) {
    const user = {
        image: faker.image.avatar()
    }
    users.push(user);
}

export const Header = () => {
    const { toggleVisible } = useContats()

    return (
        <header className="w-full min-h-16 bg-gray-200/55 backdrop-blur-md py-4 px-2 flex items-center justify-between">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={toggleVisible}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" 
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex w-fit rotate-180">
                    {
                        users.map((user, index) => (
                            <CardProfile
                                key={index}
                                image={user.image}
                                className="-ml-2 -rotate-180"
                            />
                        ))
                    }
                </div>
                <div>
                    <h3 className="font-bold text-sm">Nixtio Team</h3>
                    <h4 className="text-xs text-green-700 font-medium">+6 Online</h4>
                </div>
            </div>

            <div className="flex gap-2">
                
                <MenuMobile></MenuMobile>

                {
                    icons.map((icon, index) => (
                        <Icon key={index} {...icon}></Icon>
                    ))
                }

            </div>

        </header>
    )
}