// let fetchData = fetch('https://fakestoreapi.com/products/1');
// console.log(fetchData);
// fetchData.then((response) => {
//     console.log(response);
// })

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))