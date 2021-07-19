import path from 'path'
import { Connection, createConnection } from 'typeorm'
import { Container } from './container'
import { SubscriberRepository } from './subscriber/repository/subscriber.repository'

type Config = {
  host?: string
  port?: number
  username?: string
  password?: string
  dbname?: string
  entities?: string[]
}

export class Database {
  protected config: Config
  protected connection: Connection

  constructor(config?: Config) {
    this.config = {
      host: config?.host ?? process.env.DB_HOST,
      port: config?.port ?? parseInt(process.env.DB_POST),
      username: config?.username ?? process.env.DB_USERNAME,
      password: config?.password ?? process.env.DB_PASSWORD,
      dbname: config?.dbname ?? process.env.DB_NAME,
      entities: [
        path.join(__dirname, 'subscriber/entity/*.ts')
      ]
    }
  }

  private async createConnection(): Promise<void> {
    this.connection = await createConnection({
      type: 'postgres',
      host: this.config.host,
      port: this.config.port,
      username: this.config.username,
      password: this.config.password,
      database: this.config.dbname,
      entities: this.config.entities,
      synchronize: true,
      logging: false
    })
  }

  async registerRepositories(container: Container): Promise<void> {
    await this.createConnection()

    container.set('SubscriberRepository', this.connection.getCustomRepository(SubscriberRepository))
  }
}
