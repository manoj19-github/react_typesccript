import {Component} from "react"
type CounterProps={
  message:string
}
type CounterStates={
  count:number
}
export class Counter extends Component<CounterProps,CounterStates>{
  constructor(props:CounterProps){
    super(props)
    this.state={count:0}

  }
  handleClick=()=>{
    this.setState(prevCount=>({count:prevCount.count+1}))
  }
  render(){
    return(<div>
      <p>Counter {this.state.count}</p>
      <button onClick={this.handleClick}>Click me</button>
      <p>Message:{this.props.message}</p>
      </div>)
  }
}
