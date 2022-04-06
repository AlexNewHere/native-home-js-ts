import {GovernmentBuildings, HousesType} from '../02/02_02';


export const getStreetsTitlesGovernmentsBuildings =
    (government: Array<GovernmentBuildings>) => {
        return government.map(el => el.address.street.title)
    }


    export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(name=>name.address.street.title)
    }

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(name=>`Hello peoples from ${name.address.street.title}`)
}
