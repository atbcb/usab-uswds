This directory contains files making up the ADA and ABA Accessibility Guidelines for the Public Right-of-Way

The About and Preamble files are our typical markdown files using frontmatter, including _title_, _order_ and _permalink_ variables.

The main content is broken into stand-alone markdown files **without** frontmatter.  They do _not_ themselves directly display in our default left sidebar navigation.
- appendix -- heading
- application -- chapter 1 of 4
- scoping -- chapter 2 of 4
- technical -- chapter 3 of 4
- supplement -- chapter 4 of 4

Markdown files **r0** through **r4** use frontmatter and *include_relative* for their main content, and they _are_ listed in the left sidebar navigation.

Frontmatter variables:
- title -- entry used for left sidebar navigation
- order -- sorting index used for left sidebar navigation
- permalink -- defines URL for webpage
