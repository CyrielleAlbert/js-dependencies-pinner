const fs = require('fs/promises');

fs.readFile('./package.json')
  .then(data => {
    const package_json = JSON.parse(data);
    fs.readFile('./package-lock.json').then(data_2 => {
      const package_lock_json = JSON.parse(data_2);
      const dependencies = package_json.dependencies;
      Object.keys(dependencies).forEach(key => {
        dependencies[key] =
          package_lock_json.packages[`node_modules/${key}`].version;
      });
      console.log(dependencies);
      package_json.dependencies = dependencies;
      fs.writeFile('./package.json', JSON.stringify(package_json));
    });
  })
  .catch(error => {
    console.log('error');
  });
