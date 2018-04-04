# ember-node-mission

This repo is the way to onboard new devs on node. It's a generic template setup to work with mirage behaving as backend. This should be taken into consideration after candidate passes [Ember guide](https://guides.emberjs.com/)

## Coding sesions and assignments

* **Session 1:** ember-data and mirage part 1 - Setting up simple model and getting back list of mocked models
* **Session 2:** ember-data and mirage part 2 - Model relations and explaining one of CRUD operations that is not "Read" operation
* **Assignment 1:** Make models for given topic with relations and all CRUD operations using ember-data and mirage (as simple as possible, but to show ember-data usage and mirage usage)
* **Session 3:** ember-data and mirage part 3 and higher-order components - Queriing the store and writing mirage custom logic for the end-point, higher-order components and how and why they are used
* **Final assignment:** Make an app with at least 3 models, their CRUD operations. Mandatory creation of higher-order component with at least 2 components using this component and promote re-usibility of the component. Write some acceptance tests.
* **Session 4:** acceptance tests: Learning about acceptance tests, page objects and tests in general.

## References and good materials
* [Ember guide](https://guides.emberjs.com/)
* [Ember api docs](https://emberjs.com/api)
* [Mirage docs](http://www.ember-cli-mirage.com/docs/v0.3.x/)
* [Setting up mirage as backend](https://www.codeschool.com/blog/2016/07/07/building-an-ember-app-without-a-back-end/)
* [Ember pods structure](http://www.programwitherik.com/ember-pods/)
* [Higher-order components](https://www.youtube.com/watch?v=MpFudGJn2J0)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-node-mission`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
