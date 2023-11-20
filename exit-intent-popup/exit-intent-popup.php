<?php
/*
Plugin Name: Exit Intent Popup
Description: Emulate an exit intent popup on your WordPress website.
Version: 1.0
Author: Izzettin
*/

// Enqueue JavaScript and CSS
function enqueue_exit_intent_popup_scripts() {
    wp_enqueue_script('exit-intent-popup', plugins_url('assets/js/exit-intent-popup.js', __FILE__), array('jquery'), '1.0', true);
    wp_enqueue_style('exit-intent-popup', plugins_url('assets/css/exit-intent-popup.css', __FILE__));
}

add_action('wp_enqueue_scripts', 'enqueue_exit_intent_popup_scripts');
?>

<script>
var guideImageSrc = "<?php echo plugins_url('exit-intent-popup/assets/images/guide-popup-image-2.png'); ?>";
</script>
