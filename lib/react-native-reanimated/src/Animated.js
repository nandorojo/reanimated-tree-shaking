import createAnimatedComponent from './createAnimatedComponent';
import {
  addWhitelistedNativeProps,
  addWhitelistedUIProps,
} from './ConfigHelper';

import { Text } from './reanimated2/component/text'
import { View } from './reanimated2/component/view'
import { ScrollView } from './reanimated2/component/scroll-view'
import { Image } from './reanimated2/component/image'
import { FlatList } from './reanimated2/component/flat-list'

// const View = () => <></>

export {
  View, 
  Text,
  ScrollView, 
  Image, 
  FlatList,
}

 
const Animated = { 
  createAnimatedComponent,
  // configuration
  addWhitelistedNativeProps,
  addWhitelistedUIProps,
};

// export * from './reanimated2';
export default Animated;
