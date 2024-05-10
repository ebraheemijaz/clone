// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { margin, width } from '@mui/system'
import styled from '@emotion/styled'

// ** Custom Components Imports

const data = {
  phones: [
    {
      phone1: {
        type: 'Phone Number',
        number: '123-456-789'
      },
      phone2: {
        type: 'Phone Number',
        number: '123-456-789'
      },
      mobile: {
        type: 'Mobile Number',
        number: '+1-985 485 478'
      },
      fax: {
        type: 'Fax Number',
        number: '+1-985 485 478'
      }
    }
  ],
  emails: [
    {
      phone1: {
        type: 'Phone Number',
        number: '123-456-789'
      },
      phone2: {
        type: 'Phone Number',
        number: '123-456-789'
      },
      mobile: {
        type: 'Mobile Number',
        number: '+1-985 485 478'
      },
      fax: {
        type: 'Fax Number',
        number: '+1-985 485 478'
      }
    }
  ],
  websites: [
    {
      phone1: {
        type: 'Phone Number',
        number: '123-456-789'
      },
      phone2: {
        type: 'Phone Number',
        number: '123-456-789'
      },
      mobile: {
        type: 'Mobile Number',
        number: '+1-985 485 478'
      },
      fax: {
        type: 'Fax Number',
        number: '+1-985 485 478'
      }
    }
  ]
}

const ContactDetails = () => {
  // ** State
  const [value, setValue] = useState('phones')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const Div = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 4
  }))

  const DivContainer = styled('div')(({ theme }) => ({
    paddingTop: 3,
    paddingBottom: 3
  }))

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        sx={{ title: 'bold' }}
        title={
          <Typography variant='h4' sx={{ fontWeight: 'medium' }}>
            Contact Details
          </Typography>
        }
      />
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='tabs in orders card'>
          <Tab sx={{ color: '#ff9f43' }} value='phones' label='Phones' />
          <Tab sx={{ color: '#ff4c51' }} value='emails' label='Emails' />
          <Tab sx={{ color: '#28c76f' }} value='websites' label='Websites' />
        </TabList>
        <TabPanel value={value}>
          {data[value].map((item, index) => {
            console.log(item.phone1.type)

            return (
              <Fragment key={index}>
                <DivContainer>
                  <Div>
                    <Typography fontSize={14} sx={{ mb: 0.5 }} variant='p'>
                      {item.phone1.type}
                    </Typography>
                    <Typography sx={{ color: 'text.disabled' }}>{item.phone1.number}</Typography>
                  </Div>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                </DivContainer>
                <DivContainer>
                  <Div>
                    <Typography fontSize={14} sx={{ mb: 0.5 }} variant='p'>
                      {item.phone2.type}
                    </Typography>
                    <Typography sx={{ color: 'text.disabled' }}>{item.phone1.number}</Typography>
                  </Div>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                </DivContainer>
                <DivContainer>
                  <Div>
                    <Typography fontSize={14} sx={{ mb: 0.5 }} variant='p'>
                      {item.mobile.type}
                    </Typography>
                    <Typography sx={{ color: 'text.disabled' }}>{item.phone1.number}</Typography>
                  </Div>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                </DivContainer>
                <DivContainer>
                  <Div>
                    <Typography fontSize={14} sx={{ mb: 0.5 }} variant='p'>
                      {item.fax.type}
                    </Typography>
                    <Typography sx={{ color: 'text.disabled' }}>{item.phone1.number}</Typography>
                  </Div>
                </DivContainer>
              </Fragment>
            )
          })}
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default ContactDetails
