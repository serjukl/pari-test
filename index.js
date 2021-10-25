// var req = new XMLHttpRequest();  
// req.open('GET', 'http://www.mydomain.com/', false);   
// req.send(null);  
// if(req.status == 200) {
//     console.log(req.responseText)
//    dump(req.responseText);
// }

const url = 'https://news.ycombinator.com/'

axios.get(url)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error);
    })