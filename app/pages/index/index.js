// pages/index/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      hidden: false,
      isLoaddingHidden: true,
      pdg: {
        produce: "【平底锅】能挡任何子弹的平底锅家常必备",
        price:"￥199.00",
        discount: "￥99.00",
        coupon:"￥100",
        volume:"999"
      },
       bfdj: {
        produce: "【暴风大剑】+50攻击力",
        price: "￥1250.00",
        discount: "￥1150.00",
        coupon: "￥100",
        volume: "999"
      }
  },
  
  search: function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  pdg: function(){
    wx.navigateTo({
      url: "../information/information"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    wx.showNavigationBarLoading()//在标题栏中显示加载
    that.setData({
      hidden: true,
      isLoaddingHidden: false
    })
    
    setTimeout(function(){
      wx.stopPullDownRefresh(),
      wx.hideNavigationBarLoading()
      that.setData({
        hidden: false,
        isLoaddingHidden: true
      })
    },1500)
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "首作，不喜勿喷",
      desc: "奔跑不单是一种能力，更是一种态度，决定你人生高度的态度"
    }
  }
})