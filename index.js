import React, { useEffect } from 'react';

const postRequest = url => {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.send(JSON.stringify({ foo: true }));
}

const Container = () => {
  useEffect(() => {
    postRequest('https://fullstory.com/foo')
  }, [])

  return <div>Foo</div>
}

export default Container;
