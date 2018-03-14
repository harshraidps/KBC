if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
var num = Math.floor(Math.random() * 5+ 1);
var NameVar = localStorage.getItem("someVarName");
if(NameVar!=num){
if(num==1){xmlhttp.open("GET","kbc1.xml",false);}
if(num==2){xmlhttp.open("GET","kbc2.xml",false);}
if(num==3){xmlhttp.open("GET","kbc3.xml",false);}
if(num==4){xmlhttp.open("GET","kbc4.xml",false);}
if(num==5){xmlhttp.open("GET","kbc5.xml",false);}
}
else{
num = Math.floor(Math.random() * 5+ 1);
if(NameVar!=num){
if(num==1){xmlhttp.open("GET","kbc1.xml",false);}
if(num==2){xmlhttp.open("GET","kbc2.xml",false);}
if(num==3){xmlhttp.open("GET","kbc3.xml",false);}
if(num==4){xmlhttp.open("GET","kbc4.xml",false);}
if(num==5){xmlhttp.open("GET","kbc5.xml",false);}
}
else{
num = Math.floor(Math.random() * 5+ 1);
if(num==1){xmlhttp.open("GET","kbc1.xml",false);}
if(num==2){xmlhttp.open("GET","kbc2.xml",false);}
if(num==3){xmlhttp.open("GET","kbc3.xml",false);}
if(num==4){xmlhttp.open("GET","kbc4.xml",false);}
if(num==5){xmlhttp.open("GET","kbc5.xml",false);}
}
}
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
var someVarName = num;
localStorage.setItem("someVarName", someVarName);