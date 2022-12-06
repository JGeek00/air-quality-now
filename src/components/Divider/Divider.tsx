import { StyleSheet, View } from "react-native";
import { lightTheme } from "../../config/theme";

export enum Direction {
  "horizontal", 
  "vertical"
}

interface DividerProps {
  type: Direction
  style?: object
}

const Divider: React.FC<DividerProps> = ({type, style}) => {
  return (
    <View style={[
      type === Direction.horizontal ? styles.horizontal : styles.vertical,
      style
    ]}></View>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
    height: 1,
    borderTopColor: lightTheme.divider.color,
    borderTopWidth: 1,
    marginLeft: 6,
    marginRight: 6
  },
  vertical: {
    height: '100%',
    width: 1,
    borderLeftColor: lightTheme.divider.color,
    borderLeftWidth: 1,
    marginLeft: 6,
    marginRight: 6
  }
});
 
export default Divider;