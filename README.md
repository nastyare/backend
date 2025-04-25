# Node.js API с авторизацией и ролями

Этот проект представляет собой API, созданный с использованием **Node.js**, **Express**, **MongoDB**, **Mongoose** и **JWT**.

## Как запустить проект

### 1. Установка зависимостей
```bash
npm install -g yarn
```

### 2. Настройка переменных окружения
Создайте в корневой папке файл **`.env`** и добавьте туда:
```env
PORT=2000
URI=mongodb://127.0.0.1:27017/mongo
```

### 3. Запуск MongoDB (локально или в облаке)
Если используете **локальную MongoDB**, запустите её командой:
```bash
mongod --dbpath <путь_к_базе>
```

### 4. Запуск сервера
```bash
(npx) yarn run dev
```
Сервер запустится на `http://localhost:2000`.

---

## API Эндпоинты

### 1. **Регистрация пользователя**
`POST /api/auth/register`
#### Тело запроса:
```json
{
  "firstName": "Иван",
  "lastName": "Иванов",
  "login": "ivan123",
  "password": "password123",
  "role": "student" // или "teacher"
}
```

### 2️. **Авторизация (вход)**
`POST /api/auth/login`
#### Тело запроса:
```json
{
  "login": "ivan123",
  "password": "password123"
}
```

### 3️. **Получение данных о себе** (требуется токен)
`GET /api/users/me`

### 4️. **Удаление пользователя** (требуется токен)
`DELETE /api/users/delete`

### 5. **Курсы** 
`POST /api/courses`
`GET /api/allcourses`
`GET /api/:id`
`PUT /api/courses/:id`
`DELETE /api/courses/:id`

### 6. **Избранное** (нужно авторизоваться)
`POST /favorites/:courseId` 
`DELETE /favorites/:courseId`
`GET /favorites/`

### 7. **Тэги** (нужно авторизоваться)
`POST /tags/` 
`GET /tags/` 
`POST /tags/:tagId/courses/:courseId`

## Технологии
- **Node.js** (сервер)
- **Express** (роутинг)
- **MongoDB** + **Mongoose** (база данных)
- **JWT** (аутентификация)
- **dotenv** (переменные окружения)

---

## Дополнительные команды

### Остановка сервера
```bash
CTRL + C
```


