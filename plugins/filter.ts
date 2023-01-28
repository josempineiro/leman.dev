import _ from "lodash";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      omit: _.omit,
    },
  };
});
