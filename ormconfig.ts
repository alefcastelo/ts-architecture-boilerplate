import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_POST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV === 'production',
  logging: false,
  entities: [
    path.join(__dirname, 'src/**/entity/*.ts')
  ],
  migrations: [
    path.join(__dirname, 'migrations/*.ts')
  ],
  cli: {
    migrationsDir: 'migrations'
  }
}
