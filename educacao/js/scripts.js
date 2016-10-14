/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-09-21
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var titArea2  	= jQuery('.titArea-2');
	var titArea21 	= jQuery('.titArea-21');
	var infoArea2 	= jQuery('.infoArea-2');
	var professor 	= jQuery('.professor');
	var quadroNegro = jQuery('.quadroNegro');
	var globo 		= jQuery('.globo');
	var titArea22	= jQuery('.titArea-22');

	var titArea3  	= jQuery('.titArea-3');
	var infoArea3  	= jQuery('.infoArea-3');
	var titArea31  	= jQuery('.titArea-31');
	var titArea32  	= jQuery('.titArea-32');
	var circArea3  	= jQuery('.circArea-3');
	var infoCirc3  	= jQuery('.infoCirc-3');

	var titArea4  	= jQuery('.titArea-4');
	var titArea41  	= jQuery('.titArea-41');
	var estudante  	= jQuery('.estudante');
	var infoArea4  	= jQuery('.infoArea-4');
	var divisao  	= jQuery('.divisao');
	var infoArea42 	= jQuery('.infoArea-42');
	var titArea42 	= jQuery('.titArea-42');

	var titArea5  	= jQuery('.titArea-5');
	var prancheta 	= jQuery('.prancheta');
	var titArea51  	= jQuery('.titArea-51');
	var titArea52  	= jQuery('.titArea-52');
	var linha52  	= jQuery('.linha-52');
	var infoArea5  	= jQuery('.infoArea-5');
	var titArea53  	= jQuery('.titArea-53');
	var linha53  	= jQuery('.linha-53');
	var infoArea52 	= jQuery('.infoArea-52');
	var titArea54  	= jQuery('.titArea-54');
	var titArea55  	= jQuery('.titArea-55');
	var linha55  	= jQuery('.linha-55');
	var infoArea55 	= jQuery('.infoArea-55');
	var titArea56  	= jQuery('.titArea-56');
	var linha56  	= jQuery('.linha-56');
	var infoArea56 	= jQuery('.infoArea-56');
	
	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 150) {
			// Area 2
			titArea2.delay(700).fadeIn('slow');
			titArea21.delay(1000).fadeIn('slow');
			infoArea2.delay(1300).fadeIn('slow');
			professor.delay(1600).fadeIn('slow');
			quadroNegro.delay(1500).fadeIn('slow');
			globo.delay(1650).fadeIn('slow');
			titArea22.delay(1300).fadeIn('slow');
		};

		// 
		if (st > 800){
			// Area 3
			titArea3.delay(700).fadeIn('slow');
			infoArea3.delay(1000).fadeIn('slow');
			titArea31.delay(1100).fadeIn('slow');
			titArea32.delay(1200).fadeIn('slow');
			circArea3.delay(1400).fadeIn('slow');
			infoCirc3.delay(1450).fadeIn('slow');
		};

		if (st > 1450){
			// Area 4
			titArea4.delay(700).fadeIn('slow');
			titArea41.delay(1000).fadeIn('slow');
			estudante.delay(1200).fadeIn('slow');
			infoArea4.delay(1100).fadeIn('slow');
			divisao.delay(1200).fadeIn('slow');
			infoArea42.delay(1100).fadeIn('slow');
			titArea42.delay(1200).fadeIn('slow');
		};

		if (st > 1850){
			// Area 5
			prancheta.delay(700).fadeIn('slow');
			titArea5.delay(1000).fadeIn('slow');
			titArea51.delay(1100).fadeIn('slow');
			titArea52.delay(1200).fadeIn('slow');
			linha52.delay(1200).fadeIn('slow');
			infoArea5.delay(1200).fadeIn('slow');
			titArea53.delay(1300).fadeIn('slow');
			linha53.delay(1300).fadeIn('slow');
			infoArea52.delay(1700).fadeIn('slow');
			titArea54.delay(1200).fadeIn('slow');
			titArea55.delay(1200).fadeIn('slow');
			linha55.delay(1200).fadeIn('slow');
			infoArea55.delay(1200).fadeIn('slow');
			titArea56.delay(1300).fadeIn('slow');
			linha56.delay(1300).fadeIn('slow');
			infoArea56.delay(1700).fadeIn('slow');
		};

	});

	// Scroll top área visual
	jQuery('.area-1 .seta').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});