exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const showTitles = [
    'AddingMachine',
    'Arcadia',
    'Cabaret', 
    'Consumption',
    'Deathtrap',
    'Dracula',
    'ElephantMan',
    'Fallout',
    'ForbiddenPlanet',
    'Furies',
    'Giovanni',
    'GuysAndDolls',
    'LasMeninas',
    'Merrily',
    'Mikado',
    'RedTie',
    'RockOfAges',
    'Suburbia',
    'ThreePenny',
    'TrezHers',
    'Turandot'
  ]
  
  showTitles.forEach(show => {
    createPage({
      path: show,
      component: require.resolve("./src/templates/show.js"),
      context: { title: show },
    })
  })

  }
