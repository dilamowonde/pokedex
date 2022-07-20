import React, {Component} from 'react'
import Todoform from './todoform'
import Todoitem from './todoitem'
import { v4 as uuidv4 } from 'uuid';


class Todolist extends Component{
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
        this.listTodo = this.listTodo.bind(this)
        this.addtask = this.addtask.bind(this)
        this.removetask = this.removetask.bind(this)
        this.edittask = this.edittask.bind(this)
    }
    edittask(id,task){
        let tasks = this.state.todos.map(todo=>{
                if(todo.id===id){
                    return {
                        task: task,
                        id: id
                    }
                }else return todo
            })
        this.setState({
            todo: tasks
        })
    }
    listTodo(){
        let todos = []
        this.state.todos.map((todo)=>{
            return todos.push(
                <Todoitem key={todo.id} edittaskhandler={this.edittask} id={todo.id} removetaskhandler= {this.removetask} task={todo.task}/>            
            )
            
        })
        return (
            <ul className='flex flex-col divide-white/50 divide-y py-2'>
                {todos}
            </ul>
        )
    }

    addtask(task){
        const id=uuidv4()
        this.setState({
            todos: [
                ...this.state.todos,
                {id:id, task: task}
            ]
        })

    }
    removetask(id){
       const tasks = this.state.todos.filter(todo=>{
            return todo.id!==id
        })

    
        this.setState({
            todos: tasks
        })

    }
    
    render(){
        return(
            <div className='flex flex-col items-center h-full  '>
                <div className='w-96 flex flex-col m-32 text-white bg-red-500 rounded-lg'>
                    <div className='py-10'>
                        <div className='flex flex-col px-10 '>
                            <h1 className='text-3xl capitalize'>Todo List!</h1>
                            <span className='text-sm text-xs capitalize'>a simple react todo list app</span> 
                        </div>
                        <div>
                            {this.listTodo()}
                        </div>
                        <Todoform removetaskhandler={this.removetask} addtaskhandler={this.addtask} />
                    </div>
                 </div>
            </div>
            
        )
    }
}

export default Todolist;