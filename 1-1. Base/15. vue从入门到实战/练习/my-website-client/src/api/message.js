/*
 * @Author: Astray
 * @Date: 2023-06-15 17:08:40
 */
import request from "./request";

export async function getMessages(page = 1, limit = 10) {
  return await request.get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}

export async function postMessage(data) {
  return await request.post("/api/message", data);
}
