/* global Module */

/* Magic Mirror
 * Module: WordClock
 *
 * By Laurenz Bremicker http://www.laurenzbremicker.de
 * MIT Licensed.
 * Most of the code was copied from íFrame by Ben Williams http://desertblade.com
 */

Module.register("MMM-WordClock",{
		// Default module config.
		defaults: {
				height:"250px",
				width:"250px",
                                updateInterval: 0.5 * 60 * 1000,
                                url: ["http://laurenzbremicker.de/wordclock/index.html#l=de"],
                                scrolling: "no"
		},

        start: function () {
                self = this;
                var count = 0;
                if (this.config.url.length > 1 ) {
                      setInterval( function () { 
                         self.updateDom(1000);
                         console.log('update' + count++)
                         }, this.config.updateInterval);
                }
	},
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
resume: function() {
   console.log("Resuming");
   return this.getDom();
},

        // Override dom generator.
	getDom: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
                iframe.scrolling = this.config.scrolling;
                var url_index = 0;
         //       console.log("currentURL:" + this.currentURL);
                var repeat = true;
                while(repeat) {
                    url_index = this.getRandomInt(0,this.config.url.length);
                    futureURL = this.config.url[url_index];
                    console.log("URL_length:" + this.config.url.length + " " + "URL_index:" + url_index + " " + "url:" + futureURL);
           //         if( futureURL == currentURL) {
                        iframe.src = futureURL;
             //           currentURL = futureURL;
                        repeat = false;
               //     } 
                }
		return iframe;
	}

});
