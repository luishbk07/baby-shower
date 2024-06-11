import { Box, Container, Link, Typography } from '@mui/material'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'

import Elephant from '../../assets/elefantito.png'

const OhBaby = () => {
  return (
    <Box>
      <Container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10rem'
      }}>
        <Box
          component='span'
          sx={{
            fontSize: '7rem'
          }}
        >
          Oh B
        </Box>
        <Box
          component='img'
          src={Elephant}
          sx={{
            height: '8rem',
            width: '8rem'
          }}
        >
        </Box>
        <Box
          component='span'
          sx={{
            fontSize: '7rem'
          }}
        >
          by!
        </Box>
      </Container>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '3rem'
      }}>
        <Typography
          variant='span'
          sx={{
            fontSize: '5rem'
          }}
        >
          Simon's Baby Shower
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem'
          }}
        >
          ¡Ven a celebrar con nosotros!
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            fontWeight: '700'
          }}
        >
          4/Ago/2024
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#DAB89D'
          }}
        >
          <CardGiftcardIcon sx={{
            fontSize: '2.5rem'
          }} />
          <Link
            href='https://lanoviadevilla.com/gift_registries/2275?t=34266d23bbb3184a5069e47bf1bdf7a8c959bbf0'
            target='_blank'
            sx={{
              color: '#DAB89D',
              textDecoration: 'underline #DAB89D',
              ':hover': {
                color: '#DECA8E',
                textDecoration: 'underline #DECA8E'
              }
            }}
          >
            Lista de regalos
          </Link>
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#DAB89D'
          }}
        >
          <CreditCardIcon sx={{
            fontSize: '2.5rem'
          }} />
          Si prefieres efectivo: #12313211213
        </Typography>
        <Typography sx={{
          fontSize: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <LocationOnIcon sx={{
            fontSize: '2.5rem'
          }} />
          Carretera Mella Km. #22
        </Typography>
        <Typography sx={{
          fontSize: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <ChildFriendlyIcon sx={{
            fontSize: '2.5rem'
          }} />
          Te esperamos!!!
        </Typography>
      </Container>
    </Box>
  )
}

export default OhBaby