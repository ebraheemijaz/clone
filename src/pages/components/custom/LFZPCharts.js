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
        },
    }

    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                        <Typography variant='h5'>Links</Typography>
                        <ReactApexcharts type='donut' height={195} options={options} series={[85, 16, 50, 50]} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                        <Typography variant='h5'>Flags</Typography>
                        <ReactApexcharts type='donut' height={195} options={options} series={[85, 16, 50, 50]} />
                    </Box>
                </Box>
                <Divider variant='middle' sx={{ my: 8 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                        <Typography variant='h5'>Zones</Typography>
                        <ReactApexcharts type='donut' height={195} options={options} series={[85, 16, 50, 50]} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                        <Typography variant='h5'>Platforms</Typography>
                        <ReactApexcharts type='donut' height={195} options={options} series={[85, 16, 50, 50]} />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default LFZPCharts