// Iterate through the array. In each iteration of the loop:

// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)

var arrayLi = document.querySelectorAll('a')
for (var i = 0; i < arrayLi.length; i++) {
  var linknode = arrayLi[i];
  var link = linknode.getAttribute('href');
  var thumnbnailurl = youtube.generateThumbnailUrl(link)
  var thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumnbnailurl);
  
  linknode.appendChild(thumbnail);


}; 