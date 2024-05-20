import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'

// ** MUI Imports
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Custom Component Import
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { Box } from '@mui/system'

const CustomSubtitle = ({ subtitle }) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const truncatedSubtitle = subtitle.slice(0, 50) // Limit to 50 characters

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {showMore ? (
        <Typography sx={{ textAlign: 'justify' }}>
          {subtitle}
          <Button onClick={toggleShowMore} variant='text'>
            See less
          </Button>
        </Typography>
      ) : (
        <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'wrap', textAlign: 'justify' }}>
          {truncatedSubtitle} ...
          {subtitle.length > 50 && ( // Check if characters exceed 50
            <Button onClick={toggleShowMore} variant='text'>
              See more
            </Button>
          )}
        </Typography>
      )}
    </Box>
  )
}

const data = [
  {
    avatarIcon: 'tabler:briefcase',
    title: 'Ecommerce',
    subtitle:
      'E-Commerce is a comprehensive set of software tools and platforms designed to facilitate online buying and selling, including features like product management, payment processing, order fulfillment, and customer relationship management.',
    chipColor: '#7367F0',
    stats: '+18.2%',
    avatarColor: 'primary',
    chipText: 'than last week'
  },
  {
    avatarIcon: 'tabler:report-analytics',
    title: 'Analytics',
    subtitle:
      'Analytics refers to a range of methodologies, technologies, and tools designed to gather, process, analyze, and interpret data to derive insights, make informed decisions, and drive actions for business optimization and improvement. ',
    chipColor: '#28C76F',
    stats: '+18.2%',
    avatarColor: 'success',
    chipText: 'than last week'
  },
  {
    avatarIcon: 'tabler:credit-card',
    title: 'Database',
    subtitle:
      'Database is an organized collection of structured data stored electronically, allowing efficient retrieval, manipulation, and management of information for various applications and purposes.',
    chipColor: '#00CFE8',
    stats: '+18.2%',
    avatarColor: 'info',
    chipText: 'than last week'
  },
  {
    avatarIcon: 'tabler:code-circle',
    title: 'Programming',
    subtitle:
      'Programming Languages are formal languages comprising instructions and syntax rules used to create computer programs. They enable developers to write algorithms, implement logic, and build software applications for diverse purposes.',
    chipColor: '#FF9F43',
    stats: '+18.2%',
    avatarColor: 'warning',
    chipText: 'than last week'
  },
  {
    avatarIcon: 'tabler:browser-check',
    title: 'Web Servers',
    subtitle: `Web Servers are software applications or hardware devices that store, process, and deliver web content to users' browsers upon request. They facilitate the hosting and distribution of websites on the internet.`,
    chipColor: '#EA5455',
    stats: '+18.2%',
    avatarColor: 'error',
    chipText: 'than last week'
  },
  {
    avatarIcon: 'tabler:anchor',
    title: 'Technologies',
    subtitle:
      'Technologies encompass a diverse array of tools, frameworks, and platforms employed to develop, optimize, and maintain websites. These technologies aid in advertising, analytics, and user engagement.',
    chipColor: '#A8AAAE',
    stats: '+18.2%',
    avatarColor: 'secondary',
    chipText: 'than last week'
  }
]

const TechCard = props => {
  const theme = useTheme()

  // ** Props
  const {
    sx,
    stats,
    title,
    chipText,
    subtitle,
    avatarIcon,
    avatarSize = 44,
    iconSize = '1.75rem',
    chipColor = '#7367F0',
    avatarColor = 'primary'
  } = props

  return (
    <Card
      sx={{
        ...sx,
        borderBottom: `2px solid ${chipColor}`,
        transition: 'background-color 0.4s', // Smooth transition effect
        '&:hover': {
          borderBottom: `5px solid ${chipColor}`
        }
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 8 }}>
          <CustomAvatar
            skin='light'
            variant='rounded'
            color={avatarColor}
            sx={{ mb: 3.5, width: avatarSize, height: avatarSize }}
          >
            <Icon icon={avatarIcon} fontSize={iconSize} />
          </CustomAvatar>
          <Typography variant='h5' sx={{ mb: 1 }}>
            {title}
          </Typography>
        </Box>
        <CustomSubtitle subtitle={subtitle} />
      </CardContent>
    </Card>
  )
}

const KeyTechCard = () => (
  <Grid container spacing={6}>
    {data.map((item, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={6}>
        <TechCard {...item} />
      </Grid>
    ))}
  </Grid>
)

export default KeyTechCard
