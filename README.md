# Simple Calculator

A clean and functional calculator built with HTML, CSS, and JavaScript. This project demonstrates basic web development skills and provides a user-friendly interface for performing arithmetic operations.

## 🌟 Features

- **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), and Division (÷)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clear Display**: Easy-to-read input and output display
- **Keyboard Support**: Use your keyboard for faster calculations
- **Error Handling**: Prevents invalid operations and displays appropriate messages
- **Modern UI**: Clean and intuitive user interface with smooth interactions

## 🚀 Demo

Open `index.html` in your web browser to start using the calculator.

## 📋 Prerequisites

To run this calculator, you only need:
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional dependencies or installations required!

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/albertjustin08/simple_calculator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd simple_calculator
   ```

3. Open `index.html` in your web browser:
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server package)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
simple_calculator/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Calculator logic and functionality
└── README.md           # Project documentation
```

## 🎨 Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling, layout, and responsive design
- **JavaScript (Vanilla)**: Calculator logic and interactivity

## 🔧 Usage

### Using the Mouse:
1. Click on the number buttons to input numbers
2. Click on an operator (+, -, ×, ÷) to select the operation
3. Click on another number
4. Click "=" to see the result
5. Click "C" to clear the display

### Using the Keyboard:
- **Numbers**: Press 0-9
- **Operators**: Press +, -, *, /
- **Equals**: Press Enter or =
- **Clear**: Press Escape or C
- **Decimal**: Press . (period)

## 💡 Example Operations

```
5 + 3 = 8
10 - 4 = 6
6 × 7 = 42
20 ÷ 4 = 5
```

## 🏗️ How It Works

### HTML Structure
The calculator interface consists of:
- A display screen for input and output
- Number buttons (0-9)
- Operator buttons (+, -, ×, ÷)
- Function buttons (=, C, .)

### CSS Styling
- Grid layout for button arrangement
- Responsive design using flexbox/grid
- Hover effects and transitions
- Custom color scheme

### JavaScript Logic
- Event listeners for button clicks
- Functions for arithmetic operations
- Display update mechanisms
- Error handling for division by zero
- Input validation

## 🎯 Key Features Explained

### Clear Function
Resets the calculator to its initial state, clearing all inputs and results.

### Decimal Support
Allows for decimal number calculations with proper validation to prevent multiple decimal points.

### Calculation Flow
Performs operations in sequence as entered (left-to-right evaluation) for straightforward calculations.

### Error Handling
- Division by zero protection
- Invalid input prevention
- Clear error messages

## 🌐 Browser Compatibility

This calculator works on all modern browsers:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 Future Enhancements

Potential features to add:
- [ ] Scientific calculator functions (sin, cos, tan, etc.)
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] History of calculations
- [ ] Theme switcher (light/dark mode)
- [ ] Advanced operations (square root, exponents, etc.)
- [ ] Unit conversion features
- [ ] Percentage calculations

## 📄 License

This project is open source. Feel free to use, modify, and distribute as needed.

## 👤 Author

**albertjustin08**

- GitHub: [@albertjustin08](https://github.com/albertjustin08)

## 🙏 Acknowledgments

- Inspired by classic calculator designs
- Built as a learning project for web development
- Thanks to the open-source community for inspiration

---

⭐ **If you find this project helpful, please consider giving it a star!** ⭐