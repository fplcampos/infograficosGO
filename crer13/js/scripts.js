/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-09-21
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var titArea2 		= jQuery('.titArea-2');
	var dots 			= jQuery('.dots');
	var balao2 			= jQuery('.balao2');
	var balao21 		= jQuery('.balao21');
	var infoArea2   	= jQuery('.infoArea-2');

	var titArea3 		= jQuery('.titArea-3');
	var infoArea31 		= jQuery('.infoArea-31');
	var infoArea32 		= jQuery('.infoArea-32');
	var infoArea33 		= jQuery('.infoArea-33');
	var infoArea34 		= jQuery('.infoArea-34');
	var infoArea35 		= jQuery('.infoArea-35');
	var infoArea36 		= jQuery('.infoArea-36');
	var infoArea37 		= jQuery('.infoArea-37');

	var infoArea41 		= jQuery('.infoArea-41');
	var infoArea42 		= jQuery('.infoArea-42');
	var infoArea43 		= jQuery('.infoArea-43');
	var arteArea41 		= jQuery('.arteArea-41');
	var barra	 		= jQuery('.barra');
	var infoArea44 		= jQuery('.infoArea-44');
	var infoArea45 		= jQuery('.infoArea-45');
	var arteArea42 		= jQuery('.arteArea-42');

	var infoArea51 		= jQuery('.infoArea-51');
	var infoArea52 		= jQuery('.infoArea-52');
	var bgArea5 		= jQuery('.bgArea-5');

	var mapa 			= jQuery('.mapa');
	var linha 			= jQuery('.linha');
	var infoArea61 		= jQuery('.infoArea-61');
	var infoArea62 		= jQuery('.infoArea-62');
	var modalidade1		= jQuery('.modalidade1');
	var modalidade2		= jQuery('.modalidade2');
	var modalidade3		= jQuery('.modalidade3');
	var modalidade4		= jQuery('.modalidade4');

	var titModalidade1	= jQuery('.titModalidade1');
	var titModalidade2	= jQuery('.titModalidade2');
	var titModalidade3	= jQuery('.titModalidade3');
	var titModalidade4	= jQuery('.titModalidade4');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 150) {
			// Area 2
			titArea2.delay(700).fadeIn('slow');
			dots.delay(1000).fadeIn('slow');
			balao2.delay(1200).fadeIn('slow');
			balao21.delay(1300).fadeIn('slow');
			infoArea2.delay(1500).fadeIn('slow');
		};

		// 
		if (st > 800){
			// Area 3
			titArea3.delay(700).fadeIn('slow');
			infoArea31.delay(1000).fadeIn('slow');
			infoArea32.delay(1200).fadeIn('slow');
			infoArea33.delay(1400).fadeIn('slow');
			infoArea34.delay(1600).fadeIn('slow');
			infoArea35.delay(1800).fadeIn('slow');
			infoArea36.delay(2000).fadeIn('slow');
			infoArea37.delay(2200).fadeIn('slow');
		};

		if (st > 1450){
			// Area 4
			infoArea41.delay(700).fadeIn('slow');
			infoArea42.delay(1000).fadeIn('slow');
			infoArea43.delay(1300).fadeIn('slow');
			arteArea41.delay(1500).fadeIn('slow');
			barra.delay(1200).fadeIn('slow');
			infoArea44.delay(1300).fadeIn('slow');
			infoArea45.delay(1500).fadeIn('slow');
			arteArea42.delay(1600).fadeIn('slow');
		};

		if (st > 1850){
			// Area 5
			infoArea51.delay(700).fadeIn('slow');
			infoArea52.delay(1000).fadeIn('slow');
			bgArea5.delay(1200).fadeIn('slow');
		};

		if (st > 2500){
			// Area 5
			mapa.delay(700).fadeIn('slow');
			linha.delay(1000).fadeIn('slow');
			infoArea61.delay(1200).fadeIn('slow');
			infoArea62.delay(1400).fadeIn('slow');
			modalidade1.delay(1500).fadeIn('slow');
			modalidade2.delay(1700).fadeIn('slow');
			modalidade3.delay(1900).fadeIn('slow');
			modalidade4.delay(2100).fadeIn('slow');
			titModalidade1.delay(1500).fadeIn('slow');
			titModalidade2.delay(1700).fadeIn('slow');
			titModalidade3.delay(1900).fadeIn('slow');
			titModalidade4.delay(2100).fadeIn('slow');
		};

	});

	// Scroll top área visual
	jQuery('.area-1 .seta').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});