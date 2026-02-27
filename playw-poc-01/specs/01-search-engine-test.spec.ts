import { test } from '@playwright/test';
import { StartPageHomePage } from '../pages/startpage-home-page';

test('Use a search engine', async ({ page }) => {

  // Initiate object
  const startPageHome = new StartPageHomePage(page);

  // Access link
  startPageHome.goToLink();

  // Input search
  startPageHome.inputSearch('bolas de basquete');

  // Click search button
  await startPageHome.clickBtnSearch();

  // Check if elements are displayed by id and text
  startPageHome.checkElementByIdContainText('Images', 'Images');
  
  startPageHome.checkElementByIdContainText('Videos', 'Videos');
  // Search: The following CSA option(s) are unsupported:
  // horizontalAlignment, verticalSpacing, horizontalAlignment,
  // verticalSpacing, horizontalAlignment, verticalSpacing

  startPageHome.checkElementByIdContainText('News', 'News');

});