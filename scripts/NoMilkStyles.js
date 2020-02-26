// Code for creating RHS boxes on the different pages
// w = width in percent of the page
// l = absolute move to the left
// h = height of the box
// col = background colour
// topVal = where in % the top starts
// textSz = size of the text
// textLeft = how far to move text to the left
// HTMLContent = obvious

function createRhsElement(w, l, h, col, textCol, topVal, textTop, textSz, textTop, HTMLcontent) {
    var hbc = document.getElementsByClassName("header-banner-container")[0];
    var newRhs = document.createElement("div");
    newRhs.className = "rhs text-rhs";
    newRhs.style.backgroundColor = col;
    newRhs.style.top = topVal;
    newRhs.style.left = l;
    newRhs.style.width = w;
    newRhs.style.height = h;
    newRhs.style.paddingTop = textTop;
    newRhs.style.color = textCol;
    newRhs.style.fontSize = textSz;
    newRhs.innerHTML = HTMLcontent;
    hbc.appendChild(newRhs);
}

function homePageElements() {
    var hbc = document.getElementsByClassName("header-banner")[0];
    createRhsElement("36vw", "64vw", "24vw", "#300306", "white", "0vw", "12vw", "3vw", "7vw", "Coffee<br>&<br>Sandwiches");
    createRhsElement("36vw", "64vw", "21vw", "#DA4E31", "#300306", "30vw", "12vw", "3vw", "9vw", "Every Day<br>&#9679; 7 to 7 &#9679;");
}

function shopPageElements() {
    var hbc = document.getElementsByClassName("header-banner")[0];
    createRhsElement("40vw", "60vw", "6vw", "#300306", "#DBDBDB", "0vw", "4vw", "3vw", "7vw", "SHOP");
    createRhsElement("40vw", "60vw", "20.5vw", "#300306", "#DBDBDB", "12vw", "4vw", "2vw", "0vw",
        "<br>COFFEE<br>EQUIPMENT<BR>BREW KITS");
}

function contactPageElements() {
    var hbc = document.getElementsByClassName("header-banner")[0];
    createRhsElement("40vw", "60vw", "18.5vw", "#300306", "#DBDBDB", "0vw", "4vw", "3vw", "14vw", "CONTACT");
}

function cartPageElements() {
    var hbc = document.getElementsByClassName("header-banner")[0];
    createRhsElement("40vw", "60vw", "18.5vw", "#300306", "#DBDBDB", "0vw", "4vw", "3vw", "14vw", "CART");
}

function featureText(str) {
    return str;
}

// The following two functions show how a catalogue might be represented as a Javascript object
// and how such a catalogue might be displayed

var coffeeMenuItems = [
    {
        drink: "Americano",
        price: "3",
        textPiece: ""
    },

    {
        drink: "Drip",
        price: "2",
        textPiece: ""
    },

    {
        drink: "Cortado",
        price: "4",
        textPiece: ""
    },

    {
        drink: "Espresso",
        price: "4",
        textPiece: ""
    },

    {
        drink: "Cappucino",
        price: "4",
        textPiece: ""
    },

    {
        drink: "Cold Brew",
        price: "4",
        textPiece: ""
    },

    {
        drink: "Macchiato",
        price: "4",
        textPiece: ""
    },
    {
        drink: "Iced Americano",
        price: "3.5",
        textPiece: ""
    },

    {
        drink: "Latte",
        price: "4.5",
        textPiece: ""
    },

    {
        drink: "Iced Latte",
        price: "4.5",
        textPiece: ""
    }
];

function createCoffeeMenu() {
    var menu = document.getElementsByClassName("coffee-menu")[0];
    createMenu(menu, coffeeMenuItems);
};

function createMenu(menu, menuItems) {
//    alert("Coffee Before: " + menuItems);
    var n = menuItems.length;
    for (var i = 0; i < n; i++) {
        var box1 = document.createElement("div");
        if (i % 2 == 0)
            box1.className = "coffee-menu-item left";
        else
            box1.className = "coffee-menu-item right";
        var box2 = document.createElement("div");
        box2.className = "coffee-menu-item-product";
        box2.innerHTML = menuItems[i].drink;
        var box3 = document.createElement("div");
        box3.className = "coffee-menu-item-cost";
        box3.innerHTML = menuItems[i].price;
        box1.appendChild(box2);
        box1.appendChild(box3);
        menu.appendChild(box1);
    }
};

var sandwichesMenuItems = [

    {
        name: "TACO IN A BAN",
        price: "8",
        description: "Braised Beef in adobo sauce, arugula, pickled onion, jalapeno, and feta.",
        textPiece: ""
    },

    {
        name: "SUN RISE",
        price: "6",
        description: "Chorizo, sweet potato, sage, avocado, onion,  radish, fried egg, sweet chili mayo.",
        textPiece: ""
    },

    {
        name: "THE SUNFLOWER",
        price: "7",
        description: "Grilled chicken with sprouts, avocado, charred red pepper, cucumber, and roasted garlic hummus.",
        textPiece: ""
    },

    {
        name: "BUTCHER BLOCK",
        price: "9",
        description: "Slow roasted porchetta with pesto, arugula, shallots, caramelized onion, and asiago.",
        textPiece: ""
    }
];

function createSandwichesMenu() {
    var menu = document.getElementsByClassName("sandwiches-menu")[0];
    createFoodMenu(menu, sandwichesMenuItems);
};

function createFoodMenu(menu, menuItems) {
    alert("Food Before: " + menuItems);
    var n = menuItems.length;
    for (var i = 0; i < n; i++) {
        var box11 = document.createElement("div");
        if (i % 2 == 0)
            box11.className = "sandwiches-item left";
        else
            box11.className = "sandwiches-item right";

        var box12 = document.createElement("div");
        box12.className = "sandwiches-item-product";
        box12.innerHTML = menuItems[i].name;

        var box13 = document.createElement("div");
        box13.className = "sandwiches-item-cost";
        box13.innerHTML = menuItems[i].price;

        var box14 = document.createElement("div");
        box14.className = "sandwiches-item-description";
        box14.innerHTML = menuItems[i].description;

        //        menu.appendChild(box);

        box11.appendChild(box12);
        box11.appendChild(box13);
        box11.appendChild(box14);
        menu.appendChild(box11);
    }
    //    var box = document.createElement("div");
    //    var box4 = document.createElement("div");
    //    box4.className = "sandwiches-item-description";
    //    box4.innerHTML = menuItems[i].description;
    //    box1.appendChild(box4);
    //    menu.appendChild(box);
};

var billingMenuItems = [
    {
        first: "<input type='text'name='firstname' placeholder='FIRST NAME' id='first' class='inputInfor'>",

        address1: "<input type='text' name='address1' placeholder='ADDRESS (LINE ONE)' id='address1' class='inputInfor'>",

        city: "<input type='text' name='city' placeholder='CITY' id='city' class='inputInfor'>",

        code: "<input type='text' name='code' placeholder='POSTAL/ZIP CODE' id='code' class='inputInfor'>"
    },

    {
        last: "<input type='text' name='lastname' placeholder='LAST NAME' id='last' class='inputInfor'>",

        province: "<input type='text' name='province' placeholder='PROVINCE/STATE' id='province' class='inputInfor'>",

        address2: "<input type='text' name='address2' placeholder='ADDRESS (LINE TWO)' id='address2' class='inputInfor'>",

        country: "<input type='text' name='country' placeholder='COUNTRY' id='country' class='inputInfor'>"
    }
];

function myBill() {
    var menu = document.getElementsByClassName("bill-list")[0];
    createBillingList(menu, billingMenuItems);
};

function createBillingList(menu1, menuItem) {
    alert("Before: " + billingMenuItems);
    console.log(billingMenuItems);
    var n = billingMenuItems.length;
    console.log(n);
    alert("After: " + billingMenuItems);
    for (var i = 0; i < n; i++) {
        var box = document.createElement("div");
        if (i % 2 == 0)
            box.className = "bill-list1 left";
        else
            box.className = "bill-list2 right";

        var box_1 = document.createElement("div");
        box_1.className = "billinfor";
        box_1.innerHTML = billingMenuItems[i].first;
        box_1.innerHTML = billingMenuItems[i].address1;
        box_1.innerHTML = billingMenuItems[i].city;
        box_1.innerHTML = billingMenuItems[i].code;

        var box_2 = document.createElement("div");
        box_2.className = "billinfor1";
        box_2.innerHTML = billingMenuItems[i].last;
        box_2.innerHTML = billingMenuItems[i].province;
        box_2.innerHTML = billingMenuItems[i].address2;
        box_2.innerHTML = billingMenuItems[i].country;


        box.appendChild(box_1);
        alert("after append" + box);
        menu1.appendChild(box);
    }
};
