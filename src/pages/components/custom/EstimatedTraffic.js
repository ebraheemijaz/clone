import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import { Popover, useMediaQuery } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const data = [
  {
    title: 'Traffic',
    img: '/images/cards/graphic-illustration-1.png',
    details: {
      'Daily Visitor': '3.4K',
      Visits: '1000',
      'Response Time': '324',
      Country: 'Italy'
    },
    popoverText: {
      'Daily Visitor':
        'Daily Visitors refer to the number of unique individuals who access the site within a 24-hour period, providing insights into its popularity and audience engagement levels.',
      Visits:
        'Visits refers to the total count of instances where users access its content within a specified period, indicating its popularity and audience reach.',
      'Response Time':
        'Response Time measures the time it takes for a webpage to load and display content after a user initiates a request, reflecting website performance and user experience.',
      Country:
        'Traffic Country refers to the primary geographic locations from which visitors access a website, indicating the dominant countries contributing to its traffic and audience demographics.'
    }
  }
]

const Slides = ({ theme }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedPopoverText, setSelectedPopoverText] = useState('')
  const [selectedTitle, setSelectedTitle] = useState('')

  const handleClick = (event, title, text) => {
    setAnchorEl(event.currentTarget)
    setSelectedPopoverText(text)
    setSelectedTitle(title)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setSelectedPopoverText('')
    setSelectedTitle('')
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      {data.map((slide, index) => {
        return (
          <Box
            key={index}
            className='keen-slider__slide'
            sx={{ p: 6, '& .MuiTypography-root': { color: 'common.white' } }}
          >
            <Typography variant='h5' sx={{ mb: 0.5 }}>
              Estimated Traffic
            </Typography>
            <Typography variant='body2' sx={{ mb: 4.5 }}>
              Month Report Showing here
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={8} sx={{ order: [2, 1] }}>
                <Typography variant='h6' sx={{ mb: 4.5 }}>
                  {slide.title}
                </Typography>
                <Grid container columnSpacing={12} rowSpacing={4.5}>
                  {Object.entries(slide.details).map(([key, value], index) => {
                    console.log(Object.entries(slide.details))

                    return (
                      <Grid item key={index} xs={12} sm={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CustomAvatar
                            color='primary'
                            variant='rounded'
                            sx={{
                              mr: 2,
                              width: 48,
                              height: 30,
                              fontWeight: 500,
                              color: 'common.white',
                              backgroundColor: 'primary.dark'
                            }}
                          >
                            {value}
                          </CustomAvatar>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography noWrap>{key}</Typography>
                            <Icon
                              icon='tabler:exclamation-circle'
                              aria-describedby={open && 'Domain-Authority'}
                              onClick={event => handleClick(event, key, slide.popoverText[key])} // Pass index to identify which item is clicked
                              style={{ cursor: 'pointer', color: '#fff', fontSize: '1.25rem', marginLeft: '0.25rem' }}
                            />
                            <Popover
                              id={key}
                              open={open} // Use popoverOpen to control the individual popover state
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                              }}
                            >
                              <Typography
                                sx={{
                                  p: 2,
                                  width: '250px',
                                  maxHeight: '350px',
                                  fontSize: '0.7rem',
                                  textAlign: 'justify'
                                }}
                              >
                                {selectedPopoverText}
                              </Typography>
                            </Popover>
                          </Box>
                        </Box>
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  order: [1, 2],
                  textAlign: 'center',
                  '& img': {
                    height: '160px !important',
                    maxWidth: 'none !important',
                    [theme.breakpoints.up('sm')]: {
                      top: '50%',
                      position: 'absolute',
                      right: theme.spacing(6),
                      transform: 'translateY(-50%)'
                    }
                  }
                }}
              >
                <img src={slide.img} alt={slide.title} />
              </Grid>
            </Grid>
          </Box>
        )
      })}
    </>
  )
}

const EstimatedTraffic = () => {
  // ** Hook
  const theme = useTheme()
  const isLargeScreenOrAbove = useMediaQuery(theme => theme.breakpoints.up('lg'))

  return (
    <Card
      sx={{
        position: 'relative',
        backgroundColor: 'primary.main',
        height: isLargeScreenOrAbove ? '350px' : 'auto',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Slides theme={theme} />
    </Card>
  )
}

export default EstimatedTraffic
