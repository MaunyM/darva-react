import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Item from './type/Item';
import TodoContext, { ITodoContext } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import TodoItem from './components/TodoItem';
import TodoItemById from './components/TodoItemById';

async function fetchItems(): Promise<Item[]> {
  const response = await fetch('https://api.larus.fr/pwa/post')
  return response.json()
}

function postItem(item: Item): Promise<any> {
  return fetch('https://api.larus.fr/pwa/post', {
    method: 'POST',
    body: JSON.stringify(item)
  })
}

function App() {

  const [todos, setTodos] = useState<Item[]>([])

  useEffect(() => {
    const truande = async () => {
      try {
        const items = await fetchItems()
        setTodos(items)
      } catch {

      }
    }
    truande()
  }, [])

  useEffect(() => {
    fetchItems().then(items => setTodos(items))
  }, [])

  const itemIsDone = (item: Item) => {
    const nouvelleListe = todos.map((itemCourant) => {
      if (item.name === itemCourant.name) {
        return { ...item, isDone: true }
      } else {
        return itemCourant
      }
    }
    )
    setTodos(nouvelleListe)
  }

  const itemIsUndone = (item: Item) => {
    const nouvelleListe = todos.map((itemCourant) => {
      if (item.name === itemCourant.name) {
        return { ...item, isDone: false }
      } else {
        return itemCourant
      }
    }
    )
    setTodos(nouvelleListe)
  }

  const addItem = (item: Item) => {
    postItem(item).then(() =>
      setTodos((prevState) => ([...prevState, item]))
    )
  }

  const cleanItems = () => setTodos([])

  const context: ITodoContext = {
    todos,
    addItem,
    cleanItems,
    itemIsDone,
    itemIsUndone
  }
  return (
    <TodoContext.Provider value={context}>
      <div className="App">
        <Router>
          <nav>
            <NavLink exact={true} to={'/'}>Home</NavLink>
            <NavLink to={'/add'}>Ajouter</NavLink>
          </nav>
          <Switch>
            <Route path={'/add'}>
              <TodoForm />
            </Route>
            <Route path={'/item/:id'}>
              <TodoItemById />
            </Route>
            <Route path={'/'}>
              <TodoList />
            </Route>
          </Switch>
        </Router>
      </div>
    </TodoContext.Provider>
  );

}

export default App;
