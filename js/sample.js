// 表示・非表示
$(function(){
	$('.section').hide();
  
	$('.secList').on('click',function(){
	  $('.section').not($($(this).attr('href'))).hide();
  
	  // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
	  $($(this).attr('href')).fadeToggle(1000);
  
	  // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
	  // $($(this).attr('href')).show();
	});
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

