## Instructions
To run:
```sh
npm i
npm run test
```

Example output:
```
> jest-repro@1.0.0 test /Users/craigmccown/Repos/jest-repro
> jest

 PASS  ./index.test.js
  <Container />
    ✓ sends a request (78 ms)

  console.error
    xhr-mock: A handler returned an error for the request.
    
      GET https://fullstory.com/foo HTTP/1.1
      
      Error: expect(received).toBe(expected) // Object.is equality
      
      Expected: "no"
      Received: "yes"
          at /Users/craigmccown/Repos/jest-repro/index.test.js:11:49
          at /Users/craigmccown/Repos/jest-repro/node_modules/jest-mock/build/index.js:444:39
          at /Users/craigmccown/Repos/jest-repro/node_modules/jest-mock/build/index.js:452:13
          at mockConstructor (/Users/craigmccown/Repos/jest-repro/node_modules/jest-mock/build/index.js:166:19)
          at /Users/craigmccown/Repos/jest-repro/node_modules/xhr-mock/lib/createMockFunction.js:23:24
          at /Users/craigmccown/Repos/jest-repro/node_modules/xhr-mock/lib/handle.js:24:24
    

      at CustomConsole.error (node_modules/@testing-library/react/dist/act-compat.js:53:34)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.242 s
Ran all test suites.
```
