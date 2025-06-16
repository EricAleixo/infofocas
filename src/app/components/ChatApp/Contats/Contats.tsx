import { faker } from "@faker-js/faker";
import { UserContact } from "./UserContact/UserContact";
import { MdEditSquare } from "react-icons/md";
import { GroupContact } from "./GroupContact/GroupContact";

type Users = {
    image: string,
    name: string
}

export const Contats = () => {

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
        <aside className="w-[25%] h-screen bg-white fixed right-0 shadow-xs px-2">
            <div className="flex items-center justify-between mt-1">
                <div>
                    <h2 className="font-bold text-gray-950 text-2xl">Contatos</h2>
                </div>
                <div className="bg-gray-200 p-2 rounded-2xl mt-2">
                    <MdEditSquare className="text-2xl" />
                </div>
            </div>

            <div className="flex gap-2 mt-6">
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
        </aside>
    )
}