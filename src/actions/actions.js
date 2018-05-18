let actionAdminAddProduct = (product) => {
    return {
        type: "ADMIN_ADD_PRODUCT",
        product
    }
}

let actionAdminRemoveProduct = (productid) => {
    return {
        type: "ADMIN_REMOVE_PRODUCT",
        productid
    }
}

let actionAdminModifyProduct = (product) => {
    return {
        type: "ADMIN_MODIFY_PRODUCT",
        product
    }
}

let actionAddToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        product
    }
}

let actionRemoveFromCart = (productid) => {
    return {
        type: "REMOVE_FROM_CART",
        productid
    }
}

let actionUpdateStock = (productid, quantity) => {
    return {
        type: "UPDATE_STOCK",
        productid,
        quantity
    }
}

let actionUndo = () => {
    return {
        type: "UNDO"
    }
}

export {actionUpdateStock, actionAdminAddProduct, actionAdminRemoveProduct, 
    actionAdminModifyProduct, actionAddToCart, actionRemoveFromCart, actionUndo};