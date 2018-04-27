Page({
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  data: {
    images: "../../../../image/versions.png",
    name1: "版本号",
    name: "1.0.0",
    listren: [{
      images: "../../../../image/invoice.png",
      name: "我的发票",
    },
    {
      images: "../../../../image/connect.png",
      name: "客服热线",
    }

    ],

  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  jumpInvoice: function (e) {
    let idx = e.currentTarget.dataset.index;
    console.log(idx)
    if (idx == 0) {
      wx.navigateTo({
        url: '../slide-tab/slide-tab',
      })
    }
    if (idx == 1) {
      wx.showModal({
        title: '拨打电话',
        content: '13261076330',
        success: function (res) {
          if (res.confirm) {
            wx.makePhoneCall({
              phoneNumber: '13261076330'
            })
          } else if (res.cancel) {

          }
        }
      })
    }
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          userInfo: res.userInfo
        })
        that.update()
      }
    })
    
  },
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  } 
})