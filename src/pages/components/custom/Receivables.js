import { Card, CardContent, CardHeader, Popover, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Icon from 'src/@core/components/icon'

import { useTheme } from '@mui/material/styles'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Hook Import
import UseBgColor from 'src/@core/hooks/useBgColor'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { useSettings } from 'src/@core/hooks/useSettings'
import { LoaderIcon } from 'react-hot-toast'

function Receivables() {
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
      bgColors.infoLight.backgroundColor,
      bgColors.infoLight.backgroundColor,
      bgColors.infoLight.backgroundColor,
      bgColors.infoLight.backgroundColor
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
      categories: ['0', '50', '100', '150'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on'
    },
    grid: {
      show: false

      // padding: {
      //   left: 0,
      //   right: 0,
      //   bottom: -14
      // }
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

  const [anchorEl, setAnchorEl] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)

  const [loading, setLoaing] = useState(false)
  const { settings } = useSettings()

  useEffect(() => {
    setLoaing(true)
    setTimeout(() => {
      setLoaing(false)
    }, 600)
  }, [settings.navCollapsed])

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
      <CardHeader
        title={
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h4' sx={{ fontWeight: 'medium' }}>
              Receivables Turnovers
            </Typography>
            <Icon
              icon='tabler:exclamation-circle'
              aria-describedby={open && 'Receivables'}
              onClick={event => handleClick(event, 'Receivables')}
              style={{ cursor: 'pointer' }}
              fontSize={28}
            />
            <Popover
              id='Receivables'
              open={open && openIndex === 'Receivables'}
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
                Receivables Turnover calculates the average number of days it takes for a company to collect its
                accounts receivable.
              </Typography>
            </Popover>
          </div>
        }
      />
      <CardContent>
        {!loading && (
          <ReactApexcharts
            type='bar'
            height={213}
            options={options}
            series={[{ name: 'Receivables Turnovers', data: [55, 32, 98, 78, 130] }]}
          />
        )}
        {loading && <LoaderIcon />}
      </CardContent>
    </Card>
  )
}

export default Receivables
