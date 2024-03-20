import http from "../../utils/http";

export const get_label_list = (data) => {
  return http({
    name: "get_label_list",
    data,
  });
};
