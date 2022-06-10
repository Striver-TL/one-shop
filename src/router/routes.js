/*
 * @Author: Striver-TL
 * @GitHubAdress: https://github.com/Striver-TL
 * @Date: 2022-05-30 12:49:17
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-05-30 13:04:42
 * @Description: file content
 */
import Index from "@/pages/index/index";
import LoginIndex from "@/pages/login/index";
import Login from "@/pages/login/login";
import Register from "@/pages/login/register";
import IndexContent from "@/pages/index/content";
import IndexProduct from "@/pages/index/product";

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [
      {
        path: "/index",
        redirect: "/index/index",
      },
      {
        path: "/index/index",
        name: "indexContent",
        component: IndexContent,
      },
      {
        path: "/index/product",
        name: "indexProduct",
        component: IndexProduct,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginIndex,
    children: [
      {
        path: "/login",
        redirect: "/login/login",
      },
      {
        path: "/login/login",
        name: "login",
        component: Login,
      },
      {
        path: "/login/register",
        name: "register",
        component: Register,
      },
    ],
  },
];

export default routes;
