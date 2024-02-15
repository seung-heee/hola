import React from 'react';

const BgAnimation = (props) => {
  const inputValue = props.text;

  const bgAniWrapList = [];
  for (let i = 0; i < 10; i++) {
    const bgAniTextList = [];
    for (let j = 0; j < 2; j++) {
      bgAniTextList.push(<div className="bgAniText groovyFont">{inputValue}</div>);
    }
    bgAniWrapList.push(<div className="bgAniWrap flex whitespace-nowrap opacity-40 text-8xl -rotate-12 my-9 flex-[0_0_auto] transition-[1s]">{bgAniTextList}</div>);
  }

  return <div className="bgAniContainer w-full h-screen absolute -mt-8">{bgAniWrapList}</div>;
};

export default BgAnimation;
