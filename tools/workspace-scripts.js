module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
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
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...New...': {
        script: `npx cowsay "New DOM Events 💎"`,
        description: ` 🔻 New`,
      },
      new: {
        clean: {
          script: 'nx run new:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run new:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run new:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Old...': {
        script: `npx cowsay "Old bespoke events 🏚"`,
        description: ` 🔻 Old`,
      },
      old: {
        clean: {
          script: 'nx run old:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run old:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run old:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
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
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
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
