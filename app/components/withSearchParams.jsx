import { useSearchParams } from "react-router-dom";

import React, { Component } from "react";

export default function withSearchParams(Component) {
  return function ComponentWithSearchParams(props) {
    const [searchParams] = useSearchParams();

    return <Component {...props} router={{ searchParams: searchParams }} />;
  };
}
