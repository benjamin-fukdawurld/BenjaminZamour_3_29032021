# Dynamisez une page web avec des animations CSS

## Ohmyfood!

Ohmyfood! est une entreprise de commande en ligne qui désire implenter son concept sur le marché français.
Le projet consiste donc à créer un <abbr title="Proof of concept">POC</abbr> de leur site à partir des maquettes suivante:

-   [Accueil](./Accueil.png)
-   [Menu - À la française](./Menu_-_a_la_francaise.png)
-   [Menu - Le délice des sens](./Menu_-_Le_délice_des_sens.png)
-   [Menu - La palette du goût](./Menu_-_La_palette_du_gout.png)
-   [Menu - La note enchantée](./Menu_-_La_note_enchantee.png)

Les menus des restaurants sont disponible [ici](./Oh_my_food_-_Textes.txt)

## Identité graphique

### Les Polices d'écriture

Pour le Logo et les titre la police choisie est _Shirkhand_ et pour le reste du texte la police _Roboto_ sera utilisée.

### Les couleurs

-   La couleur primaire sera #9356DC
-   La couleur secondaire sera #FF79DA
-   La couleur tertiaire sera #99E2D0

## Contraintes techniques

-   Le site devra être utiliser uniquement du _HTML5_ et du _CSS3_
    -   Un précompilateur _CSS_ est toutefois **recommandée**
-   L'utilisation de framework front-end est **proscrite**
-   Le code _CSS_ ne devra pas être inséré dans les balises _HTML_
-   Le site sera réalisé avec une approche _mobile-first_
    -   Sur tablette et desktop les choix de mise en page sont à la discrétion du développeur
-   Le site doit être compatible avec les versions de _chrome_ et de _firefox_ les plus récentes
-   Le site ne devra contenir aucune erreur lors de la validation via W3C

## Interaction avec l'utilisateur

-   Les restaurants sont présenté sous forme de carte dans la page d'accueil
    -   Un clic sur une carte doit renvoyer vers la page du menu du restaurant correspondant
-   Le lien _Contact_ dans le footer devra renvoyer une adresse email
-   Au survol les boutons principaux devront s'éclaircir et leurs ombres devront être plus visible
-   Un boutton j'aime en forme de cœur devra être animé et se remplir (au survol ou au clic)
-   Un _loading spinner_ animé devra apparaitre lorsque l'on arrive sur la page d'accueil
    -   Il devra être visible pendant 1 à 3 seconde et couvrir l'intégralité de l'écran
-   Lors de l'arrivée sur un menu, les plats devront apparaitre progressivement avec un léger décalage
    -   Il sera possible de les grouper (entrées, plats, desserts)
    -   Une coche animée devra apparaitre de façon animé en entrant de droite à gauche au survol ou au clic sur le menu
    -   si l'intitulé d'un plat est trop long il sera rogné et on ajoutera des points de suspension
