// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    template: "",
      introduce: {
        produce: "【平底锅】能挡任何子弹的平底锅家常必备",
        price:"￥199.00",
        discount: "￥99.00",
        coupon:"￥100",
        volume:"999"
      }
  },
  
  search: function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  information: function () {
    wx.navigationTo({
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
  
  }
})