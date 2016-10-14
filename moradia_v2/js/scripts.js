/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-09-21
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var titArea2 	= jQuery('.titArea-2');
	var titArea21 	= jQuery('.titArea-21');
	var arteArea2 	= jQuery('.arteArea-2');
	var titArea22 	= jQuery('.titArea-22');
	var titArea23 	= jQuery('.titArea-23');
	var titArea24 	= jQuery('.titArea-24');

	var titArea3 	= jQuery('.titArea-3');
	var infoArea3 	= jQuery('.infoArea-3');
	var titArea31 	= jQuery('.titArea-31');
	var titArea32 	= jQuery('.titArea-32');
	var baseBairro  = jQuery('.baseBairro');
	var casa 		= jQuery('.casa');
	var casa2 		= jQuery('.casa2');
	var casa3 		= jQuery('.casa3');
	var casa4 		= jQuery('.casa4');
	var casa5 		= jQuery('.casa5');
	var casa6 		= jQuery('.casa6');
	var casa7 		= jQuery('.casa7');
	var casa8 		= jQuery('.casa8');

	var titArea4 	= jQuery('.titArea-4');
	var titArea41 	= jQuery('.titArea-41');
	var circ	 	= jQuery('.circ');
	var titArea42 	= jQuery('.titArea-42');
	var infoArea4 	= jQuery('.infoArea-4');
	var titArea43 	= jQuery('.titArea-43');

	var titArea5 	= jQuery('.titArea-5');
	var titArea51 	= jQuery('.titArea-51');
	var infoArea5 	= jQuery('.infoArea-5');
	var titArea52 	= jQuery('.titArea-52');
	var titArea53 	= jQuery('.titArea-53');
	var infoArea51 	= jQuery('.infoArea-51');
	var titArea54 	= jQuery('.titArea-54');
	var casaArea5 	= jQuery('.casaArea-5');
	var decorArea5 	= jQuery('.decorArea-5');
	var decorArea51	= jQuery('.decorArea-51');
	var familia51 	= jQuery('.familia-51');
	var familia52 	= jQuery('.familia-52');

	var titArea6 	= jQuery('.titArea-6');
	var titArea61 	= jQuery('.titArea-61');
	var infoArea6 	= jQuery('.infoArea-6');
	var pipeArea6 	= jQuery('.pipeArea-6');
	var pipeArea61 	= jQuery('.pipeArea-61');
	var infoArea61 	= jQuery('.infoArea-61');
	var infoArea62 	= jQuery('.infoArea-62');
	var dotsArea6 	= jQuery('.dotsArea-6');
	var dotsArea61 	= jQuery('.dotsArea-61');
	var compArea6 	= jQuery('.compArea-6');
	var docArea6 	= jQuery('.docArea-6');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 150) {
			// Area 2
			titArea2.delay(700).fadeIn('slow');
			titArea21.delay(900).fadeIn('slow');
			arteArea2.delay(1000).fadeIn('slow');
			titArea22.delay(1100).fadeIn('slow');
			titArea23.delay(1180).fadeIn('slow');
			titArea24.delay(1200).fadeIn('slow');
		};

		// 
		if (st > 800){
			// Area 3
			titArea3.delay(700).fadeIn('slow');
			infoArea3.delay(900).fadeIn('slow');
			titArea31.delay(1000).fadeIn('slow');
			titArea32.delay(1100).fadeIn('slow');
			baseBairro.delay(1200).fadeIn('slow');
			casa.delay(1250).fadeIn('slow');
			casa2.delay(1300).fadeIn('slow');
			casa3.delay(1350).fadeIn('slow');
			casa4.delay(1400).fadeIn('slow');
			casa5.delay(1450).fadeIn('slow');
			casa6.delay(1500).fadeIn('slow');
			casa7.delay(1550).fadeIn('slow');
			casa8.delay(1600).fadeIn('slow');

		};

		if (st > 1450){
			// Area 4
			titArea4.delay(700).fadeIn('slow');
			titArea41.delay(900).fadeIn('slow');
			circ.delay(1000).fadeIn('slow');
			titArea42.delay(1200).fadeIn('slow');
			infoArea4.delay(1280).fadeIn('slow');
			titArea43.delay(1250).fadeIn('slow');
		};

		if (st > 1850){
			// Area 5
			titArea5.delay(700).fadeIn('slow');
			titArea51.delay(900).fadeIn('slow');
			infoArea5.delay(1000).fadeIn('slow');
			titArea52.delay(1200).fadeIn('slow');
			titArea53.delay(1400).fadeIn('slow');
			infoArea51.delay(1200).fadeIn('slow');
			titArea54.delay(1280).fadeIn('slow');
			casa5.delay(1500).fadeIn('slow');
			decorArea5.delay(1600).fadeIn('slow');
			decorArea51.delay(1650).fadeIn('slow');
			familia51.delay(1720).fadeIn('slow');
			familia52.delay(1700).fadeIn('slow');
		};

		if (st > 2500){
			// Area 6
			titArea6.delay(700).fadeIn('slow');
			titArea61.delay(900).fadeIn('slow');
			infoArea6.delay(1000).fadeIn('slow');
			pipeArea6.delay(1200).fadeIn('slow');
			pipeArea61.delay(1200).fadeIn('slow');
			infoArea61.delay(1150).fadeIn('slow');
			infoArea62.delay(1200).fadeIn('slow');
			dotsArea6.delay(1200).fadeIn('slow');
			dotsArea61.delay(1200).fadeIn('slow');
			compArea6.delay(1500).fadeIn('slow');
			docArea6.delay().fadeIn('slow', function() {
				docArea6.animate({"top": "-1px"}, "slow");
			});
		};

	});

	// Scroll top área visual
	jQuery('.area-1 .seta').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});