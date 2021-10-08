# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This repo is hosted on [Chidi's technical assessment](https://chidi-arm-market-news.netlify.app/).

## NOTE: 
While testing the application, marketaux gives a limit of 100 API usage per day.
Also, the `Market Stats (time series)` does not exist on the free plan for marketaux, so no data is returned. However, I handled the error message sent from marketaux in that case.

## Assessment Task

marketaux has a public API available at https://www.marketaux.com/documentation that you can use to get finance information, including global financial news and  market performing.  
We would specifically like you to use the Finance & Market News endpoint to get  finance news filtered by countries and industries and Market Stats (time series)  filtered by industries, countries, 
You are allowed to consume other endpoints in the Api documentation that could aid  with your creative delivery, remember the emphasis of this task is on your ability to  create an aesthetically pleasing design as well as showing your ability to consume  APIs, you are free to use Angularjs, React or just the classic javascript 

## Technical Questions

1. How long did you spend on the coding test ?  
2. What would you add to your solution if you had more time ? If you did not spend  much time on the coding test, then use this as an opportunity to explain what you  would add.  
3. What was the most useful feature that was added to the latest version of your  chosen language ? Please include a snippet of code that shows how you have used it.  
4. How would you track down a performance issue in production? Have you ever had  to do this  ?  
5. How would you improve the Just marketaux that you just used ?  

### Answers to technical questions

1. I spent about 12 hours on the coding test

2. I will try to see how I can improve my User experience, maybe reconsider making the application have two pages and if its just one page, what design would i come up with. Maybe build a 404 page for when user tries to access an invalid route.

3. Most useful feature I used from ES-2020 was the OPTIONAL CHAINING. e.g `param?.split()`
  Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not. If it exists, great! If not, undefined will be returned without the app crashing.
  This is very useful as it handles undefined states of variables in an application.
  The code block below can be found in `src/helper/constant.js`, lines 16 - 34
  ```
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
  ```
  
4. A good understanding of how things work in the application will be helpful. Instances of unhandled possible undefined parameters that can cause an application to crash. Personally I have not used [SENTRY](https://sentry.io/for/performance/) to track down application crashing issues but my team has in the past. 
It sends an error log of the users browser to the application sentry account and reading the error log gives an insight to what the error might be.

5. marketaux API seems to be well documented, unfortunately, i was unable to find an endpoint that gives me a list of countries. So i had to manually add that myself in my constant file.
I did find an endpoint that gives a list of industries, which i used to fetch the industry list.
So my improvement for the maeketaux will be to add endpoint to fetch list of countries. Maybe they could also expand their free usage limit of 100 endpoints per day.
