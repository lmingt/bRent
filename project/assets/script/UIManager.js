
var UIManager = function () {
    this.gameUIs = new Array();
    this.uiResPath = "ui/";

    this.creatUI = function (uiName) {
        var path = this.uiResPath + uiName;
        cc.loader.loadResDir(path, this.loadU);
    };

    this.showUI = function (uiName) {
        if (this.gameUIs == null || this.gameUIs[uiName] == null) {
            this.creatUI(uiName);
        }
        else {
            var gameUI = this.gameUIs[uiName];
            gameUI.show();
        }
    };

    this.hideUI = function (uiName) {
        cc.log("--hideUI--" + uiName);
        if (this.gameUIs != null && this.gameUIs[uiName] != null) {
            this.gameUIs[uiName].hide();
        }
    };

    this.loadUI = function (err, assets) {
        if (err) {
            cc.error(err);
            return;
        }
        var gameUIRes = new Array();
        for (var i = 0; i < assets.length; i++) {
            // cc.log("------createUI---res:" + assets[i].name, assets[i]);
            gameUIRes[assets[i].name] = assets[i];
        }

        if (gameUIRes[uiName] == null) {
            cc.log("---createUI res Null!!-" + path);
            return;
        }

        var newNode = cc.instantiate(gameUIRes[uiName]);
        cc.director.getScene().addChild(newNode);
        var comName = uiName.slice(0, 1).toUpperCase() + uiName.slice(1);
        var newUI = newNode.addComponent(comName);
        newUI.gameUIRes = gameUIRes;
        newUI.show();
        this.gameUIs[uiName] = newUI;
    };


}

var UIName = {
    loginUI: "loginUI",
}

window.UIManager = new UIManager();
window.UIName = UIName;
