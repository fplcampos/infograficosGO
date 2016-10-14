/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-09-21
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;
	var titArea2 	  = jQuery('.titArea-2');
	var titArea21 	  = jQuery('.titArea-21');
	var titArea22 	  = jQuery('.titArea-22');
	var titArea23 	  = jQuery('.titArea-23');
	var fundoBatida   = jQuery('.fundoBatida');
	var circ 		  = jQuery('.circ');
	var carro1 		  = jQuery('.carro1');
	var ondaChoque	  = jQuery('.ondaChoque');
	var carro2 		  = jQuery('.carro2');

	var titArea3 	  = jQuery('.titArea-3');
	var titArea31 	  = jQuery('.titArea-31');
	var infoArea3 	  = jQuery('.infoArea-3');
	var dotsArea3 	  = jQuery('.dotsArea-3');
	var bebado 		  = jQuery('.bebado');

	var titArea4 	  = jQuery('.titArea-4');
	var titArea41 	  = jQuery('.titArea-41');
	var infoArea4 	  = jQuery('.infoArea-4');
	var dotsArea4 	  = jQuery('.dotsArea-4');
	var infoArea41 	  = jQuery('.infoArea-41');

	var titArea5 	  = jQuery('.titArea-5');
	var titArea51 	  = jQuery('.titArea-51');
	var infoArea5 	  = jQuery('.infoArea-5');
	var pipeArea5 	  = jQuery('.pipeArea-5');
	var infoArea51 	  = jQuery('.infoArea-51');
	var linhaArea5 	  = jQuery('.linhaArea-5');
	var carroPolicia  = jQuery('.carroPolicia');
	var carroPolicia1 = jQuery('.carroPolicia1');
	var carroEsporte  = jQuery('.carroEsporte');

	
	/*var arteArea5 	= jQuery('.arteArea-5');*/

	var titArea6 	  = jQuery('.titArea-6');
	var circ6	 	  = jQuery('.circ6');
	var infoArea6 	  = jQuery('.infoArea-6');
	var circ61	 	  = jQuery('.circ61');
	var infoArea61 	  = jQuery('.infoArea-61');
	var copsArea6 	  = jQuery('.copsArea-6');

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
			titArea22.delay(1000).fadeIn('slow');
			titArea23.delay(1100).fadeIn('slow');

			fundoBatida.delay(1100).fadeIn('slow');
			circ.delay(1100).fadeIn('slow');
			carro1.animate({left: 230},
			{
				duration:1000,
				complete: function(){
					jQuery(this).css({transform: "rotate(12deg)", bottom: 92});
				}
			});
			carro2.animate({right: 376},1000);
			ondaChoque.delay(1000).fadeIn('slow');
		};

		// 
		if (st > 800){
			// Area 3
			titArea3.delay(700).fadeIn('slow');
			titArea31.delay(900).fadeIn('slow');
			infoArea3.delay(1000).fadeIn('slow');
			dotsArea3.delay(1100).fadeIn('slow');
			bebado.delay(1200).fadeIn('slow');
		};

		if (st > 1450){
			// Area 4
			titArea4.delay(700).fadeIn('slow');
			titArea41.delay(900).fadeIn('slow');
			infoArea4.delay(1000).fadeIn('slow');
			dotsArea4.delay(900).fadeIn('slow');
			infoArea41.delay(1100).fadeIn('slow');
		};

		if (st > 1850){
			// Area 5
			titArea5.delay(700).fadeIn('slow');
			titArea51.delay(900).fadeIn('slow');
			infoArea5.delay(1000).fadeIn('slow');
			pipeArea5.delay(1100).fadeIn('slow');
			infoArea51.delay(1200).fadeIn('slow');
			linhaArea5.delay(1200).fadeIn('slow');
			carroPolicia.delay(1200).animate({left: 224},1250);
			carroEsporte.delay(1200).animate({left: 424},1250);
			carroPolicia1.delay(1200).animate({left: 607},1250);
			
		};

		if (st > 2500){
			// Area 6
			titArea6.delay(700).fadeIn('slow');
			circ6.delay(1000).fadeIn('slow');
			infoArea6.delay(1000).fadeIn('slow');
			circ61.delay(1000).fadeIn('slow');
			infoArea61.delay(1000).fadeIn('slow');
			copsArea6.delay(1200).fadeIn('slow');
		};

	});

	// Scroll top área visual
	jQuery('.area-1 .seta').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});