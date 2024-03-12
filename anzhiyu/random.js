var posts=["post/58eeb88f.html","post/216d6a00.html","post/79d4ebb8.html","post/fa7bdefa.html","post/b2c5a78a.html","post/da2f3447.html","post/8716a180.html","post/139d3597.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };