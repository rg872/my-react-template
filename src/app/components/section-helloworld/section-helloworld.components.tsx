import React, { useState, useEffect, ReactElement } from 'react';
import { IProps } from './section-helloworld.interface';

import './section-helloworld.component.scss';

export default function SectionHelloworldComponent(props: IProps): ReactElement {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setMessage(props.message);
    setTitle(props.title);
  }, [message, title, props]);

  return (
    <div>
      <h1 className="title">{title}</h1>
      <h3 className="message">{message}</h3>
    </div>
  );
}
