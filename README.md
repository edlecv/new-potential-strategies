# Advanced Trading Strategies

This React component displays a comprehensive infographic of advanced trading strategies for position sizing. It includes seven different strategies with their formulas, descriptions, and logic, as well as usage recommendations.

## Features

- Modern, responsive design with a dark theme
- Seven detailed trading strategies:
  1. Adaptive Volatility Strategy (AVS)
  2. Market Regime Strategy (MRS)
  3. Modified Kelly Strategy (MKS)
  4. Fundamental Divergence Strategy (FDS)
  5. Adaptive Time Cycle Strategy (ATCS)
  6. Volatility Asymmetry Strategy (VAS)
  7. Dynamic Multi-Factor Strategy (DMS)
- Clear mathematical formulas with proper notation
- Usage recommendations section
- Fully responsive layout for all screen sizes

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/edlecv/new-potential-strategies.git
cd new-potential-strategies
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

The main component is located in `src/components/TradingStrategies.tsx`. To use it in your application:

```jsx
import TradingStrategies from './components/TradingStrategies';

function App() {
  return (
    <div className="App">
      <TradingStrategies />
    </div>
  );
}

export default App;
```

## Customization

You can customize the appearance by modifying the CSS variables in `src/components/TradingStrategies.css`:

```css
:root {
    --primary-bg: #1a1a2e;
    --card-bg: #16213e;
    --accent: #0f3460;
    --highlight: #e94560;
    --text-light: #f1f1f1;
    --text-muted: #b8b8b8;
    --formula-bg: rgba(15, 52, 96, 0.4);
    --card-border: #253555;
}
```

## VSCode Integration

This project is optimized for VSCode:

1. Open the project folder in VSCode
2. Install recommended extensions (ESLint, Prettier)
3. Use the integrated terminal to run development commands
4. The TypeScript configuration is already set up for optimal IntelliSense

## Strategy Details

Each trading strategy includes:

- **Description**: Brief explanation of the strategy's purpose
- **Formula**: Mathematical formula for position sizing
- **Parameters**: Detailed explanation of each variable
- **Logic**: The underlying reasoning and edge provided by the strategy

## License

This project is licensed under the MIT License - see the LICENSE file for details.
