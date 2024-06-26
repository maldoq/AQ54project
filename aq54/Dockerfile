# Utilisation de l'image Node.js LTS
FROM node:lts-alpine

# Création du répertoire de travail dans l'image
WORKDIR /app

# Installation des dépendances
COPY package.json package-lock.json /app/
RUN npm install

# Ajout des fichiers sources
COPY . /app

# Build de l'application (commande spécifique à votre projet)
RUN npm run build

# Exposer le port nécessaire pour l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start","start:prod"]
