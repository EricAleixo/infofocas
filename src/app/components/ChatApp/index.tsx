import { ChatMessages } from "./ChatMessage/ChatMessage"
import { Contats } from "./Contats/Contats"
import { Header } from "./Header/Header"
import { NavBar } from "./NavBar/NavBar"

export const Chat = () =>{
    return(
        <div className="flex">
            <NavBar></NavBar>
            <div className="w-[58%] relative">
                <div className="sticky top-0 right-0 left-0 z-50">
                    <Header></Header>
                </div>
                <div className="w-full">
                    <ChatMessages></ChatMessages>
                </div>
            </div>
            <Contats/>
        </div>
    )
}