import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import Translate from "app/shared/layout/Translation/translate";
import React from "react";
import { UncontrolledTooltip, Spinner } from "reactstrap";
import "../styles/fileLabel.scss";

interface IFileLabel {
  name?: string;
  acceptFile?: string;
  maxSize?: string;
  isLoading?: boolean;
}

const images = 'image/svg, image/png, image/jpeg';

export const FileLabel = ({ name, acceptFile = images, maxSize, isLoading = false }: IFileLabel) =>
  <div id="uploadTooltip" className="file-label">
    {
      name ?
        <>
          <FontAwesomeIcon icon={faFileImage}/><span>{name}</span>
        </> :
        <>

          <div className="upload-tooltip">
            <Translate contentKey="entity.action.dragAndDrop"/>
            <Translate
              className="additional mb-0" contentKey="entity.action.supports"
              interpolate={{ param: acceptFile }}
            />
            {
              maxSize && <Translate
                className="additional" contentKey="global.messages.validate.tooBigImageInfo"
                interpolate={{ max: maxSize }}
              />
            }
            <FontAwesomeIcon icon={faFolderOpen}/>
            <div className="button btn btn-first-type">
                {
                    isLoading ?  <Spinner style={{ width: '30px', height: '30px' }} /> : ""
                } <Translate contentKey="entity.action.browseFiles"/>
            </div>
          </div>
          <UncontrolledTooltip placement="top" target="uploadTooltip">
            <Translate contentKey="proEcoApp.service.importImage"/>
          </UncontrolledTooltip>
        </>
    }
  </div>

