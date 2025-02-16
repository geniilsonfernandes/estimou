const fs = require('fs')
const path = require('path')

const actionsDir = path.join(__dirname, 'src/actions')

fs.readdir(actionsDir, (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err)
    return
  }

  console.log('Arquivos em src/actions/:', files)
})
