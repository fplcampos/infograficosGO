/* 
* Desenvolvimento: Felipe Campos
* fplcampos@gmail.com
* 2015-06-24
*/

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var setaDown			= jQuery('.setaDown');
	var percentualReducao	= jQuery('.percentualReducao');
	var dadosPercentual		= jQuery('.dadosPercentual');

	var setaDownQueda		= jQuery('.setaDownQueda');
	var percentualQueda		= jQuery('.percentualQueda');

	var indiceMaio13		= jQuery('.indiceMaio13');
	var indiceMaio14		= jQuery('.indiceMaio14');
	var indiceMaio15		= jQuery('.indiceMaio15');
	var barraIndice			= jQuery('.barraIndice');
	var fraseTop			= jQuery('.area-2 .frase-top');
	var titArea22			= jQuery('.titArea-22');
	var maio13				= jQuery('.maio13');
	var maio14				= jQuery('.maio14');
	var maio15				= jQuery('.maio15');
	var ladrao				= jQuery('.ladrao');

	var frase3				= jQuery('.area-3 .frase-top');
	var indiceHomInicial	= jQuery('.indiceHomicidioInicial');
	var indiceHomFinal		= jQuery('.indiceHomicidioFinal');
	var barraIndice3		= jQuery('.barraIndice3');
	var fraseFinal3			= jQuery('.fraseFinal3');
	var mask				= jQuery('.mask');

	var frase4				= jQuery('.area-4 .frase-top');
	var circArea4			= jQuery('.circArea4');
	var circArea42			= jQuery('.circArea42');
	var algema				= jQuery('.algema');
	var indiceArea41		= jQuery('.indiceArea-41');
	var indiceArea42		= jQuery('.indiceArea-42');

	// Area 1
	setaDown.delay(1000).fadeIn('slow', function() {
		setaDown.animate({top: '265'}, 1000);
	});

	setaDownQueda.delay(1300).fadeIn('slow', function() {
		setaDownQueda.animate({top: '265'}, 1000);
	});

	percentualReducao.delay(1500).fadeIn('slow');
	dadosPercentual.delay(1500).fadeIn('slow');

	percentualQueda.delay(1800).fadeIn('slow');

	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st >= 150) {
			// Area 2
			fraseTop.delay(700).fadeIn('slow');
			indiceMaio13.delay(1000).fadeIn('slow');
			indiceMaio14.delay(1500).fadeIn('slow');
			indiceMaio15.delay(2000).fadeIn('slow');
			barraIndice.delay(2200).fadeIn('slow');
			titArea22.delay(2300).fadeIn('slow');
			maio13.delay(2500).fadeIn('slow');
			maio14.delay(2600).fadeIn('slow');
			maio15.delay(2700).fadeIn('slow');
			ladrao.delay(2900).animate({bottom: '0'}, 1000);
		};

		// dispara ação para exibir o gráfico de barras.
		if (st >= 800){
			// Area 3
			frase3.delay(1000).fadeIn('slow');
			indiceHomInicial.delay(1500).fadeIn('slow');
			indiceHomFinal.delay(1700).fadeIn('slow');
			mask.delay(1900).animate({width: '1px'}, 2000);
			barraIndice3.delay(1900).fadeIn('slow');
			fraseFinal3.delay(1800).fadeIn('slow').animate({bottom: '44px'});
		};

		// dispara ação para exibir o gráfico de barras.
		if (st >= 1000){
			// Area 4
			frase4.delay(1000).fadeIn('slow');
			algema.delay(1500).fadeIn('slow');
			circArea4.delay(1500).fadeIn('slow');
			circArea42.delay(1500).fadeIn('slow');
			indiceArea41.delay(1500).fadeIn('slow');
			indiceArea42.delay(1500).fadeIn('slow');
		};
	});
});