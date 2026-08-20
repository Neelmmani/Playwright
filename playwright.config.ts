import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  fullyParallel: true,

  workers: 1,

  retries: 0,

  reporter: [
    ['html']
  ],

  use: {
    headless: false,

    storageState: 'playwright/.auth/user.json',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
      }
    }
  ]
});