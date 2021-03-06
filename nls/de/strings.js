define({
    "ERR_LOADING" : "Laden fehlgeschlagen :(",

    "SIDEPANEL_TITLE" : "eqFTP",
    "SIDEPANEL_OPENCONNMANGR" : "Öffne Verbindungsmanager",
    "SIDEPANEL_FILETREE_NAME" : "Name",
    "SIDEPANEL_FILETREE_SIZE" : "Größe",
    "SIDEPANEL_FILETREE_TYPE" : "Typ",
    "SIDEPANEL_FILETREE_MODIFIED" : "Geändert",
    "SIDEPANEL_CONDISCONNECT" : "Trennen/Verbinden",
    "SIDEPANEL_REFRESH" : "Aktualisieren",
    "SIDEPANEL_RELOADSETTINGS" : "Einstellungen neu laden",

    "ERR_DIAG_SERVNOEXIST_TITLE" : "Server existiert nicht",
    "ERR_DIAG_SERVNOEXIST_CONTENT" : "Der Server scheint nicht zu existieren.<br>Schaue, ob der Server im Verbindungsmanager eingetragen ist.",
    "ERR_DIAG_SERVCANTREACH_TITLE" : "Der Server ist nicht erreichbar",
    "ERR_DIAG_SERVCANTREACH_CONTENT" : "Ich kann den Server nicht erreichen.<br>Vielleicht liegt es an deiner Firewall.",
    "ERR_DIAG_AUTHORIZEERR_TITLE" : "Falsche Autorisierungsdaten",
    "ERR_DIAG_AUTHORIZEERR_CONTENT" : "Vermutlich ist dein Passwort oder dein Username falsch.<br>Überprüfe bitte deine Eingaben noch einmal",
    "ERR_DIAG_NOSERVERFOUND_TITLE" : "Es konnte keine Verbindung gefunden werden.", 
    "ERR_DIAG_NOSERVERFOUND_CONTENT" : "Es gibt keine eqFTP Verbindung mit dem derzeitigen Ordner und keinen verbundenen Server.<br>Verbinde dich mit einem Server oder ändere die Einstellungen so, dass der aktuelle Pfad eine lokaler Pfad für eine Verbindung ist.", 
    "ERR_DIAG_ECONNRESET_TITLE" : "Server verweigert Verbindungen.",
    "ERR_DIAG_ECONNRESET_CONTENT" : "Ich kann mich nicht zum Server verbinden, die Verbindung wird verweigert.<br>Versuche, Brackets neu zu starten.",
    "ERR_DIAG_ECONNABORTED_TITLE" : "Die Verbindung zum Server wurde getrennt", 
    "ERR_DIAG_ECONNABORTED_CONTENT" : "Verbindung abgebrochen. Versuche Verbindung wiederherzustellen...", 
    "ERR_DIAG_UNIVERSAL_TITLE" : "Es gab einen Fehler.",
    "ERR_DIAG_UNIVERSAL_CONTENT" : "Schau dir diesen Fehler an. Wie konnte dies passieren?",

    "NOT_DIAG_CONNECTED" : "Mit dem Server verbunden.", 
    "NOT_DIAG_DISCONNECTED" : "Vom Server getrennt.",
    "NOT_DIAG_FILESDIFFERENT" : "There's a difference between local and remote files. Click here for more actions.", //NEW

    "PASSWDWIND_TITLE" : "Bitte gebe dein Passwort ein",
    "PASSWDWIND_CONTENT" : "Dein Passwort für eqFTP:",

    "CHECKDIFF_TITLE" : "There's difference between files", //NEW
    "CHECKDIFF_CONTENT" : "Remote and local copies of file are different. Please choose an action you would like to do.", //NEW
    "CHECKDIFF_BUTTON_COMPARE" : "Compare files", //NEW
    "CHECKDIFF_BUTTON_SHOWCHANGES" : "Show changes", //NEW
    "CHECKDIFF_BUTTON_KEEPLOCAL" : "Keep local", //NEW
    "CHECKDIFF_BUTTON_KEEPLOCALALL" : "Keep local copies for current queue", //NEW
    "CHECKDIFF_BUTTON_GETREMOTE" : "Get remote", //NEW
    "CHECKDIFF_BUTTON_GETREMOTEALL" : "Get remote copies for current queue", //NEW

    "SETTINGSWIND_TITLE" : "eqFTP Verbindungsmanager",
    "SETTINGSWIND_ERR_BLANKS" : "Oh hier ist irgendwas falsch gelaufen :/. Überprüfe deine Eingaben und probiere es erneut.",
    "SETTINGSWIND_ERR_CANTWRITE" : "Irgendwas läuft hier gewaltig schief! Es ist nicht möglich die Einstellungen zu speichern!",
    "SETTINGSWIND_ERR_LOCALPATHREPEAT" : "Der eingegebene Pfad wird derzeit von einer anderen Verbindung genutzt", 
    "SETTINGSWIND_NOTIF_DONE" : "Alles gespeichert! :)",
    "SETTINGSWIND_SAVEDCONN" : "Gespeicherte FTP Verbindungen",
    "SETTINGSWIND_DELETECONN_HOVER" : "Lösche diese Verbindung",
    "SETTINGSWIND_ERROR_DELETE_CURCONNSERV" : "You can't delete connection you're using now", //NEW
    "SETTINGSWIND_ADDCONN_HOVER" : "Neue Verbindung hinzufügen",
    "SETTINGSWIND_ADDCONN_STRING" : "Neue Verbindungen erstellen...",
    "SETTINGSWIND_DELETECONNCONF_1" : "Bitte bestätige das Löschen",
    "SETTINGSWIND_DELETECONNCONF_2" : " der Verbindung.",
    "SETTINGSWIND_OPENGLOBSET" : "Öffne globale FTP Einstellungen...",
    "SETTINGSWIND_NOTHINGYETMSG" : "Wähle eine Verbindung in der Sidebar oder erstelle eine neue.",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ" : "Ordner für Projekte:",
    "SETTINGSWIND_GLOB_FOLDERFORPROJ_DIAGTITLE" : "Ordner für Projekte mit heruntergeladen Dateien",
    "SETTINGSWIND_GLOB_FOLDERFORSET" : "Einstellungsordner:",
    "SETTINGSWIND_GLOB_FOLDERFORSET_DIAGTITLE" : "Ordner für die Einstellungsdatei",
    "SETTINGSWIND_GLOB_DONTOPENPROJECTS" : "Öffne das Projekt nicht, nachdem es heruntergeladen wurde",
    "SETTINGSWIND_GLOB_MASTERPASSWORD" : "Master Password", //NEW
    "SETTINGSWIND_GLOB_CONNECTIONNAME_TITLE" : "Verbindungsname:",
    "SETTINGSWIND_GLOB_CONNECTIONNAME_FIELD" : "Verbindungsname",
    "SETTINGSWIND_GLOB_SERVER_TITLE" : "Server:",
    "SETTINGSWIND_GLOB_PROTOCOL_TITLE" : "Protokoltyp:",
    "SETTINGSWIND_GLOB_USERNAME_TITLE" : "Username:",
    "SETTINGSWIND_GLOB_USERNAME_FIELD" : "FTP Username",
    "SETTINGSWIND_GLOB_PASSWORD_TITLE" : "Passwort:",
    "SETTINGSWIND_GLOB_PASSWORD_FIELD" : "FTP Passwort",
    "SETTINGSWIND_GLOB_RSA_TITLE" : "RSA key", //NEW
    "SETTINGSWIND_GLOB_RSA_FIELD" : "Click to select RSA key", //NEW
    "SETTINGSWIND_GLOB_FOLDERFORRSA_DIAGTITLE" : "Choose path to RSA key", //NEW
    "SETTINGSWIND_GLOB_REMOTEPATH_TITLE" : "Pfad auf dem Server:",
    "SETTINGSWIND_GLOB_REMOTEPATH_FIELD" : "Gib bitte den Serverpfad ein",
    "SETTINGSWIND_GLOB_LOCALPATH_TITLE" : "Lokaler Pfad:",
    "SETTINGSWIND_GLOB_LOCALPATH_FIELD" : "Neuer Ordner, wenn leer",
    "SETTINGSWIND_GLOB_UPLOADONSAVE" : "Lade Datei beim Speichern hoch",
    "SETTINGSWIND_GLOB_UPLOADONSAVEPAUSED" : "Add to paused queue.", //NEW
    "SETTINGSWIND_GLOB_EVENDISCONN" : "Auch wenn die Verbindung getrennt ist",
    "SETTINGSWIND_GLOB_EVENDISCONN_EXPLAIN" : "Diese Option ermöglicht es, dass automatische Verbinden mit dem Server, wenn eine Datei die sich in einem Projektordner befindet, der mit eqFTP erstellt wurde, gespeichert wurde. Ich hoffe ich habe es gut erklärt.",
    "SETTINGSWIND_GLOB_LOCALPATH_FILLWPROJECT_TITLE" : "Füge den derzeitiegen Projekt-Pfad ein",
    "SETTINGSWIND_GLOB_USELIST" : "Empfange alternativen Ordner",
    "SETTINGSWIND_GLOB_KEEPALIVE" : "Keep-Alive Intervall:",
    "SETTINGSWIND_GLOB_KEEPALIVE_DESC" : "Wert in Sekunden. Empfohlen ist 10. Benutze null, um Keep-Alive nicht mehr bei jedem Kommando zu senden und automatisch die Verbindung zu beenden.",
    "SETTINGSWIND_GLOB_DEBUG" : "Debug:",
    "SETTINGSWIND_GLOB_TIMEFORMAT" : "Datumsformat:",
    "SETTINGSWIND_GLOB_TIMEFORMAT_US" : "US",
    "SETTINGSWIND_GLOB_TIMEFORMAT_EU" : "Europäisch",
    "SETTINGSWIND_GLOB_TIMEFORMAT_ASIAN" : "Asiatisch",
    "SETTINGSWIND_GLOB_AUTOCLEAR" : "Leere Warteschlange automatisch", 
    "SETTINGSWIND_GLOB_NOTIFICATIONS" : "Benachrichtigungen", 
    "SETTINGSWIND_GLOB_TIMEOFFSET" : "Zeitversatz:", 
    "SETTINGSWIND_GLOB_TIMEOFFSET_DESC" : "Benutze diese Option um die korrekte Zeit für die modifizierte Spalte zu setzen",
    "SETTINGSWIND_GLOB_CONNECTIONTAB" : "Connection", //NEW
    "SETTINGSWIND_GLOB_AUTOMATIZATIONTAB" : "Automatization", //NEW
    "SETTINGSWIND_GLOB_ADVANCEDTAB" : "Advanced", //NEW
    "SETTINGSWIND_GLOB_AUTO_SET_TITLE" : "Set automatization:", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC" : "Sync", //NEW
    "SETTINGSWIND_GLOB_AUTO_CLASSIC" : "Classic", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_SELECT_TITLE" : "Select what to sync", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_FILECREATION" : "File creation", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_FOLDERCREATION" : "Folder creation", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_FILEUPLOAD" : "File update", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_RENAMING" : "Renaming", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_MOVING" : "Moving", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_DELETING" : "Deleting", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_EXTRASETTINGS_TITLE" : "Extra settings", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_CHECKDIFF" : "Check for differences", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_CHECKDIFF_EXPLAIN" : "When you open local or remote file", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_IGNORELIST_TITLE" : "Ignore list", //NEW
    "SETTINGSWIND_GLOB_AUTO_SYNC_IGNORELIST_EXPLAIN" : "Same syntax as in .gitignore", //NEW
    "SETTINGSWIND_GLOB_SYNCLOCPROJWCONN" : "Open related Local project after switching connection and vice versa", //NEW
    "SETTINGS_NOTIF_RELOADED" : "Settings were successfully reloaded.", //NEW
    "SETTINGS_ERROR_RELOADED" : "Can't reload settings.", //NEW

    "QUEUE_TITLE" : "eqFTP Warteschlange",
    "QUEUE_HEADER_NAME" : "Name",
    "QUEUE_HEADER_PATH" : "Pfad",
    "QUEUE_HEADER_FROM" : "Quelle",
    "QUEUE_HEADER_TO" : "Ziel",
    "QUEUE_HEADER_STATUS" : "Status",
    "QUEUE_CLEARQ" : "Warteschlange leeren",
    "QUEUE_STARTQ" : "Start Queue", //NEW
    "QUEUE_PAUSEQ" : "Pause Queue", //NEW
    "QUEUE_RESTARTQ" : "Restart Failed", //NEW
    "QUEUE_CONTEXTM_STARTT" : "Start", //NEW
    "QUEUE_CONTEXTM_PAUSET" : "Pause", //NEW
    "QUEUE_CONTEXTM_REMOVET" : "Remove", //NEW
    "QUEUE_CONTEXTM_RESTARTT" : "Restart", //NEW
    "QUEUE_TASK_STATUS_WAITING" : "Waiting", //NEW
    "QUEUE_TASK_STATUS_SUCCESS" : "Done", //NEW
    "QUEUE_TASK_STATUS_FAIL" : "Failed", //NEW
    "QUEUE_TASK_STATUS_PAUSE" : "Paused", //NEW
    "QUEUE_TASK_STATUS_STARTED" : "Started", //NEW
    "QUEUE_TASK_STATUS_DELETED" : "Deleted", //NEW
    "QUEUE_DONT_ADD_COMPLETED" : "Leere fertiggestellte Aufträge",
    
    "ERR_FILE_ACCESSDENIED" : "Zugriff verweigert. Überprüfe die Dateiberechtigungen.",
    "ERR_FILE_AUTHORIZATION" : "Autorisierungsfehler. Überprüfe deine Anmeldedaten.",
    "ERR_FILE_SERVNOEXIST" : "Server existiert nicht. Möglicherweise hast du dich vertippt.",
    "ERR_FILE_SERVCANTREACH" : "Server nicht erreichbar. Überprüfe die Einstellungen der Firewall.",
    "ERR_FILE_FILESIZE0" : "Datei konnte nicht heruntergeladen werden. Die Datei ist leer.", 
    "ERR_FILE_DOWNLOAD" : "Datei konnte nicht heruntergeladen werden.",
    "ERR_FILE_UPLOAD" : "Can't upload file.", //NEW
    "ERR_FILE_DOESNTEXIST" : "Die Datei existiert nicht",
    "ERR_FILE_CANTRENAME" : "Can't rename file: ", //NEW
    "ERR_FILE_CANTDELETE" : "Can't delete file: ", //NEW
    "ERR_FILE_CANTCREATEDIR" : "Can't create folder: ", //NEW
    "ERR_FILE_CANTDELETEDIR" : "Can't delete folder: ", //NEW
    "ERR_FILE_CANTCREATEFILE" : "Can't create file: ", //NEW
    "ERR_FOLDER_OPEN" : "There's an error opening folder as project", //NEW

    "CONTEXTM_DOWNLOAD" : "Download",
    "CONTEXTM_UPLOAD" : "Upload",
    "CONTEXTM_ADDQUEUE" : "Zur Warteschlange hinzufügen",
    "CONTEXTM_OPEN" : "Öffnen",
    "CONTEXTM_DELETE" : "Entfernen",
    "CONTEXTM_RENAME" : "Umbenennen",
    "CONTEXTM_REDOWNLOAD" : "Lade vom Server",
    "CONTEXTM_CREATEFILE" : "Create file", //NEW
    "CONTEXTM_CREATEFOLDER" : "Create folder", //NEW

    "OTHER_SELECT_SERVER_DROPDOWN" : "Wähle einen Server aus...",
    "OTHER_ERROR" : "Fehler",
    "OTHER_PAUSED" : "Pausiert",
    "OTHER_COMPLETED" : "Fertig gestellt",
    "OTHER_CANCELLED" : "Abgebrochen",
    "OTHER_WAITING" : "Warten",
    "OTHER_OK" : "Ok",
    "OTHER_OFF" : "Off", //NEW
    "OTHER_CANCEL" : "Abbruch",
    "OTHER_APPLY" : "Anwenden",
    "OTHER_SAVE" : "Save", //NEW
    "OTHER_CLOSE" : "Schließen",
    "OTHER_DELETE" : "Entfernen",
    "OTHER_CONFIRM_DELETE" : "Bist du sicher, dass du diesen Einträg löschen möchtest?",
    "OTHER_CONFIRM_SETTINGSCLOSE" : "There are some unsaved changes that will be lost if you click OK.<br>Do you want to proceed?", //NEW
    "OTHER_ERROR_EVENDISCONN" : "Datei Upload fehlgeschlagen. Die Option 'Auch wenn die Verbindung getrennt ist' ist ausgeschaltet.",
    "OTHER_ERROR_CANTREADSETTINGS" : "Can't read settings file. You probably mistyped your master password." //NEW
});