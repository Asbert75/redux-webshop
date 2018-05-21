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

let actionRemoveFromCart = (product) => {
    return {
        type: "REMOVE_FROM_CART",
        product
    }
}

let actionUndo = () => {
    return {
        type: "UNDO"
    }
}

let actionChangeProductView = (view) => {
    return {
        type: "CHANGE_PRODUCT_VIEW",
        view
    }
}

let actionHandleLogin = () => {
    return {
      type: "LOGIN"
    }
}

let actionHandleLogout = () => {
    return {
      type: "LOGOUT"
    }
}

export {actionAdminAddProduct, actionAdminRemoveProduct, actionChangeProductView,
    actionAdminModifyProduct, actionAddToCart, actionRemoveFromCart, actionUndo, actionHandleLogin, actionHandleLogout};
