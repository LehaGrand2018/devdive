ARG NODE_VERSION=22.11.0

FROM node:${NODE_VERSION}-alpine


# Устанавливаем рабочий каталог
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все файлы проекта
COPY . .

# Указываем порт, который будет использоваться приложением
EXPOSE ${PORT}

# Запуск приложения
CMD ["npm", "start"]

