# Unhandled Database Error in Node.js Express App

This repository demonstrates a common error in Node.js applications: unhandled database errors.  The application attempts to query a database, but fails to properly handle potential errors, leading to crashes.

The `bug.js` file contains the faulty code.  The `bugSolution.js` file provides a corrected version that gracefully handles the error.

## Bug

The original code attempts to query a database but doesn't handle the scenario where the query fails (e.g., network issue, database offline). This leads to an uncaught exception and application termination.

## Solution

The solution includes error handling that prevents application crashes.  Upon error, a suitable HTTP status code and message are returned to the client, providing a better user experience.