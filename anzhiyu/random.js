var posts=["2025/02/06/Game Engine/","2025/02/08/C++(一)·/","2025/02/06/Threadpool/","2025/02/08/C++(二)/","2025/02/04/大一上总结/","2025/02/04/CS106B笔记/","2025/02/08/C++(三）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };