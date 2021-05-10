// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

function getTotalTvsSold() {
  const remainingTv = inventory.map(function (stock) {
    return stock.originalStock - stock.sold;
  })
  let totalTvsSold = 0

  for (let i = 0; i < remainingTv.length; i++) {
    totalTvsSold += remainingTv[i];
  }
  return totalTvsSold;
}

const numbersOfTvs = document.getElementById("tvsInStock");
numbersOfTvs.textContent = "Nog te verkopen tv's: " + getTotalTvsSold();
document.body.appendChild(numbersOfTvs);

const tvTypes = inventory.map((inventory) => {
  return (inventory.type);
});

const tvsSoldOut = inventory.filter((inventory) => {
  return (inventory.originalStock === inventory.sold);
} );

const tvAmbilight = inventory.filter((inventory) => {
  return (inventory.options.ambiLight === true);
});

const tvsSortedOnPrice = (inventory.slice()).sort((a,b) => {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  else return 0;
});

function getGoalAmount() {
  const targetPerType = inventory.map((inventory) => {
    return (inventory.originalStock * inventory.price);
  });

    let totalTarget = 0;

    for (let i = 0; i < targetPerType.length; i++) {
      totalTarget += targetPerType[i];
    }
    return totalTarget;
}

const amountOfTarget = document.getElementById("targetAmount");
amountOfTarget.textContent = "Te behalen omzet: " + getGoalAmount();
document.body.appendChild(amountOfTarget);

function getAmountSold() {
  const tvsSoldSoFar = inventory.map((inventory) => {
    return inventory.sold * inventory.price;
  })

    let totalSold = 0;

    for (let i = 0; i < tvsSoldSoFar.length; i++) {
      totalSold += tvsSoldSoFar[i];
    }
    return totalSold;
}

const amountSoFarSold = document.getElementById("soldSoFar");
amountSoFarSold.textContent = "Omzet tot nu toe: " + getAmountSold();
document.body.appendChild(amountSoFarSold);

const tvType1 = inventory[1].type;

const tvTypeToShowFirst = document.getElementById("tvType1");
tvTypeToShowFirst.textContent = "Tv Type: " + tvType1;
document.body.appendChild(tvTypeToShowFirst);

function tvModelTypeNameTv(inventory){
  return inventory.brand + " " + inventory.type + " - " + inventory.name;
};

function tvPriceTv(inventory){
  return  "\u20AC " + inventory.price + ",-"
};

function getAllSizesTv(inventory){
  return inventory.availableSizes.map((tvSize)=> {
    return tvSize + " inch (" + (Math.round(tvSize * 2.54)) + " centimeters) "
  })};

const tvType2Name =(tvModelTypeNameTv({
  type: '50PUS7304/12',
  name: 'The One 4K TV',
  brand: 'Philips',
  price: 479,
  availableSizes: [43, 50, 55, 58, 65, 70],
  refreshRate: 50,
  screenType: 'LED',
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
  options: {
    wifi: true,
    speech: true,
    hdr: true,
    bluetooth: true,
    ambiLight: true,
  },
  originalStock: 8,
  sold: 3,
}))
const tvType2Price = tvPriceTv({
  type: '50PUS7304/12',
  name: 'The One 4K TV',
  brand: 'Philips',
  price: 479,
  availableSizes: [43, 50, 55, 58, 65, 70],
  refreshRate: 50,
  screenType: 'LED',
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
  options: {
    wifi: true,
    speech: true,
    hdr: true,
    bluetooth: true,
    ambiLight: true,
  },
  originalStock: 8,
  sold: 3,
})
const tvType2AvailableSizes = getAllSizesTv({
  type: '50PUS7304/12',
  name: 'The One 4K TV',
  brand: 'Philips',
  price: 479,
  availableSizes: [43, 50, 55, 58, 65, 70],
  refreshRate: 50,
  screenType: 'LED',
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
  options: {
    wifi: true,
    speech: true,
    hdr: true,
    bluetooth: true,
    ambiLight: true,
  },
  originalStock: 8,
  sold: 3,
}).join("|")

const tvTypeToShowSecondName = document.getElementById("tvType2Name");
tvTypeToShowSecondName.textContent = (tvType2Name);
document.body.appendChild(tvTypeToShowSecondName);

const tvTypeToShowSecondPrice = document.getElementById("tvType2Price");
tvTypeToShowSecondPrice.textContent = (tvType2Price);
document.body.appendChild(tvTypeToShowSecondPrice);

const tvTypeToShowSecondSizes = document.getElementById("tvType2Sizes");
tvTypeToShowSecondSizes.textContent = (tvType2AvailableSizes);
document.body.appendChild(tvTypeToShowSecondSizes);

function getTvModelTypeName(array) {
    const tvModelTypeName = (array).map((tv) => {
        return tv.brand + " " + tv.type + " - " + tv.name;
    })
    return tvModelTypeName
};

function getTvPrice(array) {
    const tvPrice = (array).map((tv) => {
        return "\u20AC " + tv.price + ",-"
    })
    return tvPrice
};

function getTvSizes(array) {
    const tvSizes = inventory.map((tv) => {
        let allSizes = [];
        const tvSize = tv.availableSizes;
        for (let i = 0; i < tvSize.length; i++) {
            allSizes += (tvSize[i] + " inch" + " (" + tvSize[i] * 2.54 + " cm) | ");
        }
        return allSizes
    })
    return tvSizes
};

function tvDetails(array){
  let tvDetail = [];
  for (let i = 0; i < (array).length; i++){
      tvDetail += getTvModelTypeName(array)[i] + "<br>" + getTvPrice(array) [i] + "<br>" + getTvSizes(array)[i] + "<br>" + "<br>" ;
  }
 return tvDetail;
}

function allTvsButton() {
    const allTvsInInventory = document.getElementById("tvDetails").innerHTML = tvDetails(inventory);
}

const buttonDefault = document.getElementById("default");
buttonDefault.addEventListener('click', allTvsButton);

function priceSortedButton() {
    const allTvsSorted = document.getElementById("tvDetails").innerHTML = tvDetails(tvsSortedOnPrice);
}

const buttonPriceSorted = document.getElementById("price");
buttonPriceSorted.addEventListener('click', priceSortedButton);

function ambilightTvButton() {
    const ambilightTvs = document.getElementById("tvDetails").innerHTML = tvDetails(tvAmbilight);
}

const buttonAmbilight = document.getElementById("ambilight");
buttonAmbilight.addEventListener('click', ambilightTvButton);


function soldOutButton() {
    const allTvsSoldOut = document.getElementById("tvDetails").innerHTML = tvDetails(tvsSoldOut);
}

const buttonSoldOut = document.getElementById("soldOut");
buttonSoldOut.addEventListener('click', soldOutButton);


