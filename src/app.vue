<template>
  <div class="container">
    <div class="main">
      <aside class="bar">
        <div class="banner">
          <a href="/">
            <h1>Blogs</h1>
          </a>
          <span>
            Jerry
          </span>
        </div>
        <nav>
          <ul class="nav">
            <li>
              <a href="javascript:void(0)">
                <i class="icon-home3"></i>
                首页
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="icon-info"></i>
                关于
                </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="icon-list2"></i>
                文章</a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="icon-books"></i>
                分类</a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="icon-search"></i>
                搜索</a>
            </li>
          </ul>
        </nav>

        <div class="sidebar">
          <div class="sidebar-logo-wraper">
            <div class="sidebar-logo">
              <img src="./img/2.jpg" alt="">
            </div>
            <span class="sidebar-title">Hello World</span>
          </div>
          <div class="sidebar-category">
            <a href="javascript:void(0)" class="item">
              <span class="num">18</span>
              <span>日志</span>
            </a>
            <a href="javascript:void(0)" class="item">
              <span class="num">18</span>
              <span>分类</span>
            </a>
            <a href="javascript:void(0)" class="item">
              <span class="num">18</span>
              <span>标签</span>
            </a>
          </div>
          <div class="sidebar-feed">
            <a href="javascript:void(0)">RSS</a>
          </div>
          <div class="sitebar-contact">
            <a class="item" href="javascript:void(0)"><i class="icon-github"></i>&nbsp;GitHub</a>
            <a class="item" href="javascript:void(0)"><i class="icon-envelope"></i>&nbsp;E-Mail</a>
          </div>
          <div class="sitebar-links">
            <h2 class="link-title"><i class="icon-link"></i>&nbsp;Links</h2>
            <a class="link" href="javascript:void(0)"><i></i>阮一峰</a>
            <a class="link" href="javascript:void(0)"><i></i>博客园</a>
          </div>

        </div>

      </aside>

      <article class="article-wrapper">
        <section class="article-section">
          <h2 class="title">告别Coding Pages，彻底拥抱GitHub Pages</h2>
          <div class="description">
            <span class="post-date"><i class="icon-calendar"></i>&nbsp;发表于 2018-04-26</span>
            <span class="post-word"><i class="icon-file-word"></i>&nbsp;全文 0 字</span>
            <span class="read-time"><i class="icon-clock"></i>&nbsp;阅读时长约 1 分钟</span>
          </div>
          <div class="content">
            前言 只有光头才能变强 回顾前面： "给女朋友讲解什么是代理模式" "包装模式就是这么简单啦" 本来打算没那么快更新的，这阵子在刷Spring的书籍。在看Spring的时候又经常会看到“单例”，“工厂”这些字样。 所以，就先来说说单例和工厂设计模式啦，这两种模式也是很常见的，我看很多面经都会遇到这两 ...
          </div>
          <div class="read-more">
            <a class="read-more-txt" href="javascript:void(0)"> 阅读全文 » </a>
          </div>
        </section>

        <section class="article-section">
          <h2 class="title">csrf攻击与防范</h2>
          <div class="description">
            <span class="post-date"><i class="icon-calendar"></i>&nbsp;发表于 2018-04-26</span>
            <span class="post-word"><i class="icon-file-word"></i>&nbsp;全文 0 字</span>
            <span class="read-time"><i class="icon-clock"></i>&nbsp;阅读时长约 1 分钟</span>
          </div>
          <div class="content">
            CSRF（Cross Site Request Forgeries）跨网站请求伪造，也叫XSRF，通过伪装来自受信任用户的请求来攻击利用受信任网站。 与对比 xss:本网站运行了来自其它网站的脚本 csrf:其它网站对本网站产生了影响 一、攻击 利用用户登录态伪造http请求。 危害： 盗取用户资金 ...
          </div>
          <div class="read-more">
            <a class="read-more-txt" href="javascript:void(0)"> 阅读全文 » </a>
          </div>
        </section>

        <section class="article-section">
          <h2 class="title">告别Coding Pages，彻底拥抱GitHub Pages</h2>
          <div class="description">
            <span class="post-date"><i class="icon-calendar"></i>&nbsp;发表于 2018-04-26</span>
            <span class="post-word"><i class="icon-file-word"></i>&nbsp;全文 0 字</span>
            <span class="read-time"><i class="icon-clock"></i>&nbsp;阅读时长约 1 分钟</span>
          </div>
          <div class="content">
            注意：因为本文源码中用到的Webpack版本为4.0.0以上，有些已API弃用，所以跟视频中老师写的代码有一点不同，在本案例源码中的具体位置会有详细注明和解释，适合大家参考，共同学习。
          </div>
          <div class="read-more">
            <a class="read-more-txt" href="javascript:void(0)"> 阅读全文 » </a>
          </div>
        </section>


        <footer class="footer">
          © 2016 — 2018  Jerry All rights reserved |  您是第 3630 位到达此站
        </footer>
      </article>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: 'hello !'
    }
  }
}
</script>

<style lang="stylus">

shadow(){
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12);
}
$white = #fff
$black = #555
$gray = #f9f9f9
$black-gray = #999
.main{
  width 80%
  margin 0 auto
  display flex
  justify-content stretch
  .bar{
    min-width 240px
    .banner{
      text-align center
      padding 20px 0
      background #222
      color $white

      h1{
        font-size:1.5rem
        color $white
      }
    }

    .nav{
      background: $white
      shadow()
      margin-bottom 20px
      li{
        padding 5px 0
        padding-left 30px
        position relative

        &:hover{
          background:#f9f9f9;
        }
        &:hover::after{
          content ''
          display block
          position absolute
          width s=6px
          height s
          background #bbb
          border-radius 50%
          right 10px
          top 50%
          margin-top -(s/2)
        }
      }
      a{
        color $black
        display block
      }
      i{
        margin-right 5px
      }
    }

    .sidebar{
      shadow()
      overflow auto
      .sidebar-logo-wraper{
        display:flex
        -webkit-flex-direction  column
        justify-content center
        align-items center
        margin 20px 0 10px 0
        .sidebar-logo {
          & img{
            width 100px
            height 100px
            border-radius 50%
            display block
            transition transform 2s
          }
          & img:hover{
            transform rotate(360deg)
          }
        }
        .sidebar-title{
          color #222
          font-weight 600
        }
      }

      .sidebar-category{
        display flex
        justify-content center
        line-height 1.5
        margin-bottom 20px
        .item{
          padding 0 10px
          text-align center
          border-right solid 1px #eee
          color $black
          .num{
            display block
            color #000
            font-weight 600
          }
          &:last-child{
            border-right none
          }
        }
      }

      .sidebar-feed{
        border-top 1px dashed #eee
        border-bottom 1px dashed #eee
        text-align center
        margin-bottom 20px
        a{
          color #fc6423;
          font-weight 500
        }
      }

      .sitebar-contact{
        display flex
        justify-content center
        border-bottom 1px dashed #eee
        padding-bottom 20px
        .item{
            padding 0 10px
            color #555
            &:hover{
              background #eee
              border-radius 5px
            }
        }
      }
      .sitebar-links{
        margin 20px 0
        display flex
        justify-content center
        align-items center
        flex-direction column
        .link-title{
          font-weight 600
          color #555
        }
        .link{
          text-decoration underline
          color #555
        }
      }

    }



  }

  .article-wrapper{
    margin-left 20px
    .article-section{
      shadow()
      padding 40px 40px
      color $black
      margin-top 20px
      &:first-child{
        margin-top 0
      }
      .title{
        font-size 1.5rem
        text-align center
      }
      .description{
        text-align center
        margin-bottom 20px
        span{
          border-right solid $black-gray 1px
          line-height 1
          color $black-gray
          padding 0 10px
          display inline-block
          font-size 12px
          &:last-child{
            border-right none
          }
        }

      }
      .content{
        text-align justify
        font-size 14px
        color $black
        margin-bottom 30px
      }
      .read-more{
        text-align center
        .read-more-txt{
          line-height 2
          display inline-block
          border solid 2px $black
          padding 0 20px
          color $black
          background none
          outline none
          cursor pointer
          // font-family:'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
          &:hover{
            background $black
            color $white
          }
        }
      }
    }
  }

  .footer{
    text-align center
    color $black
    margin-top 20px
  }
}



</style>
