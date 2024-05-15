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
      <Box sx={{ px: 3 }}>
        <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '15px', marginBottom: '15px' }}>
          <Accordion>
            <AccordionSummary
              id='panel-header-1'
              aria-controls='panel-content-1'
              expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
            >
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}><Icon fontSize='1rem' icon='tabler:world-pin' /> Country</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTextField
                id='country'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='1.25rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Search'
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}><Icon fontSize='1rem' icon='tabler:world-www' /> Domain</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTextField
                id='domain'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon fontSize='1.25rem' icon='tabler:search' />
                    </InputAdornment>
                  )
                }}
                placeholder='Search'
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}><Icon fontSize='1rem' icon='tabler:cell' /> Type</Typography>
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
                <MenuItem value=''>Type</MenuItem>
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}><Icon fontSize='1rem' icon='tabler:category-plus' /> Category</Typography>
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}><Icon fontSize='1rem' icon='tabler:resize' /> Sizes</Typography>
              <Typography></Typography>
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
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}><Icon fontSize='1rem' icon='tabler:lock-access' /> Domain Authority</Typography>
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
        <Button variant='contained' onClick={() => router.push('/dashboards/domain/')}>
          <Icon fontSize='1.25rem' icon='tabler:filter' style={{ marginRight: '0.3rem' }} />Filter
        </Button>
        <Button variant='contained' onClick={handleReset} color='error'>
          <Icon fontSize='1.25rem' icon='tabler:restore' style={{ marginRight: '0.3rem' }} /> Reset
        </Button>
      </div>
    </Fragment>
  )
}

export default DomainForm