// pages/view/view.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    int:'c',
    divice:'/',
    mul:'x',
    back:'back',
    num1:'1',
    num2: '2',
    num3: '3',
    num4: '4',
    num5: '5',
    num6: '6',
    num7: '7',
    num8: '8',
    num9: '9',
    num0: '0',
    di:'%',
    spot:'.',
    d:'-',
    add:'+',
    evl:'='
    
  },
  num7: function(){
    var test7 = this.data.num7;
    console.log(test7)
  },
  num8: function () {
    var test8 = this.data.num8;
    console.log(test8)
  },
  num9: function () {
    var test9 = this.data.num9;
    console.log(test9)
  },
  num4: function () {
    var test4 = this.data.num4;
    console.log(test4)
  },
  num5: function () {
    var test5 = this.data.num5;
    console.log(test5)
  },
  num6: function () {
    var test6 = this.data.num6;
    console.log(test6)
  },
  num1: function () {
    var test1 = this.data.num1;
    console.log(test1)
  },
  num2: function () {
    var test2 = this.data.num2;
    console.log(test2)
  },
  num3: function () {
    var test3 = this.data.num3;
    console.log(test3)
  },
  add: function(){
    var add = this.data.add;
    console.log(add)
  },
  evl:function(){
    var evl = this.data.evl;
    console.log(evl)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 一个页面只会调用一次。 接收页面参数  可以获取wx.navigateTo和wx.redirectTo及 < navigator />中的 query。
    console.log('enter')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  // 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  console.log('ready')
  wx.login({
    success: function () {
      wx.getUserInfo({
        success: function (res) {
          var simpleUser = res.userInfo;
          console.log(simpleUser.nickName);
        }
      });
    }
  });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  //每次打开页面都会调用一次。
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  // 当navigateTo或底部tab切换时调用。
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  //当redirectTo或navigateBack的时候调用。
    console.log('back')
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('renovate')
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
      title: '分享页面', // 分享标题
      desc: '这是一个分享的测试', // 分享描述
      path: 'pages/view/view' // 分享路径
    }
  }
})