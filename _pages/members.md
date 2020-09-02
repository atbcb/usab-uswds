---
title: Board Members
layout: page
sidenav: true
permalink: /about/members.html
---

## Access {{ page.title }}

The Board is structured to function as a coordinating body among federal agencies and to directly represent the public, particularly people with disabilities.  Twelve members of the governing Board are representatives from most of the federal departments.  The other thirteen are comprised of members of the public appointed by the President to four-year terms.  Every year the Board elects officers, including a chair and vice-chair.  These posts alternate between a public and a federal member.

Members of the public who wish to seek appointment to the Access Board should contact the White House Office of Presidential Personnel at 202-456-9713 or visit the [White House website](https://apply.whitehouse.gov).

<figure style="display:block; float:left">
    <img src="{{ site.baseurl }}/images/robertson-hhs.jpg" alt="Photo of Robertson">
    <figcaption style="margin-left:auto; margin-right:right">
        <strong>Chair <br />
        Lance Robertson</strong> <br />
        Department of Health and Human Services <br />
        <a href="#Robertson">[bio]</a>
    </figcaption>
</figure>
<figure style="display:block; float:right">
    <img src="{{ site.baseurl }}/images/fehribach.jpg" alt="Photo of Fehribach">
    <figcaption style="margin-left:auto; margin-right:right">
        <strong>Vice Chair <br />
        Gregory Fehribach</strong> <br />
        Indianapolis, Indiana <br />
        <a href="#Fehribach">[bio]</a>
    </figcaption>
</figure> <br style="clear:both" />

### Public Members

<section class="usa-graphic-list usa-section">
    <div class="grid-container maxw-desktop">
        {% for member in site.data.members-public %}
        <div class="usa-media-block tablet:grid-col" id="{{ member.lastname }}">
            <img src="{{ site.baseurl }}/images/{{ member.image-file }}"
                class="usa-media-block__img circle-15 border-2px" alt="Photo of {{ member.lastname }}" width="150">
            <div class="usa-media-block__body">
                <h3 class="usa-graphic-list__heading">{{ member.firstname }} {{ member.lastname }}</h3>
                <p> {{ member.bio }} </p>
            </div>
        </div>
        {% endfor %}
    </div>
</section>

### Federal Members

<section class="usa-graphic-list usa-section">
    <div class="grid-container maxw-desktop">
        {% for member in site.data.members-federal %}
        <div class="usa-media-block tablet:grid-col" id="{{ member.lastname }}">
            <img src="{{ site.baseurl }}/images/{{ member.image-file }}"
                class="usa-media-block__img circle-15 border-2px" alt="Photo of {{ member.lastname }}" width="150">
            <div class="usa-media-block__body">
                <h3 class="usa-graphic-list__heading">{{ member.firstname }} {{ member.lastname }}, {{ member.agency }}</h3>
                <p> {{ member.bio }} </p>
            </div>
        </div>
        {% endfor %}
        <div class="usa-media-block tablet:grid-col">
            <div class="usa-media-block__body">
                <p> Department of Commerce <br />
                    [vacant]
                </p>
                <p> Department of the Interior <br />
                    [vacant]
                </p>
                <p> Department of Transportation <br />
                    [vacant]
                </p> 
                <p> Department of Veterans Affairs <br />
                    [vacant]
                </p>   
            </div>
        </div>
    </div>
</section>
