module.exports = {
    tip: function(title, message, buttonLabel, successCallback) {
        cordova.exec(successCallback,
            null, // No failure callback
            "Tip",
            "tip",
            [title, message, buttonLabel]);
    }
};