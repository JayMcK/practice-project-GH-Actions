import { string } from 'prop-types';

import './HelpBox.css';

//new comment
function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
