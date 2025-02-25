gdjs.ConnectionCode = {};
gdjs.ConnectionCode.localVariables = [];
gdjs.ConnectionCode.GDKeyInputObjects1= [];
gdjs.ConnectionCode.GDKeyInputObjects2= [];
gdjs.ConnectionCode.GDKeyInputObjects3= [];
gdjs.ConnectionCode.GDKeyInputObjects4= [];
gdjs.ConnectionCode.GDKeyInputObjects5= [];
gdjs.ConnectionCode.GDEncryptObjects1= [];
gdjs.ConnectionCode.GDEncryptObjects2= [];
gdjs.ConnectionCode.GDEncryptObjects3= [];
gdjs.ConnectionCode.GDEncryptObjects4= [];
gdjs.ConnectionCode.GDEncryptObjects5= [];
gdjs.ConnectionCode.GDTextInputObjects1= [];
gdjs.ConnectionCode.GDTextInputObjects2= [];
gdjs.ConnectionCode.GDTextInputObjects3= [];
gdjs.ConnectionCode.GDTextInputObjects4= [];
gdjs.ConnectionCode.GDTextInputObjects5= [];
gdjs.ConnectionCode.GDEncryptCustomObjects1= [];
gdjs.ConnectionCode.GDEncryptCustomObjects2= [];
gdjs.ConnectionCode.GDEncryptCustomObjects3= [];
gdjs.ConnectionCode.GDEncryptCustomObjects4= [];
gdjs.ConnectionCode.GDEncryptCustomObjects5= [];
gdjs.ConnectionCode.GDDecryptObjects1= [];
gdjs.ConnectionCode.GDDecryptObjects2= [];
gdjs.ConnectionCode.GDDecryptObjects3= [];
gdjs.ConnectionCode.GDDecryptObjects4= [];
gdjs.ConnectionCode.GDDecryptObjects5= [];
gdjs.ConnectionCode.GDKeyOutputObjects1= [];
gdjs.ConnectionCode.GDKeyOutputObjects2= [];
gdjs.ConnectionCode.GDKeyOutputObjects3= [];
gdjs.ConnectionCode.GDKeyOutputObjects4= [];
gdjs.ConnectionCode.GDKeyOutputObjects5= [];
gdjs.ConnectionCode.GDTextOutputObjects1= [];
gdjs.ConnectionCode.GDTextOutputObjects2= [];
gdjs.ConnectionCode.GDTextOutputObjects3= [];
gdjs.ConnectionCode.GDTextOutputObjects4= [];
gdjs.ConnectionCode.GDTextOutputObjects5= [];
gdjs.ConnectionCode.GDInformationObjects1= [];
gdjs.ConnectionCode.GDInformationObjects2= [];
gdjs.ConnectionCode.GDInformationObjects3= [];
gdjs.ConnectionCode.GDInformationObjects4= [];
gdjs.ConnectionCode.GDInformationObjects5= [];


gdjs.ConnectionCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


};gdjs.ConnectionCode.userFunc0x15cbf80 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Funktion zum Konvertieren eines ArrayBuffers in Base64 (zum Speichern als String)
const arrayBufferToBase64 = (buffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
};

// Funktion zum Konvertieren von Base64 zurück in ein ArrayBuffer
const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

// Funktion zur Verschlüsselung
const encrypt = async (text, key) => {
    const encoder = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12-Byte-IV
    const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["encrypt"]);
    const encryptedData = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encoder.encode(text));

    return {
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encryptedData))
    };
};

// Funktion zur Entschlüsselung mit Fehlerbehandlung
const decrypt = async (encryptedJSON, key) => {
    try {
        const decoder = new TextDecoder();
        const encrypted = JSON.parse(encryptedJSON);
        const iv = new Uint8Array(encrypted.iv);
        const encryptedData = new Uint8Array(encrypted.data);
        const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["decrypt"]);
        const decryptedData = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encryptedData);
        
        return decoder.decode(decryptedData);
    } catch (error) {
        return null; // Falls der Schlüssel falsch ist, wird null zurückgegeben
    }
};

const key = base64ToArrayBuffer("Q9eMRUwijIGo/mnMBURCM41tBXQE3x2nZzpPXOqgX6o=");

const Text = "{\"iv\":[232,64,191,116,254,221,78,204,23,26,236,235],\"data\":[250,192,253,168,215,104,202,225,235,192,8,129,178,42,20,224,213,37,148,226,77,149,88,214,7,1,102,183,223,105,114,175,60,76,43,72,224,104,164,70,124,157,250,103,66,206,190,36,46,10,170,81,5,183,137,100,30,156,190,205,188,107]}";

// Entschlüsseln mit Fehlerprüfung
decrypt(Text, key).then(decryptedText => {
    runtimeScene.getVariables().get("Token").setString(decryptedText);
});
};
gdjs.ConnectionCode.eventsList1 = function(runtimeScene) {

{


gdjs.ConnectionCode.userFunc0x15cbf80(runtimeScene);

}


};gdjs.ConnectionCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()).startsWith("Newest: " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Information"), gdjs.ConnectionCode.GDInformationObjects3);
{for(var i = 0, len = gdjs.ConnectionCode.GDInformationObjects3.length ;i < len;++i) {
    gdjs.ConnectionCode.GDInformationObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + "\n" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


};gdjs.ConnectionCode.asyncCallback33926796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ConnectionCode.localVariables);

{ //Subevents
gdjs.ConnectionCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ConnectionCode.localVariables.length = 0;
}
gdjs.ConnectionCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ConnectionCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.ConnectionCode.asyncCallback33926796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ConnectionCode.asyncCallback33926724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ConnectionCode.localVariables);

{ //Subevents
gdjs.ConnectionCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ConnectionCode.localVariables.length = 0;
}
gdjs.ConnectionCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ConnectionCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "getTxt", runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.ConnectionCode.asyncCallback33926724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ConnectionCode.mapOfGDgdjs_9546ConnectionCode_9546GDEncryptObjects1Objects = Hashtable.newFrom({"Encrypt": gdjs.ConnectionCode.GDEncryptObjects1});
gdjs.ConnectionCode.userFunc0x15cd520 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Funktion zum Konvertieren eines ArrayBuffers in Base64 (zum Speichern als String)
const arrayBufferToBase64 = (buffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
};

// Funktion zum Konvertieren von Base64 zurück in ein ArrayBuffer
const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

// Funktion zur Verschlüsselung
const encrypt = async (text, key) => {
    const encoder = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12-Byte-IV
    const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["encrypt"]);
    const encryptedData = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encoder.encode(text));

    return {
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encryptedData))
    };
};

// Funktion zur Entschlüsselung
const decrypt = async (encryptedJSON, key) => {
    const decoder = new TextDecoder();
    const encrypted = JSON.parse(encryptedJSON);
    const iv = new Uint8Array(encrypted.iv);
    const encryptedData = new Uint8Array(encrypted.data);
    const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["decrypt"]);
    const decryptedData = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encryptedData);
    return decoder.decode(decryptedData);
};

// Schlüssel erzeugen (normalerweise einmalig generieren und speichern)
const key = crypto.getRandomValues(new Uint8Array(32)); // 256-Bit-Schlüssel

// Text aus GDevelop-Variable holen
const text = runtimeScene.getVariables().get("Eingabetext").getAsString();

// Verschlüsseln und separat speichern
encrypt(text, key).then(encrypted => {
    const encryptedText = JSON.stringify(encrypted);
    const keyBase64 = arrayBufferToBase64(key);

    // Speichern der Daten in GDevelop-Variablen
    runtimeScene.getVariables().get("VerschluesselterText").setString(encryptedText);
    runtimeScene.getVariables().get("AES_Schluessel").setString(keyBase64);
    runtimeScene.getVariables().get("Callback").setString("verschlüsselt");
});
};
gdjs.ConnectionCode.eventsList5 = function(runtimeScene) {

{


gdjs.ConnectionCode.userFunc0x15cd520(runtimeScene);

}


};gdjs.ConnectionCode.mapOfGDgdjs_9546ConnectionCode_9546GDEncryptCustomObjects1Objects = Hashtable.newFrom({"EncryptCustom": gdjs.ConnectionCode.GDEncryptCustomObjects1});
gdjs.ConnectionCode.userFunc0x15cd858 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Funktion zum Konvertieren eines ArrayBuffers in Base64 (zum Speichern als String)
const arrayBufferToBase64 = (buffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
};

// Funktion zum Konvertieren von Base64 zurück in ein ArrayBuffer
const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

// Funktion zur Verschlüsselung
const encrypt = async (text, key) => {
    const encoder = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12-Byte-IV
    const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["encrypt"]);
    const encryptedData = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encoder.encode(text));

    return {
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encryptedData))
    };
};

// Funktion zur Entschlüsselung
const decrypt = async (encryptedJSON, key) => {
    const decoder = new TextDecoder();
    const encrypted = JSON.parse(encryptedJSON);
    const iv = new Uint8Array(encrypted.iv);
    const encryptedData = new Uint8Array(encrypted.data);
    const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["decrypt"]);
    const decryptedData = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encryptedData);
    return decoder.decode(decryptedData);
};

// Schlüssel erzeugen (normalerweise einmalig generieren und speichern)
const key = base64ToArrayBuffer(runtimeScene.getVariables().get("AES_Schluessel_Eingabe").getAsString());

// Text aus GDevelop-Variable holen
const text = runtimeScene.getVariables().get("Eingabetext").getAsString();

// Verschlüsseln und separat speichern
encrypt(text, key).then(encrypted => {
    const encryptedText = JSON.stringify(encrypted);
    const keyBase64 = arrayBufferToBase64(key);

    // Speichern der Daten in GDevelop-Variablen
    runtimeScene.getVariables().get("VerschluesselterText").setString(encryptedText);
    runtimeScene.getVariables().get("AES_Schluessel").setString(keyBase64);
    runtimeScene.getVariables().get("Callback").setString("verschlüsselt");
});
};
gdjs.ConnectionCode.eventsList6 = function(runtimeScene) {

{


gdjs.ConnectionCode.userFunc0x15cd858(runtimeScene);

}


};gdjs.ConnectionCode.mapOfGDgdjs_9546ConnectionCode_9546GDDecryptObjects1Objects = Hashtable.newFrom({"Decrypt": gdjs.ConnectionCode.GDDecryptObjects1});
gdjs.ConnectionCode.userFunc0x15cdb58 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Funktion zum Konvertieren eines ArrayBuffers in Base64 (zum Speichern als String)
const arrayBufferToBase64 = (buffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
};

// Funktion zum Konvertieren von Base64 zurück in ein ArrayBuffer
const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

// Funktion zur Verschlüsselung
const encrypt = async (text, key) => {
    const encoder = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12-Byte-IV
    const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["encrypt"]);
    const encryptedData = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encoder.encode(text));

    return {
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encryptedData))
    };
};

// Funktion zur Entschlüsselung mit Fehlerbehandlung
const decrypt = async (encryptedJSON, key) => {
    try {
        const decoder = new TextDecoder();
        const encrypted = JSON.parse(encryptedJSON);
        const iv = new Uint8Array(encrypted.iv);
        const encryptedData = new Uint8Array(encrypted.data);
        const keyMaterial = await crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, ["decrypt"]);
        const decryptedData = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, keyMaterial, encryptedData);
        
        return decoder.decode(decryptedData);
    } catch (error) {
        return null; // Falls der Schlüssel falsch ist, wird null zurückgegeben
    }
};

// Schlüssel aus GDevelop-Variable holen (Base64 -> ArrayBuffer)
const key = base64ToArrayBuffer(runtimeScene.getVariables().get("AES_Schluessel_Eingabe").getAsString());

// Verschlüsselten Text aus GDevelop-Variable holen
const text = runtimeScene.getVariables().get("Eingabetext").getAsString();

// Entschlüsseln mit Fehlerprüfung
decrypt(text, key).then(decryptedText => {
    if (decryptedText !== null) {
        runtimeScene.getVariables().get("EntschluesselterText").setString(decryptedText);
        runtimeScene.getVariables().get("Callback").setString("entschlüsselt");
    } else {
        runtimeScene.getVariables().get("EntschluesselterText").setString(""); // Kein Ergebnis
        runtimeScene.getVariables().get("Callback").setString("Fehler: Falscher Schlüssel!");
    }
});

};
gdjs.ConnectionCode.eventsList7 = function(runtimeScene) {

{


gdjs.ConnectionCode.userFunc0x15cdb58(runtimeScene);

}


};gdjs.ConnectionCode.eventsList8 = function(runtimeScene) {

{


gdjs.ConnectionCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ConnectionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsString() != "0");
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "getTxt", "https://raw.githubusercontent.com/melcai/mtgGameFiles/refs/heads/main/Versions/VersionHistory", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(10).getAsString(), "getTxt", "Authorization", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "getTxt", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(10).setString("");
}
{ //Subevents
gdjs.ConnectionCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("KeyInput"), gdjs.ConnectionCode.GDKeyInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextInput"), gdjs.ConnectionCode.GDTextInputObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setString((( gdjs.ConnectionCode.GDTextInputObjects1.length === 0 ) ? "" :gdjs.ConnectionCode.GDTextInputObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getScene().getVariables().getFromIndex(8).setString((( gdjs.ConnectionCode.GDKeyInputObjects1.length === 0 ) ? "" :gdjs.ConnectionCode.GDKeyInputObjects1[0].getBehavior("Text").getText()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Encrypt"), gdjs.ConnectionCode.GDEncryptObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectionCode.mapOfGDgdjs_9546ConnectionCode_9546GDEncryptObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ConnectionCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EncryptCustom"), gdjs.ConnectionCode.GDEncryptCustomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectionCode.mapOfGDgdjs_9546ConnectionCode_9546GDEncryptCustomObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ConnectionCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Decrypt"), gdjs.ConnectionCode.GDDecryptObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectionCode.mapOfGDgdjs_9546ConnectionCode_9546GDDecryptObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ConnectionCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() == "verschlüsselt");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KeyOutput"), gdjs.ConnectionCode.GDKeyOutputObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextOutput"), gdjs.ConnectionCode.GDTextOutputObjects1);
{for(var i = 0, len = gdjs.ConnectionCode.GDKeyOutputObjects1.length ;i < len;++i) {
    gdjs.ConnectionCode.GDKeyOutputObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.ConnectionCode.GDTextOutputObjects1.length ;i < len;++i) {
    gdjs.ConnectionCode.GDTextOutputObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(9).setString("0");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() == "entschlüsselt");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextOutput"), gdjs.ConnectionCode.GDTextOutputObjects1);
{for(var i = 0, len = gdjs.ConnectionCode.GDTextOutputObjects1.length ;i < len;++i) {
    gdjs.ConnectionCode.GDTextOutputObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(9).setString("0");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() == "Fehler: Falscher Schlüssel!");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextOutput"), gdjs.ConnectionCode.GDTextOutputObjects1);
{for(var i = 0, len = gdjs.ConnectionCode.GDTextOutputObjects1.length ;i < len;++i) {
    gdjs.ConnectionCode.GDTextOutputObjects1[i].getBehavior("Text").setText("Fehler: Falscher Schlüssel!");
}
}{runtimeScene.getScene().getVariables().getFromIndex(9).setString("0");
}}

}


};

gdjs.ConnectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConnectionCode.GDKeyInputObjects1.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects2.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects3.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects4.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects5.length = 0;
gdjs.ConnectionCode.GDEncryptObjects1.length = 0;
gdjs.ConnectionCode.GDEncryptObjects2.length = 0;
gdjs.ConnectionCode.GDEncryptObjects3.length = 0;
gdjs.ConnectionCode.GDEncryptObjects4.length = 0;
gdjs.ConnectionCode.GDEncryptObjects5.length = 0;
gdjs.ConnectionCode.GDTextInputObjects1.length = 0;
gdjs.ConnectionCode.GDTextInputObjects2.length = 0;
gdjs.ConnectionCode.GDTextInputObjects3.length = 0;
gdjs.ConnectionCode.GDTextInputObjects4.length = 0;
gdjs.ConnectionCode.GDTextInputObjects5.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects1.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects2.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects3.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects4.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects5.length = 0;
gdjs.ConnectionCode.GDDecryptObjects1.length = 0;
gdjs.ConnectionCode.GDDecryptObjects2.length = 0;
gdjs.ConnectionCode.GDDecryptObjects3.length = 0;
gdjs.ConnectionCode.GDDecryptObjects4.length = 0;
gdjs.ConnectionCode.GDDecryptObjects5.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects1.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects2.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects3.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects4.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects5.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects1.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects2.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects3.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects4.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects5.length = 0;
gdjs.ConnectionCode.GDInformationObjects1.length = 0;
gdjs.ConnectionCode.GDInformationObjects2.length = 0;
gdjs.ConnectionCode.GDInformationObjects3.length = 0;
gdjs.ConnectionCode.GDInformationObjects4.length = 0;
gdjs.ConnectionCode.GDInformationObjects5.length = 0;

gdjs.ConnectionCode.eventsList8(runtimeScene);
gdjs.ConnectionCode.GDKeyInputObjects1.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects2.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects3.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects4.length = 0;
gdjs.ConnectionCode.GDKeyInputObjects5.length = 0;
gdjs.ConnectionCode.GDEncryptObjects1.length = 0;
gdjs.ConnectionCode.GDEncryptObjects2.length = 0;
gdjs.ConnectionCode.GDEncryptObjects3.length = 0;
gdjs.ConnectionCode.GDEncryptObjects4.length = 0;
gdjs.ConnectionCode.GDEncryptObjects5.length = 0;
gdjs.ConnectionCode.GDTextInputObjects1.length = 0;
gdjs.ConnectionCode.GDTextInputObjects2.length = 0;
gdjs.ConnectionCode.GDTextInputObjects3.length = 0;
gdjs.ConnectionCode.GDTextInputObjects4.length = 0;
gdjs.ConnectionCode.GDTextInputObjects5.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects1.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects2.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects3.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects4.length = 0;
gdjs.ConnectionCode.GDEncryptCustomObjects5.length = 0;
gdjs.ConnectionCode.GDDecryptObjects1.length = 0;
gdjs.ConnectionCode.GDDecryptObjects2.length = 0;
gdjs.ConnectionCode.GDDecryptObjects3.length = 0;
gdjs.ConnectionCode.GDDecryptObjects4.length = 0;
gdjs.ConnectionCode.GDDecryptObjects5.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects1.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects2.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects3.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects4.length = 0;
gdjs.ConnectionCode.GDKeyOutputObjects5.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects1.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects2.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects3.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects4.length = 0;
gdjs.ConnectionCode.GDTextOutputObjects5.length = 0;
gdjs.ConnectionCode.GDInformationObjects1.length = 0;
gdjs.ConnectionCode.GDInformationObjects2.length = 0;
gdjs.ConnectionCode.GDInformationObjects3.length = 0;
gdjs.ConnectionCode.GDInformationObjects4.length = 0;
gdjs.ConnectionCode.GDInformationObjects5.length = 0;


return;

}

gdjs['ConnectionCode'] = gdjs.ConnectionCode;
