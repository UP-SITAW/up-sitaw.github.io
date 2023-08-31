# Post-Installation: Registering FHIR Extensions

After successfully deploying Lifeline services using Docker, the next step is to register all FHIR extensions. This process involves using the `post_fhir_extensions.py` script to ensure that the FHIR extensions are correctly integrated into the Lifeline system. FHIR extensions enhance the capabilities of the Fast Healthcare Interoperability Resources (FHIR) standard, allowing Lifeline to provide more specialized features.

## Prerequisites

Before you begin the FHIR extension registration process, ensure that you have the following prerequisites met:

- **Python**: The registration script is written in Python. Make sure you have Python installed on your system.

## Registration Steps

Follow these detailed steps to register FHIR extensions in the Lifeline system:

### 1. Navigate to the FHIR Extensions Folder

Open your terminal and navigate to the `fhir-extension` folder using the following command:

```bash
cd fhir-extension
```

### 2. Run the Registration Script

Execute the `post_fhir_extensions.py` script to register all the FHIR extensions. Use the following command:

```bash
python post_fhir_extensions.py
```

By default, the script registers the extensions to `http://localhost`.

### 3. Register to a Different Server (Optional)

If you want to register the FHIR extensions to a different server, you can provide the server URL as an argument to the script. Use the following command format:

```bash
python post_fhir_extensions.py HOST_URL
```

Replace `HOST_URL` with the actual URL of the server you want to register the extensions to.

## Conclusion

Registering FHIR extensions is a crucial step in post-installation to ensure that Lifeline services can fully leverage the capabilities of the FHIR standard. The `post_fhir_extensions.py` script streamlines this process and allows for integration with different servers as needed.

Remember that Lifeline's effectiveness relies on the correct registration and utilization of FHIR extensions. For any troubleshooting, advanced configuration options, or additional information, refer to the official Lifeline documentation.
