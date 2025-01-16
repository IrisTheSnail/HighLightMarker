import { initialize } from './vite-project/src/startup'

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
  initialize()
});