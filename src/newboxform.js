import React, {Component} from 'react'

class Boxform extends Component{
    constructor(props){
        super(props)
        this.state = {
            height:"",
            width: "",
            color: ""
        }
        this.handelchange = this.handelchange.bind(this)
        this.handelsubmit = this.handelsubmit.bind(this)
    }
    handelchange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handelsubmit(e){
        e.preventDefault()
        this.props.addboxhandler({...this.state})
        this.setState({
            height:"",
            width: "",
            color: ""
        })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handelsubmit}>
                    <div className='flex pl-12 space-y-2 items-center'>
                        <div className='flex space-x-2 justify-center items-center mt-2'>
                            <label htmlFor='height'>Height</label>
                            <input className='p-2 border-2 w-64 border-gray-500 rounded ' id='height' name='height' onChange={this.handelchange} value={this.state.height}/>
                            
                            <label htmlFor='width'>Width</label>
                            <input className='p-2 border-2 w-64 border-gray-500 rounded ' id='width' name='width' onChange={this.handelchange} value={this.state.width}/>
                            
                            <label htmlFor='color'>Color</label>
                            <input className='p-2 border-2 w-64 border-gray-500 rounded ' id='color' name='color' onChange={this.handelchange} value={this.state.color}/>
                        </div>
                        
                        <button className='w-64 p-2 m-auto font-bold whitespace-nowrap rounded-lg text-white bg-blue-600 text-center' type='submit'>Add new box!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Boxform;