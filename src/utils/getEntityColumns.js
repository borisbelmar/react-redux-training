import todoColumns from './entities/todoColumns'
import userColumns from './entities/userColumns'

const getEntityColumns = entity => {
  switch (entity) {
    case 'users':
      return userColumns
    case 'todos':
      return todoColumns
    default:
      throw Error('No existe la entidad')
  }
}

export default getEntityColumns
