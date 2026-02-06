// routes.ts
import { Route } from "next";

export const routes = {
  root: "/" as Route,

  landing: {
    home: "/home" as Route,
  },

  auth: {
    signin: "/signin" as Route,
    confirm: "/auth/confirm" as Route,
    callback: "/auth/callback" as Route,
  },

  error: "/error" as Route,


  about: "/about" as Route,
  contact: "/contact" as Route,
  blog: "/blog" as Route,
  career: "/career" as Route,
  services: "/services" as Route
};