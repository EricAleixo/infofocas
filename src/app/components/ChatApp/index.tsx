import { ChatMessages } from "./ChatMessage/ChatMessage"
import { Header } from "./Header/Header"

export const Chat = () =>{
    return(
        <>
            <div className="fixed top-0 right-0 left-0 z-50">
                <Header></Header>
            </div>
            <>
                <ChatMessages></ChatMessages>
            </>
        </>
    )
}