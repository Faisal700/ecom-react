import React from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton'
function CartTotals({value,history}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value; 
    return (
       <React.Fragment>
           <div className="container">
             <div className="row">
                 <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                 <Link to="/" >
                 <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=>clearCart()}>Clear Cart</button>
                 </Link>
                 <h5>
                     <span className="text-total">SubTotal : </span>
                     <strong>$ {cartSubTotal}</strong>
                 </h5>
                 <h5>
                     <span className="text-total">Tax : </span>
                     <strong>$ {cartTax}</strong>
                 </h5>
                 <h5>
                     <span className="text-total">Total : </span>
                     <strong>$ {cartTotal}</strong>
                 </h5>
                 <PaypalButton total={cartTotal} clearCart={clearCart} history={history} />
                 </div>
             </div>
           </div>
       </React.Fragment>
    )
}

export default CartTotals
