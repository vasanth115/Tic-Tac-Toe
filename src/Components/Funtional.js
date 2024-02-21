import React, { Component } from 'react'
import './style.css'

class Funtional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1,
         box1:'',
         box2:'',
         box3:'',
         box4:'',
         box5:'',
         box6:'',
         box7:'',
         box8:'',
         box9:'',
         winner:'ㅤ',
         gameEnded: false
      }
    }



    gameplay(e)
    {
        if(this.state.count%2===0)
        {
           switch(e.target.id)
           {
            case '1':
                if(this.state.box1==='X'||this.state.box1==='O')
                {
                  this.setState({
                    box1:this.state.box1
                  })
                }
                else
                {
                  this.setState({
                    box1:'X',
                    count:this.state.count+1
                 },()=>{
                  this.clickwinner()
                })
                 
                }
                break;
            case '2':
               if(this.state.box2==='X'||this.state.box2==='O')
               {
                 this.setState({
                   box2:this.state.box2
                 })
               }
               else
               {
                 this.setState({
                   box2:'X',
                   count:this.state.count+1
                },()=>{
                  this.clickwinner()
                })
                
               }
                  break;
             case '3':
               if(this.state.box3==='X'||this.state.box3==='O')
               {
                 this.setState({
                   box3:this.state.box3
                 })
               }
               else
               {
                 this.setState({
                   box3:'X',
                   count:this.state.count+1
                },()=>{
                  this.clickwinner()
                })
                
               }
                break;
            case '4':
               if(this.state.box4==='X'||this.state.box4==='O')
               {
                 this.setState({
                   box4:this.state.box4
                 })
               }
               else
               {
                 this.setState({
                   box4:'X',
                   count:this.state.count+1
                },()=>{
                  this.clickwinner()
                })
                
               }
                break;
            case '5':
               if(this.state.box5==='X'||this.state.box5==='O')
                {
                  this.setState({
                    box5:this.state.box5
                  })
                }
                else
                {
                  this.setState({
                    box5:'X',
                    count:this.state.count+1
                 },()=>{
                  this.clickwinner()
                })
                 
                }
                break;
            case '6':
               if(this.state.box6==='X'||this.state.box6==='O')
                {
                  this.setState({
                    box6:this.state.box6
                  })
                }
                else
                {
                  this.setState({
                    box6:'X',
                    count:this.state.count+1
                 },()=>{
                  this.clickwinner()
                })
                 
                }
                break;
            case '7':
               if(this.state.box7==='X'||this.state.box7==='O')
               {
                 this.setState({
                   box7:this.state.box7
                 })
               }
               else
               {
                 this.setState({
                   box7:'X',
                   count:this.state.count+1
                },()=>{
                  this.clickwinner()
                })
                
               }
                break;
            case '8':
               if(this.state.box8==='X'||this.state.box8==='O')
               {
                 this.setState({
                   box8:this.state.box8
                 })
               }
               else
               {
                 this.setState({
                   box8:'X',
                   count:this.state.count+1
                },()=>{
                  this.clickwinner()
                })
                
               }
                break;
            case '9':
               if(this.state.box9==='X'||this.state.box9==='O')
               {
                 this.setState({
                   box9:this.state.box9
                 })
               }
               else
               {
                 this.setState({
                   box9:'X',
                   count:this.state.count+1
                },()=>{
                  this.clickwinner()
                })
                
               }
                break;


            default:
                break;
           }
        }
        else
        {
          switch(e.target.id)
          {
           case '1':
            if(this.state.box1==='X'||this.state.box1==='O')
            {
              this.setState({
                box1:this.state.box1
              })
            }
            else
            {
              this.setState({
                box1:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
               break;
           case '2':
            if(this.state.box2==='X'||this.state.box2==='O')
            {
              this.setState({
                box2:this.state.box2
              })
            }
            else
            {
              this.setState({
                box2:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
                 break;
            case '3':
            if(this.state.box3==='X'||this.state.box3==='O')
            {
              this.setState({
                box3:this.state.box3
              })
            }
            else
            {
              this.setState({
                box3:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
               break;
           case '4':
            if(this.state.box4==='X'||this.state.box4==='O')
            {
              this.setState({
                box4:this.state.box4
              })
            }
            else
            {
              this.setState({
                box4:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
               break;
           case '5':
            if(this.state.box5==='X'||this.state.box5==='O')
            {
              this.setState({
                box5:this.state.box5
              })
            }
            else
            {
              this.setState({
                box5:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
               break;
           case '6':
            if(this.state.box6==='X'||this.state.box6==='O')
            {
              this.setState({
                box6:this.state.box6
              })
            }
            else
            {
              this.setState({
                box6:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
               break;
           case '7':
            if(this.state.box7==='X'||this.state.box7==='O')
            {
              this.setState({
                box7:this.state.box7
              })
            }
            else
            {
              this.setState({
                box7:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
               break;
           case '8':
            if(this.state.box8==='X'||this.state.box8==='O')
            {
              this.setState({
                box8:this.state.box8
              })
            }
            else
            {
              this.setState({
                box8:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
             
            }
               break;
           case '9':
            if(this.state.box9==='X'||this.state.box9==='O')
            {
              this.setState({
                box9:this.state.box9
              })
            }
            else
            {
              this.setState({
                box9:'O',
                count:this.state.count+1
             },()=>{
               this.clickwinner()
             })
            }
               break;


           default:
               break;
          }
        }
    }
    
    

    funtionreset()
    {
        window.location.reload();
    }

    clickwinner = () =>
    {
      const lines=[
         [1,2,3],
         [4,5,6],
         [7,8,9],
         [1,4,7],
         [2,5,8],
         [3,6,9],
         [1,5,9],
         [3,5,7]
      ]

   for(let i=0;i<lines.length;i++)
   {
      const [a,b,c]=lines[i];
      if(a===1&&b===2&&c===3)
      {
         if(this.state.box1&&this.state.box1===this.state.box2&&this.state.box1===this.state.box3)
         {
            this.setState({
               winner:`${this.state.box1} Is The Winner`,
               gameEnded:true
            })
         }
      }
      else if(a===4&&b===5&&c===6)
      {
         if(this.state.box4&&this.state.box4===this.state.box5&&this.state.box4===this.state.box6)
         {
            this.setState({
               winner:`${this.state.box4} Is The Winner`,
               gameEnded:true
            })
         }
      }
      else if(a===7&&b===8&&c===9)
      {
         if(this.state.box7&&this.state.box7===this.state.box8&&this.state.box7===this.state.box9)
         {
            this.setState({
               winner:`${this.state.box7} Is The Winner`,
               gameEnded:true
            })
         }
      }
      else if(a===1&&b===4&&c===7)
      {
         if(this.state.box1&&this.state.box1===this.state.box4&&this.state.box1===this.state.box7)
         {
            this.setState({
               winner:`${this.state.box1} Is The Winner`,
               gameEnded:true
            })
         }
      }
      else if(a===2&&b===5&&c===8)
      {
         if(this.state.box2&&this.state.box2===this.state.box5&&this.state.box2===this.state.box8)
         {
            this.setState({
               winner:`${this.state.box2} Is The Winner`,
               gameEnded:true
            })
         }
      }
      else if(a===3&&b===6&&c===9)
      {
         if(this.state.box3&&this.state.box3===this.state.box6&&this.state.box3===this.state.box9)
         {
            this.setState({
               winner:`${this.state.box3} Is The Winner`,
               gameEnded:true
            })
         }
      }
      else if(a===1&&b===5&&c===9)
      {
         if(this.state.box1&&this.state.box1===this.state.box5&&this.state.box1===this.state.box9)
         {
            this.setState({
               winner:`${this.state.box1} Is The Winner`,
               gameEnded:true
            })
         }
      }
      else if(a===3&&b===5&&c===7)
      {
         if(this.state.box3&&this.state.box3===this.state.box5&&this.state.box3===this.state.box7)
         {
            this.setState({
               winner:`${this.state.box3} Is The Winner`,
               gameEnded:true
            })
         }
      }
      if(this.state.box1!==''&&this.state.box2!==''&&this.state.box3!==''&&this.state.box4!==''&&this.state.box5!==''&&this.state.box6!==''&&this.state.box7!==''&&this.state.box8!==''&&this.state.box9!=='')
      {
        if(this.state.gameEnded===false)
        {
          this.setState({
            winner:`The Match Draws`,
            gameEnded:true
         })
        }
      }
   }
    }

  render() {
    return (
      <div className='container'>
        <h1>Tic Tac Toe</h1>
       <div className='main'>
       <div className='Mainbox'>
       <button className='box' id='1' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box1}</button>
       <button className='box' id='2' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box2}</button>
       <button className='box' id='3' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box3}</button>
       <button className='box' id='4' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box4}</button>
       <button className='box' id='5' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box5}</button>
       <button className='box' id='6' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box6}</button>
       <button className='box' id='7' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box7}</button>
       <button className='box' id='8' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box8}</button>
       <button className='box' id='9' onClick={(e)=>this.gameplay(e)} disabled={this.state.gameEnded}>{this.state.box9}</button>
      </div>
      <h3 className='Winner'>{this.state.winner}</h3>
      <div className='resetbtn'>
      <button className='reset' onClick={this.funtionreset}>Reset</button>
      </div>
       </div>
      </div>
    )
  }
}

export default Funtional;