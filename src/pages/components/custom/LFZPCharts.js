// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { CardHeader, Divider, Grid, Popover } from '@mui/material'
import { width } from '@mui/system'
import { useState } from 'react'

const donutColors = {
  series1: '#fdd835',
  series2: '#00d4bd',
  series3: '#826bf8',
  series4: '#1FD5EB',
  series5: '#ffa1a1'
}

const LFZPCharts = () => {
  // ** Hook
  const theme = useTheme()

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

  const options = {
    stroke: { width: 0 },
    labels: ['Display', 'Referral', 'Search', 'Direct'],
    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter: val => `${parseInt(val, 10)}%`,
      style: {
        fontSize: '9px'
      }
    },
    legend: {
      position: 'bottom',
      fontSize: '9px',
      markers: { offsetX: -3, width: 8, height: 8, radius: 8 },
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
    <Card
      sx={{
        height: { md: '500px', lg: '510px', xl: '550px' }
      }}
    >
      <CardContent>
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',

              // alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant='h5'>Links</Typography>
              <Icon
                icon='tabler:exclamation-circle'
                aria-describedby={open && 'Links'}
                onClick={event => handleClick(event, 'Links')}
                style={{ cursor: 'pointer', marginRight: '2rem' }}
              />
              <Popover
                id='Links'
                open={open && openIndex === 'Links'}
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
                  Links represent the various categories or types of backlinks pointing to a specific webpage or
                  website, including dofollow, nofollow, contextual, image, or redirect links.
                </Typography>
              </Popover>
            </Box>
            <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',

              // alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant='h5'>Flags</Typography>
              <Icon
                icon='tabler:exclamation-circle'
                aria-describedby={open && 'Flags'}
                onClick={event => handleClick(event, 'Flags')}
                style={{ cursor: 'pointer', marginRight: '2rem' }}
              />
              <Popover
                id='Flags'
                open={open && openIndex === 'Flags'}
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
                  Flags indicate specific attributes or characteristics associated with backlinks pointing to a webpage
                  or website, such as "nofollow," "dofollow," or "sponsored," influencing their impact and credibility.
                </Typography>
              </Popover>
            </Box>
            <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
          </Grid>
        </Grid>
        <Divider variant='middle' sx={{ my: 8 }} />
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',

              // alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant='h5'>Zones</Typography>
              <Icon
                icon='tabler:exclamation-circle'
                aria-describedby={open && 'Zones'}
                onClick={event => handleClick(event, 'Zones')}
                style={{ cursor: 'pointer', marginRight: '2rem' }}
              />
              <Popover
                id='Zones'
                open={open && openIndex === 'Zones'}
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
                  Zones represent the geographic regions or countries from which backlinks originate, providing insights
                  into the global distribution and diversity of referring sources linking to a webpage or website.
                </Typography>
              </Popover>
            </Box>
            <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',

              // alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant='h5'>Platforms</Typography>
              <Icon
                icon='tabler:exclamation-circle'
                aria-describedby={open && 'Platforms'}
                onClick={event => handleClick(event, 'Platforms')}
                style={{ cursor: 'pointer', marginRight: '2rem' }}
              />
              <Popover
                id='Platforms'
                open={open && openIndex === 'Platforms'}
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
                  Platforms categorize the types of platforms or websites from which backlinks originate, such as social
                  media, forums, blogs, directories, or news sites, indicating diverse referral sources.
                </Typography>
              </Popover>
            </Box>
            <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default LFZPCharts
