import { Text } from "react-native";
import { contrastColor } from 'contrast-color';

import colorsParameters from "../../../constants/colorsParameters";
import styles from './Location.styles';
import { Parameters } from "./Location";

interface ParamItemProps {
  paramId: string,
  paramLabel: string,
  params: Parameters
}

const ParamItem: React.FC<ParamItemProps> = ({ paramId, paramLabel, params }) => {
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