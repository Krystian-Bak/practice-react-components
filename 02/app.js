import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    
    state = {
        amount: 0,
    }
    
    componentDidMount(){
        console.log('Counter został zamontowany')
    }

    clickHandler = () => {
        this.setState(prevState => ({
        amount: prevState.amount + 1
        }))
    }

    render() {
        console.log('zrenderowany')
        return <button onClick={this.clickHandler}>click me ({ this.state.amount })</button>
    }
}

root.render(<Counter />)
