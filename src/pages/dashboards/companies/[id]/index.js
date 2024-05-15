// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import AnalyticsProject from 'src/views/dashboards/analytics/AnalyticsProject'
import AnalyticsOrderVisits from 'src/views/dashboards/analytics/AnalyticsOrderVisits'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsSourceVisits from 'src/views/dashboards/analytics/AnalyticsSourceVisits'
import AnalyticsEarningReports from 'src/views/dashboards/analytics/AnalyticsEarningReports'
import AnalyticsSupportTracker from 'src/views/dashboards/analytics/AnalyticsSupportTracker'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsMonthlyCampaignState from 'src/views/dashboards/analytics/AnalyticsMonthlyCampaignState'
import AnalyticsWebsiteAnalyticsSlider from 'src/views/dashboards/analytics/AnalyticsWebsiteAnalyticsSlider'

// ** React Import
import React from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CloseIcon from '@mui/icons-material/Close'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box, display } from '@mui/system'
import { Alert, AlertTitle, CardHeader, Divider, IconButton } from '@mui/material'
import ContactDetails from 'src/pages/components/custom/ContactDetails'
import FinancialYear from 'src/pages/components/custom/FinancialYear'
import FinancialHealth from 'src/pages/components/custom/FinancialHealth'
import Turnover from 'src/pages/components/custom/Turnover'
import Ebit from 'src/pages/components/custom/Ebit%'
import Ebitda from 'src/pages/components/custom/Ebitda%'
import Receivables from 'src/pages/components/custom/Receivables'
import Indebtedness from 'src/pages/components/custom/Indebtedness'
import ReturnOfAssets from 'src/pages/components/custom/ReturnOfAssets'
import ReturnOfEquity from 'src/pages/components/custom/ReturnOfEquity'
import NumberOfEmployees from 'src/pages/components/custom/NumberOfEmployees'
import Footer from 'src/pages/components/custom/Footer'
import FinancialYearCard from 'src/pages/components/custom/FinancialYear'

const Illustration = styled('img')(({ theme }) => ({
  right: 12,
  top: -25,
  position: 'absolute',
  width: '245px',
  [theme.breakpoints.down('xl')]: {
    right: 15,
    top: -20,
    width: '225px'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Images = styled('img')(({ theme }) => ({
  width: '24px'
}))

const MsgImg = styled('img')(({ theme }) => ({
  width: '28px',
  padding: 0
}))

const Div = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

function Company() {
  return (
    <>
      <Box sx={{ position: 'relative', mt: 4, mb: 4, padding: 2, borderRadius: '1rem', backgroundColor: '#d4f4e2' }}>
        <Card
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 1,
            margin: 1,
            backgroundColor: '#28c76f',
            borderRadius: '1rem'
          }}
        >
          <CardContent>
            <Typography
              variant='body2'
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: '0.5rem',
                fontSize: '1.25rem'
              }}
            >
              <Images alt='fav-icon' src='/images/icons/project-icons/fav-icon.png' />
              Renault Technologie Roumanie S.R.L
            </Typography>
            <Typography variant='body1' sx={{ color: 'white', display: 'flex', gap: 2, fontSize: '1rem' }}>
              <Icon fontSize='1rem' icon='tabler:building-skyscraper' />
              Industrial Activities
            </Typography>
            <Typography variant='body2' sx={{ color: 'white', display: 'flex', gap: 2 }}>
              <Icon fontSize='1rem' icon='tabler:map-pin' />
              Engineering and related technical consultancy activities
            </Typography>
            <Card
              container
              sx={{
                mt: 2,
                backgroundColor: 'white',
                width: '224px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
              }}
            >
              <Images alt='fb-icon' src='/images/icons/project-icons/sm-icons/fb.svg' />
              <Images alt='telegram-icon' src='/images/icons/project-icons/sm-icons/telegram.svg' />
              <Images alt='twitter-icon' src='/images/icons/project-icons/sm-icons/twitter.svg' />
              <Images alt='linkedin-icon' src='/images/icons/project-icons/sm-icons/linkedin.svg' />
              <Images alt='insta-icon' src='/images/icons/project-icons/sm-icons/insta.svg' />
            </Card>
          </CardContent>
        </Card>
        <Illustration alt='company-page-hero-img' src='/images/cards/company-page-hero-img.png' />
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} lg={3}>
          <Card>
            <CardContent>
              <Div sx={{ pb: 5 }}>
                <Typography variant='h5'>Inc. Year:</Typography>
                <Typography variant='body1' sx={{ color: '#D3D3D3' }}>
                  2019
                </Typography>
              </Div>
              <Divider variant='middle' />
              <Div sx={{ pt: 5 }}>
                <Typography variant='h5'>Fiscal Code:</Typography>
                <Typography variant='body1' sx={{ color: '#D3D3D3' }}>
                  1857942
                </Typography>
              </Div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={5}>
          <Card>
            <CardContent>
              <Div sx={{ pb: 5 }}>
                <Typography variant='h5'>Address:</Typography>
                <Typography variant='body1' sx={{ color: '#D3D3D3' }}>
                  strada Sapientie, nr 45
                </Typography>
              </Div>
              <Divider variant='middle' />
              <Div sx={{ pt: 5 }}>
                <Typography variant='h5'>Code:</Typography>
                <Typography variant='body1' sx={{ color: '#D3D3D3' }}>
                  356334, Bucharest, Romania
                </Typography>
              </Div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Card>
            <CardContent>
              <Alert
                icon={<MsgImg alt='msgImg-icon' src='/images/icons/project-icons/msgImg.svg' />}
                action={
                  <IconButton
                    aria-label='close'
                    color='inherit'
                    size='large'
                    onClick={e => {
                      e.preventDefault()
                    }}
                  >
                    <CloseIcon style={{ fontSize: '1.5rem' }} />
                  </IconButton>
                }
                onClose={e => {
                  e.preventDefault()
                }}
              >
                <AlertTitle sx={{ fontSize: 22 }}>Message</AlertTitle>1 Notification
              </Alert>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <ContactDetails />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Card>
            <CardHeader
              title={
                <Typography variant='h4' sx={{ fontWeight: 'medium' }}>
                  Financial Year (2023)
                </Typography>
              }
            />
            <CardContent>
              <FinancialYearCard />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FinancialHealth />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Turnover />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Ebitda />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Ebit />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Receivables />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Indebtedness />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ReturnOfAssets />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ReturnOfEquity />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <NumberOfEmployees />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}

export default Company
