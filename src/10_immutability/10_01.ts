export type UserType = {
    name: string;
    hair: number;
    address: {
        house: number;
        city: string;
    }
}
export type laptopType = {
    title: string;
}
export  type UserWithLaptopType = {
    laptop: laptopType;
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type CompaniesType = {
    id: number,
    title: string
}

export type WithCompaniesType = {
    companies: Array<CompaniesType>
}

// export function makeHairstyle (user: UserType, power: number): UserType {
//     return {
//         ...user,
//         hair: user.hair / power
//     }
// }

// export function moveUser ( u: UserType, city: string) {
//     return {
//         ...u,
//         address: {
//             ...u.address,
//             city: city
//         }
//     }
// }
export function moveUserToHouse ( u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}
export function upgradeUserLaptop (u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}
export function upgradeUserBooks (u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [ ...u.books, ...newBooks]
    }
}
export function updateUserBooks (u: UserWithLaptopType & UserWithBooksType, books: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== books)
    }
}
export function addCompanies (u: WithCompaniesType , newComp: CompaniesType) {
    return {
        ...u,
        companies: [ ...u.companies, newComp]
    }
}
export function updateCompanies (u: WithCompaniesType , updateId: number, newComp: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === updateId ? { ...c, title: newComp } : c)
    }
}
