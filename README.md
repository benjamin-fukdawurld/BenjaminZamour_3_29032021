# BenjaminZamour_3_29032021

[![HTML5 Validator](https://github.com/benjamin-fukdawurld/BenjaminZamour_3_29032021/actions/workflows/main.yml/badge.svg?event=push)](https://github.com/benjamin-fukdawurld/BenjaminZamour_3_29032021/actions/workflows/main.yml)

Projet n°3 de la formation OCR DW - Dynamisez une page web avec des animations CSS

## Dynamisez une page web avec des animations CSS

Le sujet du projet est disponible [ici](https://openclassrooms.com/fr/paths/185/projects/637/assignment).

Le cahier des charges est disponible [ici](docs/Brief_creatif_-_Ohmyfood!.pdf)

Une synthèse des consigne est disponible [ici](docs/instructions.md).

La page générée est visible [ici](https://benjamin-fukdawurld.github.io/BenjaminZamour_3_29032021/).

Pour générer le projet facilement à l'aide de docker, clonez le repo placez vous à sa racine et
exécutez les commande suivantes:

```
# Build docker image for the project
docker build -t ocr-project3 .

# Run container to generate html and css files
docker run -v $(pwd)/dist:/usr/src/app/dist ocr-project3
```

Le projet est également éxécutable depuis vscode de deux façons:
- <kbd>CTRL</kbd> + <kbd>⇧ Shift</kbd> + <kbd>B</kbd>
- <kbd>F5</kbd> pour le débugage