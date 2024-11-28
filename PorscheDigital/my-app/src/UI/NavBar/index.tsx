import './styles.css';
import { PIcon } from '@porsche-design-system/components-react';

const index = () => {
  return (
    <div className="bottom-nav">
      <ul className="bottom-nav-list">
        <li><PIcon theme="auto" size="x-large" name="home" aria={{ 'aria-label': 'Home icon' }} /></li>
        <li><PIcon theme="auto" size="x-large" name="car" aria={{ 'aria-label': 'Car icon' }} /></li>
        <li><PIcon theme="auto" size="x-large" name="user" aria={{ 'aria-label': 'User icon' }} /></li>
      </ul>
    </div>
  );
};

export default index;