// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { Popover } from '@mui/material'
import { useState } from 'react'

const data = [
  {
    icon: 'tabler:external-link',
    title: 'Ongoing Link',
    amount: '61',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Outgoing Links refers to the number of hyperlinks present on a webpage that direct users to external websites or resources, enhancing navigation and providing additional information.`
  },
  {
    icon: 'tabler:link',
    title: 'Internal Link',
    amount: '60',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Internal Links are the hyperlinks embedded within a webpage that direct users to other pages within the same website, facilitating navigation and promoting user engagement and exploration.`
  },
  {
    icon: 'tabler:circles-relation',
    title: 'External Link',
    amount: '1',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `External Links refers to hyperlinks on a webpage that lead users to other websites or external resources outside the domain, providing supplementary information and enhancing user experience.`
  },
  {
    icon: 'tabler:photo-plus',
    title: 'Total Image',
    amount: 'Minimal',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Total Images refer to the aggregate number of visual elements, such as photos, illustrations, icons, or graphics, embedded within the content of a webpage or website.`
  },
  {
    icon: 'tabler:image-in-picture',
    title: 'Image on Page',
    amount: 'Minimal',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Images on Page represents the quantity of visual content, including photos, illustrations, or graphics, directly embedded within the content of a specific webpage on a website.`
  },
  {
    icon: 'tabler:code',
    title: 'HTML Site',
    amount: 'Extensive',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `HTML size on page measures the total size of the HTML code comprising the content, structure, and formatting elements of a specific webpage, influencing page loading speed and user experience.`
  },
  {
    icon: 'tabler:device-ipad-code',
    title: 'Text/HTML',
    amount: 'Minimal',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Text/HTML ratio quantifies the proportion of text-based content compared to HTML markup within a webpage, indicating the textual richness and semantic relevance of the page's content.`
  },
  {
    icon: 'tabler:vocabulary',
    title: 'Words on Page',
    amount: 'Extensive',
    alertIcon: 'tabler:exclamation-circle',
    tooltipText: `Words on page represents the total count of textual content present within a specific webpage, encompassing all written information, including articles, paragraphs, headings, and other text-based elements.`
  }
]

function DomainStructure() {
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
        title='Domain Structure'
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

export default DomainStructure
