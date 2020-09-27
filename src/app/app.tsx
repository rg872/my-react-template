import React, { ReactElement, Suspense } from 'react';
import SectionErrorBoundary from '@components/section-error-boundary/section-error-boundary.component';
import Smile from '@images/smiley-man.jpg';

const SectionHelloworld = React.lazy(
  () => import('@components/section-helloworld/section-helloworld.components')
);

export default function App(): ReactElement {
  return (
    <div>
      <SectionErrorBoundary>
        <Suspense fallback={<h1>HOLD UP A MINUTE......</h1>}>
          <SectionHelloworld
            title={'HELLO WORLD'}
            message={'this is my react project template !'}
          />
          <img src={Smile} style={{ width: '350px', height: '250px' }} />
        </Suspense>
      </SectionErrorBoundary>
    </div>
  );
}
