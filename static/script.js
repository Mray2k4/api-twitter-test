function listAdd() {

   fetch('/api/character')           //api for the get request
  .then(response => response.json())
  .then(function(data){
	console.log(data)

	const unorderList = document.getElementById('list');
    const properties = Object.keys(data);
    properties.forEach(function(key) {
        const listItem = document.createElement('li');
        const textNode = document.createTextNode(key + ': ' + data[key]);
        listItem.appendChild(textNode);
        unorderList.appendChild(listItem)
    })
  });
  
}