type UsersType = {
    name: string;
    age: number;
}


function increaseAge(u: UsersType) {
    u.age++;
}

test('test 9.1', () => {

    let user: UsersType = {
        name: 'John',
        age: 30
    };
    increaseAge(user);

    expect(user.age).toBe(31);

    const newUser = user
    newUser.age = 40
    expect(user.age).toBe(40)

});

test('test Array', () => {

    const users: UsersType[] = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Jane',
            age: 20
        }
    ]
    let admin = users

    admin.push({
        name: 'Admin',
        age: 40
    })

    expect(users[2].age).toBe(40)
    expect(users[2].name).toBe('Admin')
})