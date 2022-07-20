import React, {Component} from 'react'

class Box extends Component{
    static defaultProps = {
        height: "20px",
        width: "20px",
        color: "red"
    }
    constructor(props){
        super(props)
        this.removhandler = this.removhandler.bind(this)
    }

    removhandler(e){
        e.preventDefault()
        this.props.removeboxhandler(this.props.id)
    }

    render(){
        return(
            <div className='pl-28 mt-4 flex flex-col space-y-3 '>
                <div style={{backgroundColor: this.props.color,width:this.props.width, height:this.props.height}}></div>
                <button className='w-64 p-2 font-bold whitespace-nowrap rounded-lg text-white bg-blue-600 text-center' onClick={this.removhandler}>Remove the Box!</button>
            </div>
        )
    }
}

export default Box;