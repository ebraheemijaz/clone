import React, { useCallback, useState } from 'react'
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
  company: '',
  industry: '',
  revenue: [],
  revenueGrowth: [],
  ebit: [],
  ebitda: [],
  employees: []
}

export default function DomainForm() {
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

  return (
    <>
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
              // value={filter.country}
              // onChange={handleFilterChange}
            ></CustomTextField>
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
            <Typography>Select Company</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='country'
              name='country'
              fullWidth
              // value={filter.country}
              // onChange={handleFilterChange}
            ></CustomTextField>
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
            <Typography>Select Industry</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='industry'
              name='industry'
              select
              fullWidth
              // defaultValue={filter.industry}
              SelectProps={{
                // value: filter.industry,
                displayEmpty: true
                // onChange: handleFilterChange
              }}
            >
              <MenuItem value=''>Select Industry</MenuItem>
              <MenuItem value='industry1'>Industry 1</MenuItem>
              <MenuItem value='industry2'>Industry 2</MenuItem>
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
            <Typography>Select Industry</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTextField
              id='revenueGrowth'
              name='revenueGrowth'
              select
              fullWidth
              SelectProps={{
                MenuProps,
                multiple: true,
                value: filter.revenueGrowth,
                onChange: handleFilterChange
              }}
            >
              {revenuegrowth.map(name => (
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
        <Button variant='contained' color='error'>
          Reset
        </Button>
      </div>
    </>
  )
}
