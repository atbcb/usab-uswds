This directory contains files making up the ADA and ABA Accessibility Guidelines for the Public Right-of-Way

The About and Preamble files are our typical markdown files using frontmatter, including _title_, _order_ and _permalink_ variables.

The main content is broken into stand-alone markdown files **without** frontmatter.  They do _not_ themselves directly display in our default left sidebar navigation.
- appendix
- application
- scoping
- technical
- supplement

Files **r0** through **r4** use frontmatter use *include_relative* for their content.

Frontmatter variables:
- title -- entry used for left sidebar navigation
- order -- sorting index used for left sidebar navigation
- permalink -- defines URL for webpage
