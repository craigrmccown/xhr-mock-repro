import React, { useEffect } from 'react';

const getRequest = url => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send(null);
}

const Container = () => {
  useEffect(() => {
    getRequest('https://fullstory.com/foo')
  }, [])

  return <div>Foo</div>
}

export default Container;
