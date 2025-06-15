import { ChatMessages } from "./ChatMessage/ChatMessage"
import { Header } from "./Header/Header"
import { NavBar } from "./NavBar/NavBar"

export const Chat = () =>{
    return(
        <div className="flex">
            <NavBar></NavBar>
            <div className="w-1/2 relative">
                <div className="sticky top-0 right-0 left-0 z-50">
                    <Header></Header>
                </div>
                <div className="w-full">
                    <ChatMessages></ChatMessages>
                </div>
            </div>
            <div className="w-[30%] h-screen bg-green-200 fixed right-0"></div>
        </div>
    )
}