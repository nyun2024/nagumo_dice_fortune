import { createRoot } from 'react-dom/client'
import './index.css'
import RollingDiceNagumo from '@pages/fortune/RollingDiceNagumo'

createRoot(document.getElementById('root')).render(
  <>
    <RollingDiceNagumo />
  </>,
)
