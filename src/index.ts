import express from "express";
import { config } from "dotenv";
import { MongoGetUsersUseCase } from "./repositories/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoCreateUserUseCase } from "./repositories/create-users/mongo-create-user";
import { CreateUserController } from "./controllers/create-users/create-user";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  app.get("/users", async (req, res) => {
    const mongoGetUsersUseCase = new MongoGetUsersUseCase();

    const getUsersConstroller = new GetUsersController(mongoGetUsersUseCase);

    const { body, statusCode } = await getUsersConstroller.handle();

    res.send(body).status(statusCode);
  });

  app.post("/users", async (req, res) => {
    const mongoCreateUserUseCase = new MongoCreateUserUseCase();

    const createUserControllerUseCase = new CreateUserController(
      mongoCreateUserUseCase
    );

    const { body, statusCode } = await createUserControllerUseCase.handle({
      body: req.body,
    });

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
