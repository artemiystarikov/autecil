/**
 * Function to extract and process properties from an object.
 *
 * @param {Object} spec - The object containing the properties.
 * @returns {Array} - An array of processed property values.
 */
function objectProperty(spec) {
    // Initialize an empty array to hold the processed property values
    const processedProperties = [];

    // Iterate over the properties of the object
    for (const key in spec) {
        if (spec.hasOwnProperty(key)) {
            // Process the property value (example: convert all values to strings)
            const processedValue = String(spec[key]);
            // Add the processed value to the array
            processedProperties.push(processedValue);
        }
    }

    // Return the array of processed property values
    return processedProperties;
}

// Example usage:
const spec = {
    name: 'John Doe',
    age: 30,
    profession: 'Developer'
};

const result = objectProperty(spec);
console.log(result); // Output: ["John Doe", "30", "Developer"]
