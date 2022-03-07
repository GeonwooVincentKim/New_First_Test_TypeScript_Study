// Example of Callback-Function
const f = (callback: () => void): void => callback()

// Real Code
export const init = (callback: () => void): void => {
    console.log("Default Initialization Finished.");
    callback()
    console.log("All Initialization Finished.")
}
