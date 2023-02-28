const FOUR_HUNDRED_FOUR = 404;
const TWO_HUNDRED = 200;

const notFound = (code) => code === FOUR_HUNDRED_FOUR;

const success = (code) => code === TWO_HUNDRED;

export default {
  notFound,
  success,
};
