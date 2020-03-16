import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { connect } from 'react-redux'

import crudActions from '../redux/actions/asyncActions'

function TableWithReduxConnect ({ data, getAll, ...props }) {
  const ENTITY = 'users'

  useEffect(() => {
    getAll(ENTITY)
  }, [getAll])

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website'
    }
  ]

  console.info('Render TableWithReduxConnect')
  console.log('Props TableWithReduxConnect', props)

  return (
    <div className="TableWithoutRedux">
      <h1>Tabla dmgTypes con Redux Connect</h1>
      <Table dataSource={data} columns={columns} bordered={true} pagination={false} loading={false} rowKey='id' />
    </div>
  )
}

TableWithReduxConnect.propTypes = {
  data: PropTypes.object.isRequired,
  getAll: PropTypes.func.isRequired
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer
}

export default connect(mapStateToProps, crudActions)(TableWithReduxConnect)
