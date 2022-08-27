


let someData = [
  {
    name: "Dash",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Dash-d-circle-1000.png",
    procent: '-7.7%',
    price: '45$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "Aeternity",
    img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Aeternity-AE-icon.png",
    procent: '-3.81%',
    price: '132$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "Ethereum",
    img: "https://seeklogo.com/images/E/ethereum-blue-logo-8BC914153E-seeklogo.com.png",
    procent: '-7.71%',
    price: '1.564$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "PeerCoin",
    img: "https://iconape.com/wp-content/files/mf/206737/svg/peercoin-ppc-seeklogo.com.svg",
    procent: '-3.2%',
    price: '0.3$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "BitCoin",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
    procent: '-3.87%',
    price: '20.726$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "GridCoin",
    img: "https://cryptologos.cc/logos/gridcoin-grc-logo.png",
    procent: '-1.14%',
    price: '0.008$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "NavCoin",
    img: "https://cryptologos.cc/logos/nav-coin-nav-logo.png",
    procent: '-6.32%',
    price: '0.06$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "LiteCoin",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png",
    procent: '-4.93%', 
    price: '1.307$',
    imgLine: "../assets/logo/line ref.png"
  },
  {
    name: "Nano",
    img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Nano-icon.png",
    procent: '-6.6%',
    price: '0.97$',
    imgLine: "../assets/logo/line ref.png"
  }

]

const wrapper = document.querySelector('.swiper-wrapper')

for(let item of someData) {
  
  const template = `
    
      <div class="swiper-slide">
      <img class="imgo" src="${item.img}">
      <img class="imgi" src="${item.imgLine}">
        <span class="name">${item.name}</span>
        <span class="procent">${item.procent}</span>
        <span class="price">${item.price}</span>
        </div>
        `;
        wrapper.innerHTML += template;
      }


// const swiperWrap = document.querySelectorAll('.swiper-slide')

// for(let {name, img, procent, price} of data){
//   swiperWrap.forEach((swipe) => {
//     const swipeIn = `
//         <div class="item">
//             <span>${name}</span>
//             <img src="${img}">
//             <span>${procent}</span>
//             <span>${price}</span>
//         </div>
//     `
//     swipe.innerHTML += swipeIn;
//   })
// }





// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//   ];

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'Second Page',
//       backgroundColor: 'rgb(0, 119, 2552)',
//       borderColor: 'rgb(0, 119, 255)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };
//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );