# Trial Day Dev Notes

### Lifeline Deployment Instructions


- Use the development branch for the latest updates.
- Ensure that the environment file is correctly configured. Modify the `JVB_ADVERTISE_IPS` in the environment file to reflect the IP address of your server.

### Lifeline Frontend Setup

**1. Initial Jitsi Meeting Configuration:**

   - Upon first use, Jitsi meeting won't be operational.
   - Manually access the Jitsi endpoint in a web browser to permit access due to an SSL certificate authority error.
   - Use the URL: `https://[Your_Server_IP_Address]:8443`. Note: The `https://` prefix is crucial.
   - Once access is granted, Jitsi Meet should function within Lifeline.

**2. SSL Certificate Handling:**

   - For a smoother experience, consider disabling SSL certificate authority errors in your browser.

### MyBESHIE Configuration

**1. Development Environment Setup:**

   - For running a development version of Lifeline, use `npm run start`.
   - In your environment file, set:
     - `REACT_APP_ENV=DEV`
     - `REACT_APP_LIFELINE_BACKEND_URL=[Your_Server_IP_Address]`

**2. Jitsi Integration:**

   - Copy `config.js.template` to `config.js`.
   - Set `window.REACT_APP_JITSI_URL` to `[Your_Jitsi_Endpoint_IP_Address]:[Port]`.
   - The Jitsi endpoint format should be `[Your_Jitsi_Endpoint_IP_Address]:8443` (omit `https://`).

**3. MyBESHIE Device Setup:**

   - Create a MyBESHIE device in Lifeline and configure its URL as `ws://[MyBESHIE_IP_Address]:9090`.

### Echo on Sight (EoS) Integration

**1. Jitsi URL Configuration:**

   - In the EoS device settings tab, set the Jitsi URL to the Jitsi endpoint.
   - Use the format `[Your_Server_IP_Address]:8443` (omit `https://`).
   - Save these settings using the 'Save Settings' button.

**2. Adding EoS Device to Lifeline:**

   - Ensure the device name in Lifeline matches the Jitsi Room Name set in the EoS device.

**3. Initiating EoS Meetings:**

   - To call an EoS device, navigate to 'Meeting' in Lifeline, select the EoS device, and it should redirect to an EoS Meeting GUI.

**4. Using EoS Cursor System:**

   - For accurate measurements with markers, the EoS device must be calibrated.
   - Ensure the scale number is visible in the camera feed for correct scale identification.
   - To place markers, select 'Cursor 1', click on the desired position, then select 'Cursor 2' and click to position it. Confirm by clicking 'Drop Cursor'.
   - If measurements are displayed on the device but not in Lifeline, use the 'Recalibrate' button on the device.

