# React Native Reanimated Tree Shaking Playground

Here we can test `react-native-reanimated`'s bundle size.

- 🎙 Discussion [here](https://github.com/software-mansion/react-native-reanimated/discussions/2843)
- 🗺 Progress [here](https://github.com/nandorojo/reanimated-tree-shaking/issues/1)

## Instructions

1. `git clone https://github.com/nandorojo/reanimated-tree-shaking.git`
2. `yarn`
3. `yarn dev` to view the website locally on `localhost:3000`
4. `yarn analyze` to view the bundle size results (it will open automatically in
   your browser).

   a. Be sure to look in the logs in your terminal to see page sizes too.

5. Open `lib/react-native-reanimated` and edit the `src` folder to see changes, and keep building.

## How I created this repo

1. `npx create-next-app --example with-react-native-web rea-tree`
2. `cd rea-tree`
3. `yarn add react-native-reanimated @expo/next-adapter`
4. `yarn add -D @next/bundle-analyzer next-transpile-modules`
5. Configure [`next.config.js`](/next.config.js) and
   [`babel.config.js`](/babel.config.js) by following the [Solito](https://solito.dev/starter)'s starter
   configuration.
6. Add `pages/reanimated.js`

a. Clone `pages/index.js`, use `Animated.View` instead of `View`

7. Copy `node_modules/react-native-reanimated` -> `lib/react-native-reanimated`

a. Removed all native code from `Common`, `ios` and `android` folders since these aren't used on Web

8. Alias imports from `react-native-reanimated` -> `lib/react-native-reanimated/src/Animated.js` in `next.config.js` so that we can debug more easily, since `node_modules` are cached and compiled.
