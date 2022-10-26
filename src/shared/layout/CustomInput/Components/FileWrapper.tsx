import React, { FC, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import '../styles/fileWrapper.scss';
import { isEmpty, omit } from 'lodash';
import { AvField } from 'availity-reactstrap-validation';
import ModalTooBigPhoto from '../../ModalBigPhoto/modal-too-big-photo';
import { FileLabel } from "app/shared/layout/CustomInput/Components/FileLabel";

interface IFileWrapper {
  acceptFile?: string;
  id?: string;
  readOnly?: boolean;
  image?: any;
  setImage?: (item: any) => void;
  name?: string;
  validate?: any;
}

const images = 'image/svg, image/png, image/jpeg';
// 'image/*'
const FileWrapper: FC<IFileWrapper> = (
  {
    acceptFile = images,
    readOnly,
    image,
    setImage,
    name = 'file',
    id,
    validate
  }) => {
  const imageUrl = useMemo(() => (image ? (typeof image === 'string' ? image : URL.createObjectURL(image)) : null), [image]);
  const [errorSize, setErrorSize] = useState(false);
  const maxFileSize = validate?.maxSize?.value ? validate.maxSize.value * 1024 : false;
  const [validateInput, setValidateInput] = useState({});

  useEffect(() => {
    if (validate) {
      setValidateInput({ ...omit(validate, ['maxSize']) });
    }
  }, [validate]);

  const checkFileSize = file => {
    const fileSize = Math.round(file.size / 1024);
    const isValid = fileSize < maxFileSize;
    setErrorSize(!isValid);
    return isValid;
  };

  const onHandleChange = e => {
    e.persist();
    if (e.target.files?.[0]) {
      const fileValid = maxFileSize ? checkFileSize(e.target.files[0]) : true;
      if (fileValid) {
        setImage(e.target.files[0]);
      }
    }
  };

  const toggleOpenModalTooBigPhoto = value => () => setErrorSize(value);

  const handleRemoveLogo = () => {
    setImage(null);
  };

  return (
    <div className="file-wrapper w-100">
      {!readOnly && (
        <label>
          <input
            type="file"
            disabled={readOnly}
            name={name}
            id={id || `${name}-input-file`}
            accept={acceptFile}
            onChange={onHandleChange}
            className={`cover-parent `}
          />
          <FileLabel acceptFile={acceptFile} name={image?.name} maxSize={validate?.maxSize?.value || null}/>
          {!isEmpty(validate) &&
            <AvField type="hidden" name="required" value={image ? true : ''} validate={validateInput}/>}
        </label>
      )}
      {imageUrl && (
        <div className="file-image-wrapper">
          <img src={imageUrl} alt={name} id="imageTooltip"/>
          {!readOnly && <FontAwesomeIcon className="remove-icon" onClick={handleRemoveLogo} icon={faClose}/>}
        </div>
      )}
      <ModalTooBigPhoto
        toggleClose={toggleOpenModalTooBigPhoto(false)} isOpen={errorSize}
        max={validate?.maxSize?.value || null}
      />
    </div>
  );
};

export default FileWrapper;
