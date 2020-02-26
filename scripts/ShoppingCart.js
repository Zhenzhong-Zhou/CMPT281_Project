// Zhenzhong Zhou, 11195696, zhz028
// Shopping Cart Functions

var shoppingCart = (function () {

    //Private methods and properties
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    };

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    };

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart == null)
            cart = [];
    };

    loadCart();

    // Public methods and properities
    var obj = {};

    obj.addItem = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };

    obj.removeItem = function (name) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count--;
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };

    obj.removeItems = function (name) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };

    obj.clearCart = function () {
        cart = [];
        saveCart();
    };

    obj.itemCount = function (name) {
        var itemCount = 0;
        for (var i in cart) {
            if (cart[i].name === name) {
                itemCount += cart[i].count;
            }
        }
        return itemCount;
    };

    obj.countCart = function () {
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }
        return totalCount;
    };

    obj.itemTotal = function (name) {
        var itemAmount = 0;
        for (var i in cart) {
            if (cart[i].name === name) {
                itemAmount = cart[i].price * cart[i].count;
            }
        }
        return itemAmount.toFixed(2);
    };

    obj.subTotalCart = function () {
        var totalAmount = 0;
        for (var i in cart) {
            totalAmount += cart[i].price * cart[i].count;
        }
        return totalAmount.toFixed(2);
    };

    obj.totalCart = function () {
        var totalAmount = 0;
        for (var i in cart) {
            totalAmount += (cart[i].price * cart[i].count) * 1.11;
        }
        return totalAmount.toFixed(2);
    };

    obj.getCartCopy = function () {
        var copyCart = [];
        for (var i in cart) {
            var newItem = new Item(cart[i].name, cart[i].price, cart[i].count);
            newItem.total = (cart[i].price * cart[i].count).toFixed(2);
            copyCart.push(newItem);
        }
        return copyCart;
    };

    obj.listCart = function () {
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ------------------------
    return obj;
})();
