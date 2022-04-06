test('should take olg men older thne90', ()=>{
    const ages = [18, 20, 15, 100, 78];

    const oldAges=ages.filter(age => age>90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('should take courses chipper 160', ()=>{
    const course = [
        {title: 'CSS', price: 150},
        {title: 'HTML', price: 100},
        {title: 'React', price: 200}
    ]

    const chipCourse=course.filter(e=>e.price<160)

    expect(chipCourse.length).toBe(2)
    expect(chipCourse[0].price).toBe(150)
    expect(chipCourse[1].price).toBe(100)
})

test('get only comleted task', ()=>{
    const task = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sugar', isDone: false},
    ]
    const taskComleted=task.filter(e=>e.isDone)

    expect(taskComleted.length).toBe(2)
    expect(taskComleted[0].isDone).toBe(true)
    expect(taskComleted[1].isDone).toBe(true)

})