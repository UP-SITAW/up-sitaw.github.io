# Post-Installation
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