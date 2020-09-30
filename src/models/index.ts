import { combineReducers } from "redux";
import { Middleware } from "@/action";
import { Loading } from "./loading";
import { Auth } from "./auth";
import { Global } from "./global";

type ModulesAll = {
  loading: Loading;
  auth: Auth;
  global: Global;
};

export type Modules = keyof ModulesAll;
export type Actions = { [k in Modules]: ModulesAll[k]["methods"] };
export type Reducers = { [k in Modules]: ModulesAll[k]["initialState"] };

const models = [Loading, Auth, Global];

const actions: any = {};
const reducers: any = {};

models.forEach(Model => {
  const model = new Model();
  const name: Modules = model.namespace;

  reducers[name] = model.handler;
  actions[name] = {};

  for (const key in model.methods) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    actions[name][key] = (data: any) => Middleware.compose(model.methods[key])(data, key);
  }
});

const rootReducer = combineReducers(reducers);

export { rootReducer, actions };
