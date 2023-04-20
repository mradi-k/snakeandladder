import React , { useState , useEffect} from 'react'
import Blue from '../image/blue.png'
import Red from '../image/red.png'
function Squares(props) {
    // css styling
  const container={
    width:"300px",
    margin:"0px auto",
    display:"grid",
    gridTemplateColumns:"repeat(10,1fr)",
    gridTemplateRows:"repeat(10,1fr)",  
  }
  const sq={
    height:"30px",
    width:"30px",
    border:"1px solid black",
    textAlign:"center",
    margin:"0px auto",
    boxSizing: "border-box"
  }
  // squres
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

  //Game main function
  const [player1goti,setPlayer1goti]=useState(0);
  const [player2goti,setPlayer2goti]=useState(0);
 //player1 moves
 //console.log(props.rd1);
 let f1=props.rd1;
 let p1token=0;
  function Gotimove1 () {
    
    if(player1goti+f1<=100){
       p1token=player1goti+f1;
    }
    
    //setPlayer1goti(player1goti+props.rd1);
    setTimeout(() => {
      if(player2goti==p1token){
        setPlayer1goti(p1token);
        setPlayer2goti(0);
      }
      for(var i=0;i<ladderStart.length;i++){
          if(p1token==ladderStart[i]){
            setPlayer1goti(ladderEnd[i]);
            break;
          }else if(p1token==snakeStart[i]){
            setPlayer1goti(snakeEnd[i]);
            break;
          }else{
            setPlayer1goti(p1token);
          }
       }
    }, 2000);
  }
  
  useEffect(() => {
    Gotimove1();
    checkWin();
  }, [f1])
  //player2 moves
  let f2=props.rd2;
  function Gotimove2 () {
    let p2token=player2goti+f2;
    f2=0;
   setTimeout(() => {
    if(player1goti==p2token){
      setPlayer2goti(p2token);
      setPlayer1goti(0);
    }
    for(var i=0;i<ladderStart.length;i++){
     if(p2token==ladderStart[i] ){
        setPlayer2goti(ladderEnd[i]);
        break;
      }else if(p2token==snakeStart[i]){
        setPlayer2goti(snakeEnd[i]);
        break;
      }
      else{
        setPlayer2goti(p2token);
      }
    }
   }, 2000);
  }

  useEffect(() => {
    Gotimove2();
    checkWin();
  }, [f2])

  //function check Win Position
   function checkWin(){
      if(player1goti==100){
        console.log("Player 1 Win");
      }
      else if(player2goti==100){
        console.log("Player 1 Win");
      }
   }

  return (
    <div style={container} className="image">
      {
        square.map((item,index) =>(
          <div key={index} style={sq}>
            {
              item==player1goti?(<img src={Red}  style={{height:"20px", width:"20px",marginTop:"5px", background:"red"}} alt="not found" />):""
            }
            {
              item==player2goti?(<img src={Blue} style={{height:"20px", width:"20px",marginTop:"5px", background:"red"}} alt="not found" />):""
            }
          </div>
        ))
      }
    </div>
  )
}

export default Squares