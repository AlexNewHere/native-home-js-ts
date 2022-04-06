import {createGreetingMessage, ManType} from './05_01';


let  people: Array<ManType> = []

beforeEach(()=>{
    people = [
        {name: 'Alexey Boiko', age: 33},
        {name: 'Gena Hronus', age: 31},
        {name: 'Vova Ivanov', age: 25}
    ]
})

test("should be get array of greeting message", ()=>{

    const message = createGreetingMessage(people)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello Alexey. Welcome to IT')
    expect(message[1]).toBe('Hello Gena. Welcome to IT')
    expect(message[2]).toBe('Hello Vova. Welcome to IT')


})