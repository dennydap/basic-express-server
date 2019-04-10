const
    express = require('express'),
    viewRoutes = require('./routes/view/'),
    apiRoutes = require('./routes/api/'),
    app = express(),
    port = 3000;

app.use('/', viewRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`[SUCCESS] Server listening on port ${port}!`))