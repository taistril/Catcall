/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
            
        
    },
    
    
    
//    function playAudio(imagenumber) {
//        try {
//    
//            var my_media = new Media(audio[imagenumber],
//                // success callback
//                function () {
//                    my_media.release();
//                },
//                // error callback
//                function (err) {
//                    my_media.release();
//                });
//    
//            // Play audio
//            my_media.play();
//        } catch (e) {
//            alert(e.message);
//        }
//};
    
    

//     if(media){ 
//       media.stop();
//       media.release();
//     }
//     media = new Media(...);

    

    

    playAudio: function(imagenumber) {
    
      document.images[imagenumber].src = "listengreen30x30.png";
      
      var my_media = null;

//var last_click_time = new Date().getTime();

//$("a").live("click", function(ev) {

//	var click_time = ev["timeStamp"];

//	if (click_time && (click_time - last_click_time) < 1000) {

//		ev.stopImmediatePropagation();

//		return false;

//	}    

//	last_click_x = click_x;

//	last_click_y = click_y;

//	last_click_time = click_time;

//});

      
      
      my_media = new Media(audio[imagenumber], function()  
      
      {
         this.release();
      });
      
      my_media.play();
           
      
    }

};

