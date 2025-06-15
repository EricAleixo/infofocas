import { IconType } from "react-icons"
import { FaStar } from "react-icons/fa"

type ItemList = {
    name: string,
    icon: IconType
}

export const ItemList = ({itemList, active = false} : {itemList: ItemList, active?: boolean}) => {
    const Icon = itemList.icon
    return (
        <li className={`text-gray-400 flex justify-between my-2 cursor-pointer text-lg hover:text-white ${active && "text-white"}`}>
            <div className="flex items-center gap-4">
                <div>
                    <Icon/>
                </div>
                <div>
                    <p className="font-semibold">{itemList.name}</p>
                </div>
            </div>
            {/* <div className="h-7 w-7 bg-white text-black rounded-full flex items-center justify-center text-xs">
                <strong>13</strong>
            </div> */}
        </li>
    )
}