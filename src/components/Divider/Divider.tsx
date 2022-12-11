import { Theme, useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export enum Direction {
  "horizontal", 
  "vertical"
}

interface DividerProps {
  type: Direction
  style?: object
}

const Divider: React.FC<DividerProps> = ({type, style}) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={[
      type === Direction.horizontal ? styles.horizontal : styles.vertical,
      style
    ]}></View>
  );
}

const useStyles = (theme: Theme) => StyleSheet.create({
  horizontal: {
    width: '100%',
    height: 1,
    borderTopColor: theme.colors.border,
    borderTopWidth: 1,
    marginLeft: 6,
    marginRight: 6
  },
  vertical: {
    height: '100%',
    width: 1,
    borderLeftColor: theme.colors.border,
    borderLeftWidth: 1,
    marginLeft: 6,
    marginRight: 6
  }
});
 
export default Divider;