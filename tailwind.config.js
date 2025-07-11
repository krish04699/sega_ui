module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600 - Medical blue for trust and authority
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        secondary: {
          DEFAULT: "#EA580C", // orange-600 - Warm orange for approachability
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        accent: {
          DEFAULT: "#059669", // emerald-600 - Natural green for therapy highlights
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        background: "#FAFAFA", // gray-50 - Soft off-white
        surface: "#FFFFFF", // white - Pure white for content cards
        text: {
          primary: "#1F2937", // gray-800 - Near-black with warmth
          secondary: "#6B7280", // gray-500 - Medium gray for hierarchy
        },
        success: "#10B981", // emerald-500 - Vibrant green for positive actions
        warning: "#F59E0B", // amber-500 - Amber for important notices
        error: "#EF4444", // red-500 - Clear red for validation
        border: {
          DEFAULT: "#E5E7EB", // gray-200 - Light gray for minimal borders
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 2.25rem)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'pulse-slow': 'pulse 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-out-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      ringWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}