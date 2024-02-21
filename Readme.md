# Projet Gestion des rôles et permissions avec Authentification

Ce projet est une application rôles et permissions qui intègre une authentification utilisateur. Il utilise React , Redux toolkit pour le frontend, Node.js et Express pour le backend, ainsi que MongoDB via Mongoose pour la gestion de la base de données. L'authentification est gérée à l'aide de JSON Web Tokens (JWT).

## Installation

### Backend

I. Naviguez vers le dossier du backend :

   ```bash
   cd server 
   ```

1. Installez les dépendances :

 ```bash
   yarn
   ```


2. Configurez votre base de données MongoDB dans le fichier .env.

3. Lancez le serveur backend :

    ```bash
    yarn start
    ```

Frontend
Naviguez vers le dossier du frontend :


Configurez l'URL du backend dans le fichier .env.

Lancez l'application frontend :

   ```bash
   yarn run dev
   ```
## Fonctionnalités
Authentification utilisateur : Utilisation de JWT pour sécuriser les endpoints et gérer les sessions utilisateur.
Gestion des rôles et permission : CRUD.
Interface utilisateur intuitive : Utilisation de React pour une expérience utilisateur fluide.
Icônes attrayantes : Intégration de React Icons pour des icônes visuellement attrayantes.
## Structure du Projet


server/ : Contient le code du serveur Node.js avec Express.
client/ : Contient le code de l'application frontend en React.
## Technologies Utilisées
Frontend :

React
React Icons
Redux toolkit
Shad cn

Backend :

Node.js
Express
Mongoose (MongoDB)
## Middleware et Authentification :

CORS
Cookie Parser
JSON Web Tokens (JWT)
## Contribuer
## Fork le projet

Créez une branche (git checkout -b feature/nouvelle-fonctionnalite)
Committez vos modifications (git commit -m 'Ajout d'une nouvelle fonctionnalité')
Pushez vers la branche (git push origin feature/nouvelle-fonctionnalite)
Ouvrez une Pull Request
N'hésitez pas à signaler des problèmes ou à proposer des améliorations.

Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

rust
Copy code

N'oubliez pas d'ajuster les détails spécifiques à votre projet, tels que la
