---
layout: about
title: Home
permalink: /
horizontal: true
subtitle:

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder
---

The Machine Learning for Robotics (MLR) Team is structured around four research axes across two projects :

- [The ANR PRME RODEO project](_pages/project-RODEO.md "Learn more about the RODEO project")
- [The CAP RYDER project](_pages/project-RYDER.md "Learn more about the RYDER project")

The four research axes consist of three fondamental AI axes and an applied AI axis focused on surgical robotics.

<div class="focus">
{% if site.enable_axe_categories and page.display_categories %}
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

<br>

# Partners

We are thanking the Agence nationale de la recherche (ANR) and the Cluster PostGenAI@Paris.

<table align="center" style="width: 50%;">
  <tr>
    <td style="text-align: center;">
      <img src="assets/img/ANR-logo-2021-sigle.jpg" alt="ANR" style="max-width: 100%; height: auto;">
    </td>
    <td style="text-align: center;">
      <img src="assets/img/LOGO_SU_HORIZ_SEUL_CMJN.jpg" alt="SU" style="max-width: 100%; height: auto;">
    </td>
    <td style="text-align: center;">
      <img src="assets/img/Logo_SCAI_ArtificialIntelligence_CMJN.jpg" alt="SCAI" style="max-width: 100%; height: auto;">
    </td>
  </tr>
</table>

<br>
