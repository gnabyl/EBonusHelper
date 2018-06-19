// ==UserScript==
// @name         EBonus Helper
// @version      1.0
// @description  Automatic click next video and bubble
// @author       BangJDev
// @match        https://ebonus.gg/earn-coins/watch
// ==/UserScript==

$( document ).ready(function() {
    console.log("Loaded!");
    function click_confirm() {
		$('body > div.sweet-alert.showSweetAlert.visible > button.confirm').click();
		console.log("Clicked!");
	}
	function click_next() {
		$('#next-video-btn').click();
		console.log("Clicked!");
	}

	function click_bubble() {
		$(".coins_popup").click();
		console.log("Clicked popup!");
	}

    setInterval(function() {
    	click_confirm();
    	click_bubble();
    }, 200);
});
