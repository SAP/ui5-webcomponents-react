workflow "Pull Request" {
  on = "pull_request"
  resolves = ["Build"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  needs = ["Install"]
  uses = "actions/npm@master"
  args = "test"
}

action "Build" {
  needs = ["Test"]
  uses = "actions/npm@master"
  args = "build"
}
