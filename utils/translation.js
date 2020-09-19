/***********************
 * tiny => tiny        *
 * small => sm         *
 * medium => med       *
 * large => lg         *
 * huge => huge        *
 * gargantuan => grg   *
 **********************/
function translateSize(size) {
	switch (size.toLowerCase()) {
		case "small": return "sm"
		case "medium": return "med"
		case "large": return "lg"
		case "gargantuan": return "grg"
		default: return size
	}
}

function challengeRatingToProfMod(cr) {
	switch (true) {
		case cr > 28: return 9
		case cr > 24: return 8
		case cr > 20: return 7
		case cr > 16: return 6
		case cr > 12: return 5
		case cr > 8: return 4
		case cr > 4: return 3
		default: return 2
	}
}

function translateSkills(skill) {
	switch (skill.toLowerCase()) {
		case "acrobatics": return "acr"
		case "animal handling": return "ani"
		case "arcana": return "arc"
		case "athletics": return "ath"
		case "deception": return "dec"
		case "history": return "his"
		case "insight": return "ins"
		case "investigation": return "inv"
		case "intimidation": return "itm"
		case "medicine": return "med"
		case "nature": return "nat"
		case "persuasion": return "per"
		case "perception": return "prc"
		case "performance": return "prf"
		case "religion": return "rel"
		case "sleight of hand": return "slt"
		case "stealth": return "ste"
		case "survival": return "sur"
	}
}

function translateActionType(type) {
	switch (type) {
		case "Melee Weapon Attack":
			return 'mwak'
		case "Melee or Ranged Weapon Attack":
		case "Ranged Weapon Attack":
			return 'rwak'
		case "Melee Spell Attack":
			return 'msak'
		case "Ranged Spell Attack":
			return 'rsak'
	}

	return null
}

function translateActionActivation(raw) {
	switch (raw) {
		case "Actions":
			return "action"
		case "Reactions":
			return "reaction"
		case "Legendary Actions":
			return "legendary"
	}

	return raw
}

function translateNumber(number) {
	switch (number.toLowerCase()) {
		case "one": return 1
		case "two": return 2
		case "three": return 3
		case "four": return 4
		case "five": return 5
		case "six": return 6
		case "seven": return 7
		case "eight": return 8
		case "nine": return 9
		case "ten": return 10
		case "eleven": return 11
		case "twelve": return 12
		case "thirteen": return 13
		case "fourteen": return 14
		case "sixteen": return 16
		case "seventeen": return 17
		case "eighteen": return 18
		case "nineteen": return 19
		case "twenty": return 20
	}
}

function translateToSingular(text) {
	switch (text) {
		case "Hours": return "Hour"
		case "Minutes": return "Minute"
		case "Rounds": return "Round"
		default: return text
	}
}

function translateDuration(dur) {
	switch (dur) {
		case "instantaneous": return "inst"
		default: return dur
	}
}

function shortifyAttribute(attribute) {
	return attribute.substring(0, 3).toLowerCase()
}