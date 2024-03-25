/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_HOST: "BASE_HOST";
  readonly API: "API";
  readonly AUTH_SERVICE: "AUTH_SERVICE";
  readonly LOGIN_PATH: "LOGIN_PATH";
  readonly ACCESS_TOKEN: "ACCESS_TOKEN";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  type KeyOf<T> = keyof T;
  type ValueOf<T> = T[keyof T];
}
