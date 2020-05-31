import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//components
import MenuItem from '../menu-item/menu-item.component';
//selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ section }) => (
  <div className='directory-menu'>
    {section.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
