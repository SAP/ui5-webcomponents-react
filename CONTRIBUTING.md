# Contributing to ui5-webcomponents-react

You want to contribute to `ui5-webcomponents-react`? Welcome! Please read this document to understand what you can do:
 * [Report an Issue](#report-an-issue)
 * [Contribute Code](#contribute-code)
 
## Report an Issue
If you find a bug or some other issue with any part of the library, please [submit an issue](https://github.com/SAP/ui5-webcomponents-react/issues). Before doing so, please make sure that:

- The issue is not a duplicate issue.
- The issue has not been fixed in a newer release of the library.
- The issue is reproducible.
- Your explanation is clear and complete.
- You provide example code and/or screenshots (recommended).

If you meet the above criteria, you can submit issues with our [GitHub issue tracker](https://github.com/SAP/ui5-webcomponents-react/issues/new). Please use [labels](#usage-of-labels) to categorize your issue

## Feature Requests

You can also use the issue tracker to request a new feature or enhancement. Even if you want to implement the feature yourself, please first submit an issue detailing your proposal so that we may discuss it with you and the community before moving forward. Please use [labels](#usage-of-labels) when creating feature requests.

### Usage of Labels

GitHub offers labels to categorize issues. You can use the following labels:

Labels for issue categories:

- `bug`: Something isn't working / Issues in the code.
- `documentation`: Issues with the documentation (repo and website documentation).
- `enhancement`: New feature or enhancement requests.

Status of open issues:

- `(no label)`: The default status.
- `unconfirmed`: The issue needs to be confirmed as being a bug or future enhancement.
- `approved`: The issue is confirmed as being a bug to be fixed or enhancement to be developed.
- `author action`: The issue's creator needs to provide additional information.
- `contribution welcome`: The fix or enhancement is approved and you are invited to contribute to it.

Status of closed issues:

- `fixed`: A fix for the issue was provided.
- `duplicate`: The issue is also reported in a different ticket and is being managed there.
- `invalid`: The reported issue will not be addressed.
- `wontfix`: The issue will not be fixed.

## Contribute Code

You are welcome to contribute code to `ui5-webcomponents-react` in order to fix issues or to add new features.

There are two important things to consider:

1.  You must be aware of the Apache License (which describes contributions) and **agree to the Contributors License Agreement**. This is common practice in all major Open Source projects. If you are an individual contributor, use _[CLA assistant](https://cla-assistant.io/)_. CLA assistant is an open source tool that integrates with GitHub and enables a one-click-experience for accepting the CLA. If you are contributing on behalf of a company, see the [Company Contributors](#company-contributors) section below for details.
2.  You must follow **code style, and quality requirements**. You can find more information on the [coding guidelines](/docs/Guidelines.md).

### Contributor License Agreement

When you contribute (code, documentation, or anything else), you must be aware that your contribution is covered by the same [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0) that is applied to Fundamental-react itself.
In particular, you need to agree to the Individual Contributor License Agreement,
which can be [found here](https://gist.github.com/CLAassistant/bd1ea8ec8aa0357414e8).
(This applies to all contributors, including those contributing on behalf of a company). If you agree to its content, you simply have to click on the link posted by the CLA assistant as a comment to the pull request. Click it to check the CLA and, if you agree to it, accept it on the following screen. CLA assistant saves this decision for upcoming contributions and notifies you if there is any change to the CLA in the meantime.

### Company Contributors

If employees of a company contribute code, in addition to the individual agreement above, there needs to be one company agreement submitted. This is mainly for the protection of the contributing employees.

A company representative authorized to do so needs to download, fill, and print the [Corporate Contributor License Agreement](/docs/SAP%20Corporate%20Contributor%20License%20Agreement.pdf) form. Then either:

    * Scan it and e-mail it to opensource@sap.com
    * Fax it to: +49 6227 78-45813
    * Send it by traditional letter to: OSPO Core, Dietmar-Hopp-Allee 16, 69190 Walldorf, Germany

The form contains a list of employees who are authorized to contribute on behalf of your company. When this list changes, please let us know.

### How to contribute - the Process

1.  Make sure the issue you've filed in the [issue tracker](https://github.com/SAP/ui5-webcomponents-react/issues) has the label "contribution welcome" - otherwise, it is not ready to be worked on.
2. Fork the `ui5-webcomponents-react` repository into your GitHub account, create a branch and apply your change. Please don't work directly on the `master` branch of your fork. This will help to update your fork in the future more easily.
3. Commit and push your change on that branch.
      Please follow our [Development Conventions and Guidelines](/docs/Guidelines.md).
4. Create a pull request from your branch into `ui5-webcomponents-react`-`master` branch.
5. Follow the link posted by the CLA assistant to your pull request and accept it, as described above.
6. Wait for our code review and approval, possibly enhancing your change on request.
      Note that the `ui5-webcomponents-react` developers have many duties. So, depending on the required effort for reviewing, testing, and clarification, this may take a while.
7. Once the change has been approved and merged, we will inform you in a comment.
8. Celebrate! 🎉

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

 
