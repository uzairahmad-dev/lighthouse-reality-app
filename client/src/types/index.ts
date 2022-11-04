export type Realtor = {
    id: string
    userName: string
    fullName: string
    email: string
    avatarImage: string
    experience: string
    bio: string
    city: string
    sold: string
    specialization: string
}

export type newRealtor = {
    userName: string
    fullName: string
    email: string
    avatarImage: string
    password: string
    experience: string
    bio: string
    city: string
    sold: string
    specialization: string
}

export type SignUpFormValues = {
    userName: string
    fullName: string
    email: string
    avatarImage: [File]
    password: string
    experience: string
    bio: string
    city: string
    sold: string
    specialization: string
}

export type LogInFormValues = {
    email: string
    password: string
}