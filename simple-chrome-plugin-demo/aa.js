window.onload = function () {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
    config.commandMap = {
        Welcome: {
            title: "Welcome",
            text: "Welcome",
            iconClass: "ribbon-button-welcome",
            bigButton: "true",
            commandName: "Welcome",
            execute: async (context, propertyName, fontItalicChecked) => {
                alert('Welcome to new designer.');
            }
        }
    }
    var d = new GC.Spread.Sheets.Designer.Designer(document.getElementById("gc-designer-container"), config, spread);
}