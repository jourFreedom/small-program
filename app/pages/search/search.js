// pages/search/search.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    today: 'changeclass',  //初始化css
    value: '',  //绑定的输入框的文本
    hidden: true
  },
  today:function(){
    this.setData({
      today: 'changeclass',
      net: 'search',
    })
  },
  net: function () {
    this.setData({
      net: 'changeclass',
      today: 'search'
    })
  },
  bindvalue: function(e){
    this.setData({
      value: e.detail.value   //value 只是绑定值 不能console.log！！！
    })
  },
  clear: function(){
    this.setData({
      value: ''   
    })
  },
  toSearch:function(e){
    var that = this;
    var value = that.data.value;
    if (value==""){
      this.setData({
        hidden: false
      })
      setTimeout(function () {
        that.setData({                       //this.setData is not a function  so replace that
          hidden: true
        })
      }, 2000) 
    }else{
      this.setData({
        hidden: true
      })
    }
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