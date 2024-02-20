import useFetch from '.'

const UseFetchTest = () => {
  const { data, isLoading, error } = useFetch(
    'https://dummyjson.com/products',
    {}
  )
  return (
    <>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Content is loading, please wait.</h1>}
      {data && data.products.length > 0 && (
        <div className="flex flex-col">
          <h1>Products from useFetch:</h1>
          {data.products.map((item, index) => {
            return <h1 key={index}>{item.title}</h1>
          })}
        </div>
      )}
    </>
  )
}

export default UseFetchTest
