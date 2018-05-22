import React, { Component } from 'react';
import './adminList.css';
import {connect} from 'react-redux';

import { actionChangeTemp, actionSaveChanges, actionChangeName, actionChangeDescription, actionChangeThumbnail, actionChangePrice, actionChangeStock, actionAdminModifyProduct, actionAdminRemoveProduct } from "../../../actions/actions.js";


class AdminList extends Component {

    render() {

        const temp = this.props.temp
        return (<div className="AdminList">
            { this.props.admin ?  <div>
                <h2>Logged in as administrator</h2>

                <ul className="">

                { this.props.products.map( (product, index) => {

                    return(

                      temp.id === product.id ?
                    <li key={temp.id} className="changeItem">
                        <p>Title:</p>
                        <input value={temp.name} onChange={(e)=>{
                            this.props.dispatch(actionChangeName(product, e.target.value))
                          }}
                           />
                        <p>Description:</p>
                        <textarea value={temp.description} onChange={(e)=>{this.props.dispatch(actionChangeDescription(product, e.target.value))}} />
                        <div>
                            <div>
                                <p>Thumbnail:</p>
                                <input className="thumbnail" value={temp.thumbnail}  onChange={(e)=>{this.props.dispatch(actionChangeThumbnail(product, e.target.value))}} />
                                <p>Price:</p>
                                <input type="number" value={temp.price} onChange={(e)=>{this.props.dispatch(actionChangePrice(product, e.target.value))}}/>
                                <p>Stock:</p>
                                <input type="number" value={temp.stock} onChange={(e)=>{this.props.dispatch(actionChangeStock(product, e.target.value))}} />
                                <p className="BadInput">{temp.name.length < 5 ? "The title is to short." : temp.description.length < 50 ? "The description is to short." : null}</p>
                            </div>
                            <img src={temp.thumbnail} alt="" />
                        </div>
                        <button className={temp.name.length < 5 ? "CantSave" : temp.description.length < 50 ? "CantSave" : "SaveButton"} onClick={(e)=>{
                          if(temp.name.length > 5 && temp.description.length > 20 && temp.stock.length > 0 && temp.price.length > 0){
                            this.props.dispatch(actionAdminModifyProduct(temp))
                            this.props.dispatch(actionSaveChanges())
                          }
                        }}>Save Changes</button>
                        <button className="RemoveButton" onClick={()=>{this.props.dispatch(actionAdminRemoveProduct(product.id))}}>Remove Item</button>
                    </li>
                    :
                    <li key={product.id}>
                          <h3>{product.name}</h3>
                          <p>{product.description}</p>
                          <div>
                              <div>
                                  <p className="thumbnail">Thumbnail: {product.thumbnail}</p>
                                  <p>Price: ${product.price}</p>
                                  <p>Items in stock: {product.stock}</p>

                              </div>
                              <img src={product.thumbnail} alt="" />
                          </div>
                          <button className="ChangeButton" onClick={()=>{
                            this.props.dispatch(actionChangeTemp(product))
                          }}>Change Item</button>
                          <button className="RemoveButton" onClick={()=>{this.props.dispatch(actionAdminRemoveProduct(product.id))}}>Remove Item</button>
                    </li>
                  )

                  }) }
                </ul>
                </div>

              : null
            }
              </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      admin: state.admin,
      products: state.products,
      temp: state.temp,
    }
}


export default connect(mapStateToProps)(AdminList);
