function show()
 {
     let inputelement1= document.querySelector('#first');
     
     

     let inputvalue= inputelement1.value;

    

     let head= document.querySelector('h1 ');
     

     let headcontent= document.querySelector('h1 > span ').innerHTML=inputvalue ;
     
     alert('‘The message has been sent on the given number');
    
    }