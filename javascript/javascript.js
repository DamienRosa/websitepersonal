$(document).ready(function(){


	/*========= easeoutQuad function ==========*/
	$.easing.easeoutQuad = 	function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	};


	/*========= function Full Page ==========*/
	function fullPageSection(){
		var vecSection = document.querySelectorAll('section>section');
		for (var i = vecSection.length - 1; i >= 0; i--) {
			$(vecSection[i]).height($(window).height()-159);
		};
	}

	/*========= function Menu ==========*/
	function menu(){
		scrollAll('#logo', '#home');
		var vecMenu = document.getElementById('menu_top').getElementsByTagName('li');
		var vecSection = document.querySelectorAll('section>section');
		for (var i = 0; i < vecMenu.length; ++i) {
			scrollAll('#'+vecMenu[i].id, '#'+vecSection[i+1].id);
		}
	};

	/*========= Run Functions ==========*/
	menu();
	fullPageSection();
});


/*========= function Scroll ==========*/
function scrollAll(idMenu, idSection){
	$(idMenu).click(function(evt){
		$.scrollTo(idSection, {duration:800, easing:'easeoutQuad', offset: {top:-57} });
		evt.preventDefault();
	});
}