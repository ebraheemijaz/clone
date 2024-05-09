import React, { Fragment, useCallback, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Typography from '@mui/material/Typography'
import CustomTextField from 'src/@core/components/mui/text-field'
import { MenuItem } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRouter } from 'next/router'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const revenuegrowth = ['< -15%', '-15% - 0%', '0% - 25%', '25% - 50%', '> 50%']

const sizes = [
  "Small",
  "Medium Sized",
  "Large",
  "Very Large",
  "Giant",
]

const domainAuthority = [
  "Low",
  "Moderate",
  "Intermediate",
  "High",
  "Very high",
]

const defaultFilters = { country: '', domain: '', type: '', category: [], sizes: [], domainAuth: [] }

const DomainForm = () => {
  const [filter, setFilter] = useState(defaultFilters)
  const router = useRouter()

  const handleFilterChange = useCallback(
    e => {
      console.log({ filter })
      setFilter({
        ...filter,
        [e.target.name]: e.target.value
      })
    },
    [filter]
  )

  const handleReset = useCallback(e => {
    setFilter(defaultFilters)
  }, [])

  return (
    <Fragment>
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Select Country</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='country'
              name='country'
              fullWidth
              value={filter.country}
              onChange={handleFilterChange}
            >
            </CustomTextField>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Select Domain</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='domain'
              name='domain'
              fullWidth
              value={filter.domain}
              onChange={handleFilterChange}
            >
            </CustomTextField>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Select Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='type'
              name='type'
              select
              fullWidth
              defaultValue={filter.type}
              SelectProps={{
                value: filter.type,
                displayEmpty: true,
                onChange: handleFilterChange
              }}
            >
              <MenuItem value=''>Select Type</MenuItem>
              <MenuItem value='type1'>type 1</MenuItem>
              <MenuItem value='type2'>type 2</MenuItem>
            </CustomTextField>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Select Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='category'
              name='category'
              select
              fullWidth
              SelectProps={{
                MenuProps, multiple: true, value: filter.category, onChange: handleFilterChange
              }}
            >
              {['category1', 'category2'].map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </CustomTextField>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Select Sizes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='sizes'
              name='sizes'
              select
              fullWidth
              SelectProps={{ MenuProps, multiple: true, value: filter.sizes, onChange: handleFilterChange }}
            >
              {
                sizes.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))
              }
            </CustomTextField>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Select Domain Authority</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='domainAuth'
              name='domainAuth'
              select
              fullWidth
              SelectProps={{ MenuProps, multiple: true, value: filter.domainAuth, onChange: handleFilterChange }}
            >
              {domainAuthority.map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </CustomTextField>
          </AccordionDetails>
        </Accordion>
      </div>
      <div
        style={{
          paddingLeft: '15px',
          paddingRight: '15px',
          marginTop: '15px',
          marginBottom: '15px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <Button variant='contained' onClick={() => router.push('/dashboards/domain/')}>
          Filter
        </Button>
        <Button variant='contained' onClick={handleReset} color='error'>
          Reset
        </Button>
      </div>
    </Fragment>
  )
}

export default DomainForm