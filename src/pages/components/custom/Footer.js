import React, { Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Grid } from '@mui/material'

function Footer() {
    return (
        <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={12} lg={6}>
                <Card >
                    <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                        <Typography
                            variant='h5' sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2.5 } }}>Reasons for further growth
                        </Typography>
                        <Typography
                            variant='body2' sx={{ display: 'flex', mb: 2.75, alignItems: 'center', fontStyle: 'italic', fontSize: 'small' }}>Key strenghts and opportunities
                        </Typography>
                        <Typography sx={{ fontSize: 'small' }}>
                            This is some text within a card body. Jelly lemon drops tiramisu chocolate cake cotton candy soufflé oat cake sweet roll. Sugar plum marzipan dragée topping cheesecake chocolate bar. Danish muffin icing donut.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
                <Card >
                    <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                        <Typography
                            variant='h5' sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2.5 } }}>Reasons for further growth
                        </Typography>
                        <Typography
                            variant='body2' sx={{ display: 'flex', mb: 2.75, alignItems: 'center', fontStyle: 'italic', fontSize: 'small' }}>Key strenghts and opportunities
                        </Typography>
                        <Typography sx={{ fontSize: 'small' }}>
                            This is some text within a card body. Jelly lemon drops tiramisu chocolate cake cotton candy soufflé oat cake sweet roll. Sugar plum marzipan dragée topping cheesecake chocolate bar. Danish muffin icing donut.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Footer