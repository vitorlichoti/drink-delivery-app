const { getUserEmail } = require("../services/admin.service");

const formatedSale = async (data) => {
  const {
    userEmail,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    status,
  } = data;
  const { id } = await getUserEmail(userEmail);

  return {
    userId: Number(id),
    sellerId: Number(seller_id),
    totalPrice: Number(total_price),
    delivery_address,
    delivery_number,
    sale_date: Date(),
    status,
  }
}

const formatedSaleProducts = (products, sale) => {
  const addSaleId = products.map((e) => ({
    saleId: sale,
    productId: e.id,
    quantity: e.quantity,
  }));

  return addSaleId;
}

const formatedData = (data) => {
  const sale = formatedSale(data);
  
  return sale;
};

module.exports = { formatedData, formatedSaleProducts }
