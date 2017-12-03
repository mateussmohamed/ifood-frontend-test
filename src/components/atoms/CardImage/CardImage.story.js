import { storiesOf } from '@storybook/react';
import React from 'react';
import CardImage from './index';

const stories = storiesOf('CardImage', module);

const imageUrl =
  'http://img.wennermedia.com/920-width/rs-rihanna-anti-5f7d6f87-8c71-4389-b483-789925e27ff8.jpg';

stories
  .add('whit src prop and default width', () => <CardImage src={imageUrl} />)
  .add('whit src and width prop', () => (
    <div>
      <div style={{ float: 'left' }}>
        <h1>400x400</h1>
        <CardImage src={imageUrl} width="400" />
      </div>
      <div style={{ float: 'left' }}>
        <h1>200x200</h1>
        <CardImage src={imageUrl} width="200" />
      </div>
      <div style={{ float: 'left' }}>
        <h1>100x100</h1>
        <CardImage src={imageUrl} width="100" />
      </div>
    </div>
  ));
