.PHONY: build deploy

build:
	npm run build

deploy: build
	npx gh-pages -d dist -t 
