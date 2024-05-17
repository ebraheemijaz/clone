import React, { Fragment, useCallback, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Typography from '@mui/material/Typography'
import CustomTextField from 'src/@core/components/mui/text-field'
import { InputAdornment, MenuItem } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRouter } from 'next/router'
import { Box } from '@mui/system'

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
      <Box sx={{ px: 6 }}>
        <div >
          <Accordion>
            <AccordionSummary
              id='panel-header-1'
              aria-controls='panel-content-1'
              expandIcon={<Icon fontSize='0.85rem' icon='tabler:chevron-down' />}
              sx={{ height: '36px', minHeight: '36px', margin: '0rem', '& .MuiAccordionSummary-content': { margin: '0 !important' } }}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:world-pin' /> Country</Typography>
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
                placeholder='Search'
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:world-www' /> Domain</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='domain'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='0.85rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Search'
                name='domain'
                fullWidth
                value={filter.domain}
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:cell' /> Type</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
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
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} value=''>Type</MenuItem>
                <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} value='type1'>type 1</MenuItem>
                <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} value='type2'>type 2</MenuItem>
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:category-plus' /> Category</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='category'
                name='category'
                select
                fullWidth
                SelectProps={{
                  MenuProps, multiple: true, value: filter.category, onChange: handleFilterChange
                }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {['category1', 'category2'].map(name => (
                  <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:resize' /> Sizes</Typography>
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='sizes'
                name='sizes'
                select
                fullWidth
                SelectProps={{ MenuProps, multiple: true, value: filter.sizes, onChange: handleFilterChange }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {
                  sizes.map(name => (
                    <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))
                }
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:lock-access' /> Domain Authority</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='domainAuth'
                name='domainAuth'
                select
                fullWidth
                SelectProps={{ MenuProps, multiple: true, value: filter.domainAuth, onChange: handleFilterChange }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {domainAuthority.map(name => (
                  <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
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
        <Button variant='contained' sx={{ fontSize: '0.7375rem !important' }} onClick={() => router.push('/dashboards/domain/')}>
          <Icon icon='tabler:filter' style={{ marginRight: '0.3rem', fontSize: '0.7375rem' }} />Filter
        </Button>
        <Button variant='contained' sx={{ fontSize: '0.7375rem !important' }} onClick={handleReset} color='error'>
          <Icon icon='tabler:restore' style={{ marginRight: '0.3rem', fontSize: '0.7375rem' }} /> Reset
        </Button>
      </div>
    </Fragment>
  )
}

export default DomainForm