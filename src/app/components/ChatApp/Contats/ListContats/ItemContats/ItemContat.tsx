import { CardProfile } from "@/app/components/shared/CardProfile/CardProfile"
import { faker } from "@faker-js/faker"

export const ItemContat = () => {

    const user = {
        image: faker.image.avatar(),
        nome: faker.person.firstName()
    }

    return (
        <li className="flex items-center justify-between border-gray-200 border-b p-2 rounded-md my-2 cursor-pointer transition-all hover:bg-gray-100">
            <div className="flex items-center gap-2">
                <CardProfile image={user.image}></CardProfile>
                <div>
                    <h6 className="text-slate-900 font-semibold">{user.nome}</h6>
                    <p className="text-gray-900">Lorem ipsum dolor sit</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <time className="text-gray-900 text-sm" dateTime="9">9:32</time>
                <span className="bg-slate-900 py-1 px-2 rounded-full text-white text-sm font-bold">16</span>
            </div>
        </li>
    )
}