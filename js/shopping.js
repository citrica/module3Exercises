const product = { count: 3, price: 12.55, type: "ropa" };

function getTotal(product) { // Precio total de la compra sin IVA
    return product.count > 0 ? product.count * product.price : 0;
}

function getVat(product) { // Función que calcula el IVA del producto unitario
    var vatType = 0.21;
    switch (product.type) {
        case "alimentacion":
            vatType = 0.1;
            break;
        case "libro":
            vatType = 0.04
            break;
    }
    return product.price * vatType;
}

function getTotalVat(product) { // Función que calcula el IVA total de la compra
    return product.count > 0 ? product.count * getVat(product) : 0;
}

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat; // Precio total de la compra con IVA incluído
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

printProductPrice(product); // Mostrar los resultados en consola