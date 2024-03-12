var posts=["post/8716a180.html","post/da2f3447.html","post/139d3597.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };