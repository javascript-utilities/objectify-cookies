# Objectify Cookies
[heading__top]:
  #objectify-cookies
  "&#x2B06; Builds dictionary/object from browser cookies string"


Builds dictionary/object from browser cookies string


## [![Byte size of Objectify Cookies][badge__main__objectify_cookies__source_code]][objectify_cookies__main__source_code] [![Open Issues][badge__issues__objectify_cookies]][issues__objectify_cookies] [![Open Pull Requests][badge__pull_requests__objectify_cookies]][pull_requests__objectify_cookies] [![Latest commits][badge__commits__objectify_cookies__main]][commits__objectify_cookies__main] [![objectify-cookies Demos][badge__gh_pages__objectify_cookies]][gh_pages__objectify_cookies]


---


- [:arrow_up: Top of Document][heading__top]

- [:building_construction: Requirements][heading__requirements]

- [:zap: Quick Start][heading__quick_start]

  - [:memo: Edit Your ReadMe File][heading__your_readme_file]
  - [:floppy_disk: Commit and Push][heading__commit_and_push]

- [&#x1F9F0; Usage][heading__usage]

- [&#x1F5D2; Notes][heading__notes]

- [:chart_with_upwards_trend: Contributing][heading__contributing]

  - [:trident: Forking][heading__forking]
  - [:currency_exchange: Sponsor][heading__sponsor]


- [:card_index: Attribution][heading__attribution]

- [:balance_scale: Licensing][heading__license]


---



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


This repository depends upon [Jekyll][jekyll_rb__home] which is supported by [GitHub Pages][github_docs__github_pages__jekyll], further details about setup can be found from [documentation][jekyll_rb__github_pages] published by the Jekyll maintainers regarding GitHub Pages.


______


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


This repository encourages the use of Git Submodules to track dependencies


**Bash Variables**


```Bash
_module_name='objectify-cookies'
_module_https_url="https://github.com/javascript-utilities/objectify-cookies.git"
_module_base_dir='assets/javascript/modules'
_module_path="${_module_base_dir}/${_module_name}"
```


**Bash Submodule Commands**


```Bash
cd "<your-git-project-path>"

git checkout gh-pages
mkdir -vp "${_module_base_dir}"

git submodule add\
 -b main --name "${_module_name}"\
 "${_module_https_url}" "${_module_path}"
```


---


### Your ReadMe File
[heading__your_readme_file]:
  #your-readme-file
  "&#x1F4DD; Suggested additions for your ReadMe.md file so everyone has a good time with submodules"


Suggested additions for your _`ReadMe.md`_ file so everyone has a good time with submodules


```MarkDown
Clone with the following to avoid incomplete downloads


    git clone --recurse-submodules <url-for-your-project>


Update/upgrade submodules via


    git submodule update --init --merge --recursive
```


### Commit and Push
[heading__commit_and_push]:
  #commit-and-push
  "&#x1F4BE; It may be just this easy..."


```Bash
git add .gitmodules
git add "${_module_path}"


## Add any changed files too


git commit -F- <<'EOF'
:heavy_plus_sign: Adds `javascript-utilities/objectify-cookies#1` submodule



**Additions**


- `.gitmodules`, tracks submodules AKA Git within Git _fanciness_

- `README.md`, updates installation and updating guidance

- `_modules_/objectify-cookies`, Builds dictionary/object from browser cookies string
EOF


git push origin gh-pages
```


**:tada: Excellent :tada:** your project is now ready to begin unitizing code from this repository!


______


## Usage
[heading__usage]:
  #usage
  "&#x1F9F0; How to utilize this repository"


**`/assets/js/index.js`**


```JavaScript
function calculateCookieExpiration(days = 1) {
    days = Number(days);
    if (isNaN(days)) {
        days = 1;
    }
    const date = new Date();
    const now = date.getTime();
    return date.setTime(now + 1 * 24 * 60 * 60 * 1000);
}


window.addEventListener('load', () => {
  document.cookies = `key_name=something;expires=${calculateCookieExpiration()};path=/`;

  const cookies = objectifyCookies();
  console.log(`cookies['key_name'] -> ${cookies['key_name']}`);
});
```


**`index.html`**


```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Objectify Cookies Example</title>

    <script scr="/assets/javascript/modules/objectify-cookies/objectify-cookies.js"
            type="text/javascript"
            differ></script>

    <script scr="/assets/javascript/index.js"
            type="text/javascript"
            differ></script>
  </head>

  <body>
    <p>Check the JavaScript console log for output</p>
  </body>
</html>
```

______


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


This repository may not be feature complete and/or fully functional, Pull Requests that add features or fix bugs are certainly welcomed.



______


## Contributing
[heading__contributing]:
  #contributing
  "&#x1F4C8; Options for contributing to objectify-cookies and javascript-utilities"


Options for contributing to objectify-cookies and javascript-utilities


### Forking
[heading__forking]:
  #forking
  "&#x1F531; Tips for forking objectify-cookies"


Start making a [Fork][objectify_cookies__fork_it] of this repository to an account that you have write permissions for.


- Add remote for fork URL. The URL syntax is _`git@github.com:<NAME>/<REPO>.git`_...


```Bash
cd ~/git/hub/javascript-utilities/objectify-cookies

git remote add fork git@github.com:<NAME>/objectify-cookies.git
```


- Commit your changes and push to your fork, eg. to fix an issue...


```Bash
cd ~/git/hub/javascript-utilities/objectify-cookies


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork main
```


> Note, the `-u` option may be used to set `fork` as the default remote, eg. _`git push fork main`_ however, this will also default the `fork` remote for pulling from too! Meaning that pulling updates from `origin` must be done explicitly, eg. _`git pull origin main`_


- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_


> Note; to decrease the chances of your Pull Request needing modifications before being accepted, please check the [dot-github](https://github.com/javascript-utilities/.github) repository for detailed contributing guidelines.


### Sponsor
  [heading__sponsor]:
  #sponsor
  "&#x1F4B1; Methods for financially supporting javascript-utilities that maintains objectify-cookies"



______


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)


______


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"


```
Builds dictionary/object from browser cookies string
Copyright (C) 2020 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

```


For further details review full length version of [AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"


[badge__commits__objectify_cookies__main]:
  https://img.shields.io/github/last-commit/javascript-utilities/objectify-cookies/main.svg

[commits__objectify_cookies__main]:
  https://github.com/javascript-utilities/objectify-cookies/commits/main
  "&#x1F4DD; History of changes on this branch"


[objectify_cookies__community]:
  https://github.com/javascript-utilities/objectify-cookies/community
  "&#x1F331; Dedicated to functioning code"

[objectify_cookies__gh_pages]:
  https://github.com/javascript-utilities/objectify-cookies/tree/
  "Source code examples hosted thanks to GitHub Pages!"

[badge__gh_pages__objectify_cookies]:
  https://img.shields.io/website/https/javascript-utilities.github.io/objectify-cookies/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[gh_pages__objectify_cookies]:
  https://javascript-utilities.github.io/objectify-cookies/index.html
  "&#x1F52C; Check the example collection tests"

[issues__objectify_cookies]:
  https://github.com/javascript-utilities/objectify-cookies/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[objectify_cookies__fork_it]:
  https://github.com/javascript-utilities/objectify-cookies/
  "&#x1F531; Fork it!"

[pull_requests__objectify_cookies]:
  https://github.com/javascript-utilities/objectify-cookies/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[objectify_cookies__main__source_code]:
  https://github.com/javascript-utilities/objectify-cookies/
  "&#x2328; Project source!"

[badge__issues__objectify_cookies]:
  https://img.shields.io/github/issues/javascript-utilities/objectify-cookies.svg

[badge__pull_requests__objectify_cookies]:
  https://img.shields.io/github/issues-pr/javascript-utilities/objectify-cookies.svg

[badge__main__objectify_cookies__source_code]:
  https://img.shields.io/github/repo-size/javascript-utilities/objectify-cookies


[jekyll_rb__home]:
  https://jekyllrb.com/
  "Jekyll home page"

[jekyll_rb__github_pages]:
  https://jekyllrb.com/docs/github-pages/
  "Jekyll documentation for GitHub Pages setup"

[github_docs__github_pages__jekyll]:
  https://docs.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll
  "GitHub Pages documentation on Jekyll setup"




[sponsor__shields_io__liberapay]:
  https://img.shields.io/static/v1?logo=liberapay&label=Sponsor&message=javascript-utilities

[sponsor__link__liberapay]:
  https://liberapay.com/javascript-utilities
  "&#x1F4B1; Sponsor developments and projects that javascript-utilities maintains via Liberapay"

