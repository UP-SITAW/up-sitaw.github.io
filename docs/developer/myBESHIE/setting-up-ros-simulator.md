# Setting up ROS Simulator for Lifeline Navigation Development

## 1. Introduction

This user manual outlines the steps to set up a ROS (Robot Operating System) simulator for developing Lifeline navigation using Turtlebot3. The guide covers installation of necessary components, configuration, and simulation setup.

## 2. Prerequisites

Ensure the following prerequisites are met before proceeding:

- ROS is installed on your system.
- Basic familiarity with ROS concepts and terminal usage.
- A working knowledge of ROS Navigation and SLAM.

## 3. Installing ROS Navigation and SLAM

To install ROS Navigation and SLAM packages, follow these steps:

- Open a terminal.
- Install ROS Navigation:
```bash
sudo apt-get install ros-noetic-navigation
```
- Install SLAM package:
```bash
sudo apt-get install ros-noetic-slam-gmapping
```

## 4. Installing Turtlebot3

Before installing Turtlebot3, update and upgrade your system:

```bash
sudo apt-get update
sudo apt-get upgrade
```

Then, proceed with the Turtlebot3 installation:

- Clone necessary repositories:

```bash
cd ~/catkin_ws/src/
git clone https://github.com/ROBOTIS-GIT/turtlebot3_msgs.git -b noetic-devel
git clone https://github.com/ROBOTIS-GIT/turtlebot3.git -b noetic-devel
```

- Compile packages:

```bash
cd ~/catkin_ws && catkin_make
```

## 5. Modifying Bash Configuration

Edit the `.bashrc` file to add useful aliases and environment variables:

- Open the `.bashrc` file:

```bash
cd ~
gedit .bashrc
```

- Add aliases for easy access to executables:

```
alias burger='export TURTLEBOT3_MODEL=burger'
alias waffle='export TURTLEBOT3_MODEL=waffle'
alias tb3fake='roslaunch turtlebot3_fake turtlebot3_fake.launch'
alias tb3teleop='roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch'
alias tb3='roslaunch turtlebot3_gazebo turtlebot3_empty_world.launch'
alias tb3maze='roslaunch turtlebot3_gazebo turtlebot3_world.launch'
alias tb3house='roslaunch turtlebot3_gazebo turtlebot3_house.launch'
```

- At the end of the file, add:

```
source /opt/ros/noetic/setup.bash
source /home/akoubaa/catkin_ws/devel/setup.bash
export TURTLEBOT3_MODEL=waffle
export SVGA_VGPU10=0
```

The last line will let you open Gazebo on a Virtual Machine and avoid crashing its display.

## 6. Sample Map Setup

Download the sample files located in tb3map folder. To perform experiments with the simulator, follow these steps:

- Launch Turtlebot3 Waffle in one terminal:

```
export TURTLEBOT3_MODEL=waffle
roslaunch turtlebot3_gazebo turtlebot3_house.launch
```

- Open a second terminal and load the navigation stack:

```
export TURTLEBOT3_MODEL=waffle
roslaunch turtlebot3_navigation turtlebot3_navigation.launch map_file:=/home/ros/tb3_house_map.yaml
```

Note: Replace `/home/ros/tb3_house_map.yaml` with the actual map file path.

## 8. Simulating with ROS Services

To simulate using ROS services, launch the following:

- Launch the Turtlebot3 simulator:

```bash
roslaunch turtlebot3_gazebo turtlebot3_house.launch
```

- Launch the ROS Bridge WebSocket server:

```bash
   roslaunch rosbridge_server rosbridge_websocket.launch
```

- Launch navigation with the map:

```bash
roslaunch turtlebot3_navigation turtlebot3_navigation.launch map_file:=/path/to/tb3map/tb3_house_map.yaml
```

- Run the robot pose publisher:

```bash
rosrun riotu_robot_pose_publisher riotu_robot_pose_publisher
```
