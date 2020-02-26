function addButton() {
    $(".add-to-cart").click(function (event) {
        event.preventDefault();
        var name = $(this).attr("data-name");
        var price = Number($(this).attr("data-price"));
        var itemCount = 0;
        var cartArray = shoppingCart.getCartCopy();
        for (var i in cartArray) {
            itemCount += cartArray[i].count;
        }
        itemCount++;
        $('#itemCount').html(itemCount).css('display', 'block');
        shoppingCart.addItem(name, price, 1);
    });
};

function setCart() {
    var cartArray = shoppingCart.getCartCopy();
    if (cartArray.length > 0) $('#itemCount').html(shoppingCart.countCart()).css('display', 'block');
};

function myFunction() {
    var message = document.getElementById("notification");
    message.className = "display";
    setTimeout(function () {
        message.className = message.className.replace("display", "");
    }, 3000);
};

function displayCart() {
    var cartArray = shoppingCart.getCartCopy();
    var output = "";
    for (var i in cartArray) {
        output += "<li>" +
            "<div class=distance>" +
            cartArray[i].name + "</div>" + "<div class=space>" +
            " <input class='item-count' type='number' data-name='" +
            cartArray[i].name +
            "' value='" + cartArray[i].count + "'>" + "</div>" +
            " <button class='subtract-item' data-name='" +
            cartArray[i].name + "'>-</button>" +
            cartArray[i].count + "</div>" + "<div class=space4>" +
            " <button class='plus-item' data-name='" +
            cartArray[i].name + "'>+</button>" + "</div>" + "<div class=space2>" +
            " $" +
            cartArray[i].price + "</div>" + "<div class=distance2>" + "$" +
            cartArray[i].total +
            "</div>" + "<div  class='distance3'>" +
            "<button class='delete-item' data-name='" +
            cartArray[i].name + "'>X</button>" + "</div>"
            "</li>";
    }
    $("#show-cart").html(output);
    $("#total-count").html(shoppingCart.countCart());
    $("#subtotal-cost").html(shoppingCart.subTotalCart());
    $("#total-cost").html(shoppingCart.totalCart());
    $(".clear-cart").click(function (event) {
        var itemCount = 0;
        $('#itemCount').html('').css('display', 'none');
        $('#cartItems').html('');
        shoppingCart.clearCart();
        displayCart();
    });
};

function change() {
    $("#show-cart").on("change", ".item-count", function (event) {
        var name = $(this).attr("data-name");
        var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
    });


    $("#show-cart").on("change", ".item-count", function (event) {
        var name = $(this).attr("data-name");
        var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
    });

    $("#show-cart").on("click", ".subtract-item", function (event) {
        var name = $(this).attr("data-name");
        shoppingCart.removeItem(name);
        displayCart();
    });

    $("#show-cart").on("click", ".plus-item", function (event) {
        var name = $(this).attr("data-name");
        shoppingCart.addItem(name, 0, 1);
        displayCart();
    });

    $("#show-cart").on("click", ".delete-item", function (event) {
        var name = $(this).attr("data-name");
        shoppingCart.removeItems(name);
        displayCart();
    });
};
