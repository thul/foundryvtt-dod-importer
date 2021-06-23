# Wrath & Glory Character Importer
This is a small module made to import characters made on the [Doctors of doom](https://www.doctors-of-doom.com/) website.
Simply create your characters and export it. Take the text it gives you, open the importer and pick an agent. Click "Import"
and watch the magic happen.

## Who am i?
I'm just someone who likes playing W&G, felt there was a need for a module like this and decided to make it. 
I am not a javascript developer by trade, so the code might look a bit... janky, nor do i know much about CSS and making
things look pretty. Feel free to submit a PR :)

## What is imported?
The following is imported at this moment:
* Attributes
* Skills
* Talents
* Abilities
* Ascensions
* Psychic powers

For now only the same + costs are imported. Because the effects of talents, abililties, etc are not available
in the export or i haven't made it so that can be parsed yet.

*Note*: The way this works now is per name, so if the name of your Skills is "Deadshot" and it does not exist
the module will create it. If your skill is named "Dead shot" for instance, it will still make a new one cause
the names do not match. Also you have to input the description and bonusses yourself for now.

## Who can import?
At this moment only a GM can do this, i know this is a bit meh... but bear with me while i figure out Foundry's API and 
wrap my head around how javascript works. later versions will let players import (only) their owned PC's.

## What's left to do?
Todo:
* Adding Gear
* Adding effects of gear/talents/etc
* clean up the code (im a noob at Javascript)

## Reporting bugs
Please do, use the github issue for this.

## Installing
use `https://raw.githubusercontent.com/thul/foundryvtt-dod-importer/master/module.json` since Foundry does not want to
list my module because the Doctors of Doom website "infringes" on copyright according to their mods.
