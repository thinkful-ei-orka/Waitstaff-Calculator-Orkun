import React from 'react';
import MealDetails from './components/MealDetails';
import CustomerCharges from './components/CustomerCharges';
import Header from './components/Header'
import EarningsInfo from './components/EarningsInfo';
import UserContext from "./components/ContextProvider";
import Reset from './components/Reset'


class App extends React.Component {
  state = {
    Price: 0,
    Tax: 0,
    Tip: 0,
    TipTotal: 0,
    MealCount: 0,
    AverageTip: 0
  }



  handleSubmit = (price, tax, tip) => {
    let newTipTotal = this.state.TipTotal + (tip / 100 * price)
    let newMealCount = this.state.MealCount + 1
    let newAverageTip = newTipTotal / newMealCount
    this.setState({ Price: price, Tax: tax, Tip: tip, TipTotal: newTipTotal, MealCount: newMealCount, AverageTip: newAverageTip })
  }

  handleReset = () => {
    this.setState({ Price: 0, Tax: 0, Tip: 0, TipTotal: 0, MealCount: 0, AverageTip: 0 })
  }


  render() {
    console.log(this)
    return (
      <UserContext.Provider
        value={{
          handleReset: this.handleReset,
          handleSubmit: this.handleSubmit,
          state: this.state
        }}
      >

        <main className="App">
          <Header />
          <div className="components">
            <MealDetails />
            <div className="outputs">
            <CustomerCharges />
            <EarningsInfo />
            </div>
           
          </div>

          <Reset handleReset={this.handleReset} />
        </main>
      </UserContext.Provider>
    );
  }

}

export default App;
