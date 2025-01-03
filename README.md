# Pragra Employee Management UI

## Requirements

- Node ^16
- Any IDE for javascript/typescript

## Developer Notes

Developers should follow the following practices when working on the project.
* Create a branch from the develop branch for the feature you are working on work only on that branch, make sure to push your changes daily before logging out. Always make sure to take a pull before pushing your changes to make sure there are no conflicts because of your pushed changes.
* In your commit message, include the epic name and issue name from jira.
* Once a functionality is stable and ready raise a merge request to be merged with the develop branch.

## Helper notes for nextjs ^13

* All required code is written the folder `src/app`. 
* The routes are defined by pages created in the folder (routes) and should follow few conditions to be configured as a route.
    - Suppose for a route /dashboard/calendar, two within the app folder there should be dashboard folder containing calendar folder with the file **page.tsx**. 
    - Any folder with paranthesis around it [Example: (routes)]. is not included within the route.
* The layout provided in layout.tsx is shared among all components within the parent folder. Meaning the mail Layout is shared within all code and can be used for all common parts of application.
* Folders starting with **_** [Example: _components] are private folders and won't be included in teh routes.
* We are following a practice to keep all our rotes pages inside the (routes) folder.
* For importing components instead of importing through relative path we can now import using `@`. Example:
    ```
    // before
    import { Button } from '../../../components/button'
 
    // after
    import { Button } from '@/components/button'
    ```
* If you are going to use a hook in your file add `'use client'` at start of your tsx file to avaoid rendering error. Example:
    ```
    'use client'
 
    import { useState } from 'react'
    ```