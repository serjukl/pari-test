var req = new XMLHttpRequest();  
req.open('GET', 'https://www.mydomain.com/', false);   
req.send(null);  
if(req.status == 200) {
    console.log(req.responseText)
   dump(req.responseText);
}