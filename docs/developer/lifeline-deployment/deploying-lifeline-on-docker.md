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

## Post-Installation:
- Register all FHIR extensions in the fhir-extension folder. Go to the `fhir-extension` folder:
```bash
cd fhir-extension
```
- Run the `post_fhir_extensions.py` script to register all extensions:
```bash
python post_fhir_extensions.py
```
The script registers to http://localhost by default. If you want to register to a different server, you can specify the server url as an argument:
```bash
python post_fhir_extensions.py HOST_URL
```
where `HOST_URL` is the url of the server you want to register to.