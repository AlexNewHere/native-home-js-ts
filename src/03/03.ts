import {student, StudentType} from '../02/02';
import {CityType, GovernmentBuildings, HousesType} from '../02/02_02';

debugger

export function sum(a: number, b: number) {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export function doesStudentLiveInCity(w: StudentType, city: string) {
    return w.address.city.title === city
}

export const addMoneyToBudget = (cit: GovernmentBuildings, many: number) => {
    cit.budget += many
}
export const repairHouse = (hous: HousesType) => {
hous.repaired = true
}

export const toFireStaff = (frStaf: GovernmentBuildings, number: number) => {
    frStaf.staffCount -= number

}
export const toHireStaff = (hrStaf: GovernmentBuildings, number: number) => {
    hrStaf.staffCount += number

}

export const createMessage = (city: CityType) =>{
    return `Hello ${city.title}. I want you be happy. All ${city.citizensNumber} men`

}