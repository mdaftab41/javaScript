const option ={
    method: 'POST',
    body: JSON.stringify({
      title: 'Alam',
      body: 'complete',
      userId: 4,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
fetch('https://jsonplaceholder.typicode.com/posts',  option)
  .then((response) => response.json())
  .then((json) => console.log(json));

   