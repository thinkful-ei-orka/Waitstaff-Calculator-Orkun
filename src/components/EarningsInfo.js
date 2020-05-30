import React from 'react';
import '../index.css'
import UserContext from './ContextProvider'

export default class EarningsInfo extends React.Component {

    render() {
        return (
            <UserContext.Consumer>
                {({ state }) => (
                    <section className="earnings-info">
                        <h2>My Earnings Info</h2>
                        <h5>Tip Total: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(state.TipTotal)} </h5>
                        <h5>Meal Count: {state.MealCount}  </h5>
                        <h5>Average Tip Per Meal: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(state.AverageTip)} </h5>
                    </section>
                )}
            </UserContext.Consumer>
        )
    }
}