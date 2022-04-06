
export type ManType = {
    name: string
    age: number
}

const  people = [
    {name: 'Alexey Boiko', age: 33},
    {name: 'Gena Hronus', age: 31},
    {name: 'Vova Ivanov', age: 25}
]

const alexIncubator = (man: ManType) => ({
        stack: ['css, html', 'js', 'ts', 'react'],
        firstName: man.name.split(' ')[0],
        lastname: man.name.split(' ')[1]
    })

    const devs = [
        {
            stack: ['css, html', 'js', 'ts', 'react'],
            firstName: 'Alexey', lastname: 'Boiko'
        },
        {
            stack: ['css, html', 'js', 'ts', 'react'],
            firstName: 'Gena', lastname: 'Hronus'
        },
        {
            stack: ['css, html', 'js', 'ts', 'react'],
            firstName: 'Vova', lastname: 'Ivanov'
        }
    ]

const devs2= people.map(alexIncubator)
const devs3= people.map(man => ({
    stack: ['css, html', 'js', 'ts', 'react'],
    firstName: man.name.split(' ')[0],
    lastname: man.name.split(' ')[1]
}))

const message = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT`)


export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT`)
}
