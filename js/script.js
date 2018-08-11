var searchingHotel=document.querySelector(".search-button");
var popUp=document.querySelector(".search-pop-up-container");
searchingHotel.addEventListener("click", function (evt) {
	evt.preventDefault();
	popUp.classList.toggle("poping-up");
	
});
var adult=document.querySelector("#adult-counter-field");
var adultMinus=document.querySelector(".adult-minus");
var adultPlus=document.querySelector(".adult-plus");
var children=document.querySelector("#children-counter-field");
var childrenMinus=document.querySelector(".child-minus");
var childrenPlus=document.querySelector(".child-plus");
var buttonAll=document.querySelectorAll(".pop-up-form button");
var event=function(which,btn, sign){
	which.addEventListener("click", function (evt) {
	evt.preventDefault();
	var temp=0;
	if(btn){
		if(sign){
			temp=parseInt(adult.value, 10);
			adult.value=temp+1;
		}else{
			temp=parseInt(adult.value, 10);
			adult.value=temp-1;
		}

	}else{
		if(sign){
			temp=parseInt(children.value, 10);
			children.value=temp+1;
		}else{
			temp=parseInt(children.value, 10);
			children.value=temp-1;
		}		
	}
});	
}
event(adultMinus, true,false);
event(adultPlus, true,true);
event(childrenMinus, false,false);
event(childrenPlus, false,true);
