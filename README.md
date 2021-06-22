# Wrath & Glory Character Importer
This is a small module made to import characters made on the [Doctors of doom](https://www.doctors-of-doom.com/) website.
Simply create your characters and export it. Take the text it gives you, open the importer and pick an agent. Click "Import"
and watch the magic happen.

## Who am i?
I'm just someone who likes playing W&G, felt there was a need for a module like this and decided to make it. 
I am not a javascript developer by trade, so the code might look a bit... janky, nor do i know much about CSS and making
things look pretty. Feel free to submit a PR :)

## What is imported?
At this moment it imports all the Attributes, Skills and their costs. Also some general info like Archetype, Species and 
are imported.

## Who can import?
At this moment only a GM can do this, i know this is a bit meh... but bear with me while i figure out Foundry's API and 
wrap my head around how javascript works. later versions will let players import (only) their owned PC's.

## What's left to do?
I still need to figure out how to add Phsychic powers, Ascensions, Talents and Abilities to a PC. To add gear we'll need
to get the export modified since it currently does not let me know if that bedroll you have is a weapon or just plain gear.

## Reporting bugs
Please do, use the github issue for this.

## Installing
Just use the built in Module finder or use `https://raw.githubusercontent.com/thul/foundryvtt-dod-importer/master/module.json`
