function genericOnClick(info : any){
  console.log('Standard context menu item clicked');
} 


export function onClick(){
  console.log("i execute")
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tabId = tabs[0].id;
    console.log("Tab ID:", tabId);
    console.log(window.document);
  });
}