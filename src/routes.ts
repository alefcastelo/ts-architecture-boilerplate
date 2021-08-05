import { Request, Response, Router } from 'express'
import { container } from './container'
import { HealthCheckAction } from './rest/action/healthcheck.action'
import { SubscriberListAction } from './rest/action/subscriber/subscriberList.action'

export const createRoutes = (): Router => {
  const routes = Router()

  routes.get('/', (req: Request, res: Response) => {
    const action = container.get<HealthCheckAction>(HealthCheckAction)

    action.handler(req, res)
  })

  routes.get('/subscribers', (req: Request, res: Response) => {
    const action = container.get<SubscriberListAction>(SubscriberListAction)

    action.handler(req, res)
  })

  return routes
}
