"use strict";

var GitHubApi = require("github");

var github = new GitHubApi({
    debug: true,
    version: "3.0.0"
});

github.authenticate({
    type: "basic",
    username: "andrewkeig",
    password: "#HERE#"
});


github.repos.get({
    user: "andrewkeig",
    repo: "airasoul"
}, function(err, res) {
    console.log(JSON.stringify(res));
});