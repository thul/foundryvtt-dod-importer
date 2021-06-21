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
        `<div style="margin-top: 5px; margin-bottom: 5px"><button id="dod-import-button" class="header-actions action-buttons ${game.system.id}">DoD Character Import</button></div>`
    );

    button.on("click", (e) => {
        importer.getActors();
        importer.render(true);
    });

    $(html).find("header.directory-header").prepend(button);
});

