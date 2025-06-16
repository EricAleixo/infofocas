import { ChatMessages } from "./ChatMessage/ChatMessage"
import { Contats } from "./Contats/Contats"
import { Header } from "./Header/Header"
import { NavBar } from "./NavBar/NavBar"

export const Chat = () =>{
    return(
        <div className="grid w-full min-w-0 h-screen overflow-hidden grid-cols-1 md:grid-cols-[35%_65%_0%] xl:grid-cols-[20%_55%_25%]">
            {/* NavBar – visível apenas em sm e acima */}
            <div className="hidden md:block h-full">
                <NavBar />
            </div>

            {/* Conteúdo principal */}
            <div className="relative h-full w-full overflow-hidden min-w-[410px] max-w-[800px]">
                {/* Header fixo no topo */}
                <div className="absolute top-0 right-0 left-0 z-50">
                    <Header />
                </div>

                {/* Mensagens do chat – com padding top para não cobrir o Header */}
                <div className="w-full pt-16 h-full overflow-y-auto">
                    <ChatMessages />
                </div>
            </div>


            {/* Painel lateral direito – visível apenas em xl e acima */}
            <div className="hidden xl:block h-full">
                <Contats></Contats>
            </div>
        </div>

    )
}