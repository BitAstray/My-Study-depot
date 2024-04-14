/*
 * @Author: Astray
 * @Date: 2023-09-23 12:52:17
 */

import { getAsyncPage } from "../Util";

const Home = getAsyncPage("../views/Home.vue");
const About = getAsyncPage("../views/Aboout.vue");
export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
