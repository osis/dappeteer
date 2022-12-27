import { Page } from 'playwright-core';

import { clickOnButton, clickOnElement } from '../../../helpers';
import { openAccountDropdown } from './helpers';
import { switchAccount } from './switchAccount';

export const deleteAccount =
  (page: Page) =>
  async (accountNumber: number): Promise<void> => {
    await page.bringToFront();

    if (accountNumber === 1) throw new SyntaxError('Account 1 cannot be deleted');
    await switchAccount(page)(accountNumber);

    await openAccountDropdown(page);
    await clickOnElement(page, 'Remove account');
    await clickOnButton(page, 'Remove');
    await page.waitForTimeout(1000);
  };
