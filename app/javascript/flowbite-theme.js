const theme = {
  sidebar: {
    base: "fixed top-0 left-0 z-40 h-screen transition-transform",
    collapsed: {
      on: "-translate-x-full",
      off: "translate-x-0"
    },
    inner: "h-full overflow-y-auto overflow-x-hidden bg-gray-800 py-4 px-3",
    collapsed: {
      on: "hidden",
      off: "block"
    },
    list: "space-y-2 font-medium",
    item: {
      base: "flex items-center justify-between p-2 text-gray-300 hover:bg-gray-700 rounded-lg group",
      active: "bg-gray-700",
      collapsed: {
        on: "hidden",
        off: "block"
      }
    },
    itemGroup: "mt-4 space-y-2",
    icon: {
      base: "h-5 w-5 text-gray-400 transition duration-75 group-hover:text-white",
      active: "text-white"
    }
  },
  button: {
    base: "text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center",
    pill: "rounded-full",
    size: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
      xl: "px-6 py-3 text-base"
    },
    color: {
      primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
      secondary: "text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800"
    }
  },
  alert: {
    base: "p-4 text-sm rounded-lg",
    color: {
      info: "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      success: "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
      warning: "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error: "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800"
    }
  }
};

export default theme;
