---
layout: about
title: Home
permalink: /
display_category: prime-investigators
horizontal: false
subtitle: 


announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder




---

The RODEO ANR project is set to reshape surgical robotics by adapting cutting-edge AI. The project is conducted within the Machine Learning for Robotics (MLR) team at the  robotics lab (Institut des Systèmes Intelligents et de Robotique, ISIR), Sorbonne University (SU). \\
The practical testbed is robotics-guided spine surgery, based on a surgical platform available at ISIR.

# Partners 

ANR and Chaire IA


# Prime investigators

<div class="members">
{% if site.enable_member_categories and page.display_categories %}
  <!-- Display categorized members -->
  {% assign categorized_members = site.members | where: "category", page.display_category %}
  {% assign sorted_members = categorized_members | sort: "importance" %}
  <!-- Generate cards for each member -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for member in sorted_members %}
      {% include members_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for member in sorted_members %}
      {% include members.liquid %}
    {% endfor %}
  </div>
  {% endif %}

{% else %}

<!-- Display members without categories -->

{% assign sorted_members = site.members | sort: "importance" %}

  <!-- Generate cards for each member -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for member in sorted_members %}
      {% include members_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for member in sorted_members %}
      {% include members.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>




