/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-07-14
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var titArea2  = jQuery('.titArea-2');
	var arte2 	  = jQuery('.arte-2');
	var arte21 	  = jQuery('.arte-21');
	var fumaca 	  = jQuery('.fumaca');
	var foguete   = jQuery('.foguete');

	var titArea3  = jQuery('.titArea-3');
	var info31 	  = jQuery('.info-31');
	var info32 	  = jQuery('.info-32');
	var info33 	  = jQuery('.info-33');
	var info34 	  = jQuery('.info-34');
	var bolaEsq	  = jQuery('.bolaEsq');
	var bolaDir	  = jQuery('.bolaDir');
	var arte3	  = jQuery('.arte-3');

	var titArea4  = jQuery('.titArea-4');
	var titArea41 = jQuery('.titArea-41');
	var titArea42 = jQuery('.titArea-42');
	var info41 	  = jQuery('.info-41');
	var arte4 	  = jQuery('.arte-4');
	var fonte 	  = jQuery('.fonte');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 150) {
			// Area 2
			titArea2.delay(700).fadeIn('slow');
			arte2.delay(1000).fadeIn('slow');
			arte21.delay(1200).fadeIn('slow');
			fumaca.delay(1500).fadeIn('slow');
			foguete.delay(1300).fadeIn('slow');
		};

		// 
		if (st > 800){
			// Area 3
			titArea3.delay(700).fadeIn('slow');
			info31.delay(1000).fadeIn('slow');
			info32.delay(1100).fadeIn('slow');
			info33.delay(1200).fadeIn('slow');
			info34.delay(1300).fadeIn('slow');
			bolaEsq.delay(1200).fadeIn('slow');
			bolaDir.delay(1200).fadeIn('slow');
			arte3.delay(1300).fadeIn('slow');
		};

		if (st > 1450){
			// Area 4
			titArea4.delay(700).fadeIn('slow');
			titArea41.delay(1200).fadeIn('slow');
			titArea42.delay(1300).fadeIn('slow');
			info41.delay(1000).fadeIn('slow');
			arte4.delay(1100).fadeIn('slow');
			fonte.delay(1400).fadeIn('slow');
		};

	});

	// Scroll top área visual
	jQuery('.area-1 .seta').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});