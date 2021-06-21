export default class Importer extends Application {

    constructor(options) {
        super(options);

        this.state = {};
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "dod-importer",
            width: 500,
            height: 300,
            resizable: false,
            title: "W&G Doctors Of Doom Character Importer",
            template: `/modules/dod-importer/templates/main.hbs`,
            classes: ["dod-importer"],
            minimizable: true,
            closeOnSubmit: true
        });
    }

    getActors() {
        return game.actors.entities.filter(a => a.data.type === "agent");
    }

    getActorById(pcId) {
        return game.actors.entities.filter(a => a.data._id === pcId)[0];
    }

    getData() {
        this.state = {
            pcs: this.getActors()
        };

        return this.state;
    }

    activateListeners(html) {
        $("#dod-importer-import").on("click", event => {
            event.preventDefault();
            event.stopPropagation();

            this.import($("#dod-importer-charcode").val(), $("#dod-importer-pc-id").children(":selected").attr("id"));
            this.render(false);
        });

        $("#dod-importer-cancel").on("click", event => {
            event.preventDefault();
            event.stopPropagation();
            this.render(false);
        });

        super.activateListeners(html);
    }

    import(base64, pcId) {

        let importedData;

        try {
            let json = atob(base64);
            importedData = JSON.parse(json);
            ui.notifications.info("Importing character, please wait...");
        } catch (error) {
            ui.notifications.error("Import failed, can't parse import string...");
            return;
        }

        let pcActor = this.getActorById(pcId);
        this.updateAttributes(pcActor, importedData.attributes);

        ui.notifications.info("All done!");
    }

    updateAttributes(pcActor, attributes) {
        pcActor.update({
            "data.attributes.agility.rating" : attributes.agility,
            "data.attributes.fellowship.rating" : attributes.fellowship,
            "data.attributes.initiative.rating" : attributes.initiative,
            "data.attributes.intellect.rating" : attributes.intellect,
            "data.attributes.strength.rating" : attributes.strength,
            "data.attributes.toughness.rating" : attributes.toughness,
            "data.attributes.willpower.rating" : attributes.willpower
        });
    }
}

