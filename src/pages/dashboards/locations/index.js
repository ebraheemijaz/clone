import { Avatar, Button, Card, CardContent, CardHeader, Chip, Divider, Grid, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React from 'react'
import { useState } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'

const defaultChipData = {
  Country: 'US',
  City: 'Washington',
  Business: 'IT',
  Category: ['category 1', 'category 5'],
  'Sub Category': ['subcategory 1', 'subcategory 3'],
  'Radio Filter': 'domain',
  Search: 'Odorest'
}

function Locations() {
  const [chipData, setChipData] = useState(defaultChipData)

  const handleDelete = (key, chipIndex) => () => {
    setChipData(prevChipData => {
      const newData = { ...prevChipData }
      if (Array.isArray(newData[key])) {
        newData[key] = newData[key].filter((item, index) => index !== chipIndex)
      } else {
        delete newData[key]
      }

      return newData
    })

    // console.log('Chips available are : ', chipData)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        {Object.values(chipData).some(value => Array.isArray(value) && value.length > 0) ||
        Object.values(chipData).some(value => typeof value === 'string' && value.trim() !== '') ? (
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              {Object.entries(chipData).map(([key, value]) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }} key={key}>
                  {Array.isArray(value)
                    ? value.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant='body2' sx={{ fontSize: 'medium', fontWeight: 'bold' }}>
                            {key}:
                          </Typography>
                          {value.map((item, index) => (
                            <CustomChip
                              key={index}
                              label={item}
                              skin='light'
                              color='primary'
                              onDelete={handleDelete(key, index)}
                              deleteIcon={<Icon icon='tabler:trash' color={'#E64449'} />}
                            />
                          ))}
                        </Box>
                      )
                    : typeof value === 'string' &&
                      value.trim() !== '' && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant='body2' sx={{ fontSize: 'medium', fontWeight: 'bold' }}>
                            {key}:
                          </Typography>
                          <CustomChip
                            label={value}
                            skin='light'
                            color='primary'
                            onDelete={handleDelete(key)}
                            deleteIcon={<Icon icon='tabler:trash' color={'#E64449'} />}
                          />
                        </Box>
                      )}
                </Box>
              ))}
            </CardContent>
          </Card>
        ) : null}
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Typography variant={'h4'}>Title Here</Typography>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <Avatar
                  variant='rounded'
                  src='/images/avatars/1.png'
                  alt='Victor Anderson'
                  sx={{ height: '120px', width: '120px', mt: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Grid container>
                  <Grid item xs={12} md={6} lg={5}>
                    <Box>
                      <Typography variant={'body2'} sx={{ fontSize: '1.125rem', fontWeight: 'medium' }}>
                        Category
                      </Typography>
                      <Typography variant={'body2'} sx={{ fontSize: '1rem' }}>
                        Subcategory
                      </Typography>
                      <Divider variant='middle' sx={{ my: 2 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        variant={'body2'}
                        sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '1rem' }}
                      >
                        4.9 <Icon icon='tabler:star-filled' style={{ color: '#ff9f43', fontSize: '1rem' }} />
                      </Typography>
                      <Box style={{ height: '1rem', borderRight: '0.150rem solid #DFDFE3' }} />
                      <Typography variant={'body2'} sx={{ fontSize: '0.80rem' }}>
                        Review (1.5K)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={7}>
                    <Grid
                      container
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, width: '100%' }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                      >
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='success'
                          startIcon={<Icon icon='tabler:mail' />}
                        >
                          Email
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='warning'
                          startIcon={<Icon icon='tabler:world' />}
                        >
                          Domain
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='primary'
                          startIcon={<Icon icon='tabler:phone' />}
                        >
                          Call
                        </Button>
                      </Grid>
                      <Button variant='tonal' color='secondary'>
                        Address
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ textAlign: 'justify' }}>
                      Lorem ipsum dolor sodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      deserunt mollit anim id est laborum.adipiscing elit, sed do eiusmod
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Typography variant={'h4'}>Title Here</Typography>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <Avatar
                  variant='rounded'
                  src='/images/avatars/1.png'
                  alt='Victor Anderson'
                  sx={{ height: '120px', width: '120px', mt: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Grid container>
                  <Grid item xs={12} md={6} lg={5}>
                    <Box>
                      <Typography variant={'body2'} sx={{ fontSize: '1.125rem', fontWeight: 'medium' }}>
                        Category
                      </Typography>
                      <Typography variant={'body2'} sx={{ fontSize: '1rem' }}>
                        Subcategory
                      </Typography>
                      <Divider variant='middle' sx={{ my: 2 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        variant={'body2'}
                        sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '1rem' }}
                      >
                        4.9 <Icon icon='tabler:star-filled' style={{ color: '#ff9f43', fontSize: '1rem' }} />
                      </Typography>
                      <Box style={{ height: '1rem', borderRight: '0.150rem solid #DFDFE3' }} />
                      <Typography variant={'body2'} sx={{ fontSize: '0.80rem' }}>
                        Review (1.5K)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={7}>
                    <Grid
                      container
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, width: '100%' }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                      >
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='success'
                          startIcon={<Icon icon='tabler:mail' />}
                        >
                          Email
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='warning'
                          startIcon={<Icon icon='tabler:world' />}
                        >
                          Domain
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='primary'
                          startIcon={<Icon icon='tabler:phone' />}
                        >
                          Call
                        </Button>
                      </Grid>
                      <Button variant='tonal' color='secondary'>
                        Address
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ textAlign: 'justify' }}>
                      Lorem ipsum dolor sodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      deserunt mollit anim id est laborum.adipiscing elit, sed do eiusmod
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Typography variant={'h4'}>Title Here</Typography>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <Avatar
                  variant='rounded'
                  src='/images/avatars/1.png'
                  alt='Victor Anderson'
                  sx={{ height: '120px', width: '120px', mt: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Grid container>
                  <Grid item xs={12} md={6} lg={5}>
                    <Box>
                      <Typography variant={'body2'} sx={{ fontSize: '1.125rem', fontWeight: 'medium' }}>
                        Category
                      </Typography>
                      <Typography variant={'body2'} sx={{ fontSize: '1rem' }}>
                        Subcategory
                      </Typography>
                      <Divider variant='middle' sx={{ my: 2 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        variant={'body2'}
                        sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '1rem' }}
                      >
                        4.9 <Icon icon='tabler:star-filled' style={{ color: '#ff9f43', fontSize: '1rem' }} />
                      </Typography>
                      <Box style={{ height: '1rem', borderRight: '0.150rem solid #DFDFE3' }} />
                      <Typography variant={'body2'} sx={{ fontSize: '0.80rem' }}>
                        Review (1.5K)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={7}>
                    <Grid
                      container
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, width: '100%' }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                      >
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='success'
                          startIcon={<Icon icon='tabler:mail' />}
                        >
                          Email
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='warning'
                          startIcon={<Icon icon='tabler:world' />}
                        >
                          Domain
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='primary'
                          startIcon={<Icon icon='tabler:phone' />}
                        >
                          Call
                        </Button>
                      </Grid>
                      <Button variant='tonal' color='secondary'>
                        Address
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ textAlign: 'justify' }}>
                      Lorem ipsum dolor sodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      deserunt mollit anim id est laborum.adipiscing elit, sed do eiusmod
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Typography variant={'h4'}>Title Here</Typography>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <Avatar
                  variant='rounded'
                  src='/images/avatars/1.png'
                  alt='Victor Anderson'
                  sx={{ height: '120px', width: '120px', mt: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Grid container>
                  <Grid item xs={12} md={6} lg={5}>
                    <Box>
                      <Typography variant={'body2'} sx={{ fontSize: '1.125rem', fontWeight: 'medium' }}>
                        Category
                      </Typography>
                      <Typography variant={'body2'} sx={{ fontSize: '1rem' }}>
                        Subcategory
                      </Typography>
                      <Divider variant='middle' sx={{ my: 2 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        variant={'body2'}
                        sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '1rem' }}
                      >
                        4.9 <Icon icon='tabler:star-filled' style={{ color: '#ff9f43', fontSize: '1rem' }} />
                      </Typography>
                      <Box style={{ height: '1rem', borderRight: '0.150rem solid #DFDFE3' }} />
                      <Typography variant={'body2'} sx={{ fontSize: '0.80rem' }}>
                        Review (1.5K)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={7}>
                    <Grid
                      container
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, width: '100%' }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                      >
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='success'
                          startIcon={<Icon icon='tabler:mail' />}
                        >
                          Email
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='warning'
                          startIcon={<Icon icon='tabler:world' />}
                        >
                          Domain
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='primary'
                          startIcon={<Icon icon='tabler:phone' />}
                        >
                          Call
                        </Button>
                      </Grid>
                      <Button variant='tonal' color='secondary'>
                        Address
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ textAlign: 'justify' }}>
                      Lorem ipsum dolor sodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      deserunt mollit anim id est laborum.adipiscing elit, sed do eiusmod
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Typography variant={'h4'}>Title Here</Typography>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <Avatar
                  variant='rounded'
                  src='/images/avatars/1.png'
                  alt='Victor Anderson'
                  sx={{ height: '120px', width: '120px', mt: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Grid container>
                  <Grid item xs={12} md={6} lg={5}>
                    <Box>
                      <Typography variant={'body2'} sx={{ fontSize: '1.125rem', fontWeight: 'medium' }}>
                        Category
                      </Typography>
                      <Typography variant={'body2'} sx={{ fontSize: '1rem' }}>
                        Subcategory
                      </Typography>
                      <Divider variant='middle' sx={{ my: 2 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        variant={'body2'}
                        sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '1rem' }}
                      >
                        4.9 <Icon icon='tabler:star-filled' style={{ color: '#ff9f43', fontSize: '1rem' }} />
                      </Typography>
                      <Box style={{ height: '1rem', borderRight: '0.150rem solid #DFDFE3' }} />
                      <Typography variant={'body2'} sx={{ fontSize: '0.80rem' }}>
                        Review (1.5K)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={7}>
                    <Grid
                      container
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, width: '100%' }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                      >
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='success'
                          startIcon={<Icon icon='tabler:mail' />}
                        >
                          Email
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='warning'
                          startIcon={<Icon icon='tabler:world' />}
                        >
                          Domain
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='primary'
                          startIcon={<Icon icon='tabler:phone' />}
                        >
                          Call
                        </Button>
                      </Grid>
                      <Button variant='tonal' color='secondary'>
                        Address
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ textAlign: 'justify' }}>
                      Lorem ipsum dolor sodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      deserunt mollit anim id est laborum.adipiscing elit, sed do eiusmod
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Typography variant={'h4'}>Title Here</Typography>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <Avatar
                  variant='rounded'
                  src='/images/avatars/1.png'
                  alt='Victor Anderson'
                  sx={{ height: '120px', width: '120px', mt: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <Grid container>
                  <Grid item xs={12} md={6} lg={5}>
                    <Box>
                      <Typography variant={'body2'} sx={{ fontSize: '1.125rem', fontWeight: 'medium' }}>
                        Category
                      </Typography>
                      <Typography variant={'body2'} sx={{ fontSize: '1rem' }}>
                        Subcategory
                      </Typography>
                      <Divider variant='middle' sx={{ my: 2 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        variant={'body2'}
                        sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '1rem' }}
                      >
                        4.9 <Icon icon='tabler:star-filled' style={{ color: '#ff9f43', fontSize: '1rem' }} />
                      </Typography>
                      <Box style={{ height: '1rem', borderRight: '0.150rem solid #DFDFE3' }} />
                      <Typography variant={'body2'} sx={{ fontSize: '0.80rem' }}>
                        Review (1.5K)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={7}>
                    <Grid
                      container
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, width: '100%' }}
                    >
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                      >
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='success'
                          startIcon={<Icon icon='tabler:mail' />}
                        >
                          Email
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='warning'
                          startIcon={<Icon icon='tabler:world' />}
                        >
                          Domain
                        </Button>
                        <Button
                          sx={{ '& .MuiButton-startIcon': { marginRight: '0px' } }}
                          variant='outlined'
                          color='primary'
                          startIcon={<Icon icon='tabler:phone' />}
                        >
                          Call
                        </Button>
                      </Grid>
                      <Button variant='tonal' color='secondary'>
                        Address
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ textAlign: 'justify' }}>
                      Lorem ipsum dolor sodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      deserunt mollit anim id est laborum.adipiscing elit, sed do eiusmod
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Locations
