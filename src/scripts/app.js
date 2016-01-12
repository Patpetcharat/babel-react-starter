import $ from 'jquery';

$(document).ready(function(){
	console.log('ready');
	
	var mobileOS = getMobileOperatingSystem();
	
	var customURL = 'isy://?card_id=4';

	if(mobileOS == "iOS"){
		window.location = customURL;
	}else if(mobileOS == "Android"){
		var iframe = document.createElement("iframe");
		iframe.style.border = "none";
		iframe.style.width = "1px";
		iframe.style.height = "1px";
		// iframe.onload = function () {
		// 	document.location = alt;
		// };
		iframe.src = customURL;
		document.body.appendChild(iframe);
	}else{
		console.log('neither Android nor iOS');
	}
});

/**
 * Determine the mobile operating system.
 * This function either returns 'iOS', 'Android' or 'unknown'
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
		return 'iOS';
	}else if( userAgent.match( /Android/i ) ){
		return 'Android';
	}else{
		return 'unknown';
	}
}