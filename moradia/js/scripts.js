/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-07-01
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;	

	var fraseTop	= jQuery('.area-2 .frase-top');
	var info01		= jQuery('.info01');
	var casa		= jQuery('.casa');
	var info02		= jQuery('.info02');
	var bullets		= jQuery('.bullets');
	var famEsq		= jQuery('.famEsq');
	var famDir		= jQuery('.famDir');
	var info03	 	= jQuery('.info03');
	var info03_1	= jQuery('.info03_1');
	var info04		= jQuery('.info04');
	var info04_1	= jQuery('.info04_1');
	var info05		= jQuery('.info05');
	var info05_1	= jQuery('.info05_1');
	var bairro		= jQuery('.bairro');
	var obras		= jQuery('.obras');
	var trator		= jQuery('.trator');
	var fraseTop3	= jQuery('.area-3 .frase-top');
	var fraseTop31	= jQuery('.area-3 .frase-top1');
	var circInfo06	= jQuery('.circInfo06');
	var info06		= jQuery('.info06');
	var info06_1	= jQuery('.info06_1');
	var info07		= jQuery('.info07');
	var casaSusp	= jQuery('.casaSusp');
	var tratorVerm	= jQuery('.tratorVerm');
	var casaEsq		= jQuery('.casaEsq');
	var casaDir		= jQuery('.casaDir');
	var pin			= jQuery('.pin');
	var fraseTop5	= jQuery('.area-5 .frase-top');
	var cidade1		= jQuery('.cidade1');
	var cidade2		= jQuery('.cidade2');
	var cidade3		= jQuery('.cidade3');
	var map1		= jQuery('.map1');
	var map2		= jQuery('.map2');
	var map3		= jQuery('.map3');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st >= 300) {

			fraseTop.delay(500).fadeIn('slow');
			info01.delay(800).fadeIn('slow');
			bullets.delay(800).fadeIn('slow');
			casa.delay(900).fadeIn('slow');
			info02.delay(900).fadeIn('slow');
			info03.delay(900).fadeIn('slow');
			info03_1.delay(950).fadeIn('slow');

			famEsq.delay(1000).fadeIn('slow');
			famDir.delay(1100).fadeIn('slow');

		}

		if (st >= 950) {

			info04.delay(500).fadeIn('slow');
			info04_1.delay(900).fadeIn('slow');
			info05.delay(800).fadeIn('slow');
			info05_1.delay(1000).fadeIn('slow');
			bairro.delay(1100).fadeIn('slow');
			obras.delay(1150).fadeIn('slow');
			trator.delay(1120).animate({right: '0'}, 1000);

		}

		if (st >= 1490) {

			fraseTop3.delay(800).fadeIn('slow');
			fraseTop31.delay(900).fadeIn('slow');
			info06.delay(1000).fadeIn('slow');
			info06_1.delay(1000).fadeIn('slow');
			circInfo06.delay(1100).fadeIn('slow');

		}

		if (st >= 1900) {

			info07.delay(800).fadeIn('slow');
			casaSusp.delay(1000).fadeIn('slow').animate({right: '203px'}, 1500);
			tratorVerm.delay(900).fadeIn('slow').animate({left: '30px'}, 1000);
			casaEsq.delay(1000).fadeIn('slow');
			casaDir.delay(1050).fadeIn('slow');

		}

		if (st >= 2280) {

			pin.delay(800).fadeIn('slow').animate({top: '72px'});
			fraseTop5.delay(1000).fadeIn('slow');
			cidade1.delay(1050).fadeIn('slow');
			cidade2.delay(1100).fadeIn('slow');
			cidade3.delay(1200).fadeIn('slow');

			map1.delay(1100).fadeIn('slow');
			map2.delay(1200).fadeIn('slow');
			map3.delay(1300).fadeIn('slow');
		}
	});

	jQuery('.area-1 .scroll').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});

	jQuery('.area-5 .topo').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop:0},800);
	});
});