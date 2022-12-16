import { useTheme } from "@react-navigation/native";
import Animated, { interpolate, interpolateNode, multiply } from "react-native-reanimated";
import CustomText from "../../components/CustomText/CustomText";
import { useHeaderStyles } from "./Home.styles";
import SearchButton from "./SearchButton";

interface HomeHeaderProps {
  scrolling: Animated.Node<number>
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ scrolling }) => {
  const theme = useTheme();
  const styles = useHeaderStyles(theme);

  const diffClamp = Animated.diffClamp(scrolling, 0, 120);

  const translation = interpolateNode(diffClamp, {
    inputRange: [100, 220],
    outputRange: [0, -120]
  });

  return (
    <Animated.View style={[styles.top, {transform: [{translateY: translation}]}]}>
      <CustomText style={styles.appName}>Air Quality Now</CustomText>
      <SearchButton />
    </Animated.View>
  );
}
 
export default HomeHeader;