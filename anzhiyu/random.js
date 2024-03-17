var posts=["2024/01/29/机器学习中你可能需要的数学基础/","2024/01/28/nlp比赛中trick的使用/","2024/03/04/统计决策方法/","2024/03/17/概率密度估计/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };