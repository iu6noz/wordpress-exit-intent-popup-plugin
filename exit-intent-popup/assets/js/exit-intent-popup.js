jQuery(document).ready(function ($) {
    var hasSeenPopup = getCookie('exit_intent_popup_shown');
    
    if (hasSeenPopup === null) {
        showExitIntentPopup();
    }

    function showExitIntentPopup() {
        var popupHtml = `
            <div id="exit-intent-overlay"></div>
            <div id="exit-intent-popup">
				<div id="exit-intent-popup-inner-container">
					<div class="container exit-intent-popup-inner-container">
						<span class="close-button"><svg fill="#676f84" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"> <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path></svg></span>
						<div class="row">
							<div class="col-sm-5 col-12">
								<div class="text-container">
									<span><strong>FREE GUIDE</strong></span>
									<span><strong>100K+ Campaigns Studied. Here Are the 5 Popup Ideas Driving Ecom Revenue in 2023.</strong></span>
									<span>Get access to our free guide to see how top DTC brands are using popups to drive revenue.</span>
									<input type="email" name="contact[email]" placeholder="Enter your email" required="" aria-required="true">
									<a class="read-more-button" href="#">Start Reading&nbsp;→</a> 
									<span>The info provided will be used to deliver this plus other similar content. <a class="privacy-button" href="#">Privacy Policy</a></span>
								</div>								
							</div>
							<div class="col-sm-7 d-none d-sm-block">
								<div class="image-holder">
									<img class="img-fluid" src="${guideImageSrc}" alt="Guide Image">
								</div>
							</div>
						</div>
					</div>
				</div>		
            </div>
        `;

        $('body').append(popupHtml);

        var showPopup = true;
        
        $(document).on('mouseleave', function (e) {
            if (e.clientY <= 0 && showPopup) {
                $('#exit-intent-overlay, #exit-intent-popup').show();
                showPopup = false; // Prevent repeated display
            }
        });

        $('#exit-intent-popup .close-button').click(function () {
            $('#exit-intent-overlay, #exit-intent-popup').hide();
        });

        setCookie('exit_intent_popup_shown', 'true', 30); // 30 days
    }

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    function getCookie(name) {
        var nameEQ = name + '=';
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }
});
