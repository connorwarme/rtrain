const dummyApiResponse = {
  accordion: false,
  generator: true,
  color: true,
  theme: true,
  tabs: true,
}

const featureFlagApiCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 2500)
    else reject('An error occurred. Please try again.')
  })
}

export default featureFlagApiCall
