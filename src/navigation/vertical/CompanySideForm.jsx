import React, { useCallback, useEffect, useState } from 'react'
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
import { Box, width } from '@mui/system'

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

const revenue = [
  '< 100K EUR',
  '100 - 500K EUR',
  '0.5 - 1 Mn. EUR',
  '1 - 5 Mn. EUR',
  '5 - 10 Mn. EUR',
  '10 - 25 Mn. EUR',
  '25 - 50 Mn. EUR',
  '50 - 100 Mn. EUR',
  '100 - 500 Mn. EUR',
  '> 500 Mn. EUR'
]

const revenuegrowth = ['< -15%', '-15% - 0%', '0% - 25%', '25% - 50%', '> 50%']

const ebit = ['< 0%', '0% - 10%', '10% - 25%', '25% - 50%', '> 50%']

const noOfEmployees = ['0 - 10', '10 - 50', '50 - 100', '100 - 500', '500 - 1000', '> 1000']

const defaultFilters = {
  country: '',
  company: '',
  industry: '',
  revenue: [],
  revenueGrowth: [],
  ebit: [],
  ebitda: [],
  employees: []
}

export default function CompanyForm() {
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
          <Accordion >
            <AccordionSummary
              id='hbjhbjhb-header-1'
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:building-skyscraper' /> Company</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='company'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='0.85rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Search'
                name='company'
                fullWidth
                value={filter.company}
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:building-factory-2' /> Industry</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='industry'
                name='industry'
                select
                fullWidth
                defaultValue={filter.industry}
                SelectProps={{
                  value: filter.industry,
                  displayEmpty: true,
                  onChange: handleFilterChange
                }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} value=''>Industry</MenuItem>
                <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} value='type1'>Industry 1</MenuItem>
                <MenuItem sx={{ fontSize: '0.7375rem', lineHeight: '0.8rem', padding: '0.25rem', margin: '0.25' }} value='type2'>Industry 2</MenuItem>
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:trending-up-2' /> Revenue</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='revenue'
                name='revenue'
                select
                fullWidth
                SelectProps={{
                  MenuProps, multiple: true, value: filter.revenue, onChange: handleFilterChange
                }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {revenue.map(name => (
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:trending-up' /> Revenue Growth</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='revenueGrowth'
                name='revenueGrowth'
                select
                fullWidth
                SelectProps={{ MenuProps, multiple: true, value: filter.revenueGrowth, onChange: handleFilterChange }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {
                  revenuegrowth.map(name => (
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:wallet' /> EBIT %</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='ebit'
                name='ebit'
                select
                fullWidth
                SelectProps={{ MenuProps, multiple: true, value: filter.ebit, onChange: handleFilterChange }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {ebit.map(name => (
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:wallet' /> EBITDA %</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='ebitda'
                name='ebitda'
                select
                fullWidth
                SelectProps={{ MenuProps, multiple: true, value: filter.ebitda, onChange: handleFilterChange }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {ebit.map(name => (
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, fontSize: '0.85rem' }}><Icon fontSize='0.85rem' icon='tabler:users' /> Employees</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0.35rem' }}>
              <CustomTextField
                id='employees'
                name='employees'
                select
                fullWidth
                SelectProps={{ MenuProps, multiple: true, value: filter.employees, onChange: handleFilterChange }}
                sx={{ '& .MuiInputBase-input': { fontSize: '0.6375rem', lineHeight: '1.375em', padding: '0.25rem !important' } }}
              >
                {noOfEmployees.map(name => (
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
          paddingLeft: '10px',
          paddingRight: '10px',
          marginTop: '10px',
          marginBottom: '10px',
          width: '100%',
          height: '28px',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <Button variant='contained' sx={{ fontSize: '0.7375rem !important' }} onClick={() => router.push('/dashboards/companies/')}>
          <Icon icon='tabler:filter' style={{ marginRight: '0.3rem', fontSize: '0.7375rem' }} />Filter
        </Button>
        <Button variant='contained' sx={{ fontSize: '0.7375rem !important' }} onClick={handleReset} color='error'>
          <Icon icon='tabler:restore' style={{ marginRight: '0.3rem', fontSize: '0.7375rem' }} /> Reset
        </Button>
      </div>
    </>
  )
}
