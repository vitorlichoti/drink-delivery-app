import { readStorage } from './localStorage';

const tokenValidator = () => {
  const user = readStorage();
  console.log(user);
};

export default tokenValidator;
