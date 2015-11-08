
exports.parseIndividuals = function(individuals) {
  for (i in individuals.individual) {
    var userID = individuals.individual[i].id
    var abilities = individuals.individual[i].abilities
    if (abilities.count > 0)
      if (typeof abilities.ability.length == "undefined") {
        console.log('UserID', userID, 'ability', abilities.ability.$t)
        continue;
      }
      for (x in abilities.ability) {
        console.log('UserID', userID, 'ability', abilities.ability[x].$t)
      }
  }
}

exports.parseGroupProfiles = function(groups) {
  for (i in groups.group) {
    var group = groups.group[i]
    console.log(require('util').inspect(group, { depth: null }));
    break;
    var groupID = group.id
    console.log('[' + groupID + ']', group.name)
  }
}
