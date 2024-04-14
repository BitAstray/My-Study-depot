/*
 * @Author: Astray
 * @Date: 2023-06-18 14:12:37
 */
import Cookies from "js-cookie";

const TokenKey = "tokenAdmin";

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
