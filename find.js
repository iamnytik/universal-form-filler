console.log('I am in find.js')
browser.storage.sync.get(['url', 'array'], function (result) {
  var storedUrl = result.url;
  var storedArray = result.array;

  // Now you can use storedUrl and storedArray in your popup.js
  console.log('Stored URL:', storedUrl);
  console.log('Stored Array:', storedArray);
  alert('hello='+storedUrl )
});

