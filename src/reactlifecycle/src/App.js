/**
 * Created by DVengamBhanumoorthy on 8/16/2017.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            status:true
        }
        this.toggleState=this.toggleState.bind(this);
    }


    getDefaultProps(){
        console.log('getDefaultProps');
        return {name: 'John'};
    }
    getInitialState(){
        console.log('getInitialState');
        return { status: true}
    }


    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps'+JSON.stringify(nextProps));
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    toggleState() {
        console.log('toggleState');
        this.setState({status: !this.state.status})
    }


    render() {
        console.log('render');
        return(<h1 onClick={this.toggleState}>{this.state.status.toString()} </h1>);
    }
}

ReactDOM.render(
    <App name="Vipul"/>,
    document.getElementById('root')
);

ReactDOM.render(
    <App name="Delhi"/>,
    document.getElementById('root')
);
