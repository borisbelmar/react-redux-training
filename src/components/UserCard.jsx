import React, { useEffect } from 'react'
import { Card, Button } from 'antd'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getOne } from '../redux/actions/asyncActions'
import { useParams, useHistory } from 'react-router-dom'

function UserCard () {
  const { id } = useParams()
  const { goBack } = useHistory()

  const { loading, item } = useSelector(reducer => reducer.userReducer, shallowEqual)
  const dispatch = useDispatch()

  const ENTITY = 'users'

  useEffect(() => {
    dispatch(getOne(ENTITY, id))
  }, [dispatch, id])

  const handleClick = () => {
    goBack()
  }

  console.info('Render UserCard')
  console.log('Item UserCard', item)
  console.log('Loading UserCard', loading)

  return (
    <div className="UserCard">
      <h1>{ENTITY} Item con Redux Hooks</h1>
      {!loading ? <Card title={item.name} style={{ width: 300 }}>
        <p>id: {item.id}</p>
        <p>phone: {item.phone}</p>
        <p>email: {item.email}</p>
        <p>username: {item.username}</p>
        <p>website: {item.website}</p>
      </Card> : null}
      <Button type='primary' onClick={handleClick}>Volver</Button>
    </div>
  )
}

export default UserCard
