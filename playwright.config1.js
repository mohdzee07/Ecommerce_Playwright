// @ts-check

const { devices } = require('@playwright/test');
const { worker } = require('node:cluster');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  //this timeout is for each test case execution

  //this is to re rum the falky test
  retries: 1, // this means the test will rerun for 1 time 

  //Run  test fils in parallel using workers
  worker:3, // it means 3 test files will run parallely

  timeout: 40 * 1000,
  //expect timeout is for assesrtion validation
  expect: {

    timeout: 40 * 1000,

  },
  reporter: 'html',

  projects: [
    {
      name: 'Chrome',

      use: {

        //browser we need to run the test in headless mode or headed mode

        browserName: 'chromium',

        headless: false,//it means the browser will be visible when the test is running, if we set it to true then the browser will run in background and we will not see the browser when the test is running
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

        screenshot: 'on', //captures screenshot of each step

        trace: 'retain-on-failure',

        // trace : 'on',//will genreate only when failed
        viewport : {width: 720 , height :720},

       // ...devices['Galaxy Note 3 landscape'] run on adnroid devices

       //to handle ssl certificeta error
       ignoreHTTPSErrors: true,

       //to handle location- where we get apop up to allow location
       permissions :['geolocation'],

       //to record a video only on failure

       video: 'retain-on-failure'

        

      }

    },

   {
name: 'Firefox execution',

      use: {

        //browser we need to run the test in headless mode or headed mode

        browserName: 'firefox',

        headless: false,//it means the browser will be visible when the test is running, if we set it to true then the browser will run in background and we will not see the browser when the test is running
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

        screenshot: 'on', //captures screenshot of each step

       // trace: 'retain-on-failure'

        trace : 'on',//will genreate only when failed

      }

    }



  ]

});