window.DATA=window.DATA||{};window.DATA["live"]=[
 {
  "id": "ISS-001",
  "module": "Global / Navigation",
  "sev": "Medium",
  "title": "Command Palette does not open with Ctrl+K",
  "summary": "Command Palette does not open with Ctrl+K",
  "steps": [
   "Open the app; navigate to any page; press Ctrl+K."
  ],
  "actual": "Command Palette does not open.",
  "expected": "Command Palette should open when Ctrl+K is pressed.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "1"
 },
 {
  "id": "ISS-002",
  "module": "Smart Clip Analysis",
  "sev": "Medium",
  "title": "Start Smart Clip Analysis button remains visible while analysis runs",
  "summary": "Start Smart Clip Analysis button remains visible while analysis runs",
  "steps": [
   "Open content; start Smart Clip Analysis; observe button during processing."
  ],
  "actual": "Start button remains visible while analysis runs.",
  "expected": "Show a processing state and prevent duplicate starts where appropriate.",
  "reporter": "",
  "date": "",
  "devStatus": "FIxed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "2"
 },
 {
  "id": "ISS-003",
  "module": "Projects / New Project",
  "sev": "Medium",
  "title": "New Project menu differs from design reference",
  "summary": "New Project menu differs from design reference",
  "steps": [
   "Open Projects and the New Project menu; compare with design walkthrough."
  ],
  "actual": "Actual: Upload Video, AI Clips, AI Captions, Portrait Pro, AI Writer, Record enabled, Schedule for later enabled, Custom Edit. Design: Long to Shorts, AI Captions, Portrait Pro, AI Dub, AI Writer, Record disabled, Schedule for later disabled, Custom Edit. Icons, spacing, width/layout and grouping also differ.",
  "expected": "Options, labels, disabled states, icons, spacing, width and grouping should match approved design.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "3"
 },
 {
  "id": "ISS-004",
  "module": "Editor",
  "sev": "Medium",
  "title": "Undo missing after reopening editor",
  "summary": "Undo missing after reopening editor",
  "steps": [
   "Edit content; close and reopen editor; inspect Undo."
  ],
  "actual": "Undo is missing on the second editor opening.",
  "expected": "Undo should be available and behave consistently where edit history applies.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "4"
 },
 {
  "id": "ISS-005",
  "module": "Editor / Library",
  "sev": "Medium",
  "title": "Edited clip not found in Library after Download",
  "summary": "Edited clip not found in Library after Download",
  "steps": [
   "Edit a clip; export it; click Download; check Library."
  ],
  "actual": "Clip shows as exported but is not found in Library after Download.",
  "expected": "Download should complete. Whether Download should also save an item to Library needs product/design confirmation.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "5"
 },
 {
  "id": "ISS-006",
  "module": "Long to Shorts",
  "sev": "High",
  "title": "Long to Shorts does not create clips",
  "summary": "Long to Shorts does not create clips",
  "steps": [
   "Open Long to Shorts; select/upload content; start generation; check output."
  ],
  "actual": "Clips are not created.",
  "expected": "Generate clips successfully or show a clear actionable failure.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "6"
 },
 {
  "id": "ISS-007",
  "module": "Content Details / Recording",
  "sev": "Medium",
  "title": "Not all speakers appear in Recording tab",
  "summary": "Not all speakers appear in Recording tab",
  "steps": [
   "Open content details; select Recording; review speakers."
  ],
  "actual": "Not all speakers are displayed for content.",
  "expected": "Display all detected/available speakers.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "7"
 },
 {
  "id": "ISS-008",
  "module": "Content Details / Creations",
  "sev": "High",
  "title": "Creations are not generated/displayed in Creations tab",
  "summary": "Creations are not generated/displayed in Creations tab",
  "steps": [
   "Complete relevant creation workflow; open Creations tab."
  ],
  "actual": "Creations are not being created/displayed.",
  "expected": "Show successfully generated creations or a clear failure state.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "8"
 },
 {
  "id": "ISS-009",
  "module": "Projects",
  "sev": "Medium",
  "title": "Normal content does not appear after removing Favorites filter",
  "summary": "Normal content does not appear after removing Favorites filter",
  "steps": [
   "Apply Favorites filter; remove it; inspect list."
  ],
  "actual": "Normal content does not automatically appear after removing Favorites.",
  "expected": "Unfiltered list should show content appropriate to the current view.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "9"
 },
 {
  "id": "ISS-010",
  "module": "Projects / Folders",
  "sev": "Medium",
  "title": "Projects list includes content assigned to folders",
  "summary": "Projects list includes content assigned to folders",
  "steps": [
   "Assign content to a folder; return to main Projects list."
  ],
  "actual": "Projects list shows all content, including folder-assigned content.",
  "expected": "Main Projects list should show only unfoldered content; folder-assigned content should appear inside its folder.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "10"
 },
 {
  "id": "ISS-011",
  "module": "Content Upload",
  "sev": "Medium",
  "title": "Content-upload screen UI is not displayed properly",
  "summary": "Content-upload screen UI is not displayed properly",
  "steps": [
   "Open content-upload screen and inspect layout."
  ],
  "actual": "UI is not displayed properly; exact affected elements were not specified.",
  "expected": "Screen should render according to approved design without layout/visual issues.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "11"
 },
 {
  "id": "ISS-012",
  "module": "Co-Creator",
  "sev": "Medium",
  "title": "Co-Creator search does not show clips by content name",
  "summary": "Co-Creator search does not show clips by content name",
  "steps": [
   "Search by content name in Co-Creator; review results."
  ],
  "actual": "Clips are not displayed for the searched content name.",
  "expected": "Return relevant clips associated with the entered content name.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "12"
 },
 {
  "id": "ISS-013",
  "module": "Co-Creator",
  "sev": "Medium",
  "title": "Selected best-clip details missing in Co-Creator",
  "summary": "Selected best-clip details missing in Co-Creator",
  "steps": [
   "Select a suggested best clip; inspect its details."
  ],
  "actual": "Details for the selected best clip are not displayed.",
  "expected": "Show selected clip details after selection.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "13"
 },
 {
  "id": "ISS-014",
  "module": "Projects / Folders",
  "sev": "Low",
  "title": "New Folder button displayed twice",
  "summary": "New Folder button displayed twice",
  "steps": [
   "Open folder area in Projects; inspect New Folder actions."
  ],
  "actual": "New Folder button appears twice.",
  "expected": "Display only the intended single button.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "14"
 },
 {
  "id": "ISS-015",
  "module": "Custom Edit / Upload",
  "sev": "Medium",
  "title": "1 GB Custom Edit upload remains Processing for over five minutes",
  "summary": "1 GB Custom Edit upload remains Processing for over five minutes",
  "steps": [
   "Upload a 1 GB file in Custom Edit; observe status for more than five minutes."
  ],
  "actual": "Content remains Processing and upload/process flow takes over five minutes.",
  "expected": "Show accurate progress/status and complete within defined performance thresholds, if specified.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "15"
 },
 {
  "id": "ISS-016",
  "module": "Credits / Billing",
  "sev": "High",
  "title": "Credits do not update after successful payment until refresh",
  "summary": "Credits do not update after successful payment until refresh",
  "steps": [
   "Purchase credits successfully; inspect balance without refreshing."
  ],
  "actual": "Balance does not update automatically; manual refresh is required.",
  "expected": "Update credits balance after successful payment without manual refresh.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "16"
 },
 {
  "id": "ISS-017",
  "module": "Content Details / Navigation",
  "sev": "Medium",
  "title": "Back from Content Details redirects to Projects instead of Home",
  "summary": "Back from Content Details redirects to Projects instead of Home",
  "steps": [
   "Open content details from Home; click Back."
  ],
  "actual": "Redirects to Projects rather than Home.",
  "expected": "Return to the previous page/context in the reported scenario.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "17"
 },
 {
  "id": "ISS-018",
  "module": "Editor / Properties",
  "sev": "Low",
  "title": "Properties panel has no close option",
  "summary": "Properties panel has no close option",
  "steps": [
   "Open editor and Properties panel; inspect for close control."
  ],
  "actual": "No close option is available.",
  "expected": "Provide intended dismiss/close interaction if specified in design.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: the Orbit panel now has a close (X) button like every other Properties panel; Esc also closes it. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "18"
 },
 {
  "id": "ISS-019",
  "module": "Editor / Timeline",
  "sev": "Low",
  "title": "Split option does not enable until video is selected",
  "summary": "Split option does not enable until video is selected",
  "steps": [
   "Open editor; inspect Split before and after selecting a video."
  ],
  "actual": "Split remains disabled until a video is selected.",
  "expected": "Enable/disable Split according to intended selection rules; make state clear.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: Split now splits the clip under the playhead with nothing selected (pre/mid/post-rolls too), and its tooltip says why when it can't. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "19"
 },
 {
  "id": "ISS-020",
  "module": "Clip Creation / Upload",
  "sev": "High",
  "title": "Clip creation settings missing during upload-based clip creation",
  "summary": "Clip creation settings missing during upload-based clip creation",
  "steps": [
   "Start clip creation with uploaded content; inspect settings."
  ],
  "actual": "Design options not observed: Length—Auto, Under 30s, 30–60s, 60–90s; How many—Auto, Up to 5, Up to 10, Up to 15; Shape—Vertical 9:16, Square 1:1, Wide 16:9.",
  "expected": "Provide the Length, How many and Shape options shown in the supplied design.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "20"
 },
 {
  "id": "ISS-021",
  "module": "AI Captions / Content Details",
  "sev": "High",
  "title": "AI Captions content details missing Recording, Clips and Captions tabs",
  "summary": "AI Captions content details missing Recording, Clips and Captions tabs",
  "steps": [
   "Upload content through AI Captions; wait until available; open details; inspect tabs."
  ],
  "actual": "Recording, Clips and Captions tabs are not displayed.",
  "expected": "Show expected tabs for this content type per product/design requirements.",
  "reporter": "",
  "date": "",
  "devStatus": "as per design clips should not generate for captions content",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "21"
 },
 {
  "id": "ISS-022",
  "module": "AI Captions",
  "sev": "High",
  "title": "Selected caption style not displayed after content becomes Ready",
  "summary": "Selected caption style not displayed after content becomes Ready",
  "steps": [
   "Select caption style; wait until Ready; inspect output/preview."
  ],
  "actual": "Selected caption style is not displayed.",
  "expected": "Apply and display the selected caption style in generated output/preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "22"
 },
 {
  "id": "ISS-023",
  "module": "AI Captions / Languages",
  "sev": "High",
  "title": "Target-language captions not shown when content is Ready",
  "summary": "Target-language captions not shown when content is Ready",
  "steps": [
   "Select target language; wait until Ready; inspect captions."
  ],
  "actual": "Only source language is shown; selected target-language captions are not observed.",
  "expected": "Display captions in selected target language or provide a clear actionable status/error.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "23"
 },
 {
  "id": "ISS-024",
  "module": "AI Dub / Dubbing",
  "sev": "High",
  "title": "AI dubbing fails during video validation",
  "summary": "AI dubbing fails during video validation",
  "steps": [
   "Choose content and target language (e.g. Hindi); click Start dubbing; inspect result."
  ],
  "actual": "Error: `poll: dubbing provider failed at video_validation: Video validation failed`; no dubbed output generated.",
  "expected": "Valid input should generate dubbed output; validation failures should be clear and actionable.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "24"
 },
 {
  "id": "ISS-025",
  "module": "AI Dub / Content Details",
  "sev": "High",
  "title": "Recording, Clips and Download missing for dubbed content",
  "summary": "Recording, Clips and Download missing for dubbed content",
  "steps": [
   "Open dubbed content details; inspect tabs/actions."
  ],
  "actual": "Recording, Clips and Download options are not displayed.",
  "expected": "Show expected tabs and Download action for supported dubbed content.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "25"
 },
 {
  "id": "ISS-026",
  "module": "Portrait Pro",
  "sev": "High",
  "title": "Portrait Pro shows Finished despite portrait derivative error",
  "summary": "Portrait Pro shows Finished despite portrait derivative error",
  "steps": [
   "Run Generate portrait video; wait for result; inspect status and output."
  ],
  "actual": "Status shows Finished but error `unknown derivative kind portrait` appears and no portrait is created.",
  "expected": "Create portrait successfully; on failure show a failure state rather than Finished and provide meaningful error.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "26"
 },
 {
  "id": "ISS-027",
  "module": "Content Processing",
  "sev": "Medium",
  "title": "Options remain editable while content is processing",
  "summary": "Options remain editable while content is processing",
  "steps": [
   "Start a processing workflow; try changing options before completion."
  ],
  "actual": "All options remain enabled/changeable during processing.",
  "expected": "Lock/disable options that cannot safely change during processing and communicate status.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "27"
 },
 {
  "id": "ISS-028",
  "module": "Portrait Pro",
  "sev": "High",
  "title": "Portrait Pro processing options and caption template not visible",
  "summary": "Portrait Pro processing options and caption template not visible",
  "steps": [
   "Open portrait creation workflow; inspect processing settings and caption template."
  ],
  "actual": "Processing options and caption template are not visible.",
  "expected": "Display expected settings and caption template for the selected workflow.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "28"
 },
 {
  "id": "ISS-029",
  "module": "Portrait Pro / Reframing",
  "sev": "High",
  "title": "Portrait Pro output ratio is 1:1 instead of selected 9:16",
  "summary": "Portrait Pro output ratio is 1:1 instead of selected 9:16",
  "steps": [
   "Select 9:16; reframe content; wait for completion; inspect output ratio."
  ],
  "actual": "Completed output is 1:1 instead of 9:16.",
  "expected": "Preserve selected 9:16 aspect ratio in generated output.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "29"
 },
 {
  "id": "ISS-030",
  "module": "AI Writer / Content Upload",
  "sev": "Medium",
  "title": "AI Writer language selection missing during generation",
  "summary": "AI Writer language selection missing during generation",
  "steps": [
   "Open AI Writer/content generation flow; inspect language settings during upload/generation."
  ],
  "actual": "No language-selection option is shown.",
  "expected": "Provide language selection so user can choose output language before generation.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "30"
 },
 {
  "id": "ISS-031",
  "module": "Content Details / Navigation",
  "sev": "Medium",
  "title": "Content Details tab inventory needs complete design comparison",
  "summary": "Content Details tab inventory needs complete design comparison",
  "steps": [
   "Open Content Details and compare visible tabs with design for each content type."
  ],
  "actual": "Earlier screenshot showed Recording, Clips and Creations, but full expected tab list has not been verified against design.",
  "expected": "List all tabs present in design but absent in actual UI, by content type.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "31"
 },
 {
  "id": "ISS-032",
  "module": "Portrait Pro / Editor",
  "sev": "High",
  "title": "Generated portrait content opens in editor with incorrect aspect ratio",
  "summary": "Generated portrait content opens in editor with incorrect aspect ratio",
  "steps": [
   "1. Generate portrait content using Portrait Pro. 2. Open the generated content in the editor. 3. Observe the aspect ratio. 4. Change the aspect ratio to 9:16. 5. Verify the editor preview and output orientation."
  ],
  "actual": "Generated portrait content opens in the editor with an incorrect aspect ratio. Even after changing it to 9:16, the content still appears in landscape format (16:9).",
  "expected": "Generated portrait content should open with the selected 9:16 aspect ratio. Changing to 9:16 should correctly update the editor preview and output dimensions.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "32"
 },
 {
  "id": "ISS-033",
  "module": "Long to Shorts / Full-Screen Preview",
  "sev": "High",
  "title": "Long to Shorts clip switches to 16:9 in full-screen mode",
  "summary": "Long to Shorts clip switches to 16:9 in full-screen mode",
  "steps": [
   "1. Open Long to Shorts. 2. Generate clips from source video. 3. Verify a clip displays in 9:16 portrait format in normal preview. 4. Click full-screen. 5. Observe the aspect ratio."
  ],
  "actual": "Clip displays correctly in 9:16 in normal preview, but switches to 16:9 landscape format in full-screen mode.",
  "expected": "The clip should maintain its 9:16 portrait aspect ratio in both normal preview and full-screen mode.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "33"
 },
 {
  "id": "ISS-034",
  "module": "Subscription / Billing",
  "sev": "High",
  "title": "Growth Plan Subscriber Is Incorrectly Prompted to Upgrade",
  "summary": "Growth Plan Subscriber Is Incorrectly Prompted to Upgrade",
  "steps": [
   "1. Log in to CloudReel using an account subscribed to the Growth Plan. 2. Navigate to the account, subscription, or billing section. 3. Observe the current plan details and upgrade prompt."
  ],
  "actual": "The account displays an upgrade prompt even though the user is already subscribed to the Growth Plan, which is reported to be the highest available plan.",
  "expected": "The account should correctly recognize and display the active Growth Plan subscription and should not prompt the user to upgrade when no higher plan is available.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "34"
 },
 {
  "id": "ISS-035",
  "module": "Credits / Billing",
  "sev": "Medium",
  "title": "Credits Balance Does Not Update Automatically After Successful Payment",
  "summary": "Credits Balance Does Not Update Automatically After Successful Payment",
  "steps": [
   "1. Log in to CloudReel. 2. Navigate to the Credits or Billing section. 3. Purchase credits and complete the payment successfully. 4. Check the credits balance in home screen without refreshing the page."
  ],
  "actual": "The credits balance does not update automatically after successful payment. The user must refresh the page to view the updated balance.",
  "expected": "#168 Captions out of sync with the dubbed audio** (content 01a1af26-15f5-794a-9528-801efc2552d6). Check whether captions for a dub are generated from the dub's audio or from the original timing, and how the dub's timing is applied.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "35"
 },
 {
  "id": "ISS-036",
  "module": "Video Upload / Content Upload",
  "sev": "High",
  "title": "Video Upload Accepts Only MP4 Format",
  "summary": "Video Upload Accepts Only MP4 Format",
  "steps": [
   "1. Open the video upload screen. 2. Try uploading a video in MP4 format. 3. Try uploading videos in other supported formats. 4. Observe the upload behavior."
  ],
  "actual": "MP4 files are accepted, but files in other formats are rejected.",
  "expected": "**#190 In",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "36"
 },
 {
  "id": "ISS-037",
  "module": "Transcription / AI Captions",
  "sev": "High",
  "title": "Incorrect Transcript Language Generated for Hindi Content",
  "summary": "Incorrect Transcript Language Generated for Hindi Content",
  "steps": [
   "1. Upload Hindi-language video content. 2. Start the transcription or caption-generation process. 3. Wait for processing to complete. 4. Review the generated transcript."
  ],
  "actual": "The system generates a Tamil transcript for Hindi-language content.",
  "expected": "The system should correctly detect the Hindi audio and generate the transcript in Hindi, unless the user explicitly selects another target language.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "37"
 },
 {
  "id": "ISS-038",
  "module": "AI Dubbing / Clips",
  "sev": "Medium",
  "title": "Clips Are Generated for Dubbed Content Unexpectedly",
  "summary": "Clips Are Generated for Dubbed Content Unexpectedly",
  "steps": [
   "1. Upload or select content for AI dubbing. 2. Select the target language and start dubbing. 3. Wait for processing to complete. 4. Check whether clips are generated for the dubbed content."
  ],
  "actual": "Clips are being generated automatically for dubbed content.",
  "expected": "Clips should not be generated automatically for dubbed content unless explicitly requested or supported by the intended workflow.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "38"
 },
 {
  "id": "ISS-039",
  "module": "AI Captions / Translation Options",
  "sev": "Medium",
  "title": "Run Button Remains Enabled Without Selecting a Target Language",
  "summary": "Run Button Remains Enabled Without Selecting a Target Language",
  "steps": [
   "1. Open the AI Captions or translation options screen. 2. Do not select any target language under “Also translate into”. 3. Observe the Run button. 4. Click Run."
  ],
  "actual": "The Run button remains enabled even when no target language is selected, allowing the user to start the process without selecting a language.",
  "expected": "The Run button should remain disabled until the user selects at least one target language. It should become enabled only after a language is selected.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "39"
 },
 {
  "id": "ISS-040",
  "module": "Content Details / AI Dubbing",
  "sev": "Medium",
  "title": "Back Option Missing on AI Dubbing Screen When Navigated from Content Details",
  "summary": "Back Option Missing on AI Dubbing Screen When Navigated from Content Details",
  "steps": [
   "1. Open the Content Details page for a video. 2. Navigate to the AI Dubbing screen from Content Details. 3. Check the available navigation options."
  ],
  "actual": "The Back option is not displayed on the AI Dubbing screen when the user navigates from Content Details.",
  "expected": "A Back option should be available to allow the user to return to the previous Content Details page.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "40"
 },
 {
  "id": "ISS-041",
  "module": "Content Details / Download",
  "sev": "High",
  "title": "Download Functionality Not Working from Content Details Page",
  "summary": "Download Functionality Not Working from Content Details Page",
  "steps": [
   "1. Log in to CloudReel. 2. Open the Content Details page for any available content. 3. Click the Download option. 4. Verify whether the content is downloaded successfully."
  ],
  "actual": "The content is not downloading when the user clicks Download on the Content Details page.",
  "expected": "The system should download the selected content successfully when the user clicks Download. If the download fails, an appropriate error message should be displayed.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "41"
 },
 {
  "id": "ISS-042",
  "module": "Content Details / AI Dubbing",
  "sev": "Medium",
  "title": "Source and Dubbed Languages Are Displayed During Dubbing from Content Details",
  "summary": "Source and Dubbed Languages Are Displayed During Dubbing from Content Details",
  "steps": [
   "1. Open the Content Details page for a video. 2. Initiate AI dubbing from the details page. 3. Select the target dubbing language. 4. Observe the language information displayed during the dubbing process."
  ],
  "actual": "Both the source language and dubbed target language are displayed when dubbing is initiated from the Content Details page.",
  "expected": "The language information should be displayed according to the intended design and dubbing workflow, clearly distinguishing the source language from the selected target language.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "42"
 },
 {
  "id": "ISS-043",
  "module": "AI Captions / Language Selection",
  "sev": "Medium",
  "title": "Not All Indian Languages Are Available During AI Captions Content Upload",
  "summary": "Not All Indian Languages Are Available During AI Captions Content Upload",
  "steps": [
   "1. Open the AI Captions module. 2. Start uploading content. 3. Navigate to the language selection section. 4. Review the available languages."
  ],
  "actual": "Not all Indian languages are available in the language selection list during content upload through AI Captions.",
  "expected": "The language selection list should include all Indian languages supported by the product requirements, allowing users to select the required language for transcription or captions.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "43"
 },
 {
  "id": "ISS-044",
  "module": "Authentication / Sign Out",
  "sev": "Low",
  "title": "Sign-Out Confirmation Popup Is Missing",
  "summary": "Sign-Out Confirmation Popup Is Missing",
  "steps": [
   "1. Log in to CloudReel. 2. Click the profile or account menu. 3. Click Sign Out. 4. Observe the behavior."
  ],
  "actual": "The user is signed out without a confirmation popup.",
  "expected": "A confirmation popup should appear before signing out, asking the user to confirm or cancel the action.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "44"
 },
 {
  "id": "ISS-045",
  "module": "Subscription / Choose Your Plan / Settings",
  "sev": "Medium",
  "title": "Settings from the Choose Your Plan Popup Redirects to Accounts Instead of Billing & Plans",
  "summary": "Settings from the Choose Your Plan Popup Redirects to Accounts Instead of Billing & Plans",
  "steps": [
   "1. Log in to CloudReel. 2. Open the Choose Your Plan popup. 3. Click Settings. 4. Observe the destination page."
  ],
  "actual": "The user is redirected to the Accounts screen instead of the Billing & Plans screen.",
  "expected": "Clicking Settings from the Choose Your Plan popup should redirect the user to the Billing & Plans screen, where subscription details and plan options can be managed.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "45"
 },
 {
  "id": "ISS-046",
  "module": "Billing & Plans / Subscription Management",
  "sev": "Medium",
  "title": "Cancel Plan Option Still Displayed After Subscription Cancellation",
  "summary": "Cancel Plan Option Still Displayed After Subscription Cancellation",
  "steps": [
   "1. Log in to CloudReel. 2. Navigate to Billing & Plans. 3. Cancel the active subscription. 4. Reopen the Billing & Plans screen. 5. Check the available subscription actions."
  ],
  "actual": "The subscription has already been canceled, but the Cancel Plan option is still displayed on the Billing & Plans screen.",
  "expected": "After successful cancellation, the Cancel Plan option should no longer be displayed. The UI should show the correct cancellation status and, where applicable, the subscription expiry date.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "46"
 },
 {
  "id": "ISS-047",
  "module": "AI Dub / Content Details",
  "sev": "Medium",
  "title": "Previously Generated Dubbed Content Is Not Displayed After Switching the Target Language",
  "summary": "Previously Generated Dubbed Content Is Not Displayed After Switching the Target Language",
  "steps": [
   "1. Navigate to the AI Dub screen. 2. Select a source video and choose a target language. 3. Initiate dubbing and wait for the process to complete successfully. 4. Select a different target language for dubbing. 5. Verify the visibility of previously generated dubbed content."
  ],
  "actual": "Previously generated dubbed content is no longer displayed after the user switches to another target language.",
  "expected": "The system should retain and display previously generated dubbed content, along with its corresponding target language and processing status, when the user selects a different target language.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "47"
 },
 {
  "id": "ISS-048",
  "module": "AI Writer / Content Upload",
  "sev": "Medium",
  "title": "SRT File Upload Rejected as Unsupported in AI Writer",
  "summary": "SRT File Upload Rejected as Unsupported in AI Writer",
  "steps": [
   "1. Navigate to the AI Writer module. 2. Initiate the content upload process. 3. Select an SRT subtitle file for upload. 4. Observe the system response."
  ],
  "actual": "The system displays an “SRT file is not supported” validation message when the user attempts to upload an SRT file through AI Writer.",
  "expected": "The system should accept SRT files if they are part of the supported input formats. If SRT uploads are not supported by design, the accepted file formats should be clearly documented and communicated to the user.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "48"
 },
 {
  "id": "ISS-049",
  "module": "Sidebar / Credits Summary",
  "sev": "Medium",
  "title": "Sidebar Displays Available Credits Instead of Used and Available Credit Breakdown",
  "summary": "Sidebar Displays Available Credits Instead of Used and Available Credit Breakdown",
  "steps": [
   "1. Log in to CloudReel. 2. Observe the credits summary displayed in the sidebar. 3. Compare the displayed credit information with the package credit balance and credits consumed."
  ],
  "actual": "The sidebar displays available credits/package credits instead of showing the number of credits used and the remaining available credits.",
  "expected": "The sidebar should clearly display both used credits and available credits, allowing users to track credit consumption and their remaining balance.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "49"
 },
 {
  "id": "ISS-050",
  "module": "Sidebar / Credits Summary",
  "sev": "Low",
  "title": "Credit Usage Percentage Indicator Missing from Sidebar",
  "summary": "Credit Usage Percentage Indicator Missing from Sidebar",
  "steps": [
   "1. Log in to CloudReel. 2. Observe the credit usage section in the sidebar. 3. Check how the package credit consumption is represented."
  ],
  "actual": "Credit information is displayed as a single bar without a visual indication of the percentage of credits consumed.",
  "expected": "Display a percentage-based progress bar indicating used credits versus total package credits, along with the remaining available credits, to improve visibility into credit consumption.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "50"
 },
 {
  "id": "ISS-051",
  "module": "Content Upload / Sidebar Navigation",
  "sev": "High",
  "title": "Sidebar Navigation Is Non-Functional on from Content Upload Screen",
  "summary": "Sidebar Navigation Is Non-Functional on from Content Upload Screen",
  "steps": [
   "1. Log in to CloudReel. 2. Navigate to the Content Upload screen. 3. Click any module menu from the sidebar. 4. Verify whether the selected module opens."
  ],
  "actual": "Clicking the sidebar menu items does not redirect the user to the corresponding modules while on the Content Upload screen.",
  "expected": "Clicking any available sidebar menu item should navigate the user to the corresponding module successfully, regardless of the current screen.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "51"
 },
 {
  "id": "ISS-052",
  "module": "Subscription / Apple Pay",
  "sev": "Low",
  "title": "Incorrect iOS Version Requirement Message Displayed During Apple Pay Subscription",
  "summary": "Incorrect iOS Version Requirement Message Displayed During Apple Pay Subscription",
  "steps": [
   "1. Open the subscription or plan selection screen on an iOS device. 2. Select a subscription plan. 3. Choose Apple Pay as the payment method. 4. Observe the iOS version requirement message."
  ],
  "actual": "The system displays “Requires iOS 18” instead of the expected wording “Required version: iOS 18.”",
  "expected": "The system should display the iOS compatibility requirement using the correct and consistent wording: “Required version: iOS 18.”",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "this one comes from third party ones not in our code..",
  "sheetId": "52"
 },
 {
  "id": "ISS-053",
  "module": "Authentication / Sign-In",
  "sev": "Medium",
  "title": "Sign-In Button Remains Disabled When Credentials Are Autofilled by the Browser",
  "summary": "Sign-In Button Remains Disabled When Credentials Are Autofilled by the Browser",
  "steps": [
   "1. Open the CloudReel sign-in page. 2. Allow the browser to autofill the saved email address and password. 3. Observe the Sign In button without manually editing either field."
  ],
  "actual": "The email and password fields are populated automatically by the browser, but the Sign In button remains disabled.",
  "expected": "The application should detect browser-autofilled credentials, validate the fields, and enable the Sign In button when the required inputs are valid.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "53"
 },
 {
  "id": "ISS-054",
  "module": "Welcome Email Redirect / Choose Your Plan Popup",
  "sev": "High",
  "title": "404 Page Not Found Error After Closing the Plans Popup from the Welcome Email Redirect",
  "summary": "404 Page Not Found Error After Closing the Plans Popup from the Welcome Email Redirect",
  "steps": [
   "1. Open the welcome email received from CloudReel. 2. Click the link to access the application. 3. Wait for the Choose Your Plan popup to appear. 4. Close the plans popup. 5. Observe the resulting page."
  ],
  "actual": "After the user closes the Choose Your Plan popup, the application displays a 404 Page Not Found error.",
  "expected": "Closing the plans popup should navigate the user to a valid application page without displaying a 404 error.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "54"
 },
 {
  "id": "ISS-055",
  "module": "Account Settings / Authentication",
  "sev": "High",
  "title": "Updated Email Address Displayed in Settings Despite Logging In with the Old Email Address",
  "summary": "Updated Email Address Displayed in Settings Despite Logging In with the Old Email Address",
  "steps": [
   "1. Log in to CloudReel using the existing email address. 2. Navigate to Account Settings. 3. Change the registered email address to a new email address. 4. Log out and log in again using the old email address. 5. Open Account Settings and verify the displayed email address."
  ],
  "actual": "The user can log in using the old email address, but the updated email address is displayed in Settings.",
  "expected": "The application should consistently validate the registered email address after an email change. Once the change is successfully completed and confirmed, authentication and account settings should reflect the same registered email address.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "55"
 },
 {
  "id": "ISS-056",
  "module": "Account Settings / Change Password",
  "sev": "Medium",
  "title": "Change Password Popup Closes When Clicking Outside the Modal",
  "summary": "Change Password Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Log in to CloudReel. 2. Navigate to Account Settings. 3. Open the Change Password popup. 4. Click anywhere outside the popup without submitting the form. 5. Observe the popup behavior."
  ],
  "actual": "The Change Password popup closes when the user clicks outside the modal, potentially causing entered information to be lost.",
  "expected": "The Change Password popup should remain open when the user clicks outside it, or display a confirmation prompt before closing if unsaved changes have been entered.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "56"
 },
 {
  "id": "ISS-057",
  "module": "Account Settings / Change Password",
  "sev": "Medium",
  "title": "Incorrect Error Message Displayed for Invalid Current Password",
  "summary": "Incorrect Error Message Displayed for Invalid Current Password",
  "steps": [
   "1. Log in to CloudReel. 2. Navigate to Account Settings and open the Change Password popup. 3. Enter an incorrect current password and valid values in the remaining fields. 4. Submit the form. 5. Observe the validation message."
  ],
  "actual": "The application displays a generic “Email or incorrect password” message instead of identifying the current password as incorrect.",
  "expected": "The application should display a specific and context-appropriate validation message, such as “Current password is incorrect,” to clearly identify the error and guide the user.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "57"
 },
 {
  "id": "ISS-058",
  "module": "Account Settings / Change Password",
  "sev": "Medium",
  "title": "Validation Error Message Does Not Clear When User Starts Editing Fields in Change Password Popup",
  "summary": "Validation Error Message Does Not Clear When User Starts Editing Fields in Change Password Popup",
  "steps": [
   "1. Log in to CloudReel. 2. Navigate to Account Settings and open the Change Password popup. 3. Trigger a validation error by entering invalid data or submitting incorrect details. 4. Start typing or correcting the values in the input fields. 5. Observe the validation message."
  ],
  "actual": "The validation error message remains visible even after the user starts editing the input fields to correct the entered values.",
  "expected": "The validation message should clear when the user starts correcting the relevant field, or update dynamically based on the current input validation state.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "58"
 },
 {
  "id": "ISS-059",
  "module": "Account Settings / Change Password",
  "sev": "Medium",
  "title": "Change Password Accepts the Same Current and New Password Without Validation",
  "summary": "Change Password Accepts the Same Current and New Password Without Validation",
  "steps": [
   "1. Open the Change Password popup. 2. Enter the same password in the Current Password and New Password fields. 3. Submit the form."
  ],
  "actual": "The system accepts the same password for both fields without displaying a validation message.",
  "expected": "The system should prevent reusing the current password and display a validation message indicating that the new password must be different.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "59"
 },
 {
  "id": "ISS-060",
  "module": "Account Settings / Delete Account",
  "sev": "Medium",
  "title": "Delete Account Confirmation Popup Closes When Clicking Outside the Modal",
  "summary": "Delete Account Confirmation Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Navigate to Account Settings. 2. Click Delete Account to open the confirmation popup. 3. Click outside the popup area."
  ],
  "actual": "The Delete Account popup closes when the user clicks outside the modal.",
  "expected": "The confirmation popup should remain open when clicking outside, preventing accidental dismissal of a critical account-deletion action. It should close only through the intended controls, such as Cancel or the close icon.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "60"
 },
 {
  "id": "ISS-061",
  "module": "Content Upload",
  "sev": "Medium",
  "title": "Multiple Content Upload Functionality Is Not Available",
  "summary": "Multiple Content Upload Functionality Is Not Available",
  "steps": [
   "1. Navigate to the Content Upload page. 2. Attempt to select and upload multiple content files in a single operation."
  ],
  "actual": "The option to upload multiple content files simultaneously is not available.",
  "expected": "The system should allow users to select and upload multiple content files in a single operation, if supported by the product requirements.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Same file is uploading at a time",
  "sheetId": "61"
 },
 {
  "id": "ISS-062",
  "module": "Authentication / Sign-In / Account Deletion",
  "sev": "Medium",
  "title": "Deleted Account Email Address Can Still Not Be Used to Log In",
  "summary": "Deleted Account Email Address Can Still Not Be Used to Log In",
  "steps": [
   "1. Sign in using a registered email address. 2. Delete the account. 3. Attempt to sign in again using the same email address and valid credentials."
  ],
  "actual": "The deleted account's email address cannot be used to log in again.",
  "expected": "The system should handle sign-in attempts for deleted accounts according to the account deletion and recovery policy, displaying a clear, appropriate message or providing an account recovery option if supported.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "62"
 },
 {
  "id": "ISS-063",
  "module": "Authentication / Sign-In",
  "sev": "Medium",
  "title": "Incorrect or Unclear Error Message Displayed When Logging In with a Deleted Account",
  "summary": "Incorrect or Unclear Error Message Displayed When Logging In with a Deleted Account",
  "steps": [
   "1. Log in using a registered email address. 2. Delete the account. 3. Navigate to the Sign-In page. 4. Attempt to log in using the deleted account's email address and credentials."
  ],
  "actual": "The system does not display an appropriate error message when the user attempts to log in with a deleted account.",
  "expected": "The system should display a clear, user-friendly message indicating that the account has been deleted and cannot be used to sign in, with an account recovery option if supported.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "\"We could not sign you in. Check your email and password. If you deleted your account, you can sign up again with the same email. \" getting incorrect text msg",
  "sheetId": "63"
 },
 {
  "id": "ISS-064",
  "module": "Settings → Workspace and Team → Roles",
  "sev": "Medium",
  "title": "Create Role Popup Closes When Clicking Outside the Modal",
  "summary": "Create Role Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Navigate to Settings. 2. Open Workspace and Team. 3. Open the Roles section and click Create Role. 4. Click outside the popup area."
  ],
  "actual": "The Create Role popup closes when the user clicks outside the modal.",
  "expected": "The Create Role popup should remain open when clicking outside the modal to prevent accidental dismissal and loss of entered data. It should close only through the intended controls, such as Cancel or the close icon.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "64"
 },
 {
  "id": "ISS-065",
  "module": "Settings → Workspace and Team → User Invitations",
  "sev": "High",
  "title": "Workspace Invitation Link Fails When User Clicks Join Workspace in Invitation Email",
  "summary": "Workspace Invitation Link Fails When User Clicks Join Workspace in Invitation Email",
  "steps": [
   "1. Navigate to Settings → Workspace and Team. 2. Invite a user to join the workspace. 3. Open the invitation email using the invited email address. 4. Click Join Workspace."
  ],
  "actual": "The user is redirected to an error page displaying “We couldn't open this invitation. It may have expired, already been used, or been sent to a different address.” The user cannot proceed with joining the workspace.",
  "expected": "The invitation link should be validated successfully, and the invited user should be able to join the workspace. If the invitation is expired, already used, or associated with a different email address, the system should display the appropriate message and provide a clear next step.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "65"
 },
 {
  "id": "ISS-066",
  "module": "Command Palette / Video Editor",
  "sev": "Medium",
  "title": "Back Navigation Does Not Return to the Previous Page When Opening the Editor from Command Palette",
  "summary": "Back Navigation Does Not Return to the Previous Page When Opening the Editor from Command Palette",
  "steps": [
   "1. Open the Command Palette using Ctrl + K. 2. Select a command that redirects the user to the Video Editor. 3. Wait for the editor to load. 4. Click the Back button."
  ],
  "actual": "The user is not redirected to the respective previous page from which the editor was opened.",
  "expected": "Clicking Back should return the user to the originating page or module from which the editor was opened.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "66"
 },
 {
  "id": "ISS-067",
  "module": "Settings → Workspace and Team / AI Dubbing",
  "sev": "High",
  "title": "AI Dubbing Is Accessible Despite View-Only Role Permissions",
  "summary": "AI Dubbing Is Accessible Despite View-Only Role Permissions",
  "steps": [
   "1. Navigate to Settings → Workspace and Team. 2. Assign a role with view-only permission for AI Dubbing. 3. Log in as a user assigned that role. 4. Navigate to AI Dubbing."
  ],
  "actual": "AI Dubbing remains accessible even though the assigned role has only view permission.",
  "expected": "AI Dubbing access and available actions should strictly follow the permissions assigned to the user's role.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "67"
 },
 {
  "id": "ISS-068",
  "module": "AI Tools / Navigation",
  "sev": "Medium",
  "title": "Back Navigation Redirects to Home Instead of Projects When AI Tools Are Inaccessible",
  "summary": "Back Navigation Redirects to Home Instead of Projects When AI Tools Are Inaccessible",
  "steps": [
   "1. Log in as a user who does not have permission to access AI Tools. 2. Navigate to the relevant page. 3. Click the Back option."
  ],
  "actual": "The interface indicates Back to Projects, but the user is redirected to the Home page.",
  "expected": "Clicking Back to Projects should redirect the user to the Projects page, regardless of AI Tools access restrictions.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "68"
 },
 {
  "id": "ISS-069",
  "module": "Settings → Workspace and Team",
  "sev": "Medium",
  "title": "Workspace and Team Page Does Not Refresh Automatically After Role or Invitation Changes",
  "summary": "Workspace and Team Page Does Not Refresh Automatically After Role or Invitation Changes",
  "steps": [
   "1. Navigate to Settings → Workspace and Team. 2. Change a user's role or update an invitation. 3. Observe the page after the operation completes."
  ],
  "actual": "The page does not automatically refresh, so the updated role or invitation status is not reflected immediately.",
  "expected": "The page should automatically update the relevant information after a successful role or invitation change, without requiring a manual page refresh.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "69"
 },
 {
  "id": "ISS-070",
  "module": "Video Editor / Workspace / Billing",
  "sev": "High",
  "title": "Workspace and Billing Screens Are Accessible in the Editor Despite Missing Role Permissions",
  "summary": "Workspace and Billing Screens Are Accessible in the Editor Despite Missing Role Permissions",
  "steps": [
   "1. Assign a role that does not have permission to access Workspace and Billing. 2. Log in as the user with that role. 3. Open the Video Editor. 4. Check the available Workspace and Billing screens or navigation options."
  ],
  "actual": "Workspace and Billing screens remain visible or accessible in the editor despite the user's role lacking the required permissions.",
  "expected": "Workspace and Billing screens should be hidden or inaccessible according to the assigned role permissions. Direct navigation should also enforce the same permissions.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "70"
 },
 {
  "id": "ISS-071",
  "module": "Command Palette / AI Writer",
  "sev": "Medium",
  "title": "AI Writer Is Missing from Command Palette Search Results",
  "summary": "AI Writer Is Missing from Command Palette Search Results",
  "steps": [
   "1. Open the Command Palette using Ctrl + K. 2. Search for AI Writer. 3. Observe the search results and available navigation options."
  ],
  "actual": "AI Writer is not displayed in the Command Palette search results, so the user cannot navigate to AI Writer through the Command Palette.",
  "expected": "AI Writer should appear in the Command Palette search results and allow the user to navigate to the AI Writer page when selected, subject to the user's permissions.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "71"
 },
 {
  "id": "ISS-072",
  "module": "Rename / Relevant Module",
  "sev": "Medium",
  "title": "Rename Popup Closes When Clicking Outside the Modal",
  "summary": "Rename Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Navigate to the relevant module. 2. Click Rename to open the rename popup. 3. Enter or modify the name. 4. Click outside the popup area."
  ],
  "actual": "The Rename popup closes when the user clicks outside the modal, potentially resulting in loss of unsaved changes.",
  "expected": "The Rename popup should remain open when the user clicks outside the modal. It should close only through the intended controls, such as Cancel, Save, or the close icon.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "72"
 },
 {
  "id": "ISS-073",
  "module": "Home / Notifications",
  "sev": "Medium",
  "title": "Notifications Are Not Displayed on the Home Screen",
  "summary": "Notifications Are Not Displayed on the Home Screen",
  "steps": [
   "1. Log in to the application. 2. Navigate to the Home screen. 3. Trigger an event that should generate a notification. 4. Check the notifications section on the Home screen."
  ],
  "actual": "Notifications are not received or displayed on the Home screen when an event occurs.",
  "expected": "The system should generate and display relevant notifications on the Home screen when the corresponding events occur.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "73"
 },
 {
  "id": "ISS-074",
  "module": "AI Captions / Content Upload",
  "sev": "Medium",
  "title": "Caption Language Search Does Not Display Matching Results When Typing on the Keyboard",
  "summary": "Caption Language Search Does Not Display Matching Results When Typing on the Keyboard",
  "steps": [
   "1. Navigate to the ai captions content Upload screen. 2. Select file. 3. Open the caption language dropdown. 4. Type the starting letters of a language using the keyboard. 5. Observe the dropdown results."
  ],
  "actual": "Matching caption languages are not displayed when the user types the starting letters using the keyboard.",
  "expected": "The language dropdown should filter and display matching languages dynamically as the user types, allowing the user to select the required caption language.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "74"
 },
 {
  "id": "ISS-075",
  "module": "Co-Creator / Content Search",
  "sev": "Medium",
  "title": "Content Details Are Not Displayed in Co-Creator Search Results",
  "summary": "Content Details Are Not Displayed in Co-Creator Search Results",
  "steps": [
   "1. Navigate to the Co-Creator module. 2. Search for existing content using its name. 3. Observe the search results and content details."
  ],
  "actual": "The content details are not displayed when the user searches for content by name.",
  "expected": "The system should display the matching content and its relevant details when the user searches using a valid content name.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "75"
 },
 {
  "id": "ISS-076",
  "module": "Creations Tab / Credits",
  "sev": "Medium",
  "title": "Credits Balance Does Not Update Automatically After Thumbnail or Snap Shorts Creation",
  "summary": "Credits Balance Does Not Update Automatically After Thumbnail or Snap Shorts Creation",
  "steps": [
   "1. Navigate to the Creations tab for any content. 2. Generate a thumbnail or create Snap Shorts. 3. Wait for the creation process to complete successfully. 4. Check the available credits balance."
  ],
  "actual": "The credits balance does not update automatically after the thumbnail or Snap Shorts is created successfully.",
  "expected": "The system should automatically update the available credits balance after successful thumbnail or Snap Shorts creation, reflecting the credits consumed without requiring a manual page refresh.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "76"
 },
 {
  "id": "ISS-077",
  "module": "AI Captions / Content Details",
  "sev": "High",
  "title": "Source Language Captions Are Generated Again Instead of the Selected Language",
  "summary": "Source Language Captions Are Generated Again Instead of the Selected Language",
  "steps": [
   "1. Open any content in the AI Captions module. 2. Select a target caption language other than the source language. 3. Click Generate Captions. 4. Wait for the caption generation process to complete and verify the generated language."
  ],
  "actual": "The system generates captions in the source language again, while the selected target language is not generated as expected. The UI also indicates that English captions are being generated, regardless of the selected language.",
  "expected": "The system should generate captions in the selected target language and display the correct language and generation status. It should not regenerate source-language captions unless explicitly requested.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "77"
 },
 {
  "id": "ISS-078",
  "module": "Sidebar / Workspace Management",
  "sev": "High",
  "title": "Add Workspace Option in the Sidebar Is Not Functional",
  "summary": "Add Workspace Option in the Sidebar Is Not Functional",
  "steps": [
   "1. Log in to the application. 2. Locate the Add Workspace option in the sidebar. 3. Click Add Workspace. 4. Observe the application behavior."
  ],
  "actual": "No action is performed when the user clicks Add Workspace. The workspace creation flow does not open.",
  "expected": "Clicking Add Workspace should open the workspace creation interface or initiate the appropriate workspace creation flow.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "78"
 },
 {
  "id": "ISS-079",
  "module": "Content Menu / Move to Folder",
  "sev": "Medium",
  "title": "Move to Folder Popup Closes When Clicking Outside the Modal",
  "summary": "Move to Folder Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Navigate to the Content page. 2. Open the content menu. 3. Select Move to Folder. 4. Click outside the popup area."
  ],
  "actual": "The Move to Folder popup closes when the user clicks outside the modal, potentially interrupting the folder selection process.",
  "expected": "The popup should remain open when the user clicks outside the modal to prevent accidental dismissal. It should close only through the intended controls, such as Cancel or the close icon.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "79"
 },
 {
  "id": "ISS-080",
  "module": "Content Menu / Move to Folder",
  "sev": "Medium",
  "title": "Existing Folder Name Is Displayed in the Move to Folder Popup",
  "summary": "Existing Folder Name Is Displayed in the Move to Folder Popup",
  "steps": [
   "1. Navigate to the Content page. 2. Open the content menu 3. Select Move to Folder. 4. Observe the folder name displayed in the popup."
  ],
  "actual": "The existing folder name is displayed in the Move to Folder popup, potentially causing confusion when selecting a destination folder.",
  "expected": "The popup should clearly distinguish the current folder from the available destination folders and indicate the selected destination accurately.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "80"
 },
 {
  "id": "ISS-081",
  "module": "Clips / Content Playback",
  "sev": "Medium",
  "title": "Clip Content Playback Is Cropped at the Edges Depending on Screen Resolution",
  "summary": "Clip Content Playback Is Cropped at the Edges Depending on Screen Resolution",
  "steps": [
   "1. Navigate to the Clips section. 2. Open any clip and start playback. 3. Observe the video at different screen resolutions. 4. Check whether the edges of the video are cropped."
  ],
  "actual": "The clip's edges are cut off during playback, and the cropping varies depending on the screen resolution.",
  "expected": "The video should display correctly within the playback container across supported screen resolutions, preserving the intended aspect ratio without cropping content at the edges.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "81"
 },
 {
  "id": "ISS-082",
  "module": "Content Details / Download / Language Selection",
  "sev": "Medium",
  "title": "Content Title Is Not Displayed in the Selected Language During Download Processing",
  "summary": "Content Title Is Not Displayed in the Selected Language During Download Processing",
  "steps": [
   "1. Open any content that supports multiple languages. 2. Select the required language. 3. Initiate the content download. 4. Observe the displayed title while the content is downloading."
  ],
  "actual": "The content title is not displayed according to the selected language during the download process.",
  "expected": "The content title should be displayed in the selected language throughout the download process, where a localized title is available.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "82"
 },
 {
  "id": "ISS-083",
  "module": "Projects / Folder Management / Rename Folder",
  "sev": "Medium",
  "title": "Save and Cancel Options Are Missing When Renaming a Folder",
  "summary": "Save and Cancel Options Are Missing When Renaming a Folder",
  "steps": [
   "1. Navigate to the Projects module. 2. Select an existing folder and click Rename. 3. Modify the folder name. 4. Observe the available options for confirming or discarding the changes."
  ],
  "actual": "The Save and Cancel options are not displayed while renaming the folder.",
  "expected": "The interface should provide Save and Cancel options so users can confirm the updated folder name or discard the changes.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "83"
 },
 {
  "id": "ISS-084",
  "module": "AI Dubbing / Content Details",
  "sev": "Medium",
  "title": "Source Language Is Displayed as the Target Language When Starting a Second Dubbing Operation",
  "summary": "Source Language Is Displayed as the Target Language When Starting a Second Dubbing Operation",
  "steps": [
   "1. Open any content in the AI Dubbing module. 2. Select a target language and complete the dubbing process. 3. Initiate another dubbing operation for the same content. 4. Observe the available source and target language options."
  ],
  "actual": "After dubbing the content into one language, the source language is displayed again as the language to dub into when starting a second dubbing operation.",
  "expected": "The system should retain the original source language and correctly display the available target languages for subsequent dubbing operations. Previously dubbed languages should be handled according to the product requirements.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "84"
 },
 {
  "id": "ISS-085",
  "module": "Projects / Delete Project",
  "sev": "Medium",
  "title": "Delete Project Confirmation Popup Closes When Clicking Outside the Modal",
  "summary": "Delete Project Confirmation Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Navigate to the Projects module. 2. Select an existing project and click Delete. 3. When the confirmation popup appears, click outside the popup area."
  ],
  "actual": "The Delete Project confirmation popup closes when the user clicks outside the modal.",
  "expected": "The confirmation popup should remain open when the user clicks outside the modal to prevent accidental dismissal of a critical action. It should close only through the intended controls, such as Cancel or the close icon.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "85"
 },
 {
  "id": "ISS-086",
  "module": "Getting Started / Navigation",
  "sev": "Medium",
  "title": "Browser Back Navigation Does Not Return to the Previous Page from the Getting Started Screen",
  "summary": "Browser Back Navigation Does Not Return to the Previous Page from the Getting Started Screen",
  "steps": [
   "1. Navigate to the Getting Started screen from a previous page. 2. Click the browser's Back button. 3. Observe the navigation behavior."
  ],
  "actual": "The user is not redirected to the previously visited page when clicking the browser's Back button from the Getting Started screen.",
  "expected": "The browser's Back button should navigate to the previously visited page, preserving the expected navigation history.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "86"
 },
 {
  "id": "ISS-087",
  "module": "Projects / Bin",
  "sev": "Medium",
  "title": "Content Thumbnails Are Not Displayed in the Bin Tab",
  "summary": "Content Thumbnails Are Not Displayed in the Bin Tab",
  "steps": [
   "1. Navigate to the Projects module. 2. Open the Bin tab. 3. Observe the content items listed in the Bin."
  ],
  "actual": "Thumbnails are not displayed for the content items in the Bin tab.",
  "expected": "The system should display the corresponding thumbnails for each content item in the Bin tab, consistent with the content listing UI.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "87"
 },
 {
  "id": "ISS-088",
  "module": "Video Editor / Transcript Search",
  "sev": "Medium",
  "title": "Transcript Search Fails to Return Matching Results for Keywords Containing Spaces",
  "summary": "Transcript Search Fails to Return Matching Results for Keywords Containing Spaces",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Transcript section. 3. Enter a keyword or phrase containing spaces in the search field. 4. Observe the search results."
  ],
  "actual": "The transcript search does not fetch or display matching results when the search query contains spaces.",
  "expected": "The system should support searching for single keywords and multi-word phrases containing spaces, displaying all matching transcript segments accurately.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "88"
 },
 {
  "id": "ISS-089",
  "module": "Video Editor / Transcript Search",
  "sev": "Medium",
  "title": "Previously Searched Keywords Persist in the Transcript Search Bar When Opening Different Content in the Editor",
  "summary": "Previously Searched Keywords Persist in the Transcript Search Bar When Opening Different Content in the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Transcript section and search for a keyword. 3. Open another content item in the Editor. 4. Observe the transcript search bar."
  ],
  "actual": "The previously searched keyword remains in the search bar when the user opens different content.",
  "expected": "The transcript search bar should be cleared when the user opens different content, ensuring that search terms from the previous content do not persist.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "89"
 },
 {
  "id": "ISS-090",
  "module": "Video Editor / Transcript Search",
  "sev": "Medium",
  "title": "Source and Dubbed Languages Are Incorrectly Displayed as Languages to Dub in Editor Properties",
  "summary": "Source and Dubbed Languages Are Incorrectly Displayed as Languages to Dub in Editor Properties",
  "steps": [
   "1. Open dubbed content in the Video Editor. 2. Navigate to the Properties panel. 3. Observe the source and dubbed language fields."
  ],
  "actual": "Both the source language and the already dubbed language are displayed as languages to dub.",
  "expected": "The Properties panel should correctly distinguish the original source language from the existing dubbed language and display only the appropriate target language options for further dubbing.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "90"
 },
 {
  "id": "ISS-091",
  "module": "Video Editor / Transcript Search",
  "sev": "Medium",
  "title": "Unable to Mute the Second Content Track in the Editor",
  "summary": "Unable to Mute the Second Content Track in the Editor",
  "steps": [
   "1. Open content containing multiple content tracks in the Video Editor. 2. Locate the source content and the second content track. 3. Attempt to mute the second content track using its audio control. 4. Observe the mute functionality."
  ],
  "actual": "The source content can be muted, but the second content track cannot be muted.",
  "expected": "The editor should allow users to mute and unmute each content track independently, including the second track.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "91"
 },
 {
  "id": "ISS-092",
  "module": "Video Editor / Transcript Search",
  "sev": "High",
  "title": "Scene, Logo, and Elements Are Not Saved in the Template from the Editor",
  "summary": "Scene, Logo, and Elements Are Not Saved in the Template from the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Configure the scene, add a logo, and insert the required elements. 3. Save the current configuration as a template. 4. Reopen or preview the saved template. 5. Verify the saved configuration."
  ],
  "actual": "The scene configuration, logo, and added elements are not retained in the saved template.",
  "expected": "The system should save and retain all configured scenes, logos, and elements in the template so they are available when the template is reopened or applied to other content.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: template layers are saved from the video's start (intro left out) and applied after the next video's own intro. Branch fix/editor-qa-bugs, retest after deploy.",
  "sheetId": "92"
 },
 {
  "id": "ISS-093",
  "module": "Video Editor / Transcript / Content Preview",
  "sev": "Medium",
  "title": "Transcript Does Not Automatically Scroll to the Active Segment During Editor Preview Playback",
  "summary": "Transcript Does Not Automatically Scroll to the Active Segment During Editor Preview Playback",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Transcript panel. 3. Start playing the content preview. 4. Observe the transcript as playback progresses through different segments."
  ],
  "actual": "The focus indicator is displayed on the active transcript segment, but the transcript panel does not automatically scroll to keep the active segment visible as the content preview progresses.",
  "expected": "The transcript panel should automatically scroll and keep the currently active transcript segment visible in sync with content preview playback.",
  "reporter": "",
  "date": "",
  "devStatus": "re fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "93"
 },
 {
  "id": "ISS-094",
  "module": "Video Editor / Text Overlay",
  "sev": "High",
  "title": "Text Position Changes Unexpectedly When Adjusting Text Field Dimensions in the Editor",
  "summary": "Text Position Changes Unexpectedly When Adjusting Text Field Dimensions in the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Add a text overlay or select an existing text element. 3. Increase or decrease the text field dimensions or modify text-related properties. 4. Observe the text element's position on the preview canvas."
  ],
  "actual": "The text element unexpectedly changes its position when the user adjusts the text field dimensions or modifies text-related properties.",
  "expected": "The text element should maintain its original position on the canvas when its field dimensions or text properties are adjusted, unless the user explicitly changes its position or alignment.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: text keeps its place when its rotation, size or style changes, and no longer jumps left when editing starts. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "94"
 },
 {
  "id": "ISS-095",
  "module": "Video Editor / Template Management",
  "sev": "High",
  "title": "Logo, Content Positions, and Elements Are Not Saved in the Editor Template",
  "summary": "Logo, Content Positions, and Elements Are Not Saved in the Editor Template",
  "steps": [
   "1. Open any content in the Video Editor. 2. Add or configure a logo, adjust content positions, and add elements. 3. Save the configuration as a template. 4. Reopen or apply the saved template. 5. Verify the saved configuration."
  ],
  "actual": "The logo, content positions, and added elements are not retained in the saved template.",
  "expected": "The system should save and restore the logo, content positioning, and all configured elements when the template is reopened or applied to other content.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: a template's layers keep their timing and motion when it is applied after an intro. Templates saved before 18 Nov still carry the old intro timing, so delete and re-save them first. Expected: re-save the template, apply it to a video with an intro; logo, text and elements start with the footage after the intro, in the same places and timing as saved. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "All are saving but template is applying after preroll because of old template saved with preroll | Dev 13 Nov: fixed (bf43f40). Templates saved before this fix keep the old timing, so re-save them.",
  "sheetId": "95"
 },
 {
  "id": "ISS-096",
  "module": "Projects / Downloaded Tab / Content Playback",
  "sev": "High",
  "title": "Exported Content Cannot Be Played from the Downloaded Tab in Projects",
  "summary": "Exported Content Cannot Be Played from the Downloaded Tab in Projects",
  "steps": [
   "1. Open the Projects module. 2. Navigate to the Downloaded tab. 3. Locate previously exported content. 4. Click the content to play it."
  ],
  "actual": "The exported content is available in the Downloaded tab, but the user is unable to play it.",
  "expected": "The system should allow users to play exported content from the Downloaded tab. The exported file should be accessible and playable without errors.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "96"
 },
 {
  "id": "ISS-097",
  "module": "Video Editor / Export",
  "sev": "High",
  "title": "Text and Elements Are Missing from Exported Content After Applying Editor Changes",
  "summary": "Text and Elements Are Missing from Exported Content After Applying Editor Changes",
  "steps": [
   "1. Open any content in the Video Editor. 2. Add or modify text overlays and other elements. 3. Export the content with the changes applied. 4. Play or preview the exported output."
  ],
  "actual": "The exported content does not include the text overlays and added elements configured in the editor.",
  "expected": "The exported output should retain all text overlays, elements, and other applied editor changes, matching the final preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "97"
 },
 {
  "id": "ISS-098",
  "module": "Exported Content Displays the Original Source Name Instead of the Updated Content Name in downloads tab",
  "sev": "Medium",
  "title": "Exported Content Displays the Original Source Name Instead of the Updated Content Name in downloads tab",
  "summary": "Exported Content Displays the Original Source Name Instead of the Updated Content Name in downloads tab",
  "steps": [
   "1. Open any content in the Video Editor. 2. Make the required changes and update the content name, if applicable. 3. Export the content. 4. Navigate to Projects and locate the exported content. 5. Verify the displayed content name in downloads tab"
  ],
  "actual": "The exported content is displayed with the original source content name instead of the updated or exported content name.",
  "expected": "The system should display the correct updated or exported content name for the exported output, rather than retaining the original source content name.",
  "reporter": "",
  "date": "",
  "devStatus": "re fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: not in the video editor. The editor sends the export name with the render job; the Downloads tab in Projects (or the backend) shows the source name.",
  "sheetId": "98"
 },
 {
  "id": "ISS-099",
  "module": "Video Editor / Theme Settings",
  "sev": "Medium",
  "title": "Theme Colors Do Not Update When Changed in the Editor",
  "summary": "Theme Colors Do Not Update When Changed in the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the theme settings. 3. Select a different theme color or modify the existing color. 4. Observe the changes in the editor preview."
  ],
  "actual": "The theme colors do not change in the editor preview after the user selects a different color.",
  "expected": "The selected theme colors should be applied immediately and reflected correctly in the editor preview and in the exported output, where applicable.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "99"
 },
 {
  "id": "ISS-100",
  "module": "Home / Projects",
  "sev": "Medium",
  "title": "Corresponding AI Feature Tags Are Not Displayed on Content in Home and Projects Screens",
  "summary": "Corresponding AI Feature Tags Are Not Displayed on Content in Home and Projects Screens",
  "steps": [
   "1. Navigate to any AI feature, such as AI Captions, AI Dubbing, AI Writer, or Portrait Pro. 2. Process content using the selected AI feature. 3. Navigate to the Home and Projects screens. 4. Locate the processed content and check its displayed tags."
  ],
  "actual": "The corresponding AI feature tag is not displayed on the processed content in the Home and Projects screens.",
  "expected": "The system should display the appropriate AI feature tag on the content in both Home and Projects, based on the AI feature used to process it.",
  "reporter": "",
  "date": "",
  "devStatus": "no need",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "100"
 },
 {
  "id": "ISS-101",
  "module": "AI Features / Projects",
  "sev": "Medium",
  "title": "Processed Content Does Not Appear Automatically in Projects After Returning from an AI Feature",
  "summary": "Processed Content Does Not Appear Automatically in Projects After Returning from an AI Feature",
  "steps": [
   "1. Open any AI feature, such as AI Captions, AI Dubbing, AI Writer, or Portrait Pro. 2. Process content successfully. 3. Click Back to return to the Projects screen. 4. Observe the content listing without refreshing the page."
  ],
  "actual": "The processed content is not displayed in Projects until the user manually refreshes the page.",
  "expected": "The Projects screen should automatically refresh or update its content list when the user returns from an AI feature, displaying the newly processed content without requiring a manual refresh.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "101"
 },
 {
  "id": "ISS-102",
  "module": "Video Editor / Keyboard Shortcuts",
  "sev": "Low",
  "title": "Keyboard Shortcuts Are Not Available for Common Editing Actions in the Editor",
  "summary": "Keyboard Shortcuts Are Not Available for Common Editing Actions in the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Attempt to perform common editing actions using keyboard shortcuts. 3. Verify whether shortcuts are available for supported editing operations."
  ],
  "actual": "Keyboard shortcuts are not available or are insufficient for performing common editing actions efficiently.",
  "expected": "The editor should provide keyboard shortcuts for frequently used actions, such as Undo, Redo, Copy, Paste, Delete, Split, and Save, where applicable. Shortcuts should be documented and should not conflict with normal text entry.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "102"
 },
 {
  "id": "ISS-103",
  "module": "Video Editor / Timeline / Seekbar",
  "sev": "Medium",
  "title": "No Action Is Performed When Clicking the “Fit the Whole Edit in View” Option",
  "summary": "No Action Is Performed When Clicking the “Fit the Whole Edit in View” Option",
  "steps": [
   "1. Open any content in the Video Editor. 2. Locate the Fit the Whole Edit in View option above the seekbar. 3. Click the option. 4. Observe the timeline behavior."
  ],
  "actual": "No action is performed when the user clicks the option. The timeline view remains unchanged.",
  "expected": "The timeline should automatically adjust its zoom level to display the entire edit within the visible timeline area.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "103"
 },
 {
  "id": "ISS-104",
  "module": "Projects / Clips Tab / Clip Details",
  "sev": "Medium",
  "title": "Content Title Is Not Displayed Below the Clip When Opened from the Clips Tab",
  "summary": "Content Title Is Not Displayed Below the Clip When Opened from the Clips Tab",
  "steps": [
   "1. Navigate to any project in the Projects module. 2. Open the Clips tab. 3. Select any clip. 4. Observe the area below the clip."
  ],
  "actual": "The original content title is not displayed below the selected clip.",
  "expected": "The system should display the associated content title below the clip so users can identify the source content.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "104"
 },
 {
  "id": "ISS-105",
  "module": "Projects / Clips Tab / Preview",
  "sev": "Medium",
  "title": "Clip Preview Does Not Adjust According to the Clip Aspect Ratio",
  "summary": "Clip Preview Does Not Adjust According to the Clip Aspect Ratio",
  "steps": [
   "1. Navigate to any project in the Projects module. 2. Open the Clips tab. 3. Select clips with different aspect ratios, such as 9:16, 1:1, and 16:9. 4. Observe the preview dimensions and layout for each clip."
  ],
  "actual": "The clip preview does not adjust its layout according to the selected clip's aspect ratio.",
  "expected": "The preview should dynamically adapt to the selected clip's aspect ratio while preserving the correct proportions and displaying the entire clip without unintended cropping or distortion.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "105"
 },
 {
  "id": "ISS-106",
  "module": "Projects / Clips Tab / AI Dubbing",
  "sev": "Medium",
  "title": "AI Dub Popup Closes When Clicking Outside the Modal from the Clips Tab",
  "summary": "AI Dub Popup Closes When Clicking Outside the Modal from the Clips Tab",
  "steps": [
   "1. Navigate to any project in the Projects module. 2. Open the Clips tab. 3. Open the AI Dub popup for any clip. 4. Click outside the popup area."
  ],
  "actual": "The AI Dub popup closes when the user clicks outside the modal, potentially interrupting the dubbing workflow or causing loss of unsaved selections.",
  "expected": "The AI Dub popup should remain open when the user clicks outside the modal. It should close only through the intended controls, such as Cancel or the close icon.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "106"
 },
 {
  "id": "ISS-107",
  "module": "Projects / Clips Tab / AI Dubbing",
  "sev": "Medium",
  "title": "Clip Selection Checkboxes Are Displayed in the AI Dub Popup from the Clips Tab",
  "summary": "Clip Selection Checkboxes Are Displayed in the AI Dub Popup from the Clips Tab",
  "steps": [
   "1. Navigate to any project in the Projects module. 2. Open the Clips tab. 3. Open the AI Dub popup for a clip. 4. Observe the popup contents."
  ],
  "actual": "Clip selection checkboxes are displayed inside the AI Dub popup, allowing clips to be selected.",
  "expected": "The AI Dub popup should display only the relevant dubbing options and the intended clip information. Clip selection checkboxes should not be displayed unless multi-clip selection is explicitly supported by the design.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "107"
 },
 {
  "id": "ISS-108",
  "module": "Projects / Clips Tab / Clip Playback",
  "sev": "Medium",
  "title": "Clip Playback Seekbar Is Not Functional",
  "summary": "Clip Playback Seekbar Is Not Functional",
  "steps": [
   "1. Navigate to any project in the Projects module. 2. Open the Clips tab. 3. Play any clip. 4. Attempt to seek to a different position using the playback seekbar."
  ],
  "actual": "The seekbar does not respond to user interaction, preventing navigation to the desired playback position.",
  "expected": "The seekbar should allow users to seek forward or backward to any valid position within the clip and update playback accordingly.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "108"
 },
 {
  "id": "ISS-109",
  "module": "Projects / Recordings Tab / AI Dubbing",
  "sev": "Medium",
  "title": "Previously Dubbed Languages Are Incorrectly Displayed as Available Target Languages",
  "summary": "Previously Dubbed Languages Are Incorrectly Displayed as Available Target Languages",
  "steps": [
   "1. Navigate to the Projects module. 2. Open the Recordings tab. 3. Select content that has already been dubbed into one or more languages. 4. Click Dub and observe the available target language options."
  ],
  "actual": "Languages that have already been dubbed are displayed as available languages to dub again.",
  "expected": "The system should correctly identify previously dubbed languages and exclude them from the available target language options, while retaining the original source language and allowing other supported target languages.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "109"
 },
 {
  "id": "ISS-110",
  "module": "AI Dubbing / Content Details",
  "sev": "High",
  "title": "AI Dubbing Fails to Generate Dubbed Content for Any Input",
  "summary": "AI Dubbing Fails to Generate Dubbed Content for Any Input",
  "steps": [
   "1. Navigate to the AI Dubbing module. 2. Select any content. 3. Choose a supported target language. 4. Click Start Dubbing. 5. Observe the dubbing process and generated output."
  ],
  "actual": "The system fails to generate dubbed content for any selected input.",
  "expected": "The system should successfully process the selected content and generate dubbed output in the chosen target language. If processing fails, it should display a clear, actionable error message.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "110"
 },
 {
  "id": "ISS-111",
  "module": "Content Upload / Co-Creator",
  "sev": "High",
  "title": "Co-Creator Does Not Respond to User Queries on the Content Upload Screen",
  "summary": "Co-Creator Does Not Respond to User Queries on the Content Upload Screen",
  "steps": [
   "1. Navigate to the Content Upload screen. 2. Enter a query in the input field. 3. Submit the query or attempt to perform an action through Co-Creator."
  ],
  "actual": "Co-Creator does not provide any response or perform the requested action after the user submits a query.",
  "expected": "Co-Creator should process the user's query, provide a relevant response, and perform the requested supported action. If the request cannot be processed, an appropriate error message should be displayed.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "UI changed",
  "sheetId": "111"
 },
 {
  "id": "ISS-112",
  "module": "Projects / Recordings Tab / Video Details",
  "sev": "Medium",
  "title": "Video Details Popup Closes When Clicking Outside the Modal",
  "summary": "Video Details Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Navigate to the Projects module. 2. Open the Recordings tab. 3. Open the Video Details popup. 4. Click outside the popup area."
  ],
  "actual": "The Video Details popup closes when the user clicks outside the modal.",
  "expected": "The Video Details popup should remain open when the user clicks outside the modal and close only through the intended controls, such as the close icon or designated action buttons.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "112"
 },
 {
  "id": "ISS-113",
  "module": "Projects / Recordings Tab / Video Details",
  "sev": "Medium",
  "title": "Category Information Is Missing from the Video Details Popup",
  "summary": "Category Information Is Missing from the Video Details Popup",
  "steps": [
   "1. Navigate to the Projects module. 2. Open the Recordings tab. 3. Open the Video Details popup. 4. Check the displayed video metadata."
  ],
  "actual": "Category information is not displayed in the Video Details popup.",
  "expected": "The Video Details popup should display the relevant category information for the selected video, where applicable.",
  "reporter": "",
  "date": "",
  "devStatus": "as per design category is not avaiable in design",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "113"
 },
 {
  "id": "ISS-114",
  "module": "Projects / Folder Management / Rename",
  "sev": "Medium",
  "title": "Rename Validation Message Is Missing When the file Name Exceeds 64 Characters",
  "summary": "Rename Validation Message Is Missing When the file Name Exceeds 64 Characters",
  "steps": [
   "1. Navigate to the Projects module. 2. Select any video and click Rename. 3. Enter a name containing more than 64 characters. 4. Click Save."
  ],
  "actual": "No validation message is displayed when the user attempts to save a name exceeding the 64-character limit.",
  "expected": "The system should display a clear validation message indicating that the name cannot exceed 64 characters and prevent saving the invalid name.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "114"
 },
 {
  "id": "ISS-115",
  "module": "Brand Kits / Overlay Templates",
  "sev": "High",
  "title": "Overlay Template Upload Fails in the Brand Kits Module",
  "summary": "Overlay Template Upload Fails in the Brand Kits Module",
  "steps": [
   "1. Navigate to the Brand Kits module. 2. Open the Overlay Templates section. 3. Select the option to upload an overlay template. 4. Choose a valid template file and initiate the upload. 5. Observe the upload result."
  ],
  "actual": "The overlay template is not uploaded successfully.",
  "expected": "The system should allow users to upload valid overlay template files and display a success confirmation once the upload is complete. If the file is unsupported or invalid, an appropriate validation message should be displayed.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "115"
 },
 {
  "id": "ISS-116",
  "module": "Brand Kits / Stickers",
  "sev": "High",
  "title": "Sticker Upload Fails in the Brand Kits Module",
  "summary": "Sticker Upload Fails in the Brand Kits Module",
  "steps": [
   "1. Navigate to the Brand Kits module. 2. Open the Stickers section. 3. Click the option to upload a sticker. 4. Select a valid sticker file and initiate the upload. 5. Observe the upload result."
  ],
  "actual": "The sticker is not uploaded successfully.",
  "expected": "The system should allow users to upload valid sticker files and display a success confirmation once the upload is complete. If the file is unsupported or invalid, an appropriate validation message should be displayed.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "116"
 },
 {
  "id": "ISS-117",
  "module": "Unspecified",
  "sev": "High",
  "title": "Audio Feature Incorrectly Prompts for a Paid Plan Despite an Active Subscription, and Upgrade Button Is Non-Functional",
  "summary": "Audio Feature Incorrectly Prompts for a Paid Plan Despite an Active Subscription, and Upgrade Button Is Non-Functional",
  "steps": [
   "1. Log in with an account that has an active subscription. 2. Navigate to the Brand Kits module. 3. Open the Audio section. 4. Observe the subscription prompt and click Upgrade."
  ],
  "actual": "The message “Upgrade to a paid plan to unlock this feature” is displayed despite an active subscription. Clicking Upgrade does not trigger any action or redirect the user to the subscription page.",
  "expected": "The system should recognize the user's active subscription and grant access to the Audio feature if it is included in the subscribed plan. If an upgrade is required, clicking Upgrade should redirect the user to the appropriate subscription or plan selection page.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "now it shows coming soon",
  "sheetId": "117"
 },
 {
  "id": "ISS-118",
  "module": "Projects / Creations",
  "sev": "Low",
  "title": "Separate Scrollbar Recommended for the Left Navigation Menu on the Creations Screen",
  "summary": "Separate Scrollbar Recommended for the Left Navigation Menu on the Creations Screen",
  "steps": [
   "1. Navigate to the Projects module. 2. Open the Creations screen. 3. Scroll through the page and observe the left navigation menu and main content area."
  ],
  "actual": "A single scrollbar is used for the entire screen, causing the left navigation menu to scroll along with the main content.",
  "expected": "The left navigation menu should have an independent scrollbar, allowing users to scroll through menu items separately while keeping the main content area independently scrollable.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "118"
 },
 {
  "id": "ISS-119",
  "module": "Projects / Clips Tab / Preview",
  "sev": "Medium",
  "title": "Clip Aspect Ratio Dropdown Defaults to 9:16 While the Content Is Displayed in 16:9",
  "summary": "Clip Aspect Ratio Dropdown Defaults to 9:16 While the Content Is Displayed in 16:9",
  "steps": [
   "1. Navigate to the Projects module. 2. Open any project and navigate to the Clips tab. 3. Open the aspect ratio dropdown. 4. Observe the default selected ratio and the displayed clip dimensions."
  ],
  "actual": "The aspect ratio dropdown defaults to 9:16, but the content is displayed in 16:9.",
  "expected": "The selected aspect ratio should match the actual clip preview dimensions. The dropdown and preview should remain consistent with the selected ratio.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "119"
 },
 {
  "id": "ISS-120",
  "module": "Projects / Recordings Tab / Video Player",
  "sev": "Medium",
  "title": "Volume Control Is Not Functional in the Recordings Tab Player",
  "summary": "Volume Control Is Not Functional in the Recordings Tab Player",
  "steps": [
   "1. Navigate to the Projects module. 2. Open the Recordings tab. 3. Play the contnet. 4. Attempt to increase or decrease the volume using the player’s volume control."
  ],
  "actual": "The volume control does not respond to user interaction, preventing the user from adjusting the playback volume.",
  "expected": "The volume control should allow users to increase, decrease, mute, and unmute the recording audio as expected.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "120"
 },
 {
  "id": "ISS-121",
  "module": "Video Editor / Audio Controls",
  "sev": "High",
  "title": "Copyright Audio Continues Playing After Muting It in the Editor",
  "summary": "Copyright Audio Continues Playing After Muting It in the Editor",
  "steps": [
   "1. Open any content in the Video Editor that contains copyright audio. 2. Click the Mute option for the audio. 3. Play the content preview and observe the audio output."
  ],
  "actual": "The copyright audio continues playing even after the user clicks the Mute option.",
  "expected": "The copyright audio should be completely muted when the user clicks Mute and should remain muted during playback and preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "After clicking mute option (audio is not coming) but unable to unmute again | Dev 13 Nov: the flagged-music row now has an Unmute button that restores the muted segments.",
  "sheetId": "121"
 },
 {
  "id": "ISS-122",
  "module": "Projects / Recordings Tab / Video Player",
  "sev": "Medium",
  "title": "Playback Timing Information Is Missing from the Player in the Recordings Tab",
  "summary": "Playback Timing Information Is Missing from the Player in the Recordings Tab",
  "steps": [
   "1. Navigate to the Projects module. 2. Open the Recordings tab. 3. Play any recording. 4. Observe the player controls and seekbar."
  ],
  "actual": "The player does not display playback timing information, such as the current playback time and total recording duration.",
  "expected": "The player should display the current playback time and total recording duration alongside the seekbar, allowing users to track playback progress accurately.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "122"
 },
 {
  "id": "ISS-123",
  "module": "Portrait Pro / Content Upload / Reframing",
  "sev": "Medium",
  "title": "Aspect Ratio Displays as 9:16 Instead of the Selected Reframed Ratio After Content Upload",
  "summary": "Aspect Ratio Displays as 9:16 Instead of the Selected Reframed Ratio After Content Upload",
  "steps": [
   "1. Navigate to the Portrait Pro content upload screen. 2. Upload content for reframing. 3. Select an aspect ratio other than 9:16. 4. Complete the reframing process. 5. Check the aspect ratio displayed for the generated content."
  ],
  "actual": "The generated content displays a 9:16 aspect ratio instead of the ratio selected during reframing.",
  "expected": "The system should apply and display the selected aspect ratio consistently in the generated content and its details after reframing.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "123"
 },
 {
  "id": "ISS-124",
  "module": "Projects / Clips Tab / Preview",
  "sev": "High",
  "title": "Clip Preview Remains in Landscape Mode After Selecting Portrait Aspect Ratio",
  "summary": "Clip Preview Remains in Landscape Mode After Selecting Portrait Aspect Ratio",
  "steps": [
   "1. Navigate to the Projects module. 2. Open any project and navigate to the Clips tab. 3. Change the clip aspect ratio to a portrait ratio (9:16). 4. Observe the clip preview."
  ],
  "actual": "The clip continues to display in landscape mode even after selecting the portrait aspect ratio.",
  "expected": "The clip preview should update according to the selected portrait aspect ratio and display the content in the correct orientation without cropping or distortion.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "124"
 },
 {
  "id": "ISS-125",
  "module": "AI Features / Job Processing / Content Details",
  "sev": "Medium",
  "title": "Content Details Page Does Not Open Automatically After Job Completion When the Review Result Button Appears",
  "summary": "Content Details Page Does Not Open Automatically After Job Completion When the Review Result Button Appears",
  "steps": [
   "1. Navigate to any AI feature and initiate a content processing job. 2. Wait for the job to complete successfully. 3. Observe the Review Result button after processing completes. 4. Check whether the Content Details page opens automatically."
  ],
  "actual": "The job completes and the Review Result button appears, but the Content Details page does not open automatically.",
  "expected": "The system should automatically redirect the user to the corresponding Content Details page after successful job completion, while also providing the Review Result option to access the generated output.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "125"
 },
 {
  "id": "ISS-126",
  "module": "Projects / Clips Tab",
  "sev": "High",
  "title": "CloudReel and Remove Silence Options Are Not Functional in the Clips Tab",
  "summary": "CloudReel and Remove Silence Options Are Not Functional in the Clips Tab",
  "steps": [
   "1. Navigate to the Projects module. 2. Open any project and navigate to the Clips tab. 3. Click the CloudReel option. 4. Observe the application behavior. 5. Repeat the steps using the Remove Silence option."
  ],
  "actual": "No action is performed when the user clicks either CloudReel or Remove Silence.",
  "expected": "Both options should trigger their respective functionalities and process the selected clip as expected. If an operation cannot be performed, the system should display an appropriate message.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "126"
 },
 {
  "id": "ISS-127",
  "module": "Portrait Pro / Reframe / Clips",
  "sev": "High",
  "title": "Clips Are Not Generated Automatically After Reframing Job Completion",
  "summary": "Clips Are Not Generated Automatically After Reframing Job Completion",
  "steps": [
   "1. Navigate to the Portrait Pro content upload screen. 2. Upload content and initiate the reframing process with selecting clips as well. 3. Wait until the processing job status changes to Ready. 4. Navigate to the Clips tab and check the generated clips."
  ],
  "actual": "The reframing job completes successfully and the status changes to Ready, but clips are not generated automatically.",
  "expected": "The system should automatically generate clips after successful reframing, if clip generation is part of the configured workflow, and display them in the Clips tab.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "127"
 },
 {
  "id": "ISS-128",
  "module": "Add Files / Content Upload",
  "sev": "High",
  "title": "Continue Button Remains Disabled After Providing a Valid URL on the Add Files Screen",
  "summary": "Continue Button Remains Disabled After Providing a Valid URL on the Add Files Screen",
  "steps": [
   "1. Navigate to the projects-> upload video. 2. Select the URL upload option. 3. Enter a valid content URL in the input field. 4. Observe the Continue button."
  ],
  "actual": "The Continue button remains disabled even after the user provides a valid URL.",
  "expected": "The Continue button should become enabled once a valid and supported URL is entered, allowing the user to proceed with the upload process.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "128"
 },
 {
  "id": "ISS-129",
  "module": "Add Files / Content Upload",
  "sev": "Medium",
  "title": "No Navigation or Next-Step Action Is Provided After Content Upload Completion",
  "summary": "No Navigation or Next-Step Action Is Provided After Content Upload Completion",
  "steps": [
   "1. Navigate to the projects-> upload video. 2. Upload a multi content files. 3. Wait until the upload is completed successfully. 4. Observe the available navigation options and post-upload actions."
  ],
  "actual": "After the content upload is completed, the user is not redirected to the content list, Projects, or Home screen. The View Video option is also not displayed.",
  "expected": "After successful upload, the system should provide an appropriate next-step action, such as View Video, and allow the user to navigate to the content list, Projects, or Home screen.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "129"
 },
 {
  "id": "ISS-130",
  "module": "Video Editor / Frame Management",
  "sev": "Medium",
  "title": "Swap Functionality Is Not Working When Selecting a Frame in the Editor",
  "summary": "Swap Functionality Is Not Working When Selecting a Frame in the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the frame selection section. 3. Select any frame. 4. Click the Swap option. 5. Observe the frame behavior."
  ],
  "actual": "The Swap functionality does not perform any action when the user selects a frame and clicks Swap.",
  "expected": "The system should successfully swap the selected frame with the intended frame and update the editor preview accordingly.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "130"
 },
 {
  "id": "ISS-131",
  "module": "Video Editor / Multi-Speaker Layout",
  "sev": "Medium",
  "title": "Editor Preview Does Not Update Based on the Selected Multi-Speaker Layout",
  "summary": "Editor Preview Does Not Update Based on the Selected Multi-Speaker Layout",
  "steps": [
   "1. Open any content containing multiple speakers in the Video Editor. 2. Navigate to the Multi-Speaker Layout settings. 3. Select any available layout. 4. Observe the editor preview."
  ],
  "actual": "The editor preview does not display or update according to the selected multi-speaker layout.",
  "expected": "The editor preview should immediately reflect the selected multi-speaker layout, displaying the speakers in the configured arrangement.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: on a Studio recording the Scenes lane now splits where the Studio changed layout, so its blocks are the same scenes the canvas edits. Expected: pick a multi-speaker layout on a Scenes lane block; the preview shows that layout for the whole block from its start, and other blocks keep theirs. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "131"
 },
 {
  "id": "ISS-132",
  "module": "Video Editor / Frame Properties",
  "sev": "Medium",
  "title": "Effects and Color Options Are Missing from Properties When Selecting a Frame",
  "summary": "Effects and Color Options Are Missing from Properties When Selecting a Frame",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the frame selection section. 3. Select any frame. 4. Open the Properties panel. 5. Check the available Effects and Color options."
  ],
  "actual": "Effects and Color options are not displayed in the Properties panel when a frame is selected.",
  "expected": "The Properties panel should display the available Effects and Color options for the selected frame, allowing users to customize its visual appearance.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "132"
 },
 {
  "id": "ISS-133",
  "module": "Video Editor / Scene Settings",
  "sev": "Medium",
  "title": "Similar and This Scene Options Are Not Functional in the Editor",
  "summary": "Similar and This Scene Options Are Not Functional in the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Scene settings. 3. Click the Similar option. 4. Observe the behavior. 5. Repeat the steps by clicking This Scene."
  ],
  "actual": "No action is performed when the user clicks either Similar or This Scene.",
  "expected": "Both options should perform their respective actions and apply the selected scene settings as intended.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: Similar scenes also works when the editor opens on the intro or outro (it uses the nearest video scene). Expected: change a scene's layout or look, then choose Similar scenes; the scenes led by the same speaker take it at once (Undo reverts), or a message says they already look the same. This scene changes only the current scene. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "133"
 },
 {
  "id": "ISS-134",
  "module": "Video Editor / Layout / Frame Management",
  "sev": "High",
  "title": "Unable to Replace Layout Frames with External Images or Videos",
  "summary": "Unable to Replace Layout Frames with External Images or Videos",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Layout section. 3. Select any existing layout frame. 4. Attempt to replace the selected frame with an external image or video. 5. Observe the frame content."
  ],
  "actual": "The selected layout frame is not updated when the user attempts to replace its content with an external image or video.",
  "expected": "The system should allow users to replace layout frame content with external images or videos and immediately reflect the updated media in the editor preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: select a frame and open its source picker: it lists the project's images and videos too. The same fix covers CR-44.",
  "sheetId": "134"
 },
 {
  "id": "ISS-135",
  "module": "Video Editor / Reframe",
  "sev": "Medium",
  "title": "Editor UI Options Overlap When Reframe Settings Are Displayed",
  "summary": "Editor UI Options Overlap When Reframe Settings Are Displayed",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Reframe options. 3. Open or display the Reframe settings. 4. Observe the alignment and positioning of the other editor options."
  ],
  "actual": "Multiple editor UI options overlap or merge when the Reframe settings are displayed, making the interface difficult to use.",
  "expected": "All editor options should remain properly aligned, spaced, and independently accessible when the Reframe settings are open. The layout should adapt without overlapping other controls.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "135"
 },
 {
  "id": "ISS-136",
  "module": "Video Editor / Reframe",
  "sev": "High",
  "title": "Reframe Functionality Is Not Working in the Editor",
  "summary": "Reframe Functionality Is Not Working in the Editor",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Reframe option. 3. Select the required reframing settings. 4. Click the option to apply or generate the reframe. 5. Observe the editor preview and output."
  ],
  "actual": "The Reframe functionality does not perform the expected action, and the content is not reframed according to the selected settings.",
  "expected": "The system should successfully apply the selected reframing settings and update the editor preview with the reframed content.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "136"
 },
 {
  "id": "ISS-137",
  "module": "Video Editor / Elements / Processing Bar",
  "sev": "Medium",
  "title": "Multiple Processing Bars Are Added When Clicking the Processing Bar Element",
  "summary": "Multiple Processing Bars Are Added When Clicking the Processing Bar Element",
  "steps": [
   "1. Open any content in the Video Editor. 2. Navigate to the Elements section. 3. Click the Processing Bar element multiple times or attempt to add it. 4. Observe the elements added to the editor timeline or preview."
  ],
  "actual": "Multiple Processing Bar elements are added when the user clicks the Processing Bar option, resulting in duplicate elements.",
  "expected": "The system should prevent unintended duplicate Processing Bar elements when the user clicks the option. Only one element should be added per intended action, unless multiple instances are explicitly supported.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "137"
 },
 {
  "id": "ISS-138",
  "module": "Video Editor / Export",
  "sev": "Medium",
  "title": "Export Popup Closes When Clicking Outside the Modal",
  "summary": "Export Popup Closes When Clicking Outside the Modal",
  "steps": [
   "1. Open any content in the Video Editor. 2. Click the Export option to open the export popup. 3. Click outside the popup area."
  ],
  "actual": "The Export popup closes when the user clicks outside the modal, potentially interrupting the export configuration process and causing loss of selected settings.",
  "expected": "The Export popup should remain open when the user clicks outside the modal. It should close only through the intended controls, such as Cancel or the close icon.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "138"
 },
 {
  "id": "ISS-139",
  "module": "Video Editor / Notifications",
  "sev": "Low",
  "title": "Editor Notifications Cannot Be Dismissed Manually",
  "summary": "Editor Notifications Cannot Be Dismissed Manually",
  "steps": [
   "1. Open any content in the Video Editor. 2. Perform an action such as Export or Apply Changes. 3. Observe the notification message displayed in the editor. 4. Attempt to dismiss or clear the notification manually."
  ],
  "actual": "The user is unable to manually dismiss or clear notification messages, such as Export or Applied messages.",
  "expected": "The system should provide a close or dismiss option for notifications, allowing users to clear them manually when required.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "139"
 },
 {
  "id": "ISS-140",
  "module": "Video Editor / Edit / Resume to Edit",
  "sev": "Medium",
  "title": "Previous “Video Exported” Notification Appears Every Time the User Opens or Resumes Editing",
  "summary": "Previous “Video Exported” Notification Appears Every Time the User Opens or Resumes Editing",
  "steps": [
   "1. Open any content in the Video Editor. 2. Export the content successfully. 3. Exit the editor. 4. Reopen the same content using Edit or Resume to Edit. 5. Observe the notification message."
  ],
  "actual": "The previous “Video Exported” success notification appears again every time the user opens or resumes editing, even though no new export action has been performed.",
  "expected": "The system should display the “Video Exported” notification only immediately after a successful export operation. Previous notifications should not reappear when the user opens or resumes editing.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "140"
 },
 {
  "id": "ISS-141",
  "module": "Video Editor / Timeline / External Audio",
  "sev": "Low",
  "title": "Audio Heading Remains Visible in the Timeline Sidebar After Deleting External Audio",
  "summary": "Audio Heading Remains Visible in the Timeline Sidebar After Deleting External Audio",
  "steps": [
   "1. Open any content in the Video Editor. 2. Add an external audio file to the timeline. 3. Delete the external audio track from the timeline. 4. Observe the audio heading in the timeline sidebar."
  ],
  "actual": "The external audio track is deleted, but the Audio heading remains visible in the timeline sidebar.",
  "expected": "The Audio heading should be removed or updated when no external audio tracks remain in the timeline. The sidebar should accurately reflect the available timeline elements.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: an audio track emptied by deleting or moving its clips is removed, and Layers lists only tracks that have clips. Retest after deploy.",
  "qaStatus": "Reopen",
  "qaNote": "Dev 13 Nov: deleting an audio track's last clip now removes the track and its heading.",
  "sheetId": "141"
 },
 {
  "id": "ISS-142",
  "module": "Video Editor / Timeline",
  "sev": "Medium",
  "title": "Solo Option Not Working in the Timeline",
  "summary": "Solo Option Not Working in the Timeline",
  "steps": [
   "1. Open a video in the Editor. 2. Navigate to the Timeline. 3. Click the Solo option on a track. 4. Observe the playback behavior."
  ],
  "actual": "The Solo option does not work when enabled.",
  "expected": "The Solo option should isolate the selected track during playback by muting other tracks.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: Solo and Mute now also silence the Studio participants' own audio, as the export does.",
  "sheetId": "142"
 },
 {
  "id": "ISS-143",
  "module": "Video Editor / Timeline / Audio Editing",
  "sev": "High",
  "title": "Audio Editing Controls Not Functioning in the Editor",
  "summary": "Audio Editing Controls Not Functioning in the Editor",
  "steps": [
   "1. Open a video in the Editor. 2. Select an audio track from the Timeline. 3. Access the available audio editing controls. 4. Try applying the audio editing options."
  ],
  "actual": "Audio editing controls are non-functional, and the selected operations are not applied to the audio track.",
  "expected": "All available audio editing controls should function as intended and apply the selected changes to the corresponding audio track.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: on Studio recordings the Enhance EQ (Low/Mid/High) and limiter are now heard in the preview as the sliders move, and changes made with a Clean audio clip selected no longer jump back. Noise Reduction and De-reverb apply in the exported file only, and the panel says so. Expected: play the video and move EQ or limiter; the sound changes at once. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "Enchance features is not functioning when user reduce/increase",
  "sheetId": "143"
 },
 {
  "id": "ISS-144",
  "module": "Settings / Workspace and Team / Invite User",
  "sev": "Medium",
  "title": "Incorrect Validation Message Displayed When Inviting a User with Pending Email Verification",
  "summary": "Incorrect Validation Message Displayed When Inviting a User with Pending Email Verification",
  "steps": [
   "1. Navigate to Settings → Workspace and Team. 2. Open the Invite User dialog. 3. Enter the email address of a user whose email verification is pending. 4. Click Invite and observe the validation message."
  ],
  "actual": "The system displays an unclear or inappropriate error message indicating that verification is pending, without providing actionable guidance.",
  "expected": "The system should display a clear, context-specific validation message, such as “The invited user's email verification is pending. Please ask the user to verify their email address before proceeding.”, if verification is required for invitations.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "144"
 },
 {
  "id": "ISS-145",
  "module": "Video Editor / Audio / Voice-over",
  "sev": "High",
  "title": "Audio Voice-over Functionality Not Working in the Editor",
  "summary": "Audio Voice-over Functionality Not Working in the Editor",
  "steps": [
   "1. Open a video in the Editor. 2. Navigate to the Audio section. 3. Access the Voice-over functionality. 4. Attempt to generate or apply a voice-over to the video."
  ],
  "actual": "The Voice-over functionality is not working, and the voice-over operation cannot be completed.",
  "expected": "The Voice-over functionality should execute successfully and apply the generated or selected voice-over to the video timeline as expected.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "145"
 },
 {
  "id": "ISS-146",
  "module": "Video Editor / Audio Enhancement",
  "sev": "High",
  "title": "Audio Enhancement Functionality Not Working in the Editor",
  "summary": "Audio Enhancement Functionality Not Working in the Editor",
  "steps": [
   "1. Open a video in the Editor. 2. Navigate to the audio enhancement option. 3. Select the audio track. 4. Trigger the Audio Enhance functionality. 5. Verify the processing and resulting audio output."
  ],
  "actual": "Audio Enhancement functionality does not execute as expected, and the selected audio track is not enhanced.",
  "expected": "The system should successfully process the selected audio track and apply the audio enhancement effect to the output.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: same fix as #143. Expected: EQ and limiter are heard in the preview while playing (also on Studio recordings); Noise Reduction and De-reverb are heard in the exported file; where the preview can't play a setting, the panel says it is applied in the export. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "Enchance features is not functioning when user reduce/increase",
  "sheetId": "146"
 },
 {
  "id": "ISS-147",
  "module": "Encoders / Invite User",
  "sev": "Medium",
  "title": "Invite User Popup Closes When Clicking Outside the Dialog",
  "summary": "Invite User Popup Closes When Clicking Outside the Dialog",
  "steps": [
   "1. Navigate to the Encoders module. 2. Open the Invite User popup. 3. Click anywhere outside the popup without submitting or cancelling the invitation."
  ],
  "actual": "The Invite User popup closes immediately when the user clicks outside the dialog, resulting in unintended dismissal of the invitation workflow.",
  "expected": "The popup should remain open when clicking outside the dialog and should close only through an explicit user action, such as clicking Close or Cancel, subject to the defined interaction requirements.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "147"
 },
 {
  "id": "ISS-148",
  "module": "Encoders / Invite User / Role Selection",
  "sev": "High",
  "title": "Incomplete Role List Displayed in the Encoders Invite User Screen",
  "summary": "Incomplete Role List Displayed in the Encoders Invite User Screen",
  "steps": [
   "1. Navigate to the Encoders module. 2. Open the Invite User screen. 3. Expand the Role dropdown. 4. Verify the available role options."
  ],
  "actual": "Only Admin and Editor roles are displayed in the role dropdown. The remaining available roles are missing.",
  "expected": "The role dropdown should display all roles configured and available for user assignment, based on the applicable role permissions.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "148"
 },
 {
  "id": "ISS-149",
  "module": "Settings / Workspace and Team / Invited Members",
  "sev": "Medium",
  "title": "Incorrect Success message Displayed When Removing Invited Members",
  "summary": "Incorrect Success message Displayed When Removing Invited Members",
  "steps": [
   "1. Navigate to Settings → Workspace and Team. 2. Open the Invited Members section. 3. Select an invited member and remove them. 4. Observe the success message displayed after removal."
  ],
  "actual": "The system displays both the invitation success message and the member removal success message, resulting in conflicting for a single action.",
  "expected": "The system should display only the relevant member removal confirmation message after successfully removing the invited member.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "149"
 },
 {
  "id": "ISS-150",
  "module": "Video Editor / Layers Panel",
  "sev": "High",
  "title": "Layers Panel Not Displayed When Selecting the Layers Option",
  "summary": "Layers Panel Not Displayed When Selecting the Layers Option",
  "steps": [
   "1. Open any content in the Editor. 2. Click the Layers option. 3. Observe the editor workspace. 4. Repeat the same action with different content."
  ],
  "actual": "The Layers panel is not displayed after selecting the Layers option, regardless of the content opened in the Editor.",
  "expected": "The Layers panel should open successfully and display the corresponding content elements and their layer hierarchy.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "150"
 },
 {
  "id": "ISS-151",
  "module": "Video Editor / Layout / Priority Settings",
  "sev": "High",
  "title": "Layout Priority Toggle Functionality Not Working in the Editor",
  "summary": "Layout Priority Toggle Functionality Not Working in the Editor",
  "steps": [
   "1. Open any content in the Editor. 2. Navigate to the Layout settings. 3. Locate the layout priority list. 4. Enable or disable the toggle for any layout in the list. 5. Verify the layout priority behavior in the editor preview."
  ],
  "actual": "Enabling or disabling the layout priority toggle does not apply the expected changes to the layout priority configuration.",
  "expected": "The system should correctly update the layout priority based on the toggle state and reflect the changes in the editor preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "151"
 },
 {
  "id": "ISS-152",
  "module": "AI Captions / Video Editor / Caption Rendering",
  "sev": "High",
  "title": "Captions Missing from Portions of the Video After Generation\neg contnet id: 01a19b5d-afe2-71ec-afdc-506af36d9e72",
  "summary": "Captions Missing from Portions of the Video After Generation\neg contnet id: 01a19b5d-afe2-71ec-afdc-506af36d9e72",
  "steps": [
   "1. Upload a video and initiate caption generation. 2. Wait for the caption generation process to complete. 3. Open the generated content in the Editor. 4. Play the video from beginning to end and inspect the caption display."
  ],
  "actual": "Captions are missing from the middle portion of the video despite successful completion of the caption generation process.",
  "expected": "Captions should be generated and displayed continuously across the entire video, with no unintended gaps in the middle of the content.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: captions now show through the whole video when the transcript has untimed words or overlapping lines. If still missing, the caption data needs checking (backend). Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "152"
 },
 {
  "id": "ISS-153",
  "module": "Video Editor / Effects & Color / LUT",
  "sev": "High",
  "title": "Uploaded LUT Files Not Displayed in the Editor Preview",
  "summary": "Uploaded LUT Files Not Displayed in the Editor Preview",
  "steps": [
   "1. Open any content in the Editor. 2. Navigate to Effects & Color. 3. Upload a LUT file. 4. Select the uploaded LUT and observe the editor preview."
  ],
  "actual": "The uploaded LUT file is not reflected in the preview, and the corresponding color grading effect is not visible.",
  "expected": "The uploaded LUT should be applied successfully to the selected content, and the preview should reflect the LUT's color grading effect.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: an uploaded LUT now shows on a Studio recording's cameras in the preview, and if the LUT file can't be loaded the preview says so. LUTs on b-roll are not applied (the panel says so). Note: in the export the LUT applies to the video's own clips; Studio cameras export without it (the export summary says so). Expected: upload a .cube in Visuals and pick it on the main video; the preview colour changes at once and again after reopening. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "153"
 },
 {
  "id": "ISS-154",
  "module": "Video Editor / Effects & Color / Color Adjustments",
  "sev": "High",
  "title": "Color Adjustments in Exported Output Do Not Match the Editor Preview\neg contnet id: 01a19bcf-6004-73df-a224-457aa760327f",
  "summary": "Color Adjustments in Exported Output Do Not Match the Editor Preview\neg contnet id: 01a19bcf-6004-73df-a224-457aa760327f",
  "steps": [
   "1. Open any content in the Editor. 2. Navigate to Effects & Color. 3. Apply or modify color adjustment settings. 4. Observe the changes in the editor preview. 5. Export the content and compare the output with the preview."
  ],
  "actual": "The exported video displays different color adjustments compared to those shown in the editor preview.",
  "expected": "The exported output should accurately retain and reproduce all applied color adjustments, ensuring visual consistency between the editor preview and the final rendered video.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "154"
 },
 {
  "id": "ISS-155",
  "module": "Downloads / Test Preview Popup",
  "sev": "Medium",
  "title": "Test Preview Popup Closes When Clicking Outside the Dialog",
  "summary": "Test Preview Popup Closes When Clicking Outside the Dialog",
  "steps": [
   "1. Navigate to the Downloads section. 2. Open the Test Preview popup for any downloaded content. 3. Click outside the popup without explicitly closing it. 4. Observe the popup behavior."
  ],
  "actual": "The Test Preview popup closes when the user clicks outside the dialog, causing unintended dismissal during preview playback.",
  "expected": "The popup should remain open when clicking outside the dialog and should close only through an explicit user action, such as clicking the Close button.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "155"
 },
 {
  "id": "ISS-156",
  "module": "Video Editor / Effects & Color / HLS Sceneries",
  "sev": "High",
  "title": "HLS Sceneries Applied in Effects & Color Do Not Match the Exported Output",
  "summary": "HLS Sceneries Applied in Effects & Color Do Not Match the Exported Output",
  "steps": [
   "1. Open any content in the Editor. 2. Navigate to Effects & Color. 3. Apply an HSL scenery preset. 4. Verify the visual effect in the editor preview. 5. Export the content and compare the rendered output with the preview."
  ],
  "actual": "The HSL scenery effect rendered in the exported output differs from the effect displayed in the editor preview.",
  "expected": "The exported video should accurately retain the selected HSL scenery effect and maintain visual consistency with the editor preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "156"
 },
 {
  "id": "ISS-157",
  "module": "AI Clips / Upload / Aspect Ratio Selection",
  "sev": "High",
  "title": "Unable to Select 1:1 and 3:4 Aspect Ratios During AI Clips Upload",
  "summary": "Unable to Select 1:1 and 3:4 Aspect Ratios During AI Clips Upload",
  "steps": [
   "1. Navigate to the AI Clips module. 2. Initiate the content upload workflow. 3. Locate the aspect ratio selection options. 4. Attempt to select 1:1 and 3:4 aspect ratios."
  ],
  "actual": "The 1:1 and 3:4 aspect ratio options cannot be selected during the upload workflow.",
  "expected": "Users should be able to select all supported aspect ratios, including 1:1 and 3:4, and proceed with AI Clips generation using the selected ratio.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "157"
 },
 {
  "id": "ISS-158",
  "module": "AI Captions / Content Upload / Creations Tab",
  "sev": "Medium",
  "title": "Write Option Incorrectly Displayed in the Creations Tab for AI Captions Content",
  "summary": "Write Option Incorrectly Displayed in the Creations Tab for AI Captions Content",
  "steps": [
   "1. Navigate to the AI Captions module. 2. Upload content and enable the Write Posts in Background option. 3. Complete the caption generation process. 4. Navigate to the Creations tab for the generated content. 5. Observe the available creation options."
  ],
  "actual": "The Write option is displayed in the Creations tab even though the Write Posts in Background option was enabled during AI Captions content upload.",
  "expected": "The Creations tab should display only the creation options relevant to the AI Captions workflow and should not display an unrelated Write option unless it is explicitly supported by the requirements.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "158"
 },
 {
  "id": "ISS-159",
  "module": "Projects / Clips / Dubbing / Downloads",
  "sev": "High",
  "title": "Dubbed Clip Plays Only in the Source Language After Download",
  "summary": "Dubbed Clip Plays Only in the Source Language After Download",
  "steps": [
   "1. Navigate to the Clips tab. 2. Select a specific clip and initiate dubbing into a target language. 3. Wait for the dubbing process to complete. 4. Download the dubbed clip. 5. Navigate to the Downloads tab under the parent content. 6. Play the downloaded clip and verify the audio language."
  ],
  "actual": "The downloaded dubbed clip is listed under the parent content in the Downloads tab, but playback contains only the source-language audio. The dubbed-language audio is not played.",
  "expected": "The downloaded clip should contain and play the generated target-language audio while preserving the expected video and audio synchronization.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "159"
 },
 {
  "id": "ISS-160",
  "module": "Video Editor / Export Popup / Name Field",
  "sev": "Medium",
  "title": "Missing Name Field Validation in the Editor Export Popup",
  "summary": "Missing Name Field Validation in the Editor Export Popup",
  "steps": [
   "1. Open any content in the Editor. 2. Click Export to open the export popup. 3. Give morethan 64 chars in name field or leave it empty. 4. Attempt to initiate the export. 5. Observe the validation behavior."
  ],
  "actual": "The Name field does not trigger any validation when left empty, allowing the user to proceed without the required input.",
  "expected": "The system should enforce mandatory field validation, display an appropriate inline error message, and prevent export until a valid name is provided.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: every export name is now at most 64 characters, including Export all three shapes, scheduled posts, Magic Clips and dubs (long project titles are shortened, empty names become Untitled). Expected: the Name field accepts at most 64 characters with a counter; Start export stays disabled while it is empty. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "showing 300 characters instead of 64 chars",
  "sheetId": "160"
 },
 {
  "id": "ISS-161",
  "module": "Projects / Folder Management / Subfolders",
  "sev": "Low",
  "title": "Incorrect Folder Icon Displayed Beside the Parent Folder Name in Subfolder View",
  "summary": "Incorrect Folder Icon Displayed Beside the Parent Folder Name in Subfolder View",
  "steps": [
   "1. Navigate to Projects. 2. Open a parent folder containing subfolders. 3. Observe the parent folder name and its associated icon in the subfolder view."
  ],
  "actual": "An incorrect or different folder icon is displayed beside the parent folder name.",
  "expected": "The parent folder should consistently display its designated folder icon when navigating within its subfolders.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "161"
 },
 {
  "id": "ISS-162",
  "module": "Video Editor / Save Template Popup",
  "sev": "Medium",
  "title": "Save Template Popup Closes When Clicking Outside the Dialog",
  "summary": "Save Template Popup Closes When Clicking Outside the Dialog",
  "steps": [
   "1. Open any content in the Editor. 2. Open the Save Template popup. 3. Click outside the popup without saving or cancelling."
  ],
  "actual": "The Save Template popup closes immediately when the user clicks outside the dialog.",
  "expected": "The popup should remain open when clicking outside and close only through an explicit user action, such as clicking Save or Cancel.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: stays open on a click outside; Cancel or the X close it. Rechecked on a local build.",
  "sheetId": "162"
 },
 {
  "id": "ISS-163",
  "module": "Video Editor / Scenes / Layers",
  "sev": "High",
  "title": "Scene Content Not Added as a Separate Layer in timeline",
  "summary": "Scene Content Not Added as a Separate Layer in timeline",
  "steps": [
   "1. Open any content in the Editor. 2. Add a scene to the timeline. 3. Navigate to the Layers panel. 4. Verify the layer structure."
  ],
  "actual": "The newly added scene content is not displayed as a separate layer in the Layers panel.",
  "expected": "The newly added scene content should be automatically added and displayed as a separate layer in the Layers panel.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "163"
 },
 {
  "id": "ISS-164",
  "module": "Video Editor / Templates / Save Template",
  "sev": "Medium",
  "title": "Template Saved with Intro Duration Included\nRef contnet id: 01a17bba-b8e0-77fb-b368-db77d7e65636",
  "summary": "Template Saved with Intro Duration Included\nRef contnet id: 01a17bba-b8e0-77fb-b368-db77d7e65636",
  "steps": [
   "1. Open any content in the Editor. 2. Add an intro to the content. 3. Save the current configuration as a template. 4. Reopen the saved template and verify its duration settings."
  ],
  "actual": "The saved template includes the intro duration as part of the template configuration.",
  "expected": "The template should save the intended reusable layout and configuration without including the intro duration, unless explicitly specified in the template requirements.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: a template layer's motion and fades now stay in step when the intro cuts its start, and full-length layers run to the end of the new video. Templates saved before 18 Nov must be re-saved. Expected: save a template with text on one video, apply it to another; text, logo and animations keep the same timing relative to the footage. If text timing still differs, please add the template name and content id. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "Text and all the timing is saving different in template",
  "sheetId": "164"
 },
 {
  "id": "ISS-165",
  "module": "Projects / Clips / Clip Action Menu",
  "sev": "Medium",
  "title": "Content Playback Continues When Selecting Options from the Clip Action Menu",
  "summary": "Content Playback Continues When Selecting Options from the Clip Action Menu",
  "steps": [
   "1. Navigate to the Clips tab. 2. Play any clip. 3. Open the Clip Action menu during playback. 4. Select any available action."
  ],
  "actual": "Content playback continues in the background after selecting an option from the Clip Action menu.",
  "expected": "Content playback should stop when an action is selected from the Clip Action menu.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "165"
 },
 {
  "id": "ISS-166",
  "module": "Projects / Clips",
  "sev": "Medium",
  "title": "Clip Duration Not Displayed in the Clips Tab",
  "summary": "Clip Duration Not Displayed in the Clips Tab",
  "steps": [
   "1. Navigate to Projects → Clips. 2. Open the Clips tab. 3. Verify the duration information displayed for the available clips."
  ],
  "actual": "Clip duration is not displayed for the listed clips.",
  "expected": "Each clip should display its respective duration in the Clips tab.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "166"
 },
 {
  "id": "ISS-167",
  "module": "Projects / Clips / Clip Player",
  "sev": "Medium",
  "title": "Clip Playback Timer Not Updating During Playback",
  "summary": "Clip Playback Timer Not Updating During Playback",
  "steps": [
   "1. Navigate to Projects → Clips. 2. Play any clip. 3. Observe the playback timer."
  ],
  "actual": "Only the clip's start and end timestamps from the source content are displayed. The playback timer does not advance while the clip is playing.",
  "expected": "The playback timer should dynamically update during playback, displaying the current playback position and total clip duration.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "167"
 },
 {
  "id": "ISS-168",
  "module": "AI Dubbing / AI Captions / Video Playback",
  "sev": "High",
  "title": "Audio and Captions Out of Synchronization After Dubbing and Caption Generation\nRef contnet: 01a1af26-15f5-794a-9528-801efc2552d6",
  "summary": "Audio and Captions Out of Synchronization After Dubbing and Caption Generation\nRef contnet: 01a1af26-15f5-794a-9528-801efc2552d6",
  "steps": [
   "1. Upload a video and generate dubbed audio in the target language. 2. Generate captions for the dubbed video. 3. Open the processed content and play the video. 4. Verify audio and caption synchronization throughout playback."
  ],
  "actual": "The generated captions are not synchronized with the dubbed audio, resulting in a mismatch between spoken audio and displayed captions.",
  "expected": "Captions should accurately align with the dubbed audio, maintaining correct timing and synchronization throughout the video.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "168"
 },
 {
  "id": "ISS-169",
  "module": "Projects / Content Search",
  "sev": "High",
  "title": "Search Results Not Retrieved When Searching by Content ID",
  "summary": "Search Results Not Retrieved When Searching by Content ID",
  "steps": [
   "1. Navigate to the Projects module. 2. Enter a valid Content ID in the search field. 3. Initiate the search. 4. Verify the search results."
  ],
  "actual": "The search results are not retrieved for the entered Content ID, even when matching content exists.",
  "expected": "The system should retrieve and display the corresponding content based on the entered Content ID.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "169"
 },
 {
  "id": "ISS-170",
  "module": "Video Editor / Firefox Browser Compatibility",
  "sev": "High",
  "title": "CloudReel Editor Becomes Unresponsive in Firefox Browser",
  "summary": "CloudReel Editor Becomes Unresponsive in Firefox Browser",
  "steps": [
   "1. Open CloudReel in the Firefox browser. 2. Navigate to the Editor. 3. Open any content for editing. 4. Perform editor operations and observe the browser response."
  ],
  "actual": "The Editor becomes unresponsive during operation, and Firefox displays the warning message “This page is slowing down Firefox.”",
  "expected": "The Editor should load and perform all editing operations smoothly in Firefox without causing browser unresponsiveness or performance warnings.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: removed the per-frame work that slowed Firefox (hidden participant cameras keep decoding; paused graded frames stop redrawing). Retest in Firefox after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "170"
 },
 {
  "id": "ISS-171",
  "module": "Video Editor / Layout / Bands",
  "sev": "High",
  "title": "Unable to Adjust the bands and logo based on layout",
  "summary": "Unable to Adjust the bands and logo based on layout",
  "steps": [
   "1. Open any content in the Editor. 2. Navigate to the Layout settings. 3. Select a layout containing multiple bands. 4. Attempt to adjust the band positions or dimensions."
  ],
  "actual": "Users are unable to adjust the bands according to the selected layout.",
  "expected": "Users should be able to independently adjust band positions and dimensions based on the selected layout configuration.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: the logo, LIVE badge and other Studio graphics keep their own shape on 9:16, 4:5 and 1:1, pinned to the nearer edge, the LIVE text is no longer squeezed, and a moved graphic returns to its size when you switch back to 16:9. Expected: switch the aspect ratio; LIVE badge and logo stay visible and unstretched in the same corner, in the preview and the export. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "Live badge and logo is not showing based on ratio",
  "sheetId": "171"
 },
 {
  "id": "ISS-172",
  "module": "Video Editor / Layout / Bands",
  "sev": "High",
  "title": "Ticker, Lower Third, and Top Bands Do Not Adjust According to the Selected Aspect Ratio",
  "summary": "Ticker, Lower Third, and Top Bands Do Not Adjust According to the Selected Aspect Ratio",
  "steps": [
   "1. Open any content in the Editor. 2. Navigate to Layout settings. 3. Select different aspect ratios. 4. Observe the Ticker, Lower Third, and Top Band positions and dimensions."
  ],
  "actual": "The Ticker, Lower Third, and Top Bands do not adjust their positions and dimensions according to the selected aspect ratio.",
  "expected": "All bands should automatically adapt their positions and dimensions to maintain the intended layout across different aspect ratios.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: on 9:16, 1:1 and 4:5 the ticker and lower band stay at the bottom, also when resized from the band toolbar, and participant names stay at the bottom of their frame. Expected: switch to 9:16; the ticker is at the bottom of the screen and each name is under its participant, in the preview and the export. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "Ticker band position is showing middle of the screen instead of bottom and participent names also showing in middle 9instead of bottom of the participant",
  "sheetId": "172"
 },
 {
  "id": "ISS-173",
  "module": "Video Editor / Audio Tracks / Dubbing",
  "sev": "High",
  "title": "Source Audio Continues Playing When Dubbed Audio Is Enabled",
  "summary": "Source Audio Continues Playing When Dubbed Audio Is Enabled",
  "steps": [
   "1. Open dubbed content in the Editor. 2. Enable the dubbed audio track. 3. Play the content. 4. Observe the audio output."
  ],
  "actual": "Both the original source audio and dubbed audio play simultaneously, resulting in overlapping audio.",
  "expected": "Enabling the dubbed audio should prioritize the dubbed audio track and automatically mute the original source audio to prevent overlapping playback.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: adding a dub mutes the video track, including the Studio participants' audio.",
  "sheetId": "173"
 },
 {
  "id": "ISS-174",
  "module": "Video Editor / Timeline / Audio Tracks",
  "sev": "High",
  "title": "Source Audio Continues Playing Despite Muted Status in the Timeline",
  "summary": "Source Audio Continues Playing Despite Muted Status in the Timeline",
  "steps": [
   "1. Open any content in the Editor. 2. Navigate to the Timeline. 3. Mute the source audio track. 4. Verify that the mute icon is displayed. 5. Play the content and observe the audio output."
  ],
  "actual": "The timeline displays the muted icon for the source audio track, but the source audio continues playing during playback.",
  "expected": "The source audio should be completely muted when the track is muted, and no audio should be audible during playback.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: a muted video track now also silences the Studio participants' audio.",
  "sheetId": "174"
 },
 {
  "id": "ISS-175",
  "module": "Video Editor / Layout / Ticker Band",
  "sev": "High",
  "title": "Ticker Band Position Differs Between Editor Preview and Exported Output",
  "summary": "Ticker Band Position Differs Between Editor Preview and Exported Output",
  "steps": [
   "1. Open any content in the Editor. 2. Configure and position the Ticker Band. 3. Observe its position in the editor preview. 4. Export the content and compare the ticker position in the output."
  ],
  "actual": "The Ticker Band position shifts in the exported output compared to its configured position in the editor preview.",
  "expected": "The exported output should retain the exact Ticker Band position and alignment configured in the editor preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: same fix as #172; the preview and the export use the same band layout.",
  "sheetId": "175"
 },
 {
  "id": "ISS-176",
  "module": "Video Editor / Logo Overlay / Export",
  "sev": "High",
  "title": "Logo Visibility in Exported Output Does Not Match Editor Preview During Playback",
  "summary": "Logo Visibility in Exported Output Does Not Match Editor Preview During Playback",
  "steps": [
   "1. Open any content in the Editor. 2. Add a logo overlay and configure its visibility settings. 3. Verify the logo visibility in the editor preview. 4. Export the content and play the exported output. 5. Compare logo visibility between the preview and exported output."
  ],
  "actual": "The logo is displayed in the exported output during playback, whereas its visibility in the editor preview does not match.",
  "expected": "The exported output should maintain the same logo visibility and playback behavior configured and displayed in the editor preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "176"
 },
 {
  "id": "ISS-177",
  "module": "Video Editor / Logo Overlay / Export",
  "sev": "High",
  "title": "Logo Visibility in Exported Output Does Not Match Editor Preview During Playback",
  "summary": "Logo Visibility in Exported Output Does Not Match Editor Preview During Playback",
  "steps": [
   "1. Open any content in the Editor. 2. Add a logo overlay and configure its visibility settings. 3. Verify the logo visibility in the editor preview. 4. Export the content and play the exported output. 5. Compare logo visibility between the preview and exported output."
  ],
  "actual": "The logo is displayed in the exported output during playback, whereas its visibility in the editor preview does not match.",
  "expected": "The exported output should maintain the same logo visibility and playback behavior configured and displayed in the editor preview.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "177"
 },
 {
  "id": "ISS-178",
  "module": "Portrait Pro / Participants / Client Names",
  "sev": "Medium",
  "title": "Participant and Client Names Not Displayed in Portrait Output",
  "summary": "Participant and Client Names Not Displayed in Portrait Output",
  "steps": [
   "1. Open any content in Portrait Pro. 2. Navigate to the participant and client name settings. 3. Generate the portrait output. 4. Verify the generated output."
  ],
  "actual": "Participant names and client names are missing from the generated portrait output.",
  "expected": "Participant and client names should be displayed correctly in the portrait output based on the configured settings.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "178"
 },
 {
  "id": "ISS-179",
  "module": "Video Editor / Reframe",
  "sev": "High",
  "title": "Source Content Displayed Instead of Edited Content When Initiating Reframe",
  "summary": "Source Content Displayed Instead of Edited Content When Initiating Reframe",
  "steps": [
   "1. Open any content in the Editor. 2. Apply trimming or editing to the source content. 3. Save the changes. 4. Click the Reframe option. 5. Verify the content loaded in the Reframe workflow."
  ],
  "actual": "The original source content is displayed instead of the trimmed and edited version when initiating Reframe.",
  "expected": "The Reframe workflow should load the latest edited version, preserving all previously applied trimming and editing changes.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: Reframe now shows only what the edit plays, with the cut parts shaded.",
  "sheetId": "179"
 },
 {
  "id": "ISS-180",
  "module": "Live Recording / Recording Status",
  "sev": "High",
  "title": "Recording Processing Status Not Displayed Consistently When Host Starts Recording",
  "summary": "Recording Processing Status Not Displayed Consistently When Host Starts Recording",
  "steps": [
   "1. Join a live session as a host. 2. Start the recording. 3. Observe the recording status indicator. 4. Repeat the operation across multiple sessions."
  ],
  "actual": "The Processing status is intermittently not displayed after the host starts recording.",
  "expected": "The system should consistently display the appropriate recording status when the host initiates recording and update it according to the recording lifecycle.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "180"
 },
 {
  "id": "ISS-181",
  "module": "Live Recording / Projects",
  "sev": "High",
  "title": "Master Output Not Saved as a Project After Stopping and Restarting Recording",
  "summary": "Master Output Not Saved as a Project After Stopping and Restarting Recording",
  "steps": [
   "1. Start a live recording. 2. Stop the recording. 3. Start recording again. 4. Check the Projects section for the master output."
  ],
  "actual": "The master output is not saved as a project after stopping and restarting the recording.",
  "expected": "The master output should be saved as a project and be accessible in the Projects section after recording is stopped and restarted.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "181"
 },
 {
  "id": "ISS-182",
  "module": "Live Recording / Track Management",
  "sev": "High",
  "title": "Bonding iOS App Live Stream Not Displayed as a Separate Track",
  "summary": "Bonding iOS App Live Stream Not Displayed as a Separate Track",
  "steps": [
   "1. Open the Bonding iOS app. 2. Start a live stream. 3. Verify the tracks in the respective contnet"
  ],
  "actual": "The live stream from the Bonding iOS app is not displayed as a separate track.",
  "expected": "The live stream from the Bonding iOS app should be detected and displayed as a separate track.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "182"
 },
 {
  "id": "ISS-183",
  "module": "Video Editor / Lower Band",
  "sev": "Medium",
  "title": "Unable to Edit Date and Time Displayed Beside the Lower Band",
  "summary": "Unable to Edit Date and Time Displayed Beside the Lower Band",
  "steps": [
   "1. Open a recorded clip in the editor. 2. Navigate to the lower band settings. 3. Attempt to edit the date and time displayed beside the lower band."
  ],
  "actual": "The user is unable to edit the date and time displayed beside the lower band.",
  "expected": "The user should be able to edit the date and time displayed beside the lower band.",
  "reporter": "",
  "date": "",
  "devStatus": "As designed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: the Studio offers only Style and Position for Clock and Date, and the editor matches it. Use the Graphics panel toggle to hide them.",
  "sheetId": "183"
 },
 {
  "id": "ISS-184",
  "module": "Live Recording / Layout Editor",
  "sev": "Medium",
  "title": "Resizing One Participant's Frame Unexpectedly Changes Other Participants' Frames",
  "summary": "Resizing One Participant's Frame Unexpectedly Changes Other Participants' Frames",
  "steps": [
   "1. Open a session with multiple participants. 2. Navigate to the layout editor. 3. Select any participant's frame. 4. Resize the selected frame and observe the remaining participants."
  ],
  "actual": "Resizing one participant's frame unexpectedly changes the size or position of the other participants' frames.",
  "expected": "Resizing a selected participant's frame should not affect the size or position of other participants' frames.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: not the video editor; this is the Studio's live layout editor.",
  "sheetId": "184"
 },
 {
  "id": "ISS-185",
  "module": "Bonding App / Device Connection",
  "sev": "Low",
  "title": "Unable to Connect Multiple Devices Through the Bonding App",
  "summary": "Unable to Connect Multiple Devices Through the Bonding App",
  "steps": [
   "1. Open the Bonding app. 2. Attempt to connect more than one device to the same session. 3. Observe the device connection behavior."
  ],
  "actual": "The user is unable to connect more than one device through the Bonding app.",
  "expected": "The user should be able to connect multiple devices through the Bonding app, as supported by the session configuration.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Reopen",
  "qaNote": "Unable to Go Live\n\nYour plan’s live stream limit has been reached. Please end another active stream or upgrade your plan to continue.\n\nkeep proper error message in both Android and Ios Bonding app",
  "sheetId": "185"
 },
 {
  "id": "ISS-186",
  "module": "Video Editor / Lower Band",
  "sev": "Medium",
  "title": "Duplicate Date and Time Entries Displayed in Editor Compared to Source",
  "summary": "Duplicate Date and Time Entries Displayed in Editor Compared to Source",
  "steps": [
   "1. Open a recorded clip in the editor. 2. Check the date and time displayed in the editor. 3. Compare the displayed entries with the original source content."
  ],
  "actual": "Multiple date and time entries are displayed in the editor, whereas the source contains only one date and time entry.",
  "expected": "The editor should display only the single date and time entry available in the source content.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "Dev 13 Nov: a band that aired more than once was drawn once per airing; it is now drawn once.",
  "sheetId": "186"
 },
 {
  "id": "ISS-187",
  "module": "Recordings Tab",
  "sev": "Medium",
  "title": "Multiple clips Play Simultaneously When Switching Playback",
  "summary": "Multiple clips Play Simultaneously When Switching Playback",
  "steps": [
   "1. Open the Recordings tab. 2. Play any clip/ source. 3. While the first playback is still playing, click Play on another clip/ source. 4. Observe the playback behavior."
  ],
  "actual": "The second recording starts playing while the first recording is still playing, resulting in simultaneous playback.",
  "expected": "When a new recording is played, the currently playing recording should stop automatically so that only one recording plays at a time.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "187"
 },
 {
  "id": "ISS-188",
  "module": "Recordings / Captions Tab",
  "sev": "Medium",
  "title": "Meeting ID Displayed Instead of User Name in Captions Tab",
  "summary": "Meeting ID Displayed Instead of User Name in Captions Tab",
  "steps": [
   "1. Open the Recordings tab. 2. Select a recorded meeting. 3. Navigate to the Captions tab. 4. Check the participant name displayed in the captions."
  ],
  "actual": "The meeting ID is displayed instead of the participant's user name.",
  "expected": "The participant's user name should be displayed in the captions instead of the meeting ID.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "188"
 },
 {
  "id": "ISS-189",
  "module": "Recordings / Captions Tab",
  "sev": "High",
  "title": "Captions Tab Displays Captions for All Studio Content Instead of Selected Recording",
  "summary": "Captions Tab Displays Captions for All Studio Content Instead of Selected Recording",
  "steps": [
   "1. Open the Recordings tab. 2. Select a recorded content item. 3. Navigate to the Captions tab. 4. Verify the displayed captions."
  ],
  "actual": "Captions for all Studio content are displayed instead of captions specific to the selected recording.",
  "expected": "Only the captions associated with the selected recording should be displayed.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "189"
 },
 {
  "id": "ISS-190",
  "module": "Recordings / Captions Tab",
  "sev": "High",
  "title": "Inaccurate Caption Generation for Recorded Content",
  "summary": "Inaccurate Caption Generation for Recorded Content",
  "steps": [
   "1. Open the Recordings tab. 2. Select a recorded content item. 3. Navigate to the Captions tab. 4. Generate captions and review the output against the original recording."
  ],
  "actual": "The generated captions do not accurately match the spoken content in the recording.",
  "expected": "Captions should accurately reflect the spoken content in the selected recording.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "190"
 },
 {
  "id": "ISS-191",
  "module": "Workspace Management",
  "sev": "High",
  "title": "Previous Workspace Content and Details Displayed After Switching Workspaces",
  "summary": "Previous Workspace Content and Details Displayed After Switching Workspaces",
  "steps": [
   "1. Open the application and navigate to a workspace. 2. Switch to another workspace. 3. Verify the content and details displayed in the newly selected workspace."
  ],
  "actual": "Content and details belonging to another workspace are displayed after switching workspaces.",
  "expected": "Only the content and details associated with the currently selected workspace should be displayed.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "191"
 },
 {
  "id": "ISS-192",
  "module": "Workspace Management / Invitation Flow",
  "sev": "Medium",
  "title": "Sign-In Button Displayed After User Is Removed From Workspace",
  "summary": "Sign-In Button Displayed After User Is Removed From Workspace",
  "steps": [
   "1. Invite a user to a workspace. 2. Remove the user from the workspace before they accept the invitation. 3. Open the previously received invitation email. 4. Click the Join Organization link."
  ],
  "actual": "The page displays a \"You are not in a workspace\" message along with a Sign In button, even though the user has already been removed from the invited workspace.",
  "expected": "The invitation link should display an appropriate message indicating that the invitation is no longer valid or the user has been removed from the workspace.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "192"
 },
 {
  "id": "ISS-193",
  "module": "Let the background-removal job run on a participant's camera recording.",
  "sev": "Medium",
  "title": "Text Field Overlaps with Thumbnails in Playground",
  "summary": "Text Field Overlaps with Thumbnails in Playground",
  "steps": [
   "1. Open the Playground. 2. Navigate to the text field. 3. Observe the alignment of the text field and thumbnails."
  ],
  "actual": "The text field overlaps with the thumbnails, causing a layout issue.",
  "expected": "The text field and thumbnails should be properly aligned without overlapping.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "193"
 },
 {
  "id": "ISS-194",
  "module": "Show the result in the editor preview and export. The renderer already supports this.",
  "sev": "Medium",
  "title": "Redirected to a New Chat When Clicking \"Use as Video\" on Any Thumbnail",
  "summary": "Redirected to a New Chat When Clicking \"Use as Video\" on Any Thumbnail",
  "steps": [
   "1. Open the Playground. 2. Select any thumbnail. 3. Click Use as Video. 4. Observe the navigation behavior."
  ],
  "actual": "The user is redirected to a new chat instead of proceeding with the selected thumbnail.",
  "expected": "The selected thumbnail should be used as video in the current workflow without redirecting the user to a new chat.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "194"
 },
 {
  "id": "ISS-195",
  "module": "Playground / Thumbnail Preview",
  "sev": "Low",
  "title": "Thumbnail Preview Closes When Clicking Outside the Preview",
  "summary": "Thumbnail Preview Closes When Clicking Outside the Preview",
  "steps": [
   "1. Open the Playground. 2. Select any thumbnail to open its preview. 3. Click outside the preview area. 4. Observe the preview behavior."
  ],
  "actual": "The thumbnail preview closes when the user clicks outside the preview area.",
  "expected": "The thumbnail preview should remain open when clicking outside the preview area and should close only through the designated close action.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "195"
 },
 {
  "id": "ISS-196",
  "module": "Playground / Thumbnail Preview",
  "sev": "High",
  "title": "\"Use as Thumbnail\" Button Not Responding in Preview",
  "summary": "\"Use as Thumbnail\" Button Not Responding in Preview",
  "steps": [
   "1. Open the Playground. 2. Select any thumbnail to open its preview. 3. Click the Use as Thumbnail button below the preview. 4. Observe the application behavior."
  ],
  "actual": "No action is performed when the user clicks the Use as Thumbnail button.",
  "expected": "The selected image should be applied as the thumbnail when the user clicks the Use as Thumbnail button.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "196"
 },
 {
  "id": "ISS-197",
  "module": "Video Editor / Timeline",
  "sev": "High",
  "title": "Caption Generation Not Available for Added video in Timeline",
  "summary": "Caption Generation Not Available for Added video in Timeline",
  "steps": [
   "1. Open a project in the video editor. 2. Add a video to the source file with clicking plus or select from media. 3. Attempt to generate captions for the added clip."
  ],
  "actual": "The caption generation option is not available or does not trigger for the clip added to the timeline.",
  "expected": "The user should be able to generate captions for clips added to the editor timeline.",
  "reporter": "",
  "date": "",
  "devStatus": "Needs decision",
  "qaStatus": "",
  "qaNote": "Dev 13 Nov: captions can only be generated for the main video today; captions for a video added to the timeline is new work.",
  "sheetId": "197"
 },
 {
  "id": "ISS-198",
  "module": "Video Editor / Graphics / Top Band",
  "sev": "High",
  "title": "Top Band Text Overflows Beyond the Top Band Position",
  "summary": "Top Band Text Overflows Beyond the Top Band Position",
  "steps": [
   "1. Open a project in the video editor. 2. Add or enable the Top Band. 3. Enter text in the Top Band. 4. Observe the text alignment and position."
  ],
  "actual": "The Top Band text expands beyond the band area and appears outside the designated Top Band position.",
  "expected": "The Top Band text should remain within the designated band area without overflowing or appearing outside its position.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: top band text now wraps inside the band and is sized to fit, in the preview and the export. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "198"
 },
 {
  "id": "ISS-199",
  "module": "Recordings / Video Editor",
  "sev": "High",
  "title": "Only empty text box is showing and Live Badge Not Displayed in Editor After Recording Completion",
  "summary": "Only empty text box is showing and Live Badge Not Displayed in Editor After Recording Completion",
  "steps": [
   "1. Complete a live recording. 2. Open the recorded content in the editor. 3. Navigate to the Live Badge settings. 4. Attempt to edit the Live Badge."
  ],
  "actual": "The Live Badge is not displayed in the editor after opening the completed recording for editing.",
  "expected": "The Live Badge should be displayed in the editor and remain editable for completed recordings.",
  "reporter": "",
  "date": "",
  "devStatus": "Partly fixed 18 Nov: the LIVE badge now shows the channel's saved badge text. The badge picture not showing was not reproduced: please share steps. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "199"
 },
 {
  "id": "ISS-200",
  "module": "Video Editor / Graphics / Top Band",
  "sev": "Medium",
  "title": "Breaking News Image Not Displayed in Top Band",
  "summary": "Breaking News Image Not Displayed in Top Band",
  "steps": [
   "1. Open a project in the video editor. 2. Navigate to Top Band settings. 3. Change the Top Band background color. 4. Check the Breaking News image in the editor preview."
  ],
  "actual": "The Top Band background color changes successfully, but the Breaking News image is not displayed in the editor preview.",
  "expected": "The Breaking News image should be displayed correctly in the Top Band along with the selected background color.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "200"
 },
 {
  "id": "ISS-201",
  "module": "Video Editor / Graphics / Ticker Band",
  "sev": "Medium",
  "title": "Ticker Band Background Color Applied to Entire Preview Instead of Ticker Band Only",
  "summary": "Ticker Band Background Color Applied to Entire Preview Instead of Ticker Band Only",
  "steps": [
   "1. Open a project in the video editor. 2. Navigate to Ticker Band settings. 3. Change the Ticker Band background color. 4. Observe the editor preview."
  ],
  "actual": "The selected background color is applied to the entire preview instead of only the Ticker Band area.",
  "expected": "The selected background color should be applied only to the Ticker Band area without affecting the rest of the preview.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: the ticker's background colour now stays on its strip instead of filling the whole preview. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "201"
 },
 {
  "id": "ISS-202",
  "module": "Video Editor / Graphics / Ticker Band",
  "sev": "Medium",
  "title": "Ticker Band Position Pointers Displayed Outside the Ticker Band",
  "summary": "Ticker Band Position Pointers Displayed Outside the Ticker Band",
  "steps": [
   "1. Open a project in the video editor. 2. Navigate to Ticker Band settings. 3. Enable or adjust the Ticker Band position pointers. 4. Observe the pointers in the editor preview."
  ],
  "actual": "The Ticker Band position pointers are displayed across the preview instead of being restricted to the bottom Ticker Band area.",
  "expected": "The position pointers should be displayed only within the bottom Ticker Band area.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: the ticker's selection box and handles now stay on its strip instead of spanning the whole preview. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "202"
 },
 {
  "id": "ISS-203",
  "module": "Video Editor / Graphics / Lower Band",
  "sev": "High",
  "title": "Lower Band Text Style and Background Color Differ Between Preview and Output",
  "summary": "Lower Band Text Style and Background Color Differ Between Preview and Output",
  "steps": [
   "1. Open a project in the video editor. 2. Navigate to Lower Band settings. 3. Customize the text style and background color. 4. Export the video. 5. Compare the exported output with the editor preview."
  ],
  "actual": "The Lower Band text style and background color in the exported output differ from the settings displayed in the editor preview.",
  "expected": "The exported output should retain the same Lower Band text style and background color as displayed in the editor preview.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: the export now includes the lower band's video and its text background over the whole text box, as the preview shows. If the export still differs, the renderer's crop support needs checking (backend). Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "203"
 },
 {
  "id": "ISS-204",
  "module": "Video Editor / Graphics / Band Positioning",
  "sev": "Medium",
  "title": "Original Band Color showing Instead of Updated Color When only Repositioning the Bands",
  "summary": "Original Band Color showing Instead of Updated Color When only Repositioning the Bands",
  "steps": [
   "1. Open a project in the video editor. 2. Change the background color of any band. 3. Reposition the band in the editor preview. 4. Observe the band color during repositioning."
  ],
  "actual": "The original source color is displayed instead of the updated background color when repositioning the band.",
  "expected": "The updated background color should remain visible while repositioning the band.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: a band keeps its colours, lines and background while it is dragged or resized. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "204"
 },
 {
  "id": "ISS-205",
  "module": "Projects / Bin",
  "sev": "High",
  "title": "Content Not Deleted from Projects Bin",
  "summary": "Content Not Deleted from Projects Bin",
  "steps": [
   "1. Open the Projects Bin screen. 2. Select any content item. 3. Click the Delete button. 4. Verify whether the selected content is removed."
  ],
  "actual": "The selected content is not deleted after clicking the Delete button.",
  "expected": "The selected content should be successfully deleted from the Projects Bin when the user clicks the Delete button.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "205"
 },
 {
  "id": "ISS-206",
  "module": "Video Editor / Transcript",
  "sev": "High",
  "title": "Transcript Text Not Highlighted in Synchronization with Content Playback",
  "summary": "Transcript Text Not Highlighted in Synchronization with Content Playback",
  "steps": [
   "1. Open a recorded content item in the editor. 2. Navigate to the Transcript section. 3. Start content playback. 4. Observe the transcript highlighting during playback."
  ],
  "actual": "The corresponding transcript text is not highlighted in synchronization with the content playback.",
  "expected": "The exact transcript text should be highlighted in real time and remain synchronized with the content playback.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: the playhead and the transcript's word highlight keep moving while the picture holds still or an audio file plays. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "206"
 },
 {
  "id": "ISS-207",
  "module": "Video Editor / Transcript",
  "sev": "High",
  "title": "Initial Transcript Line Not Played in Editor",
  "summary": "Initial Transcript Line Not Played in Editor",
  "steps": [
   "1. Open a recorded content item in the editor. 2. Navigate to the Transcript section. 3. Start playback from the beginning of the content. 4. Observe the initial transcript line during playback. 5. Compare the playback with the same content in Projects."
  ],
  "actual": "The initial transcript line is not played in the editor, whereas it plays correctly in Projects.",
  "expected": "The initial transcript line should play correctly in the editor, synchronized with the content playback, as it does in Projects.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: a Studio recording's first transcript line is no longer dropped when a person's track starts a moment before the video. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "207"
 },
 {
  "id": "ISS-208",
  "module": "Video Editor / Graphics / Band Settings",
  "sev": "Medium",
  "title": "Band Background Color Not Displayed When Recording Playback Is Paused",
  "summary": "Band Background Color Not Displayed When Recording Playback Is Paused",
  "steps": [
   "1. Open a recorded content item in the editor. 2. Start playback. 3. Pause the recording and observe the band in the preview."
  ],
  "actual": "The configured band background color is not displayed when the recording playback is paused.",
  "expected": "The configured band background color should remain visible in the editor preview even when playback is paused.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 19 Nov: band backgrounds stay drawn when playback is paused; a camera window catching up after a pause no longer hides the bands it only partly covers. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "208"
 },
 {
  "id": "ISS-209",
  "module": "Video Editor / Timeline",
  "sev": "Medium",
  "title": "Master Clip Thumbnail Displayed Instead of Pre/Mid/Post-Roll Content Thumbnails",
  "summary": "Master Clip Thumbnail Displayed Instead of Pre/Mid/Post-Roll Content Thumbnails",
  "steps": [
   "1. Open a project in the video editor. 2. Add Pre-Roll, Mid-Roll, and Post-Roll content to the timeline. 3. Observe the thumbnails displayed for each added clip."
  ],
  "actual": "The master clip thumbnail is displayed instead of the respective Pre-Roll, Mid-Roll, and Post-Roll content thumbnails.",
  "expected": "The timeline should display the respective thumbnails for the added Pre-Roll, Mid-Roll, and Post-Roll content.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: pre-, mid- and post-roll clips now show their own thumbnails on the timeline. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "209"
 },
 {
  "id": "ISS-210",
  "module": "Video Editor / Timeline / Mid-Roll",
  "sev": "High",
  "title": "Added External Mid-Roll Video Not Displayed During Editor Playback",
  "summary": "Added External Mid-Roll Video Not Displayed During Editor Playback",
  "steps": [
   "1. Open a project in the video editor. 2. Add external video content as a Mid-Roll clip in the timeline. 3. Start playback and observe the preview during the Mid-Roll segment."
  ],
  "actual": "The external Mid-Roll audio plays, but the video preview remains frozen on the source content instead of displaying the added video.",
  "expected": "The added external Mid-Roll video and its corresponding audio should play correctly in the editor preview during the Mid-Roll segment.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: a mid-roll added to a meeting shown as its cameras now plays its picture with its sound (not frozen), and a roll under the playhead always shows instead of a picked Scenes shot. Expected: add an external mid-roll and play through it; its video plays with its audio, then the recording resumes. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "210"
 },
 {
  "id": "ISS-211",
  "module": "Video Editor / Timeline / B-Roll",
  "sev": "High",
  "title": "Source Audio Plays Instead of B-Roll Audio During B-Roll Playback",
  "summary": "Source Audio Plays Instead of B-Roll Audio During B-Roll Playback",
  "steps": [
   "1. Open a project in the video editor. 2. Add a B-Roll video clip to the timeline. 3. Start playback and observe the video and audio during the B-Roll segment."
  ],
  "actual": "The added B-Roll video plays, but the source content audio continues playing instead of the B-Roll audio.",
  "expected": "The B-Roll video and its corresponding audio should play together during the B-Roll segment.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 19 Nov: choose whether a b-roll mutes the source's sound or its own, from the Media menu and the b-roll toolbar, in the preview and the export. Retest after deploy.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "211"
 },
 {
  "id": "ISS-212",
  "module": "Video Editor / Timeline / B-Roll",
  "sev": "High",
  "title": "B-Roll Content Displayed as Overlay During Playback",
  "summary": "B-Roll Content Displayed as Overlay During Playback",
  "steps": [
   "1. Open a project in the video editor. 2. Add any content as B-Roll to the timeline. 3. Start playback and observe how the added content is displayed."
  ],
  "actual": "The content is added as B-Roll in the timeline, but during playback it is displayed as an overlay instead of replacing the source video.",
  "expected": "The added content should play as B-Roll, replacing the source video during its designated timeline duration.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 19 Nov: a full-screen b-roll now covers the recording and hides the Studio's graphics while it plays, in the preview and the export. Retest after deploy.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "212"
 },
 {
  "id": "ISS-213",
  "module": "Video Editor / Export",
  "sev": "High",
  "title": "Export Fails When Combining Pre-Roll, Mid-Roll, Post-Roll, B-Roll, and Overlay Content",
  "summary": "Export Fails When Combining Pre-Roll, Mid-Roll, Post-Roll, B-Roll, and Overlay Content",
  "steps": [
   "1. Open a project in the video editor. 2. Add Pre-Roll, Mid-Roll, and Post-Roll content to the timeline. 3. Add B-Roll clips and overlay content. 4. Initiate the export. 5. Observe the export status."
  ],
  "actual": "The export fails when the project contains Pre-Roll, Mid-Roll, Post-Roll, B-Roll, and overlay content.",
  "expected": "The project should export successfully with all added Pre-Roll, Mid-Roll, Post-Roll, B-Roll, and overlay content rendered correctly.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: intros, mid-rolls and outros now always go on the main video's track, even with a b-roll track above it, so they export as rolls instead of overlays. Expected: add a pre-roll, mid-roll, post-roll, b-roll and an overlay; the export completes with each in its place. If it still fails, please add the error shown and the content id. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "213"
 },
 {
  "id": "ISS-214",
  "module": "Video Editor / AI Tools / Refine Content",
  "sev": "High",
  "title": "AI Refine Content Operation Stops After Browser Refresh",
  "summary": "AI Refine Content Operation Stops After Browser Refresh",
  "steps": [
   "1. Open a project in the video editor. 2. Navigate to AI Tools and select Refine Content. 3. Start the Refine Content operation. 4. Refresh the browser while the operation is in progress. 5. Observe the operation status."
  ],
  "actual": "The Refine Content operation stops and does not resume after the browser refresh.",
  "expected": "The Refine Content operation should continue processing or resume from its previous state after the browser refresh.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 18 Nov: Refine content runs (Auto edit, pauses, filler words, Find fluff, Magic clips) pick back up after a refresh and show their result. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "214"
 },
 {
  "id": "ISS-215",
  "module": "Video Editor / Scene Editor/ Layout",
  "sev": "High",
  "title": "Unable to Edit Scene Frames When Two Participants Speak Using the Same Camera",
  "summary": "Unable to Edit Scene Frames When Two Participants Speak Using the Same Camera",
  "steps": [
   "1. Open a recorded video containing two participants speaking using the same camera. 2. Open the recording in the editor. 3. Navigate to the Scene Frames section. 4. Attempt to edit the individual scene frames."
  ],
  "actual": "The user is unable to edit the scene frames when two participants are speaking using the same camera.",
  "expected": "The user should be able to edit the scene frames independently, even when two participants are speaking using the same camera.",
  "reporter": "",
  "date": "18 Nov",
  "devStatus": "Fixed 24 Nov: splitting a frame of one camera now starts its two halves on the camera's left and right sides, so each person sharing the camera gets their own frame. Expected: on a scene where two people share a camera, split the frame, then crop and move each half on its own. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "215"
 },
 {
  "id": "ISS-216",
  "module": "Video Editor / AI Tools / Auto Edit / Timeline",
  "sev": "Medium",
  "title": "Source Video Clips Not Merged into a Single Clip When AI Auto Edit Is Disabled",
  "summary": "Source Video Clips Not Merged into a Single Clip When AI Auto Edit Is Disabled",
  "steps": [
   "1. Open a recording in the video editor. 2. Enable AI Auto Edit and observe the source video being split into multiple clips in the timeline. 3. Disable AI Auto Edit. 4. Observe the timeline clip structure."
  ],
  "actual": "When AI Auto Edit is disabled, the source video remains split into multiple clips instead of being merged into a single clip automatically.",
  "expected": "When AI Auto Edit is disabled, the source video should be merged and displayed as a single clip in the timeline.",
  "reporter": "",
  "date": "18 Nov",
  "devStatus": "Fixed 19 Nov: switching Auto edit (or another cutting tool) off joins the video back into one clip; splits made by hand stay. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "216"
 },
 {
  "id": "ISS-217",
  "module": "Video Editor / Recording Content",
  "sev": "Medium",
  "title": "Names Cannot Be Removed from Recording Content in Editor",
  "summary": "Names Cannot Be Removed from Recording Content in Editor",
  "steps": [
   "1. Open a recording in the editor. 2. Navigate to the recording content section. 3. Attempt to remove a name from the recording content."
  ],
  "actual": "The name cannot be removed from the recording content.",
  "expected": "Users should be able to remove names from the recording content as required.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 19 Nov: each person's name label is listed in Layers with a Hide button; a hidden name is removed from the preview and the export. Retest after deploy.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "217"
 },
 {
  "id": "ISS-218",
  "module": "Video Editor / Bands",
  "sev": "Medium",
  "title": "Unable to Adjust Bands Based on Timeline",
  "summary": "Unable to Adjust Bands Based on Timeline",
  "steps": [
   "1. Open a recording in the editor. 2. Select a band (Top Band, Lower Band, Ticker, etc.). 3. Attempt to adjust the band's duration or timing using the timeline."
  ],
  "actual": "Bands cannot be adjusted according to the timeline/time duration.",
  "expected": "Users should be able to adjust band timing and duration directly on the timeline based on the video time.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 19 Nov: a Studio layers button beside Separate tracks shows each Studio band and graphic as a timeline row. Drag a block to move it, drag its edges to trim it, select it and Split to cut it, and show, hide or reorder it; the preview and the export follow. Retest after deploy.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "218"
 },
 {
  "id": "ISS-219",
  "module": "Video Editor / Captions",
  "sev": "Medium",
  "title": "Unable to Adjust Caption Position by Selecting Captions in Editor Preview",
  "summary": "Unable to Adjust Caption Position by Selecting Captions in Editor Preview",
  "steps": [
   "1. Open a recording in the editor. 2. Select a caption in the editor preview. 3. Attempt to adjust the caption's position."
  ],
  "actual": "Users cannot reposition captions by selecting them in the editor preview. Only predefined positions (Top, Middle, and Bottom) are available.",
  "expected": "Users should be able to select captions directly in the editor preview and freely adjust their position as required.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: clicking the captions in the preview now selects them with a box and corner handles (a dashed outline shows on hover); drag them to any place, and the export uses the same place. Expected: click the captions in the preview; the box with handles shows; drag them anywhere; Escape or a click elsewhere deselects. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "Pointers is not showing to drag when user select the caption upon editor preview",
  "sheetId": "219"
 },
 {
  "id": "ISS-220",
  "module": "Video Editor / Editor Controls",
  "sev": "Medium",
  "title": "Size Adjustment Controls Should Be Available Across All Editor Elements",
  "summary": "Size Adjustment Controls Should Be Available Across All Editor Elements",
  "steps": [
   "1. Open a recording in the editor. 2. Select different editor elements across the available sections. 3. Check the available size adjustment controls."
  ],
  "actual": "Size adjustment controls are not consistently available across all editor elements.",
  "expected": "Size adjustment controls should be available for all relevant editor elements to allow users to adjust their size as required.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: one Size control in the toolbar of text, images, stickers, shapes, b-roll, frames and Studio graphics (for text the box and letters scale together). Expected: select any element and change Size in its toolbar; it resizes in the preview and the export. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "220"
 },
 {
  "id": "ISS-221",
  "module": "Video Editor / Frame Position / Export",
  "sev": "High",
  "title": "Adjusted Frame Position Not Reflected in Exported Output",
  "summary": "Adjusted Frame Position Not Reflected in Exported Output",
  "steps": [
   "1. Open a recording in the editor. 2. Adjust the participant position in the layout preview. 3. Export the video. 4. Compare the exported output with the editor preview."
  ],
  "actual": "The exported output does not reflect the adjusted frame position and differs from the editor preview.",
  "expected": "The exported output should retain the adjusted frame position and match the editor preview.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: a scene's moved, resized or full-screen frames now export where they were put, also on layout templates (covered by an automated test). Expected: drag or resize a participant frame, export; the file matches the preview. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "221"
 },
 {
  "id": "ISS-222",
  "module": "Video Editor / Ticker Band / Export",
  "sev": "High",
  "title": "Ticker Band Does Not Scroll in Exported Output",
  "summary": "Ticker Band Does Not Scroll in Exported Output",
  "steps": [
   "1. Open a recording in the editor. 2. Add or enable the Ticker Band. 3. Verify that the ticker scrolls in the editor preview. 4. Export the video and check the ticker behavior."
  ],
  "actual": "The ticker band remains static or does not scroll in the exported output, although it scrolls correctly in the editor preview.",
  "expected": "The ticker band should scroll in the exported output exactly as it does in the editor preview.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "fixed nov 23",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "222"
 },
 {
  "id": "ISS-223",
  "module": "Video Editor / Audio / Captions",
  "sev": "Medium",
  "title": "Audio Plays for a Participant Even When Their transcript Are Disabled",
  "summary": "Audio Plays for a Participant Even When Their transcript Are Disabled",
  "steps": [
   "1. Open a recording with two participants in the editor. 2. Navigate to the Captions settings. 3. Disable transcript for the second participant. 4. Play the recording and observe the audio output."
  ],
  "actual": "Audio from both participants continues to play even though transcript are disabled for the second participant.",
  "expected": "Disabling a participant's transcript should not affect audio playback. If the intention is to mute that participant, a separate audio control should be available to disable their audio.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "223"
 },
 {
  "id": "ISS-224",
  "module": "Video Editor / Timeline / Clip Effects",
  "sev": "High",
  "title": "Stabilize and Reverse Effects Not Working on Selected Timeline Clips",
  "summary": "Stabilize and Reverse Effects Not Working on Selected Timeline Clips",
  "steps": [
   "1. Open a recording in the editor. 2. Select any clip from the timeline. 3. Apply the Stabilize effect and check the result. 4. Apply the Reverse effect and check the result."
  ],
  "actual": "Stabilize and Reverse effects do not work when applied to a clip selected from the timeline.",
  "expected": "Both Stabilize and Reverse effects should work correctly on the selected timeline clip and reflect the changes in the preview and exported output.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: Reverse now plays backwards in the preview, Stabilize is applied in the exported file (the canvas says so), and both export beside transitions. They work on the main video's clips; on b-roll they are disabled with the reason shown. Expected: select a main-video clip, apply Reverse; the preview plays it backwards and the export matches. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "224"
 },
 {
  "id": "ISS-225",
  "module": "Video Editor / Animations",
  "sev": "Low",
  "title": "Animation Color Customization Option Required",
  "summary": "Animation Color Customization Option Required",
  "steps": [
   "1. Open a recording in the editor. 2. Navigate to the Animations section for any clip. 3. Select an animation and check the available customization options."
  ],
  "actual": "Users do not have sufficient options to customize or change animation colors.",
  "expected": "Users should be able to customize animation colors according to their preferences.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "24 Nov: needs product decision. This is a new feature (colour options for animations), not a bug. Please confirm which animations need colour options and which colours.",
  "qaStatus": "Reopen",
  "qaNote": "First time animation is working and after from second time onwards it is not working",
  "sheetId": "225"
 },
 {
  "id": "ISS-226",
  "module": "Video Editor / Timeline / Export",
  "sev": "High",
  "title": "Unable to Export Clips with Both Speed Adjustments and Transitions Applied",
  "summary": "Unable to Export Clips with Both Speed Adjustments and Transitions Applied",
  "steps": [
   "1. Open a recording in the editor. 2. Select a clip from the timeline and adjust its playback speed. 3. Apply a transition to the clip or between clips. 4. Attempt to export the video."
  ],
  "actual": "Export is blocked with the message: \"Clip speed and transitions can't be combined in one export yet — reset the speed or remove the transitions to export.\"",
  "expected": "Users should be able to export videos with both clip speed adjustments and transitions applied without removing either effect.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "226"
 },
 {
  "id": "ISS-227",
  "module": "Video Editor / AI Tools / Eye Contact / Export",
  "sev": "High",
  "title": "Eye Contact Export Fails for Edited Videos with Camera Angles, Studio Programs, or Multiple Recording Parts",
  "summary": "Eye Contact Export Fails for Edited Videos with Camera Angles, Studio Programs, or Multiple Recording Parts",
  "steps": [
   "1. Open a multi users recording in the editor.. 2. Enable Eye Contact under AI Tools. 3. Apply edits and attempt to export the eye-contact version."
  ],
  "actual": "Export is blocked with a message stating that the eye-contact version cannot support edits involving camera angles, Studio programs, or videos recorded in parts.",
  "expected": "The eye-contact version should support these editing workflows and export successfully without requiring users to disable Eye Contact.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "227"
 },
 {
  "id": "ISS-228",
  "module": "Video Editor / Timeline / Freeze Frame",
  "sev": "High",
  "title": "Unable to Unfreeze a Clip After Applying Freeze Frame",
  "summary": "Unable to Unfreeze a Clip After Applying Freeze Frame",
  "steps": [
   "1. Open a recording in the editor. 2. Select a clip from the timeline. 3. Apply the Freeze Frame effect. 4. Attempt to undo or remove the Freeze Frame effect."
  ],
  "actual": "The clip remains frozen, and users are unable to restore its original playback.",
  "expected": "Users should be able to remove the Freeze Frame effect and restore the clip to its original playback.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: Remove freeze frame is in the right-click menu of the frozen hold and of the clip it was applied to; removing it joins the clip again. Expected: apply Freeze frame, right-click the clip, choose Remove freeze frame; the clip plays normally again. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "228"
 },
 {
  "id": "ISS-229",
  "module": "Video Editor / Live Badge / Export",
  "sev": "Medium",
  "title": "Live Badge Text Position Differs in Exported Output Compared to Preview",
  "summary": "Live Badge Text Position Differs in Exported Output Compared to Preview",
  "steps": [
   "1. Open a recording in the editor. 2. Enable the Live Badge. 3. Adjust the Live Badge text position in the preview. 4. Export the video and compare the text position with the editor preview."
  ],
  "actual": "The Live Badge text position changes in the exported output and does not match the position configured in the preview.",
  "expected": "The Live Badge text should maintain the same position in the exported output as configured in the editor preview.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "fixed Nov 23",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "229"
 },
 {
  "id": "ISS-230",
  "module": "Video Editor / Date & Time / Export",
  "sev": "Medium",
  "title": "Date and Time Text Font Differs in Exported Output Compared to Preview",
  "summary": "Date and Time Text Font Differs in Exported Output Compared to Preview",
  "steps": [
   "1. Open a recording in the editor. 2. Enable the Date and Time overlay. 3. Configure the font in the editor preview. 4. Export the video and compare the font with the editor preview."
  ],
  "actual": "The Date and Time text font changes in the exported output and does not match the font configured in the preview.",
  "expected": "The Date and Time text should retain the same font styling in the exported output as configured in the editor preview.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: the Studio clock and date now use the same font (Arimo for Arial, in bold as shown) in the preview and the export. Expected: export a video with the date and time; the font matches the preview. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": "230"
 },
 {
  "id": "ISS-231",
  "module": "Video Editor / Blur Image / Frame Position",
  "sev": "Medium",
  "title": "Unable to Reposition Blur Image Across Video Frames",
  "summary": "Unable to Reposition Blur Image Across Video Frames",
  "steps": [
   "1. Open a recording in the editor. 2. Add a blur image to the video. 3. Select the blur image in different frames. 4. Attempt to move or adjust its position in the preview."
  ],
  "actual": "Users are unable to move or reposition the blur image across different frames.",
  "expected": "Users should be able to freely move and adjust the blur image position in any frame as required.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: a blur can be grabbed and moved in the preview from any selection (even after a split), and moving it on a cut clip moves it on every piece. Expected: press the blur in the preview and drag it anywhere; it stays there across the video. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "231"
 },
 {
  "id": "ISS-232",
  "module": "Video Editor / Background Removal",
  "sev": "Medium",
  "title": "Remove Background Button Remains Enabled While Background Removal Is Processing",
  "summary": "Remove Background Button Remains Enabled While Background Removal Is Processing",
  "steps": [
   "1. Open a recording in the editor. 2. Select the Remove Background option for any participant. 3. Wait for background removal processing to start. 4. Observe the Remove Background button while processing is in progress."
  ],
  "actual": "The Remove Background button remains enabled even while background removal is processing, allowing users to change the option during processing.",
  "expected": "The Remove Background button should be disabled until the current background removal process is completed to prevent option changes during processing.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: every Remove background control (frame toolbar, Properties, AI Tools) stays locked while a removal runs, also after a page reload (shows Checking until known). Expected: start Remove background; the button and options stay disabled until it completes, then unlock. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "232"
 },
 {
  "id": "ISS-233",
  "module": "Video Editor / AI Tools / Eye Contact / Background Removal / Export",
  "sev": "High",
  "title": "Unable to Export Videos with Eye Contact and Background Removal Enabled Together",
  "summary": "Unable to Export Videos with Eye Contact and Background Removal Enabled Together",
  "steps": [
   "1. Open a recording in the editor. 2. Enable Eye Contact under AI Tools. 3. Enable Background Removal. 4. Attempt to export the video."
  ],
  "actual": "Export is blocked with a message stating that Eye Contact and Background Removal cannot be combined in one export.",
  "expected": "Users should be able to export videos with both Eye Contact and Background Removal enabled simultaneously.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "233"
 },
 {
  "id": "ISS-234",
  "module": "Video Editor / Participant Selection / Crop",
  "sev": "High",
  "title": "Crop Functionality Not Working for Selected Participants",
  "summary": "Crop Functionality Not Working for Selected Participants",
  "steps": [
   "1. Open a recording in the editor. 2. Select any participant from the available participants. 3. Apply the Crop functionality. 4. Check whether the selected participant's frame is cropped."
  ],
  "actual": "Crop functionality does not work when a participant is selected.",
  "expected": "Users should be able to crop the selected participant's frame successfully and see the changes reflected in the preview and exported output.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: a Studio participant's window can be cropped from its frame toolbar, and selecting a participant no longer crashes the editor. Expected: select a participant, use Crop in its toolbar; the crop shows in the preview and the export. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "Showing just zom in and zoom out instead of adjusting the particular frame",
  "sheetId": "234"
 },
 {
  "id": "ISS-235",
  "module": "Video Editor / Participant Settings",
  "sev": "High",
  "title": "Participant Animation and Visual Customization Controls Not Working",
  "summary": "Participant Animation and Visual Customization Controls Not Working",
  "steps": [
   "1. Open a recording in the editor. 2. Select any participant. 3. Apply or modify Animation, Border Radius, Shadow, Opacity, and Color Adjustment settings. 4. Check the changes in the editor preview."
  ],
  "actual": "Animation, Border Radius, Shadow, Opacity, and Color Adjustment settings are not functioning for the selected participant.",
  "expected": "All participant customization settings should work correctly and reflect the applied changes in the editor preview and exported output.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: corner radius, shadow, opacity, Zoom & pan and Color adjustments on a participant's frame now show in the preview and the export (Color adjustments grade that person's camera). Animation was not changed in this fix; if it still fails, please note which animation. Expected: change each setting on a selected participant; the preview and the export update. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "In output contnet changes is not reflecting where compare to editor preview",
  "sheetId": "235"
 },
 {
  "id": "ISS-236",
  "module": "Video Editor / Participants / Frames",
  "sev": "Medium",
  "title": "Participant Frame Swaps Instead of Moving When Dragging to Reposition",
  "summary": "Participant Frame Swaps Instead of Moving When Dragging to Reposition",
  "steps": [
   "1. Open a recording in the editor. 2. Select a participant and add a frame. 3. Attempt to drag the frame to change its position in the preview."
  ],
  "actual": "The participant frame swaps with another frame instead of moving to the intended position.",
  "expected": "Users should be able to freely drag and reposition the selected participant frame without triggering an unintended frame swap.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: dropping a frame near another frame's edge moves it there; it swaps only when dropped on the middle of another frame. Frames that tile the whole canvas still swap, as they have nowhere else to go. Expected: drag a free frame next to another; it moves without swapping. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "236"
 },
 {
  "id": "ISS-237",
  "module": "Video Editor / Participants / Full Screen / Export",
  "sev": "High",
  "title": "Participant Full-Screen Layout Not Reflected in Exported Output",
  "summary": "Participant Full-Screen Layout Not Reflected in Exported Output",
  "steps": [
   "1. Open a recording in the editor. 2. Select a participant. 3. Enable the Full Screen option. 4. Verify the layout in the editor preview. 5. Export the video and compare the output with the preview."
  ],
  "actual": "The participant's full-screen layout in the exported output does not match the editor preview.",
  "expected": "The exported output should display the selected participant in full screen, matching the layout configured in the editor preview.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "fixed Nov22",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "237"
 },
 {
  "id": "ISS-238",
  "module": "Video Editor / Graphics Bands / Pre-Roll / Mid-Roll / Post-Roll",
  "sev": "Medium",
  "title": "Unable to Adjust Graphics Bands and all for Pre-Roll, Mid-Roll, and Post-Roll Content",
  "summary": "Unable to Adjust Graphics Bands and all for Pre-Roll, Mid-Roll, and Post-Roll Content",
  "steps": [
   "1. Open a recording in the editor. 2. Add Pre-Roll, Mid-Roll, and Post-Roll content. 3. Select the graphics bands associated with each section. 4. Attempt to adjust their position or size."
  ],
  "actual": "Users are unable to adjust the graphics bands for Pre-Roll, Mid-Roll, and Post-Roll content.",
  "expected": "Users should be able to adjust the position and size of graphics bands independently for Pre-Roll, Mid-Roll, and Post-Roll content.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: a Studio band switched on in the Graphics panel now shows over the pre-, mid- and post-rolls, where it can be placed and edited, in the preview and the export. Expected: with the playhead on a roll, switch a band on in Graphics, move and resize it; the export matches. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "238"
 },
 {
  "id": "ISS-239",
  "module": "Video Editor / Export / Download Settings",
  "sev": "High",
  "title": "Downloaded Video Does Not Match Selected Resolution and Frame Rate",
  "summary": "Downloaded Video Does Not Match Selected Resolution and Frame Rate",
  "steps": [
   "z"
  ],
  "actual": "The downloaded video does not match the resolution and frame rate selected by the user.",
  "expected": "The downloaded video should be generated with the exact resolution and frame rate selected in the export settings.",
  "reporter": "",
  "date": "19 Nov",
  "devStatus": "Fixed 24 Nov: the export uses the picked resolution even when the video's size isn't on record (before it fell back to 640x360), and Download takes the newest export of that name (covered by an automated test). Expected: export at 1080p 30 fps; the downloaded file is 1920x1080 at 30 fps. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "239"
 },
 {
  "id": "ISS-240",
  "module": "Video Editor / Participants / Name Settings",
  "sev": "Medium",
  "title": "Unable to Adjust Participant Names in Editor",
  "summary": "Unable to Adjust Participant Names in Editor",
  "steps": [
   "1. Open a recording in the editor. 2. Select a participant. 3. Attempt to edit or adjust the participant's name."
  ],
  "actual": "Users are unable to modify or adjust participant names in the editor.",
  "expected": "Users should be able to edit and adjust participant names as required.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: click a participant's name label to open its name, colour, background, font and size controls (also from their frame or the Layers panel); double-click it to rename. Expected: click a name label in the preview; its controls open; changes show in the preview and the export. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "240"
 },
 {
  "id": "ISS-241",
  "module": "All Modules / Orbit",
  "sev": "High",
  "title": "Close Orbit Functionality Not Working Across Modules",
  "summary": "Close Orbit Functionality Not Working Across Modules",
  "steps": [
   "1. Open Orbit from any module. 2. Click the Close option. 3. Observe whether Orbit closes. 4. Repeat the steps from other modules."
  ],
  "actual": "Orbit does not close when the Close option is clicked. The issue occurs across all modules.",
  "expected": "Orbit should close successfully when users click the Close option, regardless of the module from which it is opened.",
  "reporter": "",
  "date": "",
  "devStatus": "fixed",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "241"
 },
 {
  "id": "ISS-242",
  "module": "Video Editor / Dubbing",
  "sev": "High",
  "title": "Dubbing Progress Bar Position Changes When Updating Properties or Refreshing Browser",
  "summary": "Dubbing Progress Bar Position Changes When Updating Properties or Refreshing Browser",
  "steps": [
   "1. Open the Video Editor module. 2. Open a project with dubbing applied. 3. Note the current position of the dubbing progress bar. 4. Change any dubbing properties or refresh the browser."
  ],
  "actual": "The dubbing progress bar position changes unexpectedly after updating properties or refreshing the browser.",
  "expected": "The dubbing progress bar should retain its correct position when properties are updated or the browser is refreshed.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: a running dub keeps its progress bar where it was after changing properties, switching the side menu or reloading the page. Expected: start a dub, change a property or reload; the bar continues from the same percent and never drops back. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "242"
 },
 {
  "id": "ISS-243",
  "module": "Video Editor / AI Features",
  "sev": "Medium",
  "title": "AI Feature Progress Bar Position Changes After Browser Refresh or Tab Switch",
  "summary": "AI Feature Progress Bar Position Changes After Browser Refresh or Tab Switch",
  "steps": [
   "1. Open the Video Editor module. 2. Navigate to AI Features. 3. Start an AI feature and note the progress bar position. 4. Refresh the browser or switch to another tab and return."
  ],
  "actual": "The AI feature progress bar position changes unexpectedly after refreshing the browser or switching tabs.",
  "expected": "The progress bar should retain the correct progress position and status when the browser is refreshed or the user switches tabs.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 24 Nov: running AI jobs and their progress bars are kept after a page reload or a tab switch, and bars never drop back. Expected: start an AI feature, reload or switch tab; progress continues from where it was. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": "243"
 },
 {
  "id": "ISS-244",
  "module": "Projects Module / Speaker Tracks",
  "sev": "High",
  "title": "Speaker Tracks Not playing Separately After Spotlight Upload",
  "summary": "Speaker Tracks Not playing Separately After Spotlight Upload",
  "steps": [
   "1. Open the Projects module. 2. Upload content using the Spotlight Each Speaker option. 3. Open the uploaded project. 4. check the speaker tracks and try to play seperately"
  ],
  "actual": "Individual speaker tracks are not displayed separately for playback.",
  "expected": "Each speaker's audio track should be displayed separately and allow individual playback.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "244"
 },
 {
  "id": "ISS-245",
  "module": "All Modules / Plans Page",
  "sev": "High",
  "title": "Plans Page Displayed Repeatedly When Opening Different Modules",
  "summary": "Plans Page Displayed Repeatedly When Opening Different Modules",
  "steps": [
   "1. Log in to the application. 2. Open any module. 3. Navigate to another module and repeat."
  ],
  "actual": "The Plans page is displayed repeatedly whenever the user opens any module.",
  "expected": "The Plans page should not appear repeatedly when navigating between modules. Users should be redirected to the selected module based on their access and subscription status.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": "245"
 },
 {
  "id": "ISS-246",
  "module": "Studio / Video Editor / Brand Kit",
  "sev": "Medium",
  "title": "Brand Kit Cannot Be Edited After Casual Meeting Completion",
  "summary": "Brand Kit Cannot Be Edited After Casual Meeting Completion",
  "steps": [
   "1. Open Studio and start a Casual meeting with Brand Kit elements applied. 2. Complete and end the meeting. 3. Open the recorded project in Video Editor. 4. Navigate to Brand Kit and try to edit the applied elements."
  ],
  "actual": "Brand Kit elements cannot be edited in the Video Editor after meeting completion.",
  "expected": "Brand Kit elements should remain editable in the Video Editor after meeting completion.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-247",
  "module": "Studio / Video Editor / Graphics",
  "sev": "Medium",
  "title": "Ticker Band Cannot Be Edited After Casual Meeting Completion",
  "summary": "Ticker Band Cannot Be Edited After Casual Meeting Completion",
  "steps": [
   "1. Open Studio and start a Casual meeting with a Ticker Band. 2. Complete and end the meeting. 3. Open the recorded project in Video Editor. 4. Navigate to Graphics and select the Ticker Band. 5. Try to edit its properties."
  ],
  "actual": "The Ticker Band cannot be edited in the Graphics module after the meeting is completed.",
  "expected": "The Ticker Band should remain editable in the Graphics module after meeting completion.",
  "reporter": "",
  "date": "",
  "devStatus": "Fixed 26 Nov: graphics from the Studio's new GFX Studio designs (ticker, top band, lower band, logo, date/time, breaking news) are now real bands in the editor: drawn with their own colours, font and lines, listed in Layers and in the Graphics panel, and editable there, in the preview and the export. A recording opened before needs Graphics > Show the Studio's layouts and graphics once (reopening also retries it). Expected: after a Casual meeting, open its recording, select the ticker on the canvas or in Graphics; its lines, colour, font, size and position can be changed. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-248",
  "module": "Video Editor / Right Menu / AI Tools Panel",
  "sev": "Medium",
  "title": "AI Tools Panel Layout Does Not Match the Design Reference",
  "summary": "AI Tools Panel Layout Does Not Match the Design Reference",
  "steps": [
   "1. Open a video in the editor. 2. Click AI Tools in the right menu."
  ],
  "actual": "The tools are listed as plain groups (Refine content, Sound clear, Look amazing) with no search, unlike the design reference.",
  "expected": "The panel matches the design: a Find a tool search, a Clip tools apply to line, and Edit, Sound, Look and Create cards that open on a click.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: AI Tools now has a tool search, the Clip tools apply to line and Edit, Sound, Look and Create cards, closed by default and kept open once opened; Colour looks are chips. Expected: open AI Tools, type echo in the search: only De-reverb shows. Retest on beta.",
  "qaStatus": "Reopen",
  "qaNote": "1.Not observed ai b roll in create\n2.",
  "sheetId": ""
 },
 {
  "id": "ISS-249",
  "module": "Video Editor / Right Menu / Media Panel",
  "sev": "Medium",
  "title": "Clicking a Media Asset Adds It to the Timeline Directly",
  "summary": "Clicking a Media Asset Adds It to the Timeline Directly",
  "steps": [
   "1. Open Media in the right menu. 2. Click any video, image or audio card (this project, Library, Assets or Stock)."
  ],
  "actual": "The asset is added to the timeline as a layer at once, without the user choosing how.",
  "expected": "A click opens the asset's insert menu; the asset is added only from an option there (overlay, b-roll, at the playhead, intro, outro) or by dragging it onto the timeline.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: a click on any Media card opens its insert menu and adds nothing; stock media is imported only when an option is picked. Dragging onto the timeline still adds it. Expected: click a card, the menu opens and the timeline is unchanged until an option is picked. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-250",
  "module": "Video Editor / Left Files Panel",
  "sev": "Low",
  "title": "Left Files Panel Sections Are Open by Default",
  "summary": "Left Files Panel Sections Are Open by Default",
  "steps": [
   "1. Open a video in the editor. 2. Open the left Files panel."
  ],
  "actual": "Source files, Edits, AI Clips and Assets are all expanded, filling the panel.",
  "expected": "Each section starts closed and opens on a click; a section the user opened stays open.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Source files, Edits, AI Clips and Assets start closed; one the user opens stays open when the panel comes back. The Files panel itself also starts closed. Expected: open the Files panel, all four sections are closed. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-251",
  "module": "Video Editor / Right Menu / Graphics",
  "sev": "High",
  "title": "Graphics Menu Missing in the Editor for a Studio Recording",
  "summary": "Graphics Menu Missing in the Editor for a Studio Recording",
  "steps": [
   "1. Open a Studio recording that had graphics on air, whose edit was saved earlier. 2. Look for Graphics in the right menu."
  ],
  "actual": "Graphics is not shown in the right menu, though the recording has Studio graphics.",
  "expected": "Graphics shows whenever the recording has Studio graphics.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Graphics shows for any recording whose Studio put graphics on air. For an edit saved before the Studio's layouts came in, the panel offers Show the Studio's layouts and graphics (one undoable step), and reopening the recording also retries it. Expected: open such a recording, Graphics is in the right menu and the bands show. Retest on beta.",
  "qaStatus": "Done",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-252",
  "module": "Video Editor / Canvas / Layouts Panel",
  "sev": "High",
  "title": "Studio Layout Option Disabled for a Studio Recording with Studio Layouts",
  "summary": "Studio Layout Option Disabled for a Studio Recording with Studio Layouts",
  "steps": [
   "1. Open a Studio recording whose edit was saved earlier. 2. Open Layout on the canvas."
  ],
  "actual": "Studio is greyed out (This recording has no Studio layouts) though the recording was made in the Studio with layouts.",
  "expected": "Studio is available and puts the scene on the layout the Studio aired.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Studio is on whenever the recording's Studio program has layouts; picking it brings the layouts into the edit and puts the scene on them, or says if they can't be read. Reopening the recording also retries bringing them in. Expected: Layout > Studio is enabled and shows the layout as it went out live. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-253",
  "module": "Video Editor / Right Menu / Captions Tab",
  "sev": "Medium",
  "title": "Translate Captions Preselects a Language and Enables Translate",
  "summary": "Translate Captions Preselects a Language and Enables Translate",
  "steps": [
   "1. Open a video that has captions. 2. Open Captions in the right menu and look at Translate captions."
  ],
  "actual": "Hindi is already selected and Translate (with its credits) is enabled though no language was chosen.",
  "expected": "The picker shows Choose language and Translate stays disabled until the user picks a language.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: the picker reads Choose language and Translate is greyed out until a language is picked; its credit price shows once one is. Expected: Translate disabled on open, enabled after picking a language. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-254",
  "module": "Video Editor / Right Menu / Graphics",
  "sev": "Medium",
  "title": "Graphics Panel Lists Studio Graphics That Never Went on Air",
  "summary": "Graphics Panel Lists Studio Graphics That Never Went on Air",
  "steps": [
   "1. Open a Studio recording in the editor. 2. Open Graphics in the right menu."
  ],
  "actual": "Every band of the Studio template is listed (ticker, logo, L band, breaking news and others) even if it never went on air, and Graphics shows for recordings with no graphics on air.",
  "expected": "Only the graphics that went on air in the recording are shown; Graphics is not offered when none did.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Graphics shows only for a recording with bands that went on air, and the panel lists only those (a band the user switched on earlier stays until it is switched off); with none it says No graphics went on air in this recording. Orbit is told only of those bands too. Expected: a band that never aired is not listed anywhere. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-255",
  "module": "Video Editor / AI Tools / Dubbing",
  "sev": "Medium",
  "title": "Dubbing Preselects a Language and Enables Dub",
  "summary": "Dubbing Preselects a Language and Enables Dub",
  "steps": [
   "1. Open AI Tools in the right menu. 2. Open Dubbing."
  ],
  "actual": "Hindi is already selected and Dub (with its credits) is enabled though no language was chosen.",
  "expected": "The picker shows Choose language and Dub stays disabled until the user picks a language.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: the Dubbing picker reads Choose language and Dub is greyed out until a language is picked; its credit price shows once one is. Languages already dubbed are still left out. Expected: Dub disabled on open, enabled after picking a language. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-256",
  "module": "Video Editor / Right Menu / Captions Tab",
  "sev": "Low",
  "title": "Translate Captions Button Style Differs from the Dub Button",
  "summary": "Translate Captions Button Style Differs from the Dub Button",
  "steps": [
   "1. Open a video that has captions. 2. Open Captions and look at the Translate button; compare it with Dub in AI Tools."
  ],
  "actual": "Translate is an outlined grey button while Dub is a filled violet one.",
  "expected": "Translate has the same filled violet style as Dub.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Translate captions uses the Dub button's filled violet style, faded while no language is picked. Expected: Translate and Dub look the same. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-257",
  "module": "Video Editor / All Panels",
  "sev": "Low",
  "title": "Buttons Do Not Show a Pointer Cursor on Hover in the Editor",
  "summary": "Buttons Do Not Show a Pointer Cursor on Hover in the Editor",
  "steps": [
   "1. Open the editor. 2. Hover over buttons, tabs, menu items and dropdowns."
  ],
  "actual": "The cursor stays an arrow over many clickable controls.",
  "expected": "Every clickable control shows the hand (pointer) cursor; disabled ones show not-allowed.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: every enabled button, tab, menu item, option, switch and dropdown in the editor shows the hand cursor; disabled ones keep not-allowed and drag handles keep their own cursor. Expected: hover any clickable control, the cursor is the hand. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-258",
  "module": "Video Editor / Timeline / Freeze Frame",
  "sev": "Medium",
  "title": "Freeze Frame Effect Not Working in Preview at Selected Time",
  "summary": "Freeze Frame Effect Not Working in Preview at Selected Time",
  "steps": [
   "1. Open a recorded project in Video Editor. 2. Select a clip in the timeline. 3. Apply the Freeze Frame effect at a specific timeline position. 4. Play the preview and observe the selected section."
  ],
  "actual": "The clip does not freeze at the selected timeline position in the preview.",
  "expected": "The clip should freeze at the specified timeline position for the configured duration and display the frozen frame correctly in the preview.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-259",
  "module": "Video Editor / Graphics / Clock",
  "sev": "Medium",
  "title": "Clock Background Changes Not Reflected in Preview",
  "summary": "Clock Background Changes Not Reflected in Preview",
  "steps": [
   "1. Open a recorded project in Video Editor. 2. Navigate to Graphics and select the Clock element. 3. Change the Clock background color or style. 4. Observe the preview."
  ],
  "actual": "The updated Clock background is not reflected in the preview.",
  "expected": "The preview should immediately reflect the updated Clock background settings.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-260",
  "module": "Video Editor / Timeline / Transcript",
  "sev": "High",
  "title": "Timeline Seekbar and Transcript Highlighting Not Synchronized During Playback",
  "summary": "Timeline Seekbar and Transcript Highlighting Not Synchronized During Playback",
  "steps": [
   "1. Open a recorded project in the Video Editor. 2. Start playing the recorded content. 3. Observe the timeline seekbar and transcript highlighting during playback."
  ],
  "actual": "The timeline seekbar does not move automatically, and the corresponding transcript text is not highlighted during playback.",
  "expected": "The timeline seekbar should automatically move in sync with playback, and the corresponding transcript text should be highlighted as the recording progresses.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-261",
  "module": "Video Editor / AI Tools / Magic Clips",
  "sev": "Low",
  "title": "Magic Clips in AI Tools Lists Every Clip in a Small Scrolling Box with No View All",
  "summary": "Magic Clips in AI Tools Lists Every Clip in a Small Scrolling Box with No View All",
  "steps": [
   "1. Open a video that has Magic clips suggestions. 2. Open AI Tools and expand Magic clips."
  ],
  "actual": "All clip suggestions are crammed into a small scrolling box with small thumbnails and titles cut to one line; there is no way to see all clips in a larger view.",
  "expected": "The card shows the best 3 clips with larger thumbnails and two-line titles. With more than 3 clips, a View all button opens a popup listing every clip, best first; clicking a clip plays it in the preview.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Magic clips shows the best 3 clips, and View all opens every clip in a popup. Expected: with more than 3 clips, View all opens the popup; clicking a clip plays its start and closes the popup. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-262",
  "module": "Video Editor / Visuals / Effects & Color",
  "sev": "Medium",
  "title": "B&W and Sepia Looks Do Not Reset or Re-apply After Reset Master Effects",
  "summary": "B&W and Sepia Looks Do Not Reset or Re-apply After Reset Master Effects",
  "steps": [
   "1. Select a clip and open Visuals > Color. 2. Apply the B&W (or Sepia) look. 3. Open Effects and click Reset master effects. 4. Go back to Color and click B&W (or Sepia) again. Repeat a few times quickly."
  ],
  "actual": "After the reset the video goes back to colour but the B&W tile stays selected; clicking B&W or Sepia again does nothing, so the look cannot be applied again.",
  "expected": "Reset master effects clears B&W and Sepia and selects None; clicking B&W or Sepia again applies it every time, for This clip and Whole video, even when applied and reset quickly several times.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Reset master effects now clears a B&W or Sepia look, and picking a look always applies it. Shake was retested for This clip and Whole video and resets correctly. Expected: apply, reset and re-apply B&W and Sepia several times in a row; the preview matches each time. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-263",
  "module": "Video Editor / Right Menu / Banners",
  "sev": "Medium",
  "title": "Studio Banners and Tickers Missing from the Editor for a Recording",
  "summary": "Studio Banners and Tickers Missing from the Editor for a Recording",
  "steps": [
   "1. In the Studio, show a banner and a ticker during a recording. 2. Open the recording in the editor."
  ],
  "actual": "The banners and tickers shown live do not appear in the editor preview or the export, and there is no place to manage them.",
  "expected": "Each banner and ticker shows where and when it went on air, as on the live output. A Banners tab below Graphics lists them, each with on/off, Content, Style, Background and Position, and they appear in the export.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: Studio banners and tickers now show in the edit and export, with a Banners tab below Graphics. Expected: in a recording with banners, the Banners tab lists them; tickers scroll at the top or bottom, static banners show as a pill at the bottom; switching one off removes it. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-264",
  "module": "Video Editor / Files / AI Clips and AI Tools / Magic Clips",
  "sev": "Medium",
  "title": "Clicking an AI Clip or Magic Clip Acts Directly, with No Add to Timeline Option in Its Menu",
  "summary": "Clicking an AI Clip or Magic Clip Acts Directly, with No Add to Timeline Option in Its Menu",
  "steps": [
   "1. Open a video that has clip suggestions. 2. Click a clip in Files > AI Clips. 3. Open AI Tools > Magic clips and click a clip on the card or in View all. 4. Open a clip's menu."
  ],
  "actual": "A click on a clip acts on it straight away (it jumps the preview to the clip), and the menu has no option to add the clip to the timeline; Magic clips has no menu at all.",
  "expected": "A click on a clip does nothing. In both places each clip has a menu with Preview, Add to Timeline, Edit clip, Export, Export 9:16, Copy ID and Dismiss; Add to Timeline puts the clip at the end of the main video track.",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed 26 Nov: a click on a clip in Files > AI Clips or Magic clips no longer acts; both have the same menu, now with Add to Timeline. Expected: clicking a clip does nothing; the menu's Add to Timeline adds it to the end of the main track, and Undo in the toast removes it. Retest on beta.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-265",
  "module": "Studio / Session Setup / Custom Inputs (all dropdown menus)",
  "sev": "Low",
  "title": "Dropdown Menus Slide In from the Top-Left Instead of Opening at Their Button",
  "summary": "Dropdown Menus Slide In from the Top-Left Instead of Opening at Their Button",
  "steps": [
   "1. Open Studio and start a session. 2. On Choose your video input, pick Custom. 3. Click Add input and watch where the menu appears."
  ],
  "actual": "The menu first appears at the top-left of the page and slides across to the button. The same happens for other dropdowns, selects and popovers in the app.",
  "expected": "The menu opens directly under its button, with no slide from the corner.",
  "reporter": "",
  "date": "27 Nov",
  "devStatus": "Fixed 27 Nov: dropdown menus, selects and popovers no longer slide in from the top-left; they open at their button (fixed in the shell and the Studio). Expected: Add input in Custom setup and other menus open in place. Retest on beta after a hard refresh.",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-266",
  "module": "Video Editor / Orbit",
  "sev": "High",
  "title": "Orbit Not Responding and Displaying \"Context Is Too Large\" Error",
  "summary": "Orbit Not Responding and Displaying \"Context Is Too Large\" Error",
  "steps": [
   "1. Open a recorded project in Video Editor. 2. Open Orbit. 3. Enter a query or perform an action using Orbit."
  ],
  "actual": "Orbit does not respond and displays a \"Context is too large\" error.",
  "expected": "Orbit should process the request and provide a response without displaying a context-size error.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-267",
  "module": "Video Editor / Graphics / Bands",
  "sev": "Medium",
  "title": "Unable to Adjust Bands and Bands Overlap Video Content in Pre-Roll, Mid-Roll, and Post-Roll",
  "summary": "Unable to Adjust Bands and Bands Overlap Video Content in Pre-Roll, Mid-Roll, and Post-Roll",
  "steps": [
   "1. Open a recorded project in Video Editor. 2. Navigate to Graphics and add a band. 3. Apply the band to Pre-Roll, Mid-Roll, or Post-Roll. 4. Try to adjust the band's position or size. 5. Observe how the band appears over the video content."
  ],
  "actual": "Bands cannot be adjusted as required and overlap the video content when applied to Pre-Roll, Mid-Roll, or Post-Roll.",
  "expected": "Users should be able to adjust band size and position, and bands should be displayed in the intended layout without unintentionally covering video content.",
  "reporter": "",
  "date": "",
  "devStatus": "",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-268",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Onboarding: empty camera dropdown. After choosing Camera as the input, the camera dropdown is empty.",
  "summary": "Onboarding: empty camera dropdown. After choosing Camera as the input, the camera dropdown is empty.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-269",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Onboarding: input errors. When a Custom input has a problem (e.g. \"Couldn't connect RTMP 1\"), show the error highlighted in red directly under that input, not in grey at the bottom of the page.",
  "summary": "Onboarding: input errors. When a Custom input has a problem (e.g. \"Couldn't connect RTMP 1\"), show the error highlighted in red directly under that input, not in grey at the bottom of the page.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-270",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Dropdown animation. Dropdowns animate in from the top. They should open like a normal dropdown, right under the button.",
  "summary": "Dropdown animation. Dropdowns animate in from the top. They should open like a normal dropdown, right under the button.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-271",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Studio: separate input switch button (UX change). The inputs set up on the onboarding page need their own \"switch input\" button in the Studio, separate from Stop Video.",
  "summary": "Studio: separate input switch button (UX change). The inputs set up on the onboarding page need their own \"switch input\" button in the Studio, separate from Stop Video.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-272",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Sources open on Online. Opening Sources → RTMP, SRT or Reporters should show the Online filter by default.",
  "summary": "Sources open on Online. Opening Sources → RTMP, SRT or Reporters should show the Online filter by default.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-273",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Producer: Preview vs Master fit. Content fit (contain / cover) differs slightly between Preview and Master.",
  "summary": "Producer: Preview vs Master fit. Content fit (contain / cover) differs slightly between Preview and Master.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Not an issue",
  "qaStatus": "",
  "qaNote": "Here the 2 layout was pushed in that one source was taken as cover and again selected 1 and 2 in that 2 source has contain while in layout creation we have an option to choose layout,contain and fill",
  "sheetId": ""
 },
 {
  "id": "ISS-274",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Live Dubbing: processing status. While the HLS URL for live dubbing is being created, show a clear \"Processing…\" indicator with a running timer until it's ready.",
  "summary": "Live Dubbing: processing status. While the HLS URL for live dubbing is being created, show a clear \"Processing…\" indicator with a running timer until it's ready.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-275",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Pool cards: unmuted state. Pool cards show only \"Muted\". They should show both Muted and Unmuted.",
  "summary": "Pool cards: unmuted state. Pool cards show only \"Muted\". They should show both Muted and Unmuted.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-276",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Live dubbing: host and HLS not dubbed together. Dubbing runs for only one source at a time (sometimes the HLS, sometimes the host), never both. In the output, one source's audio ends up muted.",
  "summary": "Live dubbing: host and HLS not dubbed together. Dubbing runs for only one source at a time (sometimes the HLS, sometimes the host), never both. In the output, one source's audio ends up muted.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "waiting from sarvam",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-277",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Live Portrait: captions cut off. Captions are cut off in Live Portrait.",
  "summary": "Live Portrait: captions cut off. Captions are cut off in Live Portrait.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-278",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Producer → Casual: sources disappear. Switching from Producer to Casual removes all sources from the stage. It should show them full screen or in an auto grid, based on the participants.",
  "summary": "Producer → Casual: sources disappear. Switching from Producer to Casual removes all sources from the stage. It should show them full screen or in an auto grid, based on the participants.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-279",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Subtitles cover the camera menu. The subtitles overlap the camera / input options menu.",
  "summary": "Subtitles cover the camera menu. The subtitles overlap the camera / input options menu.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-280",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Credits run out: no message. When credits run out, the HLS keeps looping and there's no clear message in the UI.",
  "summary": "Credits run out: no message. When credits run out, the HLS keeps looping and there's no clear message in the UI.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-281",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Onboarding: Recording / VOD missing in the Studio. A Recording or VOD picked as a source on the onboarding page doesn't appear in the Studio's camera / input dropdown.",
  "summary": "Onboarding: Recording / VOD missing in the Studio. A Recording or VOD picked as a source on the onboarding page doesn't appear in the Studio's camera / input dropdown.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-282",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Editor: black thumbnails. Black frames appear in the Editor's video thumbnail timeline.",
  "summary": "Editor: black thumbnails. Black frames appear in the Editor's video thumbnail timeline.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 },
 {
  "id": "ISS-283",
  "module": "Unspecified",
  "sev": "Medium",
  "title": "Editor: HLS audio missing. HLS audio is missing in the Editor.",
  "summary": "Editor: HLS audio missing. HLS audio is missing in the Editor.",
  "steps": [],
  "actual": "",
  "expected": "",
  "reporter": "",
  "date": "26 Nov",
  "devStatus": "Fixed",
  "qaStatus": "",
  "qaNote": "",
  "sheetId": ""
 }
];
