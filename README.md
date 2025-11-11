# Description du projet

E-AUTO SCHOOL est une application web développée pour faciliter la gestion administrative des auto-écoles.
Elle permet aux administrateurs de gérer les candidats, les séances de code, de conduite et d’examens, les véhicules et les ressources humaines, tout en améliorant la planification et le suivi des activités quotidiennes.

# Notes: L'application n'est pas encore terminée et doit être améliorée

# Objectifs principaux

* Automatiser la gestion des inscriptions et des paiements en ligne.

* Offrir aux candidats la possibilité de réviser le code de la route à distance via des tests interactifs.

* Planifier efficacement les séances de conduite, de code et les examens.

* Gérer les véhicules (ajout, maintenance, assurances, visites techniques, etc.).

* Centraliser la gestion des candidats et des employés.

# Architecture logicielle du projet : MVC

Le projet est structuré selon le modèle MVC, garantissant une séparation claire des responsabilités :

* Model → représente les données et les entités principales du système (Person, Car, Exam, Session, Question).

* View → gère les pages HTML générées par le serveur, affiche les données, et gère les interactions utilisateur.

* Controller → reçoit les requêtes du frontend, exécute la logique métier via les services, puis renvoie les données appropriées.

Cette approche facilite la maintenance et  la scalabilité du projet.

# Architecture réseau du projet

L’application est basée sur une architecture client-serveur composée de deux parties principales :

🔹 Frontend : Interface moderne et responsive, qui gère l’interface utilisateur et la communication avec le serveur via des requêtes HTTP (API REST).

* Technologie : ReactJS

* Composants principales:

- Page d’accueil pour E-Auto School: Elle présente l’application et ses services, propose un aperçu du portfolio, et inclut plusieurs sections clés comme section "À propos", "Foncionnalités", "Contact", "Avis".

- 2 Interfaces utilisateurs: La première est destinée aux administrateurs et la deuxième est destinée aux candidats. Elles assurent la gestion des inscriptions, connexions, paiements, planification et gestion des ressources.

🔹 Backend : Il traite les requêtes, applique la logique métier et interagit avec la base de données.

* Technologie : NestJS (TypeScript/JavaScript)

* API REST connectée à la base de données PostgreSQL.

* Modules principaux :

person → gestion des utilisateurs (inscription, authentification avec JWT, CRUD).

car → gestion des véhicules.

exam → gestion des examens et des questions.

session → gestion des séances de conduite et de code.

question → gestion des tests de code de la route.

🔹 Base de données

Système de gestion : PostreSQL

# Environnement de développement

IDE : Visual Studio Code

Frontend : ReactJS + Bootstrap + FontAwesome

Backend : NestJS + Axios + JWT

Base de données : PostreSQL

Outils : Postman (tests d’API)
