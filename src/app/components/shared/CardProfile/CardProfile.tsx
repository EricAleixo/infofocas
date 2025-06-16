import Image from "next/image"

export const CardProfile = ({className, image} : {className?: string, image: string}) => {
    return(
        <div className={`h-10 w-10 rounded-lg border border-white overflow-hidden ${className}`}>
            <Image className="w-full h-full" src={image} alt="imagem mock" width={20} height={20}></Image>
        </div>
    )
}