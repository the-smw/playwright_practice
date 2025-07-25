import { test as myTest } from '@playwright/test';

type login = {
    username: string;
    password: string;
};

const loginFixture = myTest.extend<login>({
    username: process.env.CI_USER || process.env.VALIDUSER,
    password: process.env.CI_PASS || process.env.VALIDPASS
});

export const test = loginFixture;
