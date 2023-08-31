# Running Required Services for Lifeline

This guide provides concise instructions for running two crucial components: the ROS Bridge and the customized Robot Pose Publisher. Ensuring these services are up and running is essential for the proper functioning of Lifeline.

## Running ROS Bridge

The ROS Bridge plays a pivotal role in establishing WebSocket communication, enabling seamless data exchange between ROS and external applications. Here's how you can start it:

- Open a terminal window.

- Execute the following command to launch the ROS Bridge server:

```bash
roslaunch rosbridge_server rosbridge_websocket.launch
```

This command initiates the ROS Bridge, laying the foundation for efficient communication.

## Running Customized Robot Pose Publisher

The Customized Robot Pose Publisher is responsible for disseminating accurate robot pose data. Follow these steps to run it:

- Open a terminal window.

- Execute the following command to start the Robot Pose Publisher node:

```bash
rosrun riotu_robot_pose_publisher riotu_robot_pose_publisher
```

Running this command activates the Robot Pose Publisher, ensuring that the essential pose information is being appropriately published.

## Conclusion

Executing these commands diligently is essential to bring Lifeline's core services to life. The ROS Bridge and Customized Robot Pose Publisher work in tandem to enable communication and data sharing within the Lifeline ecosystem.

For any queries, troubleshooting, or further information, consult the official ROS documentation.