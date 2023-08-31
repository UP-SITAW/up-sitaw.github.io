# Lifeline v2 Frontend

This guide will help you get started with the application, provide details about dependencies, and explain the folder structure. If you encounter any issues, feel free to refer to this manual for assistance.

## Getting Started

Before you begin, please ensure you have **Node.js 14.x** and **npm 6+** installed on your system. Follow these steps to set up and run the Lifeline v2 Frontend:

- Install project dependencies:

```bash
npm install --legacy-peer-deps
```

   Note: The `--legacy-peer-deps` flag is used temporarily to resolve dependency errors.

- Start the project:
```bash
npm run start
```

- Build the project:
```bash
npm run build
```

**Important Notes:**

- If you encounter dependency errors when using `yarn`, it is recommended to stick with `npm` for now.

3. Create an `.env` file at the project's root folder. You can use the provided `sample.env` file as a template. Specify the following environment variables:

```
PORT: Port where the app will run.
REACT_APP_FHIR_SERVER_URL: FHIR endpoint of the HAPI FHIR Server.
REACT_APP_DOMAIN: Website domain of SITAW, used for SITAW specific FHIR resource/data.
REACT_APP_LIFELINE_BACKEND_URL: Lifeline Backend endpoint.
REACT_APP_PUSHER_EVENT: Pusher observation added event.
REACT_APP_JISTI_URL: URL of the Jitsi server.
REACT_APP_CMD_VEL_TOPIC: ROS topic for cmd_vel.
REACT_APP_ODOM_TOPIC: ROS topic for odom.
REACT_APP_POSE_TOPIC: ROS topic for pose.

```

## Dependencies

The Lifeline v2 Frontend is built on the following technologies:

- **React**: A powerful JavaScript library for building user interfaces using reusable UI components.

- **Redux/Redux Toolkit**: Redux is a JavaScript library for managing application state. Redux Toolkit provides a standardized way to write Redux logic.

- **Material UI/Minimalist UI**: Material-UI is a library that offers a collection of components to create appealing user interfaces. Minimalist UI is an open-source React Admin Dashboard built with Material-UI components.

## Folder Structure

The project's folder structure is organized as follows:

- **public/**: Contains publicly available files like images and HTML pages.

- **src/**: Contains the main source code, organized into subfolders:

    - **\_mock/**: Contains mock data used for development purposes.

    - **app/**: Holds the code for the Redux store configuration.

    - **components/**: Contains reusable component code.

    - **features/**: Contains Redux slice code. Each resource has its own separate folder/file.

    - **hooks/**: Contains code for custom hooks, including the responsive layout hook.

    - **layouts/**: Contains code for page layout structures.

    - **pages/**: Contains code for different pages, grouped by resources.

    - **sections/**: Contains code for reusable page sections.

    - **theme/**: Holds code for theme overrides to Material UI as provided by Minimalist UI.

    - **utils/**: Contains utility code used for data formatting and manipulation.

## Conclusion

Congratulations! You've now been introduced to Lifeline v2 Frontend. By following this developer manual, you should have a better understanding of how to set up the project, the technologies it relies on, and its folder structure. Feel free to explore, make modifications, and enjoy using Lifeline v2 Frontend for your needs. If you require further assistance, don't hesitate to refer back to this manual.
