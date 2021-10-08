export const API_TOKEN = 'i6yPVj14M54tq7b2A8U4lyoxh2Zd21MswsVSGiPJ';

const financeMarketEndPoint = 'https://api.marketaux.com/v1/news/all';

const marketStatsEndPoint = 'https://api.marketaux.com/v1/entity/stats/intraday';

export const entityIndustryEndpoint = 'https://api.marketaux.com/v1/entity/industry/list';

export const fetchIndustryErrorMessage = 'Failed to fetch list of industries for the select field. Please check your network.';

export const newsFilterParams = [
  'finance-market',
  'market-stats'
];

export const getTitleFromParam = (param) => {
  return param?.split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
};

export const buildIndustryOptions = (industries) => {
  return industries?.map(industry => ({
    'value': industry,
    'label': industry
  }))
};

const getValueFromCountry = (country) => {
  const splittedCountry = country?.split(' ')

  return splittedCountry[splittedCountry.length - 1]
    .replace(/[()]/g, '')
};

export const buildCountryOptions = () => {
  return countries.map(country => ({
    'value': getValueFromCountry(country),
    'label': country
  }))
};

export const getBaseEndPoint = (newsFilter) => {
  if (newsFilter === newsFilterParams[0]) {
    return financeMarketEndPoint
  };

  return marketStatsEndPoint
};

export const formatDate = (date) => {
  return new Date(date).toDateString();
};

export const landingPageImage = 'https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309?b=1&k=20&m=1312418309&s=170667a&w=0&h=IQjnPp5L9QsiXoLcqFrxOH_gqby80jDPKbu_TE-6_dY=';

const countries = [
  'Argentina (ar)',
  'Australia (au)',
  'Belgium (be)',
  'Brazil (br)',
  'Canada (ca)',
  'Switzerland (ch)',
  'Chile (cl)',
  'China (cn)',
  'Czech Republic (cz)',
  'Germany (de)',
  'Denmark (dk)',
  'Estonia (ee)',
  'Egypt (eg)',
  'Spain (es)',
  'European Union (eu)',
  'Finland (fi)',
  'France (fr)',
  'United Kingdom (gb)',
  'Global (global)',
  'Greece (gr)',
  'Hong Kong (hk)',
  'Hungary (hu)',
  'Indonesia (id)',
  'Ireland (ie)',
  'Israel (il)',
  'India (in)',
  'Iceland (is)',
  'Italy (it)',
  'Japan (jp)',
  'Korea (kr)',
  'Sri Lanka (lk)',
  'Lithuania (lt)',
  'Latvia (lv)',
  'Mexico (mx)',
  'Malaysia (my)',
  'Netherlands (nl)',
  'Norway (no)',
  'New Zealand (nz)',
  'Philippines (ph)',
  'Portugal (pt)',
  'Qatar (qa)',
  'Russian Federation (ru)',
  'Saudi Arabia (sa)',
  'Sweden (se)',
  'Turkey (tr)',
  'Taiwan (tw)',
  'United States (us)',
  'Venezuela (ve)',
  'South Africa (za)',
];
