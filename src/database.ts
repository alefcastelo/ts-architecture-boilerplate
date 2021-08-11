import { createConnection, EntityManager, getConnectionOptions } from 'typeorm'
import { container } from './container'

export const createDatabaseConnection = async (): Promise<void> => {
  const connectionOptions = await getConnectionOptions()
  const conn = await createConnection(connectionOptions)

  container.bind(EntityManager).toConstantValue(conn.createEntityManager())
}
