// import React from 'react'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import { useTheme } from '@mui/material/styles'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'
// import CircularProgress from '@mui/material/CircularProgress'

// // ** Icons Imports
// import Icon from 'src/@core/components/icon'

// // ** Custom Components Imports
// import ReactApexcharts from 'src/@core/components/react-apexcharts'

// // ** Util Import
// import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
// import { CardHeader, Grid } from '@mui/material'

// const seriesGood = [100, 80]
// const seriesBad = [100, 20]

// const GoodChart = () => {
//   // ** Hook
//   const theme = useTheme()

//   const options = {
//     colors: [
//       theme.palette.success.main

//       //   hexToRGBA(theme.palette.success.main, 0.7),
//       //   hexToRGBA(theme.palette.success.main, 0.5),
//       //   hexToRGBA(theme.palette.success.main, 0.16)
//     ],
//     padding: {
//       top: 0,
//       right: 0,
//       bottom: 0,
//       left: 0
//     },
//     stroke: { width: 0 },
//     legend: { show: false },
//     tooltip: { enabled: false },
//     dataLabels: { enabled: false },
//     labels: ['Electronic'],
//     states: {
//       hover: {
//         filter: { type: 'none' }
//       },
//       active: {
//         filter: { type: 'none' }
//       }
//     },
//     plotOptions: {
//       pie: {
//         customScale: 0.6,
//         expandOnClick: false,
//         donut: {
//           size: '73%',
//           labels: {
//             show: true,
//             name: {
//               offsetY: 25,
//               color: theme.palette.text.secondary,
//               fontFamily: theme.typography.fontFamily
//             },
//             value: {
//               offsetY: -15,
//               fontWeight: 500,
//               formatter: val => `${val}`,
//               color: theme.palette.text.primary,
//               fontFamily: theme.typography.fontFamily,
//               fontSize: theme.typography.h5.fontSize
//             },
//             total: {
//               show: true,
//               label: 'Total',
//               color: theme.palette.text.secondary,
//               fontFamily: theme.typography.fontFamily,
//               fontSize: theme.typography.h6.fontSize
//             }
//           }
//         }
//       }
//     }
//   }

//   return (
//     <Card sx={{ height: '100%' }}>
//       <CardContent sx={{ padding: 3, height: '100%', paddingBottom: '0 !important' }} id='jkn'>
//         <Box
//           sx={{
//             display: 'flex',
//             // flex:1,
//             flexDirection: 'column',
//             // alignItems: 'stretch',
//             // justifyContent: 'space-between',
//             width: '100%',
//             // height: '100%',
//             padding: '0px'
//           }}
//         >
//           {/* <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> */}
//           {/* <div> */}
//           <Typography variant='h5' sx={{ mb: 0.75 }}>
//             Domain Authority
//           </Typography>
//           <Typography variant='body2'>Monthly Report</Typography>
//           {/* </div> */}
//           {/* <div> */}
//           {/* </div> */}
//           {/* </Box> */}
//         </Box>
//         <Box
//         // style={{
//         //   // height: '100%',
//         //   // marginTop: '10px',
//         //   display: 'flex',
//         //   flexDirection: 'row'
//         // }}
//         >
//           <Typography variant='h4'>Good</Typography>
//           <div
//           // style={{
//           //   // maxHeight: '100%',
//           //   backgroundColor: 'blue',
//           //   // width: '100%',
//           //   display: 'flex',
//           //   justifyContent: 'center',
//           //   alignItems: 'center',
//           //   flex: '1'
//           // }}
//           >
//             <div>
//               <ReactApexcharts type='donut' series={seriesGood} options={options} />
//             </div>
//           </div>
//         </Box>
//       </CardContent>
//     </Card>
//   )
// }

// const donutColors = {
//   series1: '#fdd835',
//   series2: '#00d4bd',
//   series3: '#826bf8',
//   series4: '#1FD5EB',
//   series5: '#ffa1a1'
// }

// const MainCard = () => {
//   // ** Hook
//   const theme = useTheme()

//   const options = {
//     stroke: { width: 0 },
//     labels: ['Display', 'Referral', 'Search', 'Direct'],
//     colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
//     dataLabels: {
//       enabled: true,
//       formatter: val => `${parseInt(val, 10)}%`
//     },
//     legend: {
//       position: 'bottom',
//       markers: { offsetX: -3 },
//       labels: { colors: theme.palette.text.secondary },
//       itemMargin: {
//         vertical: 3,
//         horizontal: 10
//       }
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           labels: {
//             show: true,
//             name: {
//               fontSize: '0.75rem'
//             },
//             value: {
//               fontSize: '0.75rem',
//               color: theme.palette.text.secondary,
//               formatter: val => `${parseInt(val, 10)}`
//             },
//             total: {
//               show: false,
//               fontSize: '0.75rem',
//               label: 'Display',
//               formatter: val => `${parseInt(val, 10)}`,
//               color: theme.palette.text.primary
//             }
//           }
//         }
//       }
//     }
//   }

//   return (
//     <Box>
//       <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
//     </Box>
//   )
// }

// const TrafficSources = () => {
//   return (
//     <Card
//       sx={{
//         height: '350px'
//       }}
//     >
//       <CardContent
//         sx={{
//           width: '100%',
//           height: '100%',
//           // background: 'gray',
//           padding: '1rem'
//         }}
//       >
//         <div style={{ display: 'flex', height: '100%' }}>
//           <div
//             style={{
//               // backgroundColor: 'green',
//               flex: 4,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-around'
//             }}
//           >
//             <Typography variant='h5' sx={{ mb: 0.75 }}>
//               Traffic Sources
//             </Typography>
//             <MainCard />
//           </div>
//           <div
//             style={{
//               flex: 6,
//               width: '100%',
//               height: '100%',
//               // backgroundColor: 'wheat',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               gap: 5,
//               padding: '0.25rem'
//             }}
//           >
//             <div style={{ flex: 1 }}>
//               <GoodChart />
//             </div>
//             <div style={{ flex: 1 }}>
//               <GoodChart />
//             </div>
//           </div>
//         </div>
//         {/*
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={12} lg={5}>

//           </Grid>
//           <Grid item xs={12} md={12} lg={7}>
//             <Grid
//               container
//               spacing={2}
//               sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}
//             >
//               <Grid item xs={12} md={12} lg={12}>
//               </Grid>
//               <Grid item xs={12} md={12} lg={12}>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid> */}
//       </CardContent>
//     </Card>
//   )
// }

// export default TrafficSources

import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { CardHeader, Grid } from '@mui/material'
import EcommerceGeneratedLeads from 'src/views/dashboards/ecommerce/EcommerceGeneratedLeads'

const seriesGood = [100, 80]
const seriesBad = [100, 20]

const GoodChart = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    colors: [
      theme.palette.success.main

      //   hexToRGBA(theme.palette.success.main, 0.7),
      //   hexToRGBA(theme.palette.success.main, 0.5),
      //   hexToRGBA(theme.palette.success.main, 0.16)
    ],
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Electronic'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.6,
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
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ padding: 3, height: '100%', paddingBottom: '0 !important' }} id='jkn'>
        <Box
          sx={{
            display: 'flex',
            // flex:1,
            flexDirection: 'column',
            // alignItems: 'stretch',
            // justifyContent: 'space-between',
            width: '100%',
            // height: '100%',
            padding: '0px'
          }}
        >
          {/* <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> */}
          {/* <div> */}
          <Typography variant='h5' sx={{ mb: 0.75 }}>
            Domain Authority
          </Typography>
          <Typography variant='body2'>Monthly Report</Typography>
          {/* </div> */}
          {/* <div> */}
          {/* </div> */}
          {/* </Box> */}
        </Box>
        <Box
        // style={{
        //   // height: '100%',
        //   // marginTop: '10px',
        //   display: 'flex',
        //   flexDirection: 'row'
        // }}
        >
          <Typography variant='h4'>Good</Typography>
          <div
          // style={{
          //   // maxHeight: '100%',
          //   backgroundColor: 'blue',
          //   // width: '100%',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   flex: '1'
          // }}
          >
            <div>
              <ReactApexcharts type='donut' series={seriesGood} options={options} />
            </div>
          </div>
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
    }
  }

  return (
    <Box>
      <ReactApexcharts type='donut' options={options} series={[85, 16, 50, 50]} />
    </Box>
  )
}

const TrafficSources = () => {
  return (
    <Card
      sx={{
        height: '350px'
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          height: '100%',
          // background: 'gray',
          padding: '1rem'
        }}
      >
        <div style={{ display: 'flex', height: '100%' }}>
          <div
            style={{
              // backgroundColor: 'green',
              flex: 4,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around'
            }}
          >
            <Typography variant='h5' sx={{ mb: 0.75 }}>
              Traffic Sources
            </Typography>
            <MainCard />
          </div>
          <div
            style={{
              flex: 6,
              width: '100%',
              height: '100%',
              // backgroundColor: 'wheat',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 5,
              padding: '0.25rem'
            }}
          >
            <EcommerceGeneratedLeads />
            <EcommerceGeneratedLeads />
            {/* <div style={{ flex: 1 }}>
              <GoodChart />
            </div>
            <div style={{ flex: 1 }}>
              <GoodChart />
            </div> */}
          </div>
        </div>
        {/* 
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={5}>
            
          </Grid>
          <Grid item xs={12} md={12} lg={7}>
            <Grid
              container
              spacing={2}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}
            >
              <Grid item xs={12} md={12} lg={12}>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </CardContent>
    </Card>
  )
}

export default TrafficSources
