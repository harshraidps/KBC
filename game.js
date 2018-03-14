	var q1=0,q2=0,q3=0,q4=0,q5=0,q6=0,q7=0,q8=0,q9=0,q10=0,q11=0,q12=0,q13=0,q14=0,q15=0,q16=0;
    var qcount=0;
			function win1(){
			if(q1==0){q1=1;
			document.getElementById('q1b').style.backgroundColor='gold';
			document.getElementById('q1b').style.color='white';
			setTimeout(green1,1500);
			setTimeout(rup2,3500);	
            qcount=1;			
			}
			}
			function green1(){document.getElementById('q1b').style.backgroundColor='green';}
			function rup1(){
			document.getElementById("ra1").style.backgroundColor="gold";
			document.getElementById("rb1").style.backgroundColor="gold";
			document.getElementById("ra16").style.backgroundColor="blue";
			document.getElementById("rb16").style.backgroundColor="blue";
			document.getElementById("rc16").style.backgroundColor="blue";
			}
			function rup2(){
			document.getElementById("ra2").style.backgroundColor="gold";
			document.getElementById("rb2").style.backgroundColor="gold";
			document.getElementById("ra1").style.backgroundColor="transparent";
			document.getElementById("rb1").style.backgroundColor="transparent";
			currentSlide(2);
			}
			
			function loose1a(){
			if(q1==0){q1=1;
			document.getElementById('q1a').style.backgroundColor='gold';
			document.getElementById('q1a').style.color='white';
			setTimeout(green1,2000);
			setTimeout(red1a,2000);
			}
			}
			function red1a(){document.getElementById('q1a').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose1c(){
			if(q1==0){q1=1;
			document.getElementById('q1c').style.backgroundColor='gold';
			document.getElementById('q1c').style.color='white';
			setTimeout(green1,2000);
			setTimeout(red1c,2000);
			}
			}
			function red1c(){document.getElementById('q1c').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose1d(){
			if(q1==0){q1=1;
			document.getElementById('q1d').style.backgroundColor='gold';
			document.getElementById('q1d').style.color='white';
			setTimeout(green1,2000);
			setTimeout(red1d,2000);
			}
			}
			function red1d(){document.getElementById('q1d').style.backgroundColor='red'; setTimeout(money,1500);}
			
			
			
			
			
			
			function win2(){
			if(q2==0){q2=1;
			document.getElementById('q2d').style.backgroundColor='gold';
			document.getElementById('q2d').style.color='white';
			setTimeout(green2,1500);
			setTimeout(rup3,3500);	
            qcount=2;			
			}
			}
			function green2(){document.getElementById('q2d').style.backgroundColor='green';}
			function rup3(){
			document.getElementById("ra3").style.backgroundColor="gold";
			document.getElementById("rb3").style.backgroundColor="gold";
			document.getElementById("ra2").style.backgroundColor="transparent";
			document.getElementById("rb2").style.backgroundColor="transparent";
			currentSlide(3);
			}
			
			function loose2a(){
			if(q2==0){q2=1;
			document.getElementById('q2a').style.backgroundColor='gold';
			document.getElementById('q2a').style.color='white';
			setTimeout(green2,2000);
			setTimeout(red2a,2000);
			}
			}
			function red2a(){document.getElementById('q2a').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose2c(){
			if(q2==0){q2=1;
			document.getElementById('q2c').style.backgroundColor='gold';
			document.getElementById('q2c').style.color='white';
			setTimeout(green2,2000);
			setTimeout(red12,2000);
			}
			}
			function red2c(){document.getElementById('q2c').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose2b(){
			if(q2==0){q2=1;
			document.getElementById('q2b').style.backgroundColor='gold';
			document.getElementById('q2b').style.color='white';
			setTimeout(green2,2000);
			setTimeout(red2b,2000);
			}
			}
			function red2b(){document.getElementById('q2b').style.backgroundColor='red'; setTimeout(money,1500);}
			
			
			
			
			
			function win3(){
			if(q3==0){q3=1;
			document.getElementById('q3a').style.backgroundColor='gold';
			document.getElementById('q3a').style.color='white';
			setTimeout(green3,1500);
			setTimeout(rup4,3500);	
            qcount=3;			
			}
			}
			function green3(){document.getElementById('q3a').style.backgroundColor='green';}
			function rup4(){
			document.getElementById("ra4").style.backgroundColor="gold";
			document.getElementById("rb4").style.backgroundColor="gold";
			document.getElementById("ra3").style.backgroundColor="transparent";
			document.getElementById("rb3").style.backgroundColor="transparent";
			currentSlide(4);
			}
			
			function loose3d(){
			if(q3==0){q3=1;
			document.getElementById('q3d').style.backgroundColor='gold';
			document.getElementById('q3d').style.color='white';
			setTimeout(green3,3000);
			setTimeout(red3d,3000);
			}
			}
			function red3d(){document.getElementById('q3d').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose3c(){
			if(q3==0){q3=1;
			document.getElementById('q3c').style.backgroundColor='gold';
			document.getElementById('q3c').style.color='white';
			setTimeout(green3,3000);
			setTimeout(red3c,3000);
			}
			}
			function red3c(){document.getElementById('q3c').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose3b(){
			if(q3==0){q3=1;
			document.getElementById('q3b').style.backgroundColor='gold';
			document.getElementById('q3b').style.color='white';
			setTimeout(green3,3000);
			setTimeout(red3b,3000);
			}
			}
			function red3b(){document.getElementById('q3b').style.backgroundColor='red'; setTimeout(money,1500);}
			
	
			function win4(){
			if(q4==0){q4=1;
			document.getElementById('q4d').style.backgroundColor='gold';
			document.getElementById('q4d').style.color='white';
			setTimeout(green4,1500);
			setTimeout(rup5,3500);	
             qcount=4;			
			}
			}
			function green4(){document.getElementById('q4d').style.backgroundColor='green';}
			function rup5(){
			document.getElementById("ra5").style.backgroundColor="gold";
			document.getElementById("rb5").style.backgroundColor="gold";
			document.getElementById("ra4").style.backgroundColor="transparent";
			document.getElementById("rb4").style.backgroundColor="transparent";
			currentSlide(5);
			}
			
			function loose4a(){
			if(q4==0){q4=1;
			document.getElementById('q4a').style.backgroundColor='gold';
			document.getElementById('q4a').style.color='white';
			setTimeout(green4,4000);
			setTimeout(red4a,4000);
			}
			}
			function red4a(){document.getElementById('q4a').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose4c(){
			if(q4==0){q4=1;
			document.getElementById('q4c').style.backgroundColor='gold';
			document.getElementById('q4c').style.color='white';
			setTimeout(green4,4000);
			setTimeout(red14,4000);
			}
			}
			function red4c(){document.getElementById('q4c').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose4b(){
			if(q4==0){q4=1;
			document.getElementById('q4b').style.backgroundColor='gold';
			document.getElementById('q4b').style.color='white';
			setTimeout(green4,4000);
			setTimeout(red4b,4000);
			}
			}
			function red4b(){document.getElementById('q4b').style.backgroundColor='red'; setTimeout(money,1500);}
			
			
			
			function win5(){
			if(q5==0){q5=5;
			document.getElementById('q5b').style.backgroundColor='gold';
			document.getElementById('q5b').style.color='white';
			setTimeout(green5,1500);
			setTimeout(rup6,3500);	
             qcount=5;			
			}
			}
			function green5(){document.getElementById('q5b').style.backgroundColor='green';}
			function rup6(){
			document.getElementById("ra6").style.backgroundColor="gold";
			document.getElementById("rb6").style.backgroundColor="gold";
			document.getElementById("ra5").style.backgroundColor="green";
			document.getElementById("rb5").style.backgroundColor="green";
			currentSlide(6);
			}
			
			function loose5a(){
			if(q5==0){q5=5;
			document.getElementById('q5a').style.backgroundColor='gold';
			document.getElementById('q5a').style.color='white';
			setTimeout(green5,2000);
			setTimeout(red5a,2000);
			}
			}
			function red5a(){document.getElementById('q5a').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose5c(){
			if(q5==0){q5=5;
			document.getElementById('q5c').style.backgroundColor='gold';
			document.getElementById('q5c').style.color='white';
			setTimeout(green5,2000);
			setTimeout(red5c,2000);
			}
			}
			function red5c(){document.getElementById('q5c').style.backgroundColor='red'; setTimeout(money,1500);}
			function loose5d(){
			if(q5==0){q5=5;
			document.getElementById('q5d').style.backgroundColor='gold';
			document.getElementById('q5d').style.color='white';
			setTimeout(green5,2000);
			setTimeout(red5d,2000);
			}
			}
			function red5d(){document.getElementById('q5d').style.backgroundColor='red'; setTimeout(money,1500);}
			
			
			function win6(){
			if(q6==0){q6=6;
			document.getElementById('q6c').style.backgroundColor='gold';
			document.getElementById('q6c').style.color='white';
			setTimeout(green6,1500);
			setTimeout(rup7,3500);	
             qcount=6;			
			}
			}
			function green6(){document.getElementById('q6c').style.backgroundColor='green';}
			function rup7(){
			document.getElementById("ra7").style.backgroundColor="gold";
			document.getElementById("rb7").style.backgroundColor="gold";
			document.getElementById("ra6").style.backgroundColor="transparent";
			document.getElementById("rb6").style.backgroundColor="transparent";
			currentSlide(7);
			}
			
			function loose6a(){
			if(q6==0){q6=6;
			document.getElementById('q6a').style.backgroundColor='gold';
			document.getElementById('q6a').style.color='white';
			setTimeout(green6,2000);
			setTimeout(red6a,2000);
			}
			}
			function red6a(){document.getElementById('q6a').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose6b(){
			if(q6==0){q6=6;
			document.getElementById('q6b').style.backgroundColor='gold';
			document.getElementById('q6b').style.color='white';
			setTimeout(green6,2000);
			setTimeout(red6b,2000);
			}
			}
			function red6b(){document.getElementById('q6b').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose6d(){
			if(q6==0){q6=6;
			document.getElementById('q6d').style.backgroundColor='gold';
			document.getElementById('q6d').style.color='white';
			setTimeout(green6,2000);
			setTimeout(red6d,2000);
			}
			}
			function red6d(){document.getElementById('q6d').style.backgroundColor='red'; setTimeout(money5,1500);}
			
			
				function win7(){
			if(q7==0){q7=1;
			document.getElementById('q7b').style.backgroundColor='gold';
			document.getElementById('q7b').style.color='white';
			setTimeout(green7,1500);
			setTimeout(rup8,3500);	
             qcount=7;			
			}
			}
			function green7(){document.getElementById('q7b').style.backgroundColor='green';}
			function rup8(){
			document.getElementById("ra8").style.backgroundColor="gold";
			document.getElementById("rb8").style.backgroundColor="gold";
			document.getElementById("ra7").style.backgroundColor="transparent";
			document.getElementById("rb7").style.backgroundColor="transparent";
			currentSlide(8);
			}
			
			function loose7a(){
			if(q7==0){q7=7;
			document.getElementById('q7a').style.backgroundColor='gold';
			document.getElementById('q7a').style.color='white';
			setTimeout(green7,2000);
			setTimeout(red7a,2000);
			}
			}
			function red7a(){document.getElementById('q7a').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose7c(){
			if(q7==0){q7=7;
			document.getElementById('q7c').style.backgroundColor='gold';
			document.getElementById('q7c').style.color='white';
			setTimeout(green7,2000);
			setTimeout(red7c,2000);
			}
			}
			function red7c(){document.getElementById('q7c').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose7d(){
			if(q7==0){q7=7;
			document.getElementById('q7d').style.backgroundColor='gold';
			document.getElementById('q7d').style.color='white';
			setTimeout(green7,2000);
			setTimeout(red7d,2000);
			}
			}
			function red7d(){document.getElementById('q7d').style.backgroundColor='red'; setTimeout(money5,1500);}
			
			function win8(){
			if(q8==0){q8=1;
			document.getElementById('q8a').style.backgroundColor='gold';
			document.getElementById('q8a').style.color='white';
			setTimeout(green8,1500);
			setTimeout(rup9,2500);	
             qcount=8;			
			}
			}
			function green8(){document.getElementById('q8a').style.backgroundColor='green';}
			function rup9(){
			document.getElementById("ra9").style.backgroundColor="gold";
			document.getElementById("rb9").style.backgroundColor="gold";
			document.getElementById("ra8").style.backgroundColor="transparent";
			document.getElementById("rb8").style.backgroundColor="transparent";
			currentSlide(9);
			}
			
			function loose8d(){
			if(q8==0){q8=1;
			document.getElementById('q8d').style.backgroundColor='gold';
			document.getElementById('q8d').style.color='white';
			setTimeout(green8,2000);
			setTimeout(red8d,2000);
			}
			}
			function red8d(){document.getElementById('q8d').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose8c(){
			if(q8==0){q8=1;
			document.getElementById('q8c').style.backgroundColor='gold';
			document.getElementById('q8c').style.color='white';
			setTimeout(green8,2000);
			setTimeout(red8c,2000);
			}
			}
			function red8c(){document.getElementById('q8c').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose8b(){
			if(q8==0){q8=1;
			document.getElementById('q8b').style.backgroundColor='gold';
			document.getElementById('q8b').style.color='white';
			setTimeout(green8,2000);
			setTimeout(red8b,2000);
			}
			}
			function red8b(){document.getElementById('q8b').style.backgroundColor='red'; setTimeout(money5,1500);}
			
			
			function win9(){
			if(q9==0){q9=9;
			document.getElementById('q9c').style.backgroundColor='gold';
			document.getElementById('q9c').style.color='white';
			setTimeout(green9,1500);
			setTimeout(rup10,3500);	
             qcount=9;			
			}
			}
			function green9(){document.getElementById('q9c').style.backgroundColor='green';}
			function rup10(){
			document.getElementById("ra10").style.backgroundColor="gold";
			document.getElementById("rb10").style.backgroundColor="gold";
			document.getElementById("ra9").style.backgroundColor="transparent";
			document.getElementById("rb9").style.backgroundColor="transparent";
			currentSlide(10);
			}
			
			function loose9a(){
			if(q9==0){q9=9;
			document.getElementById('q9a').style.backgroundColor='gold';
			document.getElementById('q9a').style.color='white';
			setTimeout(green9,2000);
			setTimeout(red9a,2000);
			}
			}
			function red9a(){document.getElementById('q9a').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose9b(){
			if(q9==0){q9=9;
			document.getElementById('q9b').style.backgroundColor='gold';
			document.getElementById('q9b').style.color='white';
			setTimeout(green9,2000);
			setTimeout(red9b,2000);
			}
			}
			function red9b(){document.getElementById('q9b').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose9d(){
			if(q9==0){q9=9;
			document.getElementById('q9d').style.backgroundColor='gold';
			document.getElementById('q9d').style.color='white';
			setTimeout(green9,2000);
			setTimeout(red9d,2000);
			}
			}
			function red9d(){document.getElementById('q9d').style.backgroundColor='red'; setTimeout(money5,1500);}
			
			
			function win10(){
			if(q10==0){q10=10;
			document.getElementById('q10b').style.backgroundColor='gold';
			document.getElementById('q10b').style.color='white';
			setTimeout(green10,1500);
			setTimeout(rup11,3500);
             qcount=10;
            }
			
			}
			function green10(){document.getElementById('q10b').style.backgroundColor='green';}
			function rup11(){
				
				swal("Dear player your <br/><h2><img src='jiob.png' width='75' height='75'/> Jackpot</h2> <br/>question has been unlocked In this question you will not be able to use any of the Liflines If left");
			document.getElementById("ra11").style.backgroundColor="gold";
			document.getElementById("rb11").style.backgroundColor="gold";
			document.getElementById("ra10").style.backgroundColor="green";
			document.getElementById("rb10").style.backgroundColor="green";
			document.getElementById("ra16").style.backgroundColor="red";
			document.getElementById("rb16").style.backgroundColor="red";
			document.getElementById("rc16").style.backgroundColor="red";
			document.getElementById("jio").src="jio.png";
			currentSlide(11);
			}
			
				
			
			function loose10a(){
			if(q10==0){q10=10;
			document.getElementById('q10a').style.backgroundColor='gold';
			document.getElementById('q10a').style.color='white';
			setTimeout(green10,2000);
			setTimeout(red10a,2000);
			}
			}
			function red10a(){document.getElementById('q10a').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose10c(){
			if(q10==0){q10=10;
			document.getElementById('q10c').style.backgroundColor='gold';
			document.getElementById('q10c').style.color='white';
			setTimeout(green10,2000);
			setTimeout(red10c,2000);
			}
			}
			function red10c(){document.getElementById('q10c').style.backgroundColor='red'; setTimeout(money5,1500);}
			function loose10d(){
			if(q10==0){q10=10;
			document.getElementById('q10d').style.backgroundColor='gold';
			document.getElementById('q10d').style.color='white';
			setTimeout(green10,2000);
			setTimeout(red10d,2000);
			}
			}
			function red10d(){document.getElementById('q10d').style.backgroundColor='red'; setTimeout(money5,1500);}
			
			function win11(){
			if(q11==0){q11=1;
			document.getElementById('q11d').style.backgroundColor='gold';
			document.getElementById('q11d').style.color='white';
			setTimeout(green11,1500);
			setTimeout(rup12,3500);	
            	 qcount=11;		
			}
			}
			function green11(){document.getElementById('q11d').style.backgroundColor='green';}
			function rup12(){
			document.getElementById("ra12").style.backgroundColor="gold";
			document.getElementById("rb12").style.backgroundColor="gold";
			document.getElementById("ra11").style.backgroundColor="transparent";
			document.getElementById("rb11").style.backgroundColor="transparent";
			currentSlide(12);
			}
			
			function loose11a(){
			if(q11==0){q11=1;
			document.getElementById('q11a').style.backgroundColor='gold';
			document.getElementById('q11a').style.color='white';
			setTimeout(green11,2000);
			setTimeout(red11a,2000);
			}
			}
			function red11a(){document.getElementById('q11a').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose11c(){
			if(q11==0){q11=1;
			document.getElementById('q11c').style.backgroundColor='gold';
			document.getElementById('q11c').style.color='white';
			setTimeout(green11,2000);
			setTimeout(red11c,2000);
			}
			}
			function red11c(){document.getElementById('q11c').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose11b(){
			if(q11==0){q11=1;
			document.getElementById('q11b').style.backgroundColor='gold';
			document.getElementById('q11b').style.color='white';
			setTimeout(green11,2000);
			setTimeout(red11b,2000);
			}
			}
			function red11b(){document.getElementById('q11b').style.backgroundColor='red'; setTimeout(money10,1500);}
			
				function win12(){
			if(q12==0){q12=12;
			document.getElementById('q12c').style.backgroundColor='gold';
			document.getElementById('q12c').style.color='white';
			setTimeout(green12,1500);
			setTimeout(rup13,3500);	
            	 qcount=12;		
			}
			}
			function green12(){document.getElementById('q12c').style.backgroundColor='green';}
			function rup13(){
			document.getElementById("ra13").style.backgroundColor="gold";
			document.getElementById("rb13").style.backgroundColor="gold";
			document.getElementById("ra12").style.backgroundColor="transparent";
			document.getElementById("rb12").style.backgroundColor="transparent";
			currentSlide(13);
			}
function loose12a(){
			if(q12==0){q12=12;
			document.getElementById('q12a').style.backgroundColor='gold';
			document.getElementById('q12a').style.color='white';
			setTimeout(green12,2000);
			setTimeout(red12a,2000);
			}
			}
			function red12a(){document.getElementById('q12a').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose12b(){
			if(q12==0){q12=12;
			document.getElementById('q12b').style.backgroundColor='gold';
			document.getElementById('q12b').style.color='white';
			setTimeout(green12,2000);
			setTimeout(red12b,2000);
			}
			}
			function red12b(){document.getElementById('q12b').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose12d(){
			if(q12==0){q12=12;
			document.getElementById('q12d').style.backgroundColor='gold';
			document.getElementById('q12d').style.color='white';
			setTimeout(green12,2000);
			setTimeout(red12d,2000);
			}
			}
			function red12d(){document.getElementById('q12d').style.backgroundColor='red'; setTimeout(money10,1500);}
			
			
			
			function win13(){
			if(q13==0){q13=1;
			document.getElementById('q13a').style.backgroundColor='gold';
			document.getElementById('q13a').style.color='white';
			setTimeout(green13,1500);
			setTimeout(rup14,2500);	
            	 qcount=13;		
			}
			}
			function green13(){document.getElementById('q13a').style.backgroundColor='green';}
			function rup14(){
			document.getElementById("ra14").style.backgroundColor="gold";
			document.getElementById("rb14").style.backgroundColor="gold";
			document.getElementById("ra13").style.backgroundColor="transparent";
			document.getElementById("rb13").style.backgroundColor="transparent";
			currentSlide(14);
			}
			
			function loose13d(){
			if(q13==0){q13=1;
			document.getElementById('q13d').style.backgroundColor='gold';
			document.getElementById('q13d').style.color='white';
			setTimeout(green13,2000);
			setTimeout(red13d,2000);
			}
			}
			function red13d(){document.getElementById('q13d').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose13c(){
			if(q13==0){q13=1;
			document.getElementById('q13c').style.backgroundColor='gold';
			document.getElementById('q13c').style.color='white';
			setTimeout(green13,2000);
			setTimeout(red13c,2000);
			}
			}
			function red13c(){document.getElementById('q13c').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose13b(){
			if(q13==0){q13=1;
			document.getElementById('q13b').style.backgroundColor='gold';
			document.getElementById('q13b').style.color='white';
			setTimeout(green13,2000);
			setTimeout(red13b,2000);
			}
			}
			function red13b(){document.getElementById('q13b').style.backgroundColor='red'; setTimeout(money10,1500);}
			
				function win14(){
			if(q14==0){q14=1;
			document.getElementById('q14d').style.backgroundColor='gold';
			document.getElementById('q14d').style.color='white';
			setTimeout(green14,1500);
			setTimeout(rup15,3500);	
            	 qcount=14;		
			}
			}
			function green14(){document.getElementById('q14d').style.backgroundColor='green';}
			function rup15(){
			document.getElementById("ra15").style.backgroundColor="orange";
			document.getElementById("rb15").style.backgroundColor="orange";
			document.getElementById("ra14").style.backgroundColor="transparent";
			document.getElementById("rb14").style.backgroundColor="transparent";
			currentSlide(15);
			}
			
			function loose14a(){
			if(q14==0){q14=1;
			document.getElementById('q14a').style.backgroundColor='gold';
			document.getElementById('q14a').style.color='white';
			setTimeout(green14,2000);
			setTimeout(red14a,2000);
			}
			}
			function red14a(){document.getElementById('q14a').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose14c(){
			if(q14==0){q14=1;
			document.getElementById('q14c').style.backgroundColor='gold';
			document.getElementById('q14c').style.color='white';
			setTimeout(green14,2000);
			setTimeout(red14c,2000);
			}
			}
			function red14c(){document.getElementById('q14c').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose14b(){
			if(q14==0){q14=1;
			document.getElementById('q14b').style.backgroundColor='gold';
			document.getElementById('q14b').style.color='white';
			setTimeout(green14,2000);
			setTimeout(red14b,2000);
			}
			}
			function red14b(){document.getElementById('q14b').style.backgroundColor='red'; setTimeout(money10,1500);}
			
			function win15(){
			if(q15==0){q15=15;
			document.getElementById('q15c').style.backgroundColor='gold';
			document.getElementById('q15c').style.color='white';
			setTimeout(green15,1500);
			setTimeout(rup16,3500);	
            qcount=15;			
			}
			}
			function green15(){document.getElementById('q15c').style.backgroundColor='green';}
			function rup16(){
			document.getElementById("ra16").style.backgroundColor="green";
			document.getElementById("rb16").style.backgroundColor="green";
			document.getElementById("ra15").style.backgroundColor="transparent";
			document.getElementById("rb15").style.backgroundColor="transparent";
			currentSlide(16);
			}
function loose15a(){
			if(q15==0){q15=15;
			document.getElementById('q15a').style.backgroundColor='gold';
			document.getElementById('q15a').style.color='white';
			setTimeout(green15,2000);
			setTimeout(red15a,2000);
			}
			}
			function red15a(){document.getElementById('q15a').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose15b(){
			if(q15==0){q15=15;
			document.getElementById('q15b').style.backgroundColor='gold';
			document.getElementById('q15b').style.color='white';
			setTimeout(green15,2000);
			setTimeout(red15b,2000);
			}
			}
			function red15b(){document.getElementById('q15b').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose15d(){
			if(q15==0){q15=15;
			document.getElementById('q15d').style.backgroundColor='gold';
			document.getElementById('q15d').style.color='white';
			setTimeout(green15,2000);
			setTimeout(red15d,2000);
			}
			}
			function red15d(){document.getElementById('q15d').style.backgroundColor='red'; setTimeout(money10,1500);}
			
			
			
			
			function win16(){
			if(q16==0){q16=1;
			document.getElementById('q16a').style.backgroundColor='gold';
			document.getElementById('q16a').style.color='white';
			setTimeout(green16,1500);}
            }
		      
			function green16(){document.getElementById('q16a').style.backgroundColor='green';setTimeout(money16,1500);}
			function loose16d(){
			if(q16==0){q16=1;
			document.getElementById('q16d').style.backgroundColor='gold';
			document.getElementById('q16d').style.color='white';
			setTimeout(green16,2000);
			setTimeout(red16d,2000);}
			}
			function red16d(){document.getElementById('q16d').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose16c(){
			if(q16==0){q16=1;
			document.getElementById('q16c').style.backgroundColor='gold';
			document.getElementById('q16c').style.color='white';
			setTimeout(green16,2000);
			setTimeout(red16c,2000);
			}
			}
			function red16c(){document.getElementById('q16c').style.backgroundColor='red'; setTimeout(money10,1500);}
			function loose16b(){
			if(q16==0){q16=1;
			document.getElementById('q16b').style.backgroundColor='gold';
			document.getElementById('q16b').style.color='white';
			setTimeout(green16,2000);
			setTimeout(red16b,2000);
			}
			}
			function red16b(){document.getElementById('q16b').style.backgroundColor='red'; setTimeout(money10,1500);}
			
			
		
	
			function money10(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money10b,4000);
			}
			function money10b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last10").style.display = "block";
            }
            function money5(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money5b,4000);
			}
			function money5b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last5").style.display = "block";
            }
            function quit(){
                alert('Sure! If want to quit then click on Quit Final');
                document.getElementById("q").style.display = "none";
				document.getElementById("q2").style.display = "none";
				document.getElementById("qf").style.display = "block";
				document.getElementById("qf2").style.display = "block";
            }
            function QuitFinal(){
               if(qcount==1){
                  money1();
               }
                if(qcount==2){
                  money2();
               }
                if(qcount==3){
                  money3();
               }
                if(qcount==4){
                  money4();
               }
                if(qcount==5){
                  money5();
               }
                if(qcount==6){
                  money6();
               }
                if(qcount==7){
                  money7();
               }
                if(qcount==8){
                  money8();
               }
                if(qcount==9){
                  money9();
               }
                if(qcount==10){
                  money10();
               }
                if(qcount==11){
                  money11();
               }
                if(qcount==12){
                  money12();
               }
                if(qcount==13){
                  money13();
               }
                if(qcount==14){
                  money14();
               }
                if(qcount==15){
                  money15();
               }
                
            }
            
            function money1(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money1b,4000);
			}
			function money1b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last1").style.display = "block";
            }
            
            function money2(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money2b,4000);
			}
			function money2b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last2").style.display = "block";
            }
            function money3(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money3b,4000);
			}
			function money3b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last3").style.display = "block";
            }
            function money4(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money4b,4000);
			}
			function money4b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last4").style.display = "block";
            }
            function money6(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money6b,4000);
			}
			function money6b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last6").style.display = "block";
            }
            function money7(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money7b,4000);
			}
			function money7b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last7").style.display = "block";
            }
            function money8(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money8b,4000);
			}
			function money8b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last8").style.display = "block";
            }
            function money9(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money9b,4000);
			}
			function money9b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last9").style.display = "block";
            }
            function money14(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money14b,4000);
			}
			function money14b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last14").style.display = "block";
            }
            function money11(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money11b,4000);
			}
			function money11b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last11").style.display = "block";
            }
            function money12(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money12b,4000);
			}
			function money12b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last12").style.display = "block";
            }
            function money13(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money13b,4000);
			}
			function money13b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last13").style.display = "block";
            }
             function money15(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money15b,4000);
			}
			function money15b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last15").style.display = "block";
            }
			function money16(){
				document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
                             setTimeout(money16b,4000);
			}
			function money16b()
			{
				document.getElementById("preloader").style.display = "none";
				document.getElementById("last16").style.display = "block";
				swal('<h1>CONGRATS !</h1><br/>You have become Crorepati');
            }
           function money(){
	document.getElementById("myDiv").style.display = "none";
				document.getElementById("preloader").style.display = "block";
				swal('You have lost the game');
                             setTimeout(maxLastb,4000);
}
function maxLastb(){
	document.getElementById("preloader").style.display = "none";
				document.getElementById("lastPart").style.display = "block";
}

var life1=0,life2=0,life3=0;
function ap(){
	if(life1==0){
		document.getElementById("ap").style.color="black";
		document.getElementById("ap").style.backgroundColor="white";
	if(qcount==0){
		swal("According to Audience => Correct Answer is - B<br/>:)");
	}
	if(qcount==1){
		swal("According to Audience => Correct Answer is - D<br/>:)");
	}
	if(qcount==2){
		swal("According to Audience => Correct Answer is - A<br/>:)");
	}
	if(qcount==3){
		swal("According to Audience => Correct Answer is - D<br/>:)");
	}
	if(qcount==4){
		swal("According to Audience => Correct Answer is - B<br/>:)");
	}
	if(qcount==5){
		swal("According to Audience => Correct Answer is - C<br/>:)");
	}
	if(qcount==6){
		swal("According to Audience => Correct Answer is - B<br/>:)");
	}
	if(qcount==7){
		swal("According to Audience => Correct Answer is - A<br/>:)");
	}
	if(qcount==8){
		swal("According to Audience => Correct Answer is - C<br/>:)");
	}
	if(qcount==9){
		swal("According to Audience => Correct Answer is - B<br/>:)");
	}
	if(qcount==10){
		swal("According to Audience => Correct Answer is - D<br/>:)");
	}
	if(qcount==11){
		swal("According to Audience => Correct Answer is - C<br/>:)");
	}
	if(qcount==12){
		swal("According to Audience => Correct Answer is - A<br/>:)");
	}
	if(qcount==13){
		swal("According to Audience => Correct Answer is - D<br/>:)");
	}
	if(qcount==14){
		swal("According to Audience => Correct Answer is - C<br/>:)");
	}
	if(qcount==15){
		swal("I CANNOT HELP YOU (JIO JACKPOT)");
	}
}
	life1=1;
}
function pof(){
	if(life3==0){
		document.getElementById("pof").style.color="black";
		document.getElementById("pof").style.backgroundColor="white";
	if(qcount==0){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - B<br/>:)");
	}
    if(qcount==1){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - D<br/>:)");
	}
	if(qcount==2){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - A<br/>:)");
	}
	if(qcount==3){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - D<br/>:)");
	}
	if(qcount==4){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - B<br/>:)");
	}
	if(qcount==5){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - C<br/>:)");
	}
	if(qcount==6){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - B<br/>:)");
	}
	if(qcount==7){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - A<br/>:)");
	}
	if(qcount==8){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - C<br/>:)");
	}
	if(qcount==9){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - B<br/>:)");
	}
	if(qcount==10){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - D<br/>:)");
	}
	if(qcount==11){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - C<br/>:)");
	}
	if(qcount==12){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - A<br/>:)");
	}
	if(qcount==13){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - D<br/>:)");
	}
	if(qcount==14){
	 swal("<center>HELLO!</center><br/>I AM COMPUTER<br/>As per me Answer is - C<br/>:)");
	}
	if(qcount==15){
		swal("I CANNOT HELP YOU (JIO JACKPOT)");
	}
	}
	life3=3;
}
function ff(){
	document.getElementById("ff").style.color="black";
	document.getElementById("ff").style.backgroundColor="white";
	if(life2==0){
  if(qcount==0){
   swal("Either B or C");
  }
  if(qcount==1){
   swal("Either A or D");
  }
  if(qcount==2){
   swal("Either C or A");
  }
  if(qcount==3){
   swal("Either D or C");
  }
  if(qcount==4){
   swal("Either A or B");
  }
  if(qcount==5){
   swal("Either C or A");
  }
  if(qcount==6){
   swal("Either B or D");
  }
  if(qcount==7){
   swal("Either A or C");
  }
  if(qcount==8){
   swal("Either B or C");
  }
  if(qcount==9){
   swal("Either B or C");
  }
  if(qcount==10){
   swal("Either D or B");
  }
  if(qcount==11){
   swal("Either C or A");
  }
  if(qcount==12){
   swal("Either A or C");
  }
  if(qcount==13){
   swal("Either D or C");
  }
  if(qcount==14){
   swal("Either D or C");
  }
  if(qcount==15){
		swal("I CANNOT HELP YOU (JIO JACKPOT)");
	}
	}
	life2=2;
}
