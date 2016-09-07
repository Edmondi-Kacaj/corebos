/*********************************************************************************
** The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ********************************************************************************/

var alert_arr = {
    'DELETE':'Sind Sie sicher, dass Sie das tun wollen? ',
    'RECORDS':' Datensätze',
    'SELECT':'Bitte wenigstens einen Eintrag markieren.',
    'DELETE_ACCOUNT':'Wenn Sie diese Organisation(en) löschen, werden auch die sich darauf beziehenden Potentiale, Angebote, Verkaufsbestellungen und Rechnungen entfernt. Sind Sie sicher, dass Sie das wirklich tun wollen? ',
    'DELETE_VENDOR':'Wenn Sie Lieferanten löschen, werden auch die sich darauf beziehenden Einkaufsbestellungen aus dem CRM entfernt. Sind Sie sicher, dass Sie das wirklich tun wollen?',
    'SELECT_MAILID':'Bitte eine E-Mail Adresse angeben.',
    'OVERWRITE_EXISTING_ACCOUNT1':'Soll die existierende Adresse mit den Informationen aus dem gewählten Eintrag (',
    'OVERWRITE_EXISTING_ACCOUNT2':') überschrieben werden?',
    'OVERWRITE_EXISTING_CONTACT1':'Soll die existierende Adresse mit den Informationen aus dem gewählten Eintrag (',
    'OVERWRITE_EXISTING_CONTACT2':') überschrieben werden?',
    'MISSING_FIELDS':'Die Angaben in folgenden Pflichtfelder fehlen:',
    'NOT_ALLOWED_TO_EDIT':'Sie haben keine Berechtigung zum Bearbeiten dieses Feldes',
    'NOT_ALLOWED_TO_EDIT_FIELDS':'Sie haben keine Berechtigung zum Bearbeiten',
    'COLUMNS_CANNOT_BE_EMPTY':'Die Spalten dürfen nicht leer sein',
    'CANNOT_BE_EMPTY':' darf nicht leer sein',
    'CANNOT_BE_NONE':' darf nicht leer sein',
    'ENTER_VALID':'Bitte einen gültigen Wert eingeben für ',
    'SHOULDBE_LESS':' muss weniger sein als ',
    'SHOULDBE_LESS_EQUAL':' muss weniger oder gleich ',
    'SHOULDBE_EQUAL':' muss gleich sein zu ',
    'SHOULDBE_GREATER':' muss gößer sein als ',
    'SHOULDBE_GREATER_EQUAL':' muss größer oder gleich ',
    'INVALID':'Ungültig(e) ',
    'EXCEEDS_MAX':' Überschreitet die maximale Grenze ',
    'OUT_OF_RANGE':' ist ausserhalb des zulässigen Bereiches',
    'SHOULDNOTBE_EQUAL':' darf nicht gleich sein zu ',
    'PORTAL_PROVIDE_EMAILID':'Portalnutzer benötigen eine E-Mail Adresse',
    'ADD_CONFIRMATION':'Sind Sie sicher, dass Sie das hinzufügen wollen: ',
    'ACCOUNTNAME_CANNOT_EMPTY':'Der Organisationsname darf nicht leer sein.',
    'CANT_SELECT_CONTACTS':"Aus Leads können keine bezogenen Kontakte ausgewählt werden",
    'LBL_THIS':'Der Eintrag ',
    'DOESNOT_HAVE_MAILIDS':" hat keine E-Mail Adresse.",
    'ARE_YOU_SURE':'Sind Sie sicher?',
    'DOESNOT_HAVE_AN_MAILID':'" '+"hat keine E-Mail Adresse.",
    'MISSING_REQUIRED_FIELDS':'Die Angaben in folgenden Pflichtfelder fehlen: ',
    'READONLY':"nur Lesen",
    'SELECT_ATLEAST_ONE_USER':'Btte wenigstens einen Benutzer auswählen',
    'DISABLE_SHARING_CONFIRMATION':'Sind Sie sicher? Sie schränken die Zugriffsrechte ein für  ',
    'USERS':' Nutzer ?',
    'ENDTIME_GREATER_THAN_STARTTIME':'Die Endezeit muss später sein als die Startzeit. ',
    'FOLLOWUPTIME_GREATER_THAN_STARTTIME':'Ein Nachfassen kann nur nach der Startzeit stattfinden. ',
    'MISSING_EVENT_NAME':'Der Name für das Ereignis fehlt',
    'EVENT_TYPE_NOT_SELECTED':'Der Typ des Ereignisses ist nicht definiert',
    'CLOSEDATE_CANNOT_BE_EMPTY':'Sie müssen das Datum angeben.',
    'SITEURL_CANNOT_BE_EMPTY':'Sie müssen eine URL angeben.',
    'SITENAME_CANNOT_BE_EMPTY':'Sie müssen der Seite einen kurzen aber prägnanten Namen geben.',
    'LISTPRICE_CANNOT_BE_EMPTY':'Der Listenpreis darf nicht leer bleiben.',
    'INVALID_LIST_PRICE':'Die Angabe zum Listenpreis ist ungültig.',
    'PROBLEM_ACCESSSING_URL':'Die folgende URL kann nicht erreicht werden: ',
    'CODE':' Code: ',
    'WISH_TO_QUALIFY_MAIL_AS_CONTACT':'Sind Sie sicher, dass Sie diese Mailadresse als Person qualifizieren wollen?',
    'SELECT_ATLEAST_ONEMSG_TO_DEL':'Sie müssen wenigstens eine Nachricht zum Löschen markieren.',
    'ERROR':'Fehler',
    'FIELD_TYPE_NOT_SELECTED':'Die Feldtypen wurden nicht festgelegt.',
    'SPECIAL_CHARACTERS_NOT_ALLOWED':'In dem Label Feld sind keine Sonderzeichen zulässig.',
    'SPECIAL_CHARACTERS':'Sonderzeichen',
    'NOT_ALLOWED':'sind nicht zulässig. Bitte benutzen Sie andere Zeichen.',
    'PICKLIST_CANNOT_BE_EMPTY':'Sie müssen in dieser Liste Werte eintragen.',
    'DUPLICATE_VALUES_FOUND':'Doppelte Einträge gefunden',
    'DUPLICATE_MAPPING_ACCOUNTS':'Doppelte Einträge für Organsisationen gefunden!',
    'DUPLICATE_MAPPING_CONTACTS':'Doppelte Einträge für Personen gefunden!',
    'DUPLICATE_MAPPING_POTENTIAL':'Doppelte Einträge für Verkaufspotentiale gefunden!',
    'ERROR_WHILE_EDITING':'Fehler beim Bearbeiten',
    'CURRENCY_CHANGE_INFO':'Der Wechsel der Währung war erfolgreich.',
    'CURRENCY_CONVERSION_INFO':'Nutzen Sie $ als Währung? \n Klicken Sie OK um $ beizubehalten, klicken Sie auf ABBRECHEN um die Währungsumrechnung einzustellen.',
    'THE_EMAILID': "Die E-Mail Adresse \'",
    'EMAIL_FIELD_INVALID':"\' im E-Mail Feld ist ungültig",
    'MISSING_REPORT_NAME':'Sie müssen dem Bericht einen Namen geben.',
    'REPORT_NAME_EXISTS':'Diesen Namen für einen Bericht geibt es bereits, bitte einen anderen Namen angeben.',
    'WANT_TO_CHANGE_CONTACT_ADDR':'Wollen Sie die Adresse der Personen, die zu dieser Organisation gehören auch ändern?',
    'SURE_TO_DELETE':'Sind Sie sicher, dass Sie das wirklich löschen wollen?',
    'NO_PRODUCT_SELECTED':'Sie haben kein Produkt ausgewählt. Bitte markieren Sie wenigstens ein Produkt.',
    'VALID_FINAL_PERCENT':'Bitte geben Sie einen gültigen Prozentwert für den Discount an.',
    'VALID_FINAL_AMOUNT':'Bitte geben Sie einen gültigen Prozentwert für den Discount an.',
    'VALID_SHIPPING_CHARGE':'Bitte geben Sie einen gültigen Wert für die Versandkosten an.',
    'VALID_ADJUSTMENT':'Bitte geben Sie einen gültigen Wert für die Anpassung ein.',
    'WANT_TO_CONTINUE':'Weiter?',
    'ENTER_VALID_TAX':'Bitte geben Sie für die Steuer einen gültigen Zahlenwert in Prozent an.',
    'VALID_TAX_NAME':'Bitte geben Sie der Steuer einen gültigen Namen.',
    'CORRECT_TAX_VALUE':'Bitte geben Sie für die Steuer einen gültigen Zahlenwert in Prozent an.',
    'ENTER_POSITIVE_VALUE':'Bitte nur positive Werte benutzen.',
    'LABEL_SHOULDNOT_EMPTY':'Sie müssen der Steuer einen Namen geben.',
    'NOT_VALID_ENTRY':'ist kein güliger Wert. Bitte machen Sie korrekte Angaben.',
    'VALID_DISCOUNT_PERCENT':'Bitte geben Sie für den Discount einen gültigen Zahlenwert in Prozent an.',
    'VALID_DISCOUNT_AMOUNT':'Bitte geben Sie für den Discount einen gültigen Betrag an.',
    'SELECT_TEMPLATE_TO_MERGE':'Bitte wühlen Sie für das Zusammenführen eine Textvorlage aus.',
    'SELECTED_MORE_THAN_ONCE':'Sie haben Produkte mehr als einmal ausgewählt.',
    'YES':'ja',
    'NO':'nein',
    'MAIL':'E-Mail',
    'EQUALS':'gleich zu',
    'NOT_EQUALS_TO':'ungleich zu',
    'STARTS_WITH':'beginnt mit',
    'CONTAINS':'beinhaltet',
    'DOES_NOT_CONTAINS':'beinhaltet nicht',
    'LESS_THAN':'weniger als',
    'GREATER_THAN':'grösser als',
    'LESS_OR_EQUALS':'weniger oder gleich',
    'GREATER_OR_EQUALS':'grösser oder gleich',
    
    'NO_SPECIAL_CHARS':'In diesem Eingabefeld sind nur Buchstaben und Zahlen zulässig.',
    'PLS_SELECT_VALID_FILE':'Bitte wählen Sie eine Datei mit einem der folgenden Formate:\n',
    'NO_SPECIAL':'Nur Buchstaben und Zahlen zulässig',
    'NO_QUOTES':'Angebote (\' ") und + Zeichen sind nicht erlaubt ',
    'IN_PROFILENAME':' im Profilnamen',
    'IN_GROUPNAME':' im Gruppennamen',
    'IN_ROLENAME':' im Rollennamen',
    'VALID_TAX_PERCENT':'Die Angabe für die Steuer ist nicht korrekt',
    'VALID_SH_TAX':'Die Angabe für die Steuer ist nicht korrekt ',
    'ROLE_DRAG_ERR_MSG':'Sie können keine übergeordnete Rolle unter eine untergeordnete Rolle verschieben.',
    'LBL_DEL':'lö',
    'VALID_DATA' :' Die Daten sind ungültig. ',
    'STDFILTER' : 'Standardfilter',
    'STARTDATE' : 'Startdatum',
    'ENDDATE' : 'Enddatum',
    'START_DATE_TIME' : 'Startdatum & -zeit',
    'START_TIME' : 'Startzeit',
    'DATE_SHOULDNOT_PAST' :'dem jetzigen Datum und der gegenwärtigen Zeit für geplante Aktivitäten sein.',
    'TIME_SHOULDNOT_PAST' :'der gegenwärtigen Zeit sein.',
    'LBL_AND' : 'UND',
    'LBL_OR': 'ODER',
    'LBL_ENTER_VALID_PORT': 'Bitte geben Sie die Portnummer korrekt an.',
    'IN_USERNAME' :' im Benutzernamen ',
    'LBL_ENTER_VALID_NO': 'Bitte eine richtige Zahl angeben',
    'LBL_PROVIDE_YES_NO': ' Falscher Wert.\n Hier gibt es nur die Auswahl von Yes oder No bzw. 1 oder 0',
    'LBL_SELECT_CRITERIA': ' Falsches Kriterium.\n Bitte ein gültiges Kriterium wählen.',
    // Added/Updated for vtiger CRM 5.0.4
    'OPPORTUNITYNAME_CANNOT_BE_EMPTY':'Das Potentialname Feld muß ausgefüllt werden.',
    'OVERWRITE_EXISTING_ACCOUNT1':'Wollen Sie die existierende Adresse durch die Adresse der ausgewählten Organisation ersetzen? (',
    'NAME_DESC':' für Verzeichnisname & Beschreibung',
    'ENDS_WITH':'endet mit',
    'SHARED_EVENT_DEL_MSG':'Sie haben keine Berechtigung zum Ändern & Löschen von dieser Aktivität.',
    
    'LBL_WRONG_IMAGE_TYPE': 'Folgende Dateitypen sind zulässig: jpeg, png, jpg, pjpeg, x-png oder gif',
    'SELECT_MAIL_MOVE': 'Bitte markieren Sie zuerst eine E-Mail.',
    
    'LBL_NOTSEARCH_WITHSEARCH_ALL':'Sie haben keine spezielle Auswahl getroffen. Alle vorhandenen Daten werden exportiert aus: ',
    'LBL_NOTSEARCH_WITHSEARCH_CURRENTPAGE':'Sie haben keine spezielle Auswahl mit der Suchfunktion getroffen, aber wollen die Ergebnisse einer Suche und der aktuellen Seite berücksichtigen. Folglich kann nur die aktuelle Seite exportiert werden aus: ',
    'LBL_NO_DATA_SELECTED':'Sie haben keine Auswahl getroffen. Für einen Export muessen Sie wenigstens einen Eintrag auswählen.',
    'LBL_SEARCH_WITHOUTSEARCH_ALL':'Sie haben die Suchfunktion verwendet, um Daten auszuwählen. Jedoch haben Sie ihr Exportkriterium darauf nicht bezogen. Wenn Sie auf [ok] klicken werden alle Daten exportiert. Wenn Sie auf [Abbrechen] klicken, können Sie Ihre Exportkriterien neu bestimmen.',
    'STOCK_IS_NOT_ENOUGH' : 'Ihr Lager hat so viel nicht vorrätig.',
    'LBL_QTY_IN_STOCK' : 'Menge im Lager',
    'INVALID_QTY' : 'ungültige Mengenangabe',
    'LBL_SEARCH_WITHOUTSEARCH_CURRENTPAGE':'Sie haben die Suchfunktion verwendet, um Daten auszuwählen. Jedoch haben Sie ihr Exportkriterium daruaf nicht bezogen. Wenn Sie auf [ok] werden die Daten Ihrer aktuellen Listenansicht exportiert. Wenn Sie auf [Abbrechen] klicken, können Sie Ihre Exportkriterien neu bestimmen.',
    'LBL_SELECT_COLUMN': 'Ungültige Spalte.\nBitte wählen Sie eine Spalte.',
    'LBL_NOT_ACCESSIBLE' : 'nicht erreichbar',
    'LBL_FILENAME_LENGTH_EXCEED_ERR': 'Der Dateiname darf nicht mehr als 255 Zeichen haben.',
    'LBL_DONT_HAVE_EMAIL_PERMISSION' : "Sie haben keine Berechtigung für das E-Mail Feld und können somit die E-Mail Adresse nicht wählen.",
    'LBL_NO_FEEDS_SELECTED': 'keine Feeds ausgewählt',
    'LBL_SELECT_PICKLIST':'Bitte wenigstens einen Eintrag auswählen',
    'LBL_CANT_REMOVE':'Sie können nicht alle Werte entfernen.',
    
    /*For global add/delete in picklist*/
    'LBL_GIVE_PICKLIST_VALUE':'Bitte geben Sie eine Auswahlliste an, die berücksichtigt werden soll',
    'LBL_SELECT_ROLE':'Bitte wenigstens eine Rolle auswählen zu der die neuen Werte gehören sollen',
    'LBL_ADD_PICKLIST_VALUE':'Bitte wenigsten einen neuen Angabe machen.',
    'LBL_NO_VALUES_TO_DELETE': "es gibt nichts zum Löschen",
    
    /* For Duplicate merging feature */
    'SAME_GROUPS': 'Sie haben Daten aus der gleichen Gruppe ausgewählt',
    'ATLEAST_TWO': 'Sie müssen mindestens 2 Datensätze zm zusammenführen auswählen',
    'MAX_THREE': 'Sie können maximal 3 Datensätze auswählen',
    'MAX_RECORDS': 'Sie können maximal 4 Datensätze auswählen',
    'CON_MANDATORY': 'Bitte das Pflichtfeld Nachname auswählen',
    'LE_MANDATORY': 'Bitte die Pflichtfelder Nachname und Organisation auswählen',
    'ACC_MANDATORY': 'Bitte das Pflichtfeld Organisationsname auswählen',
    'PRO_MANDATORY': 'Bitte das Pflichtfeld Produktname auswählen',
    'TIC_MANDATORY': 'Bitte das Pflichtfeld Tickettitel auswählen',
    'POTEN_MANDATORY': 'Bitte das Pflichtfeld Potentialname auswählen',
    'VEN_MANDATORY': 'Bitte das Pflichtfeld Lieferantenname auswählen',
    'DEL_MANDATORY': 'Sie dürfen und können Pflichfelder nicht löschen',

    /* For Multi-Currency Support */
    'MSG_CHANGE_CURRENCY_REVISE_UNIT_PRICE': 'Die Preise werden jetzt auf der Basis der ausgewählten Währung neu berechnet. Wollen Sie das wirklich tun?',
    
    'Select_one_record_as_parent_record' : 'Bitte einen übergeordneten Datensatz auswählen',
    'RECURRING_FREQUENCY_NOT_PROVIDED' : 'Die Wiederholungsrate wurde nicht definiert',
    'RECURRING_FREQNECY_NOT_ENABLED' : 'Eine Wiederholungsrate wurde definiert aber nicht zugelassen',
    /* Added for Documents module */
    'NO_SPECIAL_CHARS_DOCS':'Spezielle Zeichen, wie Anführungszeichen, Backslash, + Symbol, % und ? sind nicht zugelassen',
    'FOLDER_NAME_TOO_LONG':'Der Verzeichnisname ist zu lang.',
    'FOLDERNAME_EMPTY':'Sie müssen einen Verzeichnisnamen angeben',
    'DUPLICATE_FOLDER_NAME':'Dieser Verzeichnisname existiert schon',
    'FOLDER_DESCRIPTION_TOO_LONG':'Die Verzeichnisbeschreibung ist zu lang',
    'NOT_PERMITTED':"Sie haben für diese Operation keine Berechtigung.",		
    
    'ALL_FILTER_CREATION_DENIED':'Sie können keine Ansicht mit dem Namen "All" oder "Alle" erstellen. Wählen Sie einen anderen Namen.',
    'OPERATION_DENIED':'Sie haben für diese Operation keine Berechtigung.',
    'EMAIL_CHECK_MSG': 'Um die E-Mail leer zu machen müssen Sie den Portalzugang sperren',
    'IS_PARENT' : 'Dieses Produkt hat bereits untergordnete Produkte. Sie können dafür kein übergeordnetes Produkt auswählen.',
    
    /*global actions on picklist*/
    'PICKLIST_CANNOT_BE_EMPTY': 'Die Auswahlliste darf nicht leer sein.',
    'DUPLICATE_VALUES_FOUND': 'Duplikate gefunden',
    'LBL_NO_ROLES_SELECTED': 'Es wurde keine Rolle ausgewählt, wollen Sie fortfahren?',
    'LBL_DUPLICATE_FOUND': 'Duplikate gefunden zu ',
    'LBL_CANNOT_HAVE_EMPTY_VALUE': 'Sie können den Wert nicht duch Leerzeichen entfernen. Um einen Wert zu entfernen, benutzen Sie bitte die Löschfunktion.',
    'LBL_DUPLICATE_VALUE_EXISTS': 'Duplikate gefunden',
    'LBL_WANT_TO_DELETE': "Diese Operation wird die ausgewählten Einträge in den Auswahllisten für alle Rollen entfernen. Wollen Sie das wirklich? ",
    'LBL_DELETE_ALL_WARNING': "Eine Auswahlliste muss mindestens einen Eintrag haben.",
    'LBL_PLEASE_CHANGE_REPLACEMENT': "bitte ändern Sie den Wert, da dieser auch zum Löschen ausgewählt wurde",
    
    /*layout Editor changes*/
    'BLOCK_NAME_CANNOT_BE_BLANK' : 'Sie müssen einem Block einen Namen geben',
    'ARE_YOU_SURE_YOU_WANT_TO_DELETE' : 'Wollen Sie wirklich löschen?',
    'PLEASE_MOVE_THE_FIELDS_TO_ANOTHER_BLOCK' : 'Bitte die Felder in einen anderen Block verschieben.',
    'ARE_YOU_SURE_YOU_WANT_TO_DELETE_BLOCK' : 'Wollen Sie den Block wirklich löschen?',
    'LABEL_CANNOT_NOT_EMPTY' : 'Sie müssen ein Label angeben',
    'LBL_TYPEALERT_1' : 'Das geht nicht so. Sie können nicht ',
    'LBL_WITH' : 'mit ',
    'LBL_TYPEALERT_2' : 'Daten zusammenfügen. Bitte benutzen Sie den gleichen Datentyp.',
    'LBL_LENGTHALERT' : 'Das geht nicht. Ihre Datenfelder müssen die gleiche Anzahl von Zeichen haben, also gleich groß sein und müssen vom gleichen Typ (z.B. Pflichtfeld) sein.',
    'LBL_DECIMALALERT' : 'Das geht nicht. Ihre Datenfelder müssen das gleiche Zahlenformat haben. Die Anzahl der Dezimalstellen nach dem Komma muss gleich sein.',
    'FIELD_IS_MANDATORY' : 'Pflichtfeld',
    'FIELD_IS_ACTIVE' : 'das Feld kann genutzt werden',
    'FIELD_IN_QCREATE' : 'im Schnellmenü präsent',
    'FIELD_IS_MASSEDITABLE' : 'für Massenfeldänderungen zugelassen',
    
    'IS_MANDATORY_FIELD' : 'ist Pflichtfels',
    'CLOSEDATE_CANNOT_BE_EMPTY' : 'das Abschlussdatumdarf nicht leer sein',
    'AMOUNT_CANNOT_BE_EMPTY' : 'Der Betrag darf nicht leer sein',
    'ARE_YOU_SURE' : 'Wollen Sie wirklich löschen?',
    'LABEL_ALREADY_EXISTS' : 'Diese Label gibt es bereits',
    'LENGTH_OUT_OF_RANGE' : 'Die Blocklänge sollte geringer als 50 Zeichen sein',
    'LBL_SELECT_ONE_FILE' : 'Bitte wenigstens eine Datei auswählen',
    'LBL_UNABLE_TO_ADD_FOLDER' : 'Das Verzeichnis konnte nicht erzeugt werden. Bitte noch einmal versuchen.',
    'LBL_ARE_YOU_SURE_YOU_WANT_TO_DELETE_FOLDER' : 'Wollen Sie das Verzeichnis wirklich löschen?',
    'LBL_ERROR_WHILE_DELETING_FOLDER' : 'Es gabe einen Fehler beim Löschen des Verzeichnisses. Bitte noch einmal versuchen.',
    'LBL_FILE_CAN_BE_DOWNLOAD' : 'Datei steht zum Download bereit',
    'LBL_DOCUMENT_LOST_INTEGRITY':'Das Dokument ist nicht verfügbar. Es wird als inaktiv markeirt.',
    'LBL_DOCUMENT_NOT_AVAILABLE' : 'Dieses Dokument steht nicht zum Download zur Verfügung',
    'LBL_FOLDER_SHOULD_BE_EMPTY' : 'Um ein Verzeichnis entfernen zu können, muss dieses leer sein!',
    
    'LBL_PLEASE_SELECT_FILE_TO_UPLOAD': 'Bitte wählen Sie eine Datei zum hochladen.',
    'LBL_ARE_YOU_SURE_TO_MOVE_TO': 'Sind Sie sicher, dass Sie die Datei(en) in das ',
    'LBL_FOLDER': ' Verzeichnis verschieben wollen?',
    'LBL_UNABLE_TO_UPDATE': 'Konnte Update nicht durchführen! Bitte versuchen Sie es noch einmal.',
    'LBL_BLANK_REPLACEMENT': 'Es kann kein Leerwert zum ersetzten verwendet werden.',
    
    'LBL_IMAGE_DELETED': 'Bild gelöscht',
    
    /* Tooltip management */
    'ERR_FIELD_SELECTION': 'Es sind Fehler in der Feldauswahl aufgetreten',
    
    /* Inventory validation strings */
    'NO_LINE_ITEM_SELECTED': 'Es wurde keine Position gewählt. Bitte wählen Sie mindestens eine Position.',
    'LINE_ITEM': 'Position',
    'LIST_PRICE': 'Listenpreis',
    
	/* Webmails */
	'LBL_PRINT_EMAIL': 'drucken',
	'LBL_DELETE_EMAIL': 'löschen',
	'LBL_DOWNLOAD_ATTACHMENTS': 'Anhang herunterladen',
	'LBL_QUALIFY_EMAIL': 'qualifizieren',
	'LBL_FORWARD_EMAIL': 'weiterleiten',
	'LBL_REPLY_TO_SENDER': 'antworten',
	'LBL_REPLY_TO_ALL': 'An alle antworten',

    'LBL_WIDGET_HIDDEN' : 'Widget entfernt',
    'LBL_RESTORE_FROM_PREFERENCES' : 'Sie können es unter Meine Einstellungen wieder herstellen',
    'ERR_HIDING' : 'Fehler beim Verbergen',
    'MSG_TRY_AGAIN' : 'Bitte noch einmal versuchen',
    
    'MSG_ENABLE_SINGLEPANE_VIEW' : 'zur kompakten Detailansicht umgeschaltet',
    'MSG_DISABLE_SINGLEPANE_VIEW' : 'kompakte Detailansicht abgeschaltet',
    
    'MSG_FTP_BACKUP_DISABLED' : 'FTP Backup abgeschaltet',
    'MSG_LOCAL_BACKUP_DISABLED' : 'Lokales Backup abgeschaltet',
    'MSG_FTP_BACKUP_ENABLED' : 'FTP Backup eingeschaltet',
    'MSG_LOCAL_BACKUP_ENABLED' : 'Lokales Backup eingeschaltet',
    'MSG_CONFIRM_PATH' : 'mit Pfadangeben bestätigen',
    'MSG_CONFIRM_FTP_DETAILS' : 'mit FTP Angeben bestätigen',
    
    'START_PERIOD_END_PERIOD_CANNOT_BE_EMPTY' : 'Start- bzw. Endeperiode darf nicht leer sein',

    /* added to fix i18n issues with home page*/
    'LBL_ADD': 'erstelle ',
    'Module': 'Modul',
    'DashBoard': 'Cockpit',
    'RSS': 'RSS',
    'Default': 'Standard',
    'Notebook': 'Notizblock',
    'ReportCharts': 'Berichtsgrafiken',
    'SPECIAL_CHARS':'\\ / < > + \' " ',
    
    'BETWEEN': 'zwischen',
    'BEFORE': 'vor',
    'AFTER': 'nach',
    'ERROR_DELETING_TRY_AGAIN': 'Fehler beim Löschen, bitte nochmal versuchen.',
    'LBL_ENTER_WINDOW_TITLE': 'Bitte Titel angeben.',
    'LBL_SELECT_ONLY_FIELDS': 'Bitte nur zwei Felder auswählen.',
    'LBL_ENTER_RSS_URL':'Bitte die RSS URL angeben.',
    'LBL_ADD_HOME_WIDGET': 'Konnte die Operation nicht ausführen! Bitte noch einmal versuchen.',
    
    'LBL_DEFAULT_VALUE_FOR_THIS_FIELD' : 'Standardwert für dieses Feld',
    
	'RECIPIENTS_CANNOT_BE_EMPTY' : 'Es müssen Empfänger gewählt werden.',
	'VALID_SCANNER_NAME' : 'Bitte geben Sie einen gültigen Scanner Namen an (Es sollte nur Buchstaben und Nummern enthalten)',
	'ERR_SAME_SOURCE_AND_TARGET' : 'Quellenfeld und Zielfeld dürfen nicht identisch sein.',
	'ERR_ATLEAST_ONE_VALUE_FOR' : 'Sie sollten mindestens einen Eintrag auswählen für',
	'ERR_SELECT_MODULE_FOR_DEPENDENCY' : 'Bitte ein Modul auswählen um Abhängigkeiten hinzuzufügen.',

	'LBL_SIZE_SHOULDNOTBE_GREATER':'Die Dateigröße sollte größer sein als ', //added for upload error message
	'LBL_MAX_SIZE':'Maximum für Dateiupdoad beträgt', //added for display file size limit
	'LBL_FILESIZEIN_MB':'MB', // added to show filesize limit in MB
	'LBL_FILESIZEIN_KB':'KB', // added to show filesize limit in KB
	'LBL_FILESIZEIN_B':'B', // added to show filesize limit in B
	//Contexual help page
    'LBL_HELP_TITLE' : 'Hilfe',
    'LBL_WIKI_TITLE' : 'Handbücher',
    'LBL_FAQ_TITLE'   : 'FAQ',
    'LBL_VIDEO_TITLE' : 'Video',
    'LBL_CLOSE_TITLE' : 'Schließen',
	'LBL_SELECT':'Bitte Standardfenster wählen, das angezeigt werden soll.',

	'ERR_SELECT_ATLEAST_ONE_MERGE_CRITERIA_FIELD' : 'Bitte wählen Sie mindesten ein Feld als Kriterium für die Zusammenführung',
	'ERR_PLEASE_MAP_MANDATORY_FIELDS' : 'Bitte weisen Sie die folgenden Pflichtfelder zu',
	'ERR_MAP_NAME_ALREADY_EXISTS' : 'Eine Zuweisung mit dieser Bezeichnung existiert bereits. Bitte wählen Sie eine andere Bezeichnung.',
	'ERR_MAP_NAME_CANNOT_BE_EMPTY' : 'Bitte vergeben Sie eine Bezeichnung für die Zuweisung.',
	'ERR_FIELDS_MAPPED_MORE_THAN_ONCE' : 'Das gewählte Felde wurde mehrfach zugewiesen. Bitte überprüfen Sie die Zuweisungen.',

	//arror messages for lead conversion
	'ERR_SELECT_EITHER':'Wählen Sie eine Organisation oder eine Person um den Lead umzuwandeln',
	'ERR_SELECT_ACCOUNT':'Wählen Sie ein Organisation um fortzufahren',
	'ERR_SELECT_CONTACT':'Wählen Sie ein Person um fortzufahren',
	'ERR_MANDATORY_FIELD_VALUE':'Es sind nicht alle Pflichtfelder ausgefüllt.',
	'ERR_POTENTIAL_AMOUNT':'Verkaufspotentialsbetrag muss eine Zahl sein',
	'ERR_EMAILID':'Geben Sie eine gültige E-Mail Adresse an',
	'ERR_TRANSFER_TO_ACC':'Eine Oroganistaion sollte gewählt sein, um bezogene Daten umwandeln zu können.',
	'ERR_TRANSFER_TO_CON':'Eine Person sollte gewählt sein, um bezogene Daten umwandeln zu können.',
	'SURE_TO_DELETE_CUSTOM_MAP':'Sind Sie sicher, dass Sie die Feldzuordnung löschen wollen?',
	'LBL_CLOSE_DATE':'geschlossen am',
	'LBL_EMAIL':'E-Mails',
	'MORE_THAN_500' : 'Sie mehr als 500 Datensätze ausgewählt, wodurch die gewählte Aktion wesentlich länger dauern kann. Sind Sie sicher, dass Sie fortsetzen wollen?',
	'LBL_MAPPEDALERT':'Dieses Feld wurde bereits zugewiesen.',
	'LBL_REPORT_NAME': 'Please enter a name for the new report.',
	'LBL_REPORT_NAME_ERROR': 'You must give a new name to the report.',
	'LBL_IS' : 'is',
	'LBL_CONTAINS': 'contains',
	'LBL_DOES_NOT_CONTAIN' : 'does not contain',
	'LBL_STARTS_WITH' : 'starts with',
	'LBL_ENDS_WITH' : 'ends with',
	'LBL_HAS_CHANGED' : 'has changed',
	'LBL_HAS_CHANGED_TO' : 'has changed to',
	'LBL_IS_EMPTY': 'is empty',
	'LBL_IS_NOT_EMPTY' : 'is not empty',
	'LBL_EQUAL_TO' : 'equal to',
	'LBL_LESS_THAN' : 'less than',
	'LBL_GREATER_THAN' : 'greater than',
	'LBL_DOEST_NOT_EQUAL' : 'does not equal',
	'LBL_LESS_THAN_OR_EQUAL_TO' : 'less than or equal to',
	'LBL_GREATER_THAN_OR_EQUAL_TO' : 'greater than or equal to',
	'LBL_IS_NOT' : 'is not',
	'LBL_BETWEEN' : 'between',
	'LBL_BEFORE' : 'before',
	'LBL_AFTER' : 'after',
	'LBL_IS_TODAY' : 'is today',
	'LBL_LESS_THAN_DAYS_AGO' : 'less than days ago',
	'LBL_MORE_THAN_DAYS_AGO' : 'more than days ago',
	'LBL_IN_LESS_THAN' : 'in less than',
	'LBL_IN_MORE_THAN' : 'in more than',
	'LBL_DAYS_AGO' : 'days ago',
	'LBL_DAYS_LATER' : 'days later',
	'LBL_LESS_THAN_HOURS_BEFORE' : 'less than hours before',
	'LBL_LESS_THAN_HOURS_LATER' : 'less than hours later',
	'LBL_MORE_THAN_HOURS_BEFORE' : 'more than hours before',
	'LBL_MORE_THAN_HOURS_LATER' : 'more than hours later',
	'LBL_EXISTS' : 'exists',
	'MAXIMUM_OF_TWO_MODULES_PERMITTED' : 'A maximum of two modules is permitted.',
	'LBL_NEW_CONDITION' : 'Neue Bedingugn',
	'WF_UPDATE_MAP_ERROR' : '**ERROR**: This task uses a field that does not exist: ',
	'WF_UPDATE_MAP_ERROR_INFO' : 'The task will load with INCORRECT settings to permit you to fix it. It is NOT CORRECT!!',
	'MoveUp' : 'Move Up',
	'MoveDown' : 'Move Down',
	'Products' : 'Products',
	'Services' : 'Services'
};
