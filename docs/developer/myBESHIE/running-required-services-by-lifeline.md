# Running Required Services by Lifeline

This guide provides clear instructions on running the ROS Bridge and the customized Robot Pose Publisher. 

##  Running ROS Bridge

The ROS Bridge is essential for establishing WebSocket communication. Follow these steps to launch it:

1. Open a terminal window.

2. Execute the following command to start the ROS Bridge server:

```bash
roslaunch rosbridge_server rosbridge_websocket.launch
```

## Running Customized Robot Pose Publisher

The Customized Robot Pose Publisher allows you to publish accurate robot pose data. Here's how you can run it:

1. Open a terminal window.

2. Execute the following command to run the Robot Pose Publisher node:

```bash
rosrun riotu_robot_pose_publisher riotu_robot_pose_publisher
```
