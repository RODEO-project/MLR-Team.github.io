---
layout: page
title: Research axes
permalink: /research_axes/
description: Research axes
horizontal: false
---

<!-- pages/research_axes.md -->
<div class="axes">
{% if site.enable_axe_categories and page.display_categories %}
  <!-- Display categorized axes -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_axes = site.research_axes | where: "category", category %}
  {% assign sorted_axes = categorized_axes | sort: "importance" %}
  <!-- Generate cards for each axe -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for axe in sorted_axes %}
      {% include axes_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for axe in sorted_axes %}
      {% include axes.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display axes without categories -->

{% assign sorted_axes = site.research_axes | sort: "importance" %}

  <!-- Generate cards for each axe -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for axe in sorted_axes %}
      {% include axes_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for axe in sorted_axes %}
      {% include axes.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
