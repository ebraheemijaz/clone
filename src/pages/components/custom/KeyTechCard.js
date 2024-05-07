import { Grid } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'

// ** MUI Imports
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Import
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { Box } from '@mui/system'

const data = [
    {
        avatarIcon: 'tabler:briefcase',
        title: 'Ecommerce',
        subtitle: 'On route vehicles',
        chipColor: '#7367F0',
        stats: '+18.2%',
        avatarColor: 'primary',
        chipText: 'than last week',
    },
    {
        avatarIcon: 'tabler:report-analytics',
        title: 'Analytics',
        subtitle: 'On route vehicles',
        chipColor: '#28C76F',
        stats: '+18.2%',
        avatarColor: 'success',
        chipText: 'than last week',
    },
    {
        avatarIcon: 'tabler:credit-card',
        title: 'Database',
        subtitle: 'On route vehicles',
        chipColor: '#00CFE8',
        stats: '+18.2%',
        avatarColor: 'info',
        chipText: 'than last week',
    },
    {
        avatarIcon: 'tabler:code-circle',
        title: 'Programming',
        subtitle: 'On route vehicles',
        chipColor: '#FF9F43',
        stats: '+18.2%',
        avatarColor: 'warning',
        chipText: 'than last week',
    },
    {
        avatarIcon: 'tabler:browser-check',
        title: 'Web Servers',
        subtitle: 'On route vehicles',
        chipColor: '#EA5455',
        stats: '+18.2%',
        avatarColor: 'error',
        chipText: 'than last week',
    },
    {
        avatarIcon: 'tabler:anchor',
        title: 'Technologies',
        subtitle: 'On route vehicles',
        chipColor: '#A8AAAE',
        stats: '+18.2%',
        avatarColor: 'secondary',
        chipText: 'than last week',
    },
]

const TechCard = props => {
    const theme = useTheme()

    // ** Props
    const {
        sx,
        stats,
        title,
        chipText,
        subtitle,
        avatarIcon,
        avatarSize = 44,
        iconSize = '1.75rem',
        chipColor = '#7367F0',
        avatarColor = 'primary'
    } = props

    return (
        <Card sx={{ ...sx, borderBottom: `5px solid ${chipColor}` }} >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 8 }}>
                    <CustomAvatar
                        skin='light'
                        variant='rounded'
                        color={avatarColor}
                        sx={{ mb: 3.5, width: avatarSize, height: avatarSize }}
                    >
                        <Icon icon={avatarIcon} fontSize={iconSize} />
                    </CustomAvatar>
                    <Typography variant='h5' sx={{ mb: 1 }}>
                        {title}
                    </Typography>
                </Box>
                <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{subtitle}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                    <Typography variant='body2' sx={{ fontSize: '1rem' }}>
                        {stats}
                    </Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                        {chipText}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}


const KeyTechCard = () => (
    <Grid container spacing={6}>
        {
            data.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={6}>
                    <TechCard {...item} />
                </Grid>
            ))
        }
    </Grid>
)

export default KeyTechCard