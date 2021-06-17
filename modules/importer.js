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
            resizable: true,
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
            console.log("import!");
            this.render(false);
        });

        $("#dod-importer-cancel").on("click", event => {
            event.preventDefault();
            event.stopPropagation();
            console.log("Cancel!!");
            this.render(false);
        });

        super.activateListeners(html);
    }
}

