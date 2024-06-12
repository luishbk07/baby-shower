import { useState } from 'react'
import { Box, Container, Link, Typography } from '@mui/material'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Elephant from '../../assets/elefantito.png'


const OhBaby = () => {
  const [account, setAccount] = useState('3200536532')
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
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
        marginTop: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '25px',
        width: 'fit-content',
        padding: '2rem'
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
            fontWeight: '700',
            margin: '1rem 0'
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
            color: '#DFF1FB'
          }}
        >
          <CardGiftcardIcon sx={{
            fontSize: '2.5rem',
            color: '#E1CA8F'
          }} />
          <Link
            href='https://lanoviadevilla.com/gift_registries/2275?t=34266d23bbb3184a5069e47bf1bdf7a8c959bbf0'
            target='_blank'
            sx={{
              color: '#DFF1FB',
              textDecoration: 'underline #DFF1FB',
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
            color: '#DFF1FB'
          }}
        >
          <CreditCardIcon sx={{
            fontSize: '2.5rem',
            color: '#E1CA8F'
          }} />
          Si prefieres efectivo: Banreservas - Ahorro - No.: {account}
          <CopyToClipboard text={account} onCopy={handleCopy}>
            <ContentCopyIcon sx={{
              color: '#E1CA8F',
              cursor: 'pointer'
            }}
            />
          </CopyToClipboard>
          {copied ? <Typography sx={{ color: 'green' }}>Copied!</Typography> : null}
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '1rem 0 0 0'
          }}>
          <LocationOnIcon sx={{
            fontSize: '2.5rem'
          }} />
          Carretera Mella Km. #22
        </Typography>
        <Box>
          <Typography
            variant='span'
            sx={{
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#DFF1FB',
              margin: '0 0 1rem 0'
            }}
          >
            <Link
              href='https://maps.app.goo.gl/ARwRiqgdQc4D7rYw6'
              target='_blank'
              sx={{
                color: '#DFF1FB',
                textDecoration: 'underline #DFF1FB',
                ':hover': {
                  color: '#DECA8E',
                  textDecoration: 'underline #DECA8E'
                }
              }}
            >
              Ver ubicación aquí
            </Link>
          </Typography>
        </Box>
        <Typography
          variant='span'
          sx={{
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