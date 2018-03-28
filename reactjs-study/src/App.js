import React, { Component }  from  'react';
import logo from './logo.svg';
import './App.css';


function Square (props) {
    return (
      <button className="square" 
              onClick={props.onClick}>
        {props.value}
      </button>
    );
  
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares,
                    xIsNext: !this.state.xIsNext});
    
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} 
                    onClick={() => this.handleClick(i)}/>;
  };
  
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    return (
      <div>
        <div className="status">  {status}</div>
        <div className="board-row">
          
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React cua Tran dep trai</h1>
          </header>

        <div className="game">
          <div className="game-board">
            <Board value={this.props.gammer}/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ===============

export default Game;

