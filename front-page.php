<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner fadeInTop">

            <div class="bannerContainer">

            <video id="bgcVdo" autoplay loop muted z-index=2 position=absolute poster="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?>" alt="image de la bannière fleurs et chats">
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/videoHeader.mp4'; ?>" alt="video bannière fleurs et chats" type="video/mp4">
            </video>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants" z-index=3 position=absolute>

            </div>

        </section>
        <section id="story" class="story fadeIn">
         <h2>
             <span class="slideTitle">L'histoire</span>
          </h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters">
                <div class="main-character fadeIn">
                    <h3>
                        <span class="slideTitle">Les personnages</span>
                    </h3>
                    <?php
                    get_template_part('catsTemplate');
                    ?>
                </div>
            </article>
            <article id="place" class="place fadeIn">
                <div>
                    <img class="bigCloud cloud" src="<?= get_stylesheet_directory_uri() . '/assets/big_cloud.png' ?>" alt="Gros nuage">
                    <img class="smallCloud cloud" src="<?= get_stylesheet_directory_uri() . '/assets/little_cloud.png' ?>" alt="Petit nuage">

                    <h3>
                        <span class="slideTitle">Le Lieu</span>
                    </h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio" class="studio fadeIn">
                    <h2>
                        <span class="slideTitle">Studio Koukaki</span>
                    </h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

        <section id="oscarSection" class="oscarSection fadeIn">
            <div class="oscarContainer">
                <h3>Fleurs d’oranger & chats errants est nominé aux Oscars Short Film Animated de 2022 !</h3>
                <img src="<?= get_stylesheet_directory_uri() . '/assets/oscarsWritting.png'; ?>" alt="écriture 'oscars' stylisée">
            </div>
        </section>

    </main><!-- #main -->

<?php
get_footer();
