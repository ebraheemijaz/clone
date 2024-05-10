import React, { useCallback, useEffect, useState } from 'react'
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
            <Typography>Company</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='company'
              name='company'
              fullWidth
              value={filter.company}
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
            <Typography>Industry</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
            >
              <MenuItem value=''>Industry</MenuItem>
              <MenuItem value='type1'>Industry 1</MenuItem>
              <MenuItem value='type2'>Industry 2</MenuItem>
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
            <Typography>Revenue</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='revenue'
              name='revenue'
              select
              fullWidth
              SelectProps={{
                MenuProps, multiple: true, value: filter.revenue, onChange: handleFilterChange
              }}
            >
              {revenue.map(name => (
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
            <Typography>Revenue Growth</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='revenueGrowth'
              name='revenueGrowth'
              select
              fullWidth
              SelectProps={{ MenuProps, multiple: true, value: filter.revenueGrowth, onChange: handleFilterChange }}
            >
              {
                revenuegrowth.map(name => (
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
            <Typography>EBIT %</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='ebit'
              name='ebit'
              select
              fullWidth
              SelectProps={{ MenuProps, multiple: true, value: filter.ebit, onChange: handleFilterChange }}
            >
              {ebit.map(name => (
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
            <Typography>EBITDA %</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='ebitda'
              name='ebitda'
              select
              fullWidth
              SelectProps={{ MenuProps, multiple: true, value: filter.ebitda, onChange: handleFilterChange }}
            >
              {ebit.map(name => (
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
            <Typography>Employees</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='employees'
              name='employees'
              select
              fullWidth
              SelectProps={{ MenuProps, multiple: true, value: filter.employees, onChange: handleFilterChange }}
            >
              {noOfEmployees.map(name => (
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
        <Button variant='contained' onClick={() => router.push('/dashboards/companies/')}>
          <Icon fontSize='1.25rem' icon='tabler:filter' style={{ marginRight: '0.3rem' }} />Filter
        </Button>
        <Button variant='contained' onClick={handleReset} color='error'>
          <Icon fontSize='1.25rem' icon='tabler:restore' style={{ marginRight: '0.3rem' }} /> Reset
        </Button>
      </div>
    </>
  )
}
