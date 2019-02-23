import React from 'react';
import {Component} from 'react';
import render from 'react-dom';


// const Timer = (props)=>{    
//         return <div>Timer Component Works!!!!!</div>
// }

class Timer extends Component{
    constructor(props){
        super(props);
        this.state ={
            time:  new Date(),
            start_timer: false
        }
    }

    componentDidMount(){
        this.timerId = setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    // handleStartTimer(){
    //     this.setState({
    //         start_timer: !this.state.start_timer
    //     })
    //     this.timerId = setInterval(
    //         ()=>this.tick(),
    //         1000
    //     );
    // }

    // handleStopTimer(){
    //     this.setState({
    //         start_timer: !this.state.start_timer
    //     })
    //     clearInterval(this.timerId)
    // }

    render(props){
        // let start_stop_btn;
        // if(this.state.start_timer===false){
        //     start_stop_btn = <button onClick={this.handleStartTimer.bind(this)}>Start Timer</button>
        // }
        // else{
        //     start_stop_btn= <button onClick={this.handleStopTimer.bind(this)}>Stop Timer</button>
        // }
        return <div>
            <div>Timer App</div>
            {/* <div>
                {start_stop_btn}
            </div> */}
            <br/>
            <div>
                {this.state.time.toLocaleString()}
                </div>
            </div>
            
        
    }
}

// ReactDOM.render(
//     <Timer/>,
//     document.getElementById('root')
// )

export default Timer;