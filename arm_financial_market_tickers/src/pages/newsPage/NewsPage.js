import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import {
  newsFilterParams,
  getBaseEndPoint,
  API_TOKEN,
  buildIndustryOptions,
  buildCountryOptions,
  getTitleFromParam,
  entityIndustryEndpoint
} from '../../helper/constants';
import { NewsCard } from '../../components/newsCard/NewsCard';
import { SelectInput } from '../../components/selectInput/SelectInput';
import { ErrorAlert } from '../../components/errorAlert/ErrorAlert';
import './NewsPage.css';

const NewsPage = () => {
  const [industryValues, setIndustryValues] = useState('');
  const [countryValues, setCountryValues] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [newsList, setNewsList] = useState([]);
  const [industries, setIndustries] = useState([]);

  const history = useHistory();
  const { newsFilter } = useParams();

  const buildIndustryFilters = (values) => {
    if (values.length > 0) {
      const filterValues = values.map(industry => industry.value).join(',')

      setIndustryValues(`industries=${filterValues}&`)
    }
    else { setIndustryValues('') }
  };

  const buildCountryFilters = (values) => {
    if (values.length > 0) {
      const filterValues = values.map(industry => industry.value).join(',')

      setCountryValues(`countries=${filterValues}&`)
    }
    else { setCountryValues('') }
  };

  useEffect(() => {
    axios.get(`${entityIndustryEndpoint}?api_token=${API_TOKEN}`)
      .then(({ data }) => setIndustries(data.data))
  }, [])

  useEffect(() => {
    const isUrlParamValid = newsFilterParams.find(params => params === newsFilter);

    if (isUrlParamValid) {
      const endPoint = `${getBaseEndPoint(newsFilter)}?${industryValues}${countryValues}language=en&api_token=${API_TOKEN}`
      setIsFetching(true)
      setErrorMessage()

      axios.get(endPoint)
        .then(({ data }) => {
          setIsFetching(false)
          setNewsList(data)
        })
        .catch(({ response }) => {
          setErrorMessage(response.data.error.message)
          setIsFetching(false)
        })
    }
    else { history.replace('/') }
  }, [countryValues, history, industryValues, newsFilter])

  return (
    <div className="news-page-wrapper">
      <div className="header">
        <Link to="/" className="back">&#8592; Back to Home</Link>
        <h4>{getTitleFromParam(newsFilter)} News</h4>
      </div>
      <div className="select-group-wrapper">
        <SelectInput
          multiple
          name="industries"
          onChange={(values) => buildIndustryFilters(values)}
          options={buildIndustryOptions(industries)}
          placeholder="Select industries"
          label="Industries"
        />
        <SelectInput
          multiple
          name="countries"
          onChange={(values) => buildCountryFilters(values)}
          options={buildCountryOptions()}
          placeholder="Select countries"
          label="Countries"
        />
      </div>
      <div className="news-list-wrapper">
        <div>is fetching...</div>
        {
          isFetching
            ? <div>is fetching...</div>
            : newsList.map((news, id) => <NewsCard key={id} {...news} />)
        }
        {errorMessage && (<ErrorAlert errorMessage={errorMessage} />)}
      </div>
    </div>
  )
};

export default NewsPage
