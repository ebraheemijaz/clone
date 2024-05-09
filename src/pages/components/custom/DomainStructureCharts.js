// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import dynamic from "next/dynamic";

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });


const DomainStructureCharts = () => {
    return (
        <Card>
            <CardHeader title='Domain Structure' />
            <CardContent>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                <GaugeChart />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                <GaugeChart />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                <GaugeChart />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}


export default DomainStructureCharts