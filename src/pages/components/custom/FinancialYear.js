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
    avatarIcon: 'tabler:trending-up',
    title: 'Revenue (Mn. EUR)',
    subtitle: 'Increasing',
    chipColor: '#7367F0',
    stats: '193.1',
    avatarColor: 'primary',
    chipIcon: 'tabler:arrow-up'
  },
  {
    avatarIcon: 'tabler:trending-up',
    title: 'Employees',
    subtitle: 'Decreasing',
    chipColor: '#28C76F',
    stats: '1818',
    avatarColor: 'success',
    chipIcon: 'tabler:arrow-down'
  },
  {
    avatarIcon: 'tabler:trending-up',
    title: 'Return of Sales (ROS)',
    subtitle: 'Decreasing',
    chipColor: '#00CFE8',
    stats: '9.50%',
    avatarColor: 'info',
    chipIcon: 'tabler:arrow-down'
  },
  {
    avatarIcon: 'tabler:trending-up',
    title: 'Return of Assets (ROA)',
    subtitle: 'Increasing',
    chipColor: '#FF9F43',
    stats: '11.80%',
    avatarColor: 'warning',
    chipIcon: 'tabler:arrow-up'
  }
]

const TechCard = props => {
  const theme = useTheme()

  // ** Props
  const {
    sx,
    stats,
    title,
    chipIcon,
    subtitle,
    avatarIcon,
    avatarSize = 30,
    iconSize = '1rem',
    chipColor = '#7367F0',
    avatarColor = 'primary'
  } = props

  return (
    <Card sx={{ ...sx, borderBottom: `5px solid ${chipColor}` }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between', padding: '0.5rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          {/* <CustomAvatar
            skin='light'
            variant='rounded'
            color={avatarColor}
            sx={{ width: avatarSize, height: avatarSize }}
          >
            <Icon icon={avatarIcon} fontSize={iconSize} />
          </CustomAvatar> */}
        </Box>
        <Typography variant='body2' sx={{ mb: 0.5, fontSize: 'x-large' }}>
          {stats}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 2 }}>
          <Typography variant='body2' sx={{ fontSize: '1rem' }}>
            {subtitle}
          </Typography>
          <Icon icon={chipIcon} color={subtitle === 'Increasing' ? '#24B364' : '#E64449'} fontSize={25} />
        </Box>
      </CardContent>
    </Card>
  )
}

const FinancialYearCard = () => (
  <Grid container spacing={6}>
    {data.map((item, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={6}>
        <TechCard {...item} />
      </Grid>
    ))}
  </Grid>
)

export default FinancialYearCard
