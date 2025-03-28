# USAB Notes

Remember to login via [FederalistApp](https://federalistapp.18f.gov/sites/).&nbsp; Netlify CMS interface is available via:  [{{ site.baseurl }}/admin](https://{{ site.baseurl }}/admin)

Reference implementation of USWDS 2.0 for Jekyll on Federalist includes [repo](https://github.com/18F/federalist-uswds-jekyll) and [demo](https://federalist-ce810add-9092-4627-8246-9b65cf94623c.app.cloud.gov/site/18f/federalist-uswds-jekyll/).

Web service utilities we are using include:
- [Paste to Markdown](https://euangoddard.github.io/clipboard2markdown/)


[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=18F/federalist-uswds-jekyll)](https://dependabot.com)

# Federalist + U.S. Web Design System + Jekyll

This [Jekyll theme](https://jekyllrb.com/docs/themes/) is developed using the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for Federalist websites.

This code uses the [Jekyll](https://jekyllrb.com) site engine and built with Ruby. If you prefer to use Javascript, check out [federalist-uswds-gatsby](https://github.com/18F/federalist-uswds-gatsby), which uses [Gatsby](https://gatsbyjs.org) site engine.

This project assumes that you are comfortable editing source code. If you prefer to launch a website without editing any source code, checkout [uswds-jekyll](https://github.com/18F/uswds-jekyll), which allows you to change the layout and content with configuration files.

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## Key Functionality
This repository contains the following examples and functionality:

✅  Publish blog posts, press releases, announcements, etc. To modify this code, check out `blog/index.html`, which manages how the posts are listed. You should then check out `_layouts/post.html` to see how individual posts are structured.

✅ Publish single one-off pages. Instead of creating lots of folders throughout the root directory, you should put single pages in `_pages` folder and change the `permalink` at the top of each page. Use sub-folders only when you really need to.

✅  Publish data (for example: job listings, links, references), you can use the template `_layouts/data.html`. Just create a file in you `_pages` folder with the following options:

```
---
title: Collections Page
layout: data
permalink: /collections
datafile: collections
---
```

The reference to `datafile` referers to the name of the file in `_data/collections.yml` and loops through the values. Feel free to modify this as needed.

✅  There are two different kinds of `pages`, one does not have a side bar navigation, and the other uses `_includes/sidenav.html`. You can enable this option by adding `toc: sidenav.html` to your page front matter.

```
---
title: Document with Sidenav
layout: page
toc: sidenav.html
permalink: /document-with-sidenav
---
```

✅ Enable search with [Search.gov](https://search.gov) by adding option to `_config.yml`.


```
---
searchgov:
  endpoint: https://search.usa.gov  # You should not change this.
  affiliate: federalist-uswds-example # replace this with your search.gov account
  access_key: your-access-key # This is placeholder. Not private.
  inline: true #this renders the results on the same domain. Otherwise, it will render the results in the search.gov domain
---
```


## How to edit
- Non-developers should focus on editing markdown content in the `_posts` and `_pages` folder

- We try to keep configuration options to a minimum so you can easily change functionality. You should review `_config.yml` to see the options that are available to you. There are a few values on top that you **need** to change. They refer to the agency name and contact information. The rest of `_config.yml` has a range of more advanced options.

- The contents inside `assets/` folder store your Javascript, SCSS/CSS, images, and other media assets are managed by  [jekyll-assets](https://github.com/envygeeks/jekyll-assets).  Assets are combined, compressed, and automatically available in your theme

- If you look at `package.json` you will see that the `npm run federalist` command that will run when running on the Federalist platform.

- Do not edit files in the `_site/` folder. These files are auto-generated, and any change you make in the folder will be overwritten.

- To edit the look and feel of the site, you need to edit files in `_includes/` folder, which render key components, like the menu, side navigation, and logos.

- `index.html` may not require much editing, depending on how you customize `hero.html` and `highlights.html`.

- `_layouts/` may require the least amount of editing of all the files since they are primarily responsible for printing the content.

- `blog/index.html` can be edited, but be careful. It will impact the pagination system for the posts. If you do edit the file, be prepared to edit `_config.yml`.  For example, you may need go change configurations for [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2)

- `search/index.html` is used by search.gov.

## Getting Started

### Installation as a starter

#### With `npx`
The simplest way to create your own repository based on this starter is to use `npx` (included with `node`) with `degit`.

    $ npx degit https://github.com/18F/federalist-uswds-jekyll <destination-folder>
    $ cd <destination-folder>
    $ git init

#### With `git`
    $ git clone --depth 1 https://github.com/18F/federalist-uswds-jekyll <destination-folder>
    $ cd <destination-folder>
    $ npm run reset
    $ git init

### Installation for development

    $ git clone https://github.com/18F/federalist-uswds-jekyll
    $ cd federalist-uswds-jekyll

Note that when built by Federalist, `npm run federalist` is used instead of the
`build` script.

### Install dependencies and run app
    $ npm install
    $ bundle install
    $ npm start

Open your web browser to [localhost:4000](http://localhost:4000/) to view your
site.

### Testing

```bash
$ npm test
```

### Accessibility testing

Use [pa11y](https://github.com/pa11y/pa11y) to run an initial accessibility test while developing features.

The following commands are to test accessibility on your local development machine.

```bash
## Start a new development build of the site
$ npm start

## Open a new terminal window and run the following command for testing local deployment
$ npm run pa11y:local
```

## Developing locally

### Netlify CMS config

To properly configure and test your Netlify CMS, you need to make sure you are testing it using the local setup so you do not make commits to the Github repository. This setup involves three steps: changing your [`./admin/config.yml`](./admin/config.yml) backend value, running the local, test authentication server, and restoring your [`./admin/config.yml`](./admin/config.yml) backend value before committing the update.

_**Important** - Remember to restore [`./admin/config.yml`](./admin/config.yml) backend value before committing any changes or else Netlify CMS will break on Federalist_

Follow these steps:

- Open  [`./admin/config.yml`](./admin/config.yml) and comment out the `backend` and all its values at the top of the config file. Below the commented out `backend` value uncomment the `backend` value for local development. The following update should look like this below:
```yaml
## Comment out when doing local development
# backend:
#   name: github
#   repo: atbcb/usab-uswds
#   base_url: https://federalistapp.18f.gov
#   auth_endpoint: external/auth/github
#   preview_context: federalist/build
#   branch: master
#   use_graphql: false

##
## Uncomment when doing local development on Netlify CMS
## Run `npx netlify-cms-proxy-server` to start working locally
## In another terminal, start the app with `npm start`
## See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
##

backend:
  name: git-gateway
local_backend: true
```

- Next, open up a new terminal window and run `npm run netlify-dev-server`. This will keep an authentication server running in the background will you do you local development.
- In your another terminal window, you can run `npm start` to start the jekyll server and develop locally as usual
- **Finally**, before you commit any changes, **restore** the [`./admin/config.yml`](./admin/config.yml) backend or else it will **break** Netlify CMS being hosted on Federalist. The following update should look like this below:
```yaml
## Comment out when doing local development
backend:
  name: github
  repo: atbcb/usab-uswds
  base_url: https://federalistapp.18f.gov
  auth_endpoint: external/auth/github
  preview_context: federalist/build
  branch: master
  use_graphql: false

##
## Uncomment when doing local development on Netlify CMS
## Run `npx netlify-cms-proxy-server` to start working locally
## In another terminal, start the app with `npm start`
## See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
##

# backend:
#   name: git-gateway
# local_backend: true
```

## Technologies you should be familiarize yourself with

- [Jekyll](https://jekyllrb.com/docs/) - The primary site engine that builds your code and content.
- [Front Matter](https://jekyllrb.com/docs/frontmatter) - The top of each page/post includes keywords within `--` tags. This is meta data that helps Jekyll build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)


## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
