workflow "Pull Request" {
  on = "pull_request"
  resolves = ["Build"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  needs = ["Install"]
  uses = "nuxt/actions-yarn@master"
  args = "test"
}

action "Build" {
  needs = ["Test"]
  uses = "nuxt/actions-yarn@master"
  args = "build"
}
