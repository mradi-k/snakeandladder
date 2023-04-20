import React , { useState , useEffect, useContext} from 'react'
import './Gameb.css'
import Squares from './Squares'
//importing images
import ldgif from '../diceimg/BTBq.gif'
import ludo0 from '../diceimg/perspective-dice-six-faces-six.svg'
import ludo1 from '../diceimg/inverted-dice-1.svg'
import ludo2 from '../diceimg/inverted-dice-2.svg'
import ludo3 from '../diceimg/inverted-dice-3.svg'
import ludo4 from '../diceimg/inverted-dice-4.svg'
import ludo5 from '../diceimg/inverted-dice-5.svg'
import ludo6 from '../diceimg/inverted-dice-6.svg'
function Gameboard() {
  // dice images;
  const diceimage=[ludo0, ludo1, ludo2, ludo3, ludo4, ludo5, ludo6];

  //functio for selection random images
  const[rdnum1,setRdnum1]=useState(0);
  const[rdnum2,setRdnum2]=useState(0);
  const[dim1,setDim1]=useState(diceimage[0]);
  const[dim2,setDim2]=useState(diceimage[0]);
  const[ps1,setPs1]=useState(true);
  const[ps2,setPs2]=useState(false);
  //square
  const square=[
    100, 99, 98, 97, 96, 95, 94, 93, 92, 91,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    80, 79, 78, 77, 76, 75, 74, 73, 72, 71,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    40, 39, 38, 37, 36, 35, 34, 33, 32, 31,
    21, 22, 23, 24, 25, 26, 27, 28, 29,  30,
    20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  const ladderStart=[4,13,33,42,50,62,74];
  const ladderEnd=[25,46,49,63,69,81,92];
  const snakeStart=[27,40,43,54,66,76,89,99];
  const snakeEnd=[5,3,18,31,45,58,53,41];

  const [player1goti,setPlayer1goti]=useState(0);
  const [player2goti,setPlayer2goti]=useState(0);
  

  // click handle player 1
  let randomNum1;
  const onImgClick1 =()=>{
    setDim1(ldgif);
     randomNum1=Math.floor(Math.random() * (6) + 1);
      //randomNum1=6;
    setTimeout(() => {
      // This code will run after 5 seconds
      setRdnum1(randomNum1);
      setDim1(diceimage[randomNum1]);
      //console.log(rdnum1);
      Gotimove1(randomNum1);
     /* setPs1(false);
      setPs2(true); */

    }, 2000);
  }
  // player1move
  function Gotimove1 (a) {
    //console.log(a);
    let f1=a;
    let p1token=player1goti+f1;
    //setPlayer1goti(player1goti+props.rd1);
    setTimeout(() => {
      //console.log(player2goti +" "+ p1token);
      if(player2goti==p1token){
        setPlayer1goti(p1token);
        setPlayer2goti(0);
        //console.log("cut token");
        setPs1(true);
        setPs2(false);
      }
      else{
        for(var i=0;i<ladderStart.length;i++){
          if(p1token==ladderStart[i]){
            setPlayer1goti(ladderEnd[i]);
            setPs1(true);
           // console.log("ladder");
            setPs2(false);
            break;
          }else if(p1token==snakeStart[i]){
            setPlayer1goti(snakeEnd[i]);
            //console.log("snake");
            setPs1(false);
            setPs2(true);
            break;
          }else{
            if(f1==6){
              //console.log("if rd 6");
              setPs1(true);
              setPs2(false);
            }
            else{
              //console.log("if no");
              setPs1(false);
              setPs2(true);
            }
            setPlayer1goti(p1token);
          }
       }
      }
    }, 4000);
  }


  //clickhandle player 2;
  let randomNum2;
  const onImgClick2 =()=>{
      setDim2(ldgif);
      randomNum2=Math.floor(Math.random() * (6) + 1);
      //randomNum2=100;
      setTimeout(() => {
        // This code will run after 5 seconds
        setRdnum2(randomNum2);
        setDim2(diceimage[randomNum2]);
        /*setPs1(true);
        setPs2(false); */
        Gotimove2(randomNum2);
      }, 2000);
   }

   //player2
   //let f2=props.rd2;
  function Gotimove2 (b) {
    let f2=b;
    let p2token=player2goti+f2;
    setTimeout(() => {
      if(player1goti==p2token){
        setPlayer2goti(p2token);
        setPlayer1goti(0);
        setPs2(true);
        setPs1(false);
      }
      else{
        for(var i=0;i<ladderStart.length;i++){
          if(p2token==ladderStart[i] ){
             setPlayer2goti(ladderEnd[i]);
             setPs2(true);
             setPs1(false);
             break;
           }else if(p2token==snakeStart[i]){
             setPlayer2goti(snakeEnd[i]);
             setPs2(false);
             setPs1(true);
             break;
           }
           else{
             if(f2==6){
               setPs2(true);
               setPs1(false);
             }
             else{
               setPs2(false);
               setPs1(true);
             }
             setPlayer2goti(p2token);
           }
         }
      }
    }, 4000);
  }

   
  const container={
    width:"450px",
    margin:"0px auto",
    display:"grid",
    gridTemplateColumns:"75px 300px 75px",
    gridTemplateRows:"75px 300px 75px",
    background:""
  }
  
   const c2={
    fontSize:"1.2rem",
    fontWeight:"bold"
   }
  
  return (
    <div style={container} className="">
      <div style={c2} className="">
        <i className="fa fa-user-circle" style={{marginLeft:"25%"}} aria-hidden="true"></i>
        <p className='' style={{marginTop:"-5%"}}>Player 1</p>
      </div>
      <div style={c2}>
        <p style={{textAlign:"center"}}>
        <i className={ps1?"fa fa-hand-o-left fa-2x blinking":""} aria-hidden="true"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className={ps2?"fa fa-hand-o-right fa-2x blinking":""} aria-hidden="true"></i>
        </p>
      </div>
      <div style={c2}>
      <i className="fa fa-user-circle" style={{marginLeft:"25%"}} aria-hidden="true"></i>
        <p className='' style={{marginTop:"-5%"}}>Player 2</p>
      </div>

      <div style={c2}>
        <img onClick={ps1?()=>onImgClick1():""} src={dim1} style={{height:"60px",width:"60px"}} alt="not found" />
      </div>
      <div style={c2}>
        <Squares rd1={rdnum1} rd2={rdnum2} />
      </div>
      <div style={c2}>
        <img onClick={ps2?()=>onImgClick2():""} src={dim2} style={{height:"60px",width:"60px", marginLeft:"15px"}} alt="not found" />
      </div>

      <div style={c2}>
        
      </div>
      <div style={c2}>
        
      </div>
      <div style={c2}>
        
      </div>      
    </div>
  )
}

export default Gameboard;