import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const data = [
  {
    title: 'Traffic',
    img: '/images/cards/graphic-illustration-1.png',
    details: {
      'Daily Visitor': '3.4K',
      Visits: '1000',
      'Response Time': '324',
      Country: 'Italy'
    }
  }
]

const Slides = ({ theme }) => {
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
                <Grid container spacing={4.5}>
                  {Object.keys(slide.details).map((key, index) => {
                    return (
                      <Grid item key={index} xs={6}>
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
                            {slide.details[key]}
                          </CustomAvatar>
                          <Typography noWrap>{key}</Typography>
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

  return (
    <Card
      sx={{
        position: 'relative',
        backgroundColor: 'primary.main',
        height: '350px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Slides theme={theme} />
    </Card>
  )
}

export default EstimatedTraffic
