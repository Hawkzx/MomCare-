# Usa uma imagem base do Node.js
FROM node:16

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do projeto para o contêiner
COPY package.json package-lock.json ./
COPY src ./src
COPY database ./database
COPY public ./public

# Instala as dependências
RUN npm install

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "src/server.js"]