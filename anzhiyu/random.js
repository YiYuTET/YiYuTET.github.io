var posts=["post/139d3597.html","post/4a17b156.html","post/da2f3447.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };