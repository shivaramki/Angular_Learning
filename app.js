(function(){
	var app = angular.module('store', [ ]);
	app.controller('storecontroller',function(){
		this.products=gems;
	});
	app.controller("PanelController", function(){
		this.tab=1;
});

	var gems = [{
 name: 'Dodecahedron',
 price: 2.95,
 description: 'Our most popular bottle, available in a variety of colors to help brighten up anybody’s gear. The large opening on our wide-mouth bottles easily accommodates ice cubes, fits most water purifiers and filters, and makes hand washing a breeze. The attached loop-top never gets lost and screws on and off easily. Printed graduations let keep track of your hydration. Dishwasher safe (Please make sure the top does not touch the heating element, or it will melt).',
 CanPurchase:true
},
{
name: 'Glass',
 price: 2.95,
 description: 'Natural Honey Facial Cleansing Bar – Enriched with natural herbal extracts. Remove dirt and impurities from your sensitive skin with our all-natural Cleansing Bar. Our gentle formula is especially designed to help neutralize skin irritations. This therapeutic blend is great for all skin types, especially sensitive or problematic skin – gentle yet effective. Directions: Wet the bar, massage into facial skin, avoiding the eye area and rinse thoroughly',
 CanPurchase:false
}
]
})();
