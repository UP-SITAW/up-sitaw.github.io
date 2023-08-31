
# Lifeline v2 Frontend

## Getting started

- Recommended `node js 14.x` and `npm 6+`

- Install dependencies: `npm install --legacy-peer-deps`

- (`--legacy-peer-deps` temporarily resolves dependency errors)

- Start the project: `npm run start`

NOTE: Dependency errors encountered when `yarn` is used.

  

Create an `.env` file at the project root folder and specify the port number. You may rename `sample.env` to `.env`.

    PORT - Port were app will run
    
    REACT_APP_FHIR_SERVER_URL - FHIR endpoint of HAPI FHIR Server
    
    REACT_APP_DOMAIN - Website domain of the SITAW, to be used on SITAW specific FHIR resource/data (sample for now).

    REACT_APP_LIFELINE_BACKEND_URL - Lifeline Backend endpoint

    REACT_APP_PUSHER_EVENT - Pusher observation added event

    REACT_APP_JISTI_URL - URL of Jitsi server

    REACT_APP_CMD_VEL_TOPIC - ROS topic for cmd_vel

    REACT_APP_ODOM_TOPIC - ROS topic for odom

    REACT_APP_POSE_TOPIC - ROS topic for pose


## Dependencies

### React

React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

### Redux/Redux Toolkit

Redux is an open-source JavaScript library for managing and centralizing application state. The **Redux Toolkit** package is intended to be the standard way to write [Redux](https://redux.js.org/) logic.

### Material UI/ Minimalist UI
Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications. Minimal UI is an open-source, React Admin Dashboard made with Material-UI components and React.
  
## Folders:

### public/
Contains publicly available files like images and html pages.
 
### src/
Contains all these following folders:

#### _mock/
Contains mock data for dev purposes.

#### app/
Contains code for Redux store config.

####  components/
Contains codes for reusable components.
  
#### features/
Contains codes for Redux slices. Each resource is in a separate folder/file.
  
#### hooks/
Contains code for custom hooks. Hook used for reponsive layouting is here.

#### layouts/
Contains codes for page layouts. 

####  pages/
Contains codes for pages. Pages are grouped into resources.
  
#### sections/
Contains codes for reusable sections.
 
#### theme/
Contains codes for theme overrides to Material UI by Minimal UI.
 
#### utils/
Contains codes for utilities used to format data.