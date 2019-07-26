const app = require('express')();
const PORT = process.env.PORT || 4000;

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    statusCode: 200,
  })
});

app.get('*', (req, res) => {
  res.json({
    message: 'Express on Unubo Cloud',
  })
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
