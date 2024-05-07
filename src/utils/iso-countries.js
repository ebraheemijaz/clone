import i18nIsoCountries from 'i18n-iso-countries';

// Load the country names and codes data
i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const getCountryCode = (countryName) => {
  try {
    const countryCode = i18nIsoCountries.getAlpha2Code(countryName, 'en');

    return countryCode || null;
  } catch (error) {
    console.error('Error getting country code:', error);

    return null;
  }
};

export default getCountryCode;
