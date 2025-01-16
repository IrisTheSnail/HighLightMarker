
export const initialize = () => {
  // chrome.contextMenus.onClicked.addListener(genericOnClick);
    
  let contextMenuId : string | number = chrome.contextMenus.create({
    title: 'Test parent item',
    contexts: [
      'all'
    ],
    id: "coo coo"
  });
}
