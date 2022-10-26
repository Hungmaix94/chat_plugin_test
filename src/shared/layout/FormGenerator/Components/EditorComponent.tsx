import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './editor-draft.scss';
import { translate } from 'app/shared/layout/Translation/translate';
import { AvField } from 'availity-reactstrap-validation';
import { debounce } from 'lodash';

interface IEditor {
  html?: string;
  onChange?: any;
  validate?: any;
  label?: any;
}

const EditorComponent = ({ html, onChange, validate, label }: IEditor) => {
  const [editorState, setEditorState] = useState();

  const onEditorStateChange = editorStateData => {
    setEditorState(editorStateData);
    onChangeEditor(editorStateData);
  };

  useEffect(() => {
    if (html) {
      const contentBlock = htmlToDraft(html);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks, contentBlock?.entityMap);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [html]);

  const onChangeEditor = debounce(function (e) {
    onChange && onChange(draftToHtml(convertToRaw(e.getCurrentContent())));
  }, 500);

  return (
    <div className="editor-component">
      <div className={'editor-label'}>{!!label && label}</div>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
        toolbar={{
          fontFamily: { options: ['DMSans', 'DM Serif Display', 'Arial'] },
        }}
      />
      {validate && (
        <AvField
          errorMessage={translate('global.messages.validate.invalidField') || 'This field is invalid'}
          type="hidden"
          name={'required'}
          value={html ? html : ''}
          validate={validate}
        />
      )}
    </div>
  );
};

export default EditorComponent;
