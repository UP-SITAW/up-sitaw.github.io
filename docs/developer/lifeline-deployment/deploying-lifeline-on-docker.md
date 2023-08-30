# Deploying Lifeline services on Docker

## Prerequisites
- Install Docker
- Install Git

- Clone the lifeline-deployment repository if not yet cloned:
```bash
git clone git@github.com:UP-SITAW/lifeline-deployment.git
```
- Pull latest code of this repository
```bash
git pull origin master
```
- Create a docker volumes for mongo db, postgrs, and hapi if not yet created:
```bash
docker volume create mongo-db
docker volume create postgres-data
docker volume create hapi-data
```

- Run the Lifeline service using this command:
```bash
docker compose up -d
```

Post-Installation:
- Register all StructureDefinitions location in the `fhir_structure_definitions` folder