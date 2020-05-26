const ENVIRONMENT = {
  development: {
    BASE_URL: 'http://localhost:3000/',
    EVENT_LIST_URL: "data/events.json"
  },
  production: {
    BASE_URL: 'https://5pwc4.csb.app/',
    EVENT_LIST_URL: "data/events.json"
  }
};


export const ENV = ENVIRONMENT[process.env.NODE_ENV];