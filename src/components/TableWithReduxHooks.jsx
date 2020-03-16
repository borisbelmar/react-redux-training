import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getAll } from '../redux/actions/asyncActions'
import getEntityColumns from '../utils/getEntityColumns'

function TableWithReduxHooks () {
  const { push } = useHistory()
  const { entity } = useParams()

  const { data, loading } = useSelector(reducer => reducer[entity], shallowEqual)

  if (!data) {
    console.error(`Reducer for ${entity} entity not implemented yet`)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(entity))
  }, [dispatch, entity])

  const columns = getEntityColumns(entity)

  const handleRowClick = (record) => {
    push(`/redux-hooks/${entity}/${record.id}`)
  }

  console.info('Render TableWithReduxHooks')
  console.log('Data TableWithReduxHooks', data)
  console.log('Loading TableWithReduxHooks', loading)

  return (
    <div className="TableWithoutRedux">
      <h1>Tabla {entity} con Redux Hooks</h1>
      <Table
        dataSource={data}
        columns={columns}
        bordered={true}
        loading={loading}
        rowKey='id'
        onRow={(record) => {
          return {
            onClick: () => handleRowClick(record)
          }
        }}
      />
    </div>
  )
}

export default TableWithReduxHooks
