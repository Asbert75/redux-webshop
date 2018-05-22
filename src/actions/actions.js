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

let actionUndoUser = () => {
    return {
        type: "UNDO_USER"
    }
}

let actionRedoUser = () => {
    return {
        type: "REDO_USER"
    }
}

let actionUndoAdmin = () => {
    return {
        type: "UNDO_ADMIN"
    }
}

let actionRedoAdmin = () => {
    return {
        type: "REDO_ADMIN"
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

let actionChangeTemp = (product) => {
  return {
    type: "CHANGE_TEMP",
    product: product,
  }
}

let actionSaveChanges = (product) => {
  return{
    type: "SAVE_CHANGES",
    product: product
  }
}

let actionChangeName = (product, value) => {
  return{
    type: "CHANGE_NAME",
    product: product,
    value: value,
  }
}
let actionChangeDescription = (product, value) => {
  return{
    type: "CHANGE_DESCRIPTION",
    product: product,
    value: value,
  }
}
let actionChangeThumbnail = (product, value) => {
  return{
    type: "CHANGE_THUMBNAIL",
    product: product,
    value: value,
  }
}
let actionChangePrice = (product, value) => {
  return{
    type: "CHANGE_PRICE",
    product: product,
    value: value,
  }
}
let actionChangeStock = (product, value) => {
  return{
    type: "CHANGE_STOCK",
    product: product,
    value: value,
  }
}
let actionChangeId = (product, value) => {
    return {
        type: "CHANGE_ID",
        product: product,
        value: value,
    }
}

export {
    actionAdminAddProduct,
    actionAdminRemoveProduct,
    actionChangeProductView,
    actionAdminModifyProduct,
    actionAddToCart,
    actionRemoveFromCart,
    actionUndoUser, 
    actionRedoUser,
    actionHandleLogin,
    actionHandleLogout,
    actionChangeTemp,
    actionSaveChanges,
    actionChangeName,
    actionChangeDescription,
    actionChangeThumbnail,
    actionChangePrice,
    actionChangeStock,
    actionChangeId,
};
