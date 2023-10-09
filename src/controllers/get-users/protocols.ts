import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface GetUsersControllerUseCase {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface GetUsersUseCase {
  getUsers(): Promise<User[]>;
}
