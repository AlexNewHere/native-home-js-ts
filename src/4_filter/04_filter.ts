

const ages = [18, 120, 15, 100, 78]

function predicate (age: any) {

    return age>90
}
const oldAges=ages.filter(predicate)

console.log(oldAges)

type CourseType ={
    title: string
    price: number
}

const course = [
{title: 'CSS', price: 150},
{title: 'HTML', price: 100},
{title: 'React', price: 200}
]

const chipPredicate = (course: CourseType)=>{
    return course.price<160
}