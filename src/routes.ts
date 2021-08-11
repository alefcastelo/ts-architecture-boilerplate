import { container } from '@/container'
import { Request, Response, Router } from 'express'
import { HealthCheckAction } from '@/rest/action/healthcheckAction'
import { SubscriberCreateAction } from '@/rest/action/subscriber/subscriberCreateAction'

export const createRoutes = (): Router => {
  const routes = Router()

  routes.get('/', (req: Request, res: Response) => {
    const action = container.get<HealthCheckAction>(HealthCheckAction)

    action.handler(req, res)
  })

  routes.post('/subscribers', (req: Request, res: Response) => {
    const action = container.get<SubscriberCreateAction>(SubscriberCreateAction)

    action.handler(req, res)
  })

  return routes
}
