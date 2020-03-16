import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TableWithoutRedux from './components/TableWithoutRedux'
import TableWithReduxConnect from './components/TableWithReduxConnect'
import TableWithReduxHooks from './components/TableWithReduxHooks'
import UserCard from './components/UserCard'
import TodoCard from './components/TodoCard'

function Router () {
  const RouterStyle = {
    padding: 32
  }

  console.info('Render Router')

  return (
    <div className="Router" style={RouterStyle} >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TableWithoutRedux} />
          <Route exact path='/redux-connect/' component={TableWithReduxConnect} />
          <Route exact path='/redux-hooks/:entity' component={TableWithReduxHooks} />
          <Route exact path='/redux-hooks/users/:id' component={UserCard} />
          <Route exact path='/redux-hooks/todos/:id' component={TodoCard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
