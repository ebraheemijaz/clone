import React, { useCallback, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Typography from '@mui/material/Typography'
import CustomTextField from 'src/@core/components/mui/text-field'
import { FormControlLabel, InputAdornment, MenuItem, Radio, RadioGroup } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRouter } from 'next/router'
import { Box } from '@mui/system'

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
      <Box sx={{ px: 6 }}>
        <div >
          <Accordion>
            <AccordionSummary
              id='panel-header-1'
              aria-controls='panel-content-1'
              expandIcon={<Icon fontSize='0.85rem' icon='tabler:chevron-down' />}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:world-pin' /> Country</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTextField
                id='country'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='0.85rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Country Code'
                name='country'
                fullWidth
                value={filter.country}
                onChange={handleFilterChange}
              >
              </CustomTextField>
            </AccordionDetails>
          </Accordion>
        </div>
        <div >
          <Accordion>
            <AccordionSummary
              id='panel-header-1'
              aria-controls='panel-content-1'
              expandIcon={<Icon fontSize='0.85rem' icon='tabler:chevron-down' />}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:building-community' /> City</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTextField
                id='city'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='0.85rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Address info city'
                name='city'
                fullWidth
                value={filter.city}
                onChange={handleFilterChange}
              >
              </CustomTextField>
            </AccordionDetails>
          </Accordion>
        </div>
        <div >
          <Accordion>
            <AccordionSummary
              id='panel-header-1'
              aria-controls='panel-content-1'
              expandIcon={<Icon fontSize='0.85rem' icon='tabler:chevron-down' />}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:businessplan' /> Business</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTextField
                id='business'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='0.85rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Title'
                name='business'
                fullWidth
                defaultValue={filter.business}
                onChange={handleFilterChange}
              >
              </CustomTextField>
            </AccordionDetails>
          </Accordion>
        </div>
        <div >
          <Accordion>
            <AccordionSummary
              id='panel-header-1'
              aria-controls='panel-content-1'
              expandIcon={<Icon fontSize='0.85rem' icon='tabler:chevron-down' />}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:category' /> Category</Typography>
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
        <div >
          <Accordion>
            <AccordionSummary
              id='panel-header-1'
              aria-controls='panel-content-1'
              expandIcon={<Icon fontSize='0.85rem' icon='tabler:chevron-down' />}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:file-search' /> Search</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTextField
                id='search'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='0.85rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Search'
                name='search'
                fullWidth
                defaultValue={filter.search}
                onChange={handleFilterChange}
              >
              </CustomTextField>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
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
        <Button variant='contained' onClick={() => router.push('/dashboards/locations/')}>
          <Icon fontSize='0.85rem' icon='tabler:filter' style={{ marginRight: '0.3rem' }} />Filter
        </Button>
        <Button variant='contained' onClick={handleReset} color='error'>
          <Icon fontSize='0.85rem' icon='tabler:restore' style={{ marginRight: '0.3rem' }} /> Reset
        </Button>
      </div>
    </>
  )
}
