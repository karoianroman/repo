const app = require('./app');

// 1. Беремо порт з хмари, якщо його немає — ставимо 3000 для локалу
const port = process.env.PORT || 3000;

// 2. Додаємо '0.0.0.0', щоб приймати запити ззовні контейнера
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
