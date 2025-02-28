---
layout: page
title: Research axes
permalink: /research_axes/
horizontal: true
---

<!-- pages/research_axes.md -->
<div class="focus">
{% if site.enable_focus_categories and page.display_categories %}
  <!-- Display categorized focus -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_focus = site.research_axes | where: "category", category %}
  {% assign sorted_focus = categorized_focus | sort: "importance" %}
  <!-- Generate cards for each focus -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for focus in sorted_focus %}
      {% include focus_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for focus in sorted_focus %}
      {% include focus.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display focus without categories -->

{% assign sorted_focus = site.research_axes | sort: "importance" %}

  <!-- Generate cards for each focus -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for focus in sorted_focus %}
      {% include focus_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for focus in sorted_focus %}
      {% include focus.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
