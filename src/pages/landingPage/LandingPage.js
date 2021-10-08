import React from 'react';
import { Link } from 'react-router-dom';

import {
  getTitleFromParam,
  landingPageImage,
  newsFilterParams
} from '../../helper/constants';
import './landingPage.css';

export const LandingPage = () => (
  <div className="landing-page-wrapper">
    <img src={landingPageImage} alt="news representation" />
    <div className="explainer">What news do you want to see today ? &#128526;</div>
    <div className="button-wrapper">
      {newsFilterParams.map(params => (
        <Link
          key={params}
          to={params}
          className="link-button"
        >
          {getTitleFromParam(params)}
        </Link>
      ))}
    </div>
  </div>
);
