import { CardProfile } from "@/app/components/shared/CardProfile/CardProfile";
import { faker } from "@faker-js/faker";
import { BiCheckDouble } from "react-icons/bi";

type sender = {
    image: string,
    name: string
}

export const Message = ({sender}: {sender: sender}) => {
    const user = {
        image: faker.image.avatar(),
        name: faker.person.firstName()
    }

    const userName = "eu"

    return (
        <div className={`flex gap-2 my-4 ${sender.name === userName && "flex-row-reverse"}`}>
            <CardProfile image={user.image} className="flex-none" />
            <div className={`${sender.name === userName && "mr-2"}`}>
                <div className={`${sender.name === userName && "text-end"}`}>
                    <h4 className="font-semibold">{user.name}</h4>
                </div>
                <div className={`p-3 pb-4 rounded-2xl ${sender.name === userName ? "rounded-tr-none bg-green-300" : "rounded-tl-none bg-red-300"} relative`}>
                    <p className="text-gray-950 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="absolute bottom-0 right-5 flex text-xs items-center gap-1">
                        <time dateTime="12" className="font-semibold text-neutral-100">12:17</time>
                        <BiCheckDouble className="text-xl text-neutral-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}