var posts=["2024/01/29/统计学习方法之感知机/","2024/01/28/nlp比赛中trick的使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };