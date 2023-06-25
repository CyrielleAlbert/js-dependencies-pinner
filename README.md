[![NPM Version](https://img.shields.io/npm/v/@cyriellealbert/js-dependencies-pinner.svg)](https://www.npmjs.com/package/@cyriellealbert/js-dependencies-pinner)
![NPM Downloads](https://img.shields.io/npm/dw/@cyriellealbert/js-dependencies-pinner)
![NPM License](https://img.shields.io/npm/l/@cyriellealbert/js-dependencies-pinner)
[![Twitter](https://img.shields.io/twitter/follow/cyrielle_al.svg?style=social&label=@cyrielle_al)](https://twitter.com/cyrielle_al)

# JS Dependencies Pinner

The JS Dependencies Pinner is an NPX script that synchronizes and pins the dependencies in the `package.json` file with the versions specified in the `package-lock.json` file. This script ensures that your project's dependencies are consistently maintained and that all team members have the same versions of the dependencies installed.

## Features

- Synchronizes dependencies in `package.json` with `package-lock.json`
- Pins the exact versions specified in `package-lock.json`
- Easy to use with a single command
- Works for both local and global installations

## Installation

To use the JS Dependencies Pinner, you need to have Node.js installed on your machine. If you don't have Node.js, you can download and install it from the official website: [Node.js Downloads](https://nodejs.org/en/download/).

Once you have Node.js installed, you can run the following command to install the Package Dependency Synchronizer globally:

```shell
npm install -g @cyriellealbert/js-dependencies-pinner
```

Alternatively, you can use NPX to run the script without installing it globally:

```shell
npx @cyriellealbert/js-dependencies-pinner
```

## Usage

To synchronize and pin the dependencies in your `package.json` file with the versions from `package-lock.json`, simply navigate to your project's root directory and run the following command:

```shell
npx @cyriellealbert/js-dependencies-pinner
```

The script will automatically read the dependencies from `package-lock.json` and update the versions in `package.json`. It will also generate a backup of your original `package.json` file with the suffix `.bak` in case you want to revert the changes.

## Contribution

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This script is inspired by the need to keep package dependencies consistent and avoid version mismatches.
- Special thanks to the open-source community for their contributions and feedback.

## Contact

If you have any questions or need further assistance, feel free to reach out to [cyriellehelenealbert@gmail.com](mailto:cyriellehelenealbert@gmail.com).

---

Please make sure to update the contact information, license details, and any other relevant sections with your own information. Also, consider adding examples, troubleshooting tips, or any other information that might be helpful to users of your script.
