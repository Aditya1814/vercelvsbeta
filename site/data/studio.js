window.DATA=window.DATA||{};window.DATA["studio"]=[
 {
  "id": "STU-001",
  "module": "Graphics Module / Top Band Properties",
  "sev": "Medium",
  "title": "Top Band Properties Panel Closes When Using Keyboard Undo",
  "summary": "Top Band Properties Panel Closes When Using Keyboard Undo",
  "steps": [
   "1. Open the Graphics module. 2. Start creating graphics and open the Top Band properties panel. 3. Press Ctrl + Z using the keyboard. 4. Observe the Top Band properties panel."
  ],
  "actual": "The Top Band properties panel closes when the user triggers Undo using the keyboard.",
  "expected": "The Undo action should revert the previous change without closing the Top Band properties panel.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-002",
  "module": "Graphics Module / Size Adjustment Controls",
  "sev": "Medium",
  "title": "Size Adjustment Text Fields Do Not Clear When Pressing Backspace",
  "summary": "Size Adjustment Text Fields Do Not Clear When Pressing Backspace",
  "steps": [
   "1. Open the Graphics module. 2. Select an element with size adjustment controls. 3. Click a size adjustment text field containing a default value. 4. Press Backspace to clear the existing value."
  ],
  "actual": "The default value is not cleared when pressing Backspace, preventing users from entering a new value as required.",
  "expected": "Users should be able to clear the existing value using Backspace and enter a new size value.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-003",
  "module": "Studio Module / Session Setup / How Is Your Video",
  "sev": "Medium",
  "title": "Camera and Microphone Off Message Displayed When Producer Skips Video Setup",
  "summary": "Camera and Microphone Off Message Displayed When Producer Skips Video Setup",
  "steps": [
   "1. Open the Studio module. 2. Start a session with the Producer role. 3. Navigate to the \"How Is Your Video\" screen. 4. Click the Skip option. 5. Observe the session status."
  ],
  "actual": "A \"Camera and mic are off\" message is displayed, even though the Producer role is not intended to appear on screen or be recorded.",
  "expected": "The session should start without displaying the \"Camera and mic are off\" message when a Producer skips the video setup.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-004",
  "module": "Studio Module / Let's Check Your Device",
  "sev": "Medium",
  "title": "Camera Requesting Message Displayed Repeatedly During Microphone Setup",
  "summary": "Camera Requesting Message Displayed Repeatedly During Microphone Setup",
  "steps": [
   "1. Open the Studio module. 2. Start the session . 3. Navigate to the \"Let's Check Your Device\" screen. 4. Check the status message while configuring or testing the microphone."
  ],
  "actual": "The \"Requesting your camera\" message is displayed repeatedly even while the user is configuring or testing the microphone.",
  "expected": "The screen should display the appropriate microphone status message during microphone setup and should not repeatedly show the camera requesting message.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-005",
  "module": "Studio Module / Device Setup / Role Selection",
  "sev": "Medium",
  "title": "Host Can Change Their Own Role Using the Role Selection Dropdown",
  "summary": "Host Can Change Their Own Role Using the Role Selection Dropdown",
  "steps": [
   "1. Open the Studio module. 2. Start the session as a Host. 3. Click the role dropdown beside the user name. 4. Select Guest or Producer."
  ],
  "actual": "The Host is able to change their own role to Guest or Producer from the dropdown.",
  "expected": "The Host should retain the Host role and should not be able to change their own role through the role selection dropdown.",
  "reporter": "",
  "date": "",
  "devStatus": "Functionality",
  "qaStatus": "Done",
  "qaNote": "Here the host only send links of Anchor ,Audio & particpant",
  "sheetId": ""
 },
 {
  "id": "STU-006",
  "module": "Studio Module / Brand Kit / Host",
  "sev": "Medium",
  "title": "Watermark Status Incorrectly Displayed as On in Host-Side Brand Kit",
  "summary": "Watermark Status Incorrectly Displayed as On in Host-Side Brand Kit",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the created meeting as a Host. 4. Navigate to the Brand Kit section. 5. Check the Watermark setting."
  ],
  "actual": "The Watermark status is displayed as On instead of Off on the Host side.",
  "expected": "The Watermark status should correctly display Off when watermark is disabled.",
  "reporter": "",
  "date": "",
  "devStatus": "Ux design",
  "qaStatus": "Need discusion",
  "qaNote": "Here in schedule we have an option while joing to show or hide in other ways it always visible",
  "sheetId": ""
 },
 {
  "id": "STU-007",
  "module": "Studio Module / Producer Mode / Casual Mode",
  "sev": "Medium",
  "title": "Producer Options Remain Visible After Switching to Casual Mode",
  "summary": "Producer Options Remain Visible After Switching to Casual Mode",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting. 3. Join the meeting as a Host. 4. After the meeting starts, switch to Producer mode. 5. Switch back to Casual mode. 6. Check the Producer options."
  ],
  "actual": "Producer options remain visible after switching to Casual mode.",
  "expected": "Producer-specific options should automatically close or become hidden when switching to Casual mode.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-008",
  "module": "Studio Module / Teleprompter / Preview",
  "sev": "Medium",
  "title": "Teleprompter Script Closes When Host Clicks Edit from Preview",
  "summary": "Teleprompter Script Closes When Host Clicks Edit from Preview",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Start the meeting. 4. Open the Teleprompter and add a script. 5. Open the script preview and click the Edit option."
  ],
  "actual": "The Teleprompter script closes when the Host clicks the Edit option from the preview.",
  "expected": "The Teleprompter script should remain open and allow the Host to edit the script without closing it.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "When Anchor reading time if we edit it will not close once we click on update and again start then only it will re-appear then only new change will update other wise will not reflect",
  "sheetId": ""
 },
 {
  "id": "STU-009",
  "module": "Studio Module /Producer/ Screen Sharing",
  "sev": "High",
  "title": "Host Unable to View Screen Shares Shared by Participants or Anchor",
  "summary": "Host Unable to View Screen Shares Shared by Participants or Anchor",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Start the meeting. 4. Ask a participant or Anchor to share their screen. 5. Check the Host's screen for the shared content."
  ],
  "actual": "The Host is unable to view the screen shared by participants or the Anchor.",
  "expected": "The Host should be able to view screen shares from participants and the Anchor in the Studio interface.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "Done",
  "qaNote": "need one discussion about this host not able to see the content clearly",
  "sheetId": ""
 },
 {
  "id": "STU-010",
  "module": "Studio Module /Producer/ Meeting / Invite People",
  "sev": "Low",
  "title": "\"Invited As\" Label Displayed Beside Role Selection Dropdown",
  "summary": "\"Invited As\" Label Displayed Beside Role Selection Dropdown",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Open the Invite People screen. 4. Check the placement of the \"Invited As\" label and role-selection dropdown."
  ],
  "actual": "The \"Invited As\" label is displayed beside the role-selection dropdown, resulting in an incorrect layout.",
  "expected": "The \"Invited As\" label and role-selection dropdown should be displayed with proper alignment and spacing.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-011",
  "module": "Studio Module /Producer/ Meeting Details",
  "sev": "Medium",
  "title": "Meeting Displays an Incorrect End-Time Countdown Despite Having No Scheduled End Time",
  "summary": "Meeting Displays an Incorrect End-Time Countdown Despite Having No Scheduled End Time",
  "steps": [
   "1. Open the Studio module. 2. Schedule a meeting without specifying an end time. 3. Join the meeting as a Host. 4. Check the meeting status and duration displayed with inviting a user through mail"
  ],
  "actual": "The meeting is displayed as Live with an end-time countdown of 5 hours and 28 minutes, even though no end time was configured during scheduling.",
  "expected": "The meeting should not display an end-time countdown when no end time is specified during scheduling.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "If came with Go-live then we have 4 hours duartion as we allow 4 hours live recording and pls confirm is it shows 3:30 minutes or 5:30",
  "sheetId": ""
 },
 {
  "id": "STU-012",
  "module": "Studio Module /Producer/ Meeting / Invite People",
  "sev": "High",
  "title": "Previously Generated Invitation Link Sent to Multiple Recipients After Updating Email Address",
  "summary": "Previously Generated Invitation Link Sent to Multiple Recipients After Updating Email Address",
  "steps": [
   "1. Open the Studio module and create a meeting. 2. Generate an invitation link for the first user and send the invitation email successfully. 3. Update the email address to a second user's email address. 4. Send the invitation again. 5. Check the invitation emails received by both users."
  ],
  "actual": "Both users receive the same previously generated invitation link, even after updating the recipient's email address.",
  "expected": "A unique invitation link should be generated for each recipient, and the updated invitation should be sent only to the intended email address.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-013",
  "module": "Studio Module /Producer/ Meeting / Participant Notifications",
  "sev": "Medium",
  "title": "Participant Left Meeting Notification Displayed Multiple Times to Host",
  "summary": "Participant Left Meeting Notification Displayed Multiple Times to Host",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Invite a participant to the meeting. 4. Allow the participant to join and then leave the meeting. 5. Observe the notification displayed to the Host."
  ],
  "actual": "The \"Participant has left the meeting\" notification is displayed multiple times to the Host for a single participant exit.",
  "expected": "The \"Participant has left the meeting\" notification should be displayed only once when a participant leaves the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-014",
  "module": "Studio Module /Producer/ Meeting / Invite People",
  "sev": "Medium",
  "title": "Invite People Popup Displays Guest Instead of Participant",
  "summary": "Invite People Popup Displays Guest Instead of Participant",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Open the Invite People popup. 4. Invite a user with the Participant role. 5. Check the role displayed in the popup."
  ],
  "actual": "The invited user's role is displayed as Guest instead of Participant.",
  "expected": "The invited user's role should be displayed as Participant when the Host invites them as a Participant.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "As per ui design it will show as guest",
  "sheetId": ""
 },
 {
  "id": "STU-015",
  "module": "Studio Module / Producer Meeting Room / Participants",
  "sev": "Medium",
  "title": "Disconnected Participants Remain Selectable in Producer Meeting Room",
  "summary": "Disconnected Participants Remain Selectable in Producer Meeting Room",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Start the meeting and join the meeting room as a Producer. 4. Allow a participant to join and then disconnect from the meeting. 5. Check the disconnected participant in the Producer meeting room. 6. Attempt to select the participant."
  ],
  "actual": "Disconnected participants remain visible and selectable in the Producer meeting room, even though their status is displayed as \"Left\".",
  "expected": "Participants who have left or disconnected from the meeting should not remain selectable in the Producer meeting room.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-016",
  "module": "Studio Module /producer/ Host / Participant Pool",
  "sev": "Medium",
  "title": "Host Can Remove Participant from Pool While Participant Is Still in Preview",
  "summary": "Host Can Remove Participant from Pool While Participant Is Still in Preview",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Start the meeting. 4. Add a participant to the preview. 5. Attempt to clear or remove the participant from the pool."
  ],
  "actual": "The Host is able to remove the participant from the pool even while the participant is still displayed in the preview.",
  "expected": "The system should prevent the Host from clearing a participant from the pool while they are still active in the preview, or handle the removal without affecting the active preview.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-017",
  "module": "Studio Module / Producer Meeting Room / Participant Pool",
  "sev": "High",
  "title": "Left Participant Incorrectly Displayed in Pool with On Air Status",
  "summary": "Left Participant Incorrectly Displayed in Pool with On Air Status",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Start the meeting. 4. Allow a participant to join and then leave the meeting. 5. Check the participant's status in the Producer meeting room pool."
  ],
  "actual": "The participant who has left the meeting is still displayed in the pool with an \"On Air\" tag.",
  "expected": "Participants who have left the meeting should not remain in the pool or display an \"On Air\" status.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-018",
  "module": "Studio Module / producer/ Anchor / Teleprompter",
  "sev": "Medium",
  "title": "Teleprompter Is Displayed to Anchor After Rejoining the Meeting",
  "summary": "Teleprompter Is Displayed to Anchor After Rejoining the Meeting",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a producer Host. 3. Invite an Anchor to the meeting. 4. Remove the Anchor from the meeting. 5. Rejoin the same meeting as the Anchor. 6. Check the Teleprompter visibility."
  ],
  "actual": "The Teleprompter is displayed to the Anchor after rejoining the meeting, even though the Anchor was previously removed.",
  "expected": "The Teleprompter should follow the configured role permissions and visibility settings when the Anchor rejoins the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-019",
  "module": "All Modules / Toast Notifications",
  "sev": "Medium",
  "title": "Repeated Toast Notifications Displayed While Functionality Is in Progress",
  "summary": "Repeated Toast Notifications Displayed While Functionality Is in Progress",
  "steps": [
   "1. Open any module. 2. Trigger a functionality that involves an ongoing process. 3. Observe the toast notifications while the process is in progress."
  ],
  "actual": "Toast messages are repeatedly displayed whenever a functionality is ongoing, resulting in unnecessary notifications.",
  "expected": "Toast notifications should be displayed only for relevant status updates, such as successful completion or failure, rather than repeatedly during an ongoing process.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-020",
  "module": "Studio Module / Producer Meeting / People Popup",
  "sev": "Medium",
  "title": "Anchor Rejoin Notification Displayed Despite Out of Call Status",
  "summary": "Anchor Rejoin Notification Displayed Despite Out of Call Status",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Start the meeting and access the Producer meeting room. 4. Remove or disconnect the Anchor from the meeting. 5. Allow the Anchor to rejoin the meeting. 6. Check the toast notification and People popup."
  ],
  "actual": "A toast notification indicates that the Anchor has rejoined, but the Anchor's status in the People popup still shows \"Out of Call\".",
  "expected": "When the Anchor rejoins the meeting, the People popup should update the status to reflect that the Anchor is back in the call.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-021",
  "module": "Studio Module / Producer Meeting Room / Host Preview",
  "sev": "Medium",
  "title": "Video Duration Timer Incorrectly Displayed for Audio-Only User in Producer Meeting Room",
  "summary": "Video Duration Timer Incorrectly Displayed for Audio-Only User in Producer Meeting Room",
  "steps": [
   "1. Open the Studio module. 2. Create a meeting and join as a Host. 3. Start the meeting. 4. Invite meeting as an audio-only user. 5. Join the meeting and check the Host preview to the audio user"
  ],
  "actual": "The video duration timer is displayed in the Producer meeting room for an audio-only user, even though the user is not sharing video.",
  "expected": "The video duration timer should be displayed only when video is available and should not appear for audio-only users.",
  "reporter": "",
  "date": "",
  "devStatus": "As Expected",
  "qaStatus": "Done",
  "qaNote": "For all participants has to show video along with duartion",
  "sheetId": ""
 },
 {
  "id": "STU-022",
  "module": "Studio Module / Producer Meeting Room",
  "sev": "Medium",
  "title": "Guest Name Prompt Displayed When Open Room Is Already Enabled",
  "summary": "Guest Name Prompt Displayed When Open Room Is Already Enabled",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the meeting as Host and start the meeting. 4. Open the Producer meeting room. 5. Check the role dropdown and select the Guest option."
  ],
  "actual": "The system prompts for the Guest name even though the Open Room option is already enabled.",
  "expected": "When Open Room is enabled, the system should allow the Guest to join without prompting for a Guest name.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-023",
  "module": "Studio Module / Check Your Device",
  "sev": "Medium",
  "title": "Frame Size and Position Change Unexpectedly When Adjusting Position",
  "summary": "Frame Size and Position Change Unexpectedly When Adjusting Position",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the meeting as Host. 4. Navigate to the Check Your Device screen. 5. Change the frame position."
  ],
  "actual": "The frame unexpectedly enlarges and moves when the user changes its position.",
  "expected": "The frame should maintain its original size and change only its position based on the user's adjustment.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-024",
  "module": "Studio Module / Producer Settings / Host Screen",
  "sev": "Medium",
  "title": "Unable to Enlarge Teleprompter in Host Screen",
  "summary": "Unable to Enlarge Teleprompter in Host Screen",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the meeting as Host and start the meeting. 4. Open Producer Settings. 5. Navigate to the Teleprompter in the Host screen and try to enlarge it."
  ],
  "actual": "The Teleprompter cannot be enlarged in the Host screen.",
  "expected": "The user should be able to enlarge the Teleprompter in the Host screen.",
  "reporter": "",
  "date": "",
  "devStatus": "As per UX-design",
  "qaStatus": "",
  "qaNote": "if Enlarge Host unable to do operations as it covers most of the screen",
  "sheetId": ""
 },
 {
  "id": "STU-025",
  "module": "Studio Module / Producer Meeting Room / Host",
  "sev": "Medium",
  "title": "Unable to Select Subtitle Language for Display",
  "summary": "Unable to Select Subtitle Language for Display",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the meeting as Host and start the meeting. 4. Open the Producer meeting room. 5. Try to select a subtitle language for display."
  ],
  "actual": "The Host is unable to select the subtitle language in the Producer meeting room.",
  "expected": "The Host should be able to select the required subtitle language for display.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-026",
  "module": "Studio/meeting start",
  "sev": "Medium",
  "title": "By default brandkit is getting applied",
  "summary": "By default brandkit is getting applied",
  "steps": [
   "1.Start the meeting",
   "2.Observe the meeting page",
   "3.By default brandkit is ON on the screen"
  ],
  "actual": "By default brandkit logo is getting applied to the meeting screen",
  "expected": "The brandkit logo should disable wthen the meeting is started",
  "reporter": "",
  "date": "",
  "devStatus": "Functionality",
  "qaStatus": "Done",
  "qaNote": "When schedule meeting time we give checkoption to show or not other cases It was default on untill users has to off manually",
  "sheetId": ""
 },
 {
  "id": "STU-027",
  "module": "Studio/source",
  "sev": "Medium",
  "title": "when host mute and unmute the mic the mic option in the source is not updating as per the changes",
  "summary": "when host mute and unmute the mic the mic option in the source is not updating as per the changes",
  "steps": [
   "1.Open the studio",
   "2.Start the meeting",
   "3.Mute the host and unmute the host",
   "4.The mic symbol in the source is not updated as per the change"
  ],
  "actual": "When the host mutes or unmutes the microphone, the mic option in the Source section is not updating according to the host's changes. The mic status is not synchronized correctly.",
  "expected": "Whenever the host mutes or unmutes the microphone, the mic option in the Source section should update automatically and reflect the correct microphone status (Muted/Unmuted).",
  "reporter": "",
  "date": "",
  "devStatus": "Functionality",
  "qaStatus": "",
  "qaNote": "Here the Sources mic shows related to Master output,if host turn on and off is related to meeting one and for the sources shows will effect in master ie youtube,rtmp platforms to get audio or not is decided here",
  "sheetId": ""
 },
 {
  "id": "STU-028",
  "module": "Studio/ meeting",
  "sev": "Medium",
  "title": "Keyboard shortcuts are not working\n\nStandard layouts 1–5 (Casual view)\r\n1–5\r\nMute mic\r\nM\r\nRecord\r\nR\r\nTAKE - Preview and staged graphics on air (Producer view)\r\nT / Enter\r\nCUT - selection straight to Master (Producer view)\r\nC\r\nPublish the staged layout (Casual view)\r\nEnter\r\nLower third on/off in Preview\r\nL\r\nTicker on/off in Preview\r\nK\r\nBreaking News on/off in Preview\r\nB\r\nAll graphics off air now\r\nShift+G\r\nNext rundown story (Teleprompter panel open)\r\nN\r\nClose panel\r\nEsc",
  "summary": "Keyboard shortcuts are not working\n\nStandard layouts 1–5 (Casual view)\r\n1–5\r\nMute mic\r\nM\r\nRecord\r\nR\r\nTAKE - Preview and staged graphics on air (Producer view)\r\nT / Enter\r\nCUT - selection straight to Master (Producer view)\r\nC\r\nPublish the staged layout (Casual view)\r\nEnter\r\nLower third on/off in Preview\r\nL\r\nTicker on/off in Preview\r\nK\r\nBreaking News on/off in Preview\r\nB\r\nAll graphics off air now\r\nShift+G\r\nNext rundown story (Teleprompter panel open)\r\nN\r\nClose panel\r\nEsc",
  "steps": [
   "1.Open the studio start the meeting",
   "2.Click on the setting and find the all shortcuts",
   "3.Shortcuts are not working as expected"
  ],
  "actual": "Keyboard shortcut keys are not functioning as expected when triggered in the application.",
  "expected": "ll keyboard shortcuts should work correctly and perform their respective actions as defined.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-029",
  "module": "Studio /live meeting",
  "sev": "Medium",
  "title": "Live subtitles are not wokring as expecetd",
  "summary": "Live subtitles are not wokring as expecetd",
  "steps": [
   "1.Start the meeting",
   "2.Start talking the some topic in the meeting",
   "3.The subtitle is not working as expected"
  ],
  "actual": "Live subtitles are not displaying or functioning as expected during live content playback.",
  "expected": "Live subtitles should display correctly and remain synchronized with the live audio throughout playback.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Reopen",
  "qaNote": "Not working as expected",
  "sheetId": ""
 },
 {
  "id": "STU-030",
  "module": "Studio /live meeting",
  "sev": "Medium",
  "title": "Teleprompter is displayed to the host when joining a meeting through an Open Room.",
  "summary": "Teleprompter is displayed to the host when joining a meeting through an Open Room.",
  "steps": [
   "1.Join as host to the meeting",
   "2.See the option in the screen",
   "3.When we click on the teleprompter",
   "4.Any one in the meeting are not able to see the teleprompter",
   "5.Remove the teleprompter option in the Open room meeting"
  ],
  "actual": "When the host joins a meeting using the Open Room option, the teleprompter is displayed automatically, even though it is not expected.",
  "expected": "The teleprompter should not be displayed to the host when joining a meeting through an Open Room.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "In an Open Room, the open link is for participants. Invite the anchor individually (Invite people > Anchor creates their own link), then send the script from the Teleprompter panel. The host's own teleprompter (Me) works in any meeting.",
  "sheetId": ""
 },
 {
  "id": "STU-031",
  "module": "More / Recon Audience / Scanner",
  "sev": "High",
  "title": "Scanner Enabled on Host Side Is Not Visible to Meeting Participants",
  "summary": "Scanner Enabled on Host Side Is Not Visible to Meeting Participants",
  "steps": [
   "1. Start a meeting as a host. 2. Navigate to More and open the Recon Audience section. 3. Design or configure a scanner. 4. Enable the Show Scanner on the Stage option. 5. Verify that the scanner is displayed on the host's stage. 6. Check the participant screens during the meeting."
  ],
  "actual": "The scanner displayed on the host's stage is not visible to participants or other people attending the meeting. As a result, participants are unable to scan and validate the scanner or submit videos through it.",
  "expected": "Once the host enables Show Scanner on the Stage, the scanner should be visible to all participants attending the meeting, allowing them to scan, validate, and submit videos through it.",
  "reporter": "",
  "date": "",
  "devStatus": "Functionality",
  "qaStatus": "Done",
  "qaNote": "Only public has to see and send videos ,as the participants dont need as per the requirement",
  "sheetId": ""
 },
 {
  "id": "STU-032",
  "module": "Studio / Casual",
  "sev": "High",
  "title": "Video Continues Playing for Other Participants When Paused by Host",
  "summary": "Video Continues Playing for Other Participants When Paused by Host",
  "steps": [
   "1. Open the Studio-Casual module. 2. Navigate to the Casual section. 3. Play any video in the host Side view. 4. Observe the video playing in the partition view for other participants. 5. Pause the video from the host Side view. 6. Verify the video playback status for guests and other participants."
  ],
  "actual": "When the host pauses the video from the host Side view, playback continues for guests and other participants side.",
  "expected": "When the host pauses the video, playback should pause simultaneously for all guests and other participants, irrespective of the view.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-033",
  "module": "Live Meeting / Recording",
  "sev": "High",
  "title": "Recording Restarts from Zero When Host or Participant Navigates Away from the Meeting",
  "summary": "Recording Restarts from Zero When Host or Participant Navigates Away from the Meeting",
  "steps": [
   "1. Start a meeting as a host. 2. Start the recording. 3. Navigate outside the meeting using the browser's Back or Forward button or access browser settings. 4. Return to the meeting and observe the recording timer. 5. Repeat the same steps using a participant account."
  ],
  "actual": "When the host or participant navigates away from the meeting and returns, the recording restarts from zero instead of continuing from the previous duration.",
  "expected": "Recording should continue from where it was interrupted without resetting the recording timer whenever the host or participant navigates away from and returns to the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Reopen",
  "qaNote": "Timmer start from begin for the second recording need to continue from last timer(need to discuss with dev team)",
  "sheetId": ""
 },
 {
  "id": "STU-034",
  "module": "Studio / Casual Mode / Stream Destinations",
  "sev": "High",
  "title": "Unable to Add YouTube as a Streaming Destination – Developer Connection Required",
  "summary": "Unable to Add YouTube as a Streaming Destination – Developer Connection Required",
  "steps": [
   "1. Navigate to Studio. 2. Select Casual Mode. 3. Select any stream. 4. Click on Add a Destination. 5. Select YouTube as the destination. 6. Enter the appropriate email address and proceed."
  ],
  "actual": "Unable to add YouTube as a streaming destination. The application prompts the user to connect to the developer instead of completing the destination setup.",
  "expected": "The user should be able to connect and add YouTube as a streaming destination using the appropriate account without requiring manual developer intervention.",
  "reporter": "",
  "date": "",
  "devStatus": "Sent for the Approval",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-035",
  "module": "Studio Module / Live Meeting / Live Dubbing",
  "sev": "High",
  "title": "Live Dubbing Not Working During Meeting",
  "summary": "Live Dubbing Not Working During Meeting",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the meeting as Host and start the meeting. 4. Enable the Live Dubbing feature. 5. Speak during the meeting and verify the dubbed audio output."
  ],
  "actual": "Live Dubbing is not working during the meeting.",
  "expected": "Live Dubbing should process the Host's speech and provide the dubbed audio output in real time during the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-036",
  "module": "Studio Module / Brand Kit / Meeting",
  "sev": "Medium",
  "title": "Participant Name Font Changes Not Reflected in Meeting",
  "summary": "Participant Name Font Changes Not Reflected in Meeting",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the meeting as Host and start the meeting. 4. Open Brand Kit and change the participant name font. 5. Check the participant name displayed in the meeting."
  ],
  "actual": "The participant name font does not change in the meeting after updating it in Brand Kit.",
  "expected": "The participant name displayed in the meeting should reflect the font selected in Brand Kit.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Brand Kit font applies to on-air name plates (output), not the meeting app.",
  "sheetId": ""
 },
 {
  "id": "STU-037",
  "module": "Studio Module / Meeting Room",
  "sev": "Medium",
  "title": "Joining Room Still Displayed After Joining Meeting with Background Image",
  "summary": "Joining Room Still Displayed After Joining Meeting with Background Image",
  "steps": [
   "1. Open Studio and create a meeting. 2. Join the meeting with a background image enabled. 3. Check the Host meeting screen."
  ],
  "actual": "The joining room screen continues to appear even after joining the meeting.",
  "expected": "The user should be redirected to the meeting screen after successfully joining.",
  "reporter": "",
  "date": "",
  "devStatus": "Need in Detail",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-038",
  "module": "Studio Module / Background Settings",
  "sev": "High",
  "title": "Error Message Displayed When Changing Background After Joining Meeting",
  "summary": "Error Message Displayed When Changing Background After Joining Meeting",
  "steps": [
   "1. Open Studio and create a meeting. 2. Join the meeting. 3. Change the background image."
  ],
  "actual": "An error message appears on the screen, along with a \"Video not sending\" message.",
  "expected": "The background should change successfully without displaying error messages or interrupting the video stream.",
  "reporter": "",
  "date": "",
  "devStatus": "Need In detail",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-039",
  "module": "Studio Module / Host Meeting Page",
  "sev": "High",
  "title": "Newly Joined Participants Not Displayed on Host Meeting Page",
  "summary": "Newly Joined Participants Not Displayed on Host Meeting Page",
  "steps": [
   "1. Open Studio and create a meeting. 2. Join the meeting as Host. 3. Allow another participant to join the meeting. 4. Check the Host meeting page."
  ],
  "actual": "The newly joined participant is not displayed on the Host meeting page.",
  "expected": "All newly joined participants should be displayed on the Host meeting page.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-040",
  "module": "Studio Module / Participant Go Live Page",
  "sev": "Medium",
  "title": "Toast Notification Displayed Before Participant Joins Meeting",
  "summary": "Toast Notification Displayed Before Participant Joins Meeting",
  "steps": [
   "1. Open Studio and create a meeting. 2. Navigate to the participant Go Live or Starting page without joining the meeting. 3. Observe the notifications."
  ],
  "actual": "A toast notification is displayed even though the participant has not joined the meeting.",
  "expected": "Toast notifications should be displayed only when the corresponding meeting action occurs.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-041",
  "module": "Studio Module / Mobile Web / Background Settings",
  "sev": "Medium",
  "title": "No Clear Back or Close Option on Background Selection Screen in Mobile Web",
  "summary": "No Clear Back or Close Option on Background Selection Screen in Mobile Web",
  "steps": [
   "1. Open the meeting link in mobile web. 2. Navigate to background selection. 3. Check the available navigation options."
  ],
  "actual": "No clear Back or Close option is available, making it difficult to understand how to return to the previous screen.",
  "expected": "A clearly identifiable Back or Close option should be available.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-042",
  "module": "Studio Module / iOS Mobile Web",
  "sev": "High",
  "title": "iOS Mobile Web User Automatically Disconnected After Some Time",
  "summary": "iOS Mobile Web User Automatically Disconnected After Some Time",
  "steps": [
   "1. Open the meeting link in iOS mobile web. 2. Join the meeting and continue using it. 3. Observe the meeting connection after some time."
  ],
  "actual": "The user is automatically disconnected and asked to grant permissions again.",
  "expected": "The user should remain connected without repeatedly requesting permissions unless required by the device or browser.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-043",
  "module": "Studio Module / iOS Mobile Web / Background Settings",
  "sev": "Medium",
  "title": "Background Change Option Missing After Rejoining Meeting on iOS Mobile Web",
  "summary": "Background Change Option Missing After Rejoining Meeting on iOS Mobile Web",
  "steps": [
   "1. Open the meeting link in iOS mobile web. 2. Join the meeting and leave it. 3. Rejoin the same meeting. 4. Check the background settings."
  ],
  "actual": "The background change option is not available after rejoining the meeting.",
  "expected": "The user should be able to change the background after rejoining the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-044",
  "module": "Studio Module / Single Meeting Link / Participant",
  "sev": "High",
  "title": "Video Not Restored After Enabling Camera for Audio-Only Participant",
  "summary": "Video Not Restored After Enabling Camera for Audio-Only Participant",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting with audio enabled and video disabled. 3. Enable video after joining while using a background. 4. Observe the camera status. 5. Disable and re-enable the camera."
  ],
  "actual": "Video does not appear after enabling the camera. Disabling and re-enabling the camera displays a \"Camera is off\" error message to the participant.",
  "expected": "Video should start successfully when the participant enables the camera, without displaying an incorrect camera-off error.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-045",
  "module": "Studio Module / Single Meeting Link / Background Settings",
  "sev": "Medium",
  "title": "Slow Background and Blur Processing Prevents Background Changes",
  "summary": "Slow Background and Blur Processing Prevents Background Changes",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting. 3. Select Blur or another background option. 4. Observe the processing time."
  ],
  "actual": "Background and blur processing is too slow, preventing users from changing backgrounds smoothly.",
  "expected": "Background and blur effects should process within a reasonable time and allow users to change backgrounds.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-046",
  "module": "Studio Module / Single Meeting Link / Participant",
  "sev": "Medium",
  "title": "Previous Participant Name Retained When Rejoining Through Meeting Link",
  "summary": "Previous Participant Name Retained When Rejoining Through Meeting Link",
  "steps": [
   "1. Open the meeting link and join using a name. 2. Leave the meeting. 3. Open the same link again. 4. Enter a different name and join."
  ],
  "actual": "The previously entered name is retained instead of accepting the newly entered name.",
  "expected": "The meeting should accept and display the newly entered name when the user rejoins.",
  "reporter": "",
  "date": "",
  "devStatus": "Functionality",
  "qaStatus": "",
  "qaNote": "When in same browser like it will goes to same logined one if another browser if we open it will ask to enter as new participant",
  "sheetId": ""
 },
 {
  "id": "STU-047",
  "module": "Studio Module / Single Meeting Link / Recording",
  "sev": "Medium",
  "title": "Recording Started Toast Notification Not Displayed",
  "summary": "Recording Started Toast Notification Not Displayed",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting. 3. Start recording. 4. Observe the notifications."
  ],
  "actual": "The recording started toast notification is not displayed after joining the meeting and starting recording.",
  "expected": "A recording started notification should be displayed when recording begins.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-048",
  "module": "Studio Module / Single Meeting Link / Meeting Screen",
  "sev": "Medium",
  "title": "Participant Name Overlaps with Recording Timer",
  "summary": "Participant Name Overlaps with Recording Timer",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting with multiple participants. 3. Start recording. 4. Check participant names and recording timer."
  ],
  "actual": "Participant names overlap with the recording timer for all meeting members.",
  "expected": "Participant names and recording timer should be displayed separately without overlapping.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-049",
  "module": "Studio Module / Open Meeting Link",
  "sev": "Medium",
  "title": "No Participant Join Limit for Open Meeting Link",
  "summary": "No Participant Join Limit for Open Meeting Link",
  "steps": [
   "1. Create a meeting with the Open Room option enabled. 2. Share the meeting link with multiple users. 3. Allow users to join the meeting."
  ],
  "actual": "No participant join limit is available for the open meeting link.",
  "expected": "The Host should be able to configure a maximum participant join limit for the open meeting link.",
  "reporter": "",
  "date": "",
  "devStatus": "New requirement",
  "qaStatus": "",
  "qaNote": "Join limit for the open link is a new feature (API + Room access + 'meeting full' screen). Today the stage holds 10 and the open link can be replaced (Make a new link).",
  "sheetId": ""
 },
 {
  "id": "STU-050",
  "module": "Studio Module / Single Meeting Link / Joining Page",
  "sev": "Medium",
  "title": "Name Change Option Missing on Meeting Joining Page",
  "summary": "Name Change Option Missing on Meeting Joining Page",
  "steps": [
   "1. Open the meeting link. 2. Navigate to the joining page. 3. Check for the participant name field or edit option."
  ],
  "actual": "No option is available to change the participant name on the joining page.",
  "expected": "Users should be able to enter or change their names before joining the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Functionality",
  "qaStatus": "",
  "qaNote": "If need to change the name has to leave the old one and has to rejoin with a new name",
  "sheetId": ""
 },
 {
  "id": "STU-051",
  "module": "Studio Module / Single Meeting Link / Host Meeting Page",
  "sev": "Medium",
  "title": "Participants Who Leave Meeting Remain Visible on Host Screen",
  "summary": "Participants Who Leave Meeting Remain Visible on Host Screen",
  "steps": [
   "1. Open the meeting link and join as Host. 2. Allow a participant to join. 3. Ask the participant to leave the meeting. 4. Check the Host screen."
  ],
  "actual": "The participant remains visible on the Host screen after leaving the meeting.",
  "expected": "Participants who leave the meeting should be removed from the active participant list.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-052",
  "module": "Studio Module / Single Meeting Link / Host Meeting Page",
  "sev": "Medium",
  "title": "Take Out of Call Status Not Updated After Participant Rejoins",
  "summary": "Take Out of Call Status Not Updated After Participant Rejoins",
  "steps": [
   "1. Open the meeting link and join as Host. 2. Allow a participant to join. 3. Take the participant out of the call. 4. Ask the participant to rejoin the same meeting. 5. Check the Host screen."
  ],
  "actual": "The Host screen continues to display the previous \"Take Out of Call\" message after the participant rejoins.",
  "expected": "The participant's status should update correctly after rejoining the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-053",
  "module": "Studio Module / Single Meeting Link / Meeting Screen",
  "sev": "Low",
  "title": "Recording Timer Displayed in Two Places",
  "summary": "Recording Timer Displayed in Two Places",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting as Host and Participant. 3. Start recording. 4. Check the recording timer on both screens."
  ],
  "actual": "The recording timer is displayed in two places for the Host and Participant.",
  "expected": "The recording timer should be displayed only in the designated location on each screen.",
  "reporter": "",
  "date": "",
  "devStatus": "As per the Ux design",
  "qaStatus": "",
  "qaNote": "But fixed in participant side will reflect in participant side",
  "sheetId": ""
 },
 {
  "id": "STU-054",
  "module": "Studio Module / Single Meeting Link / Screen Sharing",
  "sev": "Medium",
  "title": "User ID Displayed Instead of Participant Name After Screen Sharing",
  "summary": "User ID Displayed Instead of Participant Name After Screen Sharing",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting with multiple participants. 3. Start screen sharing. 4. Check the participant details displayed to all members."
  ],
  "actual": "User IDs are displayed instead of participant names after screen sharing.",
  "expected": "The actual participant names should be displayed instead of user IDs.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-055",
  "module": "Studio Module / Single Meeting Link / Internal Check",
  "sev": "Medium",
  "title": "User IDs Displayed Instead of Names in Internal Check Popup",
  "summary": "User IDs Displayed Instead of Names in Internal Check Popup",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting. 3. Open the Internal Check popup. 4. Check the participant details."
  ],
  "actual": "User IDs are displayed instead of participant names.",
  "expected": "The Internal Check popup should display participant names.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-056",
  "module": "Studio Module / Single Meeting Link / Internal Check",
  "sev": "Low",
  "title": "Drag Option Missing in Internal Check Popup",
  "summary": "Drag Option Missing in Internal Check Popup",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting. 3. Open the Internal Check popup. 4. Try to reposition the popup."
  ],
  "actual": "No drag option is available to reposition the Internal Check popup.",
  "expected": "The popup should support dragging so users can reposition it.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-057",
  "module": "Studio Module / Single Meeting Link / Internal Check",
  "sev": "Medium",
  "title": "Camera-Disabled Participants Missing from Internal Check Screenshot Section",
  "summary": "Camera-Disabled Participants Missing from Internal Check Screenshot Section",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting with multiple participants. 3. Keep some participants' cameras enabled and others disabled. 4. Open the Internal Check popup and check the screenshot section."
  ],
  "actual": "Only participants with cameras enabled are displayed. Participants with cameras disabled are not shown, making it difficult for the Host to identify the total number of participants.",
  "expected": "The Internal Check popup should display all participants, including those with cameras disabled, with their camera status clearly indicated.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-058",
  "module": "Studio Module / Single Meeting Link / Meeting Screen",
  "sev": "High",
  "title": "Participant Camera Status Not Updated When Camera Option Changes",
  "summary": "Participant Camera Status Not Updated When Camera Option Changes",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting with multiple participants. 3. Change the camera option for the Host or a participant. 4. Check the participant camera display."
  ],
  "actual": "The participant's camera status is not updated when the camera option changes.",
  "expected": "The camera status should update correctly for all meeting members whenever the camera setting changes.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-059",
  "module": "Studio Module / Meeting Scheduling",
  "sev": "Medium",
  "title": "Meeting Automatically Assigned 30-Minute Duration When End Time Is Not Provided",
  "summary": "Meeting Automatically Assigned 30-Minute Duration When End Time Is Not Provided",
  "steps": [
   "1. Open Studio. 2. Create a new meeting. 3. Leave the meeting end time empty. 4. Create the meeting and check its duration."
  ],
  "actual": "The meeting is automatically created with a 30-minute duration even though no end time was provided.",
  "expected": "The system should not automatically assign a 30-minute duration when the end time is not specified.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Not fixed",
  "qaNote": "minimum 5 minutes maximum 4 hours without overlaping for the next event",
  "sheetId": ""
 },
 {
  "id": "STU-060",
  "module": "Studio Module / Recording",
  "sev": "Low",
  "title": "Upcoming Events Displayed Under Recording Tab",
  "summary": "Upcoming Events Displayed Under Recording Tab",
  "steps": [
   "1. Open the Studio module. 2. Navigate to the Recording tab. 3. Check the listed items."
  ],
  "actual": "Upcoming events are displayed under the Recording tab.",
  "expected": "Upcoming events should be displayed in a separate tab instead of the Recording tab.",
  "reporter": "",
  "date": "",
  "devStatus": "AS per UX design",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-061",
  "module": "Studio Module / Scheduled Live",
  "sev": "High",
  "title": "Host Can Change Name and Role in Scheduled Live",
  "summary": "Host Can Change Name and Role in Scheduled Live",
  "steps": [
   "1. Open Studio. 2. Create or open a scheduled live meeting. 3. Join as Host. 4. Try changing the Host name and role using the available options."
  ],
  "actual": "The Host is able to change their name and switch between Host, Guest, and Producer roles.",
  "expected": "The Host's name and role should remain restricted and should not be changeable through these options.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "As the Name is Ediatble but the Host make it as a readble",
  "sheetId": ""
 },
 {
  "id": "STU-062",
  "module": "Studio Module / Host Joining Flow",
  "sev": "Medium",
  "title": "Skip Functionality Not Working on How Is Your Video Screen",
  "summary": "Skip Functionality Not Working on How Is Your Video Screen",
  "steps": [
   "1. Open Studio. 2. Create a new meeting. 3. Join the meeting as Host. 4. Navigate to the \"How Is Your Video Coming In?\" screen. 5. Click Skip."
  ],
  "actual": "The Skip functionality does not work, and the user cannot proceed as expected.",
  "expected": "Clicking Skip should bypass the screen and allow the Host to continue joining the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-063",
  "module": "Studio Module / Live Started Page",
  "sev": "Low",
  "title": "Go Live Option Displayed in Two Locations",
  "summary": "Go Live Option Displayed in Two Locations",
  "steps": [
   "1. Open Studio. 2. Create a new meeting and join as Host. 3. Start the live meeting. 4. Check the Go Live options displayed on the page."
  ],
  "actual": "The Go Live option is displayed in two different locations.",
  "expected": "A single clearly highlighted Go Live option should be displayed on the Live Started page.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Top-bar Go live opens the Go Live dialog; its Go Live button confirms (no accidental start).",
  "sheetId": ""
 },
 {
  "id": "STU-064",
  "module": "Studio Module / Invite People",
  "sev": "Low",
  "title": "Invite People Popup Occupies Full Screen Instead of Compact Popup",
  "summary": "Invite People Popup Occupies Full Screen Instead of Compact Popup",
  "steps": [
   "1. Open Studio. 2. Create a new meeting and join as Host. 3. Open the Invite People popup."
  ],
  "actual": "The Invite People popup is displayed in full-screen mode.",
  "expected": "The Invite People popup should be displayed as a compact popup instead of occupying the full screen.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-065",
  "module": "Studio Module / Single Meeting Link / Participant Joining",
  "sev": "Medium",
  "title": "Unable to Change Name for Guest, Participant, and Anchor Roles",
  "summary": "Unable to Change Name for Guest, Participant, and Anchor Roles",
  "steps": [
   "1. Open the meeting link. 2. Join the meeting using Guest, Participant, or Anchor roles. 3. Try to change the user name."
  ],
  "actual": "The user is unable to change the name for Guest, Participant, and Anchor roles.",
  "expected": "Users assigned to these roles should be able to change their names wherever name editing is permitted.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "The guest's name comes from the invite; the host can rename them in the Studio.",
  "sheetId": ""
 },
 {
  "id": "STU-066",
  "module": "Studio Module / Audience Poll / Android Web",
  "sev": "Medium",
  "title": "Duplicate Title Displayed After Scanning Audience Poll QR Code",
  "summary": "Duplicate Title Displayed After Scanning Audience Poll QR Code",
  "steps": [
   "1. Open the Audience Poll QR code on Android web. 2. Scan the QR code using a mobile device. 3. Submit the video to the news channel. 4. Check the displayed title and success message."
  ],
  "actual": "The title is displayed twice after scanning the QR code and submitting the video successfully.",
  "expected": "The title should be displayed only once after successful submission.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-067",
  "module": "Studio Module / Audience Poll / Android Web",
  "sev": "High",
  "title": "Audio Not Playing During Audience Video Preview After Recording",
  "summary": "Audio Not Playing During Audience Video Preview After Recording",
  "steps": [
   "1. Open the Audience Poll QR code on Android web. 2. Scan the QR code and record a video. 3. Open the recorded video in preview. 4. Try to listen to the audio."
  ],
  "actual": "The user is unable to hear the audio during the recorded video preview.",
  "expected": "The recorded video preview should play both video and audio correctly.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-068",
  "module": "Studio Module / Audience Poll / Android Web",
  "sev": "Medium",
  "title": "Upload Button Remains Enabled During Recording",
  "summary": "Upload Button Remains Enabled During Recording",
  "steps": [
   "1. Open the Audience Poll QR code on Android web. 2. Start recording a video. 3. Check the Upload button while recording is in progress."
  ],
  "actual": "The Upload button remains enabled during recording.",
  "expected": "The Upload button should remain disabled until recording is completed.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-069",
  "module": "Studio Module / Audience Poll / Host",
  "sev": "High",
  "title": "Audience Video Playback Stuck During Host Playback",
  "summary": "Audience Video Playback Stuck During Host Playback",
  "steps": [
   "1. Submit an audience video through the QR code. 2. Open the submitted video in the Host meeting screen. 3. Play the video."
  ],
  "actual": "The audience video does not play smoothly and gets stuck during playback.",
  "expected": "The audience video should play continuously without freezing or interruption.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-070",
  "module": "Studio Module / Audience Poll / Android Web",
  "sev": "Low",
  "title": "Duplicate Timer Displayed in Audience Poll Recording",
  "summary": "Duplicate Timer Displayed in Audience Poll Recording",
  "steps": [
   "1. Open the Audience Poll QR code on Android web. 2. Start recording a video. 3. Check the recording screen."
  ],
  "actual": "The recording timer is displayed in two places.",
  "expected": "Only one recording timer should be displayed.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-071",
  "module": "Studio Module / Audience Poll / Android Web",
  "sev": "Medium",
  "title": "Audience Video Preview Not Playing During Upload",
  "summary": "Audience Video Preview Not Playing During Upload",
  "steps": [
   "1. Open the Audience Poll QR code on Android web. 2. Record a video. 3. Start uploading the recorded video. 4. Check the video preview during upload."
  ],
  "actual": "The audience video preview does not play while the video is uploading.",
  "expected": "The video preview should play correctly during the upload process, if preview is intended to remain available.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-072",
  "module": "Studio Module / Audience Poll / Live or Master Screen",
  "sev": "Medium",
  "title": "QR Code Reappears After Host Plays Audience Video",
  "summary": "QR Code Reappears After Host Plays Audience Video",
  "steps": [
   "1. Open the Audience Poll QR code during a live meeting. 2. Submit an audience video. 3. Play the submitted video as Host. 4. Check the Live or Master screen after playback."
  ],
  "actual": "The QR code appears again after the Host plays the audience video.",
  "expected": "The QR code should not reappear automatically after video playback unless explicitly triggered by the Host.",
  "reporter": "",
  "date": "",
  "devStatus": "Need more detail",
  "qaStatus": "",
  "qaNote": "Casual or Producer? Was TAKE pressed after playing the video?",
  "sheetId": ""
 },
 {
  "id": "STU-073",
  "module": "Studio Module / Audience Poll / Host",
  "sev": "Medium",
  "title": "Video Rotation Option Missing for Host-Received Audience Videos",
  "summary": "Video Rotation Option Missing for Host-Received Audience Videos",
  "steps": [
   "1. Submit a video through the Audience Poll QR code. 2. Open the received video on the Host screen. 3. Check the available video controls."
  ],
  "actual": "No option is available for the Host to rotate the received video.",
  "expected": "The Host should have an option to rotate the received video.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-074",
  "module": "Studio Module / Audience Poll / Live Screen",
  "sev": "Medium",
  "title": "Unable to Adjust QR Code Position in Live Screen",
  "summary": "Unable to Adjust QR Code Position in Live Screen",
  "steps": [
   "1. Open the Studio module. 2. Start a live meeting. 3. Display the Audience Poll QR code. 4. Try to adjust its position."
  ],
  "actual": "The QR code position cannot be adjusted on the Live screen.",
  "expected": "The Host should be able to reposition the QR code on the Live screen.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-075",
  "module": "Studio Module / Audience Poll / Audio Field",
  "sev": "Medium",
  "title": "Microphone Status Not Updated in Audio Field When Host Mutes Microphone",
  "summary": "Microphone Status Not Updated in Audio Field When Host Mutes Microphone",
  "steps": [
   "1. Open Studio and create a meeting. 2. Join as Host and start the meeting. 3. Mute the Host microphone. 4. Check the microphone status in the Audio field."
  ],
  "actual": "The microphone status is not updated in the Audio field when the Host mutes the microphone.",
  "expected": "The Audio field should correctly reflect the Host's microphone status whenever it is muted or unmuted.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Audio panel mic icon = on-air (Master) mute; the host's own mic shows as the 'Mic muted' badge.",
  "sheetId": ""
 },
 {
  "id": "STU-076",
  "module": "Video Editor / Recorded Content / Sound Effects",
  "sev": "High",
  "title": "Sound Effects Altered in Recorded Content When Previewed in Editor",
  "summary": "Sound Effects Altered in Recorded Content When Previewed in Editor",
  "steps": [
   "1. Open a recorded project in the Video Editor. 2. Play the recorded content in the editor. 3. Observe the sound effects during playback."
  ],
  "actual": "The sound effects in the recorded content change when the content is played or checked in the editor.",
  "expected": "The recorded content should retain its original sound effects without any unexpected audio changes in the editor.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-077",
  "module": "Studio Module / Casual & Producer Meeting / Teleprompter",
  "sev": "Medium",
  "title": "Teleprompter Text Not Highlighted While Host Is Reading",
  "summary": "Teleprompter Text Not Highlighted While Host Is Reading",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting and join as Host. 3. Start the meeting in Casual or Producer mode. 4. Open the Teleprompter and start reading the script."
  ],
  "actual": "The Teleprompter text is not highlighted or tracked while the Host is reading.",
  "expected": "The Teleprompter should automatically highlight the text in sync with the Host's speech while reading.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "Enable Follow voice in the teleprompter to follow (the word being read is highlighted).",
  "sheetId": ""
 },
 {
  "id": "STU-078",
  "module": "Studio Module / Meeting / Live Subtitles",
  "sev": "High",
  "title": "Caption Display Language Option Missing in Live Subtitles Tab",
  "summary": "Caption Display Language Option Missing in Live Subtitles Tab",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting and join as Host. 3. Start the meeting. 4. Navigate to the Live Subtitles tab. 5. Check the available language options."
  ],
  "actual": "The Spoken Language option is displayed, but the Caption Display Language option is missing.",
  "expected": "Both Spoken Language and Caption Display Language options should be available in the Live Subtitles tab.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-079",
  "module": "Studio /Layout",
  "sev": "Medium",
  "title": "Unable to set a background image for the layout. It still displays the message \"Not Yet Available.\"",
  "summary": "Unable to set a background image for the layout. It still displays the message \"Not Yet Available.\"",
  "steps": [
   "1.Open the studio",
   "2.Create layout",
   "3.Apply background image from the library",
   "4.We are not able to apply the background image from the library"
  ],
  "actual": "When attempting to set a background image for the layout, the system displays the message \"Not Yet Available.\"",
  "expected": "The user should be able to set and apply a background image to the layout without seeing the \"Not Yet Available\" message.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-080",
  "module": "Studio/Layouts",
  "sev": "High",
  "title": "When we create a 9:16 layout and save it to a folder, reopening the saved layout displays both 16:9 and 9:16 layouts on the Layout Edit page.",
  "summary": "When we create a 9:16 layout and save it to a folder, reopening the saved layout displays both 16:9 and 9:16 layouts on the Layout Edit page.",
  "steps": [
   "1.Open the studio layout",
   "2.Create the 9:16 layout and save the layout",
   "3.Open the saved 9:16 layout from the folder",
   "4.We are getting 16:9 and 9:16 layout in the edit page",
   "5.Need to open 9:16 layout"
  ],
  "actual": "After saving and reopening a 9:16 layout from the folder, both 16:9 and 9:16 layout options are displayed on the Layout Edit page.",
  "expected": "When reopening a saved 9:16 layout, only the 9:16 layout should be displayed on the Layout Edit page.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-081",
  "module": "Studio/Layouts",
  "sev": "Medium",
  "title": "When we change the layout name in the Computer Library and import the same layout into the same or different Layout Folder, throughing an error occurs.",
  "summary": "When we change the layout name in the Computer Library and import the same layout into the same or different Layout Folder, throughing an error occurs.",
  "steps": [
   "1.Open the studio layout",
   "2.Import the layout with name change to same folder or different folder",
   "3.Error occurs on the screen and we are getting the isse"
  ],
  "actual": "After renaming a layout in the Computer Library, importing the same layout into the Layout Folder results in an error.",
  "expected": "The renamed layout should be imported successfully into the Layout Folder without displaying any errors.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-082",
  "module": "Studio/Layouts",
  "sev": "Medium",
  "title": "By default, the layout name is set to \"Untitled Layout.\" The layout name should be mandatory, and users should be required to enter a name before saving.",
  "summary": "By default, the layout name is set to \"Untitled Layout.\" The layout name should be mandatory, and users should be required to enter a name before saving.",
  "steps": [
   "1.open layout",
   "2.Add sources to the layout and clickon the save button",
   "3.Check the name of the layout we are getting the untitled layout name is saved"
  ],
  "actual": "The system automatically assigns the name \"Untitled Layout\" by default without requiring the user to enter a layout name.",
  "expected": "The layout name should be a mandatory field. Users should be required to provide a valid layout name before saving the layout.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-083",
  "module": "Studio/Layouts",
  "sev": "High",
  "title": "When we delete a layout folder from the Layout page, the folder gets deleted, but the layouts inside the folder are displayed separately. The layouts should also be deleted along with the folder.",
  "summary": "When we delete a layout folder from the Layout page, the folder gets deleted, but the layouts inside the folder are displayed separately. The layouts should also be deleted along with the folder.",
  "steps": [
   "1.Open the layout and create the folder",
   "2.Create layouts in the folder and click on the delete",
   "3.Folder is deleted successfully",
   "4.But the layouts are not getting deleted and the layouts are displaying separately"
  ],
  "actual": "After deleting a layout folder, the folder is removed, but the layouts contained within it are displayed separately on the Layout page.",
  "expected": "When a layout folder is deleted, all the layouts inside that folder should also be deleted permanently along with the folder",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Deleting a folder moves its layouts back to Custom Layouts (the confirm dialog says so); delete the layouts themselves to send them to the Recycle bin.",
  "sheetId": ""
 },
 {
  "id": "STU-084",
  "module": "Studio/Layouts",
  "sev": "Medium",
  "title": "On the Custom Layout page, when we click on \"Teams and Broadcasters\" and then select \"Talk to Us,\" we are redirected to another page, but there is no back button to return to the previous page.",
  "summary": "On the Custom Layout page, when we click on \"Teams and Broadcasters\" and then select \"Talk to Us,\" we are redirected to another page, but there is no back button to return to the previous page.",
  "steps": [
   "1.Open the Custom Layout page.",
   "2.Click on Teams and Broadcasters.",
   "3.Click on Talk to Us.",
   "4.Observe the redirected page.",
   "5.Check whether a back button is available to return to the previous page."
  ],
  "actual": "After clicking \"Talk to Us\" under \"Teams and Broadcasters,\" the user is redirected to another page, but no back button is available to navigate to the previous page",
  "expected": "A back button should be provided on the redirected page so that users can easily navigate back to the Custom Layout page.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-085",
  "module": "Studio/Layouts",
  "sev": "High",
  "title": "Extra folder names are displayed in the Folder Filter on the Layout Editor page.",
  "summary": "Extra folder names are displayed in the Folder Filter on the Layout Editor page.",
  "steps": [
   "1.Open the Custom Layout page.",
   "2.Create or save a layout inside a folder.",
   "3.Navigate to the Layout Editor page.",
   "4.Click on the Folder Filter.",
   "5.Observe the folder names displayed in the filter."
  ],
  "actual": "Even though only one folder exists, the Folder Filter displays two folder names: Saved and Uncategorized. However, these folders are not available on the Custom Layout page.",
  "expected": "The Folder Filter should display only the folders that actually exist on the Custom Layout page. It should not display additional or non-existing folder names such as Saved and Uncategorized.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-086",
  "module": "Studio/Layouts",
  "sev": "Medium",
  "title": "No Limit on Adding Sources While Editing a Layout",
  "summary": "No Limit on Adding Sources While Editing a Layout",
  "steps": [
   "1.Open the Custom Layout page.",
   "2.Select an existing layout.",
   "3.Click on Edit Layout.",
   "4.Add multiple sources to the layout.",
   "5.Continue adding sources and observe whether any limit is applied."
  ],
  "actual": "There is no limit on the number of sources that can be added while editing a layout.",
  "expected": "A predefined limit should be applied to the number of sources that can be added to a layout. The system should prevent users from adding more sources once the maximum limit is reached.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-087",
  "module": "Studio/meeting schedule",
  "sev": "Medium",
  "title": "Time Selection Controls Do Not Have Proper Limits When Starting a Meeting.",
  "summary": "Time Selection Controls Do Not Have Proper Limits When Starting a Meeting.",
  "steps": [
   "1.Open the meeting page.",
   "2.Click on Start Meeting.",
   "3.Navigate to the time selection option.",
   "4.Try selecting the hours and minutes.",
   "5.Observe the available time selection range."
  ],
  "actual": "The hour and minute selection controls do not have proper limits.",
  "expected": "The time selection controls should have the following limits:\r\n\r\nHours: Should stop at 11.\r\n\r\nMinutes: Should stop at 59.",
  "reporter": "",
  "date": "",
  "devStatus": "Need more detail",
  "qaStatus": "Done",
  "qaNote": "Which control? The schedule uses the browser time picker (minutes stop at 59). Screenshot please.",
  "sheetId": ""
 },
 {
  "id": "STU-088",
  "module": "Studio/meeting schedule",
  "sev": "Medium",
  "title": "what is the feature use \nUsing headphones before meeting join for the host ?",
  "summary": "what is the feature use \nUsing headphones before meeting join for the host ?",
  "steps": [],
  "actual": "Using headphones",
  "expected": "",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Headphones stop the room's sound (guests, videos, music) going back into your mic: echo for viewers and Follow voice confusion. A recommendation, not a requirement.",
  "sheetId": ""
 },
 {
  "id": "STU-089",
  "module": "Studio / Casual Mode / Meeting",
  "sev": "Medium",
  "title": "Shared Screen Is Not Highlighted or Pinned on the Main Meeting Screen for Joined Participants",
  "summary": "Shared Screen Is Not Highlighted or Pinned on the Main Meeting Screen for Joined Participants",
  "steps": [
   "1. Open Studio and navigate to Casual Mode. 2. Invite a new participant using the generated meeting URL. 3. Join the meeting through the URL using a new user account on a mobile device. 4. From the host or another participant's device, initiate screen sharing. 5. Observe the shared screen on the newly joined participant's main meeting screen."
  ],
  "actual": "The shared screen is visible to the newly joined participant, but it is not highlighted or pinned on the main meeting screen. This makes it difficult to view the shared content clearly.",
  "expected": "The shared screen should either be automatically pinned and highlighted on the main meeting screen for all participants or provide an option for participants to pin the shared screen manually. The pinned shared screen should be clearly visible so participants can view its contents easily.",
  "reporter": "",
  "date": "",
  "devStatus": "Need more detail",
  "qaStatus": "",
  "qaNote": "Screen shares are spotlighted for participants. Which role and device (anchor with Teleprompter / Live Commentary open?) - screenshot please.",
  "sheetId": ""
 },
 {
  "id": "STU-090",
  "module": "Studio / Casual Mode / Meeting",
  "sev": "High",
  "title": "Screen Sharing Is Not Supported for Participants Joining Through Mobile Devices",
  "summary": "Screen Sharing Is Not Supported for Participants Joining Through Mobile Devices",
  "steps": [
   "1. Open Studio and navigate to Casual Mode. 2. Invite a new participant using the generated meeting URL. 3. Open the URL on a mobile device and join the meeting as a participant. 4. Navigate to the screen-sharing option. 5. Attempt to share the mobile device's screen."
  ],
  "actual": "The participant is unable to share their screen from the mobile device. The application displays the message: \"Screen sharing is not supported on your device.\"",
  "expected": "Participants joining through supported mobile devices should be able to use the screen-sharing functionality. If the device or browser does not support screen sharing, the application should clearly indicate the limitation and provide appropriate guidance.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Phone browsers do not support screen capture; the app says so. Share from a computer browser.",
  "sheetId": ""
 },
 {
  "id": "STU-091",
  "module": "Studio / Casual Mode / Room Settings / Matrix Control",
  "sev": "Medium",
  "title": "Participants Who Have Left the Meeting Are Still Displayed in Matrix Control",
  "summary": "Participants Who Have Left the Meeting Are Still Displayed in Matrix Control",
  "steps": [
   "1. Open Studio and navigate to Casual Mode. 2. Open Room Settings. 3. Select Matrix Control. 4. Allow one or more participants to join the active meeting. 5. Ask a participant to leave the meeting. 6. Check the participant list displayed under MatrixControl."
  ],
  "actual": "Participants who have already left the active meeting are still displayed and included in Matrix Control, along with the currently active participants.",
  "expected": "Matrix Control should display and include only participants who are currently present in the active meeting. Once a participant leaves the meeting, they should be automatically removed from Matrix Control and should no longer be considered for its operations.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Reopen",
  "qaNote": "When we disable the host-to-anchor option, we are still able to see the host in the meeting",
  "sheetId": ""
 },
 {
  "id": "STU-092",
  "module": "Studio / Casual Mode / Meeting Chat",
  "sev": "Medium",
  "title": "Late-Joining Participants Can View Previous Meeting Chat Messages",
  "summary": "Late-Joining Participants Can View Previous Meeting Chat Messages",
  "steps": [
   "1. Open Studio and navigate to Casual Mode. 2. Start a meeting with the host and anchor. 3. Exchange messages through the meeting chat for some time. 4. After approximately 20 minutes, invite a third participant using the meeting link. 5. Join the meeting as the third participant. 6. Open the chat and check the messages displayed."
  ],
  "actual": "The newly joined participant can view the chat conversation that took place before they joined the meeting.",
  "expected": "Participants should only be able to view chat messages sent from the time they join the meeting onward. Messages exchanged before their joining time should not be visible to them. Existing participants should continue to have access to the complete conversation according to their meeting access.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Late joiners see the meeting chat so far, so they can catch up.",
  "sheetId": ""
 },
 {
  "id": "STU-093",
  "module": "Studio / Casual Mode / Media Submissions",
  "sev": "High",
  "title": "Media Submission Playback Is Not Synchronized Between Host and Participants",
  "summary": "Media Submission Playback Is Not Synchronized Between Host and Participants",
  "steps": [
   "1. Open Studio and navigate to Casual Mode. 2. Start a meeting with the host, anchor, and participants. 3. Submit a video or other supported media from a participant's end during the meeting. 4. Observe the submitted media playback on the host side. 5. Observe the same media playback on the participant and anchor sides. 6. Allow the video to complete one playback cycle and check whether it loops consistently across all users."
  ],
  "actual": "The submitted video plays continuously in a loop on the host side. However, on the participant and anchor sides, it plays only once and does not continue looping as it does on the host side.",
  "expected": "Submitted media playback should remain synchronized across the host, anchor, and participant sides. If the media is configured to play in a loop, it should continue looping consistently for all users.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-094",
  "module": "Studio / Casual Mode / Participant Submissions",
  "sev": "High",
  "title": "Download Current Submission Opens Video Instead of Downloading It",
  "summary": "Download Current Submission Opens Video Instead of Downloading It",
  "steps": [
   "1. Open Studio and navigate to Casual Mode. 2. Start a meeting and receive video submissions from participants. 3. Select a participant's submitted video. 4. Click Download Current. 5. Observe the behavior. 6. If the video opens in full-screen mode, click Back to return to the meeting. 7. Open the video player controls and click the Download icon."
  ],
  "actual": "The video opens in full-screen mode instead of being downloaded. Clicking Back returns to the meeting without downloading the video. Even when clicking the Download icon in the video player, the download does not happen as expected.",
  "expected": "Clicking Download Current or the Download icon should trigger the actual download of the selected participant's submitted video to the device. The video should not simply open in full-screen mode, and the user should be able to return to the meeting without losing the download action.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-095",
  "module": "Studio / Casual Mode / Meeting",
  "sev": "High",
  "title": "Participant Joining Status Is Not Synchronized Between Host and Participant",
  "summary": "Participant Joining Status Is Not Synchronized Between Host and Participant",
  "steps": [
   "1. Navigate to Studio and open Casual Mode. 2. Invite a participant using the generated meeting link. 3. Copy the generated link and open it in another tab on the same system. 4. Try to join as a participant. 5. Wait for host approval. 6. During a network issue, click Admit from the host side. 7. Observe the meeting status on both sides. 8. Verify the participant's connection status."
  ],
  "actual": "The host side displays the participant as joined, while the participant side continues to display Waiting or Joining Room. After some time, the participant is automatically removed. Sometimes the participant side shows joined while the host side shows left, or vice versa.",
  "expected": "The joining status should be synchronized between the host and participant sides. Once admitted, both sides should display the correct status, and the participant should remain connected without being automatically removed.",
  "reporter": "",
  "date": "",
  "devStatus": "Need to discuss",
  "qaStatus": "",
  "qaNote": "Reconnect during join on a weak network; please share the browser console log ([ConnState] lines).",
  "sheetId": ""
 },
 {
  "id": "STU-096",
  "module": "Graphics Module / Templates / Recycle Bin",
  "sev": "High",
  "title": "Deleted Graphics Template Is Not Moved to Recycle Bin and Confirmation Message Is Incorrect",
  "summary": "Deleted Graphics Template Is Not Moved to Recycle Bin and Confirmation Message Is Incorrect",
  "steps": [
   "1. Open the Graphics module. 2. View the templates displayed on the main screen. 3. Select an already-created template. 4. Click Delete. 5. Observe the confirmation message displayed. 6. Confirm the deletion. 7. Navigate to the Recycle Bin and verify whether the deleted template is available."
  ],
  "actual": "The confirmation message incorrectly mentions that \"Breaking News\" will be moved to the Recycle Bin and retained for 30 days. Additionally, the deleted template is not moved to the Recycle Bin.",
  "expected": "The confirmation message should dynamically display the name of the selected template and clearly state that it will be retained in the Recycle Bin for 30 days. Upon confirming deletion, the selected template should be successfully moved to the Recycle Bin and remain available there for 30 days.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-097",
  "module": "Graphics Module / Properties Panel",
  "sev": "Medium",
  "title": "Missing Numeric Field Validations in Graphics Module",
  "summary": "Missing Numeric Field Validations in Graphics Module",
  "steps": [
   "1. Open the Graphics module. 2. Select a graphic element or source. 3. Open its properties panel. 4. Enter extremely large numbers, negative values, decimal values, or non-numeric characters in X Axis, Y Axis, Width, Height, Radius, Size, and Weight fields. 5. Observe the field acceptance and application behavior."
  ],
  "actual": "The fields accept unlimited or invalid values without appropriate validation, potentially causing incorrect positioning, sizing, or rendering of graphic elements.",
  "expected": "Implement field-level numeric validations: X Axis and Y Axis should accept finite numeric values within supported canvas limits. Width and Height should accept positive numeric values greater than zero. Radius should accept non-negative numeric values. Size should accept positive numeric values. Weight should accept only supported values within its defined range. Reject non-numeric characters, Infinity, NaN, and values outside the defined limits. Display clear validation messages for invalid entries.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-098",
  "module": "Graphics Module / Preview Page",
  "sev": "Medium",
  "title": "Unable to Select Graphics Sources from Preview Page",
  "summary": "Unable to Select Graphics Sources from Preview Page",
  "steps": [
   "1. Open the Graphics module. 2. Click Open or select any required graphic source. 3. Navigate to the Preview page. 4. Search for a graphic source directly from the Preview page. 5. Click the required search result. 6. Verify whether the selected source is available for editing."
  ],
  "actual": "The searched graphic source is not selected when clicked from the Preview page. As a result, the user is unable to proceed with the required editing.",
  "expected": "The user should be able to select the searched graphic source directly from the Preview page. Once selected, the source should be properly loaded and available for editing.",
  "reporter": "",
  "date": "",
  "devStatus": "Need more detail",
  "qaStatus": "",
  "qaNote": "Which screen is the Preview page? Graphics has no Preview page; the only search is the Layout behind dropdown. Screenshot please.",
  "sheetId": ""
 },
 {
  "id": "STU-099",
  "module": "Graphics Module / Landscape and Portrait Layouts",
  "sev": "High",
  "title": "Landscape and Portrait Layouts Do Not Support Applying Sources Simultaneously",
  "summary": "Landscape and Portrait Layouts Do Not Support Applying Sources Simultaneously",
  "steps": [
   "1. Open the Graphics module. 2. Select both Landscape and Portrait layouts. 3. Choose the required sources, including the Top Band. 4. Configure the required changes for both layouts. 5. Click Apply and verify the changes in both layouts. 6. Repeat the process by uploading or applying the sources individually to each layout."
  ],
  "actual": "When both Landscape and Portrait layouts are selected, the required sources and Top Band changes are not applied to both layouts simultaneously. However, the sources can be uploaded and applied successfully when each layout is handled individually.",
  "expected": "When both Landscape and Portrait layouts are selected, all configured sources and Top Band changes should be applied to both layouts simultaneously. Users should not need to upload or configure the same sources separately for each layout.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "In Both view one canvas is edited at a time; editing both at once is planned as a follow-up.",
  "sheetId": ""
 },
 {
  "id": "STU-100",
  "module": "Graphics Module / Background Media",
  "sev": "Medium",
  "title": "Background Media Selection Is Not Available When Multiple Media Files Are Added",
  "summary": "Background Media Selection Is Not Available When Multiple Media Files Are Added",
  "steps": [
   "1. Open the Graphics module. 2. Select a source or layer such as Top Band, Lower Ticker, Beginning Slogan, L1 Data, Time, U Band, J Band, O Band, S Band, Stacks, Image Box, or Frame. 3. Navigate to the Background Media option. 4. Add more than one media file. 5. Observe whether you can select a specific media file to apply as the background."
  ],
  "actual": "The system automatically selects the first uploaded media file as the background. There is no option to select a different media file when multiple media files are available.",
  "expected": "The Background Media option should provide a selection control, such as a dropdown or media picker, allowing users to choose any one of the uploaded media files. The selected media should be applied to the respective source or layer.",
  "reporter": "",
  "date": "",
  "devStatus": "As per design",
  "qaStatus": "",
  "qaNote": "Several images play as a slideshow (set Slideshow seconds / image). To use one file, remove the others.",
  "sheetId": ""
 },
 {
  "id": "STU-101",
  "module": "Studio Module / Check Your Camera Screen",
  "sev": "Medium",
  "title": "Unable to Change User Name on Check Your Camera Screen",
  "summary": "Unable to Change User Name on Check Your Camera Screen",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting. 3. Join the meeting as Host. 4. Navigate to the Check Your Camera screen. 5. Try to change the user name."
  ],
  "actual": "The user is unable to change their name on the Check Your Camera screen.",
  "expected": "The user should be able to change their name on the Check Your Camera screen before joining the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-102",
  "module": "Studio Module / Casual Mode / Brand Kit",
  "sev": "Medium",
  "title": "Unable to Upload Brand Logo in Casual Mode",
  "summary": "Unable to Upload Brand Logo in Casual Mode",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting and join as Host. 3. Switch to Casual mode. 4. Navigate to Brand Kit and try to upload a brand logo."
  ],
  "actual": "The user is unable to upload the brand logo in Casual mode.",
  "expected": "The Host should be able to upload and use a brand logo in Casual mode.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-103",
  "module": "studio/Meeting -Anchor",
  "sev": "Medium",
  "title": "Teleprompter Timer Starts Running Even When the Script Is Not Enabled by the Host.",
  "summary": "Teleprompter Timer Starts Running Even When the Script Is Not Enabled by the Host.",
  "steps": [
   "1.Open the meeting page as a host.",
   "2.Join the meeting as an anchor.",
   "3.Keep the script turned OFF from the host side.",
   "4.On the anchor side, click on the Script section.",
   "5.Observe the Teleprompter screen and timer."
  ],
  "actual": "Even when the host has not enabled the script, clicking on the script from the anchor side starts the timer on the Teleprompter screen",
  "expected": "The Teleprompter timer and script should not start when the host has kept the script turned OFF. The timer should start only after the host enables the script.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-104",
  "module": "Studio / Meeting / Recording",
  "sev": "High",
  "title": "Studio Meeting Recordings Are Not Uploaded to the Recording Section",
  "summary": "Studio Meeting Recordings Are Not Uploaded to the Recording Section",
  "steps": [
   "1. Open the Studio module and start or join a Studio meeting. 2. Enable recording during the meeting. 3. End the meeting after recording. 4. Navigate to the Story module and open the Recording section. 5. Verify whether the Studio meeting recording is available."
  ],
  "actual": "The recordings from Studio meetings are not uploaded or displayed in the Recording section under Story after the meeting is completed.",
  "expected": "After the Studio meeting is completed, the recording should be uploaded successfully and displayed in the Recording section under Story, allowing users to access and play the recorded meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-105",
  "module": "Studio meeting",
  "sev": "High",
  "title": "Screen Mirroring is not working and displays \"Waiting for the Anchor's Prompter\" message in meeting",
  "summary": "Screen Mirroring is not working and displays \"Waiting for the Anchor's Prompter\" message in meeting",
  "steps": [
   "1.Open the application.",
   "2.Join a session as an anchor.",
   "3.Navigate to the Screen Mirror option.",
   "4.Click on the Mirror option.",
   "5.Observe the screen mirroring status."
  ],
  "actual": "When clicking on the Mirror option, the message \"Waiting for the Anchor's Prompter\" is displayed, and the screen mirroring does not start.",
  "expected": "Screen Mirroring should start successfully and display the anchor's teleprompter content without showing the waiting message when the prompter is available.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-106",
  "module": "Studio meeting",
  "sev": "High",
  "title": "Play and Pause button status is not updating in the script file.",
  "summary": "Play and Pause button status is not updating in the script file.",
  "steps": [
   "1.Open the application.",
   "2.Navigate to the Teleprompter section.",
   "3.Open any existing script file.",
   "4.Click the Play button.",
   "5.Observe the button status in the script file.",
   "6.Click the Pause button.",
   "7.Observe whether the button status is updated."
  ],
  "actual": "The Play and Pause button status is not updated correctly in the script file when switching between Play and Pause.",
  "expected": "The Play and Pause button status should update immediately and correctly in the script file based on the selected action.",
  "reporter": "",
  "date": "",
  "devStatus": "Working fine",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-107",
  "module": "Studio meeting",
  "sev": "High",
  "title": "Screen share image remains visible in Studio after the anchor stops screen sharing from an Android mobile device.",
  "summary": "Screen share image remains visible in Studio after the anchor stops screen sharing from an Android mobile device.",
  "steps": [
   "1.Open the Studio application.",
   "2.Join a session as an anchor using an Android mobile device.",
   "3.Start screen sharing from the Android mobile device.",
   "4.Verify that the shared screen is visible in Studio.",
   "5.Stop screen sharing from the Android mobile device.",
   "6.Observe the screen-sharing area in Studio."
  ],
  "actual": "The screen-sharing image remains visible in Studio even after the anchor stops screen sharing from the Android mobile device.",
  "expected": "The screen-sharing image should disappear from Studio immediately after the anchor stops screen sharing from the Android mobile device.",
  "reporter": "",
  "date": "",
  "devStatus": "As per UX",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-108",
  "module": "All clients web,android and ios mobile for teleprompt in meeting",
  "sev": "High",
  "title": "ALL clinets Teleprompter – Following Your Voice feature is not working as expected.",
  "summary": "ALL clinets Teleprompter – Following Your Voice feature is not working as expected.",
  "steps": [
   "1.Open the application.",
   "2.Navigate to the Teleprompter section.",
   "3.Load or open a teleprompter script.",
   "4.Enable the Following Your Voice feature.",
   "5.Start reading the script aloud.",
   "6.Observe the teleprompter text scrolling behavior."
  ],
  "actual": "The Following Your Voice feature does not work as expected. The teleprompter does not properly track the anchor's voice, resulting in incorrect or inconsistent text scrolling.",
  "expected": "The Following Your Voice feature should accurately recognize the anchor's speech and automatically scroll the teleprompter text in sync with the anchor's reading pace.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Not working as excepted",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-109",
  "module": "Studio Module",
  "sev": "High",
  "title": "Studio Module Automatically Refreshes Every Minute",
  "summary": "Studio Module Automatically Refreshes Every Minute",
  "steps": [
   "1. Log in to the application. 2. Open the Studio module. 3. Keep the Studio page open and observe its behavior for a few minutes."
  ],
  "actual": "The Studio module automatically refreshes the page every minute without any user interaction.",
  "expected": "The Studio module should remain stable without automatically refreshing unless the user manually refreshes the page or a refresh is required.",
  "reporter": "",
  "date": "",
  "devStatus": "Need more detail",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-110",
  "module": "Studio / Meeting / Chat / iOS App",
  "sev": "Medium",
  "title": "New Chat Messages Are Displayed in Inconsistent Order Between iOS and Studio Host",
  "summary": "New Chat Messages Are Displayed in Inconsistent Order Between iOS and Studio Host",
  "steps": [
   "1. Open the Studio web application and start a meeting as the host. 2. Join the same meeting through the iOS app as a participant. 3. Exchange chat messages between the Studio host and the iOS participant. 4. Observe the order in which newly received messages appear on both sides."
  ],
  "actual": "Newly added messages appear at the bottom of the chat on the iOS participant's side, whereas they appear at the top of the chat on the Studio host's side.",
  "expected": "The chat messages should follow a consistent chronological order on both the iOS participant and Studio host sides. Newly added messages should appear in the same position on both platforms.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-111",
  "module": "Studio / Meeting / Screen Sharing / iOS App",
  "sev": "High",
  "title": "Simultaneous Screen Sharing Is Allowed from iOS Participant and Studio Host",
  "summary": "Simultaneous Screen Sharing Is Allowed from iOS Participant and Studio Host",
  "steps": [
   "1. Open the Studio web application and start a meeting as the host. 2. Join the same meeting as a participant using the iOS app. 3. From the iOS participant's side, initiate screen sharing. 4. While the participant's screen sharing is active, initiate screen sharing from the Studio host's side. 5. Observe whether both screen-sharing sessions remain active simultaneously."
  ],
  "actual": "Both the iOS participant and the Studio host are able to share their screens at the same time during the meeting.",
  "expected": "The application should prevent simultaneous screen sharing if only one active screen-sharing session is supported. When one user starts sharing, the other user's screen-sharing option should be restricted or the existing sharing session should be handled according to the defined meeting rules.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "One share at a time; the host can take over after a confirm.",
  "sheetId": ""
 },
 {
  "id": "STU-112",
  "module": "Studio Module / Invite People / Meeting Room",
  "sev": "High",
  "title": "Removed Invitee Can Still Join Meeting Using Previously Sent Invitation Link",
  "summary": "Removed Invitee Can Still Join Meeting Using Previously Sent Invitation Link",
  "steps": [
   "1. Open the Studio module. 2. Click golive and join as Host. 3. Open the Invite People popup and invite a participant. 4. Now invited participant will join and leave 4.Remove the participant from the invite list using the Remove Invite option. 6. Ask the removed participant to access the meeting using the previously sent invitation link. 7. Check the participant's status in the meeting."
  ],
  "actual": "The removed participant can still join the meeting using the previously sent invitation link and appears in the Backstage, even though all Room Settings options are disabled.",
  "expected": "Removing an invitee should revoke their access through the previously sent invitation link. The participant should not be able to join the meeting or appear in the Backstage.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "Remove invite now revokes the link; Rejoin shows the invalid-link page.",
  "sheetId": ""
 },
 {
  "id": "STU-113",
  "module": "Studio Module / Go Live / Choose Your Input / Resume Meeting",
  "sev": "High",
  "title": "Camera and Microphone Status Changes Unexpectedly After Resuming Meeting",
  "summary": "Camera and Microphone Status Changes Unexpectedly After Resuming Meeting",
  "steps": [
   "1. Open the Studio module. 2. Click Go Live and navigate to the \"Choose Your Input\" screen. 3. Click Skip to join the meeting without enabling the camera and microphone. 4. Close the browser tab while the meeting is active. 5. Reopen the Studio module and click Resume for the same meeting. 6. Check the camera and microphone status."
  ],
  "actual": "The Host initially joins without camera and microphone access after clicking Skip. However, after closing the tab and resuming the meeting, the camera and microphone appear enabled.",
  "expected": "The camera and microphone should retain their previously selected states after resuming the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "Resume keeps the setup choice (Skip = cam/mic off).",
  "sheetId": ""
 },
 {
  "id": "STU-114",
  "module": "Studio Module / Custom Inputs / Meeting Room",
  "sev": "High",
  "title": "Custom Inputs Not Displayed After host Joins in meeting",
  "summary": "Custom Inputs Not Displayed After host Joins in meeting",
  "steps": [
   "1. Open the Studio module. 2. Navigate to Custom Inputs and configure the required inputs. 3. Join the meeting using the configured Custom Inputs. 4. Check the available inputs after joining the meeting."
  ],
  "actual": "The configured Custom Inputs are not displayed after the participant joins the meeting.",
  "expected": "All configured Custom Inputs should be displayed and available after the participant joins the meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "The room's video menu lists the Custom inputs to switch to.",
  "sheetId": ""
 },
 {
  "id": "STU-115",
  "module": "Studio Module / Record / Go Live",
  "sev": "Medium",
  "title": "Studio Page Opens in a New Tab and Redirects to Choose Your Video Input When Clicking Record or Go Live",
  "summary": "Studio Page Opens in a New Tab and Redirects to Choose Your Video Input When Clicking Record or Go Live",
  "steps": [
   "1. Open the Studio module. 2. Click the Record or Go Live button. 3. Observe the browser behavior and navigation flow."
  ],
  "actual": "The Studio page opens again in a new browser tab and redirects to the Choose Your Video Input screen.",
  "expected": "The Record or Go Live action should proceed within the existing tab without opening another Studio tab or unexpectedly redirecting the user.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-116",
  "module": "Studio Module / Meeting / Teleprompter",
  "sev": "Medium",
  "title": "Anchor Can Still Access Teleprompter Script After Host Stops Teleprompter",
  "summary": "Anchor Can Still Access Teleprompter Script After Host Stops Teleprompter",
  "steps": [
   "1. Open the Studio module. 2. Click Go Live and join the meeting as Host. 3. Allow an Anchor to join the meeting. 4. Enable the Teleprompter and share the script with the Anchor. 5. Stop the Teleprompter from the Host screen. 6. Check the Teleprompter on the Anchor screen."
  ],
  "actual": "The Anchor can still access and view the Teleprompter script even after the Host stops the Teleprompter.",
  "expected": "Once the Host stops the Teleprompter, the script should no longer be accessible to the Anchor unless the Host enables it again.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-117",
  "module": "Studio Module / Anchor Screen / Teleprompter",
  "sev": "Medium",
  "title": "Teleprompter Play and Pause Controls Not Working on Anchor Side",
  "summary": "Teleprompter Play and Pause Controls Not Working on Anchor Side",
  "steps": [
   "1. Open the Studio module. 2. Click Go Live and join the meeting as Host. 3. Allow an Anchor to join the meeting. 4. Enable the Teleprompter and share the script with the Anchor. 5. On the Anchor screen, click the Play and Pause controls."
  ],
  "actual": "The Play and Pause controls are not functioning on the Anchor side.",
  "expected": "The Anchor should be able to play and pause the Teleprompter script using the respective controls.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-118",
  "module": "Studio Module / Host Screen / Teleprompter",
  "sev": "Medium",
  "title": "Host Unable to Access Teleprompter After Using Up/Down Arrow Controls",
  "summary": "Host Unable to Access Teleprompter After Using Up/Down Arrow Controls",
  "steps": [
   "1. Open the Studio module. 2. Click Go Live and join the meeting as Host. 3. Start the Teleprompter. 4. Click the Up or Down arrow controls for selected teleprompt. 5. Try to access or interact with the Teleprompter again."
  ],
  "actual": "The Teleprompter becomes inaccessible to the Host after clicking the Up or Down arrow controls.",
  "expected": "The Host should be able to access and interact with the Teleprompter even after using the Up/Down arrow controls.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "Please retest; share exact steps if it repeats.",
  "sheetId": ""
 },
 {
  "id": "STU-119",
  "module": "Studio Module / Host Screen / Brand Kit / Banner",
  "sev": "Medium",
  "title": "Brand Logo Not Available for Banner Selection on Host Side",
  "summary": "Brand Logo Not Available for Banner Selection on Host Side",
  "steps": [
   "1. Open the Studio module. 2. Click Go Live and join the meeting as Host. 3. Navigate to the Banner settings. 4. Try to select a brand logo for the banner. 5. Click the option to add a logo to Brand Kit."
  ],
  "actual": "The Host cannot see or select the uploaded brand logo. Only the message \"Add a logo in Brand Kit to use it\" is displayed.",
  "expected": "The Host should be able to view and select the available brand logo for the banner. If no logo is available, the option to add one to Brand Kit should work correctly.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-120",
  "module": "Video Playback – Casual Mode.",
  "sev": "High",
  "title": "Pausing the video in Casual Mode also pauses video playback for the Anchor.",
  "summary": "Pausing the video in Casual Mode also pauses video playback for the Anchor.",
  "steps": [
   "1. Launch the application. 2. Navigate to Casual Mode. 3. Start playing a video. 4. Ensure the video is playing for the Anchor. 5. Pause the video from the Casual Mode interface. 6. Observe the video playback on the Anchor side."
  ],
  "actual": "The video gets paused in Casual Mode, but it continues playing on the Anchor side.",
  "expected": "When the user pauses the video in Casual Mode, the video should also pause on the Anchor side simultaneously, ensuring synchronized playback.",
  "reporter": "",
  "date": "",
  "devStatus": "Duplicate",
  "qaStatus": "",
  "qaNote": "Same as row 33 (marked Fixed). If it happens again, reopen row 33 with the build and steps.",
  "sheetId": ""
 },
 {
  "id": "STU-121",
  "module": "Video Playback – Casual Mode.",
  "sev": "High",
  "title": "Video starts from the current playback position when the Anchor joins the meeting midway.",
  "summary": "Video starts from the current playback position when the Anchor joins the meeting midway.",
  "steps": [
   "1. Launch the application. 2. Start a meeting in Casual Mode. 3. Play a video and allow it to run for some time. 4. Ask the Anchor to join the meeting while the video is already playing. 5. Observe the video playback on the Anchor side."
  ],
  "actual": "When the Anchor joins the meeting midway, the video starts playing from the beginning instead of the current playback position.",
  "expected": "When the Anchor joins the meeting midway, the video should start from the current playback position and remain synchronized with the other participants.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-122",
  "module": "Video Playback – Casual Mode.",
  "sev": "Medium",
  "title": "Verify that the forwarded video is not visible to the Anchor and Participant during the meeting.",
  "summary": "Verify that the forwarded video is not visible to the Anchor and Participant during the meeting.",
  "steps": [
   "1. Launch the application. 2. Start a meeting in Casual Mode. 3. Play a video as the Host. 4. Forward the video to a different timestamp. 5. Observe the video playback on the Anchor and Participant sides."
  ],
  "actual": "When the Host forwards the video, the Anchor and Participant are unable to see the forwarded video during the meeting.",
  "expected": "When the Host forwards the video, the Anchor and Participant should be able to view the video seamlessly from the forwarded timestamp.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-123",
  "module": "Teleprompter – Host.",
  "sev": "Medium",
  "title": "Verify that the Host cant navigate back to the first line in the Teleprompter",
  "summary": "Verify that the Host cant navigate back to the first line in the Teleprompter",
  "steps": [
   "1. Launch the application. 2. Join or start a meeting as Host. 3. Open the Teleprompter. 4. Scroll down through the script. 5. Check whether an option is available to navigate back to the first line."
  ],
  "actual": "The Host does not have an option to move directly to the first line in the Teleprompter.",
  "expected": "The Host should have an option to navigate directly to the first line of the Teleprompter.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "Back to top added.",
  "sheetId": ""
 },
 {
  "id": "STU-124",
  "module": "Audio/Video – Profile Image.",
  "sev": "Medium",
  "title": "Verify that the updated thumbnail/profile image is not visible to all other participants when an Audio User changes their profile image during the meeting.",
  "summary": "Verify that the updated thumbnail/profile image is not visible to all other participants when an Audio User changes their profile image during the meeting.",
  "steps": [
   "1. Launch the application. 2. Start or join a meeting with a Host, Anchor, and Participant. 3. Join the meeting as an Audio User. 4. Change the thumbnail/profile image during the meeting. 5. Ask the other participants to check the updated profile image. 6. Observe whether the updated image is visible to everyone in the meeting."
  ],
  "actual": "When the Audio User changes their thumbnail/profile image, the other participants are unable to see the updated image during the meeting.",
  "expected": "When the Audio User changes their thumbnail/profile image, the updated image should be visible to all other participants in the meeting without requiring them to rejoin.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "Updates within 15 s for web; native apps must save the image via the API.",
  "sheetId": ""
 },
 {
  "id": "STU-125",
  "module": "Studio / Casual Mode / Meeting / Subtitles",
  "sev": "High",
  "title": "Audio and Subtitles Are Not Synchronized During the Meeting",
  "summary": "Audio and Subtitles Are Not Synchronized During the Meeting",
  "steps": [
   "1. Open Studio and navigate to Casual Mode. 2. Start or join a meeting with participants. 3. Enable the Subtitles option. 4. Ask a participant to speak during the meeting. 5. Observe the synchronization between the participant's audio and the generated subtitles."
  ],
  "actual": "The participant's audio plays first, while the subtitles appear after a noticeable delay. As a result, the displayed subtitles do not match the spoken conversation in real time.",
  "expected": "The subtitles should be generated and displayed in synchronization with the participant's speech, with minimal delay, so that the displayed text accurately matches the audio in real time.",
  "reporter": "",
  "date": "",
  "devStatus": "Known gap",
  "qaStatus": "",
  "qaNote": "Live subtitles are recognised from speech, so they show slightly after the audio.",
  "sheetId": ""
 },
 {
  "id": "STU-126",
  "module": "Studio / Casual Mode / Scheduled Meeting",
  "sev": "High",
  "title": "Invited User Can Take Over an Active Meeting Using the Resume Option",
  "summary": "Invited User Can Take Over an Active Meeting Using the Resume Option",
  "steps": [
   "1. Log in to Studio using the main host account. 2. Schedule a meeting and start the meeting in Casual Mode. 3. While the meeting is active, invite another person associated with the same cloud account. 4. Log in to the invited person's account. 5. Observe that the active meeting is displayed with a Resume button. 6. Click the Resume button."
  ],
  "actual": "The invited person is able to resume and take over the active meeting. The main host's meeting gets disconnected, and the meeting session is transferred to the invited person.",
  "expected": "The invited person should not be able to take over or resume a meeting that is already active under the main host's session. The main host's meeting should remain active without being disconnected or transferred to another user.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "Another device needs the host's Allow to take over.",
  "sheetId": ""
 },
 {
  "id": "STU-127",
  "module": "Studio / Casual Mode / Meeting / Live Streaming",
  "sev": "High",
  "title": "Muted Participants' Voices Are Still Audible on the YouTube Live Stream",
  "summary": "Muted Participants' Voices Are Still Audible on the YouTube Live Stream",
  "steps": [
   "1. Log in to Studio and start a meeting in Casual Mode with multiple participants. 2. Configure the meeting to stream live on YouTube or through the available streaming link. 3. Ensure all participants are muted from their respective devices. 4. Also mute the participants from the host's audio controls. 5. Check the audio output on the YouTube live stream or streaming link."
  ],
  "actual": "Even though all participants are muted from their devices and also from the host's audio controls, their voices are still audible in the live stream.",
  "expected": "The voices of muted participants should not be transmitted to the YouTube live stream or any other streaming destination. Muting a participant from either the participant side or the host's audio controls should be properly reflected in the live stream audio output.",
  "reporter": "",
  "date": "",
  "devStatus": "Need more detail",
  "qaStatus": "",
  "qaNote": "No code path found: self-mute stops the mic, host mute mutes the output. Likely the host's own mic picking up the room; retest with the host on headphones / host mic muted.",
  "sheetId": ""
 },
 {
  "id": "STU-128",
  "module": "Studio / Casual Mode / Meeting / RTMP Streaming",
  "sev": "High",
  "title": "RTMP Connection Fails Intermittently During a Scheduled Casual Mode Meeting",
  "summary": "RTMP Connection Fails Intermittently During a Scheduled Casual Mode Meeting",
  "steps": [
   "1. Log in to Studio and schedule a meeting in Casual Mode. 2. Open the RTMP streaming connection option. 3. Attempt to connect using the RTMP link. 4. Observe the connection status and error message. 5. Retry the connection after some time and monitor its stability."
  ],
  "actual": "The initial connection attempt fails with an \"Attempt Session Failed\" message and an unknown error. After some time, the RTMP connection is established, but it subsequently disconnects intermittently.",
  "expected": "The RTMP connection should be established successfully on the first attempt and remain stable throughout the meeting without unexpected disconnections or unknown errors.",
  "reporter": "",
  "date": "",
  "devStatus": "In progress",
  "qaStatus": "",
  "qaNote": "Custom RTMP destination output; under investigation.",
  "sheetId": ""
 },
 {
  "id": "STU-129",
  "module": "Studio Module / Where Do You Want to Go Live",
  "sev": "Medium",
  "title": "Confirmation Popup Missing When Skipping Recording Setup",
  "summary": "Confirmation Popup Missing When Skipping Recording Setup",
  "steps": [
   "1. Open the Studio module. 2. Create a new meeting and join as Host. 3. Navigate to the \"Where Do You Want to Go Live?\" screen. 4. Select the \"Record the Session\" option. 5. Click \"Skip for Now\"."
  ],
  "actual": "The user can skip the recording setup without receiving a confirmation prompt.",
  "expected": "A confirmation popup should appear when the user clicks \"Skip for Now\" after selecting \"Record the Session\", allowing the user to confirm or cancel the action.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-130",
  "module": "Studio / Meeting / Live Streaming / YouTube Destination",
  "sev": "High",
  "title": "Unable to Change YouTube Stream Privacy or Destination Settings from Private to Public",
  "summary": "Unable to Change YouTube Stream Privacy or Destination Settings from Private to Public",
  "steps": [
   "1. Log in to Studio and start a meeting. 2. Connect the meeting to YouTube using the streaming option. 3. Observe that the YouTube stream is initially set to Private. 4. Attempt to change the stream visibility from Private to Public. 5. Try to modify the destination settings."
  ],
  "actual": "The YouTube stream remains Private, and the user is unable to make changes to the stream visibility or other destination settings.",
  "expected": "The user should be able to modify the YouTube stream visibility from Private to Public and update the available destination settings successfully.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-131",
  "module": "Studio / Live Session / Schedule",
  "sev": "Medium",
  "title": "Session Start and Stop Timers Allow Past Date and Time Selection",
  "summary": "Session Start and Stop Timers Allow Past Date and Time Selection",
  "steps": [
   "1. Log in to Studio. 2. Navigate to the Live Session scheduling section. 3. Attempt to set the session start timer to a past date and time. 4. Attempt to set the session stop timer to a past date and time."
  ],
  "actual": "The session start and stop timers allow the selection of past dates and times.",
  "expected": "The session start and stop timers should allow only future dates and times. Past dates and times should be restricted through proper date and time validation.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-132",
  "module": "Studio / Meeting / Pool / Master Page (On Air)",
  "sev": "High",
  "title": "Host Automatically Appears On Air Without Being Selected from the Pool",
  "summary": "Host Automatically Appears On Air Without Being Selected from the Pool",
  "steps": [
   "1. Log in to Studio as the host. 2. Start or join a meeting and keep the host online. 3. Navigate to the Pool section. 4. Do not select the host to display on the Master Page (On Air). 5. Observe the Master Page output."
  ],
  "actual": "The host automatically appears on the Master Page (On Air) even though the host has not been selected from the Pool.",
  "expected": "The host should appear on the Master Page (On Air) only after being explicitly selected from the Pool. Being online in the meeting or present in the Pool should not automatically put the host on air.",
  "reporter": "",
  "date": "",
  "devStatus": "Functionality",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-133",
  "module": "Projects / Video Editor",
  "sev": "High",
  "title": "Project Duration Does Not Match Total Recorded Content in Editor",
  "summary": "Project Duration Does Not Match Total Recorded Content in Editor",
  "steps": [
   "1. Open Studio and start a meeting with recording enabled. 2. Stop and restart the recording multiple times during the meeting. 3. Complete the meeting and stop the final recording. 4. Check the recorded video's duration in Projects. 5. Open the same recording in Video Editor and verify the total recorded content."
  ],
  "actual": "Projects displays only the duration of the first recording segment, whereas Video Editor contains all recorded segments from the meeting.",
  "expected": "Projects should display the combined duration of all recording segments, matching the total recorded content available in Video Editor.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-134",
  "module": "Studio / Meeting / Pool / Preview Page / Master Page (On Air)",
  "sev": "High",
  "title": "Reporter Preview Is Empty in the Pool When Joining from the iOS App",
  "summary": "Reporter Preview Is Empty in the Pool When Joining from the iOS App",
  "steps": [
   "1. Log in to Studio as the host/organizer and start a meeting. 2. Join the meeting from the Bonding iOS app as a reporter. 3. Ensure both the host and reporter are available in the Pool. 4. Select both the host and reporter to display on the Preview Page and Master Page (On Air). 5. Check the reporter's preview in the Pool."
  ],
  "actual": "The host and reporter are visible on the Preview Page and Master Page (On Air), but the reporter's preview in the Pool appears empty.",
  "expected": "The reporter's live preview should be displayed correctly in the Pool when the reporter joins from the iOS app, just like the host's preview.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-135",
  "module": "Studio / Projects",
  "sev": "Medium",
  "title": "Processing Tag Not Displayed on Video While Live Session Is Ongoing",
  "summary": "Processing Tag Not Displayed on Video While Live Session Is Ongoing",
  "steps": [
   "1. Open Studio and start a Live session. 2. Check the video entry in the Projects module while the Live session is still ongoing."
  ],
  "actual": "The Processing tag is not displayed on the video even though the Live session has not ended.",
  "expected": "The video should display the Processing tag until the Live session ends and processing is completed.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-136",
  "module": "Audience Poll – QR Code.",
  "sev": "Medium",
  "title": "Audience Poll QR Code Adjustment Popup Is Not Displayed Properly.",
  "summary": "Audience Poll QR Code Adjustment Popup Is Not Displayed Properly.",
  "steps": [
   "1. Launch the application. 2. Start a meeting. 3. Enable the Audience Poll QR code on the screen. 4. Open the QR code adjustment popup. 5. Observe the popup display."
  ],
  "actual": "The QR code adjustment popup is not displayed properly on the screen.",
  "expected": "The QR code adjustment popup should be displayed properly with all options and elements clearly visible and aligned.",
  "reporter": "",
  "date": "",
  "devStatus": "Done",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-137",
  "module": "Studio / Popup",
  "sev": "Low",
  "title": "Popup Close Icon Alignment Needs Adjustment",
  "summary": "Popup Close Icon Alignment Needs Adjustment",
  "steps": [
   "1. Open the relevant popup in Studio. 2. Check the position of the Close icon."
  ],
  "actual": "The Close icon is not positioned on the right side of the popup.",
  "expected": "The Close icon should be aligned to the top-right corner of the popup.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-138",
  "module": "Studio / Casual Mode / Layouts",
  "sev": "High",
  "title": "Casual Mode Layouts Not Working",
  "summary": "Casual Mode Layouts Not Working",
  "steps": [
   "1. Open Studio. 2. Start a Casual meeting. 3. Try selecting the available layouts."
  ],
  "actual": "Two layouts are not functioning as expected in Casual mode.",
  "expected": "All available layouts should work correctly in Casual mode.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-139",
  "module": "Studio / Casual Mode / Subtitles",
  "sev": "Medium",
  "title": "Video and Host Subtitles Overlap During Paused Video Playback",
  "summary": "Video and Host Subtitles Overlap During Paused Video Playback",
  "steps": [
   "1. Start a Casual meeting with video playback and subtitles enabled. 2. Pause the video while the Host continues speaking. 3. Observe the subtitle display."
  ],
  "actual": "Video subtitles and Host speech subtitles overlap on the screen.",
  "expected": "Video subtitles and Host speech subtitles should be displayed separately without overlapping.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-140",
  "module": "Studio / Subtitles",
  "sev": "High",
  "title": "Subtitles Display in Another Language When No One Is Speaking",
  "summary": "Subtitles Display in Another Language When No One Is Speaking",
  "steps": [
   "1. Start a meeting with subtitles enabled. 2. Keep all participants silent. 3. Observe the subtitle output."
  ],
  "actual": "Subtitles are displayed in a different language even when no one is speaking.",
  "expected": "Subtitles should only appear when speech is detected and should accurately reflect the spoken content.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-141",
  "module": "Studio / Brand Kit",
  "sev": "Low",
  "title": "Show Sticker Button Not Highlighted in Brand Kit",
  "summary": "Show Sticker Button Not Highlighted in Brand Kit",
  "steps": [
   "1. Open Studio. 2. Navigate to Brand Kit. 3. Enable the Show Sticker option."
  ],
  "actual": "The Show Sticker button is not visually highlighted after selection.",
  "expected": "The Show Sticker button should clearly indicate its selected or enabled state.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-142",
  "module": "Studio / Projects / AI Clips / AI Edit / AI Transcript",
  "sev": "High",
  "title": "AI Features Display Errors After Meeting Completion",
  "summary": "AI Features Display Errors After Meeting Completion",
  "steps": [
   "1. Complete and end a recorded meeting. 2. Open the completed project. 3. Click AI Clips, AI Edit, and AI Transcript individually."
  ],
  "actual": "The AI features display errors and do not work after meeting completion.",
  "expected": "AI Clips, AI Edit, and AI Transcript should work successfully for completed recordings.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-143",
  "module": "Studio / Video Dubbing",
  "sev": "High",
  "title": "Video Dubbing Fails With 503 Server Error",
  "summary": "Video Dubbing Fails With 503 Server Error",
  "steps": [
   "1. Open a recorded video. 2. Navigate to the dubbing feature. 3. Select the required language and start dubbing."
  ],
  "actual": "Video dubbing fails and displays a 503 Server Error.",
  "expected": "Video dubbing should process successfully without server errors.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-144",
  "module": "Studio / Video Editor / Source File",
  "sev": "Low",
  "title": "Source File Panel Is Expanded by Default in Editor",
  "summary": "Source File Panel Is Expanded by Default in Editor",
  "steps": [
   "1. Open a recorded project in Video Editor. 2. Observe the Source File panel on initial load."
  ],
  "actual": "The Source File panel is expanded by default, occupying unnecessary editor space.",
  "expected": "The Source File panel should be minimized by default when the editor opens.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-145",
  "module": "Studio / Projects / HLS",
  "sev": "Medium",
  "title": "HLS Thumbnail Not Displayed After Processing",
  "summary": "HLS Thumbnail Not Displayed After Processing",
  "steps": [
   "1. Complete a meeting recording. 2. Wait for HLS processing to complete. 3. Check the generated video thumbnail in Projects."
  ],
  "actual": "The thumbnail image is not displayed after HLS processing.",
  "expected": "The generated video thumbnail should be displayed once HLS processing is completed.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-146",
  "module": "Studio / Live Dubbing / Audio Dubbing",
  "sev": "High",
  "title": "Live Audio Dubbing Intermittently Fails",
  "summary": "Live Audio Dubbing Intermittently Fails",
  "steps": [
   "1. Open Studio and start a Live session. 2. Enable Audio Dubbing and select the target language. 3. Speak during the Live session. 4. Observe the dubbed audio output."
  ],
  "actual": "Audio dubbing intermittently fails during the Live session.",
  "expected": "Audio dubbing should work consistently throughout the Live session without intermittent failures.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-147",
  "module": "Studio / Producer Meeting / Graphics",
  "sev": "Medium",
  "title": "Graphics Transition Not Displayed When Switching Sources in Producer Meeting",
  "summary": "Graphics Transition Not Displayed When Switching Sources in Producer Meeting",
  "steps": [
   "1. Open Studio and join a meeting as Producer. 2. Open the Graphics section. 3. Configure a transition effect. 4. Switch between different video sources."
  ],
  "actual": "The configured graphics transition is not displayed when switching between sources.",
  "expected": "The configured graphics transition should be applied and displayed smoothly whenever the Producer switches between sources.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-148",
  "module": "VOD / Image Sharing",
  "sev": "Medium",
  "title": "Host Audio Continues Transmitting in the Background When Sending VOD or Image Files to the Master",
  "summary": "Host Audio Continues Transmitting in the Background When Sending VOD or Image Files to the Master",
  "steps": [
   "Start host audio transmission, then send a VOD or image file to the master."
  ],
  "actual": "Host audio continues transmitting in the background while sending the VOD or image file.",
  "expected": "Host audio should stop or pause while sending the VOD or image file to the master.",
  "reporter": "",
  "date": "27-11-26",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-149",
  "module": "AI Transcript / Subtitle",
  "sev": "High",
  "title": "Subtitle Language Changes Automatically When Changing Transcript Language",
  "summary": "Subtitle Language Changes Automatically When Changing Transcript Language",
  "steps": [
   "Change the transcript language and observe the subtitle language."
  ],
  "actual": "Subtitle language also changes automatically when the transcript language is changed.",
  "expected": "Subtitle language should remain unchanged when changing the transcript language.",
  "reporter": "",
  "date": "27-11-26",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-150",
  "module": "AI Live Clips",
  "sev": "High",
  "title": "Language Changes Automatically in AI Live Clips",
  "summary": "Language Changes Automatically in AI Live Clips",
  "steps": [
   "Open AI Live Clips and observe the language settings while using the feature."
  ],
  "actual": "Language changes automatically without user intervention.",
  "expected": "Language should remain unchanged unless manually selected by the user.",
  "reporter": "",
  "date": "27-11-26",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-151",
  "module": "AI Transcript",
  "sev": "Medium",
  "title": "Transcript Is Not Generated in the Selected Language",
  "summary": "Transcript Is Not Generated in the Selected Language",
  "steps": [
   "Change the transcript language and generate the transcript."
  ],
  "actual": "Transcript is not generated in the selected language.",
  "expected": "Transcript should be generated in the selected language.",
  "reporter": "",
  "date": "27-11-26",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-152",
  "module": "AI Subtitle",
  "sev": "Medium",
  "title": "Subtitle Displays in Two Lines Instead of a Single Line",
  "summary": "Subtitle Displays in Two Lines Instead of a Single Line",
  "steps": [
   "Set the subtitle display to a single line and observe the subtitle output."
  ],
  "actual": "Subtitle is displayed in two lines instead of a single line.",
  "expected": "Subtitle should remain displayed in a single line as selected.",
  "reporter": "",
  "date": "27-11-26",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-153",
  "module": "Audience Video Sharing / Casual Mode",
  "sev": "High",
  "title": "Video Does Not Play Completely on Master in Casual Mode",
  "summary": "Video Does Not Play Completely on Master in Casual Mode",
  "steps": [
   "Audience sends a video to the host, and the host pushes the video to the master. Observe video playback on the master."
  ],
  "actual": "Video does not play completely on the master's side in casual mode.",
  "expected": "The master should receive and play the entire video without interruption in casual mode.",
  "reporter": "",
  "date": "27-11-26",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-154",
  "module": "studio/custom layouts",
  "sev": "Medium",
  "title": "In custom layouts watermark text message selected particular position,but in studio its not shwing correct position.",
  "summary": "In custom layouts watermark text message selected particular position,but in studio its not shwing correct position.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-155",
  "module": "Custom Layouts / Studio",
  "sev": "Medium",
  "title": "Watermark text is not displayed in the selected position in Studio",
  "summary": "Watermark text is not displayed in the selected position in Studio",
  "steps": [
   "1. Navigate to Custom Layouts. 2. Add a watermark text message. 3. Select a particular position for the watermark. 4. Save the custom layout. 5. Open the layout in Studio. 6. Check the watermark text position."
  ],
  "actual": "The watermark text is not displayed in the position selected during custom layout configuration.",
  "expected": "The watermark text should appear in Studio at the exact position selected in Custom Layouts.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-156",
  "module": "Matrix Control / Studio",
  "sev": "High",
  "title": "Disabled participant is still visible to another participant after saving Matrix Control settings",
  "summary": "Disabled participant is still visible to another participant after saving Matrix Control settings",
  "steps": [
   "1. Open Studio. 2. Navigate to Matrix Control. 3. Select the host. 4. Disable one participant's visibility for another participant. 5. Click the Save button. 6. Check the visibility from the other participant's view."
  ],
  "actual": "Even after disabling the participant's visibility and saving the settings, the other participant is still able to see the disabled participant.",
  "expected": "Once the host disables a participant's visibility for another participant and saves the settings, the disabled participant should no longer be visible to that participant.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-157",
  "module": "Teleprompter / Studio Preview",
  "sev": "Low",
  "title": "Edit Script option should be hidden when opening Teleprompter in Host Preview",
  "summary": "Edit Script option should be hidden when opening Teleprompter in Host Preview",
  "steps": [
   "1. Open Studio from the Host side. 2. Navigate to the Teleprompter section. 3. Open the Teleprompter in Preview mode. 4. Check the available options."
  ],
  "actual": "The Edit Script option is still displayed when the Host opens the Teleprompter in Preview mode.",
  "expected": "The Edit Script option should be hidden when the Host opens the Teleprompter in Preview mode.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-158",
  "module": "Studio / Host / Anchor Preview",
  "sev": "Medium",
  "title": "Anchor Preview status is not synchronized with Host-side Live Commentary and Teleprompter controls",
  "summary": "Anchor Preview status is not synchronized with Host-side Live Commentary and Teleprompter controls",
  "steps": [
   "1. Open Studio from the Host side. 2. Enable Live Commentary or Teleprompter. 3. Check the What the Anchor Sees section on the Anchor side. 4. Verify whether the status is updated. 5. Close the Teleprompter from the Host side. 6. Check the Anchor side again."
  ],
  "actual": "The Anchor-side status is not updated when the Host enables Live Commentary or Teleprompter. Also, when the Host closes the Teleprompter, it remains open on the Anchor side.",
  "expected": "The Anchor-side status should automatically update based on the Host's Live Commentary and Teleprompter settings. When the Host closes the Teleprompter, it should also close automatically on the Anchor side.",
  "reporter": "",
  "date": "",
  "devStatus": "Requirement",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-159",
  "module": "Integrated iOS Bonding App / Authentication / Meeting",
  "sev": "High",
  "title": "Same Host Account Can Log In and Join Meetings Through Web and iOS Bonding App Simultaneously",
  "summary": "Same Host Account Can Log In and Join Meetings Through Web and iOS Bonding App Simultaneously",
  "steps": [
   "1. Open the web application and log in using the host credentials. 2. Start or join a meeting as the host through the web application. 3. Open the integrated iOS Bonding app on an iOS device. 4. Log in using the same host credentials. 5. Verify whether the host can successfully log in and join another meeting through the iOS app while the web session is active."
  ],
  "actual": "The same host credentials can be used to log in to the iOS Bonding app and join meetings even while the host is already logged in and participating in a meeting through the web application.",
  "expected": "The application should prevent the same host account from logging in or joining another meeting through the iOS Bonding app while an active host session or meeting exists on the web application. An appropriate message should inform the user that the account is already active on another platform.",
  "reporter": "",
  "date": "",
  "devStatus": "Issue fixed Build is not released yet.Will release it after completion of testing",
  "qaStatus": "",
  "qaNote": "Server side done (Studio API): 409 account_active_on_web on reporter join + GET mobile/account-status.",
  "sheetId": ""
 },
 {
  "id": "STU-160",
  "module": "Studio / Meeting / Private Chat / iOS App",
  "sev": "High",
  "title": "Private Messages Sent from iOS Participants Are Not Received by the Studio Host",
  "summary": "Private Messages Sent from iOS Participants Are Not Received by the Studio Host",
  "steps": [
   "1. Open the Studio web application and start a meeting as the host. 2. Join the same meeting as a participant using the iOS mobile app. 3. Open the private messaging option from the iOS participant's side. 4. Send a private message to the Studio host. 5. Verify whether the message is received on the host's side."
  ],
  "actual": "The private messages sent by participants through the iOS app are not received or displayed on the Studio host's side.",
  "expected": "The Studio host should successfully receive and view private messages sent by participants through the iOS app during the active meeting.",
  "reporter": "",
  "date": "",
  "devStatus": "Issue fixed Build is not released yet.Will release it after completion of testing.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-161",
  "module": "Bonding iOS App / Streamer / Studio Producer / Participants",
  "sev": "High",
  "title": "iOS User Is Added to Studio Participants and Can Hear the Host Before Clicking Go Live",
  "summary": "iOS User Is Added to Studio Participants and Can Hear the Host Before Clicking Go Live",
  "steps": [
   "1. Log in to the Bonding iOS app using a streamer account. 2. After successful login, do not click the Go Live button. 3. Observe the audio connection and the Participants section in Studio. 4. Check whether the iOS user can hear the Studio host and whether the user appears in the Participants list. 5. Click Go Live in the iOS app and observe the participant status in Studio."
  ],
  "actual": "Even without clicking Go Live, the iOS user can hear the Studio host and is automatically added to the Participants section in Studio.",
  "expected": "The iOS user should be added to the Studio Participants list and receive the host's audio only after clicking Go Live. Until then, the user should not be treated as an active participant. The participant should be associated with the Studio Producer session, not Casual Mode.",
  "reporter": "",
  "date": "",
  "devStatus": "As discussed earlier with Mani it is a feature not a bug.Please confirm with Mani.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-162",
  "module": "Settings /Account",
  "sev": "High",
  "title": "Sign Out Other Devices functionality is not working in Login & Security settings.",
  "summary": "Sign Out Other Devices functionality is not working in Login & Security settings.",
  "steps": [
   "1.Open the application.",
   "2.Navigate to Settings.",
   "3.Select Login & Security.",
   "4.Open the Sign Out Other Devices option.",
   "5.Confirm the sign-out action, if prompted.",
   "6.Check whether other logged-in devices are signed out."
  ],
  "actual": "The Sign Out Other Devices functionality is not working as expected. Other devices remain logged in even after triggering the sign-out action.",
  "expected": "All other active sessions should be successfully signed out when the user selects the Sign Out Other Devices option. Only the current device session should remain active.",
  "reporter": "",
  "date": "",
  "devStatus": "Shell team",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-163",
  "module": "Android mobile",
  "sev": "Medium",
  "title": "Duplicate camera options are displayed in Camera Settings when joining a session in samsung mobile",
  "summary": "Duplicate camera options are displayed in Camera Settings when joining a session in samsung mobile",
  "steps": [
   "1.Open the application.",
   "2.Navigate to the session joining screen.",
   "3.Click on the Camera option.",
   "4.Observe the camera options displayed in Camera Settings"
  ],
  "actual": "The camera option is displayed twice in Camera Settings when joining a session.",
  "expected": "The camera option should be displayed only once in Camera Settings when joining a session.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-164",
  "module": "Android mobile",
  "sev": "Low",
  "title": "In teleprompter Text zoom button is very small need to increase the size",
  "summary": "In teleprompter Text zoom button is very small need to increase the size",
  "steps": [
   "1.Open the application.",
   "2.Navigate to the Teleprompter section.",
   "3.Open or load any teleprompter script.",
   "4.Observe the text size displayed on the screen."
  ],
  "actual": "The button appears too small, making it difficult to view and interact with.",
  "expected": "The button size should be increased to improve visibility, accessibility, and ease of interaction.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-165",
  "module": "Android mobile",
  "sev": "Medium",
  "title": "Close option is missing in the Teleprompter screen.",
  "summary": "Close option is missing in the Teleprompter screen.",
  "steps": [
   "1.Open the application.",
   "2.Navigate to the Teleprompter section.",
   "3.Open any teleprompter script.",
   "4.Observe the available options on the Teleprompter screen."
  ],
  "actual": "There is no Close option available to exit the Teleprompter screen.",
  "expected": "A Close (X) option should be provided on the Teleprompter screen so that users can easily close the prompter and return to the previous screen.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-166",
  "module": "Android mobile",
  "sev": "Medium",
  "title": "No validation error message is displayed when clicking Continue without entering a meeting link or code.",
  "summary": "No validation error message is displayed when clicking Continue without entering a meeting link or code.",
  "steps": [
   "1.Open the application.",
   "2.Navigate to the Join Meeting screen.",
   "3.Leave the Meeting Link and Meeting Code fields empty.",
   "4.Click the Continue button.",
   "5.Observe the screen for any validation message."
  ],
  "actual": "When clicking the Continue button without entering a meeting link or code, no error or validation message is displayed on the screen.",
  "expected": "A proper validation error message should be displayed when the user clicks Continue without entering a meeting link or code, prompting them to provide the required meeting details.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-167",
  "module": "Android Mobile",
  "sev": "High",
  "title": "Application crashes when continuously changing the resolution during a live broadcast.",
  "summary": "Application crashes when continuously changing the resolution during a live broadcast.",
  "steps": [
   "1. Launch the application. 2. Start a live broadcast. 3. Open the video resolution settings. 4. Continuously change the resolution between available options. 5. Observe the application behavior during the resolution changes."
  ],
  "actual": "The application crashes when the resolution is changed continuously during a live broadcast.",
  "expected": "The application should handle continuous resolution changes without crashing, and the live broadcast should continue smoothly without interruption.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-168",
  "module": "Settings /Account",
  "sev": "High",
  "title": "Sign Out Other Devices functionality is not working in Login & Security settings.",
  "summary": "Sign Out Other Devices functionality is not working in Login & Security settings.",
  "steps": [
   "1.Open the application.",
   "2.Navigate to Settings.",
   "3.Select Login & Security.",
   "4.Open the Sign Out Other Devices option.",
   "5.Confirm the sign-out action, if prompted.",
   "6.Check whether other logged-in devices are signed out."
  ],
  "actual": "The Sign Out Other Devices functionality is not working as expected. Other devices remain logged in even after triggering the sign-out action.",
  "expected": "All other active sessions should be successfully signed out when the user selects the Sign Out Other Devices option. Only the current device session should remain active.",
  "reporter": "",
  "date": "",
  "devStatus": "Shell team",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "STU-169",
  "module": "Studio / Casual",
  "sev": "High",
  "title": "Video Continues Playing for Other Participants When Paused by Host",
  "summary": "Video Continues Playing for Other Participants When Paused by Host",
  "steps": [
   "1. Open the Studio-Casual module. 2. Navigate to the Casual section. 3. Play any video in the host Side view. 4. Observe the video playing in the partition view for other participants. 5. Pause the video from the host Side view. 6. Verify the video playback status for guests and other participants."
  ],
  "actual": "When the host pauses the video from the host Side view, playback continues for guests and other participants side.",
  "expected": "When the host pauses the video, playback should pause simultaneously for all guests and other participants, irrespective of the view.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 }
];
