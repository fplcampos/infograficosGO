/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-07-14
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var txtArea1		= jQuery('.txtArea-1');
	var txtPercentArea1	= jQuery('.txtPercentArea-1');

	var setaDownQueda	= jQuery('.setaDownQueda');
	var setaDown		= jQuery('.setaDown');

	var titArea2		= jQuery('.titArea-2');
	var infoHomicidio	= jQuery('.infoHomicidio');
	var barraArea2		= jQuery('.barraArea-2');
	var txtArea2		= jQuery('.txtArea-2');
	var ladrao			= jQuery('.ladrao');
	var fraseFinal2		= jQuery('.fraseFinal2');

	var titArea3		= jQuery('.titArea-3');
	var barra1			= jQuery('.barra1');
	var barra2			= jQuery('.barra2');
	var barra3			= jQuery('.barra3');
	var barra4			= jQuery('.barra4');
	var barra5			= jQuery('.barra5');
	var baseGraph		= jQuery('.baseGraph');
	var sem1			= jQuery('.sem1');
	var sem2			= jQuery('.sem2');
	var sem1Ano14		= jQuery('.sem1.ano14');
	var sem2Ano14		= jQuery('.sem2.ano14');
	var sem1Ano15		= jQuery('.sem1.ano15');
	var baseGraphAnos	= jQuery('.baseGraphAnos');

	var circAno13		= jQuery('.circAno13');
	var circAno14		= jQuery('.circAno14');
	var circAno15		= jQuery('.circAno15');

	var ano13			= jQuery('.ano13_');
	var ano14			= jQuery('.ano14_');
	var ano15			= jQuery('.ano15_');

	var sirene			= jQuery('.sirene');
	var flashLeft		= jQuery('.sirene.left .flash');
	var flashRight		= jQuery('.sirene.right .flash');

	var titArea4		= jQuery('.titArea-4');
	var info41			= jQuery('.info-41');
	var info42			= jQuery('.info-42');

	var barra41			= jQuery('.barra-41');
	var barra42			= jQuery('.barra-42');

	var areaPercent		= jQuery('.areaPercent');
	var infoArea43		= jQuery('.areaPercent .infoArea-43');

	var circArea4		= jQuery('.circArea4');

	var infoArea44		= jQuery('.infoArea-44');

	var titArea5		= jQuery('.titArea-5');
	var megafone		= jQuery('.megafone');
	var megafoneSom		= jQuery('.megafoneSom');
	var graphArea5		= jQuery('.graphArea-5');

	var titArea6		= jQuery('.titArea-6');
	var group1			= jQuery('.group1');
	var group2			= jQuery('.group2');
	var group3			= jQuery('.group3');
	var group4			= jQuery('.group4');
	var group5			= jQuery('.group5');

	var policeCar		= jQuery('.policeCar');
	var policeLine		= jQuery('.policeLine');

	var txtArea6		= jQuery('.txtArea-6');

	var titArea7		= jQuery('.titArea-7');
	var graphArea7		= jQuery('.graphArea7');
	var txtArea7		= jQuery('.txtArea-7');

	// Area 1
	txtArea1.delay(1000).fadeIn('slow');
	txtPercentArea1.delay(1400).fadeIn('slow');
	
	setaDownQueda.delay(1000).fadeIn('slow', function() {
		setaDownQueda.animate({top: '384'}, 1000);
	});

	setaDown.delay(1200).fadeIn('slow');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st > 150) {
			// Area 2
			titArea2.delay(700).fadeIn('slow');
			infoHomicidio.delay(900).fadeIn('slow');
			barraArea2.delay(1000).fadeIn('slow');
			txtArea2.delay(1100).fadeIn('slow');
			ladrao.delay(1200).animate({bottom: '0'}, 1000);
			fraseFinal2.delay(1300).fadeIn('slow');
		};

		// 
		if (st > 800){
			// Area 3
			titArea3.delay(700).fadeIn('slow');
			barra1.delay(1000).fadeIn('slow');
			barra2.delay(1100).fadeIn('slow');
			barra3.delay(1200).fadeIn('slow');
			barra4.delay(1300).fadeIn('slow');
			barra5.delay(1400).fadeIn('slow');
			baseGraph.delay(1500).fadeIn('slow');
			sem1.delay(1500).fadeIn('slow');
			sem2.delay(1600).fadeIn('slow');
			sem1Ano14.delay(1700).fadeIn('slow');
			sem2Ano14.delay(1800).fadeIn('slow');
			sem1Ano15.delay(1900).fadeIn('slow');
			baseGraphAnos.delay(1500).fadeIn('slow');
			circAno13.delay(1500).fadeIn('slow');
			circAno14.delay(1500).fadeIn('slow');
			circAno15.delay(1500).fadeIn('slow');
			ano13.delay(1500).fadeIn('slow');
			ano14.delay(1500).fadeIn('slow');
			ano15.delay(1500).fadeIn('slow');
			sirene.delay(1500).fadeIn('slow');
			flashLeft.delay(1500).fadeIn('slow');
			flashRight.delay(1500).fadeIn('slow');
		};

		if (st > 1500){
			// Area 4
			titArea4.delay(700).fadeIn('slow');
			info41.delay(1000).fadeIn('slow');
			info42.delay(1100).fadeIn('slow');

			barra41.delay(1000).fadeIn('slow').animate({height: '93px'}, 1000);

			barra42.delay(1100).fadeIn('slow').animate({height: '55px'}, 1000);
			
			areaPercent.delay(1300).fadeIn('slow');
			infoArea43.delay(1300).fadeIn('slow');

			circArea4.delay(1200).fadeIn('slow');

			infoArea44.delay(1300).fadeIn('slow');
		};

		if (st > 2100){
			// Area 5
			titArea5.delay(700).fadeIn('slow');
			megafone.delay(1000).fadeIn('slow');
			megafoneSom.delay(1080).fadeIn('slow');

			graphArea5.delay(1100).fadeIn('slow');
		}

		if (st > 2790){
			// Area 6
			titArea6.delay(700).fadeIn('slow');
			group1.delay(1100).fadeIn('slow');
			group2.delay(1150).fadeIn('slow');
			group3.delay(1200).fadeIn('slow');
			group4.delay(1250).fadeIn('slow');
			group5.delay(1300).fadeIn('slow');

			policeCar.delay(1100).fadeIn('slow').animate({left:'194px'}, 1000);
			policeLine.delay(1100).fadeIn('slow');

			txtArea6.delay(1500).fadeIn('slow');
		}

		if (st > 3200){
			// Area 7
			titArea7.delay(700).fadeIn('slow');
			graphArea7.delay(1000).fadeIn('slow');
			txtArea7.delay(1100).fadeIn('slow');
			
		}

	});

	// Scroll top área visual
	jQuery('.area-1 .setaDown').click(function(event) {
		event.preventDefault();
		jQuery('body,html').animate({scrollTop: 592},1000);
	});
});