/*
    Introduction & Background
    You've just been hired as a Smart Home Developer at "TechNest" - a startup that builds intelligent home automation systems. Your first project? Create a Smart Home Command Center that controls lights, temperature, security, and entertainment systems throughout the house.

    Here's the twist: Some functions need to be immediately available when the system boots up (like emergency protocols), while others are dynamically created based on user preferences and stored in variables for flexibility. This is where understanding function declarations vs function expressions becomes crucial!

    Your command center needs to handle both pre-defined commands and user-customizable actions. Ready to build the brain of a smart home?

    What You'll Build
    A dynamic Smart Home Command Center that:

    Uses function declarations for core system functions (available immediately)
    Uses function expressions for user-customizable actions (stored in variables)
    Controls different home devices with appropriate function types
    Handles both pre-defined and dynamic commands
    Demonstrates when to use each function type effectively
    Constraints
    1. Function Declarations (must be available immediately):

    turnOnLights(room) - Core lighting function
    setSecurityMode(mode) - Essential security function
    emergencyShutdown() - Critical safety function
    2. Function Expressions (stored in variables for flexibility):

    setMoodLighting - Dynamic mood function stored in variable
    customTemperature - User-defined temperature function
    playMusic - Entertainment function that can be reassigned
    3. Technical requirements:

    Use function declarations for core system functions
    Use function expressions for customizable features
    Store function expressions in const variables
    Follow camelCase naming convention
    Functions should return appropriate messages
    Do not use var
    4. Logic requirements:

    Function declarations should handle essential home functions
    Function expressions should handle user-customizable features
    Both types should accept parameters and return meaningful responses
    Include at least one arrow function expression
    Demonstrate hoisting behavior appropriately
    Sample Output
    // Function declarations work immediately (due to hoisting)
    console.log(turnOnLights("living room")); 
    // "Lights turned on in living room"

    console.log(setSecurityMode("home")); 
    // "Security mode set to: home"

    // Function expressions work after declaration
    console.log(setMoodLighting("romantic"));
    // "Mood lighting set to: romantic"

    console.log(customTemperature(72));
    // "Temperature set to 72°F"

    console.log(playMusic("jazz"));
    // "Now playing: jazz"

    console.log(emergencyShutdown());
    // "Emergency shutdown activated - all systems offline"
    Submission Guidelines
    Implement 3 function declarations for core system functions
    Implement 3 function expressions stored in const variables
    Use at least one arrow function expression
    Test hoisting behavior by calling functions before they're declared
    Follow naming conventions - use camelCase for all functions
    Return meaningful messages from all functions
    Accept parameters where appropriate and use them in the function logic
    Success Tips
    Start with function declarations: These are hoisted and available immediately
    Test hoisting: Try calling declared functions before they're defined
    Use const for expressions: Store function expressions in const variables
    Think about timing: When do you need the function to be available?
    Consider flexibility: Which functions might need to be reassigned later?
    Test incrementally: Write one function at a time and test it
    Use meaningful parameters: Make your functions accept relevant data
*/

// Function Declarations (hoisted and available immediately)
function turnOnLights(room) {
    return `Lights turned on in ${room}`;
}

function setSecurityMode(mode) {
    return `Security mode set to: ${mode}`;
}

function emergencyShutdown() {
    return "Emergency shutdown activated - all systems offline";
}

// Function Expressions (stored in const variables)
const setMoodLighting = function(mood) {
    return `Mood lighting set to: ${mood}`;
}

const customTemperature = function(temp) {
    return `Temperature set to ${temp}°F`;
}

const playMusic = (genre) => {
    return `Now playing: ${genre}`;
}

// Testing the functions
console.log(turnOnLights("living room")); 
console.log(setSecurityMode("home"));
console.log(setMoodLighting("romantic"));
console.log(customTemperature(72));
console.log(playMusic("jazz"));
console.log(emergencyShutdown());

// Testing hoisting behavior
console.log(turnOnLights("kitchen")); // Should work due to hoisting
// console.log(setMoodLighting("chill")); // Uncommenting this line would cause an error since it's not hoisted

// Note: The line above is commented out to avoid runtime error. Function expressions are not hoisted.

// End of Smart Home Command Center code