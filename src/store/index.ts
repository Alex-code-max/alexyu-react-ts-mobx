import { observable } from "mobx";
import evaluationStore from "./evaluationStore";
const store = observable({
  ...evaluationStore
});
export default store;
