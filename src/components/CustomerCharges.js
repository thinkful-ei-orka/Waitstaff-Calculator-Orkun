import React from 'react';
import '../index.css';
import UserContext from "./ContextProvider";

export default class CustomerCharges extends React.Component {
    static contextType = UserContext;

    render() {
        const Subtotal = this.context.state.Price + (this.context.state.Tax / 100 * this.context.state.Price)

        const Tip = Subtotal * (this.context.state.Tip / 100)
        return (
            <section className="customer-charges">
                <h2>Customer Charges</h2>
                <h5>Subtotal: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Subtotal)}</h5>
                <h5>Tip: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Tip)}</h5>
                <h5>Total: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Subtotal + Tip)}</h5>
            </section>
        )
    }
}