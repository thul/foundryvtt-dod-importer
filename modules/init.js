import Importer from "./importer.js";

let importer;

Hooks.on("ready", () => {
    if (!importer) {
        importer = new Importer();
    }
});

Hooks.on("renderActorDirectory", (app, html, data) => {
    // if (!game.user.isGM && !game.settings.get("party-overview", "EnablePlayerAccess"))
    //     return;

    let button = $(
        `<button id="dod-import-button" class="${game.system.id}">DoD Character Import</button>`
    );

    button.on("click", (e) => {
        importer.getActors();
        importer.render(true);
    });

    $(html).find("header.directory-header").prepend(button);
});

