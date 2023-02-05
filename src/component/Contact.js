import React from "react";

const Contact = () => {
  return (
    <div className="h-screen pt-2 pl-5">
      <p className="text-xl font-semibold underline">Email Id:</p>
      <a
        href={`mailto:contactlearnwebdevelopment@gmail.com?subject=ask%20query`}
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 hover:underline"
      >
        contactlearnwebdevelopment@gmail.com
      </a>
      <p className="text-xl font-semibold underline">telegram Id:</p>
      <a
        href={`https://t.me/codehangout`}
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 hover:underline"
      >
        https://t.me/codehangout
      </a>
    </div>
  );
};

export default Contact;
