$(function(){
	$('.blog-content').on('mouseover', function(){
		$(this).addClass('active');
	});

	$('.blog-content').on('mouseleave',function(){
		$(this).removeClass('active');
	});

	let h = $('.logo').outerHeight(true);

	console.log(h);

	$('#drower-bg').css('top',h);
	


});

// ハンバーガー
$(function() {
	// ハンバーガーメニューが押された時
	$('#toggle').on('click',function(){
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