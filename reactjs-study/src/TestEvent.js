import React from 'react'
class PreventLink extends React.Component {
    handleClick(e) {
        console.log('The link was clickedhh.');
        e.preventDefault();
        
    }
    render() {
        
        return (
            <div>
                <input type="text"/>
                <a href="https:/google.com.vn" onClick={this.handleClick}>
                    Click me
                </a>
            </div>
        );
    };
}
const x=4;
export class LoggingButton extends React.Component {
    handleClick(e) {
        console.log('this is:', this.x);
    }

    x = 3;
    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
      </button>
        );
    }
}

