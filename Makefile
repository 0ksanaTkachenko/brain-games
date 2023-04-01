# This command is useful when cloning a repository for the first time (or after deleting node_modules).
install:
		npm ci

# quickly and easily allow to run the game without a global installation.
brain-games:
		node bin/brain-games.js

# simulates publishing a package without actually downloading and publishing it to the NPM server.
publish:
		npm publish --dry-run