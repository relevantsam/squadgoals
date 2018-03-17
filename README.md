# \#SquadGoals
---
## Optimistic Mission
This app aims to facilitate squad growth in PUBG by tracking squad progress over time. In the future, we will add social aspects (find and meet other squads, etc etc).

## Progress Screenshots

![A boring first screen that collects data about the user's platform and region](https://i.imgur.com/1f3wUEm.png)


## Developing

The repository has been set up as a yarn [workspace](https://yarnpkg.com/lang/en/docs/workspaces/) (so, you'll need [yarn](https://yarnpkg.com/en/)) - this means running `yarn` installs all dependencies for the whole project. All yarn tasks should be run from the root directory.

Run `yarn dev` to spin up the dev servers. The API runs at `http://localhost:5000` and the ui runs at `http://localhost:3000`. The API inadvertently serves the last "built" version of the ui at `http://localhost:5000/`. This does not have hot-reloading - but could be useful to reference to smoke test a build. The UI proxies requests to the API, so you can easily develop the api at `http://localhost:3000`.