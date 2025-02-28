---
layout: about
title: Home
permalink: /
horizontal: false
subtitle:

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder
---

The Machine Learning for Roborics Team is structured around 4 axes accross two projects.

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

<br>

<p align="center">
  <img style="text-align: center; max-width: 100%; height: auto;" src="../assets/img/CNRS_20200021_0014.jpg" alt="RODEO intro img"/>
</p>

<br>

# Machine Learning for Robotics (MLR) team

<div class="members">
{% if site.enable_member_categories and page.display_categories %}
  <!-- Display categorized members -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_members = site.members | where: "category", category %}
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
  <br>
  {% endif %}
  {% endfor %}

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

<br>

# Partners

We are thanking the Agence nationale de la recherche (ANR) and the Chaire Cluster IA-SU.

<table align="center" style="width: 50%;">
  <tr>
    <td style="text-align: center;">
      <img src="../assets/img/ANR-logo-2021-sigle.jpg" alt="ANR" style="max-width: 100%; height: auto;">
    </td>
    <td style="text-align: center;">
      <img src="" alt="cluster ia" style="max-width: 100%; height: auto;">
    </td>
  </tr>
</table>

<br>
