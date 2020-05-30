import React from 'react';
import UserContext from "./ContextProvider";


export default class MealDetails extends React.Component {


    state = {
        Price: {
            value: 0,
            touched: false
        },
        Tax: {
            value: 0,
            touched: false,
        },
        Tip: {
            value: 0,
            touched: false
        }
    };




    getPrice = (price) => {
        this.setState({ Price: { value: price, touched: true } })
    }

    getTax = (tax) => {
        this.setState({ Tax: { value: tax, touched: true } })
    }

    getTip = (tip) => {
        this.setState({ Tip: { value: tip, touched: true } })
    }

    
    render() {
     
        return (
            <UserContext.Consumer>
                {({handleSubmit}) => (
                    <section className="meal-details">
                        <h2>Enter the Meal Details</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(+this.state.Price.value, +this.state.Tax.value, +this.state.Tip.value)
                            console.log(this.state.Price.value)
                        }}>
                            <label htmlFor="base-meal-price"><h4>Base Meal Price: $</h4></label>
                            <input onChange={e => this.getPrice(e.target.value)} type="number" id="base-meal-price" required></input>

                            <label htmlFor="tax-rate"><h4>Tax Rate: %</h4></label>
                            <input onChange={e => this.getTax(e.target.value)} type="number" id="tax-rate" required></input>

                            <label htmlFor="tip-percentage"><h4>Tip Percentage: %</h4></label>
                            <input onChange={e => this.getTip(e.target.value)} type="number" id="tip-percentage" ></input>
                            
                            <div className="buttons-div">
                                <button type="submit">Submit</button>
                                <button className="cancel" type="reset">Cancel</button>
                            </div>
                        </form>
                    </section>
                )}
            </UserContext.Consumer>
        )
    }
}