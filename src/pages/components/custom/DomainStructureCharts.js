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

const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false })

const DomainStructureCharts = () => {
  return (
    <Card>
      <CardHeader title='Domain Reputation' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ cursor: 'pointer' }}>
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
