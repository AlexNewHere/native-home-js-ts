import {
    addCompanies,
    moveUserToHouse, updateCompanies,
    updateUserBooks,
    upgradeUserBooks,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('remove adress', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'John',
        hair: 30,
        address: {
            house: 15,
            city: 'New York',
        },
        laptop: {
            title: 'Macbook Pro',
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = moveUserToHouse(user, 42);

    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.address).not.toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.address.house).toBe(42);
})

test('add books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'John',
        hair: 30,
        address: {
            house: 15,
            city: 'New York',
        },
        laptop: {
            title: 'Macbook Pro',
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = upgradeUserBooks(user, ['typescript', 'node']);

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.books[4]).toBe('typescript');
    expect(userCopy.books[5]).toBe('node');
})

test('updade books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'John',
        hair: 30,
        address: {
            house: 15,
            city: 'New York',
        },
        laptop: {
            title: 'Macbook Pro',
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = updateUserBooks(user, 'js', 'ts');

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.books[2]).toBe('ts');
})
test('remove books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'John',
        hair: 30,
        address: {
            house: 15,
            city: 'New York',
        },
        laptop: {
            title: 'Macbook Pro',
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = updateUserBooks(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.books[2]).toBe('react');
})

test('remove our books', () => {
    let user: UserType & UserWithLaptopType & WithCompaniesType = {
        name: 'John',
        hair: 30,
        address: {
            house: 15,
            city: 'New York',
        },
        laptop: {
            title: 'Macbook Pro',
        },
        companies: [
            {id: 1, title: 'google'},
            {id: 2, title: 'facebook'},
        ],
    };

    const userCopy = addCompanies(user, {id: 3, title: 'microsoft'});

    expect(user).not.toBe(userCopy);
    expect(user.companies.length).toBe(3);
})

test('update companies', () => {
    let user: UserType & UserWithLaptopType & WithCompaniesType = {
        name: 'John',
        hair: 30,
        address: {
            house: 15,
            city: 'New York',
        },
        laptop: {
            title: 'Macbook Pro',
        },
        companies: [
            {id: 1, title: 'google'},
            {id: 2, title: 'facebook'},
        ],
    };

    const userCopy = updateCompanies(user, 2, 'microsoft');

    expect(user).not.toBe(userCopy);
    expect(userCopy.companies[1].title).toBe('microsoft');
    expect(userCopy.companies).not.toBe(user.companies);
})

