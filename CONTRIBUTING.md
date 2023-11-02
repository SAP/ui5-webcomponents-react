# Contributing to ui5-webcomponents-react

You want to contribute to `ui5-webcomponents-react`? Welcome! Please read this document to understand what you can do:

- [Report an Issue](#report-an-issue)
- [Contribute Code](#contribute-code)

## Report an Issue

If you find a bug or some other issue with any part of the library, please [submit an issue](https://github.com/SAP/ui5-webcomponents-react/issues). Before doing so, please make sure that:

- The issue is not a duplicate issue.
- The issue has not been fixed in a newer release of the library.
- The issue is reproducible.
- Your explanation is clear and complete.
- You provide example code (preferably by forking this [codeSandbox template](https://codesandbox.io/s/ui5-web-components-for-react-vite-template-rcpmd4?file=/src/App.jsx)) and optionally screenshots.

If you meet the above criteria, you can submit issues with our [GitHub issue tracker](https://github.com/SAP/ui5-webcomponents-react/issues/new/choose). Please use [labels](#usage-of-labels) to categorize your issue.

## Feature Requests

You can also use the issue tracker to request a new feature or enhancement. Even if you want to implement the feature yourself, please first submit an issue detailing your proposal so that we may discuss it with you and the community before moving forward. Please use [labels](#usage-of-labels) when creating feature requests.

### Usage of Labels

GitHub offers labels to categorize issues. You can use the following labels:

Labels for issue categories:

- `bug`: Something isn't working / Issues in the code.
- `documentation`: Issues with the documentation (repo and website documentation).
- `feature-request`: New feature or enhancement requests.

Status of open issues:

- `(no label)`: The default status.
- `contribution welcome`: The fix or enhancement is approved and you are invited to contribute to it.

_It may happen that we add more labels to individual issues. These are used to describe the issue more granularly, but you don't need to worry about that._

## Contribute Code

You are welcome to contribute code to `ui5-webcomponents-react` in order to fix issues or to add new features.

## Developer Certificate of Origin (DCO)

Due to legal reasons, contributors will be asked to accept a DCO before they submit the first pull request to this projects, this happens in an automated fashion during the submission process.
SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

### How to contribute - the Process

1. Please let us know, that you want to work on the issue you've filed in the [issue tracker](https://github.com/SAP/ui5-webcomponents-react/issues).
2. If the issue is marked with the `contribution welcome` tag, we'll assign you right away, otherwise we will check if some more information our guidance is needed and only then assign you to it.
3. Once you are assigned to the issue, you are ready to go.
4. Fork the `ui5-webcomponents-react` repository into your GitHub account, create a branch and apply your change. Please don't work directly on the `main` branch of your fork. This will help to update your fork in the future more easily.
5. Commit and push your change on that branch.
   Please follow our [Development Conventions and Guidelines](/docs/Guidelines.md).
6. Create a pull request from your branch into `ui5-webcomponents-react`-`main` branch.
7. Follow the link posted by the CLA assistant to your pull request and accept it, as described above.
8. Wait for our code review and approval, possibly enhancing your change on request.
   Note that the `ui5-webcomponents-react` developers have many duties. So, depending on the required effort for reviewing, testing, and clarification, this may take a while.
9. Once the change has been approved and merged, we will inform you in a comment.
10. Celebrate! 🎉

### Helper Scripts

Remove all local branches which have been merged:

```bash
git fetch -p && for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
```

Add your commit template for conventional commits:

```bash
git config commit.cleanup strip
git config commit.template "$(pwd)/config/.gitmessage"
```

If you use Sourcetree, please also enable in the Repository Settings the Custom Commit Template.
