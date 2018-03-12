# Contributing to ez-game-engine

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to ez-game-engine, which are hosted by [EZtouch](https://github.com/EZtouch/ez-game-engine) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [ez-game-engine Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [ez-game-engine Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [EZtouch].

## I don't want to read this whole thing I just have a question!!!

> **Note:** [Please don't file an issue to ask a question.] You'll get faster results by using the resources below.
## What should I know before I get started?

### ez-game-engine

ez-game-engine is a large open source typescript-base game engine &mdash. When you initially consider contributing to ez-game-engine, you might be unsure about which part of the code implements the functionality you want to change or report a bug for. This section should help you with that.

ez-game-engine is intentionally very modular.


Here's a list of the big ones:


### Design Decisions

When we make a significant decision in how we maintain the project and what we can or cannot support, we will document it in the [ez-game-engine/design-decisions repository](https://github.com/eztouch/ez-game-engine/design-decisions). If you have a question around how we do things, check to see if it is documented there. If it is *not* documented there, please open a new topic and ask your question.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for ez-game-engine. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Check the [debugging guide](https://docs.microsoft.com/en-us/aspnet/core/testing/).** You might be able to find the cause of the problem and fix things yourself. Most importantly, check if you can reproduce the problem [in the latest version of ez-game-engine], if the problem happens when you run ez-game-engine in [safe mode], and if you can get the desired behavior by changing [ez-game-engine's or packages' config settings].
* **Perform a [cursory search](https://github.com/EZtouch/ez-game-engine/issues?q=is%3Aissue+user)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository] your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started ez-game-engine, e.g. which command exactly you used in the terminal, or how you started ez-game-engine otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an ez-game-engine command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that ez-game-engine crashed**, include a crash report with a stack trace from the operating system. Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance or memory**, include a [CPU profile capture] with your report.
* **If Chrome's developer tools pane is shown without you triggering it**, that normally means that you have a syntax error in one of your themes or in your styles. Try running in [Safe Mode] and using a different theme or comment out the contents of your styles to see if that fixes the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.
* **If you are getting resource not found error (404), force bower to restore the client packages by right-clicking on the web project, and clicking manage bower packages.

Provide more context by answering these questions:

* **Can you reproduce the problem in [safe mode]?**
* **Did the problem start happening recently** (e.g. after updating to a new version of ez-game-engine) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of ez-game-engine?** What's the most recent version in which the problem doesn't happen? You can download older versions of ez-game-engine from [the releases page](https://github.com/EZtouch/ez-game-engine/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **Which version of ez-game-engine are you using?**.
* **What's the name and version of the OS you're using**?
* **Are you running ez-game-engine in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?
* **Which [packages](#ez-game-engine-and-packages) do you have installed?** You can get that list by running `apm list --installed`.
* **Are you using [local configuration files]** to customize ez-game-engine? If so, provide the contents of those files, preferably in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines) or with a link to a [gist](https://gist.github.com/).
* **Are you using ez-game-engine with multiple monitors?** If so, can you reproduce the problem when you use a single monitor?
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for ez-game-engine, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check the [debugging guide](https://docs.microsoft.com/en-us/aspnet/core/testing/)** for tips — you might discover that the enhancement is already available. Most importantly, check if you're using [the latest version of ez-game-engine] and if you can get the desired behavior by changing [ez-game-engine's or packages' config settings].
* **Check if there's already [a package](https://www.nuget.org/)(https://bower.io/search/) which provides that enhancement.**
* **Determine [which repository the enhancement should be suggested in](#ez-game-engine-and-packages).**
* **Perform a [cursory search](https://github.com/EZtouch/ez-game-engine/issues?q=is%3Aissue+user)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#ez-game-engine-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of ez-game-engine which the suggestion is related to. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most ez-game-engine users and isn't something that can or should be implemented as a [community package](#ez-game-engine-and-packages).
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of ez-game-engine you're using.**.
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to ez-game-engine? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Pull Requests

* Fill in [the required template](PULL_REQUEST_TEMPLATE.md)
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the [JavaScript](#javascript-styleguide) and [CoffeeScript](#coffeescript-styleguide) styleguides.
* Include thoughtfully-worded, well-structured documentation.
* Document new code based on the [Documentation Styleguide](#documentation-styleguide)
* End all files with a newline
* [Avoid platform-dependent code]

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit description
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](http://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```

### CoffeeScript Styleguide

* Set parameter defaults without spaces around the equal sign
    * `clear = (count=1) ->` instead of `clear = (count = 1) ->`
* Use spaces around operators
    * `count + 1` instead of `count+1`
* Use spaces after commas (unless separated by newlines)
* Use parentheses if it improves code clarity.
* Prefer alphabetic keywords to symbolic keywords:
    * `a is b` instead of `a == b`
* Avoid spaces inside the curly-braces of hash literals:
    * `{a: 1, b: 2}` instead of `{ a: 1, b: 2 }`
* Include a single line of whitespace between methods.
* Capitalize initialisms and acronyms in names, except for the first word, which
  should be lower-case:
  * `getURI` instead of `getUri`
  * `uriToOpen` instead of `URIToOpen`
* Use `slice()` to copy an array
* Add an explicit `return` when your function ends with a `for`/`while` loop and
  you don't want it to return a collected array.
* Use `this` instead of a standalone `@`
  * `return this` instead of `return @`


### Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

#### Example

```coffee
# Public: Disable the package with the given name.
#
# * `name`    The {String} name of the package to disable.
# * `options` (optional) The {Object} with disable options (default: {}):
#   * `trackTime`     A {Boolean}, `true` to track the amount of time taken.
#   * `ignoreErrors`  A {Boolean}, `true` to catch and ignore errors thrown.
# * `callback` The {Function} to call after the package has been disabled.
#
# Returns `undefined`.
disablePackage: (name, options, callback) ->
```

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all ez-game-engine repositories, but some are specific to `ez-game-engine/master`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `ez-game-engine/master` and all ez-game-engine-owned packages which are labeled as bugs, but still need to be reliably reproduced](https://github.com/Eztouch/ez-game-engine/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3+label%3Abug+label%3Aneeds-reproduction) or perhaps [open pull requests in `ez-game-engine/master` which haven't been reviewed yet](https://github.com/EZtouch/ez-game-engine/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+repo%3+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `ez-game-engine/master` only and also across all ez-game-engine repositories. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on `ez-game-engine/master` if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name | `ez-game-engine/master` :mag_right: | `ez-game-engine`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-ez-game-engine-repo-label-enhancement] | [search][search-ez-game-engine-org-label-enhancement] | Feature requests. |
| `bug` | [search][search-ez-game-engine-repo-label-bug] | [search][search-ez-game-engine-org-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-ez-game-engine-repo-label-question] | [search][search-ez-game-engine-org-label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-ez-game-engine-repo-label-feedback] | [search][search-ez-game-engine-org-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-ez-game-engine-repo-label-help-wanted] | [search][search-ez-game-engine-org-label-help-wanted] | The ez-game-engine core team would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-ez-game-engine-repo-label-beginner] | [search][search-ez-game-engine-org-label-beginner] | Less complex issues which would be good first issues to work on for users who want to contribute to ez-game-engine. |
| `more-information-needed` | [search][search-ez-game-engine-repo-label-more-information-needed] | [search][search-ez-game-engine-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-ez-game-engine-repo-label-needs-reproduction] | [search][search-ez-game-engine-org-label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| `blocked` | [search][search-ez-game-engine-repo-label-blocked] | [search][search-ez-game-engine-org-label-blocked] | Issues blocked on other issues. |
| `duplicate` | [search][search-ez-game-engine-repo-label-duplicate] | [search][search-ez-game-engine-org-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-ez-game-engine-repo-label-wontfix] | [search][search-ez-game-engine-org-label-wontfix] | The ez-game-engine core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-ez-game-engine-repo-label-invalid] | [search][search-ez-game-engine-org-label-invalid] | Issues which aren't valid (e.g. user errors). |
| `package-idea` | [search][search-ez-game-engine-repo-label-package-idea] | [search][search-ez-game-engine-org-label-package-idea] | Feature request which might be good candidates for new packages, instead of extending ez-game-engine or core ez-game-engine packages. |
| `wrong-repo` | [search][search-ez-game-engine-repo-label-wrong-repo] | [search][search-ez-game-engine-org-label-wrong-repo] | Issues reported on the wrong repository. |

#### Topic Categories

| Label name | `ez-game-engine/master` :mag_right: | `ez-game-engine`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `windows` | [search][search-ez-game-engine-repo-label-windows] | [search][search-ez-game-engine-org-label-windows] | Related to ez-game-engine running on Windows. |
| `linux` | [search][search-ez-game-engine-repo-label-linux] | [search][search-ez-game-engine-org-label-linux] | Related to ez-game-engine running on Linux. |
| `mac` | [search][search-ez-game-engine-repo-label-mac] | [search][search-ez-game-engine-org-label-mac] | Related to ez-game-engine running on macOS. |
| `documentation` | [search][search-ez-game-engine-repo-label-documentation] | [search][search-ez-game-engine-org-label-documentation] | Related to any type of documentation (e.g. [API documentation] [manual]). |
| `performance` | [search][search-ez-game-engine-repo-label-performance] | [search][search-ez-game-engine-org-label-performance] | Related to performance. |
| `security` | [search][search-ez-game-engine-repo-label-security] | [search][search-ez-game-engine-org-label-security] | Related to security. |
| `ui` | [search][search-ez-game-engine-repo-label-ui] | [search][search-ez-game-engine-org-label-ui] | Related to visual design. |
| `api` | [search][search-ez-game-engine-repo-label-api] | [search][search-ez-game-engine-org-label-api] | Related to ez-game-engine's public APIs. |
| `uncaught-exception` | [search][search-ez-game-engine-repo-label-uncaught-exception] | [search][search-ez-game-engine-org-label-uncaught-exception] | Issues about uncaught exceptions, normally created from the [Notifications package]. |
| `crash` | [search][search-ez-game-engine-repo-label-crash] | [search][search-ez-game-engine-org-label-crash] | Reports of ez-game-engine completely crashing. |
| `auto-indent` | [search][search-ez-game-engine-repo-label-auto-indent] | [search][search-ez-game-engine-org-label-auto-indent] | Related to auto-indenting text. |
| `encoding` | [search][search-ez-game-engine-repo-label-encoding] | [search][search-ez-game-engine-org-label-encoding] | Related to character encoding. |
| `network` | [search][search-ez-game-engine-repo-label-network] | [search][search-ez-game-engine-org-label-network] | Related to network problems or working with remote files (e.g. on network drives). |
| `git` | [search][search-ez-game-engine-repo-label-git] | [search][search-ez-game-engine-org-label-git] | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |

#### `ez-game-engine/master` Topic Categories

| Label name | `ez-game-engine/master` :mag_right: | `ez-game-engine`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `editor-rendering` | [search][search-ez-game-engine-repo-label-editor-rendering] | [search][search-ez-game-engine-org-label-editor-rendering] | Related to language-independent aspects of rendering text (e.g. scrolling, soft wrap, and font rendering). |
| `build-error` | [search][search-ez-game-engine-repo-label-build-error] | [search][search-ez-game-engine-org-label-build-error] | Related to problems with building ez-game-engine from source. |
| `error-from-pathwatcher` | [search][search-ez-game-engine-repo-label-error-from-pathwatcher] | [search][search-ez-game-engine-org-label-error-from-pathwatcher] | Related to errors thrown by the [pathwatcher library]. |
| `error-from-save` | [search][search-ez-game-engine-repo-label-error-from-save] | [search][search-ez-game-engine-org-label-error-from-save] | Related to errors thrown when saving files. |
| `error-from-open` | [search][search-ez-game-engine-repo-label-error-from-open] | [search][search-ez-game-engine-org-label-error-from-open] | Related to errors thrown when opening files. |
| `installer` | [search][search-ez-game-engine-repo-label-installer] | [search][search-ez-game-engine-org-label-installer] | Related to the ez-game-engine installers for different OSes. |
| `auto-updater` | [search][search-ez-game-engine-repo-label-auto-updater] | [search][search-ez-game-engine-org-label-auto-updater] | Related to the auto-updater for different OSes. |
| `deprecation-help` | [search][search-ez-game-engine-repo-label-deprecation-help] | [search][search-ez-game-engine-org-label-deprecation-help] | Issues for helping package authors remove usage of deprecated APIs in packages. |

#### Pull Request Labels

| Label name | `ez-game-engine/master` :mag_right: | `ez-game-engine`‑org :mag_right: | Description
| --- | --- | --- | --- |
| `work-in-progress` | [search][search-ez-game-engine-repo-label-work-in-progress] | [search][search-ez-game-engine-org-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-ez-game-engine-repo-label-needs-review] | [search][search-ez-game-engine-org-label-needs-review] | Pull requests which need code review, and approval from maintainers or ez-game-engine core team. |
| `under-review` | [search][search-ez-game-engine-repo-label-under-review] | [search][search-ez-game-engine-org-label-under-review] | Pull requests being reviewed by maintainers or ez-game-engine core team. |
| `requires-changes` | [search][search-ez-game-engine-repo-label-requires-changes] | [search][search-ez-game-engine-org-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-ez-game-engine-repo-label-needs-testing] | [search][search-ez-game-engine-org-label-needs-testing] | Pull requests which need manual testing. |

[search-ez-game-engine-repo-label-enhancement]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aenhancement
[search-ez-game-engine-org-label-enhancement]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aenhancement
[search-ez-game-engine-repo-label-bug]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Abug
[search-ez-game-engine-org-label-bug]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Abug
[search-ez-game-engine-repo-label-question]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aquestion
[search-ez-game-engine-org-label-question]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aquestion
[search-ez-game-engine-repo-label-feedback]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Afeedback
[search-ez-game-engine-org-label-feedback]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Afeedback
[search-ez-game-engine-repo-label-help-wanted]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Ahelp-wanted
[search-ez-game-engine-org-label-help-wanted]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Ahelp-wanted
[search-ez-game-engine-repo-label-beginner]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Abeginner
[search-ez-game-engine-org-label-beginner]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Abeginner
[search-ez-game-engine-repo-label-more-information-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Amore-information-needed
[search-ez-game-engine-org-label-more-information-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Amore-information-needed
[search-ez-game-engine-repo-label-needs-reproduction]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aneeds-reproduction
[search-ez-game-engine-org-label-needs-reproduction]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aneeds-reproduction
[search-ez-game-engine-repo-label-triage-help-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Atriage-help-needed
[search-ez-game-engine-org-label-triage-help-needed]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Atriage-help-needed
[search-ez-game-engine-repo-label-windows]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Awindows
[search-ez-game-engine-org-label-windows]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Awindows
[search-ez-game-engine-repo-label-linux]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Alinux
[search-ez-game-engine-org-label-linux]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Alinux
[search-ez-game-engine-repo-label-mac]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Amac
[search-ez-game-engine-org-label-mac]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Amac
[search-ez-game-engine-repo-label-documentation]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Adocumentation
[search-ez-game-engine-org-label-documentation]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Adocumentation
[search-ez-game-engine-repo-label-performance]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aperformance
[search-ez-game-engine-org-label-performance]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aperformance
[search-ez-game-engine-repo-label-security]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Asecurity
[search-ez-game-engine-org-label-security]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Asecurity
[search-ez-game-engine-repo-label-ui]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aui
[search-ez-game-engine-org-label-ui]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aui
[search-ez-game-engine-repo-label-api]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aapi
[search-ez-game-engine-org-label-api]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aapi
[search-ez-game-engine-repo-label-crash]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Acrash
[search-ez-game-engine-org-label-crash]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Acrash
[search-ez-game-engine-repo-label-auto-indent]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aauto-indent
[search-ez-game-engine-org-label-auto-indent]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aauto-indent
[search-ez-game-engine-repo-label-encoding]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aencoding
[search-ez-game-engine-org-label-encoding]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aencoding
[search-ez-game-engine-repo-label-network]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Anetwork
[search-ez-game-engine-org-label-network]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Anetwork
[search-ez-game-engine-repo-label-uncaught-exception]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Auncaught-exception
[search-ez-game-engine-org-label-uncaught-exception]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Auncaught-exception
[search-ez-game-engine-repo-label-git]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Agit
[search-ez-game-engine-org-label-git]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Agit
[search-ez-game-engine-repo-label-blocked]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Ablocked
[search-ez-game-engine-org-label-blocked]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Ablocked
[search-ez-game-engine-repo-label-duplicate]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aduplicate
[search-ez-game-engine-org-label-duplicate]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aduplicate
[search-ez-game-engine-repo-label-wontfix]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Awontfix
[search-ez-game-engine-org-label-wontfix]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Awontfix
[search-ez-game-engine-repo-label-invalid]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Ainvalid
[search-ez-game-engine-org-label-invalid]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Ainvalid
[search-ez-game-engine-repo-label-package-idea]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Apackage-idea
[search-ez-game-engine-org-label-package-idea]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Apackage-idea
[search-ez-game-engine-repo-label-wrong-repo]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Awrong-repo
[search-ez-game-engine-org-label-wrong-repo]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Awrong-repo
[search-ez-game-engine-repo-label-editor-rendering]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aeditor-rendering
[search-ez-game-engine-org-label-editor-rendering]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aeditor-rendering
[search-ez-game-engine-repo-label-build-error]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Abuild-error
[search-ez-game-engine-org-label-build-error]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Abuild-error
[search-ez-game-engine-repo-label-error-from-pathwatcher]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aerror-from-pathwatcher
[search-ez-game-engine-org-label-error-from-pathwatcher]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aerror-from-pathwatcher
[search-ez-game-engine-repo-label-error-from-save]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aerror-from-save
[search-ez-game-engine-org-label-error-from-save]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aerror-from-save
[search-ez-game-engine-repo-label-error-from-open]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aerror-from-open
[search-ez-game-engine-org-label-error-from-open]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aerror-from-open
[search-ez-game-engine-repo-label-installer]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Ainstaller
[search-ez-game-engine-org-label-installer]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Ainstaller
[search-ez-game-engine-repo-label-auto-updater]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Aauto-updater
[search-ez-game-engine-org-label-auto-updater]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aauto-updater
[search-ez-game-engine-repo-label-deprecation-help]: https://github.com/issues?q=is%3Aopen+is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+label%3Adeprecation-help
[search-ez-game-engine-org-label-deprecation-help]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Adeprecation-help
[search-ez-game-engine-repo-label-electron]: https://github.com/issues?q=is%3Aissue+repo%3Aez-game-engine%2Fez-game-engine+is%3Aopen+label%3Aelectron
[search-ez-game-engine-org-label-electron]: https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aez-game-engine+label%3Aelectron
[search-ez-game-engine-repo-label-work-in-progress]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3Aez-game-engine%2Fez-game-engine+label%3Awork-in-progress
[search-ez-game-engine-org-label-work-in-progress]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3Aez-game-engine+label%3Awork-in-progress
[search-ez-game-engine-repo-label-needs-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3Aez-game-engine%2Fez-game-engine+label%3Aneeds-review
[search-ez-game-engine-org-label-needs-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3Aez-game-engine+label%3Aneeds-review
[search-ez-game-engine-repo-label-under-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3Aez-game-engine%2Fez-game-engine+label%3Aunder-review
[search-ez-game-engine-org-label-under-review]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3Aez-game-engine+label%3Aunder-review
[search-ez-game-engine-repo-label-requires-changes]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3Aez-game-engine%2Fez-game-engine+label%3Arequires-changes
[search-ez-game-engine-org-label-requires-changes]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3Aez-game-engine+label%3Arequires-changes
[search-ez-game-engine-repo-label-needs-testing]: https://github.com/pulls?q=is%3Aopen+is%3Apr+repo%3Aez-game-engine%2Fez-game-engine+label%3Aneeds-testing
[search-ez-game-engine-org-label-needs-testing]: https://github.com/pulls?q=is%3Aopen+is%3Apr+user%3Aez-game-engine+label%3Aneeds-testing

[beginner]:https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3Aez-game-engine+sort%3Acomments-desc
[help-wanted]:https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3Aez-game-engine+sort%3Acomments-desc+-label%3Abeginner
