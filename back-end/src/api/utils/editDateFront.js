const { getUserEmail } = require('../services/admin.service');

const formatedSale = async (data) => {
  const {
    userEmail,
    sellerId,
    total_price,
    deliveryAddress,
    deliveryNumber,
    status,
  } = data;

  const { id } = await getUserEmail(userEmail);

  return {
    userId: Number(id),
    sellerId: Number(sellerId),
    totalPrice: Number(total_price),
    deliveryAddress,
    deliveryNumber,
    saleDate: Date(),
    status,
  };
};

const formatedSaleProducts = (products, sale) => {
  const addSaleId = products.map((e) => ({
    saleId: sale,
    productId: e.id,
    quantity: e.quantity,
  }));

  return addSaleId;
};

const formatedData = (data) => {
  const sale = formatedSale(data);
  
  return sale;
};

module.exports = { formatedData, formatedSaleProducts };
