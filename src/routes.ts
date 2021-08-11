import { container } from '@/container'
import { Request, Response, Router } from 'express'
import { HealthCheckAction } from '@/rest/action/healthcheckAction'
import { SubscriberCreateAction } from '@/rest/action/subscriber/subscriberCreateAction'
import { SubscriberRetrieveAction } from './rest/action/subscriber/subscriberRetrieveAction'
import { NextFunction } from 'express-serve-static-core'

export const createRoutes = (): Router => {
  const routes = Router()

  routes.get('/', (request: Request, response: Response) => {
    const action = container.get<HealthCheckAction>(HealthCheckAction)

    action.handler(request, response)
  })

  routes.post('/subscribers', async (request: Request, response: Response, next: NextFunction) => {
    const action = container.get<SubscriberCreateAction>(SubscriberCreateAction)

    try {
      await action.handler(request, response)
    } catch (error) {
      next(error)
    }
  })

  routes.get('/subscribers/:id', async (request: Request, response: Response, next: NextFunction) => {
    const action = container.get<SubscriberRetrieveAction>(SubscriberRetrieveAction)

    try {
      await action.handler(request, response)
    } catch (error) {
      next(error)
    }
  })

  return routes
}
