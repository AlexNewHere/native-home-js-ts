import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveInCity, makeStudentActive} from './03';

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Alex',
        age: 34,
        isActive: false,
        address: {
            streetTitle: 'ponomareva',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            },

        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('student should be active', () => {
        expect(student.isActive).toBe(false)
        makeStudentActive(student)
        expect(student.isActive).toBe(true)
    }
)

test('add student new skill', () => {
        expect(student.technologies.length).toBe(3)
        addSkill(student, 'JS')
        expect(student.technologies.length).toBe(4)
        expect(student.technologies[3].title).toBe('JS')
        expect(student.technologies[3].id).toBeDefined()
    }
)
test('student lives in city', () => {
        let res1 = doesStudentLiveInCity(student, 'Moscow')
        let res2 = doesStudentLiveInCity(student, 'Minsk')
        expect(res1).toBe(false)
        expect(res2).toBe(true)
    }
)