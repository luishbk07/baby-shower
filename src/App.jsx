import { Box } from '@mui/material'
import CloudsBackground from './assets/clouds-background.jpg'
import OhBaby from './components/OhBaby/OhBaby'

function App() {

  return (
    <>
      <Box sx={{
        height: '100rem',
        width: '100%',
        margin: 0,
        backgroundImage: `url(${CloudsBackground})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}>
        <OhBaby />
      </Box>
    </>
  )
}

export default App
