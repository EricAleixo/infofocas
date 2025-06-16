import { ItemContat } from "./ItemContats/ItemContat"

export const ListContats = () => {

    const numbers = Array.from({ length: 20 }, (_, i) => i)

    return (
        <div>
            <div className="mt-4">
                <h2 className="text-slate-950 font-bold text-2xl">Todos os chats</h2>
            </div>
            <ul className="mt-1 overflow-y-auto h-[calc(100vh-200px)] max-h-[calc(100vh-200px)] pb-20">
                {
                    numbers.map((item, index) => (
                        <ItemContat key={index} />
                    ))
                }
            </ul>
        </div>
    )
}