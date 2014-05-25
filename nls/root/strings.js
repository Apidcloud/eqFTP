define({
    "ERR_LOADING" : "Loading failed :(",
    
    "SIDEPANEL_TITLE" : "eqFTP",
    "SIDEPANEL_OPENCONNMANGR" : "Open Connection Manager",
    "SIDEPANEL_FILETREE_NAME" : "Name",
    "SIDEPANEL_FILETREE_SIZE" : "Size",
    "SIDEPANEL_FILETREE_TYPE" : "Type",
    "SIDEPANEL_FILETREE_MODIFIED" : "Modified",
    "SIDEPANEL_CONDISCONNECT" : "(Dis)connect",
    "SIDEPANEL_REFRESH" : "Refresh",
    "SIDEPANEL_RELOADSETTINGS" : "Reload Settings & Re-enter Password",

    "ERR_DIAG_SERVNOEXIST_TITLE" : "Server Doesn't Exist",
    "ERR_DIAG_SERVNOEXIST_CONTENT" : "Looks like this server doesn't exist.<br>Check Server filed in connection settings.",
    "ERR_DIAG_SERVCANTREACH_TITLE" : "Can't Reach Server",
    "ERR_DIAG_SERVCANTREACH_CONTENT" : "I just can't reach server.<br>Maybe your Firewall don't let me do this.",
    "ERR_DIAG_AUTHORIZEERR_TITLE" : "Incorrect Authorization Data",
    "ERR_DIAG_AUTHORIZEERR_CONTENT" : "I can't authorize with those login and password you gave me.<br>Please check them.",
    // Two strings below used in one error dialog wich appears when user trying to upload file
    // but this file isn't in project (wich used in eqFTP connection) and there is no currently connected server.
    "ERR_DIAG_NOSERVERFOUND_TITLE" : "Can't find connection", // NEW
    "ERR_DIAG_NOSERVERFOUND_CONTENT" : "There are no eqFTP connections tied with current project and no connected server.<br>Connect to server or specify current project's folder as local path for connection in Settings.", //NEW
    
    "PASSWDWIND_TITLE" : "Please Enter Your Password",
    "PASSWDWIND_CONTENT" : "Your Password for eqFTP:",
    
    "SETTINGSWIND_TITLE" : "eqFTP Connections Manager",
    "SETTINGSWIND_ERR_BLANKS" : "Oh! Looks like something gone wrong. Check input fields and try again.",
    "SETTINGSWIND_ERR_CANTWRITE" : "Something gone totally wrong! I can't write settings to file!",
    // New string below is an error message when user tring to insert path to current project
    // but current project is currently in use in another connection.
    "SETTINGSWIND_ERR_LOCALPATHREPEAT" : "The path you're trying to insert is currently in use by another connection.", //NEW
    "SETTINGSWIND_NOTIF_DONE" : "Everything's saved! :)",
    "SETTINGSWIND_SAVEDCONN" : "Saved FTP Connections",
    "SETTINGSWIND_DELETECONN_HOVER" : "Delete This Connection",
    "SETTINGSWIND_ADDCONN_HOVER" : "Add New Connection",
    "SETTINGSWIND_ADDCONN_STRING" : "Create New Connection...",
    // Those 2 strings below are going like this: SETTINGSWIND_DELETECONNCONF_1 + VAL + SETTINGSWIND_DELETECONNCONF_2
    // So if in your language there's no need in 2 strings, just leave one of them blank
    "SETTINGSWIND_DELETECONNCONF_1" : "Please confirm deletion of ",
    "SETTINGSWIND_DELETECONNCONF_2" : " connection.",
    "SETTINGSWIND_OPENGLOBSET" : "Open Global FTP Settings...",
    "SETTINGSWIND_NOTHINGYETMSG" : "Choose connection to edit in sidebar or create new.",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ" : "Folder For Projects:",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ_DIAGTITLE" : "Directory for Projects with Downloaded Files:",
    "SETTINGSWIND_GLOB_FOLDERFORSET" : "Folder For Settings:",
    "SETTINGSWIND_GLOB_FOLDERFORSET_DIAGTITLE" : "Directory for Settings File",
    "SETTINGSWIND_GLOB_DONTOPENPROJECTS" : "Don't Open Projects after Download",
    "SETTINGSWIND_GLOB_STORESAFELY" : "Store Passwords Safely",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_TITLE" : "Connection Name:",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_FIELD" : "Type in name of connection",
    "SETTINGSWIND_GLOB_SERVER_TITLE" : "Server:",
    "SETTINGSWIND_GLOB_PROTOCOL_TITLE" : "Protocol Type:",
    "SETTINGSWIND_GLOB_USERNAME_TITLE" : "Username:",
    "SETTINGSWIND_GLOB_USERNAME_FIELD" : "FTP username",
    "SETTINGSWIND_GLOB_PASSWORD_TITLE" : "Password:",
    "SETTINGSWIND_GLOB_PASSWORD_FIELD" : "FTP password",
    "SETTINGSWIND_GLOB_REMOTEPATH_TITLE" : "Remote Path:",
    "SETTINGSWIND_GLOB_REMOTEPATH_FIELD" : "Type in the remote path to the project root folder",
    "SETTINGSWIND_GLOB_LOCALPATH_TITLE" : "Local Path:",
    "SETTINGSWIND_GLOB_LOCALPATH_FIELD" : "Creates new folder in default location if blank",
    "SETTINGSWIND_GLOB_UPLOADONSAVE" : "Upload File on Save",
    "SETTINGSWIND_GLOB_EVENDISCONN" : "Even If Disconnected",
    "SETTINGSWIND_GLOB_EVENDISCONN_EXPLAIN" : "This option allows automatically connect to server when saved file is opened from server or saved file is within current project and this project was created by this ftp extension. Oh, I really hope I explained it well..",
    // this one is tooltip for icon near "Local Path" field in connection settings window.
    "SETTINGSWIND_GLOB_LOCALPATH_FILLWPROJECT_TITLE" : "Insert current project's path", //NEW
    
    "QUEUE_TITLE" : "eqFTP Queue",
    "QUEUE_TITLE_HOVER" : "Click to Open eqFTP Queue",
    "QUEUE_HEADER_NAME" : "Name",
    "QUEUE_HEADER_PATH" : "Path",
    "QUEUE_HEADER_STATUS" : "Status",
    "QUEUE_CONTEXTM_STARTQ" : "Start Task",
    "QUEUE_CONTEXTM_PAUSEQ" : "Pause Task",
    "QUEUE_CONTEXTM_CLEARQ" : "Clear Queue",
    "QUEUE_CONTEXTM_CLEARCOMPQ" : "Clear Complited Tasks",
    "QUEUE_CONTEXTM_CLEARFAILQ" : "Clear Failed Tasks",
    "QUEUE_CONTEXTM_RESTARTFAILQ" : "Restart Failed Tasks",
    "ERR_FILE_ACCESSDENIED" : "Access denied. Check file's permissions.",
    "ERR_FILE_AUTHORIZATION" : "Authorization Error. Check your login & password.",
    "ERR_FILE_SERVNOEXIST" : "Server Doesn't Exist. Maybe you mistyped it.",
    "ERR_FILE_SERVCANTREACH" : "Can't Reach Server. Check Firewall.",
    
    "CONTEXTM_DOWNLOAD" : "Download",
    "CONTEXTM_UPLOAD" : "Upload",
    "CONTEXTM_ADDQUEUE" : "Add to Queue",
    "CONTEXTM_OPEN" : "Open",
    
    "OTHER_SELECT_SERVER_DROPDOWN" : "Select Remote Server to Connect...",
    "OTHER_ERROR" : "Error",
    "OTHER_PAUSED" : "Paused",
    "OTHER_COMPLETED" : "Completed",
    "OTHER_WAITING" : "Waiting",
    "OTHER_OK" : "Ok",
    "OTHER_CANCEL" : "Cancel",
    "OTHER_APPLY" : "Apply",
    "OTHER_CLOSE" : "Close",
});
