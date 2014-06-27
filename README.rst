DirectEmployers Foundation UI Framework
========================================
A global UI framework built on top of Bootstrap and jQuery.

Version 2 now available (1/3/13).
Version 2 of the UI Framework is now in place. This version:

- adds support for Bootstrap 2.2.1
- deprecates the 16 column grid in favor of Bootstrap's 12 column grid
- reduces the number of @import actions to reduce css load time

Documentation is still in its infancy. Please contact Jason Sole with any questions: jason@directemplpoyersfoundation.org.

/framework
----------
Contains the actual files for inclusion in the UI. This broken into 4 main areas:

/css
----
The CSS files needed to make the framework function. This includes the base Bootstrap files (which are included instead of linked in order to control unintended effects due to changes in the Bootstrap project).

/js
---
The base JavaScript files. This is 95% jQuery right now, with a few custom functions. jQuery is included instead of linked for the same reason as Bootstrap.

/images
-------
Any images required by the css and JavaScript to style elements.

/django
-------
Template and settings helpful to using the framework in a Django project.

/documentation
--------------
Contains all documentation and examples.

Copyright and License
---------------------
Copyright (C) 2012-2013, DirectEmployers Foundation.  This project is provided under
a triple license that allows you to select the license that is best for your 
needs. You may choose from:

- The GNU GPL v2.0
- The GNU GPL v3.0
- The MIT License

You can read the licenses in the licenses directory.

More information
----------------
Information about DirectEmployers Foundation can be found at http://directemployersfoundation.org


We are hiring!
--------------
http://directemployersfoundation.org/careers
