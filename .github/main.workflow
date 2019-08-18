workflow "Pull Request" {
  resolves = [
    "Build",
    "Coveralls",
  ]
  on = "pull_request"
}

action "Install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "Test Node 10" {
  needs = ["Install"]
  uses = "aquariuslt/node-browsers-github-actions@master"
  runs = "yarn"
  args = "test"
}

action "Build" {
  needs = ["Install"]
  uses = "Borales/actions-yarn@master"
  args = "build"
}

action "Coveralls" {
  uses = "coverallsapp/github-action@master"
  needs = ["Test Node 10"]
  secrets = ["GITHUB_TOKEN"]
}
