import { faker } from "@faker-js/faker";
import Image from "next/image";

type UsersPropsI = {
    image: string,
    name: string
}

export const GroupContact = ({users}: {users: UsersPropsI[]}) => {


    return (
        <div className="h-19 w-15 bg-slate-900 rounded-xl flex flex-col items-center justify-center">
            <div className="h-6 w-6 relative mt-2">
                <div className="w-[90%] h-[90%] absolute -left-2 rounded-md overflow-hidden border border-white z-20">
                    <Image src={users[0].image} alt={"Imagem de teste"} width={20} height={20}></Image>
                </div>
                <div className="w-[90%] h-[90%] absolute -right-2 top-3 rounded-md overflow-hidden border border-white z-30">
                    <Image src={users[1].image} alt={"Imagem de teste"} width={20} height={20}></Image>
                </div>
                <div className="w-[90%] h-[90%] absolute -right-2 -top-3 rounded-md overflow-hidden border border-white z-10">
                    <Image src={users[2].image} alt={"Imagem de teste"} width={20} height={20}></Image>
                </div>
            </div>
            <strong className="text-white text-xs mt-4">+15</strong>
        </div>
    )
}