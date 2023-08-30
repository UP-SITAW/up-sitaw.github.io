Creating a Desktop Shortcut on myBESHIE for Lifeline Jitsi Meetings:

- Initiate a Jitsi Meeting on myBESHIE through Lifeline:
First, you need to initiate a Jitsi Meeting on myBESHIE using Lifeline. To do this, open the Lifeline application and navigate to the section for Jitsi Meetings. Start a meeting with myBESHIE as the participant by calling the myBESHIE device from the Meeting module.

- Identify the Unique Jitsi Meeting URL:
Once the meeting is established, click on the "Share" button within the meeting interface. This will display the unique Jitsi Meeting URL for myBESHIE. Copy or note down this URL as you will need it later.

- On myBESHIE device, open a Terminal and Navigate to Desktop Directory:
Open a terminal on myBESHIE. You can usually find the terminal application in the applications menu or by searching for "Terminal."

    To navigate to your desktop directory, use the following command:
``` bash
  cd ~/Desktop/
```

- Create a New Shortcut File:
Next, create a new file for the desktop shortcut. You can use a text editor like `nano` or `gedit` to create the file. In this example, we'll use `nano`:
```bash
nano Lifeline_Meeting.desktop
```

- Paste the Shortcut Content:

In the text editor, paste the following content for the shortcut file:

```text
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

- Specify a Custom Icon (Optional):
If you have a custom icon for the shortcut, you can include the `Icon` line and specify the icon's location. Ensure you copy the lifeline meeting icon to the "Documents" directory as indicated in the `Icon` line.

7. Save and Close the File:
Save the file and close the text editor.

8. Make the File Executable:
To make the shortcut file executable, run the following command:
```
chmod +x Lifeline_Meeting.desktop 
```

-  Adjust File Permissions:
Right-click on the application file (Lifeline_Meeting.desktop) on your desktop. Select "Properties" from the context menu. In the properties dialog, navigate to the "Permissions" tab. Look for the section titled "Execute" or "Allow executing file as a program." Enable the option that allows the file to be executed. This is usually done by checking a checkbox next to "Allow executing file as program" or a similar label. Click "Close" or "OK" to save the changes and close the properties dialog.

10. Test the Shortcut:
You should now see the Lifeline Meeting shortcut on your desktop. Double-clicking it should launch Firefox and automatically redirect to the unique Jitsi Meeting URL for myBESHIE.
