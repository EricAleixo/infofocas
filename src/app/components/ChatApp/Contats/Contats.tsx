import { faker } from "@faker-js/faker";
import { UserContact } from "./UserContact/UserContact";
import { MdMenu, MdClose } from "react-icons/md";
import { GroupContact } from "./GroupContact/GroupContact";
import { Input } from "../../shared/Input/Input";
import { ListContats } from "./ListContats/ListContats";
import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";

type Users = {
    image: string,
    name: string
}

enum typeEnum{
    MESSAGE = "message",
    SEARCH = "search"
}

export const Contats = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const users: Users[] = []

    for (let i = 0; i <= 7; i++) {
        const user = {
            image: faker.image.avatar(),
            name: faker.person.firstName()
        }

        users.push(user)
    }

    const userGroups: Users[] = []

    return (
        <>
            <aside className="h-screen w-full bg-white sticky right-0 shadow-xs px-4">
                <div className="flex items-center justify-between mt-1">
                    <div>
                        <h2 className="font-bold text-gray-950 text-2xl">Contatos</h2>
                    </div>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="bg-gray-200 p-2 rounded-2xl mt-2 md:hidden"
                    >
                        <MdMenu className="text-2xl" />
                    </button>
                </div>

                <div className="flex gap-2 my-6">
                    {
                        users.map((user, index) => {
                            if(index <= 3){
                                return <UserContact key={index} user={user} />
                            }
                            userGroups.push(user);
                        })
                    }
                    <GroupContact users={userGroups}></GroupContact>
                </div>
                <div>
                    <Input type={typeEnum.SEARCH} placeholder="Pesquise"></Input>
                </div>
                <div>
                    <ListContats></ListContats>
                </div>
            </aside>

            {/* Menu mobile */}
            <div className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div 
                    className="absolute inset-0"
                    onClick={() => setIsMenuOpen(false)}
                />
                <div className="w-[70%] min-w-[280px] h-full bg-indigo-950 relative transform transition-transform duration-300 ease-in-out">
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                    >
                        <MdClose className="text-2xl" />
                    </button>
                    <NavBar />
                </div>
            </div>
        </>
    )
}