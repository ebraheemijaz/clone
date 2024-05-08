import CompanyForm from './CompanySideForm'
import DomainForm from './DomainSideForm'
import LocationForm from './LocationSideForm'

const navigation = () => {
  return [
    {
      title: 'Company Search',
      icon: 'tabler:input-search',
      path: '/dashboards/companies',
      form: <CompanyForm />,
      children: [
        {
          title: '',
          path: ''
        }
      ]
    },
    {
      title: 'Domain Search',
      icon: 'tabler:world-search',
      path: '/dashboards/domain',
      form: <DomainForm />,
      children: [
        {
          title: '',
          path: ''
        }
      ]
    },
    {
      title: 'Locations',
      icon: 'tabler:map-pin',
      path: '/dashboards/locations',
      form: <LocationForm />,
      children: [
        {
          title: '',
          path: ''
        }
      ]
    },
    {
      title: 'My Companies',
      icon: 'tabler:building',
      path: '/apps/email'
    },
    {
      title: 'My Domains',
      icon: 'tabler:world-www',
      path: '/apps/email'
    },
    {
      title: 'Enrichments',
      icon: 'tabler:users',
      path: '/apps/email'
    },
    {
      title: 'Log Out',
      icon: 'tabler:logout',
      path: '/apps/email'
    }
  ]
}

export default navigation
