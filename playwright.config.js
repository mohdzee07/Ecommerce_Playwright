// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { blob } from 'node:stream/consumers';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig(
  {
  testDir: './tests',


  //this is to re rum the falky test
  retries: 1, // this means the test will rerun for 1 time 

  workers :1,

  //this timeout is for each test case execution
  timeout: 40 * 1000,
  //expect timeout is for assesrtion validation
  expect: {

    timeout: 40 * 1000,

  },
   reporter: process.env.CI ? 'blob' : 'html',


  name: 'Chrome execution',

  use: {

    //browser we need to run the test in headless mode or headed mode

    browserName: 'chromium',

    headless: false,//it means the browser will be visible when the test is running, if we set it to true then the browser will run in background and we will not see the browser when the test is running
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

    screenshot: 'on', //captures screenshot of each step

    // trace: 'retain-on-failure',

    trace: 'on',//will genreate only when failed
    //viewport : {width: 720 , height :720}



  }


});