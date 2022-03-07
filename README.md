# Alternative Airlines Landing Page Tech Test

## Deployment

Page is available at [Alternative Airlines test page](https://mattyocode.github.io/altair-landingpage/) via Github Pages.

## How to install

1. Clone from Github

   ```bash
   cd projects
   git clone <repo-tag>
   ```

1. Install dependencies

   Run `yarn install` to install dependencies.

1. Run tests

   Run `yarn test` see results of unit tests.

1. Start app locally

   Run `yarn start` to launch the app on localhost:3000

![alt-air-screengrab.jpg](https://github.com/mattyocode/images/blob/main/altair/alt-air-screengrab.jpg)

## Notes

Given the nature of the task (building out a prototype), I've focused on the presentational aspects of the process, aiming to closely match the design provided, both in terms of layout and animation.

I've included a few tests for the containers to provide some test oversight, but given more time, I would look to unit test the individual components.

Some state management is present in components, but as the data is all dummy data and we're not fetching data, there is no overall state management, and form fields, for example, are left without their values being tracked in state. Of course, in production, this would be a key aspect of the page, but I've spent time on the design aspect of the task vs. setting up hypothetical state management for the form.

Hope the page is as expected and meets requirements.

Thanks!

:grin:
