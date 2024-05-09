import React, { useCallback, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Typography from '@mui/material/Typography'
import CustomTextField from 'src/@core/components/mui/text-field'
import { FormControlLabel, MenuItem, Radio, RadioGroup } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRouter } from 'next/router'

const revenuegrowth = ['< -15%', '-15% - 0%', '0% - 25%', '25% - 50%', '> 50%']

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

const defaultFilters = {
  country: '',
  city: '',
  business: '',
  category: [],
  subCategory: [],
  radioFilter: '',
  search: '',
}

export default function LocationForm() {
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
    <>
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Country</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='country'
              name='country'
              fullWidth
              value={filter.country}
              placeholder='Country Code'
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
            <Typography>City</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='city'
              name='city'
              fullWidth
              value={filter.city}
              placeholder='Address info city'
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
            <Typography>Business</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='business'
              name='business'
              fullWidth
              defaultValue={filter.business}
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
            <Typography>Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='category'
              name='category'
              label='Category'
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
            <CustomTextField
              sx={{ mt: 4 }}
              id='subcategory'
              name='subcategory'
              label='Subcategory'
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
            <RadioGroup sx={{ mt: 4 }} aria-label='quiz' name='radioFilter' value={filter.radioFilter} onChange={handleFilterChange}>
              <FormControlLabel value='email' control={<Radio />} label='Email' />
              <FormControlLabel value='phone' control={<Radio />} label='Phone' />
              <FormControlLabel value='domain' control={<Radio />} label='Domain' />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      </div >
      <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
        <Accordion>
          <AccordionSummary
            id='panel-header-1'
            aria-controls='panel-content-1'
            expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
          >
            <Typography>Search</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='search'
              name='search'
              fullWidth
              defaultValue={filter.search}
              onChange={handleFilterChange}
            >
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
        <Button variant='contained' onClick={() => router.push('/dashboards/locations/')}>Filter</Button>
        <Button variant='contained' onClick={handleReset} color='error'>
          Reset
        </Button>
      </div>
    </>
  )
}
