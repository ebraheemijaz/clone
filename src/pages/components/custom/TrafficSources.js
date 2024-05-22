import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { CardHeader, Grid, Popover } from '@mui/material'

const GoodChart = () => {
  // ** Hook
  const theme = useTheme()
  const series = [32, 41, 41, 70]

  const options = {
    colors: [
      theme.palette.success.main,
      hexToRGBA(theme.palette.success.main, 0.7),
      hexToRGBA(theme.palette.success.main, 0.5),
      hexToRGBA(theme.palette.success.main, 0.16)
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: -22,
        bottom: -18
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              offsetY: 22,
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -17,
              fontWeight: 500,
              formatter: val => `${val}`,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h2.fontSize
            },
            total: {
              show: true,
              label: 'Total',
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h5.fontSize
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { width: 200, height: 249 }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { width: 150, height: 199 }
        }
      }
    ]
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (event, id) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setOpenIndex(id)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenIndex(null)
  }
  const open = Boolean(anchorEl)

  return (
    <Card>
      <CardContent>
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
          <Box sx={{ gap: 1.75, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Typography variant='h6'>
                Domain Authority
                <Icon
                  icon='tabler:exclamation-circle'
                  aria-describedby={open && 'Domain-Authority'}
                  onClick={event => handleClick(event, 'Domain-Authority')}
                  style={{ cursor: 'pointer', fontSize: '1rem', paddingLeft: 2 }}
                />
                <Popover
                  id='Domain-Authority'
                  open={open && openIndex === 'Domain-Authority'}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  placement='top-start'
                  modifiers={[
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 10]
                      }
                    }
                  ]}
                >
                  <Typography
                    sx={{ p: 2, width: '250px', maxHeight: '350px', fontSize: '0.7rem', textAlign: 'justify' }}
                  >
                    Domain Authority is a metric developed by Moz that predicts a website's ranking potential on search
                    engine results pages based on various factors like link profile and quality. In general, the closer
                    the indicator is to 100, the more likely the domain has a good domain authority.
                  </Typography>
                </Popover>
              </Typography>
              <Typography variant='body2'>Monthly Report</Typography>
            </div>
            <div>
              <Typography variant='h4'>Good</Typography>
            </div>
          </Box>
          <ReactApexcharts type='donut' width={150} height={165} series={series} options={options} />
        </Box>
      </CardContent>
    </Card>
  )
}

const BadChart = () => {
  // ** Hook
  const theme = useTheme()
  const series = [32, 41, 41, 70]

  const options = {
    colors: [
      theme.palette.error.main,
      hexToRGBA(theme.palette.error.main, 0.7),
      hexToRGBA(theme.palette.error.main, 0.5),
      hexToRGBA(theme.palette.error.main, 0.16)
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: -22,
        bottom: -18
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              offsetY: 22,
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -17,
              fontWeight: 500,
              formatter: val => `${val}`,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h2.fontSize
            },
            total: {
              show: true,
              label: 'Total',
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h5.fontSize
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { width: 200, height: 249 }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { width: 150, height: 199 }
        }
      }
    ]
  }
  const [anchorEl, setAnchorEl] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (event, id) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setOpenIndex(id)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenIndex(null)
  }
  const open = Boolean(anchorEl)

  return (
    <Card>
      <CardContent>
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
          <Box sx={{ gap: 1.75, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Typography variant='h6'>
                Spam Score
                <Icon
                  icon='tabler:exclamation-circle'
                  aria-describedby={open && 'Spam-Score'}
                  onClick={event => handleClick(event, 'Spam-Score')}
                  style={{ cursor: 'pointer', fontSize: '1rem', paddingLeft: 2 }}
                />
                <Popover
                  id='Spam-Score'
                  open={open && openIndex === 'Spam-Score'}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  placement='top-start'
                  modifiers={[
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 10]
                      }
                    }
                  ]}
                >
                  <Typography
                    sx={{ p: 2, width: '250px', maxHeight: '350px', fontSize: '0.7rem', textAlign: 'justify' }}
                  >
                    Spam score is a metric developed to evaluate the likelihood of a website being penalized or
                    considered spammy by search engines, based on factors like backlink quality.
                  </Typography>
                </Popover>
              </Typography>
              <Typography variant='body2'>Monthly Report</Typography>
            </div>
            <div>
              <Typography variant='h4'>Bad</Typography>
            </div>
          </Box>
          <ReactApexcharts type='donut' width={150} height={165} series={series} options={options} />
        </Box>
      </CardContent>
    </Card>
  )
}

const donutColors = {
  series1: '#fdd835',
  series2: '#00d4bd',
  series3: '#826bf8',
  series4: '#1FD5EB',
  series5: '#ffa1a1'
}

const MainCard = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    stroke: { width: 0 },
    labels: ['Display', 'Referral', 'Search', 'Direct'],
    colors: ['#FF9F43', '#28C76F', '#00BAD1', '#7367F0'],
    dataLabels: {
      enabled: true,
      formatter: val => `${parseInt(val, 10)}%`
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: -3 },
      labels: { colors: theme.palette.text.secondary },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '0.75rem'
            },
            value: {
              fontSize: '0.75rem',
              color: theme.palette.text.secondary,
              formatter: val => `${parseInt(val, 10)}`
            },
            total: {
              show: false,
              fontSize: '0.75rem',
              label: 'Display',
              formatter: val => `${parseInt(val, 10)}`,
              color: theme.palette.text.primary
            }
          }
        }
      }
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
    </Box>
  )
}

const TrafficSources = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget)
    setOpenIndex(index) // Set the index of the clicked item
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenIndex(null) // Reset the openIndex when closing the popover
  }

  const open = Boolean(anchorEl)

  return (
    <Card
      sx={{
        height: { lg: '350px' }
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          height: '100%',
          padding: '1rem'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 4 }}>
          <Typography variant='h5' sx={{ mb: 0.75 }}>
            Traffic Sources
          </Typography>
          <Icon
            icon='tabler:exclamation-circle'
            aria-describedby={open && 'Traffic-Sources'}
            onClick={event => handleClick(event, 'Traffic-Sources')}
            style={{ cursor: 'pointer', marginRight: '2rem' }}
          />
          <Popover
            id='Traffic-Sources'
            open={open && openIndex === 'Traffic-Sources'}
            anchorEl={anchorEl}
            onClose={handleClose}
            placement='top-start'
            modifiers={[
              {
                name: 'offset',
                options: {
                  offset: [0, 10]
                }
              }
            ]}
          >
            <Typography sx={{ p: 2, width: '250px', maxHeight: '350px', fontSize: '0.7rem', textAlign: 'justify' }}>
              Traffic Source refer to the proportions of website traffic originating from direct visits, search engines,
              display ads, referrals, social media, and email campaigns.
            </Typography>
          </Popover>
        </Box>
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            paddingBottom: '1rem',
            flexDirection: {
              xs: 'column', // Change to column for small screens (xs breakpoint)
              lg: 'row' // Change to row for large screens (lg breakpoint)
            }
          }}
        >
          <div
            style={{
              // backgroundColor: 'green',
              flex: 4,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <MainCard />
          </div>
          <div
            style={{
              flex: 6,
              width: '100%',
              height: '100%',

              // backgroundColor: 'wheat',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 5,
              padding: '0.25rem'
            }}
          >
            <GoodChart />
            <BadChart />
            {/* <div style={{ flex: 1 }}>
              <GoodChart />
            </div>
            <div style={{ flex: 1 }}>
              <GoodChart />
            </div> */}
          </div>
        </Box>
        {/* 
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={5}>
            
          </Grid>
          <Grid item xs={12} md={12} lg={7}>
            <Grid
              container
              spacing={2}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}
            >
              <Grid item xs={12} md={12} lg={12}>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </CardContent>
    </Card>
  )
}

export default TrafficSources
