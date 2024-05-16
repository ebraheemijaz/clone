import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'

import { useTheme } from '@mui/material/styles'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Hook Import
import UseBgColor from 'src/@core/hooks/useBgColor'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

function ReturnOfEquity() {
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
    tooltip: { enabled: true },
    dataLabels: { enabled: false },
    colors: [
      bgColors.warningLight.backgroundColor,
      bgColors.warningLight.backgroundColor,
      bgColors.warningLight.backgroundColor,
      bgColors.warningLight.backgroundColor,
      bgColors.warningLight.backgroundColor
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
      categories: ['0', '100', '200', '300'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on'
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
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
              Return Of Equity (%)
            </Typography>
            <Icon icon='tabler:exclamation-circle' fontSize={28} style={{ cursor: 'pointer' }} />
          </div>
        }
      />
      <CardContent>
        <ReactApexcharts
          type='bar'
          height={213}
          options={options}
          series={[{ name: 'Return Of Equity', data: [100, 210, 115, 120, 300] }]}
        />
      </CardContent>
    </Card>
  )
}

export default ReturnOfEquity
