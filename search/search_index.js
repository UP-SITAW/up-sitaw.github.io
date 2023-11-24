var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome to the UP SITAW Software Documentation","text":"<p>Welcome to the official documentation website for the UP SIBOL Integrated Telemonitoring Advancement Working Group (SITAW Group) software suite. Here, you'll find comprehensive documentation for all the software components that make up UP SITAW.</p>"},{"location":"index.html#our-documentation","title":"Our Documentation","text":"<p>Our documentation is designed to help you navigate through the different software modules within UP SITAW. Whether you're new to the system or an experienced user, you'll find resources here to assist you at every step. Here's what you can expect to find:</p>"},{"location":"index.html#user-manuals","title":"User Manuals","text":"<p>For detailed instructions on using specific software components, our user manuals provide step-by-step guidance. Whether you're looking to manage academic records, submit administrative requests, or collaborate on research projects, these manuals will be your go-to resource.</p>"},{"location":"index.html#faqs-and-troubleshooting","title":"FAQs and Troubleshooting","text":"<p>Got questions? Check out our frequently asked questions section, where we address common queries and concerns. Additionally, our troubleshooting guides will assist you in resolving any issues you might encounter while using UP SITAW.</p>"},{"location":"index.html#developer-documentation","title":"Developer Documentation","text":"<p>If you're a developer looking to integrate UP SITAW functionality into your own applications or contribute to its development, our developer documentation provides API references, code samples, and guidelines to get you started.</p>"},{"location":"developer/trial-day-dev-notes.html","title":"Trial Day Dev Notes","text":""},{"location":"developer/trial-day-dev-notes.html#lifeline-deployment-instructions","title":"Lifeline Deployment Instructions","text":"<ul> <li>Use the development branch for the latest updates.</li> <li>Ensure that the environment file is correctly configured. Modify the <code>JVB_ADVERTISE_IPS</code> in the environment file to reflect the IP address of your server.</li> </ul>"},{"location":"developer/trial-day-dev-notes.html#lifeline-frontend-setup","title":"Lifeline Frontend Setup","text":"<p>1. Initial Jitsi Meeting Configuration:</p> <ul> <li>Upon first use, Jitsi meeting won't be operational.</li> <li>Manually access the Jitsi endpoint in a web browser to permit access due to an SSL certificate authority error.</li> <li>Use the URL: <code>https://[Your_Server_IP_Address]:8443</code>. Note: The <code>https://</code> prefix is crucial.</li> <li>Once access is granted, Jitsi Meet should function within Lifeline.</li> </ul> <p>2. SSL Certificate Handling:</p> <ul> <li>For a smoother experience, consider disabling SSL certificate authority errors in your browser.</li> </ul>"},{"location":"developer/trial-day-dev-notes.html#mybeshie-configuration","title":"MyBESHIE Configuration","text":"<p>1. Development Environment Setup:</p> <ul> <li>For running a development version of Lifeline, use <code>npm run start</code>.</li> <li>In your environment file, set:<ul> <li><code>REACT_APP_ENV=DEV</code></li> <li><code>REACT_APP_LIFELINE_BACKEND_URL=[Your_Server_IP_Address]</code></li> </ul> </li> </ul> <p>2. Jitsi Integration:</p> <ul> <li>Copy <code>config.js.template</code> to <code>config.js</code>.</li> <li>Set <code>window.REACT_APP_JITSI_URL</code> to <code>[Your_Jitsi_Endpoint_IP_Address]:[Port]</code>.</li> <li>The Jitsi endpoint format should be <code>[Your_Jitsi_Endpoint_IP_Address]:8443</code> (omit <code>https://</code>).</li> </ul> <p>3. MyBESHIE Device Setup:</p> <ul> <li>Create a MyBESHIE device in Lifeline and configure its URL as <code>ws://[MyBESHIE_IP_Address]:9090</code>.</li> </ul>"},{"location":"developer/trial-day-dev-notes.html#echo-on-sight-eos-integration","title":"Echo on Sight (EoS) Integration","text":"<p>1. Jitsi URL Configuration:</p> <ul> <li>In the EoS device settings tab, set the Jitsi URL to the Jitsi endpoint.</li> <li>Use the format <code>[Your_Server_IP_Address]:8443</code> (omit <code>https://</code>).</li> <li>Save these settings using the 'Save Settings' button.</li> </ul> <p>2. Adding EoS Device to Lifeline:</p> <ul> <li>Ensure the device name in Lifeline matches the Jitsi Room Name set in the EoS device.</li> </ul> <p>3. Initiating EoS Meetings:</p> <ul> <li>To call an EoS device, navigate to 'Meeting' in Lifeline, select the EoS device, and it should redirect to an EoS Meeting GUI.</li> </ul> <p>4. Using EoS Cursor System:</p> <ul> <li>For accurate measurements with markers, the EoS device must be calibrated.</li> <li>Ensure the scale number is visible in the camera feed for correct scale identification.</li> <li>To place markers, select 'Cursor 1', click on the desired position, then select 'Cursor 2' and click to position it. Confirm by clicking 'Drop Cursor'.</li> <li>If measurements are displayed on the device but not in Lifeline, use the 'Recalibrate' button on the device.</li> </ul>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html","title":"Deploying Lifeline Services on Docker: A Comprehensive Guide","text":""},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#introduction","title":"Introduction","text":"<p>This user manual provides step-by-step instructions for deploying Lifeline services using Docker. By following these guidelines, you can set up and run Lifeline services efficiently and ensure a seamless deployment process. Lifeline is a critical application, and Docker simplifies its deployment, making it easier to manage dependencies and ensure consistency across different environments.</p>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#prerequisites","title":"Prerequisites","text":"<p>Before you proceed with deploying Lifeline services on Docker, ensure that you have the following prerequisites installed on your system:</p> <ol> <li> <p>Docker: Docker is a containerization platform that allows you to package and distribute applications and their dependencies as containers. Download and install Docker for your operating system from the official Docker website.</p> </li> <li> <p>Git: Git is a version control system used to track changes in the source code during software development. Install Git on your system to clone the Lifeline deployment repository and pull the latest code updates.</p> </li> <li> <p>Python: Python is required for running scripts to register FHIR extensions in Lifeline. Ensure you have Python installed on your system. You can download Python from the official Python website.</p> </li> </ol>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#deployment-steps","title":"Deployment Steps","text":"<p>Follow these detailed steps to successfully deploy Lifeline services on Docker:</p>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#1-clone-the-lifeline-deployment-repository","title":"1. Clone the Lifeline Deployment Repository","text":"<p>If you haven't already cloned the Lifeline deployment repository, follow these steps:</p> <p>Open your terminal and enter the following command:</p> <pre><code>git clone git@github.com:UP-SITAW/lifeline-deployment.git\n</code></pre>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#2-pull-latest-code-updates","title":"2. Pull Latest Code Updates","text":"<p>Before deploying, make sure you have the latest code updates from the repository. Navigate to the cloned repository's directory and run the following command:</p> <pre><code>git pull origin master\n</code></pre>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#3-create-docker-volumes","title":"3. Create Docker Volumes","text":"<p>Lifeline services require Docker volumes for MongoDB, PostgreSQL, and Hapi. If these volumes haven't been created yet, use the following commands:</p> <ul> <li>Create a Docker volume for MongoDB:</li> </ul> <pre><code>docker volume create mongo-db\n</code></pre> <ul> <li>Create a Docker volume for PostgreSQL:</li> </ul> <pre><code>docker volume create postgres-data\n</code></pre> <ul> <li>Create a Docker volume for Hapi:</li> </ul> <pre><code>docker volume create hapi-data\n</code></pre>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#4-run-lifeline-services","title":"4. Run Lifeline Services","text":"<p>Now it's time to start the Lifeline services using Docker Compose. Run the following command:</p> <pre><code>docker-compose up -d\n</code></pre> <p>This command launches the Lifeline services in detached mode, allowing them to run in the background.</p>"},{"location":"developer/lifeline-deployment/deploying-lifeline-on-docker.html#conclusion","title":"Conclusion","text":"<p>By following these steps, you've successfully deployed Lifeline services using Docker. This deployment method offers flexibility, scalability, and ease of management. Remember that Lifeline is a crucial application, and a well-executed deployment ensures its availability and reliability for users who depend on its services.</p> <p>For troubleshooting, advanced configurations, and updates, refer to the official Lifeline documentation and Docker documentation. Happy deploying!</p>"},{"location":"developer/lifeline-deployment/post-installation.html","title":"Post-Installation: Registering FHIR Extensions","text":"<p>After successfully deploying Lifeline services using Docker, the next step is to register all FHIR extensions. This process involves using the <code>post_fhir_extensions.py</code> script to ensure that the FHIR extensions are correctly integrated into the Lifeline system. FHIR extensions enhance the capabilities of the Fast Healthcare Interoperability Resources (FHIR) standard, allowing Lifeline to provide more specialized features.</p>"},{"location":"developer/lifeline-deployment/post-installation.html#prerequisites","title":"Prerequisites","text":"<p>Before you begin the FHIR extension registration process, ensure that you have the following prerequisites met:</p> <ul> <li>Python: The registration script is written in Python. Make sure you have Python installed on your system.</li> </ul>"},{"location":"developer/lifeline-deployment/post-installation.html#registration-steps","title":"Registration Steps","text":"<p>Follow these detailed steps to register FHIR extensions in the Lifeline system:</p>"},{"location":"developer/lifeline-deployment/post-installation.html#1-navigate-to-the-fhir-extensions-folder","title":"1. Navigate to the FHIR Extensions Folder","text":"<p>Open your terminal and navigate to the <code>fhir-extension</code> folder using the following command:</p> <pre><code>cd fhir-extension\n</code></pre>"},{"location":"developer/lifeline-deployment/post-installation.html#2-run-the-registration-script","title":"2. Run the Registration Script","text":"<p>Execute the <code>post_fhir_extensions.py</code> script to register all the FHIR extensions. Use the following command:</p> <pre><code>python post_fhir_extensions.py\n</code></pre> <p>By default, the script registers the extensions to <code>http://localhost</code>.</p>"},{"location":"developer/lifeline-deployment/post-installation.html#3-register-to-a-different-server-optional","title":"3. Register to a Different Server (Optional)","text":"<p>If you want to register the FHIR extensions to a different server, you can provide the server URL as an argument to the script. Use the following command format:</p> <pre><code>python post_fhir_extensions.py HOST_URL\n</code></pre> <p>Replace <code>HOST_URL</code> with the actual URL of the server you want to register the extensions to.</p>"},{"location":"developer/lifeline-deployment/post-installation.html#conclusion","title":"Conclusion","text":"<p>Registering FHIR extensions is a crucial step in post-installation to ensure that Lifeline services can fully leverage the capabilities of the FHIR standard. The <code>post_fhir_extensions.py</code> script streamlines this process and allows for integration with different servers as needed.</p> <p>Remember that Lifeline's effectiveness relies on the correct registration and utilization of FHIR extensions. For any troubleshooting, advanced configuration options, or additional information, refer to the official Lifeline documentation.</p>"},{"location":"developer/lifeline-web-app/index.html","title":"Lifeline v2 Frontend","text":"<p>This guide will help you get started with the application, provide details about dependencies, and explain the folder structure. If you encounter any issues, feel free to refer to this manual for assistance.</p>"},{"location":"developer/lifeline-web-app/index.html#getting-started","title":"Getting Started","text":"<p>Before you begin, please ensure you have Node.js 14.x and npm 6+ installed on your system. Follow these steps to set up and run the Lifeline v2 Frontend:</p> <ul> <li>Install project dependencies:</li> </ul> <pre><code>npm install --legacy-peer-deps\n</code></pre> <p>Note: The <code>--legacy-peer-deps</code> flag is used temporarily to resolve dependency errors.</p> <ul> <li>Start the project:</li> </ul> <pre><code>npm run start\n</code></pre> <ul> <li>Build the project:</li> </ul> <pre><code>npm run build\n</code></pre> <p>Important Notes:</p> <ul> <li> <p>If you encounter dependency errors when using <code>yarn</code>, it is recommended to stick with <code>npm</code> for now.</p> </li> <li> <p>Create an <code>.env</code> file at the project's root folder. You can use the provided <code>sample.env</code> file as a template. Specify the following environment variables:</p> </li> </ul> <pre><code>PORT: Port where the app will run.\nREACT_APP_FHIR_SERVER_URL: FHIR endpoint of the HAPI FHIR Server.\nREACT_APP_DOMAIN: Website domain of SITAW, used for SITAW specific FHIR resource/data.\nREACT_APP_LIFELINE_BACKEND_URL: Lifeline Backend endpoint.\nREACT_APP_PUSHER_EVENT: Pusher observation added event.\nREACT_APP_JISTI_URL: URL of the Jitsi server.\nREACT_APP_CMD_VEL_TOPIC: ROS topic for cmd_vel.\nREACT_APP_ODOM_TOPIC: ROS topic for odom.\nREACT_APP_POSE_TOPIC: ROS topic for pose.\n\n</code></pre>"},{"location":"developer/lifeline-web-app/index.html#dependencies","title":"Dependencies","text":"<p>The Lifeline v2 Frontend is built on the following technologies:</p> <ul> <li> <p>React: A powerful JavaScript library for building user interfaces using reusable UI components.</p> </li> <li> <p>Redux/Redux Toolkit: Redux is a JavaScript library for managing application state. Redux Toolkit provides a standardized way to write Redux logic.</p> </li> <li> <p>Material UI/Minimalist UI: Material-UI is a library that offers a collection of components to create appealing user interfaces. Minimalist UI is an open-source React Admin Dashboard built with Material-UI components.</p> </li> </ul>"},{"location":"developer/lifeline-web-app/index.html#folder-structure","title":"Folder Structure","text":"<p>The project's folder structure is organized as follows:</p> <ul> <li> <p>public/: Contains publicly available files like images and HTML pages.</p> </li> <li> <p>src/: Contains the main source code, organized into subfolders:</p> <ul> <li> <p>_mock/: Contains mock data used for development purposes.</p> </li> <li> <p>app/: Holds the code for the Redux store configuration.</p> </li> <li> <p>components/: Contains reusable component code.</p> </li> <li> <p>features/: Contains Redux slice code. Each resource has its own separate folder/file.</p> </li> <li> <p>hooks/: Contains code for custom hooks, including the responsive layout hook.</p> </li> <li> <p>layouts/: Contains code for page layout structures.</p> </li> <li> <p>pages/: Contains code for different pages, grouped by resources.</p> </li> <li> <p>sections/: Contains code for reusable page sections.</p> </li> <li> <p>theme/: Holds code for theme overrides to Material UI as provided by Minimalist UI.</p> </li> <li> <p>utils/: Contains utility code used for data formatting and manipulation.</p> </li> </ul> </li> </ul>"},{"location":"developer/lifeline-web-app/index.html#conclusion","title":"Conclusion","text":"<p>Congratulations! You've now been introduced to Lifeline v2 Frontend. By following this developer manual, you should have a better understanding of how to set up the project, the technologies it relies on, and its folder structure. Feel free to explore, make modifications, and enjoy using Lifeline v2 Frontend for your needs. If you require further assistance, don't hesitate to refer back to this manual.</p>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html","title":"Creating a Desktop Shortcut for Lifeline Jitsi Meetings on myBESHIE","text":"<p>Enhance your user experience by creating a desktop shortcut for Lifeline Jitsi Meetings on myBESHIE. This will allow quick and easy access to your meetings with minimal effort. Follow these steps to set up the shortcut:</p>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#shortcut-creation-steps","title":"Shortcut Creation Steps","text":""},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#1-initiate-a-jitsi-meeting-on-mybeshie-through-lifeline","title":"1. Initiate a Jitsi Meeting on myBESHIE through Lifeline","text":"<p>Begin by initiating a Jitsi Meeting on myBESHIE using Lifeline:</p> <ol> <li>Open the Lifeline application.</li> <li>Navigate to the Jitsi Meetings section.</li> <li>Start a meeting with myBESHIE as the participant by initiating a call from the Meeting module.</li> </ol>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#2-identify-the-unique-jitsi-meeting-url","title":"2. Identify the Unique Jitsi Meeting URL","text":"<p>Once the meeting is established, follow these steps:</p> <ol> <li>Within the meeting interface, locate and click on the \"Share\" button.</li> <li>This will display the unique Jitsi Meeting URL for myBESHIE.</li> <li>Copy or note down this URL, as you'll need it for creating the shortcut.</li> </ol>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#3-navigate-to-desktop-directory-on-mybeshie","title":"3. Navigate to Desktop Directory on myBESHIE","text":"<p>On your myBESHIE device, open a terminal:</p> <ol> <li>Locate the terminal application, usually found in the applications menu or by searching for \"Terminal.\"</li> <li>Navigate to your desktop directory using the following command:</li> </ol> <pre><code>cd ~/Desktop/\n</code></pre>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#4-create-a-new-shortcut-file","title":"4. Create a New Shortcut File","text":"<p>Create a new file for the desktop shortcut using a text editor like <code>nano</code> or <code>gedit</code>. For example, using <code>nano</code>:</p> <pre><code>nano Lifeline_Meeting.desktop\n</code></pre>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#5-paste-the-shortcut-content","title":"5. Paste the Shortcut Content","text":"<p>In the text editor, paste the following content for the shortcut file:</p> <pre><code>[Desktop Entry]\nVersion=1.0\nName=Lifeline Meeting\nComment=Open Jitsi Meeting for myBESHIE\nExec=firefox &lt;ip-address or URL&gt;\nIcon=~/Documents/lifeline_meeting.png\nTerminal=false\nType=Application\nCategories=Network;WebBrowser;\n</code></pre> <p>Replace <code>&lt;ip-address or URL&gt;</code> with the unique Jitsi Meeting URL you obtained earlier.</p>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#6-specify-a-custom-icon-optional","title":"6. Specify a Custom Icon (Optional)","text":"<p>If you have a custom icon for the shortcut, include the <code>Icon</code> line and specify the icon's location. Make sure the lifeline meeting icon is copied to the \"Documents\" directory as indicated in the <code>Icon</code> line.</p>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#7-save-and-close-the-file","title":"7. Save and Close the File","text":"<p>Save the file and close the text editor.</p>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#8-make-the-file-executable","title":"8. Make the File Executable","text":"<p>Make the shortcut file executable by running the following command:</p> <pre><code>chmod +x Lifeline_Meeting.desktop\n</code></pre>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#9-adjust-file-permissions","title":"9. Adjust File Permissions","text":"<ol> <li>Right-click on the application file (Lifeline_Meeting.desktop) on your desktop.</li> <li>Select \"Properties\" from the context menu.</li> <li>In the properties dialog, navigate to the \"Permissions\" tab.</li> <li>Look for the section titled \"Execute\" or \"Allow executing file as a program.\"</li> <li>Enable the option that allows the file to be executed. This is typically done by checking a checkbox labeled \"Allow executing file as program\" or similar.</li> <li>Click \"Close\" or \"OK\" to save the changes and close the properties dialog.</li> </ol>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#10-test-the-shortcut","title":"10. Test the Shortcut","text":"<p>You should now see the Lifeline Meeting shortcut on your desktop. Double-clicking it should launch Firefox and automatically redirect to the unique Jitsi Meeting URL for myBESHIE.</p>"},{"location":"developer/myBESHIE/creating-desktop-shortcut.html#conclusion","title":"Conclusion","text":"<p>Creating a desktop shortcut for Lifeline Jitsi Meetings on myBESHIE streamlines the process of accessing your meetings. This convenient shortcut provides quick and easy access to your Jitsi Meetings directly from your desktop environment. If you encounter any issues or have further questions, refer to the official Lifeline documentation or seek assistance from your system administrator. </p>"},{"location":"developer/myBESHIE/installing-lifeline-dependencies.html","title":"Installing Dependencies Required by Lifeline","text":"<p>This comprehensive guide walks you through the process of installing and configuring the ROS Bridge and the Customized Robot Pose Publisher. These dependencies are crucial for Lifeline's functionality. Follow these steps attentively to ensure a successful installation process.</p>"},{"location":"developer/myBESHIE/installing-lifeline-dependencies.html#installing-ros-bridge","title":"Installing ROS Bridge","text":"<p>The ROS Bridge acts as a vital communication link between ROS (Robot Operating System) and external applications. Installing it is a key step in enabling seamless interaction. Follow these steps:</p> <ul> <li> <p>Open a terminal window.</p> </li> <li> <p>Execute the following command to install the ROS Bridge package:</p> </li> </ul> <pre><code>sudo apt-get install ros-noetic-rosbridge-server\n</code></pre>"},{"location":"developer/myBESHIE/installing-lifeline-dependencies.html#installing-customized-robot-pose-publisher","title":"Installing Customized Robot Pose Publisher","text":"<p>The Customized Robot Pose Publisher facilitates the publication of essential robot pose information. Here's how you can set it up:</p> <ul> <li> <p>Copy the <code>riotu_robot_pose_publisher</code> folder to the <code>src</code> directory of your Catkin workspace (<code>~/catkin_ws/src</code>).</p> </li> <li> <p>Open a terminal and navigate to your Catkin workspace:</p> </li> </ul> <pre><code>cd ~/catkin_ws\n</code></pre> <ul> <li>Compile the workspace using the <code>catkin_make</code> command:</li> </ul> <pre><code>catkin_make\n</code></pre> <p>This compilation step is crucial to ensure that the Customized Robot Pose Publisher becomes an integral part of your ROS environment.</p>"},{"location":"developer/myBESHIE/installing-lifeline-dependencies.html#conclusion","title":"Conclusion","text":"<p>Following these instructions meticulously will ensure that the necessary dependencies for Lifeline are successfully installed and configured. The ROS Bridge and Customized Robot Pose Publisher are essential components that contribute to Lifeline's functionality and its integration with ROS.</p> <p>For any further questions, troubleshooting, or additional information, refer to the official ROS documentation.</p>"},{"location":"developer/myBESHIE/running-required-services-by-lifeline.html","title":"Running Required Services for Lifeline","text":"<p>This guide provides concise instructions for running two crucial components: the ROS Bridge and the customized Robot Pose Publisher. Ensuring these services are up and running is essential for the proper functioning of Lifeline.</p>"},{"location":"developer/myBESHIE/running-required-services-by-lifeline.html#running-ros-bridge","title":"Running ROS Bridge","text":"<p>The ROS Bridge plays a pivotal role in establishing WebSocket communication, enabling seamless data exchange between ROS and external applications. Here's how you can start it:</p> <ul> <li> <p>Open a terminal window.</p> </li> <li> <p>Execute the following command to launch the ROS Bridge server:</p> </li> </ul> <pre><code>roslaunch rosbridge_server rosbridge_websocket.launch\n</code></pre> <p>This command initiates the ROS Bridge, laying the foundation for efficient communication.</p>"},{"location":"developer/myBESHIE/running-required-services-by-lifeline.html#running-customized-robot-pose-publisher","title":"Running Customized Robot Pose Publisher","text":"<p>The Customized Robot Pose Publisher is responsible for disseminating accurate robot pose data. Follow these steps to run it:</p> <ul> <li> <p>Open a terminal window.</p> </li> <li> <p>Execute the following command to start the Robot Pose Publisher node:</p> </li> </ul> <pre><code>rosrun riotu_robot_pose_publisher riotu_robot_pose_publisher\n</code></pre> <p>Running this command activates the Robot Pose Publisher, ensuring that the essential pose information is being appropriately published.</p>"},{"location":"developer/myBESHIE/running-required-services-by-lifeline.html#conclusion","title":"Conclusion","text":"<p>Executing these commands diligently is essential to bring Lifeline's core services to life. The ROS Bridge and Customized Robot Pose Publisher work in tandem to enable communication and data sharing within the Lifeline ecosystem.</p> <p>For any queries, troubleshooting, or further information, consult the official ROS documentation.</p>"},{"location":"developer/myBESHIE/setting-up-ros-simulator.html","title":"Setting up ROS Simulator for Lifeline Navigation Development","text":""},{"location":"developer/myBESHIE/setting-up-ros-simulator.html#1-introduction","title":"1. Introduction","text":"<p>This user manual outlines the steps to set up a ROS (Robot Operating System) simulator for developing Lifeline navigation using Turtlebot3. The guide covers installation of necessary components, configuration, and simulation setup.</p>"},{"location":"developer/myBESHIE/setting-up-ros-simulator.html#2-prerequisites","title":"2. Prerequisites","text":"<p>Ensure the following prerequisites are met before proceeding:</p> <ul> <li>ROS is installed on your system.</li> <li>Basic familiarity with ROS concepts and terminal usage.</li> <li>A working knowledge of ROS Navigation and SLAM.</li> </ul>"},{"location":"developer/myBESHIE/setting-up-ros-simulator.html#3-installing-ros-navigation-and-slam","title":"3. Installing ROS Navigation and SLAM","text":"<p>To install ROS Navigation and SLAM packages, follow these steps:</p> <ul> <li>Open a terminal.</li> <li>Install ROS Navigation:</li> </ul> <pre><code>sudo apt-get install ros-noetic-navigation\n</code></pre> <ul> <li>Install SLAM package:</li> </ul> <pre><code>sudo apt-get install ros-noetic-slam-gmapping\n</code></pre>"},{"location":"developer/myBESHIE/setting-up-ros-simulator.html#4-installing-turtlebot3","title":"4. Installing Turtlebot3","text":"<p>Before installing Turtlebot3, update and upgrade your system:</p> <pre><code>sudo apt-get update\nsudo apt-get upgrade\n</code></pre> <p>Then, proceed with the Turtlebot3 installation:</p> <ul> <li>Clone necessary repositories:</li> </ul> <pre><code>cd ~/catkin_ws/src/\ngit clone https://github.com/ROBOTIS-GIT/turtlebot3_msgs.git -b noetic-devel\ngit clone https://github.com/ROBOTIS-GIT/turtlebot3.git -b noetic-devel\n</code></pre> <ul> <li>Compile packages:</li> </ul> <pre><code>cd ~/catkin_ws &amp;&amp; catkin_make\n</code></pre>"},{"location":"developer/myBESHIE/setting-up-ros-simulator.html#5-modifying-bash-configuration","title":"5. Modifying Bash Configuration","text":"<p>Edit the <code>.bashrc</code> file to add useful aliases and environment variables:</p> <ul> <li>Open the <code>.bashrc</code> file:</li> </ul> <pre><code>cd ~\ngedit .bashrc\n</code></pre> <ul> <li>Add aliases for easy access to executables:</li> </ul> <pre><code>alias burger='export TURTLEBOT3_MODEL=burger'\nalias waffle='export TURTLEBOT3_MODEL=waffle'\nalias tb3fake='roslaunch turtlebot3_fake turtlebot3_fake.launch'\nalias tb3teleop='roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch'\nalias tb3='roslaunch turtlebot3_gazebo turtlebot3_empty_world.launch'\nalias tb3maze='roslaunch turtlebot3_gazebo turtlebot3_world.launch'\nalias tb3house='roslaunch turtlebot3_gazebo turtlebot3_house.launch'\n</code></pre> <ul> <li>At the end of the file, add:</li> </ul> <pre><code>source /opt/ros/noetic/setup.bash\nsource /home/akoubaa/catkin_ws/devel/setup.bash\nexport TURTLEBOT3_MODEL=waffle\nexport SVGA_VGPU10=0\n</code></pre> <p>The last line will let you open Gazebo on a Virtual Machine and avoid crashing its display.</p>"},{"location":"developer/myBESHIE/setting-up-ros-simulator.html#6-sample-map-setup","title":"6. Sample Map Setup","text":"<p>Download the sample files located in tb3map folder. To perform experiments with the simulator, follow these steps:</p> <ul> <li>Launch Turtlebot3 Waffle in one terminal:</li> </ul> <pre><code>export TURTLEBOT3_MODEL=waffle\nroslaunch turtlebot3_gazebo turtlebot3_house.launch\n</code></pre> <ul> <li>Open a second terminal and load the navigation stack:</li> </ul> <pre><code>export TURTLEBOT3_MODEL=waffle\nroslaunch turtlebot3_navigation turtlebot3_navigation.launch map_file:=/home/ros/tb3_house_map.yaml\n</code></pre> <p>Note: Replace <code>/home/ros/tb3_house_map.yaml</code> with the actual map file path.</p>"},{"location":"developer/myBESHIE/setting-up-ros-simulator.html#8-simulating-with-ros-services","title":"8. Simulating with ROS Services","text":"<p>To simulate using ROS services, launch the following:</p> <ul> <li>Launch the Turtlebot3 simulator:</li> </ul> <pre><code>roslaunch turtlebot3_gazebo turtlebot3_house.launch\n</code></pre> <ul> <li>Launch the ROS Bridge WebSocket server:</li> </ul> <pre><code>   roslaunch rosbridge_server rosbridge_websocket.launch\n</code></pre> <ul> <li>Launch navigation with the map:</li> </ul> <pre><code>roslaunch turtlebot3_navigation turtlebot3_navigation.launch map_file:=/path/to/tb3map/tb3_house_map.yaml\n</code></pre> <ul> <li>Run the robot pose publisher:</li> </ul> <pre><code>rosrun riotu_robot_pose_publisher riotu_robot_pose_publisher\n</code></pre>"},{"location":"faq/lifeline/jitsi-meeting-not-showing.html","title":"Jitsi Meeting Not Showing in Lifeline","text":"<p>If you're experiencing issues with Jitsi Meeting not being visible in Lifeline, follow these steps to troubleshoot the problem and ensure seamless integration.</p>"},{"location":"faq/lifeline/jitsi-meeting-not-showing.html#problem-resolution-steps","title":"Problem Resolution Steps","text":""},{"location":"faq/lifeline/jitsi-meeting-not-showing.html#1-identify-the-ip-address-or-url-of-jitsi-server","title":"1. Identify the IP Address or URL of Jitsi Server","text":"<p>Before attempting any solutions, you need to identify the IP address or URL of the server where the Jitsi Meeting is deployed. Reach out to your system administrator or refer to relevant documentation to obtain this information.</p>"},{"location":"faq/lifeline/jitsi-meeting-not-showing.html#2-access-jitsi-meeting-directly-in-the-browser","title":"2. Access Jitsi Meeting Directly in the Browser","text":"<p>To troubleshoot the issue, follow these steps to access the Jitsi Meeting directly in your browser:</p> <ol> <li>In the same browser where you access Lifeline, enter the URL or IP address of the Jitsi Meeting server. The format should resemble: <code>https://&lt;ip-address&gt;:8443</code>. Ensure you include the <code>https://</code> prefix.</li> </ol>"},{"location":"faq/lifeline/jitsi-meeting-not-showing.html#3-handle-privacy-error","title":"3. Handle Privacy Error","text":"<p>When accessing the Jitsi Meeting server directly, you might encounter a Privacy Error or a similar warning indicating an insecure connection. To proceed, follow these steps:</p> <ol> <li>On the Privacy Error page, look for an \"Advanced\" option or a similar link that allows you to proceed despite the warning.</li> <li>Click on this option to proceed to the Jitsi Meeting website despite the security warning.</li> </ol>"},{"location":"faq/lifeline/jitsi-meeting-not-showing.html#4-reload-lifeline","title":"4. Reload Lifeline","text":"<p>After accessing the Jitsi Meeting server directly in your browser, follow these steps to ensure the Jitsi Meeting appears in Lifeline:</p> <ol> <li>Return to the Lifeline interface.</li> <li>Reload the Lifeline page in your browser. This can typically be done by pressing <code>Ctrl + R</code> (Windows/Linux) or <code>Command + R</code> (Mac).</li> </ol>"},{"location":"faq/lifeline/jitsi-meeting-not-showing.html#5-verify-jitsi-meeting-visibility","title":"5. Verify Jitsi Meeting Visibility","text":"<p>After reloading Lifeline, check whether the Jitsi Meeting is now visible and accessible:</p> <ol> <li>Look for the Jitsi Meeting section within Lifeline's interface.</li> <li>Verify that the Jitsi Meeting is now accessible and can be initiated from within Lifeline.</li> </ol>"},{"location":"faq/lifeline/jitsi-meeting-not-showing.html#conclusion","title":"Conclusion","text":"<p>By following these steps, you should be able to resolve the issue of Jitsi Meeting not appearing in the Lifeline interface. Troubleshooting these problems ensures a smooth user experience and maximizes the functionality of Lifeline's integrated services.</p> <p>If you encounter any further issues or require additional assistance, consider reaching out to your system administrator or referring to the official Lifeline documentation. Jitsi Meeting is an integral part of Lifeline, enhancing communication and collaboration among users.</p>"}]}