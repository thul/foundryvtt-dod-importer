# Wrath & Glory Character Importer
This is a small module made to import [Wrath & Glory](https://www.cubicle7games.com/our-games/wrath-glory/) 
characters made on the [Doctors of doom](https://www.doctors-of-doom.com/) website.
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

For now only the same + costs are imported. The effects are not imported, since they are conditional and the
text is not provided in the export. You will have to do this yourself by looking it up in the rulebook(s)

*Note*: The way this works now is per name, so if the name of your Skills is "Deadshot" and it does not exist
the module will create it. If your skill is named "Dead shot" for instance, it will still make a new one cause
the names do not match. Also you have to input the description and bonusses yourself for now.

## Who can import?
Everyone can import their owned PCs, the GM can import any PC.

## What's left to do?
Todo:
* Adding Gear
* Adding effects of gear/talents/etc (is this useful and possible? lots of conditional effects on gear)
* clean up the code (im a noob at Javascript)

## Reporting bugs
Please do, use the github issue for this.

## Installing
Input the following for the manifest URL: `https://raw.githubusercontent.com/thul/foundryvtt-dod-importer/master/module.json`
