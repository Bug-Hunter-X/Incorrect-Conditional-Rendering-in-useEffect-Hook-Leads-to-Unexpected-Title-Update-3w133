# Incorrect Conditional Rendering in useEffect Hook

This example demonstrates a common error in React's `useEffect` hook where conditional rendering logic within the effect's callback leads to unexpected behavior. The component's title only updates when the count is greater than 0, resulting in the title remaining unchanged when the count is reset to 0.

## Bug Description
The `useEffect` hook updates the document title only when the `count` is greater than 0.  If the count is 0, or decreased to 0, the title will not be updated to reflect the change. This creates an inconsistency between the displayed count and the document title.

## Solution
The solution involves ensuring that the `useEffect` runs every time `count` changes (by including count in the dependency array) and handles the title update regardless of the count's value.  We can set it to a default value if the count is 0. 