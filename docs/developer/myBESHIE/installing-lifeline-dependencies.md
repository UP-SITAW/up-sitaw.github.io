# Installing dependencies required by Lifeline
This guide provides clear instructions on installing and setting up the ROS Bridge and the customized Robot Pose Publisher. Follow these steps carefully to ensure a smooth installation process.

##  Installing ROS Bridge

The ROS Bridge enables seamless communication between ROS and external applications. To install it, follow these steps:

1. Open a terminal window.

2. Enter the following command to install the ROS Bridge package:
   
```
sudo apt-get install ros-noetic-rosbridge-server
```

## Installing Customized Robot Pose Publisher

The Customized Robot Pose Publisher is designed to publish robot pose information. Here's how you can install it:

1. Copy the `riotu_robot_pose_publisher` folder to the `src` directory of your Catkin workspace (`~/catkin_ws/src`).

2. Open a terminal and navigate to your Catkin workspace:

```bash
 cd ~/catkin_ws
```

3. Compile the workspace using the `catkin_make` command:

```bash
catkin_make
```