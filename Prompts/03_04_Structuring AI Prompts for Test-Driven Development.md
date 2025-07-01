# Structured Prompt for Copilot

Develop a React component/function following the Test-Driven Development (TDD) methodology, ensuring robust, readable, and well-tested code.

## Required Tools

- **Testing Framework**: Vitest (v1.0+)
- **Testing Library**: React Testing Library + Jest DOM
- **Framework**: React 18+ with hooks
- **Language**: JavaScript

## Steps

### 1. Red Phase:

- Describe the expected behavior of the feature using tests.
- Follow the AAA pattern (Arrange, Act, Assert).
- Use descriptive test names.
- Mock external dependencies when necessary.
- Cover all requested functionalities with corresponding tests.
- Implement the tests using Vitest and React Testing Library.
- Ensure the written tests fail initially when run.

### 2. Green Phase:

- Generate the minimum code required for the test to pass without errors.
- Make sure the code works, but prioritize readability.
- Use React with hooks when appropriate.
- Include basic error handling.
- Ensure all tests run successfully.
- Add comments to your code identifying suggestions and changes made.

### 3. Refactor Phase:

- It is not necessary to implement this phase in your response; it will be handled later.

## Response Format

- Show both the tests and the code in the chat.
- Structure the tests and code clearly, specifying each phase.
- Include relevant comments within the code.

## Example

### Writing the test: (Red Phase)

```javascript
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import MyComponent from './MyComponent';

/// Checks that the component displays the expected text
it('should display the correct text', () => {
  render(<MyComponent />);
  const element = screen.getByText(/expected text/i);
  expect(element).toBeInTheDocument();
});
````

**Explanation:**
I’ve written this test to verify that:

[List the goals of the tests]

### Writing the implementation: (Green Phase)

```javascript
import React from 'react';

function MyComponent() {
  // Implementation of the component that displays the expected text
  return <div>expected text</div>;
}

export default MyComponent;
```

**Explanation:**
This code implements the following features:

[List the implemented features]

## Notes

* Ensure the tests cover all requested acceptance criteria.
* Add comments in the code to clarify intentions and suggest improvements.
* Prioritize simplicity and readability.
* Always use the chat only to display code suggestions.
* You do not need to include the refactor phase in your responses.
