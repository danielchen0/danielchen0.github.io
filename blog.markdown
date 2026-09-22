---
title: Blog
layout: simple
page_id: blog
description: "Essays by Daniel Chen about AI evaluation, transformer architectures, programming, mathematics, physics, and scientific reasoning."
schema_type: CollectionPage
---

<p>Essays about AI evaluation, machine learning, programming, mathematics, physics, and scientific reasoning.</p>
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
    {{ post.description }}
</p>
{% assign preview_image = post.preview_image | default: post.image %}
{% if preview_image %}
<div class='entry-preview blog-preview' aria-label='{{ post.title }} preview'>
    <a href="{{ post.url }}">
        <img src='{{ preview_image }}' alt='{{ post.title }} preview'>
    </a>
</div>
{% endif %}
<span class='hidden'>{{ forloop.index }}</span>
{% endfor %}
</div>
