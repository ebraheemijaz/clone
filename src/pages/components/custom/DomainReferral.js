import React, { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Popover from '@mui/material/Popover'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    icon: 'tabler:shadow',
    title: 'Domain Authority',
    amount: '0',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Domain Authority is a metric developed by Moz that predicts a website's 
    ranking potential on search engine results pages based on various factors like 
    link profile and quality. In general, the closer the indicator is to 100, the more 
    likely the domain has a good domain authority.`
  },
  {
    icon: 'tabler:globe',
    title: 'Content Volume',
    amount: 'Giant',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Content Volume refer to the number of individual web pages within a website 
    that have been discovered and indexed by search engine bots during the 
    crawling process.`
  },
  {
    icon: 'tabler:mail',
    title: 'Backlinks',
    amount: '2,625,468',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Backlinks are hyperlinks from external websites that direct users to a specific 
    webpage, serving as an endorsement and influencing search engine rankings and
    website authority.`
  },
  {
    icon: 'tabler:external-link',
    title: 'Spam Score',
    amount: '1',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Spam Score is a metric used to assess the likelihood of backlinks 
    being from spammy or low-quality sources, helping to evaluate the credibility and
    impact of inbound links.`
  },
  {
    icon: 'tabler:star',
    title: 'Ref Subdomains',
    amount: '11,773',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Referring Subdomains represent the number of unique subdomains from which
    backlinks originate, indicating the diversity of sources linking to a specific 
    webpage or website.`
  },
  {
    icon: 'tabler:star',
    title: 'Referring Domains',
    amount: '9415',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Referring Domains indicates the number of unique websites or domains that 
    contain at least one "nofollow" backlink, which instructs search engines not to 
    pass authority to the linked webpage.`
  },
  {
    icon: 'tabler:star',
    title: 'Referring IPs',
    amount: '4893',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Referring  IPs represent the number of unique IP addresses from which 
    backlinks originate, indicating the diversity of individual sources linking to a 
    specific webpage or website.`
  },
  {
    icon: 'tabler:discount-2',
    title: 'Referring Subnets',
    amount: '2572',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Referring Subnets refer to the number of unique IP address ranges or subnets 
    from which backlinks originate, providing insights into the geographic distribution
    and network diversity of referring sources. Google will give significantly more link
    power if inbound links are on different C-class IP addresses.`
  }
]

function DomainReferral() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget)
    setOpenIndex(index) // Set the index of the clicked item
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenIndex(null) // Reset the openIndex when closing the popover
  }

  const open = Boolean(anchorEl)

  return (
    <Card
      sx={{
        height: { md: '500px', lg: '510px', xl: '550px' }
      }}
    >
      <CardHeader
        title='Domain Referrals'
        // action={
        //   <OptionsMenu
        //     options={['Last Week', 'Last Month', 'Last Year']}
        //     iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
        //   />
        // }
      />
      <CardContent>
        {data.map((item, index) => {
          const popoverOpen = openIndex === index // Check if the current index matches the openIndex state

          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                mb: index !== data.length - 1 ? 4.5 : undefined
              }}
            >
              <Avatar variant='rounded' sx={{ mr: 4, width: 34, height: 34 }}>
                <Icon icon={item.icon} />
              </Avatar>
              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant='h6'>{item.title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 4, color: 'text.secondary' }}>{item.amount}</Typography>
                  <Icon
                    icon={item.alertIcon}
                    aria-describedby={item.title}
                    onClick={event => handleClick(event, index)} // Pass index to identify which item is clicked
                    style={{ cursor: 'pointer' }}
                  />
                  <Popover
                    id={item.title}
                    open={popoverOpen} // Use popoverOpen to control the individual popover state
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <Typography
                      sx={{ p: 2, width: '250px', maxHeight: '350px', fontSize: '0.7rem', textAlign: 'justify' }}
                    >
                      {item.tooltipText}
                    </Typography>
                  </Popover>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default DomainReferral
