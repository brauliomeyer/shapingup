(function() {
var app = angular.module('store', []);
    
    app.controller("PanelController", function() {
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });
    
    app.controller("ReviewController", function() {
        this.review = {};
        
        this.addReview = function(product) {
            product.review.push(this.review);
            this.review = {};
        };
    });
    
    
    app.controller("StoreController", function() {
        this.products = [
        {
            name: "Dodecahedron",
            price: 2.96,
            description: 'Hello world!',
            images: [
            {
                full:'view/img/pandb.jpeg',
                thumb:'pandb.png'
            }],
            reviews: 
            [{
                stars: 5,
                body: "I love this product!",
                author: "Joe@thomas.com"
            },
            {
                stars: 1,
                body: "This product sucks!",
                author: "Joe@thomas.com"
            }],
            canPurchase: true,
            soldOut: false
        },
        {
            name: "Pentagonal Gem",
            price: 5.96,
            description: 'Hello world!',
            images: [
                {
                    full:'view/img/pandb.jpeg',
                    thumb:'pandb.png'
                }],
            canPurchase: true,
            soldOut: false        }           
        ]; 
    });
})();