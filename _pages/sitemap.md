---
title: Site Map
layout: universal
permalink: /sitemap.html
---

Looking for a specific page on our website? See the list of webpages below, or email us for more information

{% assign collections = site.collections | where_exp:'collection','collection.output != false' %}
{% for collection in collections %}
  {% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}
  <ul>
  {% for doc in docs %}
      {% if forloop.index == 1 %}
        <h2>{% if doc.sitemap-title %}{{ doc.sitemap-title }}
            {% elsif doc.banner-title %}{{ doc.banner-title }}
            {% elsif doc.collection-title %}{{ doc.collection-title }}
            {% else %}[Untitled]
            {% endif %}</h2>
      {% endif %}
      <li class="margin-left-3 ">
        <a href="{{ doc.url | replace:'/index.html','/' | absolute_url }}">{% if doc.title %}{{doc.title}}{% else %}{{ doc.url | replace:'/index.html','/' | absolute_url }}{% endif %}</a>
        <span class="text-italic">
        {% if doc.collection == "research" %}
          {% if doc.banner-title %}({{doc.banner-title}}){% endif %}
        {% endif %}
        {% if doc.collection == "pages" %}
          {% if doc.banner-title %}{{doc.banner-title}}
          {% elsif doc.collection-title %}{{doc.collection-title}}{% endif %}
        {% endif %}
        {% comment %}
          (Last modified: 
          {% if doc.last_modified_at or doc.date %}
          {{ doc.last_modified_at | default: doc.date | date: '%D at %R' }}
          {% endif %}
          )
        {% endcomment %}
        
        </span>
      </li>    
  {% endfor %}
  </ul>
  <hr>
{% endfor %}

{% comment %}
{% assign pages = site.html_pages | where_exp:'doc','doc.sitemap != false' | where_exp:'doc','doc.ul != "/404.html"' %}
<h2>Other Pages</h2>
<ul>
{% for page in pages %}
    <li>{{ page.url | replace:'/index.html','/' | absolute_url }}</li>
    {% if page.last_modified_at %}
      <p>{{ page.last_modified_at | date_to_xmlschema }}</p>
    {% endif %}
{% endfor %}
</ul>
{% endcomment %}

{% comment %}
  This script shows all static files, including videos, pictures, etc. Way too long
  {% assign static_files = site.static_files | where_exp:'page','page.sitemap != false' | where_exp:'page','page.name != "404.html"' %}
  <h2>Files</h2>
  <ul>
    {% for file in static_files %}
        <li>{{ file.path | replace:'/index.html','/' | absolute_url }}</li>
    {% endfor %}
  </ul>
{% endcomment %}

<h2>Files</h2>
<ul>
  {% for file in site.static_files %}
  {% if file.extname == ".pdf" %}
      <li class="margin-left-3 ">
      <a href="{{ site.baseurl }}{{ file.path }}">{{file.name}}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
<hr>
<h2>Videos</h2>
<ul>
  {% for file in site.static_files %}
  {% if file.extname == ".mp4" %}
      <li class="margin-left-3 ">
      <a href="{{ site.baseurl }}{{ file.path }}">{{file.name}}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
