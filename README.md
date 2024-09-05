# React Restaurant Delivery App

Cette application est un exemple d'application de commerce électronique construite avec React. Elle utilise `react-router-dom` pour gérer la navigation et inclut plusieurs pages : Accueil, Panier et Commande. Elle dispose également d'une barre de navigation (Navbar), d'une popup de connexion (LoginPopup), et d'un pied de page (Footer).

## Fonctionnalités

- **Barre de navigation** : Composant Navbar qui permet la navigation entre les différentes pages.
- **Popup de connexion** : Une popup s'affiche lorsqu'un utilisateur tente de se connecter, contrôlée via l'état `showLogin`.
- **Pages** :
  - **Accueil (Home)** : La page principale de l'application.
  - **Panier (Cart)** : Affiche les articles ajoutés au panier.
  - **Passer commande (PlaceOrder)** : Permet à l'utilisateur de passer une commande.
- **Footer** : Composant statique qui apparaît en bas de chaque page.

## Structure des fichiers

```plaintext
src/
│
├── components/
│   ├── Navbar/
│   │   └── Navbar.js        # Barre de navigation
│   ├── Footer/
│   │   └── Footer.js        # Pied de page
│   └── LoginPopup/
│       └── LoginPopup.js    # Popup de connexion
│
├── pages/
│   ├── Home/
│   │   └── Home.js          # Page d'accueil
│   ├── Cart/
│   │   └── Cart.js          # Page du panier
│   └── PlaceOrder/
│       └── PlaceOrder.js    # Page pour passer une commande
│
└── App.js                   # Composant principal de l'application
Prérequis
Avant d'exécuter cette application, assurez-vous d'avoir installé les éléments suivants :

Node.js
npm ou yarn

Installation
###1 Clonez le dépôt :
git clone https://github.com/ada97568/react-app.git

###2 Accédez au répertoire du projet :
cd react-app

###3 Installez les dépendances :
npm install
ou
yarn install

###4Exécution
Pour démarrer l'application localement, exécutez :
npm start
ou
yarn start

L'application sera accessible via http://localhost:3000.

Utilisation
Accédez à la page d'accueil : /
Consultez le panier : /Cart
Passez une commande : /order
Dépendances principales
React : Pour créer les interfaces utilisateur.
react-router-dom : Pour gérer la navigation dans l'application.
Licence
Ce projet est sous licence MIT.

