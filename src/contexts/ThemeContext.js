import React, { Component, createContext } from 'react';

export const ThemeContext = createContext(); // Consumer and Provider

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };
  }
  render() {
    return (
      // whenever run createContext, get Provider
      // <ThemeContext.Provider value={{isDarkMode: this.state.dark}>{this.props.children}</ThemeContext.Provider>;
      <ThemeContext.Provider value={{ ...this.state, tastesLikeChicken: true }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
