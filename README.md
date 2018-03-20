# \#SquadGoals
---
## Optimistic Mission
This app aims to facilitate squad growth in PUBG by tracking squad progress over time. In the future, we will add social aspects (find and meet other squads, etc etc).

## Progress Screenshots

### Home
![A first screen that collects data about the user's platform and region and shows status and version of pubg API](https://i.imgur.com/7ebctUY.png)

### Searching for your recent activity

![A screenshot of a user searching for their name](https://i.imgur.com/wH7B3Ya.png)

### Archive

Past:
 - [first screen](https://i.imgur.com/1f3wUEm.png)


## Developing

The repository has been set up as a yarn [workspace](https://yarnpkg.com/lang/en/docs/workspaces/) (so, you'll need [yarn](https://yarnpkg.com/en/)) - this means running `yarn` installs all dependencies for the whole project. All yarn tasks should be run from the root directory.

### Getting Started

Since there's some sensitive data required to run the app (db connections, api tokens), I've set up environment variables, so you'll need to set up your own! I hate polution my global environment with variables so this project uses local environment variables. To get started, run `yarn setup` which will install the project dependencies and set up a `.env` file with default values in the `squadgoals-api` directory. Adjust the values and see below to get started.


### Develop Like A Pro

Run `yarn dev` to spin up the dev servers. The API runs at `http://localhost:5000` and the ui runs at `http://localhost:3000`. The API inadvertently serves the last "built" version of the ui at `http://localhost:5000/`. This does not have hot-reloading - but could be useful to reference to smoke test a build. The UI proxies requests to the API, so you can easily develop the api at `http://localhost:3000`.