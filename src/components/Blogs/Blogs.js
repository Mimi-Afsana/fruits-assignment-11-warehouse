import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs container mt-5">
      <div className="card border border-danger">
        <div className="card-body">
          <h5 className="card-title text-warning">
            <p className="text-success">Question 1: </p>
            Difference between javascript and nodejs ?
          </h5>
          <h6 className="card-text text-success">Javascript:</h6>
          <p>
            Javascript is a programming language that is used for writing
            scripts on the website. Javascript can only be run in the browsers.
            It is basically used on the client-side. Javascript is capable
            enough to add HTML and play with the DOM. Javascript can run in any
            browser engine as like JS core in safari and Spidermonkey in
            Firefox. Javascript is used in frontend development. Some of the
            javascript frameworks are RamdaJS, TypedJS, etc.
          </p>
          <h6 className="text-success">Node JS: </h6>
          <p>
            NodeJS is a Javascript runtime environment. We can run Javascript
            outside the browser with the help of NodeJS. It is mostly used on
            the server-side. Nodejs does not have capability to add HTML tags.
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript. Nodejs is used in server-side development. Some of the
            Nodejs modules are Lodash, express etc. These modules are to be
            imported from npm.
          </p>
        </div>
      </div>
      <div className="card border border-danger">
        <div className="card-body">
          <h5 className="card-title text-warning">
            <p className="text-success">Question 2: </p>
            When should you use nodejs and when should you use mongodb?
          </h5>
          <h6 className="text-success">Node JS: </h6>
          <p className="card-text">
            I used node.js for non-blocking, event-driven servers, due to its
            single-threaded nature. It's used for traditional web sites and
            back-end API services, but was designed with real-time, push-based
            architectures in mind.
          </p>
          <h6 className="text-success">MongoDB: </h6>
          <p className="card-text">
            MongoDB facilitate to store database in json(javascript object
            notation) (or simply when data in form of key value pair) this is
            very fast and efficient so I should use it when I have key value
            pair to store(json data).On MongoDB is I can store a collection
            inside another collection. I can also store a array inside a field.
            For all this purpose I can use MongoDB.
          </p>
        </div>
      </div>
      <div className="card border border-danger">
        <div className="card-body">
          <h5 className="card-title text-warning">
            <p className="text-success">Question 3: </p>
            Differences between sql and nosql databases.
          </h5>
          <h6 className="text-success">sql database: </h6>
          <p className="card-text">
            RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have
            fixed or static or predefined schema. These databases are not suited
            for hierarchical data storage. These databases are best suited for
            complex queries. Vertically Scalable. Follows ACID property.
          </p>
          <h6 className="text-success">nosql database: </h6>
          <p className="card-text">
            Non-relational or distributed database system. They have dynamic
            schema. These databases are best suited for hierarchical data
            storage. These databases are not so good for complex queries.
            Horizontally scalable. Follows CAP(consistency, availability,
            partition tolerance)
          </p>
        </div>
      </div>
      <div className="card border border-danger">
        <div className="card-body">
          <h5 className="card-title text-warning">
            <p className="text-success">Question 4: </p>
            What is the purpose of jwt and how does it work?
          </h5>
          <h6 className="text-success">purpose of jwt: </h6>
          <p className="card-text">
            The true purpose of JSON Web Tokens and a comparison of two
            approaches in authentication. JWTs are used as a secure way to
            authenticate users and share information.
          </p>
          <h6 className="text-success">How does jwt work: </h6>
          <p className="card-text">
            An access token is a special key created as a result of a correct
            user identification. It contains encoded data that will be used
            after decoding to identify the user. In this way you can avoid
            making redundant API requests. Typically, a private key, or secret,
            is used by the issuer to sign the JWT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
