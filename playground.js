const items = [{
    name: "Lire un livre",
    isDone: false
},
{
    name: "Faire la vaiselle",
    isDone: false
}
]

const item = {
    name: "Nouvel item",
    isDone: false
}

const items2 = [...items, item]


console.log('item : ' , items)
console.log('item2 : ' , items2)