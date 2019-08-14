workflow "Pull Request" {
  resolves = [
    "Build",
    "Coveralls",
  ]
  on = "pull_request"
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test Node 8" {
  uses = "nuxt/actions-yarn@node-8"
  needs = ["Install"]
  args = "test"
}

action "Test Node 10" {
  needs = ["Install"]
  uses = "nuxt/actions-yarn@node-10"
  args = "test"
}

action "Coveralls" {
  uses = "coverallsapp/github-action@master"
  needs = ["Test Node 8", "Test Node 10"]
  secrets = ["GITHUB_TOKEN"]
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "build"
  needs = ["Test Node 10", "Test Node 8"]
}
