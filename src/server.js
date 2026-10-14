/**
 * Starts the REST API on port 3000, or on the port set in PORT.
 */
import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Hex to RGB API listening on http://localhost:${port}`);
});
