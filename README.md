# React Native Reanimated Tree Shaking Playground

Here we can test `react-native-reanimated`'s bundle size.

## Instructions

1. Clone the repo
2. `yarn`
3. `yarn dev` to view the website locally on `localhost:3000`
4. `yarn analyze` to view the bundle size results (it will open automatically in
   your browser)

   a. Be sure to look in the logs at the resulting page sizes:

## Question

Should we copy `react-native-reanimated`'s code into this repo directly to make
testing easier? Currently it's in `node_modules`.

If you find changes aren't getting reflected when editing
`node_modules/react-native-reanimated`, you may need to clear the cache by
deleting the `.next` cache folder.

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
