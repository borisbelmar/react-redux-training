import React, { useEffect } from 'react'
import { Card, Button } from 'antd'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getOne } from '../redux/actions/asyncActions'
import { useParams, useHistory } from 'react-router-dom'

function TodoCard () {
  const ENTITY = 'todos'
  const { id } = useParams()
  const { goBack } = useHistory()

  const { loading, item } = useSelector(reducer => reducer[ENTITY], shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOne(ENTITY, id))
  }, [dispatch, id])

  const handleClick = () => {
    goBack()
  }

  console.info('Render TodoCard')
  console.log('Item TodoCard', item)
  console.log('Loading TodoCard', loading)

  return (
    <div className="TodoCard">
      <h1>{ENTITY} Item con Redux Hooks</h1>
      {!loading ? <Card title={item.name} style={{ width: 300 }}>
        <p>id: {item.id}</p>
        <p>userId: {item.userId}</p>
        <p>title: {item.title}</p>
        <p>completed: {item.completed}</p>
      </Card> : null}
      <Button type='primary' onClick={handleClick}>Volver</Button>
    </div>
  )
}

export default TodoCard
