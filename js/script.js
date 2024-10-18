$(document).ready(function(){
	
	$("nav  ul").on("mouseenter  click " , function(){
		$("nav  nav").stop().slideDown();
	});   
		

	$("nav  ul").mouseleave( function(){
		$("nav  nav").stop().slideUp();
	}); 
	

	$(".last").blur( function(){
		$("nav  nav").stop().slideUp();
	}); 	


	setInterval( fading ,  1500 );
	let i = 2;
	function fading(){
		if(    $("#slide a").eq(1).css("display")  ==  "none"    ){
			$("#slide a").fadeIn(800);
			i = 2;
		} else {
			$("#slide a").eq(i).fadeOut(1000);
			i--;
		}
		
	}

	//======================팝업==============================
	const notice_a = document.querySelectorAll("#notice a");
	const black = document.getElementById("black");
	const pop_btn = document.querySelector("#black button");


	notice_a.forEach( i => {
		i.addEventListener("click" , ()=>{				
			black.style.display = "block";
		});
	});


	pop_btn.addEventListener("click" , ()=>{
		black.style.display = "none";
	});


	document.addEventListener("keydown" , (event)=> {
		if(event.key === "Escape")   black.style.display = "none";
	});
 
	
	
});////////////////////////////////전체 끝