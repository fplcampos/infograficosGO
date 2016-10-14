/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-12-16
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var titArea2 	 = jQuery('.titArea-2');
	var dotArea2 	 = jQuery('.dotArea-2');
	
	
	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 500) {
			// Area 2
			// titArea2.delay(700).fadeIn('slow');
			alert('porra');
			dotArea2.delay(7000).fadeIn('slow');
			
		};

		// 
		if (st > 800){
			// Area 3
			
		};

		if (st > 1450){
			// Area 4
			
		};

		if (st > 1850){
			// Area 5
			
		};

	});

	// Scroll top área visual
	jQuery('.area-1 .seta').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});