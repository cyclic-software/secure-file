const fs = require('fs');

// Load package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Modify package.json
delete packageJson.devDependencies;
delete packageJson.scripts;

// Save package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
