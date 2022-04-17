

type UserType ={
    [key: string]: {id: number, name: string};
}

let users: UserType = {}



beforeEach(() => {
    users = {
        "101": {id: 101, name: "Alex"},
        "10": {id: 10, name: "Marina"},
        "201": {id: 201, name: "Anya"},
        "81": {id: 81, name: "Oleg"}
    }

});


test('should select user from obj', () => {

    users[81].name= "Olegha";
    delete users[10];


    expect(users[81]).toEqual({id: 81, name: "Olegha"})
    expect(users[10]).toBeUndefined()


});