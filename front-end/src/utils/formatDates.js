const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formatedDate = `${date.getDate().toString()
    .padStart(2, '0')}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;
  return formatedDate;
};

export default formatDate;
