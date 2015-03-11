function getWindowHeight() {
    var windowHeight=0;
    if (typeof(window.innerHeight)=='number') {
        windowHeight=window.innerHeight;
    } else {
        if (document.documentElement&& document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body&&document.body.clientHeight) {
                windowHeight=document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}
function getWindowWidth() {
 var windowWidth=0;
 if (typeof(window.innerWidth)=='number') {
  windowWidth=window.innerWidth;
    } else {
  if (document.documentElement&& document.documentElement.clientWidth) {
   windowWidth = document.documentElement.clientWidth;
        } else {
   if (document.body&&document.body.clientWidth) {
    windowWidth=document.body.clientWidth;
            }
        }
    }
 return windowWidth;
}
 
ny=getWindowHeight();
ny=ny+100;
nx=getWindowWidth();

$(document).ready(function(){
	$("body").css({
			'background-image': 'url(/ressources/images/backgrounds/entrees.jpg)',
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': nx+'px '+ny+'px',
	});
	$("#tabs_container").css({
			'overflow':'hidden',
		});
		
  $("#tabs_list > li > a").on("click", function(e){
    if($(this).parent().has("ul")) {
      e.preventDefault();
    }
	
	
	if($(this).is("#tabs-vin")) { 
		$("body").css({
			'background-image': 'url(/ressources/images/backgrounds/vins.jpg)',
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': nx+'px '+ny+'px',
		});
		$("#tabs_container").css({
			'overflow':'scroll',
		});
		
	}
	
	else if($(this).is("#tabs-ent")) {
		$('body').css({
			'background-image': 'url(/ressources/images/backgrounds/entrees.jpg)',
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': nx+'px '+ny+'px'
		});
		$("#tabs_container").css({
			'overflow':'hidden',
		});
    }
	else if($(this).is("#tabs-pat")) {
		$('body').css({
			'background-image': 'url(/ressources/images/backgrounds/pates.jpg)',
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': nx+'px '+ny+'px'
		});
		$("#tabs_container").css({
			'overflow':'hidden',
		});
    }
	else if($(this).is("#tabs-des")) {
		$('body').css({
			'background-image': 'url(/ressources/images/backgrounds/desserts.jpg)',
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': nx+'px '+ny+'px'
		});
		$("#tabs_container").css({
			'overflow':'scroll',
		});
    }
	else if($(this).is("#tabs-piz")) {
		$('body').css({
			'background-image': 'url(entrees.png)',
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': nx+'px '+ny+'px'
		});
		$("#tabs_container").css({
			'overflow':'scroll',
		});
		/*$("#tabs_vin").css({
			'display':'none',
		});*/
    }
	else if($(this).is("#tabs-pla")) {
		$('body').css({
			'background-image': 'url(entrees.png)',
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': nx+'px '+ny+'px'
		});
		$("#tabs_container").css({
			'overflow':'hidden',
		});
    } 
	$("#tabs_container").animate({ scrollTop: 0 }, 200);
  });
});


				
	
