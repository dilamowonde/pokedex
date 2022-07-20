import React, {Component} from 'react'

class Todoform extends Component{
    constructor(props){
        super(props)
        this.state = {
            task: ""
        }
        this.addnewtask=this.addnewtask.bind(this)
        this.changehandler = this.changehandler.bind(this)
    }

    addnewtask(e){
        e.preventDefault()
        if(this.state.task){
            this.props.addtaskhandler(this.state.task)
            this.setState({
                task:""
            })
        }
    }

    changehandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className='w-full px-10'>
                <form onSubmit={this.addnewtask}>
                    <div >
                        <div className='flex flex-col'>
                            <label className='text-base font-medium rounded'>New Todo</label>
                            <div className='flex justify-between items-center space-x-1'>
                                <input autoFocus autoComplete="off" className='text-gray-700 bg-slate-100 text-base font-medium p-2 rounded border-2 border-transparent focus:border-2 focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 focus:outline-none' type="task" onChange={this.changehandler} value={this.state.task} name='task' placeholder='New Todo'/>
                                <button className='bg-blue-600 p-2 px-3 border-2 border-transparent rounded'>
                                    <span className='text-base font-medium whitespace-nowrap'>
                                        Add Todo
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Todoform;