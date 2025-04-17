import { createHashRouter } from 'react-router-dom'
import Home from '@pages/home/Home'
import RollingDiceNagumo from '@pages/fortune/RollingDiceNagumo'
import ResultFortune from '@pages/result/ResultFortune'

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
    {
      path: '/ResultFortune',
      element: <ResultFortune />,
    },
  ],
  { basename: '/' },
)

export default router
