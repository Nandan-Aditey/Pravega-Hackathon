---
layout: default
title: Blogs
permalink: /blog
---

<!-- Posts Index
================================================== -->
<section class="recent-posts">

  <div class="section-title">

      <h2><span>All Blogs</span></h2>

  </div>

  <style>
    .section-title{
      margin-top: 30px;
    }
  </style>

  <div class="row listrecent">

      {% for post in site.posts %}


        {% include postbox.html %}


      {% endfor %}

  </div>

</section>



