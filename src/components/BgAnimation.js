import React from 'react';

const BgAnimation = (props) => {
  const inputValue = props.text;

  const bgAniWrapList = [];
  for (let i = 0; i < 5; i++) {
    const bgAniTextList = [];
    for (let j = 0; j < 2; j++) {
      bgAniTextList.push(<div className="bgAniText">{inputValue}</div>);
    }
    bgAniWrapList.push(<div className="bgAniWrap">{bgAniTextList}</div>);
  }

  return <div className="bgAniContainer absolute">{bgAniWrapList}</div>;
};

export default BgAnimation;
