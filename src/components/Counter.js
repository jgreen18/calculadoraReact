import React, { Component } from 'react';
import './Counter.css'


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
            valor1: 0,
            valor2: 0,
            aux: "",
            

        };
    }


    handleOnClickBtnnum = (Num) => {

        const { counterValue, valor1, valor2, aux } = this.state;
       
        this.setState({
            aux: Num === "1" ? (aux.concat(Num)) :Num === "2" ? (aux.concat(Num)):Num === "3" ? (aux.concat(Num)):Num === "4" ? (aux.concat(Num)):Num === "5" ? (aux.concat(Num)):Num === "6" ? (aux.concat(Num)):Num === "7" ? (aux.concat(Num)):Num === "8" ? (aux.concat(Num)):Num === "9" ? (aux.concat(Num)):Num === "0" ? (aux.concat(Num)) :Num === "+" ? (aux.concat(Num)):Num === "/" ? (aux.concat(Num)):Num === "-" ? (aux.concat(Num)):Num === "*" ? (aux.concat(Num)):Num === "%" ? (aux.concat(Num)):Num === "." ? (aux.concat(Num)) :"ERROR",
        })
        this.setState({
            counterValue: Num === "1" ? (aux.concat(Num)):Num === "2" ? (aux.concat(Num)):Num === "3" ? (aux.concat(Num)):Num === "4" ? (aux.concat(Num)):Num === "5" ? (aux.concat(Num)):Num === "6" ? (aux.concat(Num)):Num === "7" ? (aux.concat(Num)):Num === "8" ? (aux.concat(Num)):Num === "9" ? (aux.concat(Num)):Num === "0" ? (aux.concat(Num)):Num === "+" ? (aux.concat(Num)):Num === "/" ? (aux.concat(Num)):Num === "-" ? (aux.concat(Num)):Num === "*" ? (aux.concat(Num)):Num === "%" ? (aux.concat(Num)):Num === "." ? (aux.concat(Num)): Error,
        });
    };

    handleOnClickBtnAC = (ac => {
        const { counterValue, valor1, valor2, aux,cero } = this.state;
        this.setState({
            counterValue: "",
            aux: "",
            
        });
    });
    handleOnClickBtnResult = (res => {
        const { counterValue, aux } = this.state;
        this.setState({
           counterValue:(eval(aux)) 
           
            
        });
    
    });

    render() {
        const { counterValue } = this.state;
        return (


            <div >
                <div className='body'>

                    <h1>{counterValue}</h1>
                    <div className='divnum' >
                        <button onClick={() => this.handleOnClickBtnAC("AC")}>AC</button>
                        <button>+/-</button>
                        <button onClick={() => this.handleOnClickBtnnum("%")}>%</button>
                        <button onClick={() => this.handleOnClickBtnnum("/")}>/</button>
                    </div>
                    <div className='divnum' >
                        <button onClick={() => this.handleOnClickBtnnum("1")}>1</button>
                        <button onClick={() => this.handleOnClickBtnnum("2")}>2</button>
                        <button onClick={() => this.handleOnClickBtnnum("3")}>3</button>
                        <button onClick={() => this.handleOnClickBtnnum("*")}>x</button>
                    </div>
                    <div className='divnum'>
                        <button onClick={() => this.handleOnClickBtnnum("4")}>4</button>
                        <button onClick={() => this.handleOnClickBtnnum("5")}>5</button>
                        <button onClick={() => this.handleOnClickBtnnum("6")}>6</button>
                        <button onClick={() => this.handleOnClickBtnnum("-")}>-</button>

                    </div>
                    <div className='divnum'>
                        <button onClick={() => this.handleOnClickBtnnum("7")}>7</button>
                        <button onClick={() => this.handleOnClickBtnnum("8")}>8</button>
                        <button onClick={() => this.handleOnClickBtnnum("9")}>9</button>
                        <button onClick={() => this.handleOnClickBtnnum("+")} >+</button>
                    </div>
                    <div className='divnum2'>
                        <button onClick={() => this.handleOnClickBtnnum("0")}>0</button>
                        <button onClick={() => this.handleOnClickBtnnum(".")}>.</button>
                        <button onClick={() => this.handleOnClickBtnResult()}>=</button>
                    </div>


                </div>

            </div>

        )
    }

}
export default Counter;
