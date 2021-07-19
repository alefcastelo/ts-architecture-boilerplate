import express, { Express } from 'express'
import dotenv from 'dotenv'
import { createAppRoutes } from './config/routes'
import { Container } from './container'
import { Database } from './database'

type AppConfig = {
  envFile: string
}

export class App {
  protected app: Express;
  protected container: Container;
  protected database: Database;

  constructor(config: AppConfig) {
    dotenv.config({ path: config.envFile })
    this.app = express()
  }

  public async build (): Promise<void> {
    this.container = new Container()
    this.database = new Database()
    this.database.registerRepositories(this.container)
  }

  public run (): void {
    this.build().then(() => {
      this.app.use(createAppRoutes(this.container))

      this.app.listen(process.env.HOST_PORT, () => {
        console.log(`Server running: http://localhost:${process.env.HOST_PORT}`)
      })
    })
  }
}
