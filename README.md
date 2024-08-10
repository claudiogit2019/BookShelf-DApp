

# BookShelf DApp

## Descripción

BookShelf DApp es una aplicación descentralizada (dApp) que permite a los usuarios comprar y vender libros en la red de pruebas Sepolia de Ethereum. El proyecto está dividido en dos partes principales: un backend que maneja los contratos inteligentes y un frontend que proporciona la interfaz de usuario.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de directorios:

```
bookshelf-dapp/
├── backend/
│   ├── Dockerfile
│   ├── hardhat/
│   │   ├── contracts/
│   │   │   └── BookShelf.sol
│   │   ├── artifacts/
│   │   ├── scripts/
│   │   ├── test/
│   │   └── hardhat.config.js
│   └── package.json
├── frontend/
│   ├── Dockerfile
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookList.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── docker-compose.yml
```

## Backend

El backend se encarga de la lógica del contrato inteligente utilizando Hardhat. Incluye los siguientes componentes:

- **Dockerfile**: Configuración para construir la imagen Docker del backend.
- **hardhat/**: Directorio que contiene la configuración de Hardhat, los contratos inteligentes, los scripts de despliegue y los artefactos generados.
- **package.json**: Archivo de configuración de dependencias de Node.js.

### Configuración

1. **Configura las variables de entorno**:

   Crea un archivo `.env` en `backend/hardhat/` con las siguientes variables:

   ```plaintext
   API_URL=http://localhost:8545
   PRIVATE_KEY=YOUR_64_CHARACTER_PRIVATE_KEY
   ```

   Reemplaza `YOUR_64_CHARACTER_PRIVATE_KEY` con tu clave privada.

2. **Instala las dependencias**:

   Ejecuta `npm install` en el directorio `backend`.

3. **Compila los contratos**:

   Ejecuta `npx hardhat compile` en el directorio `backend/hardhat`.

4. **Ejecuta el nodo de Hardhat**:

   Usa `npx hardhat node` para iniciar un nodo de pruebas local.

## Frontend

El frontend proporciona la interfaz de usuario de la dApp utilizando React. Incluye los siguientes componentes:

- **Dockerfile**: Configuración para construir la imagen Docker del frontend.
- **public/index.html**: Archivo HTML principal.
- **src/components/BookList.js**: Componente para listar los libros.
- **src/App.js**: Componente principal de la aplicación.
- **src/index.js**: Punto de entrada de la aplicación React.
- **src/index.css**: Estilos globales.

### Configuración

1. **Instala las dependencias**:

   Ejecuta `npm install` en el directorio `frontend`.

2. **Configura la conexión con el contrato inteligente**:

   Modifica `frontend/src/components/BookList.js` para usar la dirección del contrato desplegado:

   ```javascript
   const bookShelfAddress = "YOUR_CONTRACT_ADDRESS";
   ```

   Reemplaza `YOUR_CONTRACT_ADDRESS` con la dirección del contrato desplegado en la red.

3. **Inicia la aplicación**:

   Ejecuta `npm start` en el directorio `frontend` para iniciar el servidor de desarrollo.

## Ejecutar Localmente

Para ejecutar ambos componentes del proyecto localmente utilizando Docker:

1. **Construye y ejecuta los contenedores**:

   En el directorio raíz del proyecto, ejecuta:

   ```bash
   docker-compose up --build
   ```

   Esto construirá y ejecutará los servicios definidos en `docker-compose.yml`.

2. **Accede a la aplicación**:

   - **Frontend**: La aplicación estará disponible en `http://localhost:3000`.
   - **Backend**: El nodo Hardhat estará disponible en `http://localhost:8545`.

## Problemas Comunes

1. **Errores de compilación en el frontend**:

   - Asegúrate de que todos los archivos necesarios estén en las rutas correctas.
   - Verifica que los artefactos de Hardhat se generen correctamente y estén disponibles para el frontend.

2. **Errores de conexión con Hardhat**:

   - Verifica que Hardhat esté ejecutándose y que las variables de entorno estén configuradas correctamente.
   - Asegúrate de que la dirección del contrato en el frontend coincida con la dirección desplegada.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, por favor sigue las siguientes pautas:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y prueba.
4. Envía un pull request.


### Documentación de Contratos Inteligentes

**Descripción de los Contratos:**

- **BookShelf.sol**: Contrato inteligente que permite registrar y gestionar libros en la blockchain. Incluye funciones para agregar nuevos libros, listar libros y obtener detalles de un libro específico.

**Ejemplo de Funciones:**

- `addBook(string memory name, uint256 price)`: Agrega un nuevo libro con nombre y precio.
- `getBook(uint256 bookId)`: Devuelve los detalles de un libro dado su ID.
- `bookCount()`: Devuelve el número total de libros registrados.

### Instrucciones para Desplegar Contratos

Si deseas desplegar los contratos en una red diferente, sigue estos pasos:

1. **Configura las variables de entorno**: Actualiza `API_URL` y `PRIVATE_KEY` en el archivo `.env` con la URL de tu nodo y tu clave privada.

2. **Despliega el contrato**: Ejecuta el script de despliegue. Asegúrate de que el nodo esté en funcionamiento.

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

### Uso de Metamask

Para interactuar con la dApp, necesitarás MetaMask:

1. **Instala MetaMask**: Agrega la extensión MetaMask a tu navegador y configura una billetera.

2. **Conecta MetaMask con la dApp**: Asegúrate de que MetaMask esté conectado a la red de pruebas Sepolia o a tu nodo local.

3. **Asegúrate de tener fondos**: Asegúrate de tener fondos suficientes en tu cuenta de MetaMask para interactuar con el contrato inteligente. Puedes obtener fondos de prueba en un faucet de Sepolia.

### Seguridad

**Advertencias de Seguridad:**

- **Claves Privadas**: Nunca publiques ni compartas tu clave privada. Utiliza archivos `.env` para manejar claves de manera segura en entornos de desarrollo.

- **Revisión de Código**: Revisa y audita los contratos inteligentes antes de desplegarlos en redes principales.

### Desarrollo y Pruebas

**Instrucciones para Desarrolladores:**

- **Configuración del Entorno de Desarrollo**: Asegúrate de tener las versiones correctas de Node.js y npm instaladas. Utiliza `nvm` para gestionar versiones de Node.js si es necesario.

- **Ejecución de Pruebas**: Puedes ejecutar pruebas para los contratos inteligentes utilizando Hardhat:

   ```bash
   npx hardhat test
   ```

- **Actualización de Dependencias**: Mantén tus dependencias actualizadas ejecutando `npm update` en los directorios `backend` y `frontend`.

### Soporte y Contacto

**Contacto para Soporte:**

Si necesitas ayuda adicional, puedes ponerte en contacto a través de:

- **Correo Electrónico**: claudiodrllo2023@gmail.com
- **GitHub Issues**: [Repositorio de GitHub](https://github.com/claudiogit2019?tab=repositories)

### Roadmap

**Futuras Características:**

- Integración de una función para actualizar los detalles de los libros.
- Implementación de un sistema de comentarios para los libros.
- Mejora de la interfaz de usuario con características adicionales.



Saludos - Dev_antony