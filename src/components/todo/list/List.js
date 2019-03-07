import React, { Component } from 'react';
import TodoForm from './../form/TodoForm';
import Button from './../../general/Button';
import EditableText from './../../general/EditableText';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: <div>Cargando...</div>
        }
    }

    componentWillMount(){
        this.fetchData();
    }

    fetchData = () => {
        fetch("http://todos-api-v1.herokuapp.com/todos")
        .then( results => {
            console.log(results);
            return results.json();
        }).then( data => {
            let todos = data.map( todo => {
                console.log(todo);
                return(
                    <li key={todo.id}>
                        <EditableText 
                            onSubmit={this.updateItem} 
                            text={todo.title}
                            id={todo.id} />
                        <Button 
                            onClick={this.handleDelete}
                            id={todo.id}
                            text="Eliminar" />    
                    </li>
                )
            })
            this.setState({
                todos: todos
            })
        })
    }

    updateItem = (id, params) => {
        let body = { title: params.value};
        fetch("http://todos-api-v1.herokuapp.com/todos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then( results => {
            console.log("ACTUALIZADO");
            console.log(results);
            this.fetchData()
        })
    }

    handleDelete = (id) => {
        let confirmation = window.confirm("¿Estás seguro de eliminar este elemento?");
        if(confirmation) {
            fetch("http://todos-api-v1.herokuapp.com/todos/"+id, {
                method: 'DELETE'
            })
            .then( results => {
                console.log("ELIMINADO");
                console.log(results);
                this.fetchData()
            })
        }
    }

    handleAdd = (item) => {
        let body = { title: item.value, created_by: "4"};
        console.log(body);
        fetch("http://todos-api-v1.herokuapp.com/todos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then( results => {
            console.log("ELEMENTO AGREGADO");
            console.log(results);
            this.fetchData()
        })
    }

    render(){
        return(
            <div className="container">
                <TodoForm onSubmit={this.handleAdd} />
                <ul>
                    {this.state.todos}
                </ul>
            </div>
        )
    }
}

export default List;