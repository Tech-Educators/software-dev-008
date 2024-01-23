const data = []
const matchDiv = document.getElementById('match-data')

const fetchData = async (sort = 'name') => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    let res = await fetch(`https://api.pandascore.co/lol/champions?sort=${sort}&page=1&per_page=50&token=21EYojhQLHrHmAKcYDIer-clCF6MV3XWBk6QGsB3_zuscjg3858`, options)
    console.log(res)
    let res2 = await res.json()
    console.log(res2)
}

fetchData()

function normalFunc(a = 12) {
    console.log(a)
}

normalFunc(23)