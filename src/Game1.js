import React, { useState , useRef, useEffect } from 'react';
var d3 = require("d3");

var fontSize=30
var inputSize="6"
var xSound = document.getElementById("myAudio"); 

function N2Circles({ncopy,data}){
  const d3Container = useRef(null);
  
  useEffect(() => {
    
    console.log(d3Container.current);
    
    const svg = d3.select(d3Container.current);
    // Bind D3 data
    const update = svg
    .append('g')
    .selectAll('circle')
    .data(data);
    
    // <circle cx="50" cy="50" r="20" stroke="green" strokeWidth="4" fill="yellow" />
    // Enter new D3 elements
    update.enter()
    .append('circle')
    .attr('cx', (d, i) => "50")
    .attr('cy', (d, i) => i * 50+50)
    .attr('r', 24)
    .style('stroke',"green")
    .style('strokeWidth',"4")
    .style("fill","yellow")
    
    // Update existing D3 elements
    update
    .attr('cx', (d, i) => "50")
    .attr('cy', (d, i) => i * 50+50)
    .attr('r', 24)
    .style('stroke',"green")
    .style('strokeWidth',"4")
    .style("fill","yellow")
    
    // Remove old D3 elements
    update.exit()
    .remove();
    
    
  },[data,d3Container])
  
  return (
    <svg
    className="d3-component"
    width={400}
    height={200}
    ref={d3Container}
    />
    );
  }
  
  function useNewTimer(currentDate, count, setCount) {
    const [date, setDate] = React.useState(currentDate);
    // const [count, setCount] = React.useState(0);
    // let [timerID, setTimerID]=React.useState(null);
    // var timerID
    React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000 );

      // setTimerID(setInterval( () => tick(), 1000 ))
      return function cleanup() {
        clearInterval(timerID);
        //   console.log("heres")  
      };
    });
    
    function tick() {
      if (count<=10){
      setDate(new Date());
      setCount(count+1);
    //   console.log(count)
      }
      if (count == 10){
        // this.setState({done: '<div style={fontSize:"100px"}>Time reached! You got <font style={color:"red"}>'+this.state.score+'</font> scores!',color:"red"})
        xSound.play() 
        console.log(count)
        // clearInterval(timerID)
        //  clearInterval(this.timerID);
      }
    }
    
    return [date,count]
  }    
  
  export function Clock(props) {
    //Here we reference our custom hook
    const [timer, count] = useNewTimer(new Date(), props.count, props.setCount);
    
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {timer.toLocaleTimeString()}.</h2>
      <h2>It is {count.toString()}.</h2>
      </div>
      );
    }     
    function jsUcfirst(string) 
    {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function Game1() {
      
      let  [num1,setNum1]=useState(1);
      let  [num2,setNum2]=useState(1);
      let  [result,setResult]=useState("");
      let  [score,setScore]=useState(0);
      let  [count,setCount]=useState(0);
      
      
      const  mySubmitHandler = (event) => {
        event.preventDefault();
        
        let res=Number(num1)+Number(num2);
        if(res === Number(result)){
          setScore(score+1)
        } 
        setNum1(Math.floor(Math.random() * 10))
        setNum2(Math.floor(Math.random() * 10))
        setResult("")
        // this.setState({num1:Math.floor(Math.random() * 10),num2:Math.floor(Math.random() * 10),
        //                 result:""})
        alert("The total is " + res);
      }
      const myChangeHandler = (event) => {
        event.preventDefault();
        
        const { target: { name, value } } = event
        
        eval("set"+jsUcfirst(name))(value)
        // this.setState({ [name]: value});
        
        
        let res=Number(num1)+Number(num2);
        // console.log("res=, result=",res, this.state.result);
        // console.log("res=",res === parseInt(this.state.result));
        
        if(res === Number(value)){
          // console.log("input==========",name,value);
          setTimeout(()=>
          {setScore(score+1);
            setNum1(Math.floor(Math.random() * 10));
            setNum2(Math.floor(Math.random() * 10));
            setResult("")}
            ,200)
          } 
        }
        
        
        return (
          
          <div className="circleRow">
          <Clock count={count} setCount={setCount} />
          
          <form onSubmit={mySubmitHandler} >
          
          {/* <p>Enter two numbers, and submit:</p> */}
          <input style={{fontSize:fontSize}}
          type='text'
          name='num1'
          // value= {this.state.num1}
          value={num1}
          onChange={myChangeHandler}
          size={inputSize}
          /> 
          
          <font style={{fontSize:fontSize}}>{"  "}+{"  "}</font>
          
          <input style={{fontSize:fontSize}}
          type='text'
          name='num2'
          // value= {this.state.num2}
          value={num2}
          onChange={myChangeHandler}
          size={inputSize}
          /> 
          
          <font style={{fontSize:fontSize}}>{"  "}={"  "}</font>
          
          <input style={{fontSize:fontSize}}
          type='text'
          name='result'
          // value={this.state.result}
          value={result}
          onChange={myChangeHandler}
          size={inputSize}
          />
          
          <input style={{fontSize:fontSize}}
          type='submit'
          value="Next"
          size={inputSize}
          />
          {/* <div dangerouslySetInnerHTML={{ __html: this.state.done}} /> */}
          </form>
          
          
          
          
          
          
          {/* <div> */}
          {/* <svg width="100" height="100">  */}
          {/* <circle cx="50" cy="50" r="20" stroke="green" strokeWidth="4" fill="yellow" />
        <circle cx="90" cy="50" r="20" stroke="green" strokeWidth="4" fill="yellow" /> */}
        <N2Circles ncopy={2} data={[1,2]} />
        
        <svg width="400" height="110">
        <rect width="300" height="100" style={{fill:"rgb(0,0,255)",strokeWidth:"3",stroke:"rgb(0,0,0)"}} />
        Sorry, your browser does not support inline SVG.  
        </svg>
        
        
        
        </div>
        
        
        );
        
      }
      
      
      export default Game1;