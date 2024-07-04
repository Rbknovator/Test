
# 📊 CRM Integration Web Application

## 📋 Описание

Это веб-приложение для интеграции с CRM системой, написанное с использованием React. Приложение позволяет пользователям вводить данные о клиентах и заданиях, а затем отправлять эти данные в CRM систему Pipedrive для создания сделок и заметок.

## 🚀 Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone <URL вашего репозитория>
   ```

2. **Перейдите в директорию проекта:**
   ```bash
   cd <имя директории>
   ```

3. **Установите зависимости:**
   ```bash
   npm install
   ```

## 💻 Использование

1. **Запустите приложение:**
   ```bash
   npm start
   ```
   Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы просмотреть приложение.

## 🗂 Структура проекта

- `src/components/JobForm.js` - Компонент формы для ввода данных о клиенте и задании.
- `src/components/JobList.js` - Компонент для отображения списка существующих заданий.
- `src/components/Modal.js` - Компонент для отображения модальных окон с сообщениями.
- `src/App.js` - Главный компонент приложения, управляющий состоянием и логикой.

## 📦 Компоненты

### JobForm
Форма для ввода данных о клиенте и задании. Поля включают:
- Имя
- Фамилия
- Телефон
- Email
- Тип задания
- Источник задания
- Описание задания
- Адрес
- Город
- Штат
- Почтовый индекс
- Район
- Дата начала
- Время начала
- Время окончания
- Дополнительный выбор

### JobList
Список существующих заданий. Позволяет выбирать задание для редактирования.

### Modal
Модальное окно для отображения сообщений пользователю, например, успешного создания задания или ошибок.

## 🔌 API Интеграция

Приложение интегрируется с CRM системой Pipedrive для создания сделок и добавления заметок. Данные отправляются через POST запросы к API Pipedrive.

## 📚 Пример использования

1. Заполните форму с данными клиента и задания.
2. Нажмите "Save info" для сохранения данных локально.
3. Нажмите "Create Job" для отправки данных в CRM систему Pipedrive.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
