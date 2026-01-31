import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        counter: 0
    }
        console.log('render - komponent utworzony');
    }


componentDidMount() {

    console.log('Component zamontowany');

    this.interval = setInterval(() => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));

    console.log('Interwał 5s: counter =', this.state.counter + 1);
    }, 5000)
}

componentWillUnmount() {
    clearInterval(this.interval)
    console.log('componentWillUnmount: interwał wyczyszczony')
}

render() {
    console.log('render')
    return <h1>{this.state.counter}</h1>
}

}

class ClearComponent extends React.Component {

  state = { showApp: true };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ showApp: false })}>
          Odmontuj komponet App
        </button>
        {this.state.showApp && <App />}
      </div>
    );
  }
}

root.render(<ClearComponent />);
