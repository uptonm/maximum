migration-console:
	@echo "Starting local migration console"
	@echo "Migrations will be applied to the {DEV} environment"
	@hasura console \
		--project ./services/hasura \
		--envfile .env.development

start:
	@echo "Starting local development environment"
	@yarn --cwd ./client dev
