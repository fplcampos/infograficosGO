/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-12-16
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	
	var titArea6    = jQuery('.titArea-6');

	var asfalto     = jQuery('.asfalto');

	var infoArea2   = jQuery('.infoArea-2');
	var infoArea21  = jQuery('.infoArea-21');

	var titArea3    = jQuery('.titArea-3');
	var titArea31   = jQuery('.titArea-31');

	var pista 	    = jQuery('.pista');
	var pista1 	    = jQuery('.pista1');
	var pista11	    = jQuery('.pista11');
	var retorno	    = jQuery('.retorno');
	var pista2 	    = jQuery('.pista2');
	var pista3 	    = jQuery('.pista3');
	var volante     = jQuery('.volante');

	var carroAm     = jQuery('.carroAmarelo');
	var carroAz     = jQuery('.carroAzul');

	var hospital    = jQuery('.hospital');
	var helicoptero = jQuery('.helicoptero');
	var ambulancia  = jQuery('.ambulancia');
	var crono       = jQuery('.cronometro');
	var pista1_1    = jQuery('.pista1_1');
	var pista12     = jQuery('.pista12');

	var titArea4    = jQuery('.titArea-4');

	var titArea5    = jQuery('.titArea-5');
	var bairro      = jQuery('.bairro');
	var circuito    = jQuery('.circuit-outer');
	var edificio    = jQuery('.edificio');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 350) {
			// Area 2
			asfalto.delay(700).fadeIn('slow');
			infoArea2.delay(1000).fadeIn('slow');
			infoArea21.delay(1200).fadeIn('slow');
		};

		if (st > 750){
			// Area 3
			titArea3.delay(700).fadeIn('slow');
			titArea31.delay(1000).fadeIn('slow');
			pista1.delay(1100).fadeIn('slow');
			pista11.delay(1200).fadeIn('slow');
			retorno.delay(1300).fadeIn('slow');
			pista2.delay(1400).fadeIn('slow');
			pista3.delay(1500).fadeIn('slow');
			volante.delay(1300).fadeIn('slow');
			pista.delay(1200).fadeIn('slow');
			carroAm.delay(1300).fadeIn('slow');
			carroAz.delay(1400).fadeIn('slow');
		};

		if (st > 1200){
			// Area 4
			hospital.delay(700).fadeIn('slow');
			helicoptero.delay(1000).animate({left: '194'}, 1000);
			ambulancia.delay(1000).fadeIn('slow').animate({right: '77'}, 1100);
			crono.delay(700).fadeIn('slow');
			pista1_1.delay(900).fadeIn('slow');
			pista12.delay(950).fadeIn('slow');
			titArea4.delay(1000).fadeIn('slow');
		};

		if (st > 1700){
			// Area 5
			titArea5.delay(700).fadeIn('slow');
			bairro.delay(900).fadeIn('slow');
			circuito.delay(1000).fadeIn('slow');
			edificio.delay(1200).fadeIn('slow');
		};

		if (st > 2100){
			//Area 6
			
		}

	});	
});