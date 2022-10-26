import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import ButtonLoading from 'app/shared/layout/ButtonLoading/ButtonLoading';

// Component for the form with to add more fields

interface IDynamicallyInputsProps {
  handleAddMore: (nameFields, newArray) => void;
  nameFields: string;
  emptyFieldsArray: Array<any>;
  prevArray: Array<any>;
  isReadOnly?: boolean;
  disableAddMore?: boolean;
}

interface IRemoveButton {
  handleRemoveItem: (nameFields, newArray) => void;
  nameFields: string;
  index: number;
  prevArray: Array<any>;
}

export const renderSeparator = i =>
  i > 0 && (
    <Col sm={12}>
      <div className="separator mb-3" />
    </Col>
  );

interface ISavePartButtonProps {
  updating: boolean;
  id: string;
  onChange?: () => void;
}

export const SavePartButton: React.FC<ISavePartButtonProps> = (props: ISavePartButtonProps) => {
  return (
    <Row>
      <Col sm={12} className="mb-2 float-right">
        <ButtonLoading
          color="outline-danger"
          classNames="float-right"
          text="salesbookApp.customer.home.saveEdit"
          id={props.id}
          updating={props.updating}
          onClick={props.onChange}
          disabled={props.updating}
        />
      </Col>
    </Row>
  );
};

export const RemoveButton: React.FC<IRemoveButton> = (props: IRemoveButton) => {
  const onClickRemove = event => {
    event.preventDefault();
    const { prevArray, index, handleRemoveItem, nameFields } = props;
    const newArray = [...prevArray];
    newArray.splice(index, 1);
    handleRemoveItem(nameFields, newArray);
  };

  return (
    <div className="wrapper-btn-addMore">
      <FontAwesomeIcon icon={faMinus} className="btn-addMore" onClick={onClickRemove} style={{ margin: 10 }} />
    </div>
  );
};

export class DynamicallyInputs extends React.Component<IDynamicallyInputsProps, any> {
  onClickAddMore = event => {
    event.preventDefault();
    const { emptyFieldsArray, prevArray, nameFields } = this.props;
    const newArray = [...prevArray, ...emptyFieldsArray];
    this.props.handleAddMore(nameFields, newArray);
  };

  render() {
    const { children, isReadOnly, disableAddMore } = this.props;
    return (
      <Row>
        {children}
        {!isReadOnly && (
          <>
            <Col sm={{ size: 6, offset: 6 }}>
              <div className="separator mb-3" />
            </Col>
            {!disableAddMore && (
              <div className="wrapper-btn-addMore">
                <FontAwesomeIcon icon="plus" className="btn-addMore" onClick={this.onClickAddMore} style={{ margin: 10 }} />
              </div>
            )}
          </>
        )}
      </Row>
    );
  }
}
