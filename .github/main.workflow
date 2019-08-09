workflow "Pull Request" {
  on = "pull_request"
  resolves = ["Test"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}


action "Test" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "Test"
}


action "Build" {
  needs = "Test"
  uses = "actions/npm@master"
  args = "build"
}
