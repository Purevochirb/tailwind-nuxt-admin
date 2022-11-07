/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'success': 'var(--color-success)',
        'warning': 'var(--color-warning)',
        'danger': 'var(--color-danger)',

        'primaryDark': 'var(--color-primaryDark)',
        'secondaryDark': 'var(--color-secondaryDark)',
        'successDark': 'var(--color-successDark)',
        'warningDark': 'var(--color-warningDark)',
        'dangerDark': 'var(--color-dangerDark)',

        'primarySoft': 'var(--color-primarySoft)',
        'secondarySoft': 'var(--color-secondarySoft)',
        'successSoft': 'var(--color-successSoft)',
        'warningSoft': 'var(--color-warningSoft)',
        'dangerSoft': 'var(--color-dangerSoft)',
      },
    },
  },
  plugins: [],
}
