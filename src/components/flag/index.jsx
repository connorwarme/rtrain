import { useContext } from 'react'
import { FeatureFlagContext } from './context'
import Accordion from '../accordion/index'
import QRGenerator from '../generator/index'
import RandomColor from '../color/index'
import LightDark from '../theme/index'
import DynamicTabs from '../tabs/index'

const FeatureFlag = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagContext)

  const componentsToRender = [
    {
      key: 'accordion',
      component: <Accordion />,
    },
    {
      key: 'generator',
      component: <QRGenerator />,
    },
    {
      key: 'color',
      component: <RandomColor />,
    },
    {
      key: 'theme',
      component: <LightDark />,
    },
    {
      key: 'tabs',
      component: <DynamicTabs />,
    },
  ]

  if (loading) {
    return <h1>Content is loading, please wait...</h1>
  }
  return (
    <div className="flex flex-col gap-5">
      <h1>Feature Flag</h1>
      {componentsToRender.map((item) =>
        enabledFlags[item.key] ? item.component : null
      )}
    </div>
  )
}

export default FeatureFlag
