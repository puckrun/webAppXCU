// pages/goPay/goPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:[],
    cartItems1:'',
    tollPrice:'',
    cart:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let cart = wx.getStorageSync('menusDeils')
    // cart = []
    //   this.setData({
    //     cart:cart
    //   })
    let deskNum = wx.getStorageSync("deskNum")
    this.setData({
      deskNum: deskNum
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    let cart = wx.getStorageSync('menusDeils')

    let tabKind = wx.getStorageSync('tabvalue2')
    let tabNum = wx.getStorageSync('tabkind1')
    let tollPrice = 0
    let num1 = 0
    for (var i = 0; i < cart.length; i++) {
      let num = cart[i].count
      num1 += cart[i].count
      let price = cart[i].price
       tollPrice += num * price
      this.setData({
        tollPrice: tollPrice,
        num1: num1
      })
    }
    this.setData({
      cart: cart,
      tabKind: tabKind,
      tabNum: tabNum
    })
  },
  nowPay: function () {
    wx.showToast({
      title: "支付成功",
      duration: 1000
    })
    // var time = util.formatTime(new Date());
    // console.log(time)
    // wx.setStorageSync('time', time)
  }
})