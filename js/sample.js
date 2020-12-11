$(function(){
	$('.blog-content').on('mouseover', function(){
		$(this).addClass('active');
	});

	$('.blog-content').on('mouseleave',function(){
		$(this).removeClass('active');
	});

	let h = $('.logo').outerHeight(true);

	console.log(h);

	$('#drower-bg').css('top',h -1);
	


});

// ハンバーガー
$(function() {
	// ハンバーガーメニューが押された時
	$('#toggle').on('click',function(){
		console.log('aiuoe');
		$(this).toggleClass('on');
		$('.js-drower').toggleClass('on');
		
		let isActive = $(this).hasClass('on');
		toggleDrower(isActive);
	});
  });
  
  //ハンバーガーメニューでドロップダウン
	function toggleDrower(isActive) {
	  if (isActive) {
		// onになっていた時、メニューを表示
		$('#drower-bg').fadeIn(600);
	  } else {
		// onを外した時、メニューを非表示
		$('#drower-bg').fadeOut(600);
	  }
	}

// slider
$(function(){
	var $setElm = $('.viewer'),
	fadeSpeed = 1500,
	switchDelay = 3000;

	$setElm.each(function(){
		var targetObj = $(this);
		var findUl = targetObj.find('ul');
		var findLi = targetObj.find('li');
		var findLiFirst = targetObj.find('li:first');

		findLi.css({display:'block',opacity:'0',zIndex:'99'});
		findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

		setInterval(function(){
			findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
		},switchDelay);
	});
});
