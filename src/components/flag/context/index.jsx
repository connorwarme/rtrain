import { useState, useEffect, createContext } from 'react'
import featureFlagApiCall from '../data'

export const FeatureFlagContext = createContext(null)

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [enabledFlags, setEnabledFlags] = useState({})

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true)
      const response = await featureFlagApiCall()
      setEnabledFlags(response)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeatureFlags()
  }, [])
  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export default FeatureFlagGlobalState
