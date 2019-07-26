const app = require('express')();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('*', (req, res) => {
  res.json({
    message: 'Express on Unubo Cloud',
    secret: process.env.SECRET,
  })
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
