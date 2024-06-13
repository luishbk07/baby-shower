import { useState } from 'react'
import { Box, Container, Link, Typography, useTheme } from '@mui/material'
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

  const theme = useTheme()

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
        paddingTop: '10rem',
        color: '#63767D',
        [theme.breakpoints.down('md')]: {
          paddingTop: '0.5rem'
        }
      }}>
        <Box
          component='span'
          sx={{
            fontSize: '7rem',
            [theme.breakpoints.down('md')]: {
              fontSize: '5rem'
            }
          }}
        >
          Oh B
        </Box>
        <Box
          component='img'
          src={Elephant}
          sx={{
            height: '8rem',
            width: '8rem',
            [theme.breakpoints.down('md')]: {
              height: '4rem',
              width: '4rem'
            }
          }}
        >
        </Box>
        <Box
          component='span'
          sx={{
            fontSize: '7rem',
            [theme.breakpoints.down('md')]: {
              fontSize: '5rem'
            }
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
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '25px',
        width: 'fit-content',
        padding: '2rem',
        [theme.breakpoints.down('md')]: {
          padding: '1rem',
          marginTop: '3rem',
          gap: '.5rem'
        }
      }}>
        <Typography
          variant='span'
          sx={{
            fontSize: '5rem',
            [theme.breakpoints.down('md')]: {
              fontSize: '2.5rem'
            }
          }}
        >
          Simon's Baby Shower
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.5rem'
            }
          }}
        >
          ¡Ven a celebrar con nosotros!
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            fontWeight: '700',
            margin: '1rem 0',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.5rem'
            }
          }}
        >
          4 / Ago / 2024
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.5rem'
            }
          }}
        >
          <CardGiftcardIcon sx={{
            fontSize: '2.5rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '2rem'
            }
          }} />
          <Link
            href='https://lanoviadevilla.com/gift_registries/2275?t=34266d23bbb3184a5069e47bf1bdf7a8c959bbf0'
            target='_blank'
            sx={{
              color: '#63767D',
              textDecoration: 'underline #63767D',
              ':hover': {
                color: '#DECA8E',
                textDecoration: 'underline #DECA8E'
              }
            }}
          >
            Ver Lista de Regalos aquí
          </Link>
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              display: 'none'
            }
          }}
        >
          <CreditCardIcon sx={{
            fontSize: '2.5rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '2rem'
            }
          }} />
          O Si prefieres regalar en efectivo: Banreservas - Ahorro - No.: {account}
          <CopyToClipboard text={account} onCopy={handleCopy}>
            <ContentCopyIcon sx={{
              color: '#63767D',
              cursor: 'pointer',
              [theme.breakpoints.down('md')]: {
                fontSize: '2rem'
              }
            }}
            />
          </CopyToClipboard>
          {copied ? <Typography sx={{ color: 'green' }}>Copied!</Typography> : null}
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#63767D',
            [theme.breakpoints.up('md')]: {
              display: 'none'
            }
          }}
        >
          <CreditCardIcon sx={{
            fontSize: '2.5rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '2rem'
            }
          }} />
          O Si prefieres regalar en efectivo:
        </Typography>
        <Typography
          variant='span'
          sx={{
            fontSize: '1.2rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#63767D',
            [theme.breakpoints.up('md')]: {
              display: 'none'
            }
          }}
        >
          Banreservas - Ahorro - No.: {account}
          <CopyToClipboard text={account} onCopy={handleCopy}>
            <ContentCopyIcon sx={{
              color: '#63767D',
              cursor: 'pointer',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.5rem'
              }
            }}
            />
          </CopyToClipboard>
        </Typography>
        {copied ? <Typography sx={{ color: 'green' }}>Copied!</Typography> : null}
        <Typography
          variant='span'
          sx={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '1rem 0 0 0',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.5rem'
            }
          }}>
          <LocationOnIcon sx={{
            fontSize: '2.5rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '2rem'
            }
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
              color: '#63767D',
              margin: '0 0 1rem 0',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.5rem'
              }
            }}
          >
            <Link
              href='https://maps.app.goo.gl/ARwRiqgdQc4D7rYw6'
              target='_blank'
              sx={{
                color: '#63767D',
                textDecoration: 'underline #63767D',
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
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.5rem'
            }
          }}>
          <ChildFriendlyIcon sx={{
            fontSize: '2.5rem',
            color: '#63767D',
            [theme.breakpoints.down('md')]: {
              fontSize: '2rem'
            }
          }} />
          Te esperamos!!!
        </Typography>
      </Container>
    </Box>
  )
}

export default OhBaby