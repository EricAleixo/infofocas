import { CardProfile } from "../../shared/CardProfile/CardProfile"
import { Icon } from "./Icon/Icon"
import { PiStarFill } from "react-icons/pi";
import { HiVideoCamera, HiPhone } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import { faker } from "@faker-js/faker";
import { MenuMobile } from "./MenuMobile";

type userMockI = {
    image: string
}

const icons = [
    { icon: PiStarFill, active: true },
    { icon: HiVideoCamera, active: false },
    { icon: HiPhone, active: false },
    { icon: BsSearch, active: false }
]

const users: userMockI[] = []

for (let i = 0; i <= 4; i++) {
    const user = {
        image: faker.image.avatar()
    }
    users.push(user);
}


export const Header = () => {
    return (
        <header className="w-full min-h-16 bg-gray-200/55 backdrop-blur-md py-4 px-2 flex items-center justify-between">

            <div className="flex items-center gap-4">
                <div className="flex w-fit rotate-180">
                    {
                        users.map((user, index) => (
                            <CardProfile
                                key={index}
                                image={user.image}
                                className="-rotate-180"
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