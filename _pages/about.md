---
layout: about
title: home
permalink: /
display_categories: [prime-investigator, coordinator, member]
horizontal: false
subtitle: 

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: false # crops the image to make it circular
#   more_info: >
#     <p>555 your office number</p>
#     <p>123 your address street</p>
#     <p>Your City, State 12345</p>
#     >

selected_papers: true # includes a list of papers marked as "selected={true}"
# social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

# latest_posts:
#   enabled: true
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#   limit: 3 # leave blank to include all the blog posts
---

The RODEO ANR project is set to reshape surgical robotics by adapting cutting-edge AI. The project is conducted within the Machine Learning for Robotics (MLR) team at the  robotics lab (Institut des Systèmes Intelligents et de Robotique, ISIR), Sorbonne University (SU). \\
The practical testbed is robotics-guided spine surgery, based on a surgical platform available at ISIR.

# Partners 

ANR et Chaire IA


# Members


<!-- pages/members.md -->
<div class="members">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized members -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_members = site.members | where: "category", category %}
  {% assign sorted_members = categorized_members | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_members %}
      {% include members_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_members %}
      {% include members.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display members without categories -->

{% assign sorted_members = site.members | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_members %}
      {% include members_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_members %}
      {% include members.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
