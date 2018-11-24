module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'cors-tester-web',
      script    : 'web/bin/www',
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000
      }
    },
    {
      name      : 'cors-tester-api',
      script    : 'api/bin/www',
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
        PORT: 4001
      }
    },{
      name      : 'cors-tester-api-cors',
      script    : 'api-cors/bin/www',
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
        PORT: 4002
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   *
   * Step1 (initiate, one time step): pm2 deploy ecosystem.config.js  production setup
   * Step2:  pm2 deploy ecosystem.config.js  production
   */
  deploy : {
    production : {
      user : 'joe',
      host : '182.254.242.31',
      ref  : 'origin/master',
      repo : 'git@github.com:choelea/cors-tester.git',
      path : '/home/joe/nodejsapp/cors-tester',
      'post-deploy' : 'pm2 reload ecosystem.config.js --env production'
    },
    install : {
      user : 'joe',
      host : '182.254.242.31',
      ref  : 'origin/master',
      repo : 'git@github.com:choelea/cors-tester.git',
      path : '/home/joe/nodejsapp/cors-tester',
      'post-deploy' : 'cd api && npm install && cd ../api-cors && npm install && cd ../web && npm install'
    }
  }
};
