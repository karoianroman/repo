c// Ідеальний варіант для Cloud Run та локальної розробки
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Сервер працює на порту ${port}`);
});
