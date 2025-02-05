
if (typeof gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource !== "undefined") {
  gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource = {};


gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.userFunc0x200d810 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene
    .getGame()
    .getImageManager()
    .getPIXITexture(eventsFunctionContext.getArgument("Resource"))
    .baseTexture = PIXI.BaseTexture.from(eventsFunctionContext.getArgument("URL"));

};
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.userFunc0x200d810(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.func = function(runtimeScene, URL, Resource, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LoadImageFromURL"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LoadImageFromURL"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "URL") return URL;
if (argName === "Resource") return Resource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoImageResource.registeredGdjsCallbacks = [];