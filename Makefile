# This command is useful when cloning a repository for the first time (or after deleting node_modules).
install:
		npm ci

# quickly and easily allow to run the game without a global installation.
brain-games:
		node bin/brain-games.js