exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const showTitles = {
    'AddingMachine': 'The Adding Machine, by Elmer Rice - Bradley University',
    'Arcadia': 'Arcadia by Tom Stoppard, East Carolina University',
    'Cabaret': 'Cabaret by Kander and Ebb, East Carolina University', 
    'Consumption': 'Consumption, Choreographed by John Dixon, East Carolina University',
    'Deathtrap': 'Deathtrap by Ira Levin, Bradley University',
    'Dracula': 'Dracula by Steven Deitz, East Carolina University',
    'ElephantMan': 'Elephant Man by Bernard Pomerance, East Carolina University',
    'Fallout': 'Fallout, Choreographed by Teal Darkenwald, East Carolina University',
    'ForbiddenPlanet': 'Return to the Forbidden Planet by Bob Carlton, East Carolina University',
    'Furies': 'The Furies by Aeschylus, East Carolina University',
    'Giovanni': 'Don Giovanni by Mozart, Tulsa Opera',
    'GuysAndDolls': 'Guys and Dolls by Birrpws amd Swerling, Ohio Light Opera',
    'LasMeninas': 'Las Meninas by Lynn Nottage, East Carolina University',
    'Merrily': 'Merrily We Roll Along by Sondheim and Furth, SRT',
    'Mikado': 'The Mikado by Gilbert and Sullivan, Ohio Light Opera',
    'RedTie': 'Red Tie Gala, Bradley University',
    'RockOfAges': 'Rock of Ages by Chris D\'Arienzo, SRT',
    'Suburbia': 'Suburbia by Eric Bogosian, Bradley University',
    'ThreePenny': 'The Threepenny Opera by Brecht and Weill, East Carolina University',
    'TrezHers': 'Trez\'hers Choregoraphed by Tommi Galaska, East Carolina University',
    'Turandot': 'Turandot by Puccini, Tulsa Opera'
  }
  
    for(const [title, caption] of Object.entries(showTitles)){
      createPage({
        path: title,
        component: require.resolve("./src/templates/show.js"),
        context: { title, caption },
      })
    }

  }
