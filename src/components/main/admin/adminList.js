import React, { Component } from 'react';
import './adminList.css';
import {connect} from 'react-redux';


class AdminList extends Component {
    render() {
        return (<div className="AdminList">
            { this.props.admin ?  <div>
                <h3>Change Items</h3>

                <ul className="">
                { this.props.products.map( (product, index) =>
                    <li key={index}>
                    <button>change item</button><button>save changes</button><button>discard changes</button>
                        <h3>{product.name}</h3>
                        <img src={product.thumbnail} alt="Game Thumbnail"/>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </li>
                )
              }
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
      products: state.products.present
    }
}


export default connect(mapStateToProps)(AdminList);
