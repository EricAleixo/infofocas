import { faker } from "@faker-js/faker"
import { CardProfile } from "../../shared/CardProfile/CardProfile"

export const UserProfile = () => {

    const user = {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        image: faker.image.avatar()
    }

    return (
        <div className="flex items-center gap-2 py-4">
            <CardProfile
                image={user.image}>
            </CardProfile>
            <div className="text-white flex flex-col">
                <div>
                    <h5 className="text-sm font-semibold">{user.name}</h5>
                </div>
                <div>
                    <h5 className="text-xs text-gray-400">{user.email}</h5>
                </div>
            </div>
        </div>
    )
}