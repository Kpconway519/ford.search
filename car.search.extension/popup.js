// flesh out dealer search

//right click to search feature



document.getElementById("searchBox").focus();


//HTML Selectors

let searchButton = document.getElementById('searchButton');
let searchBox = document.getElementById('searchBox');
let newBox = document.getElementById('newBox')
let usedBox = document.getElementById('usedBox')
let lowToHigh = document.getElementById('lowToHigh')
let highToLow = document.getElementById('highToLow')
let dealershipSelector = document.getElementById('dealershipSelector')


//Global variables
let searchValue = searchBox.value;
let addOns = ""
let dealershipSite = "www.williamsbuickgmc.com";
let opt = "";
let searchResult = "";
let dealership = ""

// new and used event handlers
        
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#newBox').addEventListener('change', newUsedHandler);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#usedBox').addEventListener('change', newUsedHandler);
});

// area for price sort event listeners

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#lowToHigh').addEventListener('change', lowHighHandler);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#highToLow').addEventListener('change', lowHighHandler);
});

// event listener for dealership dropdown

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#dealershipSelector').addEventListener('change', dealershipHandler);
});


// event listener for the expander button 

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#sortExpand').addEventListener('click', expandSort);
});

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('#').addEventListener('change', );
// });

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('#').addEventListener('change', );
// });

let expandSort = async () => {

    if (document.getElementById('priceSort').style.display === "none") {
    document.getElementById('priceSort').style.display = "block"
    document.getElementById('sortExpand').innerHTML = "-"
    } else {
    document.getElementById('priceSort').style.display = "none"
    document.getElementById('sortExpand').innerHTML = "+"
    }


}



searchBox.onkeyup = function() {
    searchValue = searchBox.value
}

let newUsedHandler = async () => {
    if (newBox.checked == true) {
        addOns += "&search=new"
    }
    
    if (usedBox.checked == true) {
        addOns += "&search=preowned"
    }
}

let lowHighHandler = async () => {
    if (lowToHigh.checked == true) {
        addOns += "&sort=salePrice%7Casc"
    }
    
    if (highToLow.checked == true) {
        addOns += "&sort=salePrice%7Cdesc"
    }
}

let dealershipHandler = async () => {
    console.log(`value of dealership Selector is : ${dealershipSelector.value}`)
     dealershipSite = dealershipSelector.value;
}


    searchButton.onclick = async function(event) {
    event.preventDefault()


         searchResult = `https://${dealershipSite}/VehicleSearchResults?searchQuery=${searchValue}${addOns}`

         window.open(searchResult, "_blank");
     
    
}
