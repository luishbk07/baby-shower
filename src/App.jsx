import { Box } from '@mui/material'
import CloudsBackground from './assets/clouds-background 2.jpg'
import OhBaby from './components/OhBaby/OhBaby'

function App() {

  return (
    <>
      <Box sx={{
        height: '100vh',
        width: '100%',
        margin: 0,
        backgroundImage: `url(${CloudsBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <OhBaby />
      </Box>
    </>
  )
}

export default App
