
(function() {

    /******************************
     * PACKAGE DATA AND CONSTRUCTOR OBJECTS
     */

     //PACKAGE DATA ARRAY (simulating a database)

     var data = [ // CHECK THIS, IT SEEMS LIKE IT'S ERROR-ING ************
         {
             name: 'Path Intellisense',
             description: 'Helps autocomplete filenames.',
             author: 'Christian Kohler',
             url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
             downloads: 2725467,
             stars: 79,
             price: 0.00,
             selector: 'p1' 
         },
         {
            name: 'Guides',
            description: 'Guides is simply an extension that add various indentation guide lines',
            author: 'spywhere',
            url: 'https://marketplace.visualstudio.com/items?itemName=spywhere.guides',
            downloads: 291280,
            stars: 44,
            price: 0.00,
            selector: 'p2' 
        },
        {
            name: 'Open in Browser',
            description: 'Enables you to view an HTML file in your default browser.',
            author: 'TechER',
            url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
            downloads: 1639733,
            stars: 40,
            price: 0.00,
            selector: 'p3' 
        }
     ];

     // (VS Code) Package constructor function
     function Package(data) {
         this.name = data.name;
         this.description = data.description;
         this.author = data.author;
         this.url = data.url;
         this.downloads = data.downloads;
         this.stars = data.stars;
         this.selector = data.selector;

         this.getFormattedDownloads = function () {
             return this.downloads.toLocaleString();
         }

         this.getFormattedStars = function() {
             return this.stars.toLocaleString();
         }
     }

     /****************
      * UTILITY FUNCTIONS
      ***************/

      // Returns today's date, formatted
      var getTodaysDate = function() {
          var today = new Date();
          return today.toDateString();
      };

      //Returns DOM element by ID. A shorthand function for document.getElementByID
      var getEl = function(id) {
          return document.getElementById(id);
      }
      
      /****
       * Write's package object's data to appropriate DOM elements using package selector property
       */

       var writePackageInfo = function(package) {
           // Get reference to DOM elements
           var selector = package.selector,
           nameEl = getEl(selector + '-name'),
           descEl = getEl(selector + '-description'),
           authEl = getEl(selector + '-author'),
           downloadEl = getEl(selector + '-downloads'),
           starsEl = getEl(selector + '-stars');

           nameEl.textContent = package.name;
           descEl.textContent = package.description;
           authEl.textContent = package.author;
           downloadEl.textContent = package.getFormattedDownloads();
           starsEl.textContent = package.getFormattedStars();
       }

       // USE package data and constructor objects to build each package,
       // then add data to page by DOM functions

       dateEl = getEl('date');
       dateEl.textContent = getTodaysDate();

       var pathIntellisense = new Package(data[0]);
       writePackageInfo(pathIntellisense);

       var guides = new Package(data[1]);
       writePackageInfo(guides);

       var openInBrowser = new Package(data[2]);
       writePackageInfo(openInBrowser);

}());
