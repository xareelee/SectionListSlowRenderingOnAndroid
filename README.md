# For issue report only

This repo is a demo for a bug issue in https://github.com/facebook/react-native/issues/14968.


## Issues

After building and running the React-Native app on iOS or Android from this repo, you'll find some issues:

1. The page is not fully loaded at the very beginning. It only renders some parts of rows, and it takes time to fully load those cells.
2. The `renderItem` callback in `<SectionList/>` will be called multiple time for the same cells/rows.
3. When you scroll the `<SectionList/>` on Android devices, it only update a few cells at a time. That's not smooth as on an iOS App and the UX is bad.
