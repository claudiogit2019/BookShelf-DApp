# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del frontend al contenedor
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copia el código fuente del frontend al contenedor
COPY frontend/src ./src
COPY frontend/public ./public

# Copia los artefactos del contrato desde el backend al frontend
COPY backend/hardhat/artifacts ./src/artifacts

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
