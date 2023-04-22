// Add a click event listener to the button
document.getElementById('capture').addEventListener('click', function() {
    // Get the active tab's ID
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Capture the visible area of the tab
      chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(dataUrl) {
        // Create a link element to download the screenshot
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = dataUrl;
        document.body.appendChild(link);
        // Click the link to download the screenshot
        link.click();
        // Remove the link element from the DOM
        document.body.removeChild(link);
      });
    });
  });
  