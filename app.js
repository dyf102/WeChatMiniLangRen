//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getGameConfig() {
    return this.globalData.gameConfig
  },
  globalData:{
    userInfo:null,
    gameConfig: {
      // name -> live or not
      villages: [
        {'village': 1},
        {'village': 1},
        {'village': 1},
        {'village': 1},
      ],
      gods: [
        {'farseer': 1},
        {'witch': 1},
        {'guard': 1},
        {'hunter': 1},
      ],
      wolves: [
        {'wolf': 1},
        {'wolf': 1},
        {'wolf': 1},
        {'wolf': 1},
      ]
    }
  }
})