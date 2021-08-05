import path from 'path'
import { createConnection, EntityManager } from 'typeorm'
import { container } from './container'

export const createDatabaseConnection = async (): Promise<void> => {
  const conn = await createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_POST),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
      path.join(__dirname, 'subscriber/entity/*.ts')
    ],
    synchronize: true,
    logging: false
  })

  container.bind(EntityManager).toConstantValue(conn.manager)
}
