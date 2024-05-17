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
import { CardHeader, Divider, Grid } from '@mui/material'
import { width } from '@mui/system'

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
            <Typography variant='h5'>Links</Typography>
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
            <Typography variant='h5'>Flags</Typography>
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
            <Typography variant='h5'>Zones</Typography>
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
            <Typography variant='h5'>Platforms</Typography>
            <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default LFZPCharts
