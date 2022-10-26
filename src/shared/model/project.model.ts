import {IProjectSeason} from 'app/shared/model/project-season.model';
import {IProjectType} from 'app/shared/model/project-type.model';
import {IArrangementDetails} from "app/shared/model/arrangement.model";

export interface IProject {
  id?: number;
  hasArrangement?: boolean;
  name?: string;
  description?: string | null;
  storey?: number;
  totalSquare?: number;
  roofWindowNumber?: number;
  roofSquare?: number;
  windowNumber?: number;
  roomNumber?: number;
  numberOfExteriorDoor?: number;
  numberOfInteriorDoor?: number;
  bathroomNumber?: number;
  totalBasePrice?: number;
  facadeSquare?: number;
  internalWall?: number;
  outerWall?: number;
  floorThickness?: number;
  projectType?: IProjectType;
  projectTypeId?: number;
  projectSeason?: IProjectSeason;
  sections?: any;
  psdImageList?: any;
  isActive?: boolean;
  baseLayerPath?: any;
  psdImagePath?: any;
  positionLeft?: any;
  positionTop?: any;
  price?: number;
  project?: any;
  arrangementName?: string;
  arrangementType?: any;
  arrangementDetails?: IArrangementDetails[];
  minPrice?: number;
  objectConstructionTypeId?: any;
}

export const defaultValue: Readonly<IProject> = {
  arrangementDetails: [],
  sections: [
    {
      sectionType: '',
      psdImagePath: '',
      sectionTypeId: 3,
      subsections: [
        {
          subsectionTypeId: 8,
          components: [
            {
              componentTypeId: 25,
              componentProperties: [
                {
                  componentPropertyTypeId: 3,
                  componentPropertyOptions: [
                    {}
                  ]
                }
              ]
            },
            {
              componentTypeId: 26,
              componentProperties: [
                {
                  componentPropertyTypeId: 13,
                  componentPropertyOptions: [
                    {}
                  ]
                }
              ]
            },
            {
              componentTypeId: 27,
              componentProperties: [
                {
                  componentPropertyTypeId: 15,
                  componentPropertyOptions: [
                    {}
                  ]
                }
              ]
            },
            {
              componentTypeId: 4,
              componentProperties: [
                {
                  componentPropertyTypeId: 9,
                  componentPropertyOptions: [
                    {}
                  ]
                }
              ]
            }
          ]
        }
      ],
      isObligatory: true
    }
  ],
  psdImageList: {},
};
