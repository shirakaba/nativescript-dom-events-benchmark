module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description:
        'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...New...': {
        script: `npx cowsay "New DOM Events ๐"`,
        description: ` ๐ป New`,
      },
      new: {
        clean: {
          script: 'nx run new:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run new:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run new:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Old...': {
        script: `npx cowsay "Old bespoke events ๐"`,
        description: ` ๐ป Old`,
      },
      old: {
        clean: {
          script: 'nx run old:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run old:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run old:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@nativescript/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @nativescript/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@nativescript': {
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
