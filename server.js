const app = require('express')();
const PORT = process.env.PORT || 4000;
const secret = process.env.SECRET || 'No secret';

app.get('*', (req, res) => {
  res.json({
    message: 'Express on Unubo Cloud',
    secret,
  })
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
