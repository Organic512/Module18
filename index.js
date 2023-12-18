const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/social-network', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

require('./models/user');
require('./models/thought');
require('./models/reaction');

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/thoughts', require('./routes/thoughtRoutes'));
app.use('/api/reactions', require('./routes/reactionRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
