module.export = {
    branches: "master",
    repositoryURL: "https://github.com/abhishek-devani/react-app",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github", 
            {
                assets: [
                    { path: "build.zip", label: "Build"},
                    { path: "coverage.zip", label: "Coverage"},
                ]
            }
        ]
    ]
}