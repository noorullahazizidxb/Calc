import ThemeSwitcher from "./ThemeSwitcher"

const Wrapper = ({ children }) => {
  return (
    <main className="wrapper" aria-label="Calculator">
      <header className="toolbar">
        <h1 className="title">Calculator</h1>
        <ThemeSwitcher />
      </header>
      {children}
    </main>
  )
}

export default Wrapper
