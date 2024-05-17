import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'

import { useTheme } from '@mui/material/styles'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Hook Import
import UseBgColor from 'src/@core/hooks/useBgColor'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

function FinancialHealth() {
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
        columnWidth: '50%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      bgColors.primaryLight.backgroundColor,
      bgColors.primaryLight.backgroundColor,
      bgColors.primaryLight.backgroundColor,
      bgColors.primaryLight.backgroundColor,

      // hexToRGBA(theme.palette.primary.main),
      bgColors.primaryLight.backgroundColor,
      bgColors.primaryLight.backgroundColor
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
      categories: ['2018', '2019', '2020', '2021', '2022'],
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
      categories: ['2.5', '3', '3.5', '4', '4.5', '5'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on'
    },
    grid: {
      show: false
      // padding: {
      //   left: 5,
      //   right: 0,
      //   bottom: -14
      // }
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: { height: 265 }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { height: 'auto' }
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
            <Typography variant='h4' sx={{ fontWeight: 'medium' }}>
              Financial Health
            </Typography>
            <Icon icon='tabler:exclamation-circle' fontSize={28} style={{ cursor: 'pointer' }} />
          </div>
        }
      />
      <CardContent>
        <ReactApexcharts type='bar' height={265} options={options} series={[{ data: [3.7, 4.4, 3.8, 4.1, 4.8] }]} />
      </CardContent>
    </Card>
  )
}

export default FinancialHealth
