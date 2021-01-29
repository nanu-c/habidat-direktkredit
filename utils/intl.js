/* jshint esversion: 8 */
const texts = {
	"administrator": "Administrator",
	"amount": "Betrag",
	"BIC": "BIC",
	"choose_file": "Datei auswählen..",
	"country": "Land",
	"description": "Beschreibung",
	"contract": "Kreditvertrag",
	"contract_id": "Kreditnummer",
	"email": "E-Mail Adresse",
	"file": "Datei",
	"filename": "Dateiname",
	"mime": "MIME Typ",
	"path": "Pfad",
	"ref_id": "Referenz ID",
	"ref_table": "Referenztabelle",
	"first_name": "Vorname",
	"file_public": "Für Kreditgeber*in sichtbar",
	"file_public_true": "Für Kreditgeber*in sichtbar",
	"file_public_false": "Für Kreditgeber*in unsichtbar",
	"file_public_help": "Soll die Datei auch für den*die Kreditgeber*in abrufbar sein?",
	"form_admin_add": "Administrator*innen Account erstellen",
	"form_admin_settings": "Einstellungen ändern",
	"form_contract_edit": "Kredit ändern",
	"form_contract_add": "Kredit hinzufügen",
	"form_file_add_user": "Dokument hinzufügen",
	"form_process_startinterestpayment": "Jährliche Zinsauszahlungen eintragen",
	"form_transaction_add": "Zahlung anlegen",
	"form_transaction_edit": "Zahlung bearbeiten",
	"form_user_edit": "Kreditgeber*in bearbeiten",
	"form_user_add": "Kreditgeber*in hinzufügen",
	"monochrome": "Monochrom",
	"green": "Grün",
	"IBAN": "IBAN",
	"interest_rate": "Zinssatz",
	"interest_payment_type": "Zinsauszahlung",
	"interest_payment_type_end": "Ende der Laufzeit",
	"interest_payment_type_yearly": "Jährlich",
	"last_name": "Nachname",
	"loginCount": "Eingeloggt",
	"logo": "Logo (Menüleiste)",
	"logo_select": "Logo (Projektauswahl)",
	"logo_change": "Logo ändern",
	"logo_keep": "Logo beibehalten",
	"logo_upload": "Logo hochladen",
	"logo_link": "Logo-URL angeben",
	"logo_select_change": "Logo ändern",
	"logo_select_keep": "Logo beibehalten",
	"logo_select_upload": "Logo hochladen",
	"logo_select_link": "Logo-URL angeben",
	"logon_id": "Username",
	"ldap": "LDAP Account",
	"ldap_help": "Bei LDAP Accounts muss kein Passwort eingegeben werden.",
	"log_update": "geändert",
	"log_create": "erstellt",
	"log_delete": "gelöscht",
	"log_email": "E-Mail verschickt",
	"password": "Passwort",
	"password2": "Passwort (Wiederholung)",
	"projectname": "Projektname",
	"project_email": "Kontakt E-Mail Adresse",
	"project_email_sendcopy": "Kopie ausgehender E-Mails",
	"project_email_sendcopy_help": "Willst du eine Kopie aller ausgehender E-Mails an die Kontakt E-Mailadresse erhalten?",
	"project_smtp_host": "SMTP Hostname",
	"project_smtp_port": "SMTP Port (Standard: 25)",
	"project_smtp_user": "SMTP Username",
	"project_smtp_pass": "SMTP Passwort",
	"project_url": "Webseite",
	"project_usersuffix": "Endung Login Name",
	"relationship": "Beziehung zum Projekt",
	"relationships": "Beziehungsarten (Kreditgeber*innen)",
	"save": "Speichern",
	"contract_status": "Vertragsstatus",
	"contract_status_unknown": "Noch kein Vertrag",
	"contract_status_sign": "Vertrag ist zu unterschreiben",
	"contract_status_sent": "Vertrag ist verschickt",
	"contract_status_complete": "Vertrag abgeschlossen",
	"no_contract": "Noch kein Vertrag angelegt",
	"notes": "Notizen",
	"organisation_name": "Name",
	"payback_date": "Rückzahlungsdatum",
	"password": "Passwort",
	"passwordHashed": "Passwort (verschlüsselt)",
	"payment_type": "Zahlungsart",
	"payment_type_bank": "Überweisung",
	"payment_type_cash": "Bar",
	"payment_type_other": "Sonstige",
	"place": "Ort",
	"public": "Sichtbar",
	"red": "Rot",
	"send_password_link": "E-Mail senden",
	"send_password_link_help": "Eine E-Mail mit einem Link zum Setzen des Passworts senden?",
	"send_transaction_email": "E-Mail senden",
	"send_transaction_email_help": "Kreditgeber*in per E-Mail über Zahlung informieren?",
	"sign_date": "Vertragsdatum",
	"status": "Status",
	"street": "Strasse, Hausnummer",
	"telno": "Telefonnummer",
	"termination_date": "Kündigungsdatum",
	"termination_type": "Kündigungsart",
	"termination_type_T": "Kündigungsfrist",
	"termination_type_P": "Laufzeit",
	"termination_type_D": "Enddatum",
	"termination_period_type_M": "Monat(e)",
	"termination_period_type_w": "Woche(n)",
	"termination_period_type_Y": "Jahr(e)",
	"termination_period": "Kündigungsfrist",
	"termination_period_type": "Kündigungsfrist (Typ)",
	"title_prefix": "Titel",
	"title_suffix": "Titel, nachgestellt",
	"theme": "Farbschema",
	"transaction": "Zahlung",
	"transaction_date": "Datum",
	"transaction_type": "Zahlungsrichtung",
	"transaction_type_initial": "Einzahlung",
	"transaction_type_deposit": "Zusatzzahlung",
	"transaction_type_withdrawal": "Teilauszahlung",
	"transaction_type_termination": "Rückzahlung",
	"transaction_type_notreclaimed": "Nicht rückgefordert",
	"transaction_type_interestpayment": "Zinsauszahlung",
	"type": "Typ",
	"interest_method": "Zinsberechnung",
	"interest_method_365_compound": "ACT/365 mit Zinseszins",
	"interest_method_hint_365_compound": "Bei ACT/365 (englische Methode) werden die Zinstage eines Jahres kalendergenau berechnet, allerdings hat das Basis-Zinsjahr immer 365 Zinstage, unabhängig von einem möglichen Schaltjahr.",
	"interest_method_30E360_compound": "30E/360 mit Zinseszins",
	"interest_method_hint_30E360_compound": "Bei 30E/365 (deutsche / kaufmännische Methode) werden alle Monate mit 30 Tagen gerechnet, das Basis-Zinsjahr hat immer 360 Zinstage. Beispiel: Eine Anlage vom 28. Februar 2015 bis 10. April 2015 ergibt 3 + 30 + 9 = 42 Zinstage",
	"interest_method_360_compound": "ACT/360 mit Zinseszins",
	"interest_method_hint_360_compound": "Bei ACT/360 (Eurozins- / französische methode) werden die Zinstage eines Jahres kalendergenau berechnet, allerdings hat das Basis-Zinsjahr immer 360 Zinstage.",
	"interest_method_ACT_compound": "ACT/ACT mit Zinseszins",
	"interest_method_hint_ACT_compound": "Bei ACT/ACT (Effektivzinsmethode) werden die Zinstage eines Jahres kalendergenau berechnet, auch das Basis-Zinsjahr hat je nach Jahr 365 oder 366 (Schaltjahr) Zinstage.",
	"interest_method_365_nocompound": "ACT/365 ohne Zinseszins",
	"interest_method_hint_365_nocompound": "Bei ACT/365 (englische Methode) werden die Zinstage eines Jahres kalendergenau berechnet, allerdings hat das Basis-Zinsjahr immer 365 Zinstage, unabhängig von einem möglichen Schaltjahr",
	"interest_method_30E360_nocompound": "30E/360 ohne Zinseszins",
	"interest_method_hint_30E360_nocompound": "Bei 30E/365 (deutsche / kaufmännische Methode) werden alle Monate mit 30 Tagen gerechnet, das Basis-Zinsjahr hat immer 360 Zinstage. Beispiel: Eine Anlage vom 28. Februar 2015 bis 10. April 2015 ergibt 3 + 30 + 9 = 42 Zinstage",
	"interest_method_360_nocompound": "ACT/360 ohne Zinseszins",
	"interest_method_hint_360_nocompound": "Bei ACT/360 (Eurozins- / französische methode) werden die Zinstage eines Jahres kalendergenau berechnet, allerdings hat das Basis-Zinsjahr immer 360 Zinstage.",
	"interest_method_ACT_nocompound": "ACT/ACT ohne Zinseszins",
	"interest_method_hint_ACT_nocompound": "Bei ACT/ACT (Effektivzinsmethode) werden die Zinstage eines Jahres kalendergenau berechnet, auch das Basis-Zinsjahr hat je nach Jahr 365 oder 366 (Schaltjahr) Zinstage.",
	"user_id": "Kontonummer",
	"user_type": "Benutzer*innentyp",	
	"user_type_person": "Person",
	"user_type_organisation": "Organisation",	
	"user": "Benutzer*in",
	"zip": "PLZ"

};

exports._t = function(key, strings = undefined) {
	if(texts[key]) {
		return texts[key];
	} else {
		return '!' + key + '!';
	}
};
