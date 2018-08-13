console.log('kiko');
var shoppingCart = [];

var breadItems = [
    {
        img: "Images/Brenda.jpg",
        name: "Brenda Bunson"
    },
    {
        img: "Images/Kareem.jpg",
        name: "Kareem Abdul Lavash"
    },
    {
        img: "Images/Sammy.jpg",
        name: "Sammy Bagel Junior"
    },
    {
        img: "Images/Teresa.jpg",
        name: "Teresa Del Taco"
    }
];
var sausageItems = [
    {
        img: "Images/Frank.jpg",
        name: "Frank"
    },
    {
        img: "Images/Barry.jpg",
        name: "Barry"
    },
    {
        img: "Images/carl.jpg",
        name: "Carl"
    },
    {
        img: "Images/WholePack.jpg",
        name: "Pack of Sausages"
    }
]
var nonperishableItems = [
    {
        img: "Images/FireWater.jpg",
        name: "Fire Water"
    },
    {
        img: "Images/Grits.jpg",
        name: "Mr. Grits"
    },
    {
        img: "Images/Twinkie.jpg",
        name: "Twinkie.jpg"
    },
    {
        img: "Images/Ramen.jpg",
        name: "Ramen"
    }
];

document.getElementById('bread').click(function() {
    addItems('bread');
});
document.getElementById('sausages').click(function(){
    addItems('sausages');
});
document.getElementById('nonperishables').click(function(){
    addItems('nonperishables');
});
//last part of jquerey that i cant switch back (.on function is not a function)
document.getElementById('display').on('click', '.shopping-item', function() {
    var itemName = $(this).find('p').text();
    addItemToCart(itemName);
});

function addItems(category) {
    clearItems();

    var myItems;
    switch(category) {
        case 'bread':
            myItems = breadItems;
            break;
        case 'sausages':
            myItems = sausageItems;
            break;
        case 'nonperishables':
            myItems = nonperishableItems;
            break;
        default:
    }

    var shoppingList = document.getElementsByTagName('ul');
    for(var i = 0; i < myItems.length; i++) {
        var currentItem = myItems[i];

        shoppingList.append(
            `<li class="shopping-item">
                <img src="${currentItem.img}">
                <p>${currentItem.name}</p>
            </li>`);
    }
    document.getElementById('display').append(shoppingList);
}

function clearItems() {
    document.getElementById('display').empty();
}

function addItemToCart(item) {
    document.querySelectorAll('ul#rightCol').append(`
        <li>
            ${item}
        </li>
    `);
}