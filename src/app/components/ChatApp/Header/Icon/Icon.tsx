import { IconType } from "react-icons";


export const Icon = ({icon, active}: {icon: IconType, active: boolean}) =>{
    const Icon = icon;
    return(
        <div className={`h-7 w-7 shadow-sm rounded-md flex items-center justify-center ${active ? "text-white bg-slate-900" : "bg-white text-slate-900"}`}>
            <Icon/>
        </div>
    )
}