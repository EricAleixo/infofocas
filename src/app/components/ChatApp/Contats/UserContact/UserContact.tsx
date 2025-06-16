import { CardProfile } from "@/app/components/shared/CardProfile/CardProfile";

type UserContactProps = {
    user: {
        image: string,
        name: string
    }
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
}

export const UserContact = ({ user }: UserContactProps) => {
    return (
        <div className="bg-red-100 p-[2px] rounded-lg flex flex-col items-center w-14 group cursor-pointer relative flex-none">
            <CardProfile image={user.image} />
            <h6 className="font-semibold text-xs truncate w-full text-center px-1 py-2">{truncateText(user.name, 6)}</h6>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {user.name}
            </div>
        </div>
    )
}