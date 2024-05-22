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
              sx={{ height: '36px', minHeight: '36px', margin: '0rem', '& .MuiAccordionSummary-content': { margin: '0 !important' } }}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.7rem' }}><Icon fontSize='0.85rem' icon='tabler:world-pin' /> Country</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
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
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
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
              sx={{ height: '36px', minHeight: '36px', margin: '0rem', '& .MuiAccordionSummary-content': { margin: '0 !important' } }}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.7rem' }}><Icon fontSize='0.85rem' icon='tabler:building-community' /> City</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
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
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
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
              sx={{ height: '36px', minHeight: '36px', margin: '0rem', '& .MuiAccordionSummary-content': { margin: '0 !important' } }}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.7rem' }}><Icon fontSize='0.85rem' icon='tabler:businessplan' /> Business</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
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
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
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
              sx={{ height: '36px', minHeight: '36px', margin: '0rem', '& .MuiAccordionSummary-content': { margin: '0 !important' } }}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.7rem' }}><Icon fontSize='0.85rem' icon='tabler:category' /> Category</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='category'
                name='category'
                label='Category'
                select
                fullWidth
                SelectProps={{
                  MenuProps, multiple: true, value: filter.category, onChange: handleFilterChange
                }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' }, '& .MuiInputLabel-root': { fontSize: '0.7rem', marginTop: '4px' } }}
              >
                {['category1', 'category2'].map(name => (
                  <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25', marginBottom: '0' }} key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </CustomTextField>
              <CustomTextField
                id='subcategory'
                name='subcategory'
                label='Subcategory'
                select
                fullWidth
                SelectProps={{
                  MenuProps, multiple: true, value: filter.category, onChange: handleFilterChange
                }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' }, '& .MuiInputLabel-root': { fontSize: '0.7rem', marginTop: '4px' } }}
              >
                {['category1', 'category2'].map(name => (
                  <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25', marginBottom: '0' }} key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </CustomTextField>
              <RadioGroup sx={{ fontSize: '0.7375rem !important', lineHeight: '0', padding: '0', margin: '0' }} aria-label='quiz' name='radioFilter' value={filter.radioFilter} onChange={handleFilterChange}>
                <FormControlLabel sx={{ height: '1.5rem', fontSize: '0.7375rem !important', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25', '& .MuiTypography-root': { fontSize: '0.7375rem !important' } }} value='email' control={<Radio />} label='Email' />
                <FormControlLabel sx={{ height: '1.5rem', fontSize: '0.7375rem !important', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25', '& .MuiTypography-root': { fontSize: '0.7375rem !important' } }} value='phone' control={<Radio />} label='Phone' />
                <FormControlLabel sx={{ height: '1.5rem', fontSize: '0.7375rem !important', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25', '& .MuiTypography-root': { fontSize: '0.7375rem !important' } }} value='domain' control={<Radio />} label='Domain' />
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
              sx={{ height: '36px', minHeight: '36px', margin: '0rem', '& .MuiAccordionSummary-content': { margin: '0 !important' } }}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.7rem' }}><Icon fontSize='0.85rem' icon='tabler:file-search' /> Search</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
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
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
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
          height: '28px',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <Button variant='contained' sx={{ fontSize: '0.7375rem !important' }} onClick={() => router.push('/dashboards/locations/')}>
          <Icon icon='tabler:filter' style={{ marginRight: '0.3rem', fontSize: '0.7375rem' }} />Filter
        </Button>
        <Button variant='contained' sx={{ fontSize: '0.7375rem !important' }} onClick={handleReset} color='error'>
          <Icon icon='tabler:restore' style={{ marginRight: '0.3rem', fontSize: '0.7375rem' }} /> Reset
        </Button>
      </div>
    </>
  )
}
