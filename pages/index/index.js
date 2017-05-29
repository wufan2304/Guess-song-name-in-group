//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    usersSongInfo: [
      {
        userId: "wufan2304",
        totalNum: 4,
        songsList: ["冬天里的一把火", "爱情西街", "千里之外", "2002年的第一场雪"],
        rankId: 2
      },
      {
        userId: "sundan1993",
        totalNum: 4,
        songsList: ["最初的梦想", "我们", "小幸运", "成都"],
        rankId: 3

      },
      {
        userId: "echo",
        totalNum: 2,
        songsList: ["再也不见", "匆匆那年"],
        rankId: 5

      },
      {
        userId: "沧浪",
        totalNum: 7,
        songsList: ["我们都是好孩子", "青春纪念册", "蒲公英的约定", "樱花草", "致我们终将逝去的青春", "青花瓷", "风吹麦浪"],
        rankId: 1

      },
      {
        userId: "abc",
        totalNum: 3,
        songsList: ["生如夏花", "听妈妈的话", "不说再见"],
        rankId: 4

      }
    ],
    NavigationTitle: '群猜歌名'
  },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   }) 
  // },
  bindPlayMusic: function() {
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38',
      title: '群猜歌名',
      success: function (res) {
        console.log("playBackgroundAudio call success")
      },
      complete: function (res) {
        console.log("playBackgroundAudio call complete")
      }
    })
    this.updateNavigationBar()
    wx.vibrateShort()
  },
  updateNavigationBar: function(){
    var that = this
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var duration = res.duration
        var downloadPercent = res.downloadPercent
        var currentPosition = res.currentPosition
        var status = res.status
        var dataUrl = res.dataUrl
        that.NavigationTitle += downloadPercent
        console.log(downloadPercent)
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
wx.onBackgroundAudioPlay({
  success: function (res) {
    console.log(res)
  }
}); 
wx.onBackgroundAudioPause(
  function (res) {
    console.log(res) 
  }()
); 
wx.onBackgroundAudioStop({
  success: function (res) {
    console.log(res)
  }
});