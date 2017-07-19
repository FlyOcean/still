	$('.first-button img').click( function(){
		$('.bgColor').slideUp();
		$('.first-page').slideUp();
		setTimeout( function(){
			open();
		},500)
	})
	function open(){
		$( '.door_lt' ).animate({ left : '-40%' },1000,"linear");
		$( '.door_rt' ).animate({ right : '-40%' },1000,"linear");
	}
	function close(){
		$( '.door_lt' ).animate({ left : 0 },1000,"linear");
		$( '.door_rt' ).animate({ right : 0 },1000,"swing");
	}
	function iconDown(){
		$( '.icon_up' ).hide();
		$( '.icon_down' ).show();
	}
	function iconUp(){
		$( '.icon_up' ).show();
		$( '.icon_down' ).hide();
	}
	function count(){
		var count = 1;
		if(count==1){
			$( '.door_lt' ).show();
			$( '.door_rt' ).show();
			setTimeout(function(){
				close();
			},100)
			count=2;
		}
		if(count == 2){
			setTimeout(function(){
				open();
			},1500)
			count=3;
		}
		if(count == 3){
			setTimeout(function(){
				$( '.door_lt' ).hide();
				$( '.door_rt' ).hide();
			},2500)
		}
	}
	var index = 0;
	var floorNum = document.getElementsByClassName('floor');
    var mySwiper = new Swiper('.swiper-container',{
		// direction : 'vertical ',
		touchRatio : 0.3,
       onSlideChangeStart: function(swiper){
	      ++index;
	      	if( swiper.activeIndex == index){
		      	floorNum[0].innerHTML = index+1;
		      	iconUp();
		      }else{
		      	index-=2;
		      	floorNum[0].innerHTML = index+1;
		      	iconDown();
		      }
		      if(swiper.activeIndex == 5){
		      	setTimeout(function(){
					$('.button').show();
		      	},1500)
		      }else{
		      	$('.button').hide();
		      }
	    },
	    onSlideChangeEnd: function(swiper){
	    	for (var i = 0; i < 6; i++) {
	    		if( swiper.activeIndex == i ){
	    			$('.word').eq(i).addClass('animate');
	    			// $('.swiper-slide').eq(i).addClass('show');
	    		}else{
	    			$('.word').eq(i).removeClass('animate');
	    			// $('.swiper-slide').eq(i).removeClass('show');
	    		}
	    	}
	    }
	})
	$('.goPage').click(function(){
		count();
		setTimeout(function(){
			mySwiper.slideNext();
		},1200)
	})
	$('.button').click(function(){
		location.href = "https://shop13304079.wxrrd.com/goods/107884766"
	})
	$("html").css('height',$(window).height());
	$("body").css('height',$(window).height());
	$(".first-page").css('height',$(window).height());
	$(".bgColor").css('height',$(window).height());
	$('.main').css('height',$(window).height());
	$('.outline').css('height',$(window).height());
	$('.door_lt').css('height',$(window).height());
	$('.door_rt').css('height',$(window).height());
	$( '.container' ).css('height',$(window).height());
	$( '.swiper-slide' ).css( 'height',$(window).height() )
	$('.main').swipe({
	    swipeUp:function(){
	        count();
			setTimeout(function(){
				mySwiper.slideNext();
			},1200)
	    },
	    swipeRight:function(){
	    	 count();
			setTimeout(function(){
				mySwiper.slideNext();
			},1200)
	    },
	    swipeLeft:function(){
	    	count();
			setTimeout(function(){
				mySwiper.slidePrev();
			},1200)
	    },
	    swipeDown:function(){
	        count();
			setTimeout(function(){
				mySwiper.slidePrev();
			},1200)
	    }
	});
	$('.music').click(function(){
		var music = document.getElementById("music"); 
	    if(music.paused){ 
	        music.play(); 
	    }else{ 
	        music.pause(); 
	    } 
	})