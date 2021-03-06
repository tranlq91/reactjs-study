import React from  'react';
import logo from './logo.svg';
import './App.css';


function Square (props) {
    let text = null;
    let className = "square";
    if(props.value){
      text = props.value.text;
      if (props.value.isWinner === true) {
        className += " square-boil";
      }
      
    }
      
  
    return (
      <button className={className} 
              onClick={props.onClick}>
        {text}
      </button>
    );
  
}

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  };

  renderRows(lowEnd) {
    let list = [];
    for (let i = lowEnd; i < lowEnd + 3; i++) {
      list.push(i);
    }
      return(
        <div key={lowEnd} className="board-row">
          {list.map((item) =>
            this.renderSquare(item)
          )}
        </div>
      
    )
  }
  
  render() {
    console.log(this.props.winner);
    var keys = [0,3,6];
    return (
      <div className="board">
        {keys.map((item) => this.renderRows(item))}
      </div>
    );
  }
}

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  
  

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
       return;
    }
    squares[i] = {};
    squares[i].text = this.state.xIsNext ? 'X' : 'O';
    squares[i].isWinner = false;
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
    
  }
  
  jumpTo(step) {
    
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });

    const history = this.state.history.slice(0, this.state.stepNumber);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    for(let i = 0; i < squares.length; i++) {
      if(squares[i])
        squares[i].isWinner = false;
    }
  }

  render() {
    
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    //console.log('render called history', this.state.history);
    //console.log('render called stepnumber', this.state.stepNumber);
    
    let status;
    if (winner) {
      status = 'Winner: ' + winner.text;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    console.log('winner', winner);
    const steps = history.map((state, stepNumber) => {
       let className = '';
       if(stepNumber == this.state.stepNumber)
          className = 'chosenStep';
       const desc = stepNumber ? 
        ' Go to move #' + stepNumber:
        ' Go to game start';

      return(
        <li key={stepNumber} >
            <button onClick={() => this.jumpTo(stepNumber)} className={className}>{desc}</button>
        </li>
      );
    });
    

    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React cua Tran dep trai</h1>
          </header>

        <div className="game">
          <div className="game-board">
            <Board squares={current.squares}
                   winnerLine = {winner}
                   onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{steps}</ol>
          </div>
        </div>
      </div>
    );
  }
};


function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[b] && squares[c])
    if (squares[a].text === squares[b].text && squares[a].text === squares[c].text) {
      squares[a].isWinner = true;
      squares[b].isWinner = true;
      squares[c].isWinner = true;
      return squares[a];
    }
  }
  return null;
}

// ===============



