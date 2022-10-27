import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <Accordion
      className="mx-auto"
      style={{ width: "75%" }}
      defaultActiveKey={["0"]}
      alwaysOpen
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Cors?</Accordion.Header>
        <Accordion.Body>
          Cross-origin resource sharing (CORS) is a browser security feature
          that restricts cross-origin HTTP requests that are initiated from
          scripts running in the browser. <br /> If your REST API's resources
          receive non-simple cross-origin HTTP requests, you need to enable CORS
          support.CORS is an HTTP-header based mechanism that allows a server to
          indicate any origins <br /> (domain, scheme, or port) other than its
          own from which a browser should permit loading resources.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Why we use firebase whereas there are too many option?{" "}
        </Accordion.Header>
        <Accordion.Body>
          There are so many Web Authentication site but Firebase is very high
          secure.The Firebase Realtime Database lets you build rich,
          collaborative applications by allowing secure access to the database
          directly from client-side code.It allows real-time database
          connection, which means multiple users can see the changes in the data
          when the data gets created or edited. Data transmission is handled
          with web sockets so you don't have to send requests to get new data,
          you only need to subscribe once.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How privet route Work in react?</Accordion.Header>
        <Accordion.Body>
          The private route component is used to protect selected pages in a
          React app from unauthenticated users.Protected routes are those routes
          that only grant access to authorized users. This means that users must
          first meet certain conditions before accessing that specific route.
          For instance, your application can require only logged-in users be
          able to visit the dashboard page.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Nodejs? How it Works? </Accordion.Header>
        <Accordion.Body>
          Node. js is a popular programming environment that can be used for
          building high-scale applications that need to support multiple
          concurrent requests. Single-threaded non-blocking I/O makes it an
          excellent choice for both real-time and data streaming
          applications,etc. Node JS Web Server internally maintains a Limited
          Thread pool to provide services to the Client Requests. Node JS Web
          Server receives those requests and places them into a Queue. It is
          known as “Event Queue”. Node JS Web Server internally has a Component,
          known as “Event Loop”.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
