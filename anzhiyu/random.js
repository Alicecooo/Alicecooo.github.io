var posts=["2025/02/08/C++(一)·/","2025/02/04/CS106B笔记/","2025/02/08/C++(三）/","2025/02/08/C++(二)/","2025/02/24/Skyout环境配置指南/","2025/02/18/page/","2025/02/06/Threadpool/","2025/02/04/大一上总结/","2025/02/06/Game Engine/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };