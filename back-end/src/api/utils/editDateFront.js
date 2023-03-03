const formatedSale = (data) => {
  const {
    user_id,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    status,
  } = data;

  return {
    user_id: Number(user_id),
    seller_id: Number(seller_id),
    total_price: Number(total_price),
    delivery_address,
    delivery_number,
    sale_date: Date(),
    status,
  }
}

const formatedSaleProducts = (products, sale) => {
  const addSaleId = products.map((e) => {sale, e});

  return addSaleId;
}

const formatedData = (data) => {
  const sale = formatedSale(data);
  console.log(data, sale);
  const saleProduct = formatedSaleProducts(data.saleProduct, sale);

  return {
    sale,
    saleProduct,
  }
};

module.exports = { formatedData }
