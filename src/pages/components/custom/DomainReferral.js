// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
    {
        icon: 'tabler:shadow',
        title: 'Ongoing Link',
        amount: '61',
        alertIcon: 'tabler:exclamation-circle',
    },
    {
        icon: 'tabler:globe',
        title: 'Referral Link',
        amount: '60',
        alertIcon: 'tabler:exclamation-circle',
    },
    {
        icon: 'tabler:mail',
        title: 'External Link',
        amount: '1',
        alertIcon: 'tabler:exclamation-circle',
    },
    {
        icon: 'tabler:external-link',
        title: 'Total Image',
        amount: 'Minimal',
        alertIcon: 'tabler:exclamation-circle',
    },
    {
        icon: 'tabler:star',
        title: 'Image on Page',
        amount: 'Minimal',
        alertIcon: 'tabler:exclamation-circle',
    },
    {
        icon: 'tabler:star',
        title: 'HTML Site',
        amount: 'Extensive',
        alertIcon: 'tabler:exclamation-circle',
    },
    {
        icon: 'tabler:star',
        title: 'Text/HTML',
        amount: 'Minimal',
        alertIcon: 'tabler:exclamation-circle',
    },
    {
        icon: 'tabler:discount-2',
        title: 'Watch on Page',
        amount: 'Extensive',
        alertIcon: 'tabler:exclamation-circle',
    },
]

function DomainReferral() {
    return (
        <Card>
            <CardHeader
                title='Domain Referrals'
                action={
                    <OptionsMenu
                        options={['Last Week', 'Last Month', 'Last Year']}
                        iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
                    />
                }
            />
            <CardContent>
                {data.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                mb: index !== data.length - 1 ? 4.5 : undefined
                            }}
                        >
                            <Avatar variant='rounded' sx={{ mr: 4, width: 34, height: 34 }}>
                                <Icon icon={item.icon} />
                            </Avatar>
                            <Box
                                sx={{
                                    rowGap: 1,
                                    columnGap: 4,
                                    width: '100%',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Typography variant='h6'>{item.title}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{ mr: 4, color: 'text.secondary' }}>{item.amount}</Typography>
                                    <Icon icon={item.alertIcon} />
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </CardContent>
        </Card>
    )
}


export default DomainReferral