import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext();

const todoData =[
{
  id: 1,
  title: 'Finish Progate React Course',
  completed: false,
},
{
  id: 2,
  title: 'Have lunch with Guru Domba',
  completed: false,
},
{
  id: 3,
  title: 'Study React with Ninja Ken',
  completed: false,
},
];

function App() {
  const [todos, setTodos] = useState(todoData);
  console.log(todos);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) =>{
    const update = todos.filter((todo)=>{
      return todo.id !== id;
    });

    setTodos(update)
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return(
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
    
  <div style={styles.container}>
  <h1 style={styles.title}>My Todo List</h1>
  <TodoForm addTodo={addTodo} />
  <Todos todos={todos}/>
  </div>

  </TodoContext.Provider>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App