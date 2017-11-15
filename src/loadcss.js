/* loadCSS [c]2017 Ante Laca */
(function(w){

    'use strict';

    var d = w.document;      
    // load css
    var loadCSS = function(href, media, callback){

        var link = d.createElement('link');
                                       
        link.rel = 'stylesheet';
        link.href = href;
        link.media = media || 'all';
        d.head.appendChild(link);

        if(typeof callback === 'function') {
            link.onload = function(){
                callback(link);
            };
        }
    }

    var supportsPreload = function(){
        var list = d.createElement('link').relList;
        if (!list || !list.supports) {
            return false;
        }
        return list.supports('preload');
    };  

    // check if browser doesn't supports preload
    if (!supportsPreload()) {

        d.addEventListener('DOMContentLoaded', function(){   
            // get all link elements and load them with loadCSS 
            var links = d.getElementsByTagName('link');

            for (var i in links) {
                if (links[i].rel === 'preload' && links[i].getAttribute('as') === 'style') { 
                    loadCSS(links[i].href, links[i].getAttribute('media') || 'all');
                }
            }

        }, false);

    }

    w.loadCSS = loadCSS;

})(this);