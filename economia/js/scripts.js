/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-12-16
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var titArea2 	 	 = jQuery('.titArea-2');
	var titArea21 	 	 = jQuery('.titArea-21');
	var titArea22 	 	 = jQuery('.titArea-22');
	var dotArea2 		 = jQuery('.dotArea-2');
	var tracejadoArea2 	 = jQuery('.tracejadoArea-2');
	var tracejadoArea22	 = jQuery('.tracejadoArea-22');
	var tracejadoArea23	 = jQuery('.tracejadoArea-23');
	var grafico			 = jQuery('.grafico');
	var circ			 = jQuery('.circ');

	var tracejadoArea3	 = jQuery('.tracejadoArea-3');
	var dotArea3 		 = jQuery('.dotArea-3');
	var titArea3 	 	 = jQuery('.titArea-3');
	var titArea31 	 	 = jQuery('.titArea-31');

	var nuvem 			 = jQuery('.nuvem');
	var nuvem2 			 = jQuery('.nuvem');
	
	var info3 			 = jQuery('.info-3');
	var info31 			 = jQuery('.info-31');

	var titArea4 	 	 = jQuery('.titArea-4');
	var titArea41 	 	 = jQuery('.titArea-41');

	var dotArea4 	 	 = jQuery('.dotArea-4');
	var tracejadoArea4	 = jQuery('.tracejadoArea-4');
	var caminhao		 = jQuery('.caminhao');
	var caminhao2		 = jQuery('.caminhao2');

	var titEstado 		 = jQuery('.titEstado');
	var titNacional		 = jQuery('.titNacional');

	var barraProg 		 = jQuery('.barraProg');
	var barraProg2 		 = jQuery('.barraProg2');

	var tracejadoArea41	 = jQuery('.tracejadoArea-41');

	var titArea5 	 	 = jQuery('.titArea-5');
	var titArea51 	 	 = jQuery('.titArea-51');
	var titArea52 	 	 = jQuery('.titArea-52');
	var processoInd		 = jQuery('.processoInd');
	var caixa			 = jQuery('.caixa');
	var caixa2			 = jQuery('.caixa2');
	var caixa3			 = jQuery('.caixa3');
	var caixa4			 = jQuery('.caixa4');

	var miniTruck		 = jQuery('.miniTruck');
	
	var titEstado5		 = jQuery('.titEstado5');
	var titNacional5	 = jQuery('.titNacional5');
	var info5			 = jQuery('.info-5');
	var info51			 = jQuery('.info-51');
	var progressBar5 	 = jQuery('.progressBar-5');
	var progressBar51 	 = jQuery('.progressBar-51');

	var mulher 			 = jQuery('.mulher');
	var mulher2			 = jQuery('.mulher2');

	var titArea6 	 	 = jQuery('.titArea-6');
	var titArea61 	 	 = jQuery('.titArea-61');
	var titArea62 	 	 = jQuery('.titArea-62');

	var tracejadoArea6	 = jQuery('.tracejadoArea-6');
	var dotArea6 		 = jQuery('.dotArea-6');
	var galera	 		 = jQuery('.galera');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 450) {
			// Area 2
			// titArea2.delay(700).fadeIn('slow');
			dotArea2.delay(700).fadeIn('slow');
			tracejadoArea2.delay(800).fadeIn('slow');
			titArea2.delay(1000).fadeIn('slow');
			titArea21.delay(1100).fadeIn('slow');
			titArea22.delay(1200).fadeIn('slow');
			tracejadoArea22.delay(810).fadeIn('slow');
			grafico.delay(1200).fadeIn('slow');
			circ.delay(1300).fadeIn('slow');
			tracejadoArea23.delay(810).fadeIn('slow');
		};

		if (st > 800){
			// Area 3
			tracejadoArea3.delay(700).fadeIn('slow');
			dotArea3.delay(710).fadeIn('slow');
			titArea3.delay(1000).fadeIn('slow');
			titArea31.delay(1200).fadeIn('slow');
			nuvem.delay(1300).fadeIn('slow');
		};

		if (st > 1200){
			// Area 4
			titArea4.delay(700).fadeIn('slow');
			titArea41.delay(900).fadeIn('slow');
			dotArea4.delay(1000).fadeIn('slow');
			tracejadoArea4.delay(1100).fadeIn('slow');
			caminhao.delay(1150).fadeIn('slow');
			caminhao2.delay(1200).fadeIn('slow');
			barraProg.delay(1350).fadeIn('slow');
			barraProg2.delay(1380).fadeIn('slow');
			info3.delay(1500).fadeIn('slow');
			info31.delay(1550).fadeIn('slow');
			titEstado.delay(1200).fadeIn('slow');
			titNacional.delay(1250).fadeIn('slow');
			tracejadoArea41.delay(1100).fadeIn('slow');
		};

		if (st > 1700){
			// Area 5
			processoInd.delay(1000).fadeIn('slow');
			caixa.delay(1200).fadeIn('slow');
			caixa2.delay(1400).fadeIn('slow');
			caixa3.delay(1600).fadeIn('slow');
			caixa4.delay(1800).fadeIn('slow');
			miniTruck.delay(2000).fadeIn('slow');

			titArea5.delay(1500).fadeIn('slow');
			titEstado5.delay(1550).fadeIn('slow');
			titNacional5.delay(1650).fadeIn('slow');
			info5.delay(1800).fadeIn('slow');
			info51.delay(2000).fadeIn('slow');
			progressBar5.delay(600).fadeIn('slow').animate({
				width: "213px"},
				1500);
			progressBar51.delay(600).fadeIn('slow').animate({
				width: "106px"},
				1500);
			titArea51.delay(1500).fadeIn('slow');
			titArea52.delay(1500).fadeIn('slow');
			mulher.delay(1500).fadeIn('slow');
			mulher2.delay(1600).fadeIn('slow');
		};

		if (st > 2100){
			//Area 6
			nuvem2.delay(1000).fadeIn('slow');
			titArea6.delay(1300).fadeIn('slow');
			titArea61.delay(1400).fadeIn('slow');
			titArea62.delay(1500).fadeIn('slow');
			tracejadoArea6.delay(1100).fadeIn('slow');
			dotArea6.delay(1200).fadeIn('slow');
			galera.delay(1500).fadeIn('slow');
		}

	});

	// Scroll top área visual
	jQuery('.area-1 .seta').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});