import { ItemList } from "./ItemList/ItemList"
import Image from "next/image";
import { UserProfile } from "./UserProfile";
import { FaEnvelope, FaUsers, FaStar, FaCalendarAlt, FaRegFileAlt } from "react-icons/fa";
import { IconType } from "react-icons";

type ItemList = {
    name: string,
    icon: IconType
}

const itemLists:ItemList[] = [
    { icon: FaEnvelope, name: "Mensagens" },
    { icon: FaUsers, name: "Grupos" },
    { icon: FaStar, name: "Favoritos" },
    { icon: FaCalendarAlt, name: "Calendário" },
    { icon: FaRegFileAlt, name: "Arquivos" }
]

export const NavBar = () => {
    return (
        <>
            <aside className="w-[17%] h-screen bg-indigo-950 fixed px-4">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-center my-3 mb-8">
                            <Image src="/logo.jpeg" alt="Logo do infofocas" width={80} height={80} />
                        </div>
                        <ul>
                            {
                                itemLists.map((item, index) =>(
                                    <ItemList key={index} itemList={item}/>
                                ))
                            }
                        </ul>
                    </div>
                    <UserProfile></UserProfile>
                </div>
            </aside>
            <div className="w-[17%]"></div>
        </>
    )
}