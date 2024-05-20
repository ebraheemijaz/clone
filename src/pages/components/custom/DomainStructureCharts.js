import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import dynamic from 'next/dynamic'
import { Popover, Popper } from '@mui/material'
import Paper from 'src/@core/theme/overrides/paper'

const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false })

const DomainStructureCharts = () => {
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
      <CardHeader title='Domain Reputation' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ cursor: 'pointer' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardHeader title='Alexa Rank' />
                <Icon
                  icon='tabler:exclamation-circle'
                  aria-describedby={open && 'alexa-rank'}
                  onClick={event => handleClick(event, 'alexa-rank')}
                  style={{ cursor: 'pointer', marginRight: '2rem' }}
                />
                <Popover
                  id='alexa-rank'
                  open={open && openIndex === 'alexa-rank'}
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
                  <Typography sx={{ p: 2, width: '250px', maxHeight: '350px' }}>
                    Alexa Rank is a metric provided by Alexa Internet that ranks websites based on their popularity
                    relative to other sites on the internet, using a combination of traffic data and user engagement
                    metrics.
                  </Typography>
                </Popover>
              </Box>
              <CardContent>
                <GaugeComponent
                  id='gauge-component4'
                  type='semicircle'
                  arc={{
                    nbSubArcs: 4,
                    gradient: true,
                    width: 0.15,
                    padding: 0,
                    colorArray: [
                      '#7FFF7F', // Light green
                      '#ADFF2F', // Light green-yellow
                      '#FFD700', // Gold
                      '#CD5C5C', // Indian red
                      '#8B0000' // Dark red
                    ],
                    subArcs: [
                      {
                        limit: 20,
                        showTick: true
                      },
                      {
                        limit: 40,
                        showTick: true
                      },
                      {
                        limit: 60,
                        showTick: true
                      },
                      {
                        limit: 80,
                        showTick: true
                      }
                    ]
                  }}
                  value={57}
                  pointer={{ type: 'arrow', elastic: true }}
                  labels={{
                    valueLabel: {
                      style: {
                        fontSize: '35rem',
                        fill: '#000', // Black color
                        textShadow: 'none' // No text shadow
                      },
                      hide: false // Show the value label
                    },
                    tickLabels: {
                      style: {
                        fontSize: '10rem',
                        fill: '#000', // Black color
                        textShadow: 'none' // No text shadow
                      },
                      ticks: [
                        {
                          value: 20
                        },
                        {
                          value: 40
                        },
                        {
                          value: 60
                        },
                        {
                          value: 80
                        }
                      ],
                      hide: false // Show the tick labels
                    }
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ cursor: 'pointer' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardHeader title='One Page Rank' />
                <Icon
                  icon='tabler:exclamation-circle'
                  aria-describedby={open && 'one-page-rank'}
                  onClick={event => handleClick(event, 'one-page-rank')}
                  style={{ cursor: 'pointer', marginRight: '2rem' }}
                />
                <Popover
                  id='one-page-rank'
                  open={open && openIndex === 'one-page-rank'}
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
                  <Typography sx={{ p: 2, width: '250px', maxHeight: '350px' }}>
                    Open Page Rank is a free Google PageRank replacement based on the Open Source data consisting of
                    about 3 Bn. Web pages. It is a good measurement of a website’s backlink strength.
                  </Typography>
                </Popover>
              </Box>
              <CardContent>
                <GaugeComponent
                  id='gauge-component5'
                  type='semicircle'
                  arc={{
                    nbSubArcs: 4,
                    gradient: true,
                    width: 0.15,
                    padding: 0,
                    colorArray: [
                      '#7FFF7F', // Light green
                      '#ADFF2F', // Light green-yellow
                      '#FFD700', // Gold
                      '#CD5C5C', // Indian red
                      '#8B0000' // Dark red
                    ],
                    subArcs: [
                      {
                        limit: 20,
                        showTick: true
                      },
                      {
                        limit: 40,
                        showTick: true
                      },
                      {
                        limit: 60,
                        showTick: true
                      },
                      {
                        limit: 80,
                        showTick: true
                      }
                    ]
                  }}
                  value={80}
                  pointer={{ type: 'arrow', elastic: true }}
                  labels={{
                    valueLabel: {
                      style: {
                        fontSize: '35rem',
                        fill: '#000', // Black color
                        textShadow: 'none' // No text shadow
                      },
                      hide: false // Show the value label
                    },
                    tickLabels: {
                      style: {
                        fontSize: '10rem',
                        fill: '#000', // Black color
                        textShadow: 'none' // No text shadow
                      },
                      ticks: [
                        {
                          value: 20
                        },
                        {
                          value: 40
                        },
                        {
                          value: 60
                        },
                        {
                          value: 80
                        }
                      ],
                      hide: false // Show the tick labels
                    }
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ cursor: 'not-allowed' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardHeader title='Majestic Rank' />
                <Icon
                  icon='tabler:exclamation-circle'
                  aria-describedby={open && 'majestic-rank'}
                  onClick={event => handleClick(event, 'majestic-rank')}
                  style={{ cursor: 'pointer', marginRight: '2rem' }}
                />
                <Popover
                  id='majestic-rank'
                  open={open && openIndex === 'majestic-rank'}
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
                  <Typography sx={{ p: 2, width: '250px', maxHeight: '350px' }}>
                    Majestic Rank is a metric provided by Majestic SEO that measures the relative authority or
                    popularity of a website compared to other websites on the internet based on backlink data.
                  </Typography>
                </Popover>
              </Box>
              <CardContent>
                <GaugeComponent
                  id='gauge-component4'
                  type='semicircle'
                  arc={{
                    nbSubArcs: 4,
                    gradient: true,
                    width: 0.15,
                    padding: 0,
                    colorArray: [
                      '#A9A9A9' // Dark red
                    ],
                    subArcs: [
                      {
                        limit: 20,
                        showTick: true
                      },
                      {
                        limit: 40,
                        showTick: true
                      },
                      {
                        limit: 60,
                        showTick: true
                      },
                      {
                        limit: 80,
                        showTick: true
                      }
                    ]
                  }}
                  value={0}
                  pointer={{ type: 'arrow', elastic: true }}
                  labels={{
                    valueLabel: {
                      style: {
                        fontSize: '35rem',
                        fill: '#A9A9A9', // Black color
                        textShadow: 'none' // No text shadow
                      },
                      hide: false // Show the value label
                    },
                    tickLabels: {
                      style: {
                        fontSize: '10rem',
                        fill: '#000', // Black color
                        textShadow: 'none' // No text shadow
                      },
                      ticks: [
                        {
                          value: 20
                        },
                        {
                          value: 40
                        },
                        {
                          value: 60
                        },
                        {
                          value: 80
                        }
                      ],
                      hide: false // Show the tick labels
                    }
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DomainStructureCharts
