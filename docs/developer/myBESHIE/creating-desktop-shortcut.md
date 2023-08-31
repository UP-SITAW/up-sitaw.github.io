# Creating a Desktop Shortcut for Lifeline Jitsi Meetings on myBESHIE

Enhance your user experience by creating a desktop shortcut for Lifeline Jitsi Meetings on myBESHIE. This will allow quick and easy access to your meetings with minimal effort. Follow these steps to set up the shortcut:

## Shortcut Creation Steps

### 1. Initiate a Jitsi Meeting on myBESHIE through Lifeline

Begin by initiating a Jitsi Meeting on myBESHIE using Lifeline:

1. Open the Lifeline application.
2. Navigate to the Jitsi Meetings section.
3. Start a meeting with myBESHIE as the participant by initiating a call from the Meeting module.

### 2. Identify the Unique Jitsi Meeting URL

Once the meeting is established, follow these steps:

1. Within the meeting interface, locate and click on the "Share" button.
2. This will display the unique Jitsi Meeting URL for myBESHIE.
3. Copy or note down this URL, as you'll need it for creating the shortcut.

### 3. Navigate to Desktop Directory on myBESHIE

On your myBESHIE device, open a terminal:

1. Locate the terminal application, usually found in the applications menu or by searching for "Terminal."
2. Navigate to your desktop directory using the following command:

```bash
cd ~/Desktop/
```

### 4. Create a New Shortcut File

Create a new file for the desktop shortcut using a text editor like `nano` or `gedit`. For example, using `nano`:

```bash
nano Lifeline_Meeting.desktop
```

### 5. Paste the Shortcut Content

In the text editor, paste the following content for the shortcut file:

```plaintext
[Desktop Entry]
Version=1.0
Name=Lifeline Meeting
Comment=Open Jitsi Meeting for myBESHIE
Exec=firefox <ip-address or URL>
Icon=~/Documents/lifeline_meeting.png
Terminal=false
Type=Application
Categories=Network;WebBrowser;
```

Replace `<ip-address or URL>` with the unique Jitsi Meeting URL you obtained earlier.

### 6. Specify a Custom Icon (Optional)

If you have a custom icon for the shortcut, include the `Icon` line and specify the icon's location. Make sure the lifeline meeting icon is copied to the "Documents" directory as indicated in the `Icon` line.

### 7. Save and Close the File

Save the file and close the text editor.

### 8. Make the File Executable

Make the shortcut file executable by running the following command:

```bash
chmod +x Lifeline_Meeting.desktop
```

### 9. Adjust File Permissions

1. Right-click on the application file (Lifeline_Meeting.desktop) on your desktop.
2. Select "Properties" from the context menu.
3. In the properties dialog, navigate to the "Permissions" tab.
4. Look for the section titled "Execute" or "Allow executing file as a program."
5. Enable the option that allows the file to be executed. This is typically done by checking a checkbox labeled "Allow executing file as program" or similar.
6. Click "Close" or "OK" to save the changes and close the properties dialog.

### 10. Test the Shortcut

You should now see the Lifeline Meeting shortcut on your desktop. Double-clicking it should launch Firefox and automatically redirect to the unique Jitsi Meeting URL for myBESHIE.

## Conclusion

Creating a desktop shortcut for Lifeline Jitsi Meetings on myBESHIE streamlines the process of accessing your meetings. This convenient shortcut provides quick and easy access to your Jitsi Meetings directly from your desktop environment. If you encounter any issues or have further questions, refer to the official Lifeline documentation or seek assistance from your system administrator. 