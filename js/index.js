// 获取标题
$(document).ready(function(){
    $.ajax({
      // 目标URL
      url: 'https://api.uomg.com/api/rand.qinghua?format=json', 
      // 请求类型，比如GET、POST
      type: 'GET', 
      // 请求参数
      // data: {
      //     key1: 'value1',
      //     key2: 'value2'
      // },
      // 请求成功时的回调函数
      success: function(response) {
        $('.header-slogan-salutation span').text(response.content); 
      },
      // 请求失败时的回调函数
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });




  // 设定为首页
  function setHomePage(url) {
    if(document.all){
        document.body.style.behavior='url(#default#homepage)';
        document.body.setHomePage(url);
     }
     else if(window.sidebar){
          if(window.netscape){
               try{
                   netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
               }
               catch(e){
                   alert("您的浏览器未启用[设为首页]功能, 开启方法:先在地址栏内输入about:config,然后将项 signed.applets.codebase_principal_support 值该为true即可");
               }
          }
          let prefs=Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
          prefs.setCharPref('browser.startup.homepage', url);
     }
  }

  // 添加收藏夹
  function addToFavorites(url, title) {
    try {
      // Mozilla, Firefox, Chrome, Opera, Safari
      if (window.sidebar) {
        window.sidebar.addPanel(title, url,"");
      } else if(window.external) { // IE
        window.external.AddFavorite(url, title);
      } else if(window.opera && window.print) { // Opera
        var elem = document.createElement('a');
        elem.setAttribute('href',url);
        elem.setAttribute('title',title);
        elem.setAttribute('rel','sidebar');
        elem.click();
      }
    } catch (e) {
      alert("您的浏览器不支持收藏, 请使用Ctrl+D进行添加。");
    }
  }
