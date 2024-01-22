let store = document.getElementById('store')
let cookies = 0;
let purchasedItems = []
let cookieCounter = document.getElementById('cookie-count')

let storeItems = [
    {
        name: 'Grannies',
        price: 10,
        increase: 5
    },
    {
        name: 'Airplanes',
        price: 300,
        increase: 20
    },
    {
        name: 'Chocolate Fountains',
        price: 800,
        increase: 30
    },
    {
        name: 'Time-Space Oven',
        price: 2100,
        increase: 45
    }
]

function save() {
    // cookies is a number - 
    localStorage.setItem('cookies', cookies)
    localStorage.setItem('purchases', JSON.stringify(purchasedItems))
}

function load() {
    // need to parse the string back into a number
    cookies = JSON.parse(localStorage.getItem('cookies'))
    purchasedItems = JSON.parse(localStorage.getItem('purchases'))
}

function purchaseItem(item) {
    if (item.price > cookies) {
        alert(`you dont have enough cookies`)
    } else {
        cookies = cookies - item.price
        purchasedItems.push(item)
        console.log(purchasedItems)
    }
}

function getCookiesPerSecond() {
    if (purchasedItems.length == 0) {
        return 1
    }

    let total = 0;
    for (const item of purchasedItems) {
        total = total + item.increase
    }
    return total
}

function renderShop() {
    storeItems.forEach(function(item) {
        let pName = document.createElement('p')
        let pPrice = document.createElement('p')
        let pIncrease = document.createElement('p')
        let button = document.createElement('button')
        button.textContent = 'buy'

        pName.innerText = item.name
        pPrice.innerText = item.price
        pIncrease.innerText = `${item.increase } +CPS`

        let cookieStoreCard = document.createElement('div')

        button.addEventListener('click', function() {
            purchaseItem(item)
        })

        cookieStoreCard.appendChild(pName)
        cookieStoreCard.appendChild(pPrice)
        cookieStoreCard.appendChild(pIncrease)
        cookieStoreCard.appendChild(button)
        store.appendChild(cookieStoreCard)
    })
}

function game() {
    renderShop()
    load()
    setInterval(function() {
        cookies += getCookiesPerSecond()
        updateUI(cookies)
        save()
    }, 1000)
}

game()

function updateUI(cookies) {
    cookieCounter.innerText = cookies
}

function reset() {
    cookies = 0
    purchasedItems = []
    save()
    game()
}