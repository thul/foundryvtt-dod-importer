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
        this.updateSkills(pcActor, importedData.skills);
        this.updateInfo(pcActor, importedData.species, importedData.faction, importedData.archetype, importedData.wealth);

        ui.notifications.info("All done!");
    }

    updateAttributes(pcActor, attributes) {
        pcActor.update({
            "data.attributes.agility.rating" : attributes.agility,
            "data.attributes.agility.cost" : this.getAttributeCosts(attributes.agility),
            "data.attributes.fellowship.rating" : attributes.fellowship,
            "data.attributes.fellowship.cost" : this.getAttributeCosts(attributes.fellowship),
            "data.attributes.initiative.rating" : attributes.initiative,
            "data.attributes.initiative.cost" : this.getAttributeCosts(attributes.initiative),
            "data.attributes.intellect.rating" : attributes.intellect,
            "data.attributes.intellect.cost" : this.getAttributeCosts(attributes.intellect),
            "data.attributes.strength.rating" : attributes.strength,
            "data.attributes.strength.cost" : this.getAttributeCosts(attributes.strength),
            "data.attributes.toughness.rating" : attributes.toughness,
            "data.attributes.toughness.cost" : this.getAttributeCosts(attributes.toughness),
            "data.attributes.willpower.rating" : attributes.willpower,
            "data.attributes.willpower.cost" : this.getAttributeCosts(attributes.willpower)
        });
    }

    updateSkills(pcActor, skills) {
        pcActor.update({
            "data.skills.athletics.rating" : skills.athletics,
            "data.skills.athletics.cost" : this.getSkillsCosts(skills.athletics),
            "data.skills.awareness.rating" : skills.awareness,
            "data.skills.awareness.cost" : this.getSkillsCosts(skills.awareness),
            "data.skills.ballisticSkill.rating" : skills.ballisticSkill,
            "data.skills.ballisticSkill.cost" : this.getSkillsCosts(skills.ballisticSkill),
            "data.skills.cunning.rating" : skills.cunning,
            "data.skills.cunning.cost" : this.getSkillsCosts(skills.cunning),
            "data.skills.deception.rating" : skills.deception,
            "data.skills.deception.cost" : this.getSkillsCosts(skills.deception),
            "data.skills.insight.rating" : skills.insight,
            "data.skills.insight.cost" : this.getSkillsCosts(skills.insight),
            "data.skills.intimidation.rating" : skills.intimidation,
            "data.skills.intimidation.cost" : this.getSkillsCosts(skills.intimidation),
            "data.skills.investigation.rating" : skills.investigation,
            "data.skills.investigation.cost" : this.getSkillsCosts(skills.investigation),
            "data.skills.leadership.rating" : skills.leadership,
            "data.skills.leadership.cost" : this.getSkillsCosts(skills.leadership),
            "data.skills.medicae.rating" : skills.medicae,
            "data.skills.medicae.cost" : this.getSkillsCosts(skills.medicae),
            "data.skills.persusasion.rating" : skills.persuasion,
            "data.skills.persusasion.cost" : this.getSkillsCosts(skills.persuasion),
            "data.skills.pilot.rating" : skills.pilot,
            "data.skills.pilot.cost" : this.getSkillsCosts(skills.pilot),
            "data.skills.psychicMastery.rating" : skills.psychicMastery,
            "data.skills.psychicMastery.cost" : this.getSkillsCosts(skills.psychicMastery),
            "data.skills.scholar.rating" : skills.scholar,
            "data.skills.scholar.cost" : this.getSkillsCosts(skills.scholar),
            "data.skills.stealth.rating" : skills.stealth,
            "data.skills.stealth.cost" : this.getSkillsCosts(skills.stealth),
            "data.skills.survival.rating" : skills.survival,
            "data.skills.survival.cost" : this.getSkillsCosts(skills.survival),
            "data.skills.tech.rating" : skills.tech,
            "data.skills.tech.cost" : this.getSkillsCosts(skills.tech),
            "data.skills.weaponSkill.rating" : skills.weaponSkill,
            "data.skills.weaponSkill.cost" : this.getSkillsCosts(skills.weaponSkill)
        });
    }

    updateInfo(pcActor, species, faction, archetype, wealth) {
        pcActor.update({
            "data.bio.species" : species.label,
            "data.advances.species" : species.cost,
            "data.bio.faction" : faction.label,
            "data.bio.archetype" : archetype.value,
            "data.advances.tier" : archetype.tier,
            "data.resources.wealth" : (wealth.points - wealth.spend),

        });
    }

    updateTalents(pcActor) {
        // TODO: Parse talents and figure out how to do this
    }

    updateAbilities(pcActor) {
        // TODO: Parse Abilties and figure out how to do this
    }

    updatePhychicPowers(pcActor) {
        // TODO: Parse Psychicpowers and figure out how to do this
    }

    updateAscencion(pcActor) {
        // TODO: Parse Ascencion  and figure out how to do this
    }

    updateGear(pcActor) {
        // We are currently unable to tell apart item types in the DoD export, so this is kinda impossible now
    }

    getAttributeCosts(rating) {
        switch (rating) {
            case 1:
                return 0;
            case 2:
                return 4;
            case 3:
                return 10;
            case 4:
                return 20;
            case 5:
                return 35;
            case 6:
                return 55;
            case 7:
                return 80;
            case 8:
                return 110;
            case 9:
                return 145;
            case 10:
                return 185;
            case 11:
                return 230;
            case 12:
                return 280;
            default:
                return 0;
        }
    }

    getSkillsCosts(rating) {
        switch (rating) {
            case 1:
                return 2;
            case 2:
                return 6;
            case 3:
                return 12;
            case 4:
                return 20;
            case 5:
                return 30;
            case 6:
                return 42;
            case 7:
                return 56;
            case 8:
                return 72;
            default:
                return 0;
        }
    }
}

