import menus from './resources/json/menus.js'
Page({
  data: {
    toView: 'blue',
    'menus': menus,
    selectedMenuId: 1,
    total: {
      count: 0,
      money: 0
    }
  },
  selectMenu: function (event) {
    let data = event.currentTarget.dataset
    this.setData({
      toView: data.tag,
      selectedMenuId: data.id
    })
    // this.data.toView = 'red'
  },
  addCount: function (event) {
    console.log(event)
    let data = event.currentTarget.dataset
    let total = this.data.total
    let menus = this.data.menus
    console.log(menus)
    let menu = menus.find(function (v) {
      return v.id == data.cid
    })
    console.log(menu)
    let dish = menu.dishs.find(function (v) {
      return v.id == data.id
    })
    dish.count += 1;
    total.count += 1
    total.money += dish.price
    this.setData({
      'menus': menus,
      'total': total
    })
    var menusDeils = wx.getStorageSync("menusDeils") || []
    // console.log(exists)

    var exist = menusDeils.find(function (el) {
      return el.name == dish.name
    })
    console.log(exist)
    if (exist) {
      exist.count += 1
    } else {
      menusDeils.push({
        id: data.id,
        name: dish.name,
        price: dish.price,
        count: dish.count
      })
    }
    wx.setStorageSync("menusDeils", menusDeils)
  },
  minusCount: function (event) {
    let data = event.currentTarget.dataset
    let total = this.data.total
    let menus = this.data.menus
    let menu = menus.find(function (v) {
      return v.id == data.cid
    })
    let dish = menu.dishs.find(function (v) {
      return v.id == data.id
    })
    if (dish.count <= 0)
      return
    dish.count -= 1;
    total.count -= 1
    total.money -= dish.price
    this.setData({
      'menus': menus,
      'total': total
    })
    var menusDeils = wx.getStorageSync("menusDeils") || []
    // console.log(exists)

    var exist = menusDeils.find(function (el) {
      return el.name == dish.name
    })
    if (exist) {
      exist.count -= 1
      for (var i = 0; i < menusDeils.length; i++) {
        if (menusDeils[i].count == 0) {
          menusDeils.splice(i, 1)
        }
      }

    } else {

    }

    wx.setStorageSync("menusDeils", menusDeils)
  },
  onLoad: function () {
    wx.removeStorage({
      key: 'menusDeils'
    })
  },
  nextMain: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
        let deskNum =wx.setStorageSync("deskNum", res.result);
        if (deskNum ==""){

        }else{
          wx.navigateTo({
            url: '../goPay/goPay',
          })
        }
     
      }

    })


  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onScroll: function (e) {
    console.log(e)
  },
  //显示弹出框
  hideModal: function () {
    this.setData({
      showModal: false
    })
  },
  popFrame: function (e) {

    let outIdx = e.currentTarget.dataset.outidx;
    let innerIdx = e.currentTarget.dataset.inneridx;
    let cid = e.currentTarget.dataset.cid;
    let id = e.currentTarget.dataset.id;

    this.setData({
      showModal: true,
      outId: cid,
      innerId: id,
      dishList: this.data.menus[outIdx].dishs,
      imgurl: this.data.menus[outIdx].dishs[innerIdx].pic,
      dishName: this.data.menus[outIdx].dishs[innerIdx].name,
      dishPrice: this.data.menus[outIdx].dishs[innerIdx].price,
      dishCount: this.data.menus[outIdx].dishs[innerIdx].count,
      dishSales: this.data.menus[outIdx].dishs[innerIdx].sales,
    })
  },
  //添加
  add: function () {
    let that = this;
    let total = this.data.total
    let menus = this.data.menus
    let menu = menus.find(function (v) {
      return v.id == that.data.outId
    })
    let dish = menu.dishs.find(function (v) {
      return v.id == that.data.innerId
    })
    dish.count += 1;
    let dishCount = this.data.dishCount;
    dishCount += 1;
    var count = dish.count
    total.count += 1
    total.money += dish.price
    this.setData({
      'dishCount': dishCount,
      'menus': menus,
      'total': total
    })
    var menusDeils = wx.getStorageSync("menusDeils") || []
    // console.log(exists)

    var exist = menusDeils.find(function (el) {
      return el.name == dish.name
    })
    console.log(exist)
    if (exist) {
      exist.count += 1
    } else {
      menusDeils.push({
        id: this.data.innerId,
        name: dish.name,
        price: dish.price,
        count: dish.count
      })
    }
    wx.setStorageSync("menusDeils", menusDeils)
  },
  //减去
  reduce: function (event) {
    let that = this;
    let total = this.data.total
    let menus = this.data.menus
    let menu = menus.find(function (v) {
      return v.id == that.data.outId
    })
    let dish = menu.dishs.find(function (v) {
      return v.id == that.data.innerId
    })
    let dishCount = this.data.dishCount;
    if (dishCount <= 0) return
    dishCount -= 1;
    if (dish.count <= 0) return
    dish.count -= 1;
    total.count -= 1
    total.money -= dish.price
    this.setData({
      'dishCount': dishCount,
      'menus': menus,
      'total': total
    })
    var menusDeils = wx.getStorageSync("menusDeils") || []
    // console.log(exists)

    var exist = menusDeils.find(function (el) {
      return el.name == dish.name
    })
    if (exist) {
      exist.count -= 1
      for (var i = 0; i < menusDeils.length; i++) {
        if (menusDeils[i].count == 0) {
          menusDeils.splice(i, 1)
        }
      }
    } else {
    }
    wx.setStorageSync("menusDeils", menusDeils)
  },
})