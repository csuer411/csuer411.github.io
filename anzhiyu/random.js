var posts=["2024/01/28/nlp比赛中trick的使用/","2024/01/29/机器学习中你可能需要的数学基础/","2024/03/04/模式识别笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };