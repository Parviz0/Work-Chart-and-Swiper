let API_KEY = "jGfq1wyYStsGw6fEko8xfAwmGIyHYoJQ"


let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let dataList = document.querySelector('#currency')
let dataList2 = document.querySelector('#currency2')

let currency1 = "USD" 
let currency2 = "UZS"
let amount1 = 0
let amount2 = 0

let rates = []


axios.get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            rates = res.data.rates

            startExchanging(Object.keys(rates), dataList)
            startExchanging(Object.keys(rates), dataList2)
            console.log('start');
        }
    })


function startExchanging (currencies, select) {
    for(let currency of currencies) {
        let opt = new Option(currency, currency)

        select.append(opt)
    }

    dataList.onchange = () => {
        currency1 = dataList.value
        console.log(currency1);
    }
    dataList2.onchange = () => {
        currency2 = dataList2.value
        console.log(currency2);
    }

    inp1.onkeyup = () => {
        amount1 = inp1.value
    }
    inp2.onkeyup = () => {
        amount2 = inp2.value
    }

    exchange.onclick = () => {
        amount2 = amount1 * rates[currency2] / rates[currency1]
        amount1 = amount1
        inp2.value = amount2
    }
}

