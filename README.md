# Person Management Form

This project demonstrates a simple form to manage a list of `Person` objects using JavaScript. Users can add new `Person` objects to an array, with checks for input validation and duplicate entries.

## Features

- **Create Person**: Adds a new `Person` object to the array.
- **Validation**: Ensures all fields are filled and prevents duplicate entries.
- **User Feedback**: Displays messages based on form submission status.

## How It Works

1. **Initialization**:
   - The `Person` class defines the structure of a person object with `firstName`, `lastName`, `age`, and `eyeColor`.
   - A predefined set of `Person` objects (`myFather`, `myMother`, `mySister`) is added to the `people` array.

2. **Form Interaction**:
   - Users can input details into text fields.
   - The form includes a button to submit the new person.

3. **Validation**:
   - The script checks that all input fields are filled before adding a new `Person`.
   - It also checks that no existing `Person` with the same details is already in the array.

4. **Feedback**:
   - The status of the form submission is displayed to the user.

## Code Explanation

### `Person` Class

Defines a `Person` with:
- `firstName`
- `lastName`
- `age`
- `eyeColor`

### Array Initialization

An array named `people` holds all `Person` objects. Initial values are added to this array.

### Event Listeners

- **Input Fields**: Hides the status message when any input field is clicked.
- **Submit Button**: Handles the form submission:
  - Retrieves values from input fields.
  - Validates the inputs.
  - Checks for duplicates.
  - Adds a new `Person` object to the `people` array if validation passes.
  - Displays appropriate messages based on the validation result.

## Usage

1. **Open**: Open the `index.html` file in a web browser.
2. **Fill Out the Form**: Enter details into the input fields.
3. **Submit**: Click the "Create Person" button to add the person to the array.
4. **View Feedback**: Messages will be displayed if fields are empty or if the person already exists.

## Files

- `index.html`: The HTML file containing the form.
- `app.js`: The JavaScript file containing the logic for managing `Person` objects and form interactions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
