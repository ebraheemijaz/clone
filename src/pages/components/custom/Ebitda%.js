import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'

import { useTheme } from '@mui/material/styles'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Hook Import
import UseBgColor from 'src/@core/hooks/useBgColor'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

function Ebitda() {

    // ** Hooks
    const theme = useTheme()
    const bgColors = UseBgColor()

    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                distributed: true,
                columnWidth: '52%',
                endingShape: 'rounded',
                startingShape: 'rounded'
            }
        },
        legend: { show: false },
        tooltip: { enabled: true },
        dataLabels: { enabled: false },
        colors: [
            bgColors.warningLight.backgroundColor,
            bgColors.warningLight.backgroundColor,

            // hexToRGBA(theme.palette.success.main, 1),
            bgColors.warningLight.backgroundColor,
            bgColors.warningLight.backgroundColor,
        ],
        states: {
            hover: {
                filter: { type: 'none' }
            },
            active: {
                filter: { type: 'none' }
            }
        },
        xaxis: {
            categories: ['0', '2018', '2019', '2020', '2021', '2022'],
            axisTicks: { show: true },
            axisBorder: { show: true },
            tickPlacement: 'on',
            labels: {
                style: {
                    colors: theme.palette.text.disabled,
                    fontFamily: theme.typography.fontFamily,
                    fontSize: theme.typography.body2.fontSize
                }
            }
        },
        yaxis: {
            categories: ['0', '5', '10', '15'],
            axisTicks: { show: false },
            axisBorder: { show: false },
            tickPlacement: 'on',
        },
        grid: {
            show: false,
            padding: {
                left: -14,
                right: -16,
                bottom: -14
            }
        },
        responsive: [
            {
                breakpoint: 1300,
                options: {
                    chart: { height: 360 }
                }
            },
            {
                breakpoint: theme.breakpoints.values.lg,
                options: {
                    chart: { height: 260 }
                }
            },
            {
                breakpoint: theme.breakpoints.values.md,
                options: {
                    plotOptions: {
                        bar: { columnWidth: '40%' }
                    }
                }
            }
        ]
    }

    return (
        <Card>
            <CardHeader
                title={
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'medium' }}>
                            Ebitda (%)
                        </Typography>
                        <Icon icon='tabler:exclamation-circle' fontSize={28} style={{ cursor: 'pointer' }} />
                    </div>}
            />
            <CardContent sx={{ margin: 4 }}>
                <ReactApexcharts type='bar' height={213} options={options} series={[{ data: [2, 4, 7, 9, 10] }]} />
            </CardContent>
        </Card>
    )
}

export default Ebitda