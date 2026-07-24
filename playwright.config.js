import { expect } from "@playwright/test";
import { off } from "node:cluster";
import { trace } from "node:console";

const config = ({

  testDir :'./tests',
  retries : 2,
  

  timeout: 30*1000,

  expect : {
    timeout: 5000
  },

  reporter : 'html',

  use:{

    browserName: 'chromium',
    headless : false,
    screenshot : 'on', //'on',
    trace : 'on'//  'retain-on-failure'

  },



});

module.exports=config

