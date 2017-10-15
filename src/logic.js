export const currencies = [
  'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 'HKD', 'HRK',
  'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP',
  'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR', 'EUR',
];

export const currencySet = new Set(currencies);

const safeTryJSON = res => res.text()
  .then(res => {
    try {
      return JSON.parse(res);
    } catch (err) {
      console.error(err);
      return res;
    }
  });


const get = url => fetch(url, {
  method: 'GET',
  credentials: 'omit',
}).then(res => safeTryJSON(res));

export const getState = (currency, amount) =>
  get(`http://fixerapi.appspot.com/convert?currency=${currency}&amount=${amount}`);
