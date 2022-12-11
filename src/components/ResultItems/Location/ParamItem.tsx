import { Text } from "react-native";
import { contrastColor } from 'contrast-color';

import colorsParameters from "../../../constants/colorsParameters";
import { Parameters } from "./Location";
import { useTheme } from "@react-navigation/native";
import { useParameterStyles } from "./Location.styles";

interface ParamItemProps {
  paramId: string,
  paramLabel: string,
  params: Parameters
}

const ParamItem: React.FC<ParamItemProps> = ({ paramId, paramLabel, params }) => {
  const theme = useTheme();
  const styles = useParameterStyles(theme);

  return (
    <Text 
      style={[
        styles.parameter, 
        {
          backgroundColor: colorsParameters[paramId],
          color: contrastColor({ bgColor: colorsParameters[paramId] }),
        },
        paramId === Object.keys(params)[0] ? { marginLeft: 0 } : null
      ]}
    >
      {paramLabel}
    </Text>
  );
}
 
export default ParamItem;