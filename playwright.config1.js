import { devices, expect } from "@playwright/test";
import { off } from "node:cluster";
import { trace } from "node:console";

const config = ({

  testDir :'./tests',
  retries : 1,
  worker : 3,

  timeout: 30*1000,

  expect : {
    timeout: 5000
  },

  reporter : 'html',
projects : [
  {
 name : 'safari',
  use:{

    browserName: 'webkit',
    headless : false,
    screenshot : 'off', //'on',
    trace : 'off',//  'retain-on-failure',
    

  }
},
{
  name : 'chrome',
  use:{

    browserName: 'chromium',
    headless : false,
    screenshot : 'on', //'on',
    trace : 'on',//  'retain-on-failure',
    

  }
}
],

//viewport : { width: 720, height: 720 },
//...devices['iPhone 15 Pro'],
ignoreHttpsErrors : true,
permissions : ['geolocation'],

});

module.exports=config

