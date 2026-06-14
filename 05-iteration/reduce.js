// think a student want to purchase following items,we have to calculate their bills

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const bill=shoppingCart. reduce((accumulator,item)=>
accumulator+item.price,0)

console.log(bill)