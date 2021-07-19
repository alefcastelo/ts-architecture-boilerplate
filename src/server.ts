import { App } from './app'

const app = new App({
  envFile: './.env'
})

app.run()
