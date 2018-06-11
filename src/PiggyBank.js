import React, {Component} from 'react';

class PiggyBank extends Component {

  constructor(props){
    super(props)
    this.state = {
      total: 0,
      owner: 'Marta'
    }
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  deposit(){
    this.setState(prevState => {
      return {total: prevState.total + 1}
    })
  }

  withdraw(){
    this.setState(prevState => {
      if (prevState.total > 0) {
        return {total: prevState.total - 1}
      } else {
        return prevState.total;
      }
    })
  }

  render(){
    return (
      <div className='bank-box'>
        <h1>{this.props.title}</h1>
        <p>{this.state.owner} has £{this.state.total} in their account</p>
        <button onClick={this.deposit}>Add</button>
        <button onClick={this.withdraw}>Decrease</button>
      </div>
    );
  };
};

export default PiggyBank;
