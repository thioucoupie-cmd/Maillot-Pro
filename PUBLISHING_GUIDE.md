# Guide de Publication - Maillot Pro 🚀

Ce document explique comment transformer votre application web en une application officielle sur le **Google Play Store** et l'**Apple App Store**.

## ⚠️ Prérequis Indispensables
La publication sur les stores officiels nécessite que **vous** possédiez des comptes développeurs (pour des raisons de sécurité, de paiement et de propriété légale) :

1.  **Google Play Console** : ~25 USD (frais uniques). [S'inscrire ici](https://play.google.com/console/signup)
2.  **Apple Developer Program** : ~99 USD / an. [S'inscrire ici](https://developer.apple.com/programs/)

---

## 🛠 Option 1 : Utiliser PWABuilder (Recommandé)
C'est la méthode la plus simple pour transformer notre code actuel en fichiers pour les stores sans écrire de code supplémentaire.

1.  Allez sur [PWABuilder.com](https://www.pwabuilder.com/).
2.  Entrez l'URL où votre application est hébergée (ou déposez le lien du dépôt GitHub).
3.  L'outil va analyser votre `manifest.json` (que j'ai déjà créé).
4.  Cliquez sur **"Package for Stores"**.
5.  **Pour Android** : Téléchargez le fichier `.aab`.
6.  **Pour iOS** : Téléchargez le projet Xcode.

---

## 🤖 Publication sur Google Play Store (Android)
1.  Connectez-vous à votre **Google Play Console**.
2.  Créez une nouvelle application.
3.  Remplissez les informations (Nom, Description, Icônes, Captures d'écran).
4.  Allez dans **Production > Créer une nouvelle version**.
5.  Téléversez le fichier `.aab` généré par PWABuilder.
6.  Envoyez pour examen (validation en 2 à 7 jours).

---

## 🍎 Publication sur Apple App Store (iOS)
*Note : Nécessite un Mac ou un service de build en ligne.*

1.  Connectez-vous à **App Store Connect**.
2.  Créez un nouvel enregistrement d'application.
3.  Utilisez **Xcode** pour ouvrir le projet généré par PWABuilder.
4.  Liez votre compte Apple Developer à Xcode.
5.  Cliquez sur **Product > Archive**, puis **Distribute App**.
6.  Une fois l'app envoyée sur App Store Connect, soumettez-la pour examen (validation en 24h à 3 jours).

---

## 📦 Ce que j'ai déjà préparé pour vous :
- [x] **Manifeste PWA** : Le fichier `manifest.json` est prêt pour que les stores reconnaissent l'app.
- [x] **Icônes Mobiles** : Les balises meta sont configurées pour l'affichage plein écran.
- [x] **Code Source** : Tout est propre et versionné sur GitHub.

## 💡 Conseil pour la monétisation
Puisque vous avez un bouton WhatsApp direct (773972689), assurez-vous de préciser dans la description du store que vous offrez un service client direct et des moyens de paiement locaux pour le Sénégal (Wave/Orange Money).
