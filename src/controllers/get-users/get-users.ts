import { GetUsersControllerUseCase, GetUsersUseCase } from "./protocols";

export class GetUsersController implements GetUsersControllerUseCase {
  constructor(private readonly getUsersUseCase: GetUsersUseCase) {}

  async handle() {
    try {
      const users = await this.getUsersUseCase.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 200,
        body: "Something went wrong.",
      };
    }
  }
}
