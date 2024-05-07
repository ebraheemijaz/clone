// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Import
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { display } from '@mui/system'

const CardFinancialStat = props => {
    // ** Props
    const { sx, icon, stats, title, iconSize = 24, avatarSize = 42, avatarColor = 'primary', borderColor, totalUser, subIcon, subIconColor, } = props

    return (
        <Card sx={{
            ...sx, backgroundColor: '#fafafa', boxShadow: 'unset', borderBottom: `5px solid ${borderColor}`
        }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
                        <Typography variant='body2' fontSize={16}>{title}</Typography>
                        <Typography variant='h2' sx={{ mb: 2 }}>
                            {stats}
                        </Typography>
                    </div>
                    <CustomAvatar skin='light' color={avatarColor} sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                        <Icon icon={icon} fontSize={iconSize} />
                    </CustomAvatar>
                </div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='body2' fontSize={16}>{totalUser}</Typography>
                    <Icon icon={subIcon} fontSize={28} color={subIconColor} />
                </div>
            </CardContent>
        </Card >
    )
}

export default CardFinancialStat
