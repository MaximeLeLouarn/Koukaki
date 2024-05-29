<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">

		<nav id="site-navigation" class="main-navigation">

        <div class="navBarContainer">
            
            <ul class="theSiteTitle">
                <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></li>
            </ul>
            
            <div class="closedMenu">

                <button class="menuToggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line1"></span>
                    <span class="line2"></span>
                    <span class="line3"></span>
                </button>

            </div>
            
        </div>

            <div class="openedMenu">

                <ul id="hamburgerMenuLinks">
                    <img class="imageLogoBurger" src="<?= get_template_directory_uri() . "/assets\images/logo.png" ?>" alt="Logo Fleurs d'oranger & chats errants">
                    <li class="linkBurger1"><a class="activeLinks" href="#story">Histoire</a></li>
                    <li class="linkBurger2"><a class="activeLinks" href="#characters">Personnages</a></li>
                    <li class="linkBurger3"><a class="activeLinks" href="#place">Lieu</a></li>
                    <li class="linkBurger4"><a class="activeLinks" href="#studio">Studio Koukaki</a></li>
                </ul>

                <ul class="bottomKoukaki">
                    <li><a href="#smallStudioKoukaki">STUDIO KOUKAKI</a></li>
                </ul>

                <div class="imagesMenuOuvert">
                    <img class="orchid" src="<?= get_stylesheet_directory_uri() . '/assets/orchid.png' ?>" alt="purple orchid">
                    <img class="sunFlower" src="<?= get_stylesheet_directory_uri() . '/assets/Sunflower.png' ?>" alt="sun flower">
                    <img class="blueCatHead" src="<?= get_stylesheet_directory_uri() . '/assets/blueCatHead.png' ?>" alt="head of blue cat">
                    <img class="blackCatHead" src="<?= get_stylesheet_directory_uri() . '/assets/blackCatHead.png' ?>" alt="head of black cat">
                    <img class="yellowCatHead" src="<?= get_stylesheet_directory_uri() . '/assets/yellowCatHead.png' ?>" alt="yellow cat head">
                    <img class="hibiscus" src="<?= get_template_directory_uri() . '/assets\images/Hibiscus.png' ?>" alt="red hibiscus">
                    <img class="orangeFlowerBall" src="<?= get_template_directory_uri() . '/assets\images/flower.png' ?>" alt="orange flower ball">
                    <img class="superRandomFlower" src="<?= get_template_directory_uri() . '/assets\images/random_flower.png' ?>" alt="a very random flower">
                </div>

            </div>

		</nav><!-- #site-navigation -->

	</header><!-- #masthead -->