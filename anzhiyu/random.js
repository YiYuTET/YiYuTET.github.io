var posts=["post/10f738cc.html","post/58eeb88f.html","post/971239a4.html","post/d9ecd3f3.html","post/216d6a00.html","post/7323d95a.html","post/1a084bba.html","post/dd121195.html","post/451f2901.html","post/32cb9a74.html","post/34837dad.html","post/1656c012.html","post/53c0ce4c.html","post/71bf0702.html","post/b8ee456f.html","post/eb1d1d4b.html","post/e8ed85cc.html","post/79d4ebb8.html","post/cd6587ef.html","post/2c1a1676.html","post/84b30968.html","post/b2c5a78a.html","post/fa7bdefa.html","post/18fe509b.html","post/9c657266.html","post/4f17df8e.html","post/dcdcb7ec.html","post/e6cd08d.html","post/7542b90f.html","post/7d7d578d.html","post/2349cfef.html","post/f2089145.html","post/256339cb.html","post/da2f3447.html","post/8716a180.html","post/41b91bba.html","post/4995146.html","post/b607d502.html","post/9aba4271.html","post/67d9c1da.html","post/254593a4.html","post/139d3597.html","post/13c31df7.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };