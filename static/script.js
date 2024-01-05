function listAdd() {

   fetch('/api/tweets')           //api for the get request
  .then(res => res.json())
  .then(function(data){
	console.log(data)

	// const unorderList = document.getElementById('list');
  //   const properties = Object.keys(data);
  //   properties.forEach(function(key) {
  //       const listItem = document.createElement('li');
  //       const textNode = document.createTextNode(key + ': ' + data[key]);
  //       listItem.appendChild(textNode);
  //       unorderList.appendChild(listItem)
  //   })
  });
  
}