
Page({
  data: {
    order: [{
      orderID: "CP20180329",
      name: "鲽鱼红酒",
      status: "已完成",
      images: "../../component/resources/pic/dish-5.jpg",
      endData: "2018-03-29 14:19:00",
      cont: "1",
      money: "4.9"
    }],

  },
/*   onLoad: function () {
    let time = wx.getStorageSync('time');
    let cart = wx.getStorageSync('cart')
    let tabKind = wx.getStorageSync('tabvalue2')
    let tabNum = wx.getStorageSync('tabkind1')
    let tollPrice = 0
    let num1 = 0;
    var orderID = "";
    for (var i = 0; i < 6; i++) {
      orderID += Math.floor(Math.random() * 10);
    }
    for (var i = 0; i < cart.length; i++) {
      let num = cart[i].value;
      num1 += cart[i].value;
      let price = cart[i].price;
      tollPrice += num * price;
      let status = "已完成";
      this.setData({
        status: status,
        tollPrice: tollPrice,
        num1: num1,
        name: cart[i].title,
        images: cart[i].thumb,
      })
    }
    this.setData({
      orderID: orderID,
      cart: cart,
      tabKind: tabKind,
      tabNum: tabNum,
      time: time
    })
    console.log(cart)
  } */
})