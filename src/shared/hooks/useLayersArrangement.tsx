import { useAppSelector } from "app/config/store";
import { useEffect, useRef, useState } from "react";
import { uniq } from "lodash";

export const useLayers = ({ sectionIndex, subsections, arrangementDetails }) => {
  const projectData = useAppSelector(state => state.project.entity);
  const sections = projectData?.sections;
  const section = sections?.[sectionIndex];
  const fileSize = useRef<any>({});
  const buildingRef = useRef(null);
  const [layers, setLayers] = useState([]);
  const componentPropertyOptionIdArr =
    section?.subsections
      ?.flatMap(subsection => subsection?.components)
      ?.flatMap(component => component?.componentProperties)
      ?.flatMap(componentProperties => componentProperties.componentPropertyOptions) || [];
  const equipmentPropertyOptionIdArr =
    section?.subsections
      ?.flatMap(subsection => subsection.components)
      ?.flatMap(component => component?.equipments)
      ?.flatMap(equipment => equipment?.equipmentProperties)
      ?.flatMap(equipmentProperty => equipmentProperty?.equipmentPropertyOptions) || [];
  const optionArr = arrangementDetails?.map(arrangementDetail => arrangementDetail.imageLayer);
  const propertyOptions = uniq([...componentPropertyOptionIdArr, ...equipmentPropertyOptionIdArr]).map(propertyOption => ({
    ...propertyOption,
    visible: optionArr?.includes(propertyOption?.imageLayerName),
  }));

  useEffect(() => {
    if (propertyOptions) {
      setLayers(propertyOptions);
    }
  }, [sections]);

  return {
    layers,
    setLayers,
    fileSize,
    buildingRef,
  };
};
