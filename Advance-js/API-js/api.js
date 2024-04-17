// fetch()  return a promise it is a  object
async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
   //console.log(response)
    const data = await response.json(); // convert response into json formate it take time so we use await here
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUser();
