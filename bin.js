#!/usr/bin/env node
const fs = require("fs").promises;

fs.readFile("./package.json")
  .then((data) => {
    const package_json = JSON.parse(data);
    fs.writeFile("./package.json.bak", JSON.stringify(package_json));
    fs.readFile("./package-lock.json").then((data_2) => {
      const package_lock_json = JSON.parse(data_2);
      const dependencies = package_json.dependencies;
      if (Object.keys(dependencies).length === 0) {
        console.log("No dependency to sync.");
      } else {
        Object.keys(dependencies).forEach((key) => {
          console.log(`Syncing dependency ${key}...`);
          dependencies[key] =
            package_lock_json.packages[`node_modules/${key}`].version;
        });
        package_json.dependencies = dependencies;
        fs.writeFile("./package.json", JSON.stringify(package_json))
          .then(() => {
            console.log("All dependencies have been successfully pinned.");
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      }
    });
  })
  .catch((error) => {
    console.log("error: ", error);
  });
