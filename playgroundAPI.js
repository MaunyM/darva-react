const fetch = require('node-fetch')

const fetchItem = () => {
    asyncFetchItem().then(() => console.log('vraiment apres'));
}

const asyncFetchItem = async () => {
    const reponse = await fetch('https://api.larus.fr/pwa/post')
    const itemList = await reponse.json()
    console.log(itemList)
}

console.log('avant')
fetchItem()
console.log('apres')