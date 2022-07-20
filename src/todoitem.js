import React, {Component} from 'react'

class Todoitem extends Component{
    constructor(props){
        super(props)
        this.state = {
            task: this.props.task,
            id: this.props.id,
            done: false,
            edit:false,
            hold:""
        }
        this.deletetask = this.deletetask.bind(this)
        this.edit = this.edit.bind(this)
        this.edittask = this.edittask.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.taskdone = this.taskdone.bind(this)
    
    }
    taskdone(){
        this.setState({
            done:!this.state.done
        })
    }
    deletetask(e){
        e.preventDefault()
        this.props.removetaskhandler(this.state.id)
    }
    handlechange(e){
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
       
    }
    edittask(e){
        e.preventDefault()
        if (/\S/.test(this.state.task)){
            this.props.edittaskhandler(this.state.task)
            this.setState({
                edit: false
            })
        }else{
            this.props.edittaskhandler(this.state.hold)
            this.setState({
                task: this.state.hold,
                edit: false
            })
        }
        
    }
 
    edit(e){
        e.preventDefault()
        this.setState({
            hold: this.state.task
        })
        this.setState({edit:true})
    }
    render(){
        if (this.state.edit){
            return(
                <li className='py-2 px-10'>
                    <form onSubmit={this.edittask}>
                        <div className='flex justify-between w-full '>
                            <input onBlur={this.edittask} autoComplete="off"  className='capitalize text-gray-700 text-base font-medium p-2 px-3 rounded  focus:outline-none' type='text' name='task' value={this.state.task} onChange={this.handlechange} autoFocus />
                            <button type='submit' className='w-12 text-center flex justify-center items-center p-1 px-3 capitalize text-sm rounded-md self-center bg-blue-600'>
                                <span className='text-white text-white capitalize text-xs'>
                                    Save
                                </span>
                            </button>
                        </div>
                    </form>
                </li>  
            )
            
        }
        return(
            <li className='bg-white/20 p-2'>
                <div className='flex justify-between px-10'>
                    <div onClick={this.taskdone} className='py-2 pr-5 w-full whitespace-pre capitalize'>
                        <span className={this.state.done?"line-through text-gray-300":''}> {this.state.task} </span>
                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                        <a href="/#" onClick={this.edit} className='w-12 text-ceter flex justify-center p-1 px-3 rounded-md self-center bg-blue-600'>
                            <span className='text-white capitalize text-xs self-center'>
                                edit
                            </span>
                        </a>
                        <a href="/#" onClick={this.deletetask} className='w-12 text-center flex justify-center p-1 px-3 rounded-md self-center bg-blue-600'>
                            <span className='text-white capitalize text-xs'>
                                Delete
                            </span>
                        </a>
                    </div>
                </div>
            </li>
        )
    }
}

export default Todoitem;