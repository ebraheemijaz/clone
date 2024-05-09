import React from 'react'

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
import { CardHeader, Grid } from '@mui/material'

const series = [32, 41, 41, 70]

const GoodChart = () => {
    // ** Hook
    const theme = useTheme()

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
                            offsetY: 25,
                            color: theme.palette.text.secondary,
                            fontFamily: theme.typography.fontFamily
                        },
                        value: {
                            offsetY: -15,
                            fontWeight: 500,
                            formatter: val => `${val}`,
                            color: theme.palette.text.primary,
                            fontFamily: theme.typography.fontFamily,
                            fontSize: theme.typography.h5.fontSize
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            color: theme.palette.text.secondary,
                            fontFamily: theme.typography.fontFamily,
                            fontSize: theme.typography.h6.fontSize
                        }
                    }
                }
            }
        }
    }

    return (
        <Card >
            <CardContent>
                <Box sx={{ gap: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <Typography variant='h5' sx={{ mb: 0.75 }}>
                                Domain Authority
                            </Typography>
                            <Typography variant='body2'>Monthly Report</Typography>
                        </div>
                        <div>
                            <Typography variant='h3' >
                                Good
                            </Typography>
                        </div>
                    </Box>
                    <ReactApexcharts type='donut' width={100} height={140} series={series} options={options} />
                </Box>
            </CardContent>
        </Card>
    )
}

const BadChart = () => {
    // ** Hook
    const theme = useTheme()

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
                            offsetY: 25,
                            color: theme.palette.text.secondary,
                            fontFamily: theme.typography.fontFamily
                        },
                        value: {
                            offsetY: -15,
                            fontWeight: 500,
                            formatter: val => `${val}`,
                            color: theme.palette.text.primary,
                            fontFamily: theme.typography.fontFamily,
                            fontSize: theme.typography.h5.fontSize
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            color: theme.palette.text.secondary,
                            fontFamily: theme.typography.fontFamily,
                            fontSize: theme.typography.h6.fontSize
                        }
                    }
                }
            }
        }
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Box sx={{ gap: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                        <div>
                            <Typography variant='h5' sx={{ mb: 0.75 }}>
                                Spamming Score
                            </Typography>
                            <Typography variant='body2'>Monthly Report</Typography>
                        </div>
                        <div>
                            <Typography variant='h3' >
                                Bad
                            </Typography>
                        </div>
                    </Box>
                    <ReactApexcharts type='donut' width={100} height={140} series={series} options={options} />
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
        <Box>
            <ReactApexcharts type='donut' height={250} options={options} series={[85, 16, 50, 50]} />
        </Box>
    )
}


const TrafficSources = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' sx={{ mb: 0.75 }}>
                    Traffic Sources
                </Typography>
                <Grid container spacing={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={12} lg={5}>
                        <MainCard />
                    </Grid>
                    <Grid item xs={12} md={12} lg={7}>
                        <Grid container spacing={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Grid item xs={12} md={12} lg={12} >
                                <GoodChart />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <BadChart />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TrafficSources