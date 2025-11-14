---
title: blog
layout: simple
page_id: blog
show_title: false
---

<h2>Posts</h2>
<div>
{% for post in site.posts %}
    <div class='post-row'>
        <p class='post-title'>
            <a href="{{ post.url }}">
                {{ post.title }}
            </a>
        </p>
        <p class='post-date'>
            {{ post.date | date_to_long_string }}
        </p>
    </div>
    <p class='post-subtitle'>
        {{ post.subtitle }}
    </p>
    <span class='hidden'>{{ forloop.index }}</span>
{% endfor %}
</div>