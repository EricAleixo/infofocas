import { IconType } from "react-icons";


export const Icon = ({icon, active, label}: {icon: IconType, active: boolean, label: string}) =>{
    const Icon = icon;
    return(
        <div className="relative group">
            <div className={`h-7 w-7 shadow-sm rounded-md items-center justify-center cursor-pointer hidden md:flex ${active ? "text-white bg-slate-900" : "bg-white text-slate-900"}`}>
                <Icon/>
            </div>
            <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
            </div>
        </div>
    )
}