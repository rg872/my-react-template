import React from 'react';
import SectionHelloworld from '@components/section-helloworld/section-helloworld.components';
import Smile from '@images/smiley-man.jpg';

export default function App() {
  return (
    <div>
      <SectionHelloworld title={'HELLO WORLD'} message={'this is my react project template !'} />
      <img src={Smile} style={{ width: '350px', height: '250px' }} />
    </div>
  );
}
