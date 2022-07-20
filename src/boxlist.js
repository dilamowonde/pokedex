import React, {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Box from './box'
import Boxform from './newboxform'

class Boxlist extends Component{
    static defaultProps = {
        
    }
    constructor(props){
        super(props)
        this.state = {
            boxs:[
                // {id:'6abw759c2-1580-48a2-bed2-8648b3c8fesc' ,height:'112px',width:'132px',color:'blue'}
            ]
        }
        this.removebox = this.removebox.bind(this)
        this.addbox = this.addbox.bind(this)
    }

    addbox(newbox){
        const box ={...newbox,id:uuidv4()} 
        // console.log([...this.state.boxs,newbox])
        this.setState({
            boxs: [...this.state.boxs,box]
        })
    }
    
    removebox(id){
        // console.log(this.state.boxs[0].id===id)
        // let boxs = this.state.boxs
        // let newboxs = boxs.filter(box=>box.id!==id)
        

        // console.log(this.state.boxs)
        // console.log(
        //     this.state.boxs.filter(box=>box.id!==id)
        // )
        this.setState({
            boxs:[
                ...this.state.boxs.filter(box=>box.id!==id)
            ]
        })
        
    }
    render(){
        return(
            <div className='flex flex-col '>
                ዲላሞ
                <Boxform addboxhandler={this.addbox}/>
                    {this.state.boxs.map(box=>
                    {
                        return <Box key={box.id}  removeboxhandler={this.removebox} id={box.id} height={box.height} width={box.width} color={box.color} />
                    }
                )}
            </div>
        )
    }
}

export default Boxlist;