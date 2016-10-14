// Desenvolvimento: Felipe Campos
// fplcampos@gmail.com
// 2015-06-23

jQuery(document).ready(function(){

	// declaração de variáveis para
	// cada elemento da animação;

	var vagaoLeft	= jQuery('.vagao-left');
	var vagaoRight	= jQuery('.vagao-right');

	var planeExport	= jQuery('.planeExport');
	var navyExport 	= jQuery('.navyExport');
	var planeImport	= jQuery('.planeImport');
	var navyImport 	= jQuery('.navyImport');
	var titExport	= jQuery('.titExport');
	var valueExport	= jQuery('.valueExport');
	var barExport	= jQuery('.barExportDiv');
	var titImport	= jQuery('.titImport');
	var valueImport	= jQuery('.valueImport');
	var barImport	= jQuery('.barImportDiv');

	var mes			= jQuery('.mes');
	var fraseMes	= jQuery('.fraseMes');
	var imgGraph	= jQuery('.imgGraph');
	var circMonth	= jQuery('.circMonth');

	var mapa		= jQuery('.mapa');
	var circGO		= jQuery('.circGO');
	var titCresc	= jQuery('.titCresc');
	var porcentagem	= jQuery('.porcentagem');
	var txtCresc	= jQuery('.txtCresc');

	var box1		= jQuery('.box1');
	var box2		= jQuery('.box2');
	var box3		= jQuery('.box3');
	var box4		= jQuery('.box4');


	// Animação Vagões
	vagaoLeft.animate({left: '245'}, 3000);
	vagaoRight.animate({right: '244'}, 3000);
	
	// Dispara animação itens ao 'scrollar' tela
	jQuery( window ).scroll(function() {
		
		var st = jQuery(this).scrollTop(); // captura a posição do scroll

		console.log(st);

		// verificação do valor da posição do scroll
		// e dispara as ações caso valor seja MAIOR/IGUAL ao setado.
		if (st >= 300) {
			// Animação avião/navio exportação
			planeExport.animate({right: '580'}, 2000);
			navyExport.animate({right: '573'}, 3000);

			// Animação avião/navio importação
			planeImport.animate({left: '580'}, 2000);
			navyImport.animate({left: '573'}, 3000);

			// Animação dados exportação
			titExport.delay(2100).fadeIn('slow');
			valueExport.delay(2200).fadeIn('slow');
			barExport.delay(2500).fadeIn('slow');

			// Animação dados importação
			titImport.delay(2100).fadeIn('slow');
			valueImport.delay(2200).fadeIn('slow');
			barImport.delay(2500).fadeIn('slow');
		};

		// dispara ação para exibir o gráfico de barras.
		if (st >= 750){
			mes.delay(1500).fadeIn('slow');
			fraseMes.delay(1500).fadeIn('slow');
			imgGraph.delay(1000).fadeIn('slow');
			circMonth.delay(1500).fadeIn('slow');
		};

		// dispara ação para aparecer as caixas.
		if (st >= 1000){
			mapa.delay(1000).fadeIn('slow');
			circGO.delay(1500).fadeIn('slow');
			titCresc.delay(1700).fadeIn('slow');
			porcentagem.delay(1900).fadeIn('slow');
			txtCresc.delay(1900).fadeIn('slow').animate({bottom: '122px'});

			box1.delay(2500).fadeIn('slow').animate({top: '214px'});
			box2.delay(2700).fadeIn('slow').animate({left: '740px'});
			box3.delay(2900).fadeIn('slow').animate({bottom: '249px'});
			box4.delay(3000).fadeIn('slow').animate({right: '79px'});
		};
	});
});