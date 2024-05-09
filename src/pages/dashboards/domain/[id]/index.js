// ** MUI Import
import Grid from '@mui/material/Grid'

// ** React Import
import React, { Fragment } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/system'
import { CardHeader, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'
import KeyTechCard from 'src/pages/components/custom/KeyTechCard'
import EstimatedTraffic from 'src/pages/components/custom/EstimatedTraffic'
import TrafficSources from 'src/pages/components/custom/TrafficSources'
import DomainStructure from 'src/pages/components/custom/DomainStructure'
import DomainReferral from 'src/pages/components/custom/DomainReferral'
import LFZPCharts from 'src/pages/components/custom/LFZPCharts'
import DomainStructureCharts from 'src/pages/components/custom/DomainStructureCharts'


const Images = styled('img')(({ theme }) => ({
    width: '24px',
}))

const data = [
    {
        name: 'Company',
        value: 'Domain Com. Ltd'
    },
    {
        name: 'Fiscal ID',
        value: '123-456-789'
    },
    {
        name: 'Launch Date',
        value: '12-06-2020'
    },
    {
        name: 'Country',
        value: 'Germany'
    },
    {
        name: 'Server Location',
        value: 'Germany'
    },
    {
        name: 'Language',
        value: 'Germany'
    },
    {
        name: 'IP Address',
        value: '0214 5896 4785 6548'
    },
]

function DomainInfo() {
    return (
        <>
            <Box sx={{ my: 4, padding: 6, borderRadius: '1rem', backgroundColor: '#7367F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant='h4' sx={{ mb: 0.5, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Images alt='fav-icon' src='/images/icons/project-icons/fav-icon.png' />
                        webaddress.com Klintensiv Romania: Dezinfectanti medicali, produse de curatenie
                    </Typography>
                    <Typography variant='body2' sx={{ color: 'white', fontSize: '1.75rem', display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Icon fontSize='1.75rem' icon='tabler:world' />
                        website category
                    </Typography>
                </Box>
                <Card container sx={{ backgroundColor: 'white', width: '224px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Images alt='fb-icon' src='/images/icons/project-icons/sm-icons/fb.svg' />
                    <Images alt='telegram-icon' src='/images/icons/project-icons/sm-icons/telegram.svg' />
                    <Images alt='twitter-icon' src='/images/icons/project-icons/sm-icons/twitter.svg' />
                    <Images alt='linkedin-icon' src='/images/icons/project-icons/sm-icons/linkedin.svg' />
                    <Images alt='insta-icon' src='/images/icons/project-icons/sm-icons/insta.svg' />
                </Card>
            </Box>
            <Grid container spacing={6}>
                <Grid item sm={12} lg={6}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12}>
                            <Card>
                                <CardHeader
                                    title={<Typography variant="body2" sx={{ fontSize: '1.125rem', fontWeight: 'bold' }} >
                                        General Information
                                    </Typography>}
                                />
                                <CardContent>
                                    <Button fullWidth variant='contained' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '1.125rem', mb: 2, '& svg': { mr: 2 } }}>
                                        <Icon fontSize='2rem' icon='tabler:category' />
                                        Description
                                    </Button>
                                    <Button fullWidth variant='contained' disabled sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '1.125rem', mb: 2, '& svg': { mr: 2 } }}>
                                        <Icon fontSize='2rem' icon='tabler:trophy' />
                                        Top keywords
                                    </Button>
                                    <Button fullWidth variant='contained' disabled sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '1.125rem', mb: 2, '& svg': { mr: 2 } }}>
                                        <Icon fontSize='2rem' icon='tabler:align-box-left-bottom' />
                                        Websites in same IP
                                    </Button>
                                    <Button fullWidth variant='contained' disabled sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '1.125rem', mb: 2, '& svg': { mr: 2 } }}>
                                        <Icon fontSize='2rem' icon='tabler:bandage' />
                                        Linked domains:
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Card>
                                <CardHeader
                                    title={<Typography variant="body2" sx={{ fontSize: '1.125rem', fontWeight: 'bold' }} >
                                        Domain Ownershsip
                                    </Typography>}
                                />
                                <CardContent>
                                    {data.map((item, index) =>
                                        <Fragment key={index}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Typography variant='body2' sx={{ fontSize: '1.125rem' }}>
                                                    {item.name}
                                                </Typography>
                                                <Typography variant='body1' sx={{ color: '#D3D3D3', fontSize: '0.85rem' }}>
                                                    {item.value}
                                                </Typography>
                                            </Box>
                                            {index !== data.length - 1 && <Divider sx={{ my: 1, borderStyle: 'dashed' }} />}
                                        </Fragment>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={12}>
                            <Card>
                                <CardHeader
                                    title={<Typography variant="body2" sx={{ fontSize: '1.125rem', fontWeight: 'bold' }} >
                                        Key Technical Background
                                    </Typography>}
                                />
                                <CardContent>
                                    <KeyTechCard />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12}>
                            <Card sx={{ height: '188vh' }}>
                                <CardContent>
                                    <Typography variant='body2' fontSize={28} fontWeight={'bold'}>
                                        Main Screenshot Here
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <EstimatedTraffic />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <TrafficSources />
                </Grid>
                <Grid item xs={12} md={6} lg={3.5}>
                    <DomainStructure />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                    <LFZPCharts />
                </Grid>
                <Grid item xs={12} md={6} lg={3.5}>
                    <DomainReferral />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <DomainStructureCharts />
                </Grid>
            </Grid >
        </>
    )
}

export default DomainInfo