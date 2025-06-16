import { Input } from "../../shared/Input/Input";
import { Message } from "./Message/Message";
import { faker } from "@faker-js/faker";

type senders = {
    image: string,
    name: string
}

enum typeEnum{
    MESSAGE = "message",
    SEARCH = "search"
}

export const ChatMessages = () => {

    const imageUser = faker.image.avatar()

    let senders: senders[] = []
    for (let i = 0; i <= 4; i++) {
        const sender = {
            image: faker.image.avatar(),
            name: faker.person.firstName()
        }
        const user = {
            image: imageUser,
            name: "eu"
        }
        senders.push(sender)
        senders.push(user)
    }

    return (
        <div className="w-full max-h-[90%] px-4">
            {
                senders.map((sender, index) => (
                    <Message key={index} sender={sender} />
                ))
            }
            <div className="w-full h-17 sticky -bottom-0 left-0 right-0 px-3 bg-gray-200/55 backdrop-blur-md">
                <Input type={typeEnum.MESSAGE} placeholder="Digite sua mensagem"></Input>
            </div>
        </div>
    )
}