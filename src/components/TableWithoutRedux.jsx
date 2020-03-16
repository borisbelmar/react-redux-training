import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import axios from 'axios'
import { API } from '../config'

function TableWithoutRedux () {
  const [response, setResponse] = useState({ data: [], loading: true, error: false })

  const ENTITY = 'users'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}/${ENTITY}`)
        setResponse(response => ({ ...response, data: res.data, loading: false }))
      } catch (error) {
        console.error(error)
        setResponse(response => ({ ...response, loading: false, error: true }))
      }
    }
    fetchData()
  }, [])

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

  console.info('Render TableWithoutRedux', response)

  return (
    <div className="TableWithoutRedux">
      <h1>Tabla dmgTypes con useState y useEffect</h1>
      <Table dataSource={response.data} columns={columns} bordered={true} pagination={false} loading={response.loading} rowKey='id' />
    </div>
  )
}

export default TableWithoutRedux
