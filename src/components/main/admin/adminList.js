import React, { Component } from 'react';
import './adminList.css';
import {connect} from 'react-redux';

import { actionChangeTemp, actionSaveChanges, actionChangeName, actionChangeDescription, actionChangeThumbnail, actionChangePrice, actionChangeStock, actionAdminModifyProduct, actionAdminRemoveProduct } from "../../../actions/actions.js";


class AdminList extends Component {

    render() {
        return (<div className="AdminList">
            { this.props.admin ?  <div>
                <h2>Logged in as administrator</h2>

                <ul className="">
                { this.props.products.present.map( (product, index) => {

                    return(

                      this.props.temp.id === product.id ?
                    <li key={this.props.temp.id} className="changeItem">
                        <p>Title:</p>
                        <input value={this.props.temp.name} onChange={(e)=>{
                            this.props.dispatch(actionChangeName(product, e.target.value))
                          }}
                           />
                        <p>Description:</p>
                        <textarea value={this.props.temp.description} onChange={(e)=>{this.props.dispatch(actionChangeDescription(product, e.target.value))}} />
                        <div>
                            <div>
                                <p>Thumbnail:</p>
                                <input className="thumbnail" value={this.props.temp.thumbnail}  onChange={(e)=>{this.props.dispatch(actionChangeThumbnail(product, e.target.value))}} />
                                <p>Price:</p>
                                <input type="number" value={this.props.temp.price} onChange={(e)=>{this.props.dispatch(actionChangePrice(product, e.target.value))}}/>
                                <p>Stock:</p>
                                <input type="number" value={this.props.temp.stock} onChange={(e)=>{this.props.dispatch(actionChangeStock(product, e.target.value))}} />
                                <p className="BadInput">{this.props.temp.name.length < 5 ? "The title is to short." : this.props.temp.description.length < 50 ? "The description is to short." : null}</p>
                            </div>
                            <img src={this.props.temp.thumbnail} alt="" />
                        </div>
                        <button className={this.props.temp.name.length < 5 ? "CantSave" : this.props.temp.description.length < 50 ? "CantSave" : "SaveButton"} onClick={(e)=>{
                          if(this.props.temp.name.length > 5 && this.props.temp.description.length > 20){
                            this.props.dispatch(actionAdminModifyProduct(this.props.temp))
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
