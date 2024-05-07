// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardHeader } from '@mui/material'

// ** Custom Component Import
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** MUI Imports
import Grid from '@mui/material/Grid'

const data = [
    {
        title: 'Revenue',
        stats: '193.1',
        totalUser: 'Total Users',
        icon: 'tabler:trending-up',
        avatarColor: 'primary',
        subIcon: 'tabler:exclamation-circle',
        subIconColor: '#EA5455',
        borderColor: '#7367F0'
    },
    {
        title: 'Employees',
        stats: '1818',
        totalUser: 'Total Users',
        icon: 'tabler:trending-up',
        avatarColor: 'success',
        subIcon: 'tabler:exclamation-circle',
        subIconColor: '#EA5455',
        borderColor: '#28C76F'
    },
    {
        title: 'Return of Sales (ROS)',
        stats: '9.50%',
        totalUser: 'Total Users',
        icon: 'tabler:trending-up',
        avatarColor: 'warning',
        subIcon: 'tabler:exclamation-circle',
        subIconColor: '#EA5455',
        borderColor: '#FF9F43'
    },
    {
        title: 'Return of Assets (ROA)',
        stats: '11.80%',
        totalUser: 'Total Users',
        icon: 'tabler:trending-up',
        avatarColor: 'info',
        subIcon: 'tabler:exclamation-circle',
        subIconColor: '#EA5455',
        borderColor: '#00CFE8'
    },
]

import CardFinancialStat from './CardFinancialStat'
import { borderColor } from '@mui/system'

const CardFinancialStats = ({ data }) => {
    const renderData = data
        ? data.map((item, index) => (
            <Grid item xs={12} sm={12} lg={6} key={index}>
                <CardFinancialStat {...item} />
            </Grid>
        ))
        : null

    return (
        <Grid container spacing={6}>
            {renderData}
        </Grid>
    )
}


const FinancialYear = () => {
    return (
        <Card sx={{ height: '100%', width: '100%' }}>
            <CardHeader
                title={<Typography variant="h4" sx={{ fontWeight: 'medium' }}>
                    Financial Year (2023)
                </Typography>}
            />
            <CardContent>
                <CardFinancialStats data={data} />
            </CardContent>
        </Card>
    )
}

export default FinancialYear;
