import {Server} from "./server"

export interface CustomResponse {
  data: { servers?: Server[]; server?: Server };
}
