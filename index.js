const server = require("./server/index");
const models = require("./server/models");

const PORT = process.env.PORT || 5000;

models.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
  });
});
