cli:
	@docker run --interactive --rm --tty --volume ./:/app --workdir /app node:18-alpine sh

install:
	@docker run --interactive --rm --tty --user 1000:1000 --volume ./:/app --workdir /app node:18-alpine npm install

run:
	@docker run --rm --volume ./:/app --workdir /app node:18-alpine ./src/program.js

test:
	@docker run --interactive --rm --tty --volume ./:/app --workdir /app node:18-alpine npm run test

watch:
	@docker run --interactive --rm --tty --volume ./:/app --workdir /app node:18-alpine npm run test -- --watchAll
