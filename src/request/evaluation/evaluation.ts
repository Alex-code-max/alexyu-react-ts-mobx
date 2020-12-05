import { apiGet } from "../api";
export default {
  getIndustryArr: (params?: any) => apiGet("/ui/basic/industry", params)
};
