import { createHashRouter } from 'react-router-dom'
import Home from '@pages/home/Home'
import RollingDiceNagumo from '@pages/fortune/RollingDiceNagumo'

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/RollingDiceNagumo',
      element: <RollingDiceNagumo />,
    },
  ],
  { basename: '/' },
)

export default router
