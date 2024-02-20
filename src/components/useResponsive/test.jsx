import useResponsive from '.'

const UseResponsiveTest = () => {
  const { windowSize } = useResponsive()

  return (
    <>
      <div>
        <p>The window has the following dimensions</p>
        <p>Height: {windowSize.height}</p>
        <p>Width: {windowSize.width}</p>
      </div>
    </>
  )
}

export default UseResponsiveTest
