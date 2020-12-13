window.onscroll = function() {
  scrollnavbar();
activatornavbar();};

function scrollnavbar() {
  var element=document.getElementById("navbar")
  var homediv=document.getElementById("homediv")

  var scrollThresh=homediv.offsetHeight/2;
  if (document.body.scrollTop >scrollThresh || document.documentElement.scrollTop > scrollThresh) {
    element.classList.add("scrolldown");
    element.classList.remove("scrollup");
    }
  else{
    {
      element.classList.add("scrollup");
    element.classList.remove("scrolldown");
  }
  
  }
}
var lol;
function activatornavbar(){

  	var scrollDistance = document.documentElement.scrollTop;
  	var allsections = document.getElementsByClassName('nav-link');
  	var mindistsec;
  	var mindist=1000000;
  	for(const section of allsections){
            secid=section.hash.slice(1).toString();
            //console.log(scrollDistance);
            //console.log(document.getElementById(secid).offsetTop);
            dist = Math.abs(scrollDistance-document.getElementById(secid).offsetTop);
            if (dist<mindist){
              mindist=dist;
              mindistsec=section
            }
            }
    console.log(mindist);
    for(const section of allsections){ 
      if (section==mindistsec){
              
              section.classList.add('active')
            }
            else{
              section.classList.remove('active')
            }

  	}
  	/*allsections.forEach(activate());
  function activate(value) {
  elem=value;
  lol=elem

 //id=elem.href;
  //alert(id)
  }
*/
	
/*document.getElementById("technology").offsetTop

  	$('.page-section').each(function(i) {




				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});*/
}


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-50
      });
    } 
  });
});
