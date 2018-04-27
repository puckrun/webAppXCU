Page({

  data: {
    invoiceItems: []
  },

  onLoad: function (options) {
    var that = this;
    wx.chooseInvoiceTitle({
      success: function (res) {
        that.setData({
          title: res.title,
          taxNumber: res.taxNumber,
          companyAddress: res.companyAddress,
          telephone: res.telephone,
          bankName: res.bankName,
          bankAccount: res.bankAccount
        })
      }
    })
  },

  onReady: function () {

  },
  onShow: function () {
    let invoiceItems = wx.getStorageSync("invoiceItems")
    if (invoiceItems) {
      this.setData({
        invoiceItems: invoiceItems
      })
    }
  },

  jumpInvoiceDetail: function () {
    wx.navigateTo({
      url: '../invoice-detail/invoice-detail',
    })
  },
  jumpInvoiceAdd: function () {
    wx.navigateTo({
      url: '../invoice-add/invoice-add',
    })
  }
})