import Image from "next/image"

export const CardProfile = ({className, image} : {className?: string, image: string}) => {
    return(
        <div className={`h-7 w-7 -rotate-180 rounded-lg -ml-2 border border-white overflow-hidden relative ${className}`}>
            <Image className="w-full h-full" src={image} alt="imagem mock" width={20} height={20}></Image>
        </div>
    )
}