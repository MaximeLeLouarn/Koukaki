<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/css/theme.css'));
}
wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/JS/script.js', array('jquery'), '3.4.1', true);
wp_enqueue_script('swiper-script', get_stylesheet_directory_uri() . '/JS/swiper.js', array('jquery'), '3.4.1', true);
wp_enqueue_script('swiper-import', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
wp_enqueue_script('gsap-bundle', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js');
wp_enqueue_script('gsap-scroll-trigger', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js');
wp_enqueue_script('gsap-scroll-plugin', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js');
wp_enqueue_script('gsap-motionPath', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js');
// wp_enqueue_script('gsap-timeline', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js');
// wp_enqueue_script('gsap-tweenLite', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js');
// wp_enqueue_script('gsap-css', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js');
// wp_enqueue_script('gsap-bezier', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/BezierPlugin.min.js');
// wp_enqueue_script('scroll-magic', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js');
// wp_enqueue_script('scroll-magic-debug', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js');
// wp_enqueue_script('scroll-magic-animations', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js');


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}