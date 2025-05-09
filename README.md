# Pwrdex - Password Generator

A modern, secure password generator built with React Router and Tailwind CSS. PWRdex helps users create strong, customizable passwords with a clean and intuitive interface.

## Features

- **Customizable Password Generation**: Adjust password length from 4 to 32 characters
- **Character Set Options**: Include or exclude uppercase letters, lowercase letters, numbers, and special symbols
- **Password Strength Indicator**: Real-time feedback on password strength
- **One-click Copy**: Easily copy passwords to clipboard
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean interface inspired by Daria Andrikevych's design

## Tech Stack

- **Framework**: React Router 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/ui
- **Icons**: Lucide Icons
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rizkraf/pwrdex.git
   cd pwrdex
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser to [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal)

## Build and Deployment

To build the project for production:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm start
```

## Project Structure

- `/app` - Main application code
  - `/components` - Reusable UI components
  - `/password-generator` - Password generator implementation
  - `/routes` - Application routes
- `/public` - Static assets
- `/server` - Server-side code for Netlify functions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- UI design inspired by [Daria Andrikevych](https://dribbble.com/shots/25772676-Password-generator)
- Built with [React Router 7](https://reactrouter.com/)
- UI components by [Shadcn/ui](https://ui.shadcn.com/)
