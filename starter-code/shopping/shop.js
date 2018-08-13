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

$('#bread').click(function() {
    addItems('bread');
});
$('#sausages').click(function(){
    addItems('sausages');
});
$('#nonperishables').click(function(){
    addItems('nonperishables');
});

$('#display').on('click', '.shopping-item', function() {
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

    var shoppingList = $('<ul>');
    for(var i = 0; i < myItems.length; i++) {
        var currentItem = myItems[i];

        shoppingList.append(
            `<li class="shopping-item">
                <img src="${currentItem.img}">
                <p>${currentItem.name}</p>
            </li>`);
    }
    $('#display').append(shoppingList);
}

function clearItems() {
    $('#display').empty();
}

function addItemToCart(item) {
    $('#rightCol ul').append(`
        <li>
            ${item}
        </li>
    `);
}