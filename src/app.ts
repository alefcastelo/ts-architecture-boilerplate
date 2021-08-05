import express, { Express } from 'express'
import dotenv from 'dotenv'
import { createRoutes } from './routes'
import { createDatabaseConnection } from './database'

type AppConfig = {
  envFile: string
}

export class App {
  protected app: Express

  constructor(protected config: AppConfig) {
    this.app = express()
  }

  public async build (): Promise<void> {
    dotenv.config({ path: this?.config?.envFile })

    createDatabaseConnection()

    this.app.use(express.json())
    this.app.use(createRoutes())
  }

  public run (): void {
    this.build().then(() => {
      this.app.listen(process.env.HOST_PORT, () => {
        console.log(`Server running: http://localhost:${process.env.HOST_PORT}`)
      })
    })
  }
}
