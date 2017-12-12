var postsData = require('../../../data/posts-data.js')
// 引用js

Page({
    data:{

    },
    onLoad: function (option) {
        var postId = option.id;
        this.data.currentPostId = postId;//获取
        // var postData = postsData[postId];
        // console.log(postsData)可知 postsData不是一个数组 是一个对象
        var postData = postsData.postList[postId];
        // console.log(postData) 调试
        // 获取 postsData中的数据
        this.setData({
            posts_get: postData
        })
        var postsCollected = wx.getStorageSync('posts_collected')
        if (postsCollected) {
            var postCollected = postsCollected[postId]
            this.setData({
                collected: postCollected
            })
        }
        else {
            var postsCollected = {};
            postsCollected[postId] = false;
            wx.setStorageSync('posts_collected', postsCollected);
        }
    },
    onColletionTap:function(event){
        var postsCollected = wx.getStorageSync('posts_collected');
        var postCollected = postsCollected[this.data.currentPostId];
        //取反 收藏变成未收藏 未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[this.data.currentPostId] = postCollected;
        //更新文章是否的缓存值
        wx.setStorageSync('posts_collected', postsCollected);
        //更新数据绑定变量  从而实现切换图片切换
        this.setData({
            collected:postCollected
        })
    }
})