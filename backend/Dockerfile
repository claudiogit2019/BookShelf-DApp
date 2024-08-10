# Usa una imagen base con Node.js
FROM node:18

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY backend/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY backend/ .

# Compila los contratos de Hardhat
RUN npx hardhat compile

# Expon el puerto si es necesario
EXPOSE 8545

# Define el comando por defecto
CMD ["npx", "hardhat", "node"]
