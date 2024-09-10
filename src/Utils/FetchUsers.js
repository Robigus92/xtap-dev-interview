export function fetchData = () => {

  const userData= fetch('https://jsonplaceholder.typicode.com/posts'
  .then(respose => respose.json()));
return userData;
}